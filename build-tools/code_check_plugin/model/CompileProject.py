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
import os
import re
import subprocess
import time
import zipfile
import shutil
import cv2
# import win32con
# import win32gui
# from PIL import ImageGrab
from util.speaker import speak_i, speak_e
from util.systemDict import systemDict
from util.utils import delFolderOrFile


class ComplieProject:
    def __init__(self):
        self.hapName = ''
        self.hapPath = ''
        self.imgPath = ''

    def startCompile(self, projectType, mdPath, code, eTSProject, JSProject, etsCode, batPath, originallycode):
        # 新增result子系统验证
        mdpathindex = mdPath.rfind('\\')
        mdpath = mdPath[mdpathindex + 1:]
        if mdpath in systemDict:
            system = systemDict[mdpath]
        elif 'js-' in mdPath and 'js-apis' not in mdPath or 'ts-' in mdPath:
            system = 'ArkUI开发框架'
        else:
            system = '查询不到子系统'
        if projectType == 'TypeScript' or etsCode:
            cwd = os.path.abspath(
                os.path.join(os.path.split(os.path.abspath(__file__))[0], '..')) + '/project/' + eTSProject
            # 记录大文件名称
            bat = os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0], '..'))
        else:
            cwd = os.path.abspath(
                os.path.join(os.path.split(os.path.abspath(__file__))[0], '..')) + '/project/' + JSProject
            # 记录大文件名称
            bat = os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0], '..'))
        self.imgPath = os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0], '..')) + '\img'
        # 删除entry下的build文件夹
        rm_path = os.path.join(cwd, 'entry\\build')
        delFolderOrFile(rm_path)
        gradle_path = os.path.join(cwd, 'entry\\.gradle')
        delFolderOrFile(gradle_path)
        build_path = os.path.join(cwd, 'entry\\build')
        delFolderOrFile(build_path)
        fileSize = 0
        out, err, fileSize = self.buildHap(cwd, build_path, mdPath, eTSProject)
        # 获取有用的输出信息
        if 'BUILD SUCCESSFUL' not in out:
            if 'ERROR File' in out:
                out_list = out.split('\n')
                outstart = False
                newout = ''
                for m in out_list:
                    if 'ERROR File:' in m:
                        outstart = True
                        continue
                    if outstart:
                        newout = newout + m + '\n'
                        outstart = False
                out = newout
            if 'ERROR File' in err:
                err_list = err.split('\n')
                errstart = False
                newerr = ''
                for m in err_list:
                    if 'ERROR File:' in m:
                        errstart = True
                        continue
                    if errstart:
                        newerr = newerr + m + '\n'
                        errstart = False
                err = newerr
        if 'BUILD SUCCESSFUL' in out or fileSize:
            errType = 'pass'
            if fileSize:
                speak_i('编译成功')
                resultDict = {'compileResult': 'pass', 'filePath': mdPath, 'codeType': projectType,
                              'originallycode': originallycode, 'code': code, 'errType': errType,
                              'compileLog': err + out, 'system': system}
                compileResult = 'pass'
            else:
                speak_i('编译成功,但未生成hap包')
                resultDict = {'compileResult': 'pass', 'filePath': mdPath, 'codeType': projectType,
                              'originallycode': originallycode, 'code': code, 'errType': errType,
                              'compileLog': err + out, 'system': system}
                compileResult = 'pass'
        else:
            printout = err + out
            errType = self.geterrType(printout)
            TypeErr1 = re.findall(r'type.+is not assignable to parameter of.+', printout)
            TypeErr2 = re.findall(r'Type.+is missing the follow.+', printout)
            TypeErr3 = re.findall(r'Value of type.+is not callable.+', printout)
            TypeErr4 = re.findall(r'Expected.+arguments.+but got.+', printout)
            # 带有try和catch关键字且报错中是上述类型的都是nocheck
            if 'try' in code and 'catch' in code and (
                    len(TypeErr1) != 0 or len(TypeErr2) != 0 or len(TypeErr3) != 0 or len(TypeErr4) != 0):
                speak_i('编译成功')
                resultDict = {'compileResult': 'no check', 'filePath': mdPath, 'codeType': projectType,
                              'originallycode': originallycode, 'code': code, 'errType': 'pass',
                              'compileLog': 'try-catch结构不检测', 'system': system}
                compileResult = 'pass'
            elif 'BigInt literals are not available when targeting lower than ES2020' in printout:
                speak_i('编译成功')
                resultDict = {'compileResult': 'no check', 'filePath': mdPath, 'codeType': projectType,
                              'originallycode': originallycode, 'code': code, 'errType': 'pass',
                              'compileLog': 'ES2020不检测', 'system': system}
                compileResult = 'pass'
            else:
                speak_i('编译失败')
                resultDict = {'compileResult': 'fail', 'filePath': mdPath, 'codeType': projectType,
                              'originallycode': originallycode, 'code': code, 'errType': errType,
                              'compileLog': printout, 'system': system}
                compileResult = 'fail'
        return resultDict, compileResult

    def buildHap(self, cwd, build_path, mdPath, eTSProject):
        out = ''
        err = ''
        try:
            args = 'npm run buildHap'
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
        compileResult = 'pass'
        time.sleep(3)
        # 判断是否编译出了hap包，如果有那也是编译成功的
        fileSize = self.getHapPackage(build_path, mdPath, eTSProject)
        ILLEGAL_CHARACTERS_RE = re.compile(r'[\000-\010]|[\013-\014]|[\016-\037]')
        out = ILLEGAL_CHARACTERS_RE.sub(r'', out)
        err = ILLEGAL_CHARACTERS_RE.sub(r'', err)
        return out, err, fileSize

    # 获取hap包
    def getHapPackage(self, build_path, mdPath, eTSProject):
        fileSize = 0
        mdpath = mdPath
        for dirPath, dirNames, fileNames in os.walk(build_path):
            for filePath in fileNames:
                mdPath = os.path.join(dirPath, filePath)
                if mdPath.endswith('.hap'):
                    self.hapPath = mdPath
                    self.hapName = mdPath
                    fileSize = os.path.getsize(mdPath)
                    fileSize = fileSize / float(1024 * 1024)
        speak_i('fileSize: ' + str(fileSize))
        if fileSize > 0:
            return True
        else:
            return False

    # 获取当前错误类型
    def geterrType(self, printout):
        if 'No overload matches this call' in printout:
            errType = '参数格式错误'
        elif "Cannot find name 'publishCallback'" in printout:
            errType = '参数未定义'
        elif "Objcet is possibly 'undefined'" in printout:
            errType = 'this指向不明'
        elif "Property" in printout and 'does not exist on type' in printout:
            errType = '属性不存在'
        elif "Duplicate function implementation" in printout:
            errType = '重复的function实现'
        elif 'expected' in printout:
            errType = '代码格式错误'
        elif "Argument of type" in printout and 'is not assignable to parameter of type' in printout:
            errType = '参数类型错误'
        elif "Invalid character" in printout:
            errType = '无效参数'
        elif "Cannot find module" in printout and '@ohos' in printout:
            errType = '导入模块错误'
        elif "Cannot find name" in printout:
            errType = '参数未定义'
        else:
            errType = '其他错误'
        return errType
