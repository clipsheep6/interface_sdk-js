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
from model.material_detection import MaterialDetection
from util.speaker import speak_d, speak_e


# 开始检测
def run(result_name, json_name, md_file, result_path, type_script_path, compiler_path):
    bat = ''
    speak_d('Start progress run')
    md_detection = MaterialDetection()
    if md_file:
        if result_path:
            md_detection.operation(md_file, result_path, bat, result_name, json_name, type_script_path, compiler_path)
        else:
            md_detection.operation(md_file, md_file, bat, result_name, json_name, type_script_path, compiler_path)
    else:
        speak_e('Param error')
