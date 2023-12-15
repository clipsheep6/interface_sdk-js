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

import json
import os


a = []
a.append('a')
a.append('b')
a.append('c')
a.append(os.getcwd())
print("wangcaoyu",os.getcwd())

result_json = json.dumps(a, default=lambda obj: obj.__dict__, indent=4)
fs = open(r'/mnt/data/wangqing/openharmony/interface/sdk-js/device_test/aa.json', 'w', encoding='utf-8')
fs.write(result_json)
fs.close()




# def main(argv):
#     return 0

# if __name__ == "__main__":
#     sys.exit(main(sys.argv))