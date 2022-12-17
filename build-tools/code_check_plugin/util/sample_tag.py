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
import re

from util.system_dict import api9, no_callback, callback_beyond


class SampleTag:
    def sample_tag(self, md_path, lines):
        md_index = md_path.rfind('\\')
        lines = self.get_sample_tag(md_path, lines)

        if 'js-apis-util.md' in md_path:
            lines = self.start_class(lines)
        # 特殊文档不进行回调验证
        if md_path[md_index + 1:] not in no_callback:
            lines = self.callback(lines, md_path)

        lines = self.api9(lines)
        if 'js-apis-eventhub.md' not in md_path and 'js-apis-application-context.md' not in md_path:
            lines = self.use_instructions(lines, md_path)

        return lines

    @staticmethod
    def is_chinese(line):
        for i in line:
            if "\u4e00" < i < "\u9fff":
                return True
        return False

    @staticmethod
    def is_number(line):
        for j in ['7+', '8+', '9+', '10+']:
            if j in line:
                return True
        return False

    @staticmethod
    # 片段代码不做自动化测试
    def get_sample_tag(md_path, lines):

        if "js-" in md_path and "js-apis" not in md_path:
            # 片段代码的判断
            start_code = False
            code = ''
            index_k = 0
            tag_index = 0

            while index_k < len(lines) - 1:
                index_k += 1

                if not start_code and "```" in lines[index_k].replace("\n", "").replace(" ", ""):
                    tag_index = index_k
                    start_code = True
                    continue

                if start_code and "```" in lines[index_k].replace("\n", "").replace(" ", ""):
                    # print (code)
                    start_code = False
                    if "import" in code and "from" in code and len(code) < 80:
                        pass
                    else:

                        hml_number = re.findall(r'.+hml.+-->', code)
                        hml_number2 = re.findall(r'.+hml-->', code)
                        css_number = re.findall(r'/*.+css.+/*/', code)
                        css_number2 = re.findall(r'.+css.+-->', code)
                        js_number = re.findall(r'//.+js', code)
                        js_number2 = re.findall(r'/*.+.js.+/*/', code)
                        js_number3 = re.findall(r'<!--.+.js.+-->', code)
                        if 'file:///' in code:
                            lines.insert(tag_index + 1, '//包含绝对路径\n')
                            index_k += 1
                        elif len(hml_number) == 0 and len(css_number) == 0 and len(js_number) == 0 and len(
                                js_number2) == 0 and len(hml_number2) == 0 and len(js_number3) == 0 and len(
                                css_number2) == 0:
                            lines.insert(tag_index + 1, '//该示例代码不做自动化测试\n')
                            index_k += 1

                    code = ''

                if start_code:
                    code = code + lines[index_k]
        elif 'ts-' in md_path:
            # 片段代码的判断
            start_code = False
            code = ''
            index_k = 0
            tag_index = 0
            while index_k < len(lines) - 1:
                index_k += 1
                if not start_code and "```" in lines[index_k].replace('\n', '').replace(" ", ""):
                    tag_index = index_k
                    start_code = True
                    continue

                if start_code and "```" in lines[index_k].replace("\n", "").replace(" ", ""):
                    # print(code)
                    start_code = False
                    if "import" in code and "from" in code and len(code) < 80:
                        pass
                    else:
                        if 'file:///' in code:
                            lines.insert(tag_index + 1, '////包含绝对路径\n')
                            index_k += 1
                        elif '@entry' not in code and '@Entry' not in code and '@Component' not in code \
                                and '<!-- index.html -->' not in code and '// app.ets' not in code:
                            lines.insert(tag_index + 1, '//该示例代码不做自动化测试\n')
                            index_k += 1
                    code = ''
                if start_code:
                    code = code + lines[index_k]
        elif "js-apis" in md_path:

            # 片段代码的片段
            start_code = False
            code = ''
            index_k = 0
            tag_index = 0
            api_9 = False
            no_running_lock = False
            deprecated = False
            no_log = False
            no_json = False
            while index_k < len(lines) - 1:
                index_k += 1
                # 新增RunningLock下的示例代码不验证
                if 'js-apis-runninglock.md' in md_path and '## RunningLock' in lines[index_k] and 'Type' not in lines[
                        index_k]:
                    no_running_lock = True
                    continue
                if no_running_lock and '##' in lines[index_k] and '###' not in lines[index_k]:
                    no_running_lock = False

                # 新增废弃接口下的示例代码不验证
                if 'deprecated' in lines[index_k]:
                    deprecated = True
                    continue
                if deprecated and '##' in lines[index_k]:
                    deprecated = False
                if 'api_9的示例请参考如下代码' in lines[index_k]:
                    api_9 = True
                if not start_code and "```" in lines[index_k].replace("\n", "").replace(" ", ""):
                    # js-apis-hilog.md, 只跑有js标识的示例代码
                    if 'js-apis-hilog.md' in md_path and '```js' not in lines[index_k].replace("\n", "").replace(" ",
                                                                                                                 ""):
                        no_log = True
                    # apis文档中不检测json示例代码
                    if '```json' in lines[index_k].replace("\n", "").replace(" ", ""):
                        no_json = True
                    tag_index = index_k
                    start_code = True
                    continue
                if start_code and "```" in lines[index_k].replace("\n", "").replace(' ', ''):
                    start_code = False
                    if 'import' in code and 'from' in code and len(code) < 80:
                        pass
                    else:
                        # 新增runningLock不做自动化测试
                        if no_running_lock:
                            lines.insert(tag_index + 1, '//该示例代码不做自动化测试\n')
                            index_k += 1
                        # 新增废弃接口不做自动化测试
                        if deprecated:
                            lines.insert(tag_index + 1, '//该示例代码不做自动化测试(deprecated)\n')
                            index_k += 1
                        if no_log:
                            lines.insert(tag_index + 1, '//该示例代码不做自动化测试\n')
                            index_k += 1
                            no_log = False
                        # apis文档中不检测json示例代码
                        if no_json:
                            lines.insert(tag_index + 1, '//该示例代码不做自动化测试\n')
                            index_k += 1
                            no_json = False
                        inter = code[:12]
                        inter_class = code[:7]
                        if 'file:////' in code:
                            lines.insert(tag_index + 1, '////包含绝对路径\n')
                            index_k += 1
                        elif 'interface' in inter or 'Class' in inter_class:
                            lines.insert(tag_index + 1, '//该示例代码不做自动化测试\n')
                            index_k += 1
                        elif api_9:
                            lines.insert(tag_index + 1, '//API9\n')
                            index_k += 1
                            api_9 = False
                    code = ''
                if start_code:
                    code = code + lines[index_k]
        return lines

    @staticmethod
    def append_api9(lines, md_path):
        index_k = 0
        while index_k < len(lines) - 1:
            index_k += 1
            if '本模块首批接口' in lines[index_k] and '开始支持' in lines[index_k] and '9' in lines[index_k]:
                md_index = md_path.rfind('\\')
                api9.append(md_path[md_index + 1:])
                break
        return api9

    @staticmethod
    def api9(lines):
        api_9 = False
        start_code = False
        tag_index = 0
        index_k = 0
        while index_k < len(lines) - 1:
            index_k += 1
            if '本模块首批接口' in lines[index_k] and '开始支持' in lines[index_k] and '9' in lines[index_k]:
                break
            if '##' in lines[index_k] and '9+' in lines[index_k] and not api_9:
                api_9 = True
            if api_9 and '##' in lines[index_k] and '9+' not in lines[index_k]:
                api_9 = False
            if not start_code and "```" in lines[index_k].replace('\n', '').replace(' ', ''):
                tag_index = index_k
                start_code = True
                continue

            if start_code and "```" in lines[index_k].replace('\n', '').replace(' ', ''):
                start_code = False
                if api_9:
                    lines.insert(tag_index + 1, '//API9\n')
                    index_k += 1
                    api_9 = False
        return lines

    # 使用说明需要拼接
    @staticmethod
    def use_instructions(lines, md_path):
        use = False
        fa_use = False
        start_code = False
        index_k = 0
        code = ''
        start_index = 0
        while index_k < len(lines) - 1:
            index_k += 1
            if '## 使用说明' in lines[index_k] and '###' not in lines[index_k] and not use:
                use = True
                continue
            if 'js-apis-userFileManager.md' in md_path and '## userFileManager.getUserFileMgr' in lines[index_k]:
                use = True
                continue
            if '**FA模型**' in lines[index_k]:
                fa_use = True
                use = fa_use
                continue
            if use and '**Stage模型**' in lines[index_k]:
                use = fa_use
                continue

            if not start_code and "```" in lines[index_k].replace('\n', '').replace(' ', ''):
                start_index = index_k
                start_code = True
                code = ''
                continue

            if start_code and "```" in lines[index_k].replace('\n', '').replace(' ', ''):
                start_code = False
                if fa_use:
                    if '{' in code:
                        code_list = code.split('\n')
                        for i in range(len(code_list)):
                            if '}' in code_list[i]:
                                start_index += (i + 1)
                                lines.insert(start_index, '//使用说明\n')
                                index_k += 1
                                fa_use = False
                                break
                if fa_use:
                    break
                if use:
                    lines.insert(index_k, '//使用说明\n')
                    index_k += 1
                    use = False
                    break
            if start_code:
                code += lines[index_k]
        return lines

    # 以Class开头的代码，需添加在同一阶级目录示例代码之前
    @staticmethod
    def start_class(lines):
        start_code = False
        code = ''
        index_k = 0
        tag_index = 0
        while index_k < len(lines) - 1:
            index_k += 1
            if not start_code and "```" in lines[index_k].replace('\n', '').replace(' ', ''):
                tag_index = index_k
                start_code = True
                continue

            if start_code and "```" in lines[index_k].replace('\n', '').replace(' ', ''):
                start_code = False
                class_new_code = code.split('\n')
                if 'import' in code and 'from' in code and len(code) < 80:
                    pass
                else:
                    c = re.findall(r'(.*?)s', class_new_code[0])
                    if len(c) != 0:
                        if 'cla' == c[0].replace(' ', ''):
                            lines.insert(tag_index + 1, '//该class需添加在同一阶级目录示例代码之前\n')
                            index_k += 1
                code = ''
            if start_code:
                code = code + lines[index_k]
        return lines

    # 去除废弃标志以及版本号
    def take_out(self, item):
        if '<sup>' in item and self.is_number(item) and '##' in item:
            s = re.findall(r'<sup>(.*?)</sup>', item)
            s1 = re.findall(r'<sup>(.*?)<sup>', item)
            if len(s) > 0:
                item = item.replace('<sup>' + s[0] + '</sup>', '').replace('<sup>(deprecated) </sup>', '').replace('\n',
                                                                                                                   '')
            elif len(s1) > 0:
                item = item.replace('<sup>' + s1[0] + '<sup>', '').replace('<sup>(deprecated) </sup>', '').replace('\n',
                                                                                                                   '')
        else:
            item = item.replace('<sup>(deprecated) </sup>', '').replace('\n', '')
        s2 = re.findall(r'<a(.*?)</a>', item)
        if len(s2) > 0:
            item = item.replace('<a' + s2[0] + '</a>', '')
        if '<' in item and '>' in item:
            index1 = item.find('<')
            item = item[:index1]
        return item

    # 此处测试xx类中所有方法
    def callback(self, lines, md_path):
        md_path_index = md_path.rfind('\\')
        md_path = md_path[md_path_index + 1:]
        start_item = False
        void_callback = []
        result_dict = {}

        def is_chinese(line_all):
            for line in line_all:
                if "\u4e00" < line < "\u9fff":
                    return True
            return False

        for item in lines:
            if '##' in item and not is_chinese(
                    item) and not start_item and 'DataAbilityPredicates' not in item and '(deprecated)' not in item:
                start_item = True
                continue
            elif '##' in item and not is_chinese(item) and start_item or '###' in item and not is_chinese(
                    item) and start_item:
                start_item = False
                continue
            elif len(item) < 2:
                continue
            elif start_item and is_chinese(item):
                start_item = False
                continue

            if not is_chinese(item) and start_item and len(item) > 1:
                item_code = item.rfind(':')
                code = item[item_code:]
                return_value = re.findall(':(.*?)\n', code)
                if len(return_value) != 0:
                    if 'void' in return_value[0]:
                        if 'callback' in item:
                            if 'Callback' in item and r'Array\<' in item:
                                void_callback = re.findall(r'Array\\<(.*?)>', item)
                            elif 'Callback' in item and 'Array<' in item:
                                void_callback = re.findall(r'Array<(.*?)>', item)
                            elif 'Array&lt;' in item:
                                void_callback = re.findall(r'Array&lt;(.*?)&gt;', item)
                            elif r'Array\&lt;' in item:
                                void_callback = re.findall(r'Array\\&lt;(.*?)&gt;', item)
                            elif 'Callback' in item and '&lt;' in item:
                                void_callback = re.findall(r'&lt;(.*?)&gt;', item)
                            elif 'Callback' in item and '<' in item:
                                void_callback = re.findall(r'<(.*?)>', item)
                            if len(void_callback) != 0 and 'void' not in str(void_callback[0]):
                                if '[' in str(void_callback[0]) and 'void' not in str(void_callback[0]):
                                    start_square = item.find('[')
                                    end_square = item.find(']')
                                    void_callback = item[start_square + 1:end_square].replace('\\', '').replace(';', '')
                                elif '[' not in str(void_callback[0]) and 'void' not in str(void_callback[0]):
                                    void_callback = void_callback[0].replace('\\', '').replace(';', '')
                                else:
                                    void_callback = void_callback[0].replace('\\', '').replace(';', '')
                                if void_callback in result_dict:
                                    result_dict[void_callback].append(lines.index(item))
                                else:
                                    result_dict.update({void_callback: [lines.index(item)]})

                    else:
                        if 'Promise' in return_value[0]:
                            if r'Array\<' in item:
                                void_callback = re.findall(r'Array\\<(.*?)>', item)
                            elif 'Array<' in item:
                                void_callback = re.findall(r'Array<(.*?)>', item)
                            elif 'Array&lt;' in item and '&lt;' in item:
                                void_callback = re.findall(r'Array&lt;(.*?)&gt;', item)
                            elif r'Array\&lt;' in item:
                                void_callback = re.findall(r'Array\\&lt;(.*?)&gt;', item)
                            elif 'Promise&lt;' in item or r'Promise\&lt;' in item:
                                void_callback = re.findall(r'&lt;(.*?)&gt;', item)
                            elif 'Promise<' in item or r'Promise\<' in item:
                                void_callback = re.findall(r'<(.*?)>', item)
                            if len(void_callback) != 0:
                                if '[' in str(void_callback[0]) and 'void' not in str(void_callback[0]):
                                    start_square = item.find('[')
                                    end_square = item.find(']')
                                    void_callback = item[start_square + 1:end_square].replace('\\', '').replace(';', '')
                                elif '[' not in str(void_callback[0]) and 'void' not in str(void_callback[0]):
                                    void_callback = void_callback[0].replace('\\', '').replace(';', '')
                                if void_callback in result_dict:
                                    result_dict[void_callback].append(lines.index(item))
                                else:
                                    result_dict.update({void_callback: [lines.index(item)]})
                        elif 'void' not in return_value[0]:
                            if '[' in return_value[0]:
                                start_square = item.find('[')
                                end_square = item.find(']')
                                return_value[0] = item[start_square + 1:end_square]
                                if return_value[0].replace(' ', '').replace('\n', '').replace('\\', '').replace(';',
                                                                                                                '') in \
                                        result_dict:
                                    result_dict[
                                        return_value[0].replace(' ', '').replace('\n', '').replace('\\', '').replace(
                                            ';',
                                            '')].append(
                                        lines.index(item))
                                else:
                                    result_dict.update({return_value[0].replace(' ', '').replace('\n', '').replace('\\',
                                                                                                                   '')
                                                       .replace(
                                        ';', ''): [lines.index(item)]})
                            else:
                                if return_value[0].replace(' ', '').replace('\n', '').replace('\\', '').replace(';',
                                                                                                                '') \
                                        .replace('&lt;', '').replace('&gt;', '') in result_dict:
                                    result_dict[
                                        return_value[0].replace(' ', '').replace('\n', '').replace('\\', '').replace(
                                            ';',
                                            '').replace(
                                            '&lt;', '').replace('&gt;', '')].append(
                                        lines.index(item))
                                else:
                                    result_dict.update({return_value[0].replace(' ', '').replace('\n', '').replace('\\',
                                                                                                                   '')
                                                       .replace(';', '').replace(
                                        '&lt;', '').replace('&gt;', ''): [lines.index(item)]})
                start_item = False
        if 'js-apis-data-ability.md' in md_path:
            result_dict.update({'DataAbilityPredicates': [lines.index('## dataAbility.createRdbPredicates\n') + 1]})
        print('Result:', result_dict)

        # 扫描全量文件，查看是否为回调函数
        class_result = {}
        two_title = False
        class_start = False
        class_end = False
        three_title_name = ''
        for determine_class in result_dict:
            hd_index = 0
            for item in lines:
                item_true = item
                # 去除标题的废弃接口标志与版本号标志
                item = self.take_out(item)
                # 验证二级标题是否为需要的类
                if '##' in item and '###' not in item:
                    if two_title and '##' in item and '###' not in item:
                        two_title = False
                    # 对比是否为需要的二级标题类
                    if determine_class.replace('\n', '').replace(' ', '').lower() == item.replace('#', '').replace('\n',
                                                                                                                   '') \
                            .replace(' ', '').lower():
                        if md_path in callback_beyond:
                            hd_index = lines.index(item_true)
                        two_title = True
                        continue

                # 验证所需二级标题下是否有所需要的三级标题
                if two_title and '###' in item and not self.is_chinese(item):
                    # 获取三级标题
                    if '<a' in item and '</a>' in item:
                        a = item.find('<')
                        item = item[:a]
                    # 排除类似#### on('enableChange')这种情况，只需要函数名称
                    if '(' in item:
                        a = item.find('(')
                        item = item[:a].replace('<T extends KVStore>', '')
                    three_title_name = ".%s(" % item.replace('#', '').replace('\n', '').replace(' ', '')
                    if determine_class not in class_result:
                        class_start = True

                if class_start and '```' in item and not class_end:
                    class_end = True
                    class_start = False
                    continue
                # 排除第一行是需要删除的类对象
                if class_end:
                    let_number = re.findall(r'let.+ = .+\(\);', item)
                    if len(let_number) != 0:
                        continue
                # 如果第一个示例代码不存在回调关键字，就继续向下一个示例代码寻找
                if class_end and '```' in item:
                    class_end = False
                    class_start = True
                    continue

                if class_end and 'import' not in item and 'from' not in item and 'let' not in item:
                    if three_title_name in item:
                        index_class = item.find(three_title_name)
                        class_name = item[:index_class].replace('await', '').replace(' ', '')
                        if '=' in class_name:
                            index_c = class_name.find('=')
                            class_name = class_name[index_c + 1:]
                            if '.' in class_name:
                                index_c = class_name.find('.')
                                class_name = class_name[index_c + 1:]
                        if md_path in callback_beyond and hd_index != 0:
                            result = []
                            for i in result_dict[determine_class]:
                                if i > hd_index:
                                    result.append(i)
                            for i in result:
                                result_dict[determine_class].remove(i)
                        class_result.update({class_name: result_dict[determine_class]})
                        class_result[class_name].append(determine_class)
                        class_end = False
                        break
        print('class_result:', class_result)

        # 标记回调位置
        for determine_class in class_result:
            len_class = len(class_result[determine_class]) - 1
            for item in range(len_class):
                start_code = False
                example_start = False
                new_code = ''
                index_k = class_result[determine_class][item] + 4
                tag_index = 0
                class_index = class_result[determine_class][item] + 4
                for i in lines[index_k + 2:]:
                    index_k += 1
                    if '示例' in i or 'Example' in i:
                        example_start = True
                        continue
                    if not start_code and '```' in i.replace('\n', '').replace(' ', '') and example_start:
                        class_index = index_k
                        tag_index = index_k
                        start_code = True
                        continue
                    if start_code and '```' in i.replace('\n', '').replace(' ', '') and example_start:
                        start_code = False
                        if 'import' in new_code and 'from' in new_code and new_code.count('\n') == 1:
                            new_code = ''
                        else:
                            # 判断标记的class名称是否在示例代码中
                            if determine_class.lower() in new_code.lower():
                                # 获取示例代码的每一行
                                class_new_code = new_code.split('\n')
                                del class_new_code[-1]
                                class_code = False
                                let_location = 0
                                for j in class_new_code:

                                    if determine_class in j and 'import' not in j \
                                            and '%s = null' % determine_class.lower() not in j.lower() \
                                            and 'console.' not in j.lower():
                                        # 验证是否为单独的字母
                                        counts = j.count(determine_class)
                                        line_index = j.find(determine_class)
                                        before_index = str(j)
                                        for c in range(counts):
                                            # 匹配的内容前和后必须是空格，不能是其他单词
                                            try:
                                                before_index_1 = before_index[line_index - 1]
                                            except IndexError:
                                                before_index_1 = ''
                                            try:
                                                before_index_2 = before_index[line_index + len(determine_class)]
                                            except IndexError:
                                                before_index_2 = ''
                                            # 验证关键字前后是否为空格
                                            if before_index_1.lower().isalpha() and \
                                                    before_index_2.lower().isalpha():
                                                # 判断let是否为一个标记位置
                                                if 'let' in j or 'var' in j:
                                                    let_location = class_new_code.index(j) + 3
                                                    continue
                                                else:
                                                    index_pos = class_new_code.index(j) + 3
                                                    class_index += index_pos
                                                    class_code = True
                                                    break
                                            else:
                                                before_index = before_index[line_index + 1:].lower()
                                                line_index = before_index.find(determine_class.lower())

                                        if class_code:
                                            break

                                # 如果验证到最后一个关键字出现的位置仍然不存在标记情况，就可以使用let,var那一行作为标记
                                if class_code:
                                    lines.insert(class_index, '//此处测试%s&%s&类中所有方法的示例\n' % (
                                        determine_class, class_result[determine_class][-1]))
                                    index_k += 1
                                elif let_location != 0 and not class_code:
                                    index_pos = let_location
                                    class_index += index_pos
                                    lines.insert(class_index, '//此处测试%s&%s&类中所有方法的示例\n' % (
                                        determine_class, class_result[determine_class][-1]))
                                    index_k += 1

                        break
                    if start_code:
                        new_code = new_code + i

        return lines
