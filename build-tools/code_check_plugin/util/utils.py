# --coding: utf-8 --
import os
import re
import shutil
import subprocess
from util.speaker import speak_i


def delFolderOrFile(rm_path):
    """
    :param rm_path: 删除的文件或者文件夹路径
    """
    if os.path.isfile(rm_path):
        if os.path.exists(rm_path):
            os.unlink(rm_path)
    elif os.path.isdir(rm_path):
        if os.path.exists(rm_path):
            shutil.rmtree(rm_path)


def checkEnvironment():
    """
    检查运行环境。判断jdk版本和node js版本
    :return: 环境是否符合
    """
    flag = True
    # 验证java环境
    javaResult = subprocess.check_output(["java", '-version'], stderr=subprocess.STDOUT)
    javaResult = str(javaResult, encoding='utf-8')
    if '11' in javaResult:
        speak_i('java version: ' + re.search(r'11', str(javaResult)).group())
    else:
        flag = False
        speak_i('请安装java为11版本的jdk')
    # 验证nodejs是否安装
    nodeResult = subprocess.check_output(['node', '-v'], stderr=subprocess.STDOUT)
    nodeResult = str(nodeResult, encoding='utf-8').replace('\r\n', '')
    if nodeResult.startswith('v'):
        speak_i('nodejs version: '+nodeResult)
    else:
        flag = False
        speak_i('请安装最新版本node.js')
    return flag
