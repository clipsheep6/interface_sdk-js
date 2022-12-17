#!/usr/bin/env python
# coding=utf-8

'''
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
'''
import re

from util.systemDict import api9, nocallback, callbackBeyond


class SampleTag:
    def sampletag(self, mdPath, lines):
        md_index = mdPath.rfind('\\')
        lines = self.getsampletag(mdPath, lines)

        if 'js-apis-util.md' in mdPath:
            lines = self.start_class(lines)
        # 特殊文档不进行回调验证
        if mdPath[md_index + 1:] not in nocallback:
            lines = self.callback(lines, mdPath)

        lines = self.api9(lines, mdPath)
        if 'js-apis-eventhub.md' not in mdPath and 'js-apis-application-context.md' not in mdPath:
            lines = self.UseInstructions(lines, mdPath)
        # # 针对特殊文档，删除await关键字
        # if 'js-apis-avsession.md' in mdPath or 'js-apis-audio.md' in mdPath:
        #     lines = self.del_await(lines)

        return lines

    # def del_await(self, lines):
    #     index_k = 0
    #     while index_k < len(lines) - 1:
    #         lines[index_k] = lines[index_k].replace('await ', '')
    #         index_k += 1
    #     return lines

    def is_chinese(self, line):
        for i in line:
            if "\u4e00" < i < "\u9fff":
                return True
        return False

    def is_number(self, line):
        for j in ['7+', '8+', '9+', '10+']:
            if j in line:
                return True
        return False

    # 片段代码不做自动化测试
    def getsampletag(self, mdPath, lines):

        if "js-" in mdPath and "js-apis" not in mdPath:
            # 片段代码的判断
            start_code = False
            code = ''
            index_k = 0
            Tag_index = 0

            while index_k < len(lines) - 1:
                index_k += 1

                if not start_code and "```" in lines[index_k].replace("\n", "").replace(" ", ""):
                    Tag_index = index_k
                    start_code = True
                    continue

                if start_code and "```" in lines[index_k].replace("\n", "").replace(" ", ""):
                    # print (code)
                    start_code = False
                    if "import" in code and "from" in code and len(code) < 80:
                        pass
                    else:

                        hmlnumber = re.findall(r'.+hml.+-->', code)
                        hmlnumber2 = re.findall(r'.+hml-->', code)
                        cssnumber = re.findall(r'/*.+css.+/*/', code)
                        cssnumber2 = re.findall(r'.+css.+-->', code)
                        jsnumber = re.findall(r'//.+js', code)
                        jsnumber2 = re.findall(r'/*.+.js.+/*/', code)
                        jsnumber3 = re.findall(r'<!--.+.js.+-->', code)
                        if 'file:///' in code:
                            lines.insert(Tag_index + 1, '//包含绝对路径\n')
                            index_k += 1
                        elif len(hmlnumber) == 0 and len(cssnumber) == 0 and len(jsnumber) == 0 and len(
                                jsnumber2) == 0 and len(hmlnumber2) == 0 and len(jsnumber3) == 0 and len(
                            cssnumber2) == 0:
                            lines.insert(Tag_index + 1, '//该示例代码不做自动化测试\n')
                            index_k += 1

                    code = ''

                if start_code:
                    code = code + lines[index_k]
        elif 'ts-' in mdPath:
            # 片段代码的判断
            start_code = False
            code = ''
            index_k = 0
            Tag_index = 0
            while index_k < len(lines) - 1:
                index_k += 1
                if not start_code and "```" in lines[index_k].replace('\n', '').replace(" ", ""):
                    Tag_index = index_k
                    start_code = True
                    continue

                if start_code and "```" in lines[index_k].replace("\n", "").replace(" ", ""):
                    # print(code)
                    start_code = False
                    if "import" in code and "from" in code and len(code) < 80:
                        pass
                    else:
                        if 'file:///' in code:
                            lines.insert(Tag_index + 1, '////包含绝对路径\n')
                            index_k += 1
                        elif '@entry' not in code and '@Entry' not in code and '@Component' not in code \
                                and '<!-- index.html -->' not in code and '// app.ets' not in code:
                            lines.insert(Tag_index + 1, '//该示例代码不做自动化测试\n')
                            index_k += 1
                    code = ''
                if start_code:
                    code = code + lines[index_k]
        elif "js-apis" in mdPath:

            # 片段代码的片段
            start_code = False
            code = ''
            index_k = 0
            Tag_index = 0
            API9 = False
            noRunningLock = False
            deprecated = False
            nohilog = False
            notJson = False
            while index_k < len(lines) - 1:
                index_k += 1
                # 新增RunningLock下的示例代码不验证
                if 'js-apis-runninglock.md' in mdPath and '## RunningLock' in lines[index_k] and 'Type' not in lines[
                    index_k]:
                    noRunningLock = True
                    continue
                if noRunningLock and '##' in lines[index_k] and '###' not in lines[index_k]:
                    noRunningLock = False

                # 新增废弃接口下的示例代码不验证
                if 'deprecated' in lines[index_k]:
                    deprecated = True
                    continue
                if deprecated and '##' in lines[index_k]:
                    deprecated = False
                if 'API9的示例请参考如下代码' in lines[index_k]:
                    API9 = True
                if not start_code and "```" in lines[index_k].replace("\n", "").replace(" ", ""):
                    # js-apis-hilog.md, 只跑有js标识的示例代码
                    if 'js-apis-hilog.md' in mdPath and '```js' not in lines[index_k].replace("\n", "").replace(" ",
                                                                                                                ""):
                        nohilog = True
                    # apis文档中不检测json示例代码
                    if '```json' in lines[index_k].replace("\n", "").replace(" ", ""):
                        notJson = True
                    Tag_index = index_k
                    start_code = True
                    continue
                if start_code and "```" in lines[index_k].replace("\n", "").replace(' ', ''):
                    start_code = False
                    if 'import' in code and 'from' in code and len(code) < 80:
                        pass
                    else:
                        # 新增runningLock不做自动化测试
                        if noRunningLock:
                            lines.insert(Tag_index + 1, '//该示例代码不做自动化测试\n')
                            index_k += 1
                        # 新增废弃接口不做自动化测试
                        if deprecated:
                            lines.insert(Tag_index + 1, '//该示例代码不做自动化测试(deprecated)\n')
                            index_k += 1
                        # hilog只跑js标志代码
                        if nohilog:
                            lines.insert(Tag_index + 1, '//该示例代码不做自动化测试\n')
                            index_k += 1
                            nohilog = False
                        # apis文档中不检测json示例代码
                        if notJson:
                            lines.insert(Tag_index + 1, '//该示例代码不做自动化测试\n')
                            index_k += 1
                            notJson = False
                        inter = code[:12]
                        interclass = code[:7]
                        if 'file:////' in code:
                            lines.insert(Tag_index + 1, '////包含绝对路径\n')
                            index_k += 1
                        elif 'interface' in inter or 'Class' in interclass:
                            lines.insert(Tag_index + 1, '//该示例代码不做自动化测试\n')
                            index_k += 1
                        elif API9:
                            lines.insert(Tag_index + 1, '//API9\n')
                            index_k += 1
                            API9 = False
                    code = ''
                if start_code:
                    code = code + lines[index_k]
        return lines

    def append_api9(self, lines, mdPath):
        index_k = 0
        while index_k < len(lines) - 1:
            index_k += 1
            if '本模块首批接口' in lines[index_k] and '开始支持' in lines[index_k] and '9' in lines[index_k]:
                md_index = mdPath.rfind('\\')
                api9.append(mdPath[md_index + 1:])
                break
        return api9

    def api9(self, lines, mdPath):
        API9 = False
        start_code = False
        Tag_index = 0
        index_k = 0
        while index_k < len(lines) - 1:
            index_k += 1
            if '本模块首批接口' in lines[index_k] and '开始支持' in lines[index_k] and '9' in lines[index_k]:
                break
            if '##' in lines[index_k] and '9+' in lines[index_k] and not API9:
                API9 = True
            if API9 and '##' in lines[index_k] and '9+' not in lines[index_k]:
                API9 = False
            if not start_code and "```" in lines[index_k].replace('\n', '').replace(' ', ''):
                Tag_index = index_k
                start_code = True
                continue

            if start_code and "```" in lines[index_k].replace('\n', '').replace(' ', ''):
                start_code = False
                if API9:
                    lines.insert(Tag_index + 1, '//API9\n')
                    index_k += 1
                    API9 = False
        return lines

    # 使用说明需要拼接
    def UseInstructions(self, lines, mdPath):
        Use = False
        FaUse = False
        start_code = False
        index_k = 0
        code = ''
        while index_k < len(lines) - 1:
            index_k += 1
            if '## 使用说明' in lines[index_k] and '###' not in lines[index_k] and not Use:
                Use = True
                continue
            if 'js-apis-userFileManager.md' in mdPath and '## userFileManager.getUserFileMgr' in lines[index_k]:
                Use = True
                continue
            if '**FA模型**' in lines[index_k]:
                FaUse = True
                Use = FaUse
                continue
            if Use and '**Stage模型**' in lines[index_k]:
                Use = FaUse
                continue

            if not start_code and "```" in lines[index_k].replace('\n', '').replace(' ', ''):
                start_index = index_k
                start_code = True
                code = ''
                continue

            if start_code and "```" in lines[index_k].replace('\n', '').replace(' ', ''):
                start_code = False
                if FaUse:
                    if '{' in code:
                        codelist = code.split('\n')
                        for i in range(len(codelist)):
                            if '}' in codelist[i]:
                                start_index += (i + 1)
                                lines.insert(start_index, '//使用说明\n')
                                index_k += 1
                                FaUse = False
                                break
                if FaUse:
                    break
                if Use:
                    lines.insert(index_k, '//使用说明\n')
                    index_k += 1
                    Use = False
                    break
            if start_code:
                code += lines[index_k]
        return lines

    # 以Class开头的代码，需添加在同一阶级目录示例代码之前
    def start_class(self, lines):
        start_code = False
        code = ''
        index_k = 0
        Tag_index = 0
        while index_k < len(lines) - 1:
            index_k += 1
            if not start_code and "```" in lines[index_k].replace('\n', '').replace(' ', ''):
                Tag_index = index_k
                start_code = True
                continue

            if start_code and "```" in lines[index_k].replace('\n', '').replace(' ', ''):
                start_code = False
                classnewcode = code.split('\n')
                if 'import' in code and 'from' in code and len(code) < 80:
                    pass
                else:
                    c = re.findall(r'(.*?)s', classnewcode[0])
                    if len(c) != 0:
                        if 'cla' == c[0].replace(' ', ''):
                            lines.insert(Tag_index + 1, '//该class需添加在同一阶级目录示例代码之前\n')
                            index_k += 1
                code = ''
            if start_code:
                code = code + lines[index_k]
        return lines

    # 去除废弃标志以及版本号
    def takeOut(self, item):
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
    def callback(self, lines, mdPath):
        mdpathindex = mdPath.rfind('\\')
        mdpath = mdPath[mdpathindex + 1:]
        start_item = False
        Asyncallback = []
        ResultDict = {}

        def is_chinese(line):
            for i in line:
                if "\u4e00" < i < "\u9fff":
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
                itemcode = item.rfind(':')
                code = item[itemcode:]
                returnValue = re.findall(':(.*?)\n', code)
                value = re.findall(':(.*?)\n', item)
                if len(returnValue) != 0:
                    if 'void' in returnValue[0]:
                        if 'callback' in item:
                            if 'Callback' in item and 'Array\<' in item:
                                Asyncallback = re.findall(r'Array\\<(.*?)>', item)
                            elif 'Callback' in item and 'Array<' in item:
                                Asyncallback = re.findall(r'Array<(.*?)>', item)
                            elif 'Array&lt;' in item:
                                Asyncallback = re.findall(r'Array&lt;(.*?)&gt;', item)
                            elif 'Array\&lt;' in item:
                                Asyncallback = re.findall(r'Array\\&lt;(.*?)&gt;', item)
                            elif 'Callback' in item and '&lt;' in item:
                                Asyncallback = re.findall(r'&lt;(.*?)&gt;', item)
                            elif 'Callback' in item and '<' in item:
                                Asyncallback = re.findall(r'<(.*?)>', item)
                            if len(Asyncallback) != 0 and 'void' not in str(Asyncallback[0]):
                                if '[' in str(Asyncallback[0]) and 'void' not in str(Asyncallback[0]):
                                    startz = item.find('[')
                                    endz = item.find(']')
                                    Asyncallback = item[startz + 1:endz].replace('\\', '').replace(';', '')
                                elif '[' not in str(Asyncallback[0]) and 'void' not in str(Asyncallback[0]):
                                    Asyncallback = Asyncallback[0].replace('\\', '').replace(';', '')
                                else:
                                    Asyncallback = Asyncallback[0].replace('\\', '').replace(';', '')
                                if Asyncallback in ResultDict:
                                    ResultDict[Asyncallback].append(lines.index(item))
                                else:
                                    ResultDict.update({Asyncallback: [lines.index(item)]})

                    else:
                        if 'Promise' in returnValue[0]:
                            if 'Array\<' in item:
                                Asyncallback = re.findall(r'Array\\<(.*?)>', item)
                            elif 'Array<' in item:
                                Asyncallback = re.findall(r'Array<(.*?)>', item)
                            elif 'Array&lt;' in item and '&lt;' in item:
                                Asyncallback = re.findall(r'Array&lt;(.*?)&gt;', item)
                            elif 'Array\&lt;' in item:
                                Asyncallback = re.findall(r'Array\\&lt;(.*?)&gt;', item)
                            elif 'Promise&lt;' in item or 'Promise\&lt;' in item:
                                Asyncallback = re.findall(r'&lt;(.*?)&gt;', item)
                            elif 'Promise<' in item or 'Promise\<' in item:
                                Asyncallback = re.findall(r'<(.*?)>', item)
                            if len(Asyncallback) != 0:
                                if '[' in str(Asyncallback[0]) and 'void' not in str(Asyncallback[0]):
                                    startz = item.find('[')
                                    endz = item.find(']')
                                    Asyncallback = item[startz + 1:endz].replace('\\', '').replace(';', '')
                                elif '[' not in str(Asyncallback[0]) and 'void' not in str(Asyncallback[0]):
                                    Asyncallback = Asyncallback[0].replace('\\', '').replace(';', '')
                                if Asyncallback in ResultDict:
                                    ResultDict[Asyncallback].append(lines.index(item))
                                else:
                                    ResultDict.update({Asyncallback: [lines.index(item)]})
                        elif 'void' not in returnValue[0]:
                            if '[' in returnValue[0]:
                                startz = item.find('[')
                                endz = item.find(']')
                                returnValue[0] = item[startz + 1:endz]
                                if returnValue[0].replace(' ', '').replace('\n', '').replace('\\', '').replace(';',
                                                                                                               '') in ResultDict:
                                    ResultDict[
                                        returnValue[0].replace(' ', '').replace('\n', '').replace('\\', '').replace(';',
                                                                                                                    '')].append(
                                        lines.index(item))
                                else:
                                    ResultDict.update({returnValue[0].replace(' ', '').replace('\n', '').replace('\\',
                                                                                                                 '').replace(
                                        ';', ''): [lines.index(item)]})
                            else:
                                if returnValue[0].replace(' ', '').replace('\n', '').replace('\\', '').replace(';',
                                                                                                               '').replace(
                                    '&lt;', '').replace('&gt;', '') in ResultDict:
                                    ResultDict[
                                        returnValue[0].replace(' ', '').replace('\n', '').replace('\\', '').replace(';',
                                                                                                                    '').replace(
                                            '&lt;', '').replace('&gt;', '')].append(
                                        lines.index(item))
                                else:
                                    ResultDict.update({returnValue[0].replace(' ', '').replace('\n', '').replace('\\',
                                                                                                                 '').replace(
                                        ';', '').replace(
                                        '&lt;', '').replace('&gt;', ''): [lines.index(item)]})
                start_item = False
        if 'js-apis-data-ability.md' in mdPath:
            ResultDict.update({'DataAbilityPredicates': [lines.index('## dataAbility.createRdbPredicates\n') + 1]})
        print('Result:', ResultDict)

        # 扫描全量文件，查看是否为回调函数
        ClassResult = {}
        twotitle = False
        classstart = False
        classend = False
        className = ''
        ThreeTitleName = ''
        # datermineClass 是二级标题的类名
        for determineClass in ResultDict:
            hd_index = 0
            for item in lines:
                item_true = item
                # 去除标题的废弃接口标志与版本号标志
                item = self.takeOut(item)
                # 验证二级标题是否为需要的类
                if '##' in item and '###' not in item:
                    if twotitle and '##' in item and '###' not in item:
                        twotitle = False
                    # 对比是否为需要的二级标题类
                    if determineClass.replace('\n', '').replace(' ', '').lower() == item.replace('#', '').replace('\n',
                                                                                                                  '').replace(
                        ' ', '').lower():
                        if mdpath in callbackBeyond:
                            hd_index = lines.index(item_true)
                        twotitle = True
                        continue

                # 验证所需二级标题下是否有所需要的三级标题
                if twotitle and '###' in item and not self.is_chinese(item):
                    # 获取三级标题
                    if '<a' in item and '</a>' in item:
                        a = item.find('<')
                        item = item[:a]
                    # 排除类似#### on('enableChange')这种情况，只需要函数名称
                    if '(' in item:
                        a = item.find('(')
                        item = item[:a].replace('<T extends KVStore>', '')
                    ThreeTitleName = ".%s(" % item.replace('#', '').replace('\n', '').replace(' ', '')
                    if determineClass not in ClassResult:
                        classstart = True

                if classstart and '```' in item and not classend:
                    classend = True
                    classstart = False
                    continue
                # 排除第一行是需要删除的类对象
                if classend:
                    letNumber = re.findall(r'let.+ = .+();', item)
                    if len(letNumber) != 0:
                        continue
                # 如果第一个示例代码不存在回调关键字，就继续向下一个示例代码寻找
                if classend and '```' in item:
                    classend = False
                    classstart = True
                    continue

                if classend and 'import' not in item and 'from' not in item and 'let' not in item:
                    if ThreeTitleName in item:
                        index_class = item.find(ThreeTitleName)
                        className = item[:index_class].replace('await', '').replace(' ', '')
                        if '=' in className:
                            index_c = className.find('=')
                            className = className[index_c + 1:]
                            if '.' in className:
                                index_c = className.find('.')
                                className = className[index_c + 1:]
                        if mdpath in callbackBeyond and hd_index != 0:
                            result = []
                            for i in ResultDict[determineClass]:
                                if i > hd_index:
                                    result.append(i)
                            for i in result:
                                ResultDict[determineClass].remove(i)
                        ClassResult.update({className: ResultDict[determineClass]})
                        ClassResult[className].append(determineClass)
                        classend = False
                        break
        print('classResult:', ClassResult)

        # 标记回调位置
        for determineClass in ClassResult:
            Lenclass = len(ClassResult[determineClass]) - 1
            for item in range(Lenclass):
                start_code = False
                shili_start = False
                newcode = ''
                index_k = ClassResult[determineClass][item] + 4
                Tag_index = 0
                class_index = ClassResult[determineClass][item] + 4
                for i in lines[index_k + 2:]:
                    index_k += 1
                    if '示例' in i or 'Example' in i:
                        shili_start = True
                        continue
                    if not start_code and '```' in i.replace('\n', '').replace(' ', '') and shili_start:
                        class_index = index_k
                        Tag_index = index_k
                        start_code = True
                        continue
                    if start_code and '```' in i.replace('\n', '').replace(' ', '') and shili_start:
                        start_code = False
                        if 'import' in newcode and 'from' in newcode and newcode.count('\n') == 1:
                            newcode = ''
                        else:
                            # 判断标记的class名称是否在示例代码中
                            if determineClass.lower() in newcode.lower():
                                # 获取示例代码的每一行
                                classnewcode = newcode.split('\n')
                                del classnewcode[-1]
                                letter = 'abcdefghijklmnopqrstuvwxyz'
                                classcode = False
                                letlocation = 0
                                for j in classnewcode:

                                    if determineClass in j and 'import' not in j \
                                            and '%s = null' % determineClass.lower() not in j.lower() \
                                            and 'console.' not in j.lower():
                                        # 验证是否为单独的字母
                                        cout = j.count(determineClass)
                                        lindex = j.find(determineClass)
                                        jindex = str(j)
                                        for c in range(cout):
                                            # 匹配的内容前和后必须是空格，不能是其他单词
                                            try:
                                                jindex_1 = jindex[lindex - 1]
                                            except IndexError:
                                                jindex_1 = ''
                                            try:
                                                jindex_2 = jindex[lindex + len(determineClass)]
                                            except IndexError:
                                                jindex_2 = ''
                                            # 验证关键字前后是否为空格
                                            if jindex_1.lower() not in letter and \
                                                    jindex_2.lower() not in letter:
                                                # 判断let是否为一个标记位置
                                                if 'let' in j or 'var' in j:
                                                    letlocation = classnewcode.index(j) + 3
                                                    continue
                                                else:
                                                    index_pos = classnewcode.index(j) + 3
                                                    class_index += index_pos
                                                    classcode = True
                                                    break
                                            else:
                                                jindex = jindex[lindex + 1:].lower()
                                                lindex = jindex.find(determineClass.lower())

                                        if classcode:
                                            break

                                # 如果验证到最后一个关键字出现的位置仍然不存在标记情况，就可以使用let,var那一行作为标记
                                if classcode:
                                    lines.insert(class_index, '//此处测试%s&%s&类中所有方法的示例\n' % (
                                        determineClass, ClassResult[determineClass][-1]))
                                    index_k += 1
                                elif letlocation != 0 and not classcode:
                                    index_pos = letlocation
                                    class_index += index_pos
                                    lines.insert(class_index, '//此处测试%s&%s&类中所有方法的示例\n' % (
                                        determineClass, ClassResult[determineClass][-1]))
                                    index_k += 1

                        break
                    if start_code:
                        newcode = newcode + i

        return lines
