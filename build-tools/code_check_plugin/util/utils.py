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
import shutil
import subprocess
from util.speaker import speak_i


def del_folder_or_file(rm_path):
    """
    :param rm_path: 删除的文件或者文件夹路径
    """
    if os.path.isfile(rm_path):
        if os.path.exists(rm_path):
            os.unlink(rm_path)
    elif os.path.isdir(rm_path):
        if os.path.exists(rm_path):
            shutil.rmtree(rm_path)


def check_environment():
    """
    检查运行环境。判断jdk版本和node js版本
    :return: 环境是否符合
    """
    flag = True
    # 验证java环境
    java_result = subprocess.check_output(["java", '-version'], stderr=subprocess.STDOUT)
    java_result = str(java_result, encoding='utf-8')
    if '11' in java_result:
        speak_i('java version: ' + re.search(r'11', str(java_result)).group())
    else:
        flag = False
        speak_i('请安装java为11版本的jdk')
    # 验证nodejs是否安装
    node_result = subprocess.check_output(['node', '-v'], stderr=subprocess.STDOUT)
    node_result = str(node_result, encoding='utf-8').replace('\r\n', '')
    if node_result.startswith('v'):
        speak_i('nodejs version: ' + node_result)
    else:
        flag = False
        speak_i('请安装最新版本node.js')
    return flag
