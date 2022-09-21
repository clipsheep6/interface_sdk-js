#!/usr/bin/env python
# -*- coding: utf-8 -*-
# Copyright (c) 2021-2022 Huawei Device Co., Ltd.
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import os
import sys
import optparse
import json
import re


def copy_files(options):
    with open(options.remove) as f:
        remove_dict = json.load(f)
        if options.name in remove_dict:
            rm_name = remove_dict[options.name]
            file_list = process_name(options.input,
                options.ispublic, rm_name)
        else:
            file_list = process_noname(options.input)
        return file_list


def process_name(target_dir, is_public, config_data):
    if 'base' in config_data:
        file_list = config_data['base']
    else:
        file_list = []
    for file in os.listdir(target_dir):
        src = os.path.join(target_dir, file)
        if os.path.isfile(src) and (
            not 'global_remove' in config_data or (
            'global_remove' in config_data and (
            not file in config_data['global_remove']))):
            file_list = process_name_file(is_public, config_data, file_list,
                src, file)
    return file_list


def process_name_file(is_public, config_data, file_list, file_path, file_name):
    format_src = format_path(file_path)
    if is_public == 'true':
        if not 'sdk_build_public_remove' in config_data:
            file_list.append(format_src)
        else:
            if not file_name in config_data['sdk_build_public_remove']:
                file_list.append(format_src)
    else:
        file_list.append(format_src)
    return file_list


def process_noname(target_dir):
    file_list = []
    for file in os.listdir(target_dir):
        src = os.path.join(target_dir, file)
        if os.path.isfile(src):
            format_src = format_path(src)
            file_list.append(format_src)
    return file_list


def format_path(filepath):
    return re.sub(r'.*(?=api/)', '', filepath);


def parse_args(args):
    parser = optparse.OptionParser()
    parser.add_option('--input', help='d.ts document input path')
    parser.add_option('--remove', help='d.ts to be remove path')
    parser.add_option('--ispublic', help='whether or not sdk build public')
    parser.add_option('--name', help='module label name')
    options, _ = parser.parse_args(args)
    return options


def main(argv):
    options = parse_args(argv)
    result = copy_files(options)
    print(json.dumps(result))
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
