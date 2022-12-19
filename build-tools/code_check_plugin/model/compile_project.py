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
import os
import re
import subprocess
import time

from util.speaker import speak_i, speak_e
from util.system_dict import system_dict
from util.utils import del_folder_or_file


class CompileProject:
    def __init__(self):
        self.hapName = ''
        self.hapPath = ''
        self.imgPath = ''

    def start_compile(self, project_type, md_path, code, ets_code, originally_code):
        # 新增result子系统验证
        md_path_index = md_path.rfind('\\')
        md_path = md_path[md_path_index + 1:]
        if md_path in system_dict:
            system = system_dict[md_path]
        elif 'js-' in md_path and 'js-apis' not in md_path or 'ts-' in md_path:
            system = 'ArkUI开发框架'
        else:
            system = '查询不到子系统'
        if project_type == 'TypeScript' or ets_code:
            cwd = os.path.join(os.path.abspath(
                os.path.join(os.path.split(os.path.abspath(__file__))[0], '..')), '/project/ets_project')
        else:
            cwd = os.path.join(os.path.abspath(
                os.path.join(os.path.split(os.path.abspath(__file__))[0], '..')), '/project/js_project')

        self.imgPath = os.path.join(os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0], '..')),
                                    'img') 
        # 删除entry下的build文件夹
        rm_path = os.path.join(cwd, 'entry\\build')
        del_folder_or_file(rm_path)
        gradle_path = os.path.join(cwd, 'entry\\.gradle')
        del_folder_or_file(gradle_path)
        build_path = os.path.join(cwd, 'entry\\build')
        del_folder_or_file(build_path)
        out, err, file_size = self.build_hap(cwd, build_path)
        # 获取有用的输出信息
        if 'BUILD SUCCESSFUL' not in out:
            if 'ERROR File' in out:
                out_list = out.split('\n')
                out_start = False
                new_out = ''
                for m in out_list:
                    if 'ERROR File:' in m:
                        out_start = True
                        continue
                    if out_start:
                        new_out = new_out + m + '\n'
                        out_start = False
                out = new_out
            if 'ERROR File' in err:
                err_list = err.split('\n')
                err_start = False
                new_err = ''
                for m in err_list:
                    if 'ERROR File:' in m:
                        err_start = True
                        continue
                    if err_start:
                        new_err = new_err + m + '\n'
                        err_start = False
                err = new_err
        if 'BUILD SUCCESSFUL' in out or file_size:
            err_type = 'pass'
            if file_size:
                speak_i('编译成功')
                result_dict = {'compile_result': 'pass', 'file_path': md_path, 'code_type': project_type,
                               'originally_code': originally_code, 'code': code, 'err_type': err_type,
                               'compile_log': err + out, 'system': system}
                compile_result = 'pass'
            else:
                speak_i('编译成功,但未生成hap包')
                result_dict = {'compile_result': 'pass', 'file_path': md_path, 'code_type': project_type,
                               'originally_code': originally_code, 'code': code, 'err_type': err_type,
                               'compile_log': err + out, 'system': system}
                compile_result = 'pass'
        else:
            printout = err + out
            err_type = self.get_err_type(printout)
            type_err1 = re.findall(r'type.+is not assignable to parameter of.+', printout)
            type_err2 = re.findall(r'Type.+is missing the follow.+', printout)
            type_err3 = re.findall(r'Value of type.+is not callable.+', printout)
            type_err4 = re.findall(r'Expected.+arguments.+but got.+', printout)
            # 带有try和catch关键字且报错中是上述类型的都是nocheck
            if 'try' in code and 'catch' in code and (
                    len(type_err1) != 0 or len(type_err2) != 0 or len(type_err3) != 0 or len(type_err4) != 0):
                speak_i('编译成功')
                result_dict = {'compile_result': 'no check', 'file_path': md_path, 'code_type': project_type,
                               'originally_code': originally_code, 'code': code, 'err_type': 'pass',
                               'compile_log': 'try-catch结构不检测', 'system': system}
                compile_result = 'pass'
            elif 'BigInt literals are not available when targeting lower than ES2020' in printout:
                speak_i('编译成功')
                result_dict = {'compile_result': 'no check', 'file_path': md_path, 'code_type': project_type,
                               'originally_code': originally_code, 'code': code, 'err_type': 'pass',
                               'compile_log': 'ES2020不检测', 'system': system}
                compile_result = 'pass'
            else:
                speak_i('编译失败')
                result_dict = {'compile_result': 'fail', 'file_path': md_path, 'code_type': project_type,
                               'originally_code': originally_code, 'code': code, 'err_type': err_type,
                               'compile_log': printout, 'system': system}
                compile_result = 'fail'
        return result_dict, compile_result

    def build_hap(self, cwd, build_path):
        out = ''
        err = ''
        try:
            args = 'npm run build_hap'
            p = subprocess.Popen(args, cwd=cwd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
            out, err = p.communicate(timeout=50)
            speak_i(bytes.decode(out, encoding='utf-8', errors='ignore'))
            speak_i(bytes.decode(err, encoding='utf-8', errors='ignore'))
            out = bytes.decode(out, encoding='utf-8', errors='ignore')
            err = bytes.decode(err, encoding='utf-8', errors='ignore')
            speak_i('pid：' + str(p.pid))
        except Exception as e:
            speak_e(e)
            p.kill()
        time.sleep(3)
        # 判断是否编译出了hap包，如果有那也是编译成功的
        file_size = self.get_hap_package(build_path)
        characters = re.compile(r'[\000-\010]|[\013-\014]|[\016-\037]')
        out = characters.sub(r'', out)
        err = characters.sub(r'', err)
        return out, err, file_size

    # 获取hap包
    def get_hap_package(self, build_path):
        file_size = 0
        for dir_path, dir_names, file_names in os.walk(build_path):
            for file_path in file_names:
                md_path = os.path.join(dir_path, file_path)
                if md_path.endswith('.hap'):
                    self.hapPath = md_path
                    self.hapName = md_path
                    file_size = os.path.getsize(md_path)
                    if file_size != 0:
                        file_size = file_size / float(1024 * 1024)
        speak_i('file_size: ' + str(file_size))
        if file_size > 0:
            return True
        else:
            return False

    @staticmethod
    # 获取当前错误类型
    def get_err_type(printout):
        if 'No overload matches this call' in printout:
            err_type = '参数格式错误'
        elif "Cannot find name 'publishCallback'" in printout:
            err_type = '参数未定义'
        elif "Object is possibly 'undefined'" in printout:
            err_type = 'this指向不明'
        elif "Property" in printout and 'does not exist on type' in printout:
            err_type = '属性不存在'
        elif "Duplicate function implementation" in printout:
            err_type = '重复的function实现'
        elif 'expected' in printout:
            err_type = '代码格式错误'
        elif "Argument of type" in printout and 'is not assignable to parameter of type' in printout:
            err_type = '参数类型错误'
        elif "Invalid character" in printout:
            err_type = '无效参数'
        elif "Cannot find module" in printout and '@ohos' in printout:
            err_type = '导入模块错误'
        elif "Cannot find name" in printout:
            err_type = '参数未定义'
        else:
            err_type = '其他错误'
        return err_type
