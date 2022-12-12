# --coding: utf-8 --
import datetime
import json
import os
import re
from time import *

from guesslang import Guess
from styleframe import StyleFrame, Styler
import pandas as pd
from model.CodeWrite import CodeWrite
from model.CompileProject import ComplieProject
from util.SampleTag import SampleTag
from util.speaker import speak_i
from util.systemDict import systemDict, noTest, api9, special, RepeatDefinition, fileio, data_rdb, InstructionsForUse, \
    handling_import, handling_code, request
from util.utils import checkEnvironment, delFolderOrFile


class MaterialDetection:
    def __init__(self):
        self.MDFilePath = ''
        self.resultPath = ''
        self.fileType = ''
        self.batPath = ''
        self.specialFlag = False
        self.resultDict = {"startTime": '', "endTime": '', 'fileNum': 0, 'total': 0, 'pass': 0, 'fail': 0, 'JSNum': 0,
                           'JSPass': 0, 'JSFail': 0, 'TSNum': 0, 'TSPass': 0, 'TSFail': 0, 'detail': [],
                           'filedetail': []}

        self.resultName = ''
        self.jsonName = ''

    def is_number(self, line):
        for j in ['7+', '8+', '9+', '10+']:
            if j in line:
                return True
        return False

    def is_chinese(self, line):
        for i in line:
            if '\u4e00' < i < '\u9fff':
                return True
        return False

    def operation(self, MDFilePath, resultPath, batPath, resultName, jsonName):
        self.resultName = resultName
        self.jsonName = jsonName
        # 开始检查时间
        startTime = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        starttime = time()
        speak_i('start time: ' + startTime)
        self.resultDict["startTime"] = startTime
        # 验证环境，检查运行环境，判断jdk版本和nodejs版本
        envFlag = checkEnvironment()
        with open(MDFilePath, 'r', encoding='utf8') as f:
            MDFilePath = f.readlines()
        MDFilePath = [MDFile.replace('\n', '') for MDFile in MDFilePath if '.md' in MDFile]
        if envFlag:
            self.MDFilePath = MDFilePath
            self.resultPath = resultPath
            self.batPath = batPath
            # 检测MDFilePath是文件还是文件夹
            if len(self.MDFilePath) == 1:
                # 检测是否为不自动化的文档

                self.checkMDFile(self.MDFilePath[0], self.batPath)
            else:
                # 检测文件夹下的md文件
                self.checkFolder()
        else:
            speak_i('请检查jdk和node.js是否安装，jdk版本必须是11版本')
        speak_i('result path: ' + os.path.join(self.resultPath, self.resultName))
        speak_i('json path: ' + os.path.join(self.resultPath, self.jsonName))
        # 结束时间
        endTime = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        endtime = time()
        speak_i('end time: ' + endTime)
        runtime = endtime - starttime
        speak_i('总共用时：' + str(runtime))
        self.resultDict["endTime"] = endTime
        # 将结果写入到json文件中
        self.writeResult(resultPath)

    def writeResult(self, resultPath):
        # 将结果写入到json文件中
        with open(resultPath + '/' + str(self.jsonName), 'w', encoding='utf-8') as f:
            f.write(json.dumps(self.resultDict, ensure_ascii=False))
        output_path = os.path.join(self.resultPath, self.resultName)
        writer = StyleFrame.ExcelWriter(output_path)

        data_sheet_object1 = pd.DataFrame.from_dict(self.resultDict["filedetail"])
        try:
            data_sheet_object = pd.DataFrame.from_dict(self.resultDict["detail"])
            sf = StyleFrame(data_sheet_object)
            sf.set_column_width(columns=["E", "F", "H"], width=50)
            sf.set_column_width(columns=["B", "D"], width=20)
            sf.set_column_width(columns=["G"], width=20)
            sf.set_column_width(columns=["C"], width=30)
            sf.apply_column_style(cols_to_style=["code", 'compileLog', 'originallycode'],
                                  styler_obj=Styler(horizontal_alignment="left"), style_header=True)

            for i in range(1, len(self.resultDict["detail"]) + 2):
                sf.set_row_height(i, 30)
            sf.to_excel(writer, sheet_name='result', index=True, encoding='utf-8')
        except:
            pass
        sf1 = StyleFrame(data_sheet_object1)
        sf1.set_column_width(columns=["B"], width=50)
        sf1.set_column_width(columns=["C", "H"], width=25)
        sf1.set_column_width(columns=["I"], width=10)
        sf1.set_column_width(columns=["J", "D", "E", "F"], width=20)
        sf1.set_column_width(columns=["G"], width=20)

        for i in range(1, len(self.resultDict["filedetail"]) + 2):
            sf1.set_row_height(i, 30)

        sf1.to_excel(writer, sheet_name='passRate', index=True, encoding='utf-8')
        writer.save()

    # 检测文件夹下的md文档
    def checkFolder(self):
        for mdPath in self.MDFilePath:
            # 检测是否为md并且排除不自动化的文档
            if mdPath.endswith('.md'):
                self.resultDict["fileNum"] += 1
                self.checkMDFile(mdPath, self.batPath)

    # 检测md文件，打开一个新的
    def checkMDFile(self, mdPath, batPath):
        # 打开MD文件，查看内容
        codeNum = 0
        passNum = 0
        failNum = 0
        nocheckNum = 0
        DPnocheckNum = 0
        hmlName = ''
        cssName = ''
        jsName = ''
        speak_i("MD file path: " + mdPath)

        with open(mdPath, 'r', encoding='utf8', errors='ignore') as f:
            lines = f.readlines()
        # 添加子系统验证
        mdpathindex = mdPath.rfind('\\')
        if mdpathindex != -1:
            mdpath = mdPath[mdpathindex + 1:]
        else:
            mdpath = mdPath
        if mdpath in systemDict:
            system = systemDict[mdpath]
        elif 'js' in mdPath and 'js-apis' not in mdPath or 'ts-' in mdPath:
            system = 'ArkUI开发框架'
        else:
            system = '查询不到子系统'
        # js-apis-medialibrary.md 废弃接口直接拼接import
        deprecatedcode = False
        # js-apis-medialibrary.md 所有示例代码都需要拼接前三个示例
        mediaLibrary = []
        # 判断代码是属于什么类型
        code = ''
        start_code = False
        importCode = ''
        InstructionsForUseCode = ''
        InstructionsForUseStart = False

        classCode = ''
        callbackCode = {}
        StartCode = {}
        start_callback = False
        classTopic = False
        callCode = ''
        title = ''
        titlestart = True
        print_no_test = False
        rawfile = ''
        # 如果不包含promise和callback的回调函数将直接获取函数所在行作为示例放到回调函数中
        CompleteCallback = False
        CompleteCallbackCode = ""
        getCompleteCallbackCode = True
        # 验证示例字眼下的引号是否规范
        slSpecification = False
        noslSpecification = False
        quotes = True
        # camera文件需要特殊回调同级
        specail_input = False
        specail_output = False
        # 获取方法名称，用于获取方法体

        samletag = SampleTag()
        api9 = samletag.append_api9(lines, mdPath)
        codeSkip = False
        # 修改使用api几进行操作
        # 如果全量验证api9，则将etsCode = True
        # 如果全量验证api8，则将etsCode = False
        etsCode = True
        if 'apis' not in mdPath and 'js-' in mdPath and mdpath.startswith('js-'):
            etsCode = False

        if etsCode and mdpath not in noTest or not etsCode and mdpath not in api9 and mdpath not in noTest:

            lines = samletag.sampletag(mdPath, lines)
            if '需单点查看' in mdPath:
                self.specialFlag = True
            if not self.specialFlag:
                # md文件中代码进行单独编译
                codeType = ''

                codeWrite = CodeWrite()

                try:
                    for item in lines:
                        if 'js-apis-camera.md' in mdPath and '## createCameraInput' in item:
                            specail_input = True
                            continue
                        if 'js-apis-camera.md' in mdPath and '##' in item and specail_input:
                            specail_input = False
                        if 'js-apis-camera.md' in mdPath and (
                                '## createPreviewOutput' in item or '## createPhotoOutput' in item or '## createVideoOutput' in item or '## createMetadataOutput' in item):
                            specail_output = True
                            continue
                        if 'js-apis-camera.md' in mdPath and '##' in item and specail_output:
                            specail_output = False
                        # js-apis-Context.md js-apis-securityLabel.md这两个文件的代码，运行的时候，要加上使用说明里的代码
                        if '## 使用说明' in item:
                            InstructionsForUseStart = True
                        if 'js-apis-userFileManager.md' in mdPath and '## userFileManager.getUserFileMgr' in item:
                            InstructionsForUseStart = True
                        if self.is_chinese(item) and '#' not in item and code.count(
                                '\n') == 0 and '//' not in item and '/*' not in item:
                            continue
                        # js-apis-util.md 跳过Scope下面的方法
                        if 'js-apis-util.md' in mdPath and '## Scope' in item and '###' not in item:
                            codeSkip = True
                            continue
                        # camera 跳过CaptureSession下面的方法

                        if codeSkip and '##' in item and '###' not in item:
                            codeSkip = False
                        if 'js-apis-camera.md' in mdPath and '## CaptureSession' in item and 'Error' not in item:
                            codeSkip = True
                            continue

                        # 获取示例字眼，检测示例代码是否规范
                        slnumber = re.findall(r'.+示例.+', item)
                        if len(slnumber) == 1 and len(item) < 10:
                            slSpecification = True
                            continue
                        if '    ```' in item and slSpecification:
                            noslSpecification = True
                        if '##' in item and slSpecification:
                            if quotes:
                                resultDict = {'compileResult': "fail", 'filePath': mdPath, 'codeType': codeType,
                                              'originallycode': code, "code": code, "errType": '引号格式错误',
                                              'compileLog': '无引号，格式错误无法获取示例代码', 'system': system}
                                codeNum += 1
                                failNum += 1
                                self.resultDict["fail"] += 1
                                code = ""
                                self.resultDict["detail"].append(resultDict)
                            slSpecification = False
                            noslSpecification = False
                            quotes = True
                        if slSpecification and '```' in item and quotes:
                            quotes = False
                        if slSpecification and quotes:
                            code = code + item

                        # 输出示例代码不做自动化测试
                        if '**输出：**' in item:
                            print_no_test = True
                            continue
                        if '##' in item and print_no_test:
                            print_no_test = False
                            start_code = False
                            code = ''
                        if titlestart:
                            title = item.replace('#', '').replace(' ', '')
                            titlestart = False
                        # 回调是否结束
                        if '##' in item and start_callback and '###' not in item and item[0] == '#':
                            start_callback = False
                            CompleteCallback = False

                        # 回调是否结束，排除废除接口标志和版本号
                        if '<sup>' in item and self.is_number(item):
                            s = re.findall(r'<sup>(.*?)</sup>', item)
                            s1 = re.findall(r'<sup>(.*?)<sup>', item)
                            if len(s) > 0:
                                if item.replace('<sup>(deprecated) </sup>', '').replace('<sup>' + s[0] + '</sup>',
                                                                                        '') in callbackCode:
                                    if item.count('#') > 2:
                                        item = item.replace('#', '').replace(' ', '')
                                        item = '## ' + item
                                    start_callback = True
                                    callCode = item.replace('<sup>(deprecated) </sup>', '').replace(
                                        '<sup>' + s[0] + '</sup>', '')
                                    continue
                            elif len(s1) > 0:
                                if item.replace('<sup>(deprecated) </sup>', '').replace('<sup>' + s1[0] + '<sup>',
                                                                                        '') in callbackCode:
                                    if item.count('#') > 2:
                                        item = item.replace('#', '').replace(' ', '')
                                        item = '## ' + item
                                    start_callback = True
                                    callCode = item.replace('<sup>(deprecated) </sup>', '').replace(
                                        '<sup>' + s1[0] + '<sup>', '')
                                    continue
                        else:
                            s = re.findall(r'<a(.*?)</a>', item)
                            if len(s) > 0:
                                item = item.replace('<sup>(deprecated) </sup>', '').replace('<a' + s[0] + '</a>', '')
                                if item in callbackCode:
                                    if item.count('#') > 2:
                                        item = item.replace('#', '').replace(' ', '').replace('\n', '')
                                        item = '## ' + item + '\n'
                                    start_callback = True
                                    callCode = item
                                    continue
                            else:
                                item = item.replace('<sup>(deprecated) </sup>', '')
                                if item in callbackCode:
                                    if item.count('#') > 2:
                                        item = item.replace('#', '').replace(' ', '').replace('\n', '')
                                        item = '## ' + item + '\n'
                                    start_callback = True
                                    callCode = item
                                    continue
                        # 检测是否在需要回调的内容中存在完整的回调
                        if not CompleteCallback and '(' in item and ':' in item \
                                and 'Promise' not in item and 'callback' not in item and \
                                'Callback' not in item and getCompleteCallbackCode and start_callback and \
                                not start_code and '|' not in item:
                            CompleteCallback = True
                            CompleteCallbackCode = item
                            getCompleteCallbackCode = False
                        if '###' in item:
                            getCompleteCallbackCode = True

                        # 类的调用结束
                        if classTopic and '##' in item and '###' not in item:
                            classTopic = False

                        # js-apis-medialibrary.md文档检测是否为废弃接口
                        if 'deprecated' in item and '##' in item and 'js-apis-medialibrary.md' in mdPath:
                            deprecatedcode = True
                            continue
                        if 'deprecated' not in item and '##' in item and deprecatedcode and 'js-apis-medialibrary.md' in mdPath:
                            deprecatedcode = False

                        # 检测项目开始
                        if not start_code and "```" in item.replace("\n", '').replace(" ", ''):
                            code = ''
                            if 'js-apis-hilog.md' in mdPath:
                                code = ''
                            start_code = True
                            continue
                        # 完整回调用例修改
                        if CompleteCallback and start_code:
                            if "(" in CompleteCallbackCode:
                                index = CompleteCallbackCode.find('(')
                                CompleteCallbackCode1 = CompleteCallbackCode[:index + 1]
                                if CompleteCallbackCode1 in item:
                                    CompleteCallbackCode = item
                        if '###' in item:
                            CompleteCallbackCode = ''

                        # 项目执行
                        if start_code and "```" in item.replace('\n', '').replace(" ", '') and not print_no_test:
                            originallycode = code
                            code = special(code, mdPath, specail_input, specail_output)
                            # 如果项目第一行是创建的类对象就删除
                            codeType = self.checkTSOrJSCode(code, mdPath)
                            if mdpath in api9 or '//API9' in code:
                                codeType = 'API9'
                            self.resultDict["total"] += 1
                            start_code = False
                            # 如果不验证api9并且api9的标志或者文件属于api9则不验证
                            if not etsCode and "//API9" in code:
                                start_code = False
                                continue

                            if codeSkip:
                                nocheckNum += 1
                                codeNum += 1
                                code = ''
                                continue

                            # 带有使用说明的代码，运行的时候，要加上使用说明里的代码
                            if InstructionsForUseStart:
                                if '//使用说明\n' in code:
                                    InstructionsForUseStart = False
                                    InstructionsForUseCode = code
                                    resultDict = {'compileResult': "pass", 'filePath': mdPath, 'codeType': codeType,
                                                  'originallycode': code, "code": code, "errType": 'pass',
                                                  'compileLog': '使用说明，已和该文件后续代码进行合并', 'system': system}
                                    codeNum += 1
                                    passNum += 1
                                    self.resultDict['pass'] += 1
                                    self.resultDict['detail'].append(resultDict)
                                    code = ''
                                    continue

                            # js-apis-medialibrary.md 文档前三个示例代码拼接在下方所有示例代码之前
                            if code.count('\n') > 1 and len(mediaLibrary) < 3 or \
                                    code.count('\n') == 1 and 'import' not in code and len(mediaLibrary) < 3:
                                mediaLibrary.append(code)

                            if codeType == "":
                                codeType = self.judgeCodeType(mdPath, code)
                                if mdpath in api9 or '//API9' in code:
                                    codeType = "API9"
                            # 验证是否为ets的rawfile
                            if '$rawfile' in code and codeType == 'TypeScript' or '$rawfile' in code and codeType == 'API9':
                                rawfile = code
                                code = ''
                                continue
                            jsnumber = re.findall(r'//.+js', code)
                            hmlnumber = re.findall(r'.+hml.+-->', code)
                            cssnumber = re.findall(r'/*.+css.+/*/', code)
                            # 增加传参给codewrite,增加comp,hml的位置
                            if len(hmlnumber) > 0 and 'xxx.hml' not in code and codeType == 'HTML' \
                                    and '该示例代码不做自动化测试' not in code and '<!-- hml -->' not in code:
                                complist = re.findall(r'!-- (.*?).hml', code)
                                hmlName = complist[0] + '/' + complist[0] + '.hml'
                            elif len(cssnumber) > 0 and 'xxx.css' not in code and codeType == 'CSS' \
                                    and '该示例代码不做自动化测试' not in code:
                                comp = code.find('css')
                                complist = code[:comp].replace('<', '').replace('!', '').replace('-', '').replace('/',
                                                                                                                  '').replace(
                                    '*', '').replace(' ', '').replace('.', '')
                                cssName = complist + '/' + complist + '.css'
                            elif len(jsnumber) > 0 and 'xxx.js' not in code and '// js' not in code \
                                    and codeType == 'JavaScript' and '该示例代码不做自动化测试' not in code:
                                complist = re.findall('//(.*?).js', code)
                                jsName = complist[0].replace(' ', '') + '/' + complist[0].replace(' ', '') + '.js'
                            speak_i('code type is: ' + codeType)

                            # 验证是否为导入模块
                            if 'import' in code and 'from' in code and code.count('\n') == 1:
                                importCode = code
                                resultDict = {'compileResult': "pass", 'filePath': mdPath, 'codeType': codeType,
                                              'originallycode': code, "code": code, "errType": 'pass',
                                              'compileLog': 'import导入包，已和该文件后续代码进行合并', 'system': system}
                                codeNum += 1
                                passNum += 1
                                self.resultDict['pass'] += 1
                                self.resultDict['detail'].append(resultDict)
                                code = ''
                                continue

                            # 验证是否为回调函数示例位置
                            if '此处测试' in code and '开头' not in code and '该示例代码不做自动化测试' not in code:
                                reg = r'&(.*?)&类中'
                                all = re.compile(reg)
                                alllist = re.findall(all, code)
                                callback_import = []
                                # 验证是否存在三层回调
                                if start_callback and callCode != '' and callbackCode != '':
                                    # 存在回调内容中是否有import导入，所以先记录
                                    if 'import' in code and 'from' in code:
                                        callback_import = re.findall('import.+from.+\n', code)
                                        if len(callback_import) > 0:
                                            for i in range(len(callback_import)):
                                                code = code.replace(callback_import[i], '')
                                    for c in callbackCode[callCode]:
                                        index1 = c.find('//此处测试')
                                        index2 = c.find('示例\n')
                                        index3 = code.find('//此处测试')
                                        index4 = code.find('示例\n')
                                        className = c[index1:index2 + 2]
                                        classNameCode = code[index3:index4 + 2]

                                        try:
                                            if c.replace(className, '') not in code.replace(classNameCode, ''):
                                                newcode = c.replace(className, code + '\n')
                                            else:
                                                newcode = code
                                        except MemoryError:
                                            newcode = code

                                        # 文件将最开始去除的导入模块再加入到代码中
                                        if len(callback_import) > 0:
                                            for i in range(len(callback_import)):
                                                if handling_import(callback_import[i]) not in \
                                                        handling_code(newcode) and callback_import[i].replace(
                                                    '"', "'").replace(';', '').replace('\n',
                                                                                       '') + "\n".lower() not in newcode.replace(
                                                    '"', "'").replace(';', '').lower():
                                                    newcode = callback_import[i] + newcode
                                        resultDict = {'compileResult': "pass", 'filePath': mdPath, 'codeType': codeType,
                                                      'originallycode': code.replace(classNameCode, ''),
                                                      "code": newcode,
                                                      "errType": 'pass',
                                                      'compileLog': '回调函数示例执行位置，已和该文件后续代码进行合并', 'system': system}
                                        codeNum += 1
                                        passNum += 1
                                        self.resultDict['pass'] += 1
                                        self.resultDict['detail'].append(resultDict)
                                        for call in alllist:
                                            if '## ' + call + '\n' in callbackCode:
                                                callbackCode["## " + call + '\n'].append(newcode)
                                            else:
                                                callbackCode.update({"## " + call + '\n': [newcode]})

                                else:
                                    index1 = code.find('//此处测试')
                                    index2 = code.find('示例\n')
                                    className = code[index1:index2 + 2]
                                    resultDict = {'compileResult': "pass", 'filePath': mdPath, 'codeType': codeType,
                                                  'originallycode': code.replace(className, ''),
                                                  "code": code,
                                                  "errType": 'pass',
                                                  'compileLog': '回调函数示例执行位置，已和该文件后续代码进行合并', 'system': system}
                                    codeNum += 1
                                    passNum += 1
                                    self.resultDict['pass'] += 1
                                    self.resultDict['detail'].append(resultDict)

                                    for call in alllist:
                                        if '## ' + call + '\n' in callbackCode:
                                            callbackCode["## " + call + '\n'].append(code)
                                        else:
                                            callbackCode.update({"## " + call + '\n': [code]})
                                speak_i('callbackCode: ', callbackCode)
                                code = ''
                                continue
                            if '此处测试' in code and '开头' in code and '该示例代码不做自动化测试' not in code:
                                index1 = code.find('//此处测试')
                                index2 = code.find('开头\n')
                                className = code[index1:index2 + 2]
                                resultDict = {'compileResult': "pass", 'filePath': mdPath, 'codeType': codeType,
                                              'originallycode': code.replace(className, ''),
                                              "code": code,
                                              "errType": 'pass',
                                              'compileLog': '指定开头内容示例代码执行位置，已和该文件后续代码进行合并', 'system': system}
                                codeNum += 1
                                passNum += 1
                                self.resultDict['pass'] += 1
                                self.resultDict['detail'].append(resultDict)
                                reg = r'以(.*?)开头'
                                all = re.compile(reg)
                                alllist = re.findall(all, code)
                                for call in alllist:
                                    if call in callbackCode:
                                        callbackCode[call].append(code)
                                    else:
                                        callbackCode.update({call: [code]})
                                speak_i(StartCode)
                                code = ''
                                continue
                            # 类的示例位置
                            if '该class需添加在同一阶级目录示例代码之前' in code and not classTopic:
                                resultDict = {'compileResult': "pass", 'filePath': mdPath, 'codeType': codeType,
                                              'originallycode': code.replace('该class需添加在同一阶级目录示例代码之前', ''),
                                              "code": code,
                                              "errType": 'pass',
                                              'compileLog': 'class公共类，已和该文件后续代码进行合并', 'system': system}
                                codeNum += 1
                                passNum += 1
                                self.resultDict['pass'] += 1
                                self.resultDict['detail'].append(resultDict)
                                classCode = code
                                classTopic = True
                                code = ''
                                continue
                            # ts前后关系
                            if rawfile != '':
                                filePath = os.path.abspath(
                                    os.path.join(os.path.split(os.path.abspath(__file__))[0], '..')) + \
                                           r'/project/eTSProject\entry\src\main\ets\MainAbility\pages\rawfile'
                                if not os.path.exists(filePath):
                                    os.makedirs(filePath)
                                    filePathHtml = os.path.join(filePath, 'index.html')
                                    with open(filePathHtml, 'w+', encoding='utf8', errors='ignore') as f:
                                        f.truncate()
                                        f.write(str(code) + '\n')
                                resultDict = {'compileResult': "no check", 'filePath': mdPath, 'codeType': 'HTML',
                                              'originallycode': code,
                                              "code": code,
                                              "errType": 'pass',
                                              'compileLog': '该示例代码写入rawfile文件，已和该文件后续代码进行合并', 'system': system}
                                codeNum += 1
                                passNum += 1
                                self.resultDict['pass'] += 1
                                self.resultDict['detail'].append(resultDict)
                                code = rawfile
                                codeType = "TypeScript"
                                if mdpath in api9 or '//API9' in code:
                                    codeType = 'API9'
                            # 检测示例代码的引号是否规范
                            if noslSpecification:
                                resultDict = {'compileResult': "fail", 'filePath': mdPath, 'codeType': codeType,
                                              'originallycode': code,
                                              "code": code,
                                              "errType": '引号格式错误',
                                              'compileLog': '引号书写错误', 'system': system}
                                codeNum += 1
                                failNum += 1
                                self.resultDict['fail'] += 1
                                code = ''
                                self.resultDict['detail'].append(resultDict)
                            # 工程正式执行
                            elif codeType != '' and '该示例代码不做自动化测试' not in code and '包含绝对路径' not in code:
                                print('执行', start_callback)
                                speak_i(code)
                                # 开始将code写入到工程文件中
                                codeNum += 1

                                codeWrite = CodeWrite()
                                # 此处测试以某个字眼开始的内容
                                if len(StartCode) != 0 and callCode == '':
                                    codeNum -= 1
                                    for item in StartCode:
                                        if item in code:
                                            codeNum += 1
                                            for code_item in StartCode[item]:
                                                newcode = code_item.replace('//此处测试以' + item + '开头的示例代码\n',
                                                                            code.replace(' ', '') + '\n')
                                                codeType = self.checkTSOrJSCode(newcode, mdPath)
                                                if mdpath in api9 or '//API9' in newcode:
                                                    codeType = 'API9'

                                                if 'js-apis-fileio.md' in mdPath:
                                                    newcode = fileio(newcode, mdPath)
                                                elif 'js-apis-data-rdb.md' in mdPath:
                                                    newcode = data_rdb(newcode, mdPath)
                                                if InstructionsForUseCode != '':
                                                    newcode = InstructionsForUse(newcode, InstructionsForUseCode)

                                                resultDict, passNum, failNum, nocheckNum = self.compile(newcode,
                                                                                                        codeWrite,
                                                                                                        codeType,
                                                                                                        mdPath, failNum,
                                                                                                        passNum,
                                                                                                        nocheckNum,
                                                                                                        hmlName,
                                                                                                        cssName, jsName,
                                                                                                        etsCode,
                                                                                                        originallycode)
                                                self.resultDict['detail'].append(resultDict)
                                                codeWrite.delPicture()
                                                # 编译完成后将原文件替换到相应位置，防止影响下次编译
                                                codeWrite.overWriteFile('eTSProject', 'JSProject', etsCode, mdPath)
                                                code = ''
                                            break

                                # 回调函数执行替换
                                elif start_callback and callCode != '':
                                    callback_import = []
                                    if 'import' in code and 'from' in code:
                                        callback_import = re.findall('import.+from.+\n', code)
                                        if len(callback_import) > 0:
                                            for i in range(len(callback_import)):
                                                code = code.replace(callback_import[i], '')
                                    codeNum -= 1

                                    for c in callbackCode[callCode]:
                                        codeNum += 1
                                        index1 = c.find('//此处测试')
                                        index2 = c.find('示例\n')
                                        className = c[index1:index2 + 3]
                                        index3 = c.find('测试')
                                        index4 = c.find('&')
                                        actualClassName = c[index3 + 2:index4]
                                        index3 = code.find('//此处测试')
                                        index4 = code.find('示例\n')
                                        classNameCode = code[index3:index4 + 2]

                                        # 判断回调的内容是否已经补充到示例代码中
                                        try:
                                            if c.replace(className, '').replace('\n', '') not in code.replace(
                                                    classNameCode, ''):
                                                # fileio文档中存在重复定义ss = 回调
                                                if 'js-apis-fileio.md' in mdPath and 'let ss' in c and 'let ss' in code:
                                                    newcode = code
                                                else:
                                                    # 验证是否重复定义类
                                                    if 'js-apis-distributed.md' in mdPath:
                                                        code = RepeatDefinition(code, mdPath, actualClassName)
                                                        newcode = c.replace(className, str(code) + '\n')
                                                    else:
                                                        newcode = c.replace(className, code + '\n')
                                            else:
                                                newcode = code
                                        except:
                                            newcode = code

                                        # 文件将最开始去除的导入模块再加入到代码中
                                        if len(callback_import) > 0:
                                            for i in range(len(callback_import)):
                                                if handling_import(callback_import[i]) not in handling_code(newcode) and \
                                                        callback_import[i].replace('"', "'").replace(';', '').replace(
                                                            '\n', '') + '\n'.lower() not in newcode.replace('"',
                                                                                                            "'").replace(
                                                    ';', '').lower():
                                                    newcode = callback_import[i] + newcode

                                        if classCode != '' and classTopic:
                                            newcode = classCode + newcode

                                        if importCode != '' and (
                                                codeType == 'JavaScript' or codeType == 'TypeScript' or codeType == 'API9') and handling_import(
                                            importCode) not in handling_code(newcode) and importCode.replace('"',
                                                                                                             "'").replace(
                                            ';', '').replace(
                                            '\n', '') + '\n'.lower() not in newcode.replace('"',
                                                                                            "'").replace(
                                            ';', '').lower():
                                            newcode = importCode + newcode
                                        if mdpath in api9 or '//API9' in newcode:
                                            codeType = 'API9'
                                        if 'js-apis-fileio.md' in mdPath:
                                            newcode = fileio(newcode, mdPath)
                                        elif 'js-apis-data-rdb.md' in mdPath:
                                            newcode = data_rdb(newcode, mdPath)
                                        elif 'js-apis-request.md' in mdPath:
                                            newcode = request(newcode)
                                        if InstructionsForUseCode != '':
                                            newcode = InstructionsForUse(newcode, InstructionsForUseCode)

                                        resultDict, passNum, failNum, nocheckNum = self.compile(newcode,
                                                                                                codeWrite,
                                                                                                codeType,
                                                                                                mdPath, failNum,
                                                                                                passNum,
                                                                                                nocheckNum,
                                                                                                hmlName,
                                                                                                cssName, jsName,
                                                                                                etsCode,
                                                                                                originallycode)
                                        self.resultDict['detail'].append(resultDict)
                                    codeWrite.delPicture()
                                    # 编译完成后将原文件替换到相应位置，防止影响下次编译
                                    codeWrite.overWriteFile('eTSProject', 'JSProject', etsCode, mdPath)
                                    code = ''
                                else:
                                    if 'js-apis-medialibrary.md' in mdPath and not deprecatedcode and len(
                                            mediaLibrary) == 3:
                                        for apicode in mediaLibrary:
                                            codeNum += 1
                                            code = apicode + '\n' + code
                                            if importCode != '' and (
                                                    codeType == 'JavaScript' or codeType == 'TypeScript' or codeType == 'API9') and handling_import(
                                                importCode) not in handling_code(code) and importCode.replace(
                                                '"',
                                                "").replace("'", '').replace(
                                                ';', '').replace(
                                                '\n', '') + '\n'.lower() not in code.replace(
                                                ';', '').replace("'", '').replace('"', '').lower():
                                                code = importCode + code
                                            if mdpath in api9 or '//API9' in code:
                                                codeType = 'API9'
                                            resultDict, passNum, failNum, nocheckNum = self.compile(code,
                                                                                                    codeWrite,
                                                                                                    codeType,
                                                                                                    mdPath, failNum,
                                                                                                    passNum,
                                                                                                    nocheckNum,
                                                                                                    hmlName,
                                                                                                    cssName, jsName,
                                                                                                    etsCode,
                                                                                                    originallycode)
                                            self.resultDict['detail'].append(resultDict)
                                            codeWrite.delPicture()
                                            # 编译完成后将原文件替换到相应位置，防止影响下次编译
                                            codeWrite.overWriteFile('eTSProject', 'JSProject', etsCode, mdPath)
                                            code = ''
                                    if classTopic and classCode != '':
                                        code = classCode + code
                                    if importCode != '' and (
                                            codeType == 'JavaScript' or codeType == 'TypeScript' or codeType == 'API9') and handling_import(
                                        importCode) not in handling_code(code) and importCode.replace(
                                        '"',
                                        "").replace("'", '').replace(
                                        '\n', '') + '\n'.lower() not in code.replace("'", '').replace('"', '').lower():
                                        code = importCode + code
                                    if mdpath in api9 or '//API9' in code:
                                        codeType = 'API9'
                                    if 'js-apis-fileio.md' in mdPath:
                                        code = fileio(code, mdPath)
                                    elif 'js-apis-data-rdb.md' in mdPath:
                                        code = data_rdb(code, mdPath)
                                    if InstructionsForUseCode != '':
                                        code = InstructionsForUse(code, InstructionsForUseCode)
                                    resultDict, passNum, failNum, nocheckNum = self.compile(code,
                                                                                            codeWrite,
                                                                                            codeType,
                                                                                            mdPath, failNum,
                                                                                            passNum,
                                                                                            nocheckNum,
                                                                                            hmlName,
                                                                                            cssName, jsName,
                                                                                            etsCode,
                                                                                            originallycode)
                                    self.resultDict['detail'].append(resultDict)
                                    codeWrite.delPicture()
                                    # 编译完成后将原文件替换到相应位置，防止影响下次编译
                                    codeWrite.overWriteFile('eTSProject', 'JSProject', etsCode, mdPath)
                                    code = ''
                                    print('执行这里编译')
                            else:
                                if importCode != '' and 'import' in code and 'from' in code and code.count('\n') == 1:
                                    resultDict = {'compileResult': "pass", 'filePath': mdPath, 'codeType': codeType,
                                                  'originallycode': code,
                                                  "code": code,
                                                  "errType": 'pass',
                                                  'compileLog': 'import导入包，已和该文件后续代码进行合并', 'system': system}
                                    codeNum += 1
                                    passNum += 1
                                    self.resultDict['pass'] += 1
                                elif '该示例代码不做自动化测试(deprecated)' in code:
                                    resultDict = {'compileResult': "no check(deprecated)", 'filePath': mdPath,
                                                  'codeType': codeType,
                                                  'originallycode': code.replace('该示例代码不做自动化测试(deprecated)\n', ''),
                                                  "code": code,
                                                  "errType": 'pass',
                                                  'compileLog': '该示例代码不做自动化测试(deprecated)', 'system': system}
                                    codeNum += 1
                                    DPnocheckNum += 1
                                    self.resultDict['pass'] += 1
                                elif '该示例代码不做自动化测试' in code:
                                    resultDict = {'compileResult': "no check", 'filePath': mdPath,
                                                  'codeType': codeType,
                                                  'originallycode': code.replace('该示例代码不做自动化测试\n', ''),
                                                  "code": code,
                                                  "errType": 'pass',
                                                  'compileLog': '该示例代码不做自动化测试', 'system': system}
                                    codeNum += 1
                                    nocheckNum += 1
                                    self.resultDict['pass'] += 1
                                elif '包含绝对路径' in code:
                                    resultDict = {'compileResult': "no check", 'filePath': mdPath, 'codeType': codeType,
                                                  'originallycode': code.replace('////包含绝对路径\n', ''),
                                                  "code": code,
                                                  "errType": 'pass',
                                                  'compileLog': '该示例代码包含绝对路径', 'system': system}
                                    codeNum += 1
                                    nocheckNum += 1
                                    self.resultDict['pass'] += 1
                                else:
                                    if self.fileType == 'TS':
                                        self.resultDict['TSFail'] += 1
                                    else:
                                        self.resultDict['JSFail'] += 1
                                    self.resultDict['fail'] += 1
                                    failNum += 1
                                    resultDict = {'compileResult': "fail", 'filePath': mdPath, 'codeType': codeType,
                                                  'originallycode': code,
                                                  "code": code,
                                                  "errType": '代码类型未知',
                                                  'compileLog': '无法判断代码类型', 'system': system}
                                    codeNum += 1
                                code = ''
                                self.resultDict['detail'].append(resultDict)
                        if start_code:
                            code = code + item
                except MemoryError:
                    for item in lines:
                        if titlestart:
                            title = item.replace('#', '').replace(' ', '')
                            titlestart = False
                        if not start_code and "```" in item.replace('\n', '').replace(' ', ''):
                            start_code = True
                            continue
                        if start_code and "```" in item.replace('\n', '').replace(' ', ''):
                            start_code = False
                            codeNum += 1
                            nocheckNum += 1
                        if start_code:
                            code = code + item
                if passNum == 0 and codeNum == nocheckNum + DPnocheckNum and failNum == 0:
                    fileresultDict = {'filePath': mdPath, 'fileName': title, 'codeNum': codeNum, 'pass': passNum,
                                      'fail': failNum, 'nocheck': nocheckNum, "nocheck(deprecated)": DPnocheckNum,
                                      'PassRate': 1, 'system': system}
                    self.resultDict['filedetail'].append(fileresultDict)
                elif passNum == 0 and codeNum == 0 and failNum == 0 and nocheckNum == 0 and DPnocheckNum == 0:
                    fileresultDict = {'filePath': mdPath, 'fileName': title, 'codeNum': codeNum, 'pass': passNum,
                                      'fail': failNum, 'nocheck': nocheckNum, "nocheck(deprecated)": DPnocheckNum,
                                      'PassRate': 1, 'system': system}
                    self.resultDict['filedetail'].append(fileresultDict)
                elif passNum == 0:
                    fileresultDict = {'filePath': mdPath, 'fileName': title, 'codeNum': codeNum, 'pass': passNum,
                                      'fail': failNum, 'nocheck': nocheckNum, "nocheck(deprecated)": DPnocheckNum,
                                      'PassRate': 0, 'system': system}
                    self.resultDict['filedetail'].append(fileresultDict)
                else:
                    fileresultDict = {'filePath': mdPath, 'fileName': title, 'codeNum': codeNum, 'pass': passNum,
                                      'fail': failNum, 'nocheck': nocheckNum, "nocheck(deprecated)": DPnocheckNum,
                                      'PassRate': round(passNum / (passNum + failNum), 2), 'system': system}
                    self.resultDict['filedetail'].append(fileresultDict)
            else:
                pathType = self.judgeTypePath(mdPath)
                if pathType == 'TS':
                    # TS 需要根据上下文进行编译
                    self.contextCompile(mdPath, etsCode, code, DPnocheckNum)
                    self.specialFlag = False
        else:
            codeType = ''
            for item in lines:
                if titlestart:
                    title = item.replace('#', '').replace(' ', '')
                    titlestart = False
                if not start_code and "```" in item.replace('\n', '').replace(' ', ''):
                    codeType = self.checkTSOrJSCode(code, mdPath)
                    if mdpath in api9 or '//API9' in code:
                        codeType = 'API9'
                    start_code = True
                    continue
                if start_code and "```" in item.replace('\n', '').replace(' ', ''):
                    start_code = False
                    if mdpath not in noTest:
                        resultDict = {'compileResult': "no check", 'filePath': mdPath, 'codeType': codeType,
                                      'originallycode': code,
                                      "code": code,
                                      "errType": 'pass',
                                      'compileLog': '存在片段代码，自动化不检测', 'system': system}
                        self.resultDict['detail'].append(resultDict)
                    codeNum += 1
                    nocheckNum += 1
                if start_code:
                    code = code + item
            if passNum == 0 and codeNum == nocheckNum + DPnocheckNum and failNum == 0:
                fileresultDict = {'filePath': mdPath, 'fileName': title, 'codeNum': codeNum, 'pass': passNum,
                                  'fail': failNum, 'nocheck': nocheckNum, "nocheck(deprecated)": DPnocheckNum,
                                  'PassRate': 1, 'system': system}
                self.resultDict['filedetail'].append(fileresultDict)
            elif passNum == 0 and codeNum == 0 and failNum == 0 and nocheckNum == 0 and DPnocheckNum == 0:
                fileresultDict = {'filePath': mdPath, 'fileName': title, 'codeNum': codeNum, 'pass': passNum,
                                  'fail': failNum, 'nocheck': nocheckNum, "nocheck(deprecated)": DPnocheckNum,
                                  'PassRate': 1, 'system': system}
                self.resultDict['filedetail'].append(fileresultDict)
            elif passNum == 0:
                fileresultDict = {'filePath': mdPath, 'fileName': title, 'codeNum': codeNum, 'pass': passNum,
                                  'fail': failNum, 'nocheck': nocheckNum, "nocheck(deprecated)": DPnocheckNum,
                                  'PassRate': 0, 'system': system}
                self.resultDict['filedetail'].append(fileresultDict)
            else:
                fileresultDict = {'filePath': mdPath, 'fileName': title, 'codeNum': codeNum, 'pass': passNum,
                                  'fail': failNum, 'nocheck': nocheckNum, "nocheck(deprecated)": DPnocheckNum,
                                  'PassRate': round(passNum / (passNum + failNum), 2), 'system': system}
                self.resultDict['filedetail'].append(fileresultDict)
        if len(self.resultDict['detail']) > 0:
            self.writeResult(self.resultPath)

    def compile(self, code, codeWrite, codeType, mdPath, failNum, passNum, nocheckNum, hmlName, cssName, jsName,
                etsCode, originallycode):
        # 针对特殊文档，删除await关键字
        if 'js-apis-avsession.md' in mdPath or 'js-apis-audio.md' in mdPath:
            code = code.replace('await', '')
        # 添加子系统验证
        mdpathindex = mdPath.rfind('\\')
        mdpath = mdPath[mdpathindex + 1:]
        if mdpath in systemDict:
            system = systemDict[mdpath]
        elif 'js-' in mdpath and 'js-apis' not in mdpath or mdpath.startswith('ts-'):
            system = 'ArkUI开发框架'
        else:
            system = '查询不到子系统'
        if self.fileType == 'TS':
            if 'app.ets' in code or ("@Entry" in code and '@Component' in code and "build()" in code):
                codeWrite.startWriteProject(code, codeType, hmlName, cssName, jsName, 'eTSProject', 'JSProject',
                                            etsCode,
                                            mdPath)
                # 开始调用编译
                compileProject = ComplieProject()
                resultDict, compileResult = compileProject.startCompile(codeType, mdPath, code, 'eTSProject',
                                                                        'JSProject',
                                                                        etsCode, self.batPath, originallycode)
                if compileResult == 'fail':
                    if self.fileType == 'TS':
                        self.resultDict['TSFail'] += 1
                    else:
                        self.resultDict['JSFail'] += 1
                    self.resultDict['fail'] += 1
                    failNum += 1
                else:
                    if self.fileType == 'TS':
                        self.resultDict['TSPass'] += 1
                    else:
                        self.resultDict['JSPass'] += 1
                    self.resultDict['pass'] += 1
                    passNum += 1
            else:
                if self.fileType == 'TS':
                    self.resultDict['TSFail'] += 1
                else:
                    self.resultDict['JSFail'] += 1
                self.resultDict['fail'] += 1
                nocheckNum += 1
                resultDict = {'compileResult': "no check", 'filePath': mdPath, 'codeType': codeType,
                              'originallycode': originallycode,
                              "code": code,
                              "errType": 'pass',
                              'compileLog': 'code中不含有@Entry等字段，不进行编译', 'system': system}
        else:
            codeWrite.startWriteProject(code, codeType, hmlName, cssName, jsName, 'eTSProject', 'JSProject', etsCode,
                                        mdPath)
            # 开始调用编译
            compileProject = ComplieProject()
            resultDict, compileResult = compileProject.startCompile(codeType, mdPath, code, 'eTSProject', 'JSProject',
                                                                    etsCode, self.batPath, originallycode)
            if compileResult == 'fail':
                if self.fileType == 'TS':
                    self.resultDict['TSFail'] += 1
                else:
                    self.resultDict['JSFail'] += 1
                self.resultDict['fail'] += 1
                failNum += 1
            else:
                if self.fileType == 'TS':
                    self.resultDict['TSPass'] += 1
                else:
                    self.resultDict['JSPass'] += 1
                self.resultDict['pass'] += 1
                passNum += 1
        return resultDict, passNum, failNum, nocheckNum

    # TS md文档需要根据上下文进行编译
    def contextCompile(self, mdPath, etsCode, originallycode, DPnocheckNum):
        codeNum = 0
        passNum = 0
        failNum = 0
        nocheckNum = 0
        with open(mdPath, 'r', encoding='utf8', errors='ignore') as f:
            lines = f.readlines()
        mdpathindex = mdPath.rfind('\\')
        mdpath = mdPath[mdpathindex + 1:]
        if mdpath in systemDict:
            system = systemDict[mdpath]
        elif 'js-' in mdpath and 'js-apis' not in mdpath or mdpath.startswith('ts-'):
            system = 'ArkUI开发框架'
        else:
            system = '查询不到子系统'
        title = ''
        titlestart = True
        start_code = False
        code = ''
        codeList = []
        codeType = ''
        for item in lines:
            if titlestart:
                title = item.replace('#', '').replace(' ', '')
                titlestart = False
            if not start_code and "```" in item.replace('\n', '').replace(' ', ''):
                start_code = True
                continue
            if start_code and "```" in item.replace('\n', '').replace(' ', ''):
                if codeType == '':
                    codeType = self.judgeCodeType(mdPath, code)
                    if mdpath in api9 or '//API9' in code:
                        codeType = 'API9'
                self.resultDict['total'] += 1
                start_code = False
                codeNum += 1
                codeList.append(code)
                code = ''
            if start_code:
                code = code + item
        importCode = ''
        compileList = []
        fileList = []
        # 获取了这个文件中所有code的，然后根据文件进行编译
        for codeItem in codeList:
            if 'import' in codeItem and 'from' in codeItem and len(codeItem) < 80 and codeItem.count('\n') == 1:
                importCode = codeItem
                continue
            if 'app.ets' in codeItem or ("@Entry" in codeItem and '@Component' in codeItem and "build()" in codeItem):
                codeType = self.judgeCodeType(mdPath, codeItem)
                if mdpath in api9 or '//API9' in codeItem:
                    codeType = 'API9'
                speak_i('code type is: ' + codeType)
                if importCode != '':
                    # 先判断代码中是否存在相同的语句，不存在则增加
                    if importCode.replace(';', '') not in codeItem.replace(';', ''):
                        codeItem = importCode + '\n' + codeItem
                # 然后进行编译，是不是需要进行多个文件进行编译
                pageList = re.findall(r'//(.*?)Page', codeItem)
                if len(pageList) > 0:
                    compileList.append(codeItem)
                    pageName = pageList[0].replace(' ', '')
                    # 创建文件
                    filePath = os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0], '..')) + \
                               r'/project/eTSProject\entry\src\main\ets\MainAbility\pages\\' + str(pageName) + '.ets'
                    fileList.append(filePath)
                    with open(filePath, 'w+', encoding='utf8', errors='ignore') as f:
                        f.truncate()
                        f.write(str(code) + '\n')
        # 判断是不是需要统一编译，需要则进行编译
        if compileList:
            # 开始调用编译
            compileProject = ComplieProject()
            resultDict, compileResult = compileProject.startCompile(codeType, mdPath, '\n'.join(compileList),
                                                                    'eTSProject', 'JSProject',
                                                                    etsCode, self.batPath, originallycode)
            if compileResult == 'fail':
                if self.fileType == 'TS':
                    self.resultDict['TSFail'] += len(compileList)
                else:
                    self.resultDict['JSFail'] += len(compileList)
                self.resultDict['fail'] += len(compileList)
                failNum += len(compileList)
            else:
                if self.fileType == 'TS':
                    self.resultDict['TSPass'] += len(compileList)
                else:
                    self.resultDict['JSPass'] += len(compileList)
                self.resultDict['pass'] += len(compileList)
                passNum += len(compileList)
            self.resultDict['detail'].append(resultDict)
            # 编译完成删除文件，不需要文件覆盖了
            for item in fileList:
                delFolderOrFile(item)
        for codeItem in codeList:
            codeType = self.judgeCodeType(mdPath, codeItem)
            if mdpath in api9 or '//API9' in codeItem:
                codeType = 'API9'
            if 'import' in codeItem and 'from' in codeItem and codeItem.count('\n') == 1:
                importCode = codeItem
                resultDict = {'compileResult': "pass", 'filePath': mdPath, 'codeType': codeType,
                              'originallycode': codeItem, "code": codeItem, "errType": 'pass',
                              'compileLog': 'import导入包，已和该文件后续代码进行合并', 'system': system}
                passNum += 1
                self.resultDict['pass'] += 1
                self.resultDict['detail'].append(resultDict)
                if self.fileType == 'TS':
                    self.resultDict['TSPass'] += 1
                else:
                    self.resultDict['JSPass'] += 1
                continue
            if 'app.ets' in codeItem or ("@Entry" in codeItem and '@Component' in codeItem and "build()" in codeItem):
                hmlName = ''
                cssName = ''
                jsName = ''
                speak_i('code type is: ' + codeType)
                if importCode != '':
                    # 先判断代码中是否存在相同的语句，不存在则增加
                    if importCode.replace(';', '') not in codeItem.replace(';', ''):
                        codeItem = importCode + '\n' + codeItem
                # 然后进行编译，是不是需要进行多个文件进行编译
                pageList = re.findall(r'//(.*?)Page', codeItem)
                if len(pageList) == 0:
                    codeWrite = CodeWrite()
                    codeWrite.startWriteProject(codeItem, codeType, hmlName, cssName, jsName, 'eTSProject', 'JSProject',
                                                etsCode,
                                                mdPath)
                    # 开始调用编译
                    compileProject = ComplieProject()
                    resultDict, compileResult = compileProject.startCompile(codeType, mdPath, codeItem, 'eTSProject',
                                                                            'JSProject',
                                                                            etsCode, self.batPath, codeItem)

                    if compileResult == 'fail':
                        if self.fileType == 'TS':
                            self.resultDict['TSFail'] += 1
                        else:
                            self.resultDict['JSFail'] += 1
                        self.resultDict['fail'] += 1
                        failNum += 1
                    else:
                        if self.fileType == 'TS':
                            self.resultDict['TSPass'] += 1
                        else:
                            self.resultDict['JSPass'] += 1
                        self.resultDict['pass'] += 1
                        passNum += 1
                    self.resultDict['detail'].append(resultDict)
                    codeWrite.delPicture()
                    # 编译完成后将原文件替换到相应位置，防止影响下次编译
                    codeWrite.overWriteFile('eTSProject', 'JSProject', etsCode, mdPath)
            else:
                if self.fileType == 'TS':
                    self.resultDict['TSFail'] += 1
                else:
                    self.resultDict['JSFail'] += 1
                self.resultDict['fail'] += 1
                failNum += 1
                resultDict = {'compileResult': "no check", 'filePath': mdPath, 'codeType': codeType,
                              'originallycode': codeItem, "code": codeItem, "errType": 'pass',
                              'compileLog': 'code中不含有@Entry等字段，不进行编译', 'system': system}
                self.resultDict['detail'].append(resultDict)
        if passNum == 0 and codeNum == nocheckNum + DPnocheckNum and failNum == 0:
            fileresultDict = {'filePath': mdPath, 'fileName': title, 'codeNum': codeNum, 'pass': passNum,
                              'fail': failNum, 'nocheck': nocheckNum, "nocheck(deprecated)": DPnocheckNum,
                              'PassRate': 1, 'system': system}
            self.resultDict['filedetail'].append(fileresultDict)
        elif passNum == 0 and codeNum == 0 and failNum == 0 and nocheckNum == 0 and DPnocheckNum == 0:
            fileresultDict = {'filePath': mdPath, 'fileName': title, 'codeNum': codeNum, 'pass': passNum,
                              'fail': failNum, 'nocheck': nocheckNum, "nocheck(deprecated)": DPnocheckNum,
                              'PassRate': 1, 'system': system}
            self.resultDict['filedetail'].append(fileresultDict)
        elif passNum == 0:
            fileresultDict = {'filePath': mdPath, 'fileName': title, 'codeNum': codeNum, 'pass': passNum,
                              'fail': failNum, 'nocheck': nocheckNum, "nocheck(deprecated)": DPnocheckNum,
                              'PassRate': 0, 'system': system}
            self.resultDict['filedetail'].append(fileresultDict)
        else:
            fileresultDict = {'filePath': mdPath, 'fileName': title, 'codeNum': codeNum, 'pass': passNum,
                              'fail': failNum, 'nocheck': nocheckNum, "nocheck(deprecated)": DPnocheckNum,
                              'PassRate': round(passNum / (passNum + failNum), 2), 'system': system}
            self.resultDict['filedetail'].append(fileresultDict)

    # 判断类型
    def judgeCodeType(self, mdPath, code):
        # 判断路径
        codeType = self.judgeTypePath(mdPath)
        md_index = mdPath.rfind('\\')
        if mdPath[md_index + 1:] in api9 or '//API9' in code:
            codeType = 'API9'
            self.fileType = 'TS'
            self.resultDict['TSNum'] += 1
        if codeType == '':
            codeType = self.checkTSOrJSCode(code, mdPath)
            if codeType == '':
                codeType = self.checkTSOrJSGuess(code)

        if codeType == 'JS' or codeType == 'JavaScript':
            self.fileType = 'JS'
            self.resultDict['JSNum'] += 1

            codeType = self.checkTSOrJSCode(code, mdPath)
            codeType1 = self.checkTSOrJSGuess(code)
            if codeType1 == 'HTML':
                codeType = codeType1
            elif codeType1 == 'CSS':
                codeType = codeType1
        elif codeType == 'TS' or codeType == 'TypeScript':
            self.fileType = 'TS'
            self.resultDict['TSNum'] += 1
            codeType = 'TypeScript'
        return codeType

    @staticmethod
    def judgeTypePath(mdPath):
        if 'js-apis' in mdPath:
            return 'JavaScript'
        elif 'JS API 1.0组件' in mdPath or 'JS' in mdPath or 'js' in mdPath or 'JavaScript' in mdPath or 'javascript' in mdPath or 'Javascript' in mdPath or 'javaScript' in mdPath:
            return 'JS'
        elif 'JS API 2.0组件' in mdPath or 'TS' in mdPath or 'ts' in mdPath or 'TypeScript' in mdPath or 'typescript' in mdPath or 'Typescript' in mdPath or 'typescript' in mdPath:
            return 'TS'
        else:
            return ''

    @staticmethod
    def checkTSOrJSCode(code, mdPath):
        if 'js-apis' in mdPath:
            return 'JavaScript'
        elif '@Entry' in code or '@Component' in code or 'build()' in code:
            return 'TypeScript'
        elif 'xxx.hml' in code or '.hml' in code or '</div>' in code:
            return 'HTML'
        elif 'xxx.css' in code or '.css' in code:
            return 'CSS'
        elif 'export default' in code or 'function' in code or 'xxx.js' in code or '.js' in code or 'var ' in code or 'const ' in code or 'javascript' in code or 'Javascript' in code or 'javaScript' in code or 'JavaScript' in code:
            return 'JavaScript'
        else:
            return ''

    @staticmethod
    def checkTSOrJSGuess(code):
        guess = Guess()
        codeType = guess.language_name(code)
        return codeType
