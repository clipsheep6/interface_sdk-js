#!/usr/bin/env python
# coding=utf-8
"""
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
"""
import json
import os
import re
import shutil
import subprocess
import sys
from time import *

import pandas as pd
from guesslang import Guess
from styleframe import StyleFrame, Styler

from model.code_write import CodeWrite
from model.compile_project import CompileProject
from util.sample_tag import SampleTag
from util.speaker import speak_i
from util.system_dict import system_dict, no_test, special, repeat_definition, fileio, data_rdb, \
    instructions_for_use, \
    handling_import, handling_code, request
from util.utils import check_environment, del_folder_or_file


class MaterialDetection:
    def __init__(self):
        self.md_file_path = ''
        self.result_path = ''
        self.fileType = ''
        self.bat_path = ''
        self.special_flag = False
        self.result_dict = {"start_time": '', "end_time": '', 'fileNum': 0, 'total': 0, 'pass': 0, 'fail': 0,
                            'JSNum': 0,
                            'JSPass': 0, 'JSFail': 0, 'TSNum': 0, 'TSPass': 0, 'TSFail': 0, 'detail': [],
                            'file_detail': []}

        self.result_name = ''
        self.json_name = ''
        self.api_9 = []

    @staticmethod
    def is_number(line):
        for j in ['7+', '8+', '9+', '10+']:
            if j in line:
                return True
        return False

    @staticmethod
    def is_chinese(line):
        for i in line:
            if '\u4e00' < i < '\u9fff':
                return True
        return False

    @staticmethod
    def build_sdk(typescript_path, compile_path, result_path):
        # 将typescript复制到compiler工程中进行编译
        compile_ts_path = os.path.join(compile_path, 'deps')
        del_folder_or_file(os.path.join(compile_ts_path, 'ohos-typescript-4.2.3-r2.tgz'))
        shutil.copy(typescript_path, os.path.join(compile_ts_path, 'ohos-typescript-4.2.3-r2.tgz'))
        args = 'npm install'
        number = subprocess.Popen(args, cwd=compile_path, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
        out, err = number.communicate(timeout=50)
        out = bytes.decode(out, encoding='utf-8', errors='ignore')
        err = bytes.decode(err, encoding='utf-8', errors='ignore')
        if 'npm ERR!' in out + err:
            sys.exit()
        # 构建
        args = 'npm run build'
        number = subprocess.Popen(args, cwd=compile_path, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
        out, err = number.communicate(timeout=300)
        # 编译
        args = 'npm run compile'
        number = subprocess.Popen(args, cwd=compile_path, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
        out, err = number.communicate(timeout=300)
        # 编译出sdk设定文档中sdk位置
        sdk_path = os.path.join(compile_path, 'sample/build')
        local_sdk = os.path.join(result_path, 'project/eTSProject/local.properties')
        with open(local_sdk, 'w', encoding='UTF-8') as file_open:
            file_open.write('sdk.dir=' + sdk_path)

    def operation(self, md_file_path, result_path, bat_path, result_name, json_name, typescript_path, compiler_path):
        self.build_sdk(typescript_path, compiler_path, result_path)
        self.result_name = result_name
        self.json_name = json_name
        # 开始检查时间
        start_time = time()
        speak_i('start time: %s' % str(start_time))
        self.result_dict["start_time"] = start_time
        # 验证环境，检查运行环境，判断jdk版本和nodejs版本
        env_flag = check_environment()
        with open(md_file_path, 'r', encoding='utf8') as file_open:
            md_file_path = file_open.readlines()
        md_file_path = [MDFile.replace('\n', '') for MDFile in md_file_path if '.md' in MDFile]
        if env_flag:
            self.md_file_path = md_file_path
            self.result_path = result_path
            self.bat_path = bat_path
            # 检测md_file_path是文件还是文件夹
            if len(self.md_file_path) == 1:
                # 检测是否为不自动化的文档

                self.check_md_file(self.md_file_path[0])
            else:
                # 检测文件夹下的md文件
                self.check_folder()
        else:
            speak_i('请检查jdk和node.js是否安装，jdk版本必须是11版本')
        speak_i('result path: %s' % os.path.join(self.result_path, self.result_name))
        speak_i('json path: %s' % os.path.join(self.result_path, self.json_name))
        # 结束时间
        end_time = time()
        speak_i('end time: %s' % str(end_time))
        run_time = end_time - start_time
        speak_i('总共用时：%s' % str(run_time))
        self.result_dict["end_time"] = end_time
        # 将结果写入到json文件中
        self.write_result(result_path)

    def write_result(self, result_path):
        # 将结果写入到json文件中
        with open(result_path + '/' + str(self.json_name), 'w', encoding='utf-8') as file_open:
            file_open.write(json.dumps(self.result_dict, ensure_ascii=False))
        output_path = os.path.join(self.result_path, self.result_name)
        writer = StyleFrame.ExcelWriter(output_path)

        data_sheet_object1 = pd.DataFrame.from_dict(self.result_dict["file_detail"])
        try:
            data_sheet_object = pd.DataFrame.from_dict(self.result_dict["detail"])
            style_frame = StyleFrame(data_sheet_object)
            style_frame.set_column_width(columns=["E", "F", "H"], width=50)
            style_frame.set_column_width(columns=["B", "D"], width=20)
            style_frame.set_column_width(columns=["G"], width=20)
            style_frame.set_column_width(columns=["C"], width=30)
            style_frame.apply_column_style(cols_to_style=["code", 'compile_log', 'originally_code'],
                                           styler_obj=Styler(horizontal_alignment="left"), style_header=True)

            for i in range(1, len(self.result_dict["detail"]) + 2):
                style_frame.set_row_height(i, 30)
            style_frame.to_excel(writer, sheet_name='result', index=True, encoding='utf-8')
        except:
            speak_i('错误文档')
        style_frame1 = StyleFrame(data_sheet_object1)
        style_frame1.set_column_width(columns=["B"], width=50)
        style_frame1.set_column_width(columns=["C", "H"], width=25)
        style_frame1.set_column_width(columns=["I"], width=10)
        style_frame1.set_column_width(columns=["J", "D", "E", "F"], width=20)
        style_frame1.set_column_width(columns=["G"], width=20)

        for i in range(1, len(self.result_dict["file_detail"]) + 2):
            style_frame1.set_row_height(i, 30)

        style_frame1.to_excel(writer, sheet_name='passRate', index=True, encoding='utf-8')
        writer.save()

    # 检测文件夹下的md文档
    def check_folder(self):
        for md_path in self.md_file_path:
            # 检测是否为md并且排除不自动化的文档
            if md_path.endswith('.md'):
                self.result_dict["fileNum"] += 1
                self.check_md_file(md_path)

    # 检测md文件，打开一个新的
    def check_md_file(self, md_path):
        # 打开MD文件，查看内容
        code_num = 0
        pass_num = 0
        fail_num = 0
        nocheck_num = 0
        dp_nocheck_num = 0
        hml_name = ''
        css_name = ''
        js_name = ''
        speak_i("MD file path: " + md_path)

        with open(md_path, 'r', encoding='utf8', errors='ignore') as file_open:
            lines = file_open.readlines()
        # 添加子系统验证
        md_path_index = md_path.rfind('\\')
        if md_path_index != -1:
            md_path = md_path[md_path_index + 1:]
        else:
            md_path = md_path
        if md_path in system_dict:
            system = system_dict[md_path]
        elif 'js' in md_path and 'js-apis' not in md_path or 'ts-' in md_path:
            system = 'ArkUI开发框架'
        else:
            system = '查询不到子系统'
        # js-apis-media_library.md 废弃接口直接拼接import
        deprecated_code = False
        # js-apis-media_library.md 所有示例代码都需要拼接前三个示例
        media_library = []
        # 判断代码是属于什么类型
        code = ''
        import_code = ''
        instructions_for_use_code = ''
        instructions_for_use_start = False

        class_code = ''
        callback_code = {}
        start_code = {}
        start_callback = False
        class_topic = False
        call_code = ''
        title = ''
        title_start = True
        print_no_test = False
        raw_file = ''
        # 如果不包含promise和callback的回调函数将直接获取函数所在行作为示例放到回调函数中
        complete_callback = False
        complete_callback_code = ""
        get_complete_callback_code = True
        # 验证示例字眼下的引号是否规范
        sl_specification = False
        mark_specification = False
        quotes = True
        # camera文件需要特殊回调同级
        special_input = False
        special_output = False
        # 获取方法名称，用于获取方法体

        sample_tag = SampleTag()
        self.api_9 = sample_tag.append_api9(lines, md_path)
        code_skip = False
        # 修改使用api几进行操作
        # 如果全量验证api9，则将ets_code = True
        # 如果全量验证api8，则将ets_code = False
        ets_code = True
        if 'apis' not in md_path and 'js-' in md_path and md_path.startswith('js-'):
            ets_code = False

        if ets_code and md_path not in no_test or not ets_code and md_path not in self.api_9 and md_path not in no_test:

            lines = sample_tag.sample_tag(md_path, lines)
            if '需单点查看' in md_path:
                self.special_flag = True
            if not self.special_flag:
                # md文件中代码进行单独编译
                code_type = ''
                try:
                    for item in lines:
                        if 'js-apis-camera.md' in md_path and '## createCameraInput' in item:
                            special_input = True
                            continue
                        if 'js-apis-camera.md' in md_path and '##' in item and special_input:
                            special_input = False
                        if 'js-apis-camera.md' in md_path and (
                                '## createPreviewOutput' in item or '## createPhotoOutput' in item or '## ' 
                                'createVideoOutput' in item or '## createMetadataOutput' in item):
                            special_output = True
                            continue
                        if 'js-apis-camera.md' in md_path and '##' in item and special_output:
                            special_output = False
                        # js-apis-Context.md js-apis-securityLabel.md这两个文件的代码，运行的时候，要加上使用说明里的代码
                        if '## 使用说明' in item:
                            instructions_for_use_start = True
                        if 'js-apis-userFileManager.md' in md_path and '## userFileManager.getUserFileMgr' in item:
                            instructions_for_use_start = True
                        if self.is_chinese(item) and '#' not in item and code.count(
                                '\n') == 0 and '//' not in item and '/*' not in item:
                            continue
                        # js-apis-util.md 跳过Scope下面的方法
                        if 'js-apis-util.md' in md_path and '## Scope' in item and '###' not in item:
                            code_skip = True
                            continue
                        # camera 跳过CaptureSession下面的方法

                        if code_skip and '##' in item and '###' not in item:
                            code_skip = False
                        if 'js-apis-camera.md' in md_path and '## CaptureSession' in item and 'Error' not in item:
                            code_skip = True
                            continue

                        # 获取示例字眼，检测示例代码是否规范
                        sl_number = re.findall(r'.+示例.+', item)
                        if len(sl_number) == 1 and len(item) < 10:
                            sl_specification = True
                            continue
                        if '    ```' in item and sl_specification:
                            mark_specification = True
                        if '##' in item and sl_specification:
                            if quotes:
                                result_dict = {'compile_result': "fail", 'file_path': md_path, 'code_type': code_type,
                                               'originally_code': code, "code": code, "err_type": '引号格式错误',
                                               'compile_log': '无引号，格式错误无法获取示例代码', 'system': system}
                                code_num += 1
                                fail_num += 1
                                self.result_dict["fail"] += 1
                                code = ""
                                self.result_dict["detail"].append(result_dict)
                            sl_specification = False
                            mark_specification = False
                            quotes = True
                        if sl_specification and '```' in item and quotes:
                            quotes = False
                        if sl_specification and quotes:
                            code = code + item

                        # 输出示例代码不做自动化测试
                        if '**输出：**' in item:
                            print_no_test = True
                            continue
                        if '##' in item and print_no_test:
                            print_no_test = False
                            sl_specification = False
                            code = ''
                        if title_start:
                            title = item.replace('#', '').replace(' ', '')
                            title_start = False
                        # 回调是否结束
                        if '##' in item and start_callback and '###' not in item and item[0] == '#':
                            start_callback = False
                            complete_callback = False

                        # 回调是否结束，排除废除接口标志和版本号
                        if '<sup>' in item and self.is_number(item):
                            sup = re.findall(r'<sup>(.*?)</sup>', item)
                            sup1 = re.findall(r'<sup>(.*?)<sup>', item)
                            if len(sup) > 0:
                                if item.replace('<sup>(deprecated) </sup>', '').replace('<sup>' + sup[0] + '</sup>',
                                                                                        '') in callback_code:
                                    if item.count('#') > 2:
                                        item = item.replace('#', '').replace(' ', '')
                                        item = '## ' + item
                                    start_callback = True
                                    call_code = item.replace('<sup>(deprecated) </sup>', '').replace(
                                        '<sup>' + sup[0] + '</sup>', '')
                                    continue
                            elif len(sup1) > 0:
                                if item.replace('<sup>(deprecated) </sup>', '').replace('<sup>' + sup1[0] + '<sup>',
                                                                                        '') in callback_code:
                                    if item.count('#') > 2:
                                        item = item.replace('#', '').replace(' ', '')
                                        item = '## ' + item
                                    start_callback = True
                                    call_code = item.replace('<sup>(deprecated) </sup>', '').replace(
                                        '<sup>' + sup1[0] + '<sup>', '')
                                    continue
                        else:
                            s = re.findall(r'<a(.*?)</a>', item)
                            if len(s) > 0:
                                item = item.replace('<sup>(deprecated) </sup>', '').replace('<a' + s[0] + '</a>', '')
                                if item in callback_code:
                                    if item.count('#') > 2:
                                        item = item.replace('#', '').replace(' ', '').replace('\n', '')
                                        item = '## ' + item + '\n'
                                    start_callback = True
                                    call_code = item
                                    continue
                            else:
                                item = item.replace('<sup>(deprecated) </sup>', '')
                                if item in callback_code:
                                    if item.count('#') > 2:
                                        item = item.replace('#', '').replace(' ', '').replace('\n', '')
                                        item = '## ' + item + '\n'
                                    start_callback = True
                                    call_code = item
                                    continue
                        # 检测是否在需要回调的内容中存在完整的回调
                        if not complete_callback and '(' in item and ':' in item \
                                and 'Promise' not in item and 'callback' not in item and \
                                'Callback' not in item and get_complete_callback_code and start_callback and \
                                not sl_specification and '|' not in item:
                            complete_callback = True
                            complete_callback_code = item
                            get_complete_callback_code = False
                        if '###' in item:
                            get_complete_callback_code = True

                        # 类的调用结束
                        if class_topic and '##' in item and '###' not in item:
                            class_topic = False

                        # js-apis-media_library.md文档检测是否为废弃接口
                        if 'deprecated' in item and '##' in item and 'js-apis-media_library.md' in md_path:
                            deprecated_code = True
                            continue
                        if 'deprecated' not in item and '##' in item and deprecated_code and \
                                'js-apis-media_library.md' in md_path:
                            deprecated_code = False

                        # 检测项目开始
                        if not sl_specification and "```" in item.replace("\n", '').replace(" ", ''):
                            code = ''
                            if 'js-apis-hilog.md' in md_path:
                                code = ''
                            sl_specification = True
                            continue
                        # 完整回调用例修改
                        if complete_callback and sl_specification:
                            if "(" in complete_callback_code:
                                index = complete_callback_code.find('(')
                                complete_callback_code1 = complete_callback_code[:index + 1]
                                if complete_callback_code1 in item:
                                    complete_callback_code = item
                        if '###' in item:
                            complete_callback_code = ''

                        # 项目执行
                        if sl_specification and "```" in item.replace('\n', '').replace(" ", '') and not print_no_test:
                            originally_code = code
                            code = special(code, md_path, special_input, special_output)
                            # 如果项目第一行是创建的类对象就删除
                            code_type = self.check_ts_or_js_code(code, md_path)
                            if md_path in self.api_9 or '//API9' in code:
                                code_type = 'API9'
                            self.result_dict["total"] += 1
                            sl_specification = False
                            # 如果不验证api9并且api9的标志或者文件属于api9则不验证
                            if not ets_code and "//API9" in code:
                                sl_specification = False
                                continue

                            if code_skip:
                                nocheck_num += 1
                                code_num += 1
                                code = ''
                                continue

                            # 带有使用说明的代码，运行的时候，要加上使用说明里的代码
                            if instructions_for_use_start:
                                if '//使用说明\n' in code:
                                    instructions_for_use_start = False
                                    instructions_for_use_code = code
                                    result_dict = {'compile_result': "pass", 'file_path': md_path,
                                                   'code_type': code_type,
                                                   'originally_code': code, "code": code, "err_type": 'pass',
                                                   'compile_log': '使用说明，已和该文件后续代码进行合并', 'system': system}
                                    code_num += 1
                                    pass_num += 1
                                    self.result_dict['pass'] += 1
                                    self.result_dict['detail'].append(result_dict)
                                    code = ''
                                    continue

                            # js-apis-media_library.md 文档前三个示例代码拼接在下方所有示例代码之前
                            if code.count('\n') > 1 and len(media_library) < 3 or \
                                    code.count('\n') == 1 and 'import' not in code and len(media_library) < 3:
                                media_library.append(code)

                            if code_type == "":
                                code_type = self.judge_code_type(md_path, code)
                                if md_path in self.api_9 or '//API9' in code:
                                    code_type = "API9"
                            # 验证是否为ets的raw_file
                            if '$raw_file' in code and code_type == 'TypeScript' or '$raw_file' in code \
                                    and code_type == 'API9':
                                raw_file = code
                                code = ''
                                continue
                            js_number = re.findall(r'//.+js', code)
                            hml_number = re.findall(r'.+hml.+-->', code)
                            css_number = re.findall(r'/*.+css.+/*/', code)
                            # 增加传参给code_write,增加comp,hml的位置
                            if len(hml_number) > 0 and 'xxx.hml' not in code and code_type == 'HTML' \
                                    and '该示例代码不做自动化测试' not in code and '<!-- hml -->' not in code:
                                comp_list = re.findall(r'!-- (.*?).hml', code)
                                hml_name = comp_list[0] + '/' + comp_list[0] + '.hml'
                            elif len(css_number) > 0 and 'xxx.css' not in code and code_type == 'CSS' \
                                    and '该示例代码不做自动化测试' not in code:
                                comp = code.find('css')
                                comp_list = code[:comp].replace('<', '').replace('!', '').replace('-', '').replace('/',
                                                                                                                  '') \
                                    .replace('*', '').replace(' ', '').replace('.', '')
                                css_name = comp_list + '/' + comp_list + '.css'
                            elif len(js_number) > 0 and 'xxx.js' not in code and '// js' not in code \
                                    and code_type == 'JavaScript' and '该示例代码不做自动化测试' not in code:
                                comp_list = re.findall('//(.*?).js', code)
                                js_name = comp_list[0].replace(' ', '') + '/' + comp_list[0].replace(' ', '') + '.js'
                            speak_i('code type is: ' + code_type)

                            # 验证是否为导入模块
                            if 'import' in code and 'from' in code and code.count('\n') == 1:
                                import_code = code
                                result_dict = {'compile_result': "pass", 'file_path': md_path, 'code_type': code_type,
                                               'originally_code': code, "code": code, "err_type": 'pass',
                                               'compile_log': 'import导入包，已和该文件后续代码进行合并', 'system': system}
                                code_num += 1
                                pass_num += 1
                                self.result_dict['pass'] += 1
                                self.result_dict['detail'].append(result_dict)
                                code = ''
                                continue

                            # 验证是否为回调函数示例位置
                            if '此处测试' in code and '开头' not in code and '该示例代码不做自动化测试' not in code:
                                reg = r'&(.*?)&类中'
                                all_ = re.compile(reg)
                                all_list = re.findall(all_, code)
                                callback_import = []
                                # 验证是否存在三层回调
                                if start_callback and call_code != '' and callback_code != '':
                                    # 存在回调内容中是否有import导入，所以先记录
                                    if 'import' in code and 'from' in code:
                                        callback_import = re.findall('import.+from.+\n', code)
                                        if len(callback_import) > 0:
                                            for i in range(len(callback_import)):
                                                code = code.replace(callback_import[i], '')
                                    for call_back in callback_code[call_code]:
                                        index1 = call_back.find('//此处测试')
                                        index2 = call_back.find('示例\n')
                                        index3 = code.find('//此处测试')
                                        index4 = code.find('示例\n')
                                        class_name = call_back[index1:index2 + 2]
                                        class_name_code = code[index3:index4 + 2]

                                        try:
                                            if call_back.replace(class_name, '') not in code.replace(class_name_code,
                                                                                                     ''):
                                                new_code = call_back.replace(class_name, code + '\n')
                                            else:
                                                new_code = code
                                        except MemoryError:
                                            new_code = code

                                        # 文件将最开始去除的导入模块再加入到代码中
                                        if len(callback_import) > 0:
                                            for i in range(len(callback_import)):
                                                if handling_import(callback_import[i]) not in \
                                                        handling_code(new_code) and callback_import[i].replace(
                                                    '"', "'").replace(';', '').replace('\n',
                                                                                       '') + "\n".lower() not in \
                                                        new_code.replace('"', "'").replace(';', '').lower():
                                                    new_code = callback_import[i] + new_code
                                        result_dict = {'compile_result': "pass", 'file_path': md_path,
                                                       'code_type': code_type,
                                                       'originally_code': code.replace(class_name_code, ''),
                                                       "code": new_code,
                                                       "err_type": 'pass',
                                                       'compile_log': '回调函数示例执行位置，已和该文件后续代码进行合并', 'system': system}
                                        code_num += 1
                                        pass_num += 1
                                        self.result_dict['pass'] += 1
                                        self.result_dict['detail'].append(result_dict)
                                        for call in all_list:
                                            if '## ' + call + '\n' in callback_code:
                                                callback_code["## " + call + '\n'].append(new_code)
                                            else:
                                                callback_code.update({"## " + call + '\n': [new_code]})

                                else:
                                    index1 = code.find('//此处测试')
                                    index2 = code.find('示例\n')
                                    class_name = code[index1:index2 + 2]
                                    result_dict = {'compile_result': "pass", 'file_path': md_path,
                                                   'code_type': code_type,
                                                   'originally_code': code.replace(class_name, ''),
                                                   "code": code,
                                                   "err_type": 'pass',
                                                   'compile_log': '回调函数示例执行位置，已和该文件后续代码进行合并', 'system': system}
                                    code_num += 1
                                    pass_num += 1
                                    self.result_dict['pass'] += 1
                                    self.result_dict['detail'].append(result_dict)

                                    for call in all_list:
                                        if '## ' + call + '\n' in callback_code:
                                            callback_code["## " + call + '\n'].append(code)
                                        else:
                                            callback_code.update({"## " + call + '\n': [code]})
                                speak_i('callback_code: ', callback_code)
                                code = ''
                                continue
                            if '此处测试' in code and '开头' in code and '该示例代码不做自动化测试' not in code:
                                index1 = code.find('//此处测试')
                                index2 = code.find('开头\n')
                                class_name = code[index1:index2 + 2]
                                result_dict = {'compile_result': "pass", 'file_path': md_path, 'code_type': code_type,
                                               'originally_code': code.replace(class_name, ''),
                                               "code": code,
                                               "err_type": 'pass',
                                               'compile_log': '指定开头内容示例代码执行位置，已和该文件后续代码进行合并', 'system': system}
                                code_num += 1
                                pass_num += 1
                                self.result_dict['pass'] += 1
                                self.result_dict['detail'].append(result_dict)
                                reg = r'以(.*?)开头'
                                all_compile = re.compile(reg)
                                all_list = re.findall(all_compile, code)
                                for call in all_list:
                                    if call in callback_code:
                                        callback_code[call].append(code)
                                    else:
                                        callback_code.update({call: [code]})
                                speak_i(start_code)
                                code = ''
                                continue
                            # 类的示例位置
                            if '该class需添加在同一阶级目录示例代码之前' in code and not class_topic:
                                result_dict = {'compile_result': "pass", 'file_path': md_path, 'code_type': code_type,
                                               'originally_code': code.replace('该class需添加在同一阶级目录示例代码之前', ''),
                                               "code": code,
                                               "err_type": 'pass',
                                               'compile_log': 'class公共类，已和该文件后续代码进行合并', 'system': system}
                                code_num += 1
                                pass_num += 1
                                self.result_dict['pass'] += 1
                                self.result_dict['detail'].append(result_dict)
                                class_code = code
                                class_topic = True
                                code = ''
                                continue
                            # ts前后关系
                            if raw_file != '':
                                file_path = os.path.abspath(
                                    os.path.join(os.path.split(os.path.abspath(__file__))[0], '..')) + \
                                            r'/project/eTSProject\entry\src\main\ets\MainAbility\pages\raw_file'
                                if not os.path.exists(file_path):
                                    os.makedirs(file_path)
                                    file_path_html = os.path.join(file_path, 'index.html')
                                    with open(file_path_html, 'w+', encoding='utf8', errors='ignore') as file_open:
                                        file_open.truncate()
                                        file_open.write(str(code) + '\n')
                                result_dict = {'compile_result': "no check", 'file_path': md_path, 'code_type': 'HTML',
                                               'originally_code': code,
                                               "code": code,
                                               "err_type": 'pass',
                                               'compile_log': '该示例代码写入raw_file文件，已和该文件后续代码进行合并', 'system': system}
                                code_num += 1
                                pass_num += 1
                                self.result_dict['pass'] += 1
                                self.result_dict['detail'].append(result_dict)
                                code = raw_file
                                code_type = "TypeScript"
                                if md_path in self.api_9 or '//API9' in code:
                                    code_type = 'API9'
                            # 检测示例代码的引号是否规范
                            if mark_specification:
                                result_dict = {'compile_result': "fail", 'file_path': md_path, 'code_type': code_type,
                                               'originally_code': code,
                                               "code": code,
                                               "err_type": '引号格式错误',
                                               'compile_log': '引号书写错误', 'system': system}
                                code_num += 1
                                fail_num += 1
                                self.result_dict['fail'] += 1
                                code = ''
                                self.result_dict['detail'].append(result_dict)
                            # 工程正式执行
                            elif code_type != '' and '该示例代码不做自动化测试' not in code and '包含绝对路径' not in code:
                                print('执行', start_callback)
                                speak_i(code)
                                # 开始将code写入到工程文件中
                                code_num += 1

                                code_write = CodeWrite()
                                # 此处测试以某个字眼开始的内容
                                if len(start_code) != 0 and call_code == '':
                                    code_num -= 1
                                    for items in start_code:
                                        if items in code:
                                            code_num += 1
                                            for code_item in start_code[items]:
                                                new_code = code_item.replace('//此处测试以' + items + '开头的示例代码\n',
                                                                             code.replace(' ', '') + '\n')
                                                code_type = self.check_ts_or_js_code(new_code, md_path)
                                                if md_path in self.api_9 or '//API9' in new_code:
                                                    code_type = 'API9'

                                                if 'js-apis-fileio.md' in md_path:
                                                    new_code = fileio(new_code, md_path)
                                                elif 'js-apis-data-rdb.md' in md_path:
                                                    new_code = data_rdb(new_code, md_path)
                                                if instructions_for_use_code != '':
                                                    new_code = instructions_for_use(new_code, instructions_for_use_code)

                                                result_dict, pass_num, fail_num, nocheck_num = self.compile(new_code,
                                                                                                            code_write,
                                                                                                            code_type,
                                                                                                            md_path,
                                                                                                            fail_num,
                                                                                                            pass_num,
                                                                                                            nocheck_num,
                                                                                                            hml_name,
                                                                                                            css_name,
                                                                                                            js_name,
                                                                                                            ets_code,
                                                                                                     originally_code)
                                                self.result_dict['detail'].append(result_dict)
                                                code_write.del_picture()
                                                # 编译完成后将原文件替换到相应位置，防止影响下次编译
                                                code_write.over_write_file('eTSProject', 'JSProject', ets_code, md_path)
                                                code = ''
                                            break

                                # 回调函数执行替换
                                elif start_callback and call_code != '':
                                    callback_import = []
                                    if 'import' in code and 'from' in code:
                                        callback_import = re.findall('import.+from.+\n', code)
                                        if len(callback_import) > 0:
                                            for i in range(len(callback_import)):
                                                code = code.replace(callback_import[i], '')
                                    code_num -= 1

                                    for call_back in callback_code[call_code]:
                                        code_num += 1
                                        index1 = call_back.find('//此处测试')
                                        index2 = call_back.find('示例\n')
                                        class_name = call_back[index1:index2 + 3]
                                        index3 = call_back.find('测试')
                                        index4 = call_back.find('&')
                                        actual_class_name = call_back[index3 + 2:index4]
                                        index3 = code.find('//此处测试')
                                        index4 = code.find('示例\n')
                                        class_name_code = code[index3:index4 + 2]

                                        # 判断回调的内容是否已经补充到示例代码中
                                        try:
                                            if call_back.replace(class_name, '').replace('\n', '') not in code.replace(
                                                    class_name_code, ''):
                                                # fileio文档中存在重复定义ss = 回调
                                                if 'js-apis-fileio.md' in md_path and 'let ss' in call_back and \
                                                        'let ss' in code:
                                                    new_code = code
                                                else:
                                                    # 验证是否重复定义类
                                                    if 'js-apis-distributed.md' in md_path:
                                                        code = repeat_definition(code, md_path, actual_class_name)
                                                        new_code = call_back.replace(class_name, str(code) + '\n')
                                                    else:
                                                        new_code = call_back.replace(class_name, code + '\n')
                                            else:
                                                new_code = code
                                        except:
                                            new_code = code

                                        # 文件将最开始去除的导入模块再加入到代码中
                                        if len(callback_import) > 0:
                                            for i in range(len(callback_import)):
                                                if handling_import(callback_import[i]) not in handling_code(
                                                        new_code) and \
                                                        callback_import[i].replace('"', "'").replace(';', '').replace(
                                                            '\n', '') + '\n'.lower() not in new_code.replace('"',
                                                                                                             "'") \
                                                        .replace(';', '').lower():
                                                    new_code = callback_import[i] + new_code

                                        if class_code != '' and class_topic:
                                            new_code = class_code + new_code

                                        if import_code != '' and (
                                                code_type == 'JavaScript' or code_type == 'TypeScript' or
                                                code_type == 'API9') and handling_import(
                                            import_code) not in handling_code(new_code) and import_code.replace('"',
                                                                                                                "'") \
                                                .replace(';', '').replace(
                                            '\n', '') + '\n'.lower() not in new_code.replace('"',
                                                                                             "'") \
                                                .replace(';', '').lower():
                                            new_code = import_code + new_code
                                        if md_path in self.api_9 or '//API9' in new_code:
                                            code_type = 'API9'
                                        if 'js-apis-fileio.md' in md_path:
                                            new_code = fileio(new_code, md_path)
                                        elif 'js-apis-data-rdb.md' in md_path:
                                            new_code = data_rdb(new_code, md_path)
                                        elif 'js-apis-request.md' in md_path:
                                            new_code = request(new_code)
                                        if instructions_for_use_code != '':
                                            new_code = instructions_for_use(new_code, instructions_for_use_code)

                                        result_dict, pass_num, fail_num, nocheck_num = self.compile(new_code,
                                                                                                    code_write,
                                                                                                    code_type,
                                                                                                    md_path, fail_num,
                                                                                                    pass_num,
                                                                                                    nocheck_num,
                                                                                                    hml_name,
                                                                                                    css_name, js_name,
                                                                                                    ets_code,
                                                                                                    originally_code)
                                        self.result_dict['detail'].append(result_dict)
                                    code_write.del_picture()
                                    # 编译完成后将原文件替换到相应位置，防止影响下次编译
                                    code_write.over_write_file('eTSProject', 'JSProject', ets_code, md_path)
                                    code = ''
                                else:
                                    if 'js-apis-media_library.md' in md_path and not deprecated_code and len(
                                            media_library) == 3:
                                        for api_code in media_library:
                                            code_num += 1
                                            code = api_code + '\n' + code
                                            if import_code != '' and (
                                                    code_type == 'JavaScript' or code_type == 'TypeScript' or
                                                    code_type == 'API9') and handling_import(
                                                import_code) not in handling_code(code) and import_code.replace(
                                                '"',
                                                "").replace("'", '').replace(
                                                ';', '').replace(
                                                '\n', '') + '\n'.lower() not in code.replace(';', '').replace("'", '')\
                                                    .replace('"', '').lower():
                                                code = import_code + code
                                            if md_path in self.api_9 or '//API9' in code:
                                                code_type = 'API9'
                                            result_dict, pass_num, fail_num, nocheck_num = self.compile(code,
                                                                                                        code_write,
                                                                                                        code_type,
                                                                                                        md_path,
                                                                                                        fail_num,
                                                                                                        pass_num,
                                                                                                        nocheck_num,
                                                                                                        hml_name,
                                                                                                        css_name,
                                                                                                        js_name,
                                                                                                        ets_code,
                                                                                                        originally_code)
                                            self.result_dict['detail'].append(result_dict)
                                            code_write.del_picture()
                                            # 编译完成后将原文件替换到相应位置，防止影响下次编译
                                            code_write.over_write_file('eTSProject', 'JSProject', ets_code, md_path)
                                            code = ''
                                    if class_topic and class_code != '':
                                        code = class_code + code
                                    if import_code != '' and (
                                            code_type == 'JavaScript' or code_type == 'TypeScript' or 
                                            code_type == 'API9') and handling_import(
                                        import_code) not in handling_code(code) and import_code.replace(
                                        '"',
                                        "").replace("'", '').replace('\n', '') + '\n'.lower() not in \
                                            code.replace("'", '').replace('"', '').lower():
                                        code = import_code + code
                                    if md_path in self.api_9 or '//API9' in code:
                                        code_type = 'API9'
                                    if 'js-apis-fileio.md' in md_path:
                                        code = fileio(code, md_path)
                                    elif 'js-apis-data-rdb.md' in md_path:
                                        code = data_rdb(code, md_path)
                                    if instructions_for_use_code != '':
                                        code = instructions_for_use(code, instructions_for_use_code)
                                    result_dict, pass_num, fail_num, nocheck_num = self.compile(code,
                                                                                                code_write,
                                                                                                code_type,
                                                                                                md_path, fail_num,
                                                                                                pass_num,
                                                                                                nocheck_num,
                                                                                                hml_name,
                                                                                                css_name, js_name,
                                                                                                ets_code,
                                                                                                originally_code)
                                    self.result_dict['detail'].append(result_dict)
                                    code_write.del_picture()
                                    # 编译完成后将原文件替换到相应位置，防止影响下次编译
                                    code_write.over_write_file('eTSProject', 'JSProject', ets_code, md_path)
                                    code = ''
                                    print('执行这里编译')
                            else:
                                if import_code != '' and 'import' in code and 'from' in code and code.count('\n') == 1:
                                    result_dict = {'compile_result': "pass", 'file_path': md_path,
                                                   'code_type': code_type,
                                                   'originally_code': code,
                                                   "code": code,
                                                   "err_type": 'pass',
                                                   'compile_log': 'import导入包，已和该文件后续代码进行合并', 'system': system}
                                    code_num += 1
                                    pass_num += 1
                                    self.result_dict['pass'] += 1
                                elif '该示例代码不做自动化测试(deprecated)' in code:
                                    result_dict = {'compile_result': "no check(deprecated)", 'file_path': md_path,
                                                   'code_type': code_type,
                                                   'originally_code': code.replace('该示例代码不做自动化测试(deprecated)\n', ''),
                                                   "code": code,
                                                   "err_type": 'pass',
                                                   'compile_log': '该示例代码不做自动化测试(deprecated)', 'system': system}
                                    code_num += 1
                                    dp_nocheck_num += 1
                                    self.result_dict['pass'] += 1
                                elif '该示例代码不做自动化测试' in code:
                                    result_dict = {'compile_result': "no check", 'file_path': md_path,
                                                   'code_type': code_type,
                                                   'originally_code': code.replace('该示例代码不做自动化测试\n', ''),
                                                   "code": code,
                                                   "err_type": 'pass',
                                                   'compile_log': '该示例代码不做自动化测试', 'system': system}
                                    code_num += 1
                                    nocheck_num += 1
                                    self.result_dict['pass'] += 1
                                elif '包含绝对路径' in code:
                                    result_dict = {'compile_result': "no check", 'file_path': md_path,
                                                   'code_type': code_type,
                                                   'originally_code': code.replace('////包含绝对路径\n', ''),
                                                   "code": code,
                                                   "err_type": 'pass',
                                                   'compile_log': '该示例代码包含绝对路径', 'system': system}
                                    code_num += 1
                                    nocheck_num += 1
                                    self.result_dict['pass'] += 1
                                else:
                                    if self.fileType == 'TS':
                                        self.result_dict['TSFail'] += 1
                                    else:
                                        self.result_dict['JSFail'] += 1
                                    self.result_dict['fail'] += 1
                                    fail_num += 1
                                    result_dict = {'compile_result': "fail", 'file_path': md_path,
                                                   'code_type': code_type,
                                                   'originally_code': code,
                                                   "code": code,
                                                   "err_type": '代码类型未知',
                                                   'compile_log': '无法判断代码类型', 'system': system}
                                    code_num += 1
                                code = ''
                                self.result_dict['detail'].append(result_dict)
                        if sl_specification:
                            code = code + item
                except MemoryError:
                    for item in lines:
                        if title_start:
                            title = item.replace('#', '').replace(' ', '')
                            title_start = False
                        if not sl_specification and "```" in item.replace('\n', '').replace(' ', ''):
                            sl_specification = True
                            continue
                        if sl_specification and "```" in item.replace('\n', '').replace(' ', ''):
                            sl_specification = False
                            code_num += 1
                            nocheck_num += 1
                        if sl_specification:
                            code = code + item
                if pass_num == 0 and code_num == nocheck_num + dp_nocheck_num and fail_num == 0:
                    file_result_dict = {'file_path': md_path, 'fileName': title, 'code_num': code_num, 'pass': pass_num,
                                       'fail': fail_num, 'nocheck': nocheck_num, "nocheck(deprecated)": dp_nocheck_num,
                                       'PassRate': 1, 'system': system}
                    self.result_dict['file_detail'].append(file_result_dict)
                elif pass_num == 0 and code_num == 0 and fail_num == 0 and nocheck_num == 0 and dp_nocheck_num == 0:
                    file_result_dict = {'file_path': md_path, 'fileName': title, 'code_num': code_num, 'pass': pass_num,
                                       'fail': fail_num, 'nocheck': nocheck_num, "nocheck(deprecated)": dp_nocheck_num,
                                       'PassRate': 1, 'system': system}
                    self.result_dict['file_detail'].append(file_result_dict)
                elif pass_num == 0:
                    file_result_dict = {'file_path': md_path, 'fileName': title, 'code_num': code_num, 'pass': pass_num,
                                       'fail': fail_num, 'nocheck': nocheck_num, "nocheck(deprecated)": dp_nocheck_num,
                                       'PassRate': 0, 'system': system}
                    self.result_dict['file_detail'].append(file_result_dict)
                else:
                    file_result_dict = {'file_path': md_path, 'fileName': title, 'code_num': code_num, 'pass': pass_num,
                                       'fail': fail_num, 'nocheck': nocheck_num, "nocheck(deprecated)": dp_nocheck_num,
                                       'PassRate': round(pass_num / (pass_num + fail_num), 2), 'system': system}
                    self.result_dict['file_detail'].append(file_result_dict)
            else:
                path_type = self.judge_type_path(md_path)
                if path_type == 'TS':
                    # TS 需要根据上下文进行编译
                    self.context_compile(md_path, ets_code, code, dp_nocheck_num)
                    self.special_flag = False
        else:
            code_type = ''
            for item in lines:
                if title_start:
                    title = item.replace('#', '').replace(' ', '')
                    title_start = False
                if not sl_specification and "```" in item.replace('\n', '').replace(' ', ''):
                    code_type = self.check_ts_or_js_code(code, md_path)
                    if md_path in self.api_9 or '//API9' in code:
                        code_type = 'API9'
                    sl_specification = True
                    continue
                if sl_specification and "```" in item.replace('\n', '').replace(' ', ''):
                    sl_specification = False
                    if md_path not in no_test:
                        result_dict = {'compile_result': "no check", 'file_path': md_path, 'code_type': code_type,
                                       'originally_code': code,
                                       "code": code,
                                       "err_type": 'pass',
                                       'compile_log': '存在片段代码，自动化不检测', 'system': system}
                        self.result_dict['detail'].append(result_dict)
                    code_num += 1
                    nocheck_num += 1
                if sl_specification:
                    code = code + item
            if pass_num == 0 and code_num == nocheck_num + dp_nocheck_num and fail_num == 0:
                file_result_dict = {'file_path': md_path, 'fileName': title, 'code_num': code_num, 'pass': pass_num,
                                   'fail': fail_num, 'nocheck': nocheck_num, "nocheck(deprecated)": dp_nocheck_num,
                                   'PassRate': 1, 'system': system}
                self.result_dict['file_detail'].append(file_result_dict)
            elif pass_num == 0 and code_num == 0 and fail_num == 0 and nocheck_num == 0 and dp_nocheck_num == 0:
                file_result_dict = {'file_path': md_path, 'fileName': title, 'code_num': code_num, 'pass': pass_num,
                                   'fail': fail_num, 'nocheck': nocheck_num, "nocheck(deprecated)": dp_nocheck_num,
                                   'PassRate': 1, 'system': system}
                self.result_dict['file_detail'].append(file_result_dict)
            elif pass_num == 0:
                file_result_dict = {'file_path': md_path, 'fileName': title, 'code_num': code_num, 'pass': pass_num,
                                   'fail': fail_num, 'nocheck': nocheck_num, "nocheck(deprecated)": dp_nocheck_num,
                                   'PassRate': 0, 'system': system}
                self.result_dict['file_detail'].append(file_result_dict)
            else:
                file_result_dict = {'file_path': md_path, 'fileName': title, 'code_num': code_num, 'pass': pass_num,
                                   'fail': fail_num, 'nocheck': nocheck_num, "nocheck(deprecated)": dp_nocheck_num,
                                   'PassRate': round(pass_num / (pass_num + fail_num), 2), 'system': system}
                self.result_dict['file_detail'].append(file_result_dict)
        if len(self.result_dict['detail']) > 0:
            self.write_result(self.result_path)

    def compile(self, code, code_write, code_type, md_path, fail_num, pass_num, nocheck_num, hml_name, css_name,
                js_name,
                ets_code, originally_code):
        # 针对特殊文档，删除await关键字
        if 'js-apis-avsession.md' in md_path or 'js-apis-audio.md' in md_path:
            code = code.replace('await', '')
        # 添加子系统验证
        md_path_index = md_path.rfind('\\')
        md_path = md_path[md_path_index + 1:]
        if md_path in system_dict:
            system = system_dict[md_path]
        elif 'js-' in md_path and 'js-apis' not in md_path or md_path.startswith('ts-'):
            system = 'ArkUI开发框架'
        else:
            system = '查询不到子系统'
        if self.fileType == 'TS':
            if 'app.ets' in code or ("@Entry" in code and '@Component' in code and "build()" in code):
                code_write.startWriteProject(code, code_type, hml_name, css_name, js_name, 'eTSProject', 'JSProject',
                                             ets_code,
                                             md_path)
                # 开始调用编译
                compile_project = CompileProject()
                result_dict, compile_result = compile_project.start_compile(code_type, md_path, code, 'eTSProject',
                                                                            'JSProject',
                                                                            ets_code, originally_code)
                if compile_result == 'fail':
                    if self.fileType == 'TS':
                        self.result_dict['TSFail'] += 1
                    else:
                        self.result_dict['JSFail'] += 1
                    self.result_dict['fail'] += 1
                    fail_num += 1
                else:
                    if self.fileType == 'TS':
                        self.result_dict['TSPass'] += 1
                    else:
                        self.result_dict['JSPass'] += 1
                    self.result_dict['pass'] += 1
                    pass_num += 1
            else:
                if self.fileType == 'TS':
                    self.result_dict['TSFail'] += 1
                else:
                    self.result_dict['JSFail'] += 1
                self.result_dict['fail'] += 1
                nocheck_num += 1
                result_dict = {'compile_result': "no check", 'file_path': md_path, 'code_type': code_type,
                               'originally_code': originally_code,
                               "code": code,
                               "err_type": 'pass',
                               'compile_log': 'code中不含有@Entry等字段，不进行编译', 'system': system}
        else:
            code_write.startWriteProject(code, code_type, hml_name, css_name, js_name, 'eTSProject', 'JSProject',
                                         ets_code,
                                         md_path)
            # 开始调用编译
            compile_project = CompileProject()
            result_dict, compile_result = compile_project.start_compile(code_type, md_path, code, 'eTSProject',
                                                                        'JSProject',
                                                                        ets_code, originally_code)
            if compile_result == 'fail':
                if self.fileType == 'TS':
                    self.result_dict['TSFail'] += 1
                else:
                    self.result_dict['JSFail'] += 1
                self.result_dict['fail'] += 1
                fail_num += 1
            else:
                if self.fileType == 'TS':
                    self.result_dict['TSPass'] += 1
                else:
                    self.result_dict['JSPass'] += 1
                self.result_dict['pass'] += 1
                pass_num += 1
        return result_dict, pass_num, fail_num, nocheck_num

    # TS md文档需要根据上下文进行编译
    def context_compile(self, md_path, ets_code, originally_code, dp_nocheck_num):
        code_num = 0
        pass_num = 0
        fail_num = 0
        nocheck_num = 0
        with open(md_path, 'r', encoding='utf8', errors='ignore') as file_open:
            lines = file_open.readlines()
        md_path_index = md_path.rfind('\\')
        md_path = md_path[md_path_index + 1:]
        if md_path in system_dict:
            system = system_dict[md_path]
        elif 'js-' in md_path and 'js-apis' not in md_path or md_path.startswith('ts-'):
            system = 'ArkUI开发框架'
        else:
            system = '查询不到子系统'
        title = ''
        title_start = True
        sl_specification = False
        code = ''
        code_list = []
        code_type = ''
        for item in lines:
            if title_start:
                title = item.replace('#', '').replace(' ', '')
                title_start = False
            if not sl_specification and "```" in item.replace('\n', '').replace(' ', ''):
                sl_specification = True
                continue
            if sl_specification and "```" in item.replace('\n', '').replace(' ', ''):
                if code_type == '':
                    code_type = self.judge_code_type(md_path, code)
                    if md_path in self.api_9 or '//API9' in code:
                        code_type = 'API9'
                self.result_dict['total'] += 1
                sl_specification = False
                code_num += 1
                code_list.append(code)
                code = ''
            if sl_specification:
                code = code + item
        import_code = ''
        compile_list = []
        file_list = []
        # 获取了这个文件中所有code的，然后根据文件进行编译
        for code_item in code_list:
            if 'import' in code_item and 'from' in code_item and len(code_item) < 80 and code_item.count('\n') == 1:
                import_code = code_item
                continue
            if 'app.ets' in code_item or (
                    "@Entry" in code_item and '@Component' in code_item and "build()" in code_item):
                code_type = self.judge_code_type(md_path, code_item)
                if md_path in self.api_9 or '//API9' in code_item:
                    code_type = 'API9'
                speak_i('code type is: ' + code_type)
                if import_code != '':
                    # 先判断代码中是否存在相同的语句，不存在则增加
                    if import_code.replace(';', '') not in code_item.replace(';', ''):
                        code_item = import_code + '\n' + code_item
                # 然后进行编译，是不是需要进行多个文件进行编译
                page_list = re.findall(r'//(.*?)Page', code_item)
                if len(page_list) > 0:
                    compile_list.append(code_item)
                    page_name = page_list[0].replace(' ', '')
                    # 创建文件
                    file_path = os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0], '..')) + \
                                r'/project/eTSProject\entry\src\main\ets\MainAbility\pages\\' + str(page_name) + '.ets'
                    file_list.append(file_path)
                    with open(file_path, 'w+', encoding='utf8', errors='ignore') as file_open:
                        file_open.truncate()
                        file_open.write(str(code) + '\n')
        # 判断是不是需要统一编译，需要则进行编译
        if compile_list:
            # 开始调用编译
            compile_project = CompileProject()
            result_dict, compile_result = compile_project.start_compile(code_type, md_path, '\n'.join(compile_list),
                                                                        'eTSProject', 'JSProject',
                                                                        ets_code, originally_code)
            if compile_result == 'fail':
                if self.fileType == 'TS':
                    self.result_dict['TSFail'] += len(compile_list)
                else:
                    self.result_dict['JSFail'] += len(compile_list)
                self.result_dict['fail'] += len(compile_list)
                fail_num += len(compile_list)
            else:
                if self.fileType == 'TS':
                    self.result_dict['TSPass'] += len(compile_list)
                else:
                    self.result_dict['JSPass'] += len(compile_list)
                self.result_dict['pass'] += len(compile_list)
                pass_num += len(compile_list)
            self.result_dict['detail'].append(result_dict)
            # 编译完成删除文件，不需要文件覆盖了
            for item in file_list:
                del_folder_or_file(item)
        for code_item in code_list:
            code_type = self.judge_code_type(md_path, code_item)
            if md_path in self.api_9 or '//API9' in code_item:
                code_type = 'API9'
            if 'import' in code_item and 'from' in code_item and code_item.count('\n') == 1:
                import_code = code_item
                result_dict = {'compile_result': "pass", 'file_path': md_path, 'code_type': code_type,
                               'originally_code': code_item, "code": code_item, "err_type": 'pass',
                               'compile_log': 'import导入包，已和该文件后续代码进行合并', 'system': system}
                pass_num += 1
                self.result_dict['pass'] += 1
                self.result_dict['detail'].append(result_dict)
                if self.fileType == 'TS':
                    self.result_dict['TSPass'] += 1
                else:
                    self.result_dict['JSPass'] += 1
                continue
            if 'app.ets' in code_item or (
                    "@Entry" in code_item and '@Component' in code_item and "build()" in code_item):
                hml_name = ''
                css_name = ''
                js_name = ''
                speak_i('code type is: ' + code_type)
                if import_code != '':
                    # 先判断代码中是否存在相同的语句，不存在则增加
                    if import_code.replace(';', '') not in code_item.replace(';', ''):
                        code_item = import_code + '\n' + code_item
                # 然后进行编译，是不是需要进行多个文件进行编译
                page_list = re.findall(r'//(.*?)Page', code_item)
                if len(page_list) == 0:
                    code_write = CodeWrite()
                    code_write.start_write_project(code_item, code_type, hml_name, css_name, js_name, 'eTSProject',
                                                   'JSProject',
                                                   ets_code,
                                                   md_path)
                    # 开始调用编译
                    compile_project = CompileProject()
                    result_dict, compile_result = compile_project.start_compile(code_type, md_path, code_item,
                                                                                'eTSProject',
                                                                                'JSProject',
                                                                                ets_code, code_item)

                    if compile_result == 'fail':
                        if self.fileType == 'TS':
                            self.result_dict['TSFail'] += 1
                        else:
                            self.result_dict['JSFail'] += 1
                        self.result_dict['fail'] += 1
                        fail_num += 1
                    else:
                        if self.fileType == 'TS':
                            self.result_dict['TSPass'] += 1
                        else:
                            self.result_dict['JSPass'] += 1
                        self.result_dict['pass'] += 1
                        pass_num += 1
                    self.result_dict['detail'].append(result_dict)
                    code_write.del_picture()
                    # 编译完成后将原文件替换到相应位置，防止影响下次编译
                    code_write.over_write_file('eTSProject', 'JSProject', ets_code, md_path)
            else:
                if self.fileType == 'TS':
                    self.result_dict['TSFail'] += 1
                else:
                    self.result_dict['JSFail'] += 1
                self.result_dict['fail'] += 1
                fail_num += 1
                result_dict = {'compile_result': "no check", 'file_path': md_path, 'code_type': code_type,
                               'originally_code': code_item, "code": code_item, "err_type": 'pass',
                               'compile_log': 'code中不含有@Entry等字段，不进行编译', 'system': system}
                self.result_dict['detail'].append(result_dict)
        if pass_num == 0 and code_num == nocheck_num + dp_nocheck_num and fail_num == 0:
            file_result_dict = {'file_path': md_path, 'fileName': title, 'code_num': code_num, 'pass': pass_num,
                               'fail': fail_num, 'nocheck': nocheck_num, "nocheck(deprecated)": dp_nocheck_num,
                               'PassRate': 1, 'system': system}
            self.result_dict['file_detail'].append(file_result_dict)
        elif pass_num == 0 and code_num == 0 and fail_num == 0 and nocheck_num == 0 and dp_nocheck_num == 0:
            file_result_dict = {'file_path': md_path, 'fileName': title, 'code_num': code_num, 'pass': pass_num,
                               'fail': fail_num, 'nocheck': nocheck_num, "nocheck(deprecated)": dp_nocheck_num,
                               'PassRate': 1, 'system': system}
            self.result_dict['file_detail'].append(file_result_dict)
        elif pass_num == 0:
            file_result_dict = {'file_path': md_path, 'fileName': title, 'code_num': code_num, 'pass': pass_num,
                               'fail': fail_num, 'nocheck': nocheck_num, "nocheck(deprecated)": dp_nocheck_num,
                               'PassRate': 0, 'system': system}
            self.result_dict['file_detail'].append(file_result_dict)
        else:
            file_result_dict = {'file_path': md_path, 'fileName': title, 'code_num': code_num, 'pass': pass_num,
                               'fail': fail_num, 'nocheck': nocheck_num, "nocheck(deprecated)": dp_nocheck_num,
                               'PassRate': round(pass_num / (pass_num + fail_num), 2), 'system': system}
            self.result_dict['file_detail'].append(file_result_dict)

    # 判断类型
    def judge_code_type(self, md_path, code):
        # 判断路径
        code_type = self.judge_type_path(md_path)
        md_index = md_path.rfind('\\')
        if md_path[md_index + 1:] in self.api_9 or '//API9' in code:
            code_type = 'API9'
            self.fileType = 'TS'
            self.result_dict['TSNum'] += 1
        if code_type == '':
            code_type = self.check_ts_or_js_code(code, md_path)
            if code_type == '':
                code_type = self.check_ts_or_js_guess(code)

        if code_type == 'JS' or code_type == 'JavaScript':
            self.fileType = 'JS'
            self.result_dict['JSNum'] += 1

            code_type = self.check_ts_or_js_code(code, md_path)
            code_type1 = self.check_ts_or_js_guess(code)
            if code_type1 == 'HTML':
                code_type = code_type1
            elif code_type1 == 'CSS':
                code_type = code_type1
        elif code_type == 'TS' or code_type == 'TypeScript':
            self.fileType = 'TS'
            self.result_dict['TSNum'] += 1
            code_type = 'TypeScript'
        return code_type

    @staticmethod
    def judge_type_path(md_path):
        if 'js-apis' in md_path:
            return 'JavaScript'
        elif 'JS API 1.0组件' in md_path or 'JS' in md_path or 'js' in md_path or 'JavaScript' in md_path or \
                'javascript' in md_path or 'Javascript' in md_path or 'javaScript' in md_path:
            return 'JS'
        elif 'JS API 2.0组件' in md_path or 'TS' in md_path or 'ts' in md_path or 'TypeScript' in md_path or \
                'typescript' in md_path or 'Typescript' in md_path or 'typescript' in md_path:
            return 'TS'
        else:
            return ''

    @staticmethod
    def check_ts_or_js_code(code, md_path):
        if 'js-apis' in md_path:
            return 'JavaScript'
        elif '@Entry' in code or '@Component' in code or 'build()' in code:
            return 'TypeScript'
        elif 'xxx.hml' in code or '.hml' in code or '</div>' in code:
            return 'HTML'
        elif 'xxx.css' in code or '.css' in code:
            return 'CSS'
        elif 'export default' in code or 'function' in code or 'xxx.js' in code or '.js' in code or 'var ' in code or \
                'const ' in code or 'javascript' in code or 'Javascript' in code or \
                'javaScript' in code or 'JavaScript' in code:
            return 'JavaScript'
        else:
            return ''

    @staticmethod
    def check_ts_or_js_guess(code):
        guess = Guess()
        code_type = guess.language_name(code)
        return code_type
