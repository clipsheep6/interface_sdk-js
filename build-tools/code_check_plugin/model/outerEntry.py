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
import argparse
import sys
from model.MaterialDetection import MaterialDetection
from util.speaker import speak_d, speak_e


# # 检测参数是否规范
# def parse_param():
#     parser = argparse.ArgumentParser()
#     parser.add_argument('-f', help='MD file path')
#     parser.add_argument('-o', help='result file path')
#     r_args = parser.parse_args()
#     if len(sys.argv) < 1:
#         speak_e('Param error')
#         parser.print_help()
#         exit(-1)
#     return r_args


# 开始检测
def run(resultName, jsonName, f, o, typeScriptPath, compilerPath):
    bat = ''
    speak_d('Start progress run')
    md_detection = MaterialDetection()
    if f:
        if o:
            md_detection.operation(f, o, bat, resultName, jsonName, typeScriptPath, compilerPath)
        else:
            md_detection.operation(f, f, bat, resultName, jsonName, typeScriptPath, compilerPath)
    else:
        speak_e('Param error')
