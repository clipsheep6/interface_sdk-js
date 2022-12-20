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

import numpy as np
from cv2 import cv2

from util.utils import del_folder_or_file


class CodeWrite:
    def __init__(self):
        self.picture_name_list = ''
        self.file_path = ""
        self.image_img_path_list = []
        self.hml_name = ''

    def start_write_project(self, code, code_type, hml_name, css_name, js_name, ets_code, md_path):
        if code_type == 'TypeScript':
            # 先查看代码中是否有图片资源需要取，格式未app.media
            self.get_picture(code)

        # 然后将code写到相应文件中
        self.write_code(code, code_type, hml_name, css_name, js_name, ets_code, md_path)

    # 将相应的图片资源创建出来
    def get_picture(self, code):
        picture_name_list = re.findall(r"""(?<=app\.media\.).*?(?=')|(?<=app\.media\.).*?(?=")""", str(code))
        # 创建picture文件
        path = r"entry/src/main/resources/base/media"
        file_path = os.path.normpath(
            os.path.join(os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0],
                                                      "..")), r'project/ets_project/%s' % path))
        picture_name_list = set(picture_name_list)
        for item in picture_name_list:
            file_open = open(os.path.join(file_path, item), 'w')
            file_open.close()
        self.picture_name_list = picture_name_list
        self.file_path = file_path

    # 编译完成后删除文件
    def del_picture(self):
        for item in self.picture_name_list:
            del_folder_or_file(os.path.join(self.file_path, item))
        for item in self.image_img_path_list:
            del_folder_or_file(os.path.join(item))

    # 将相应的code值写入到相应的文件中
    def write_code(self, code, code_type, hml_name, css_name, js_name, ets_code, md_path):

        if code_type == "API9" or ets_code and 'js-apis' in md_path:
            self.src_import_img(code, code_type, ets_code)
            path = r'entry\src\main\ets\pages\index.ets'
            file_path = os.path.normpath(
                os.path.join(os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0],
                                                          "..")), r'project\ets_project\%s' % path))
            old = "@Entry\n// @ts-ignore\n@Component\nstruct Index {\n  @State message: string = 'Hello World'\
              \nbuild() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .fontSize(50)\n   \
                     .fontWeight(FontWeight.Bold)\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}"

            with open(file_path, 'w', encoding='utf8', errors='ignore') as file_open:
                file_open.truncate()
                if "@Entry" not in str(code) and "@Component" not in str(code):
                    file_open.write(str(code) + '\n' + old)
                else:
                    file_open.write(str(code))

        elif ets_code and 'ts-' in md_path:
            self.src_import_img(code, code_type, ets_code)
            path = r'entry/src/main/ets/pages/index.ets'
            file_path = os.path.normpath(
                os.path.join(os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0],
                                                          "..")), r'project/ets_project/%s' % path))
            with open(file_path, 'w', encoding='utf8', errors='ignore') as file_open:
                file_open.truncate()
                file_open.write(str(code))
        elif code_type == "TypeScript" and not ets_code:
            self.src_import_img(code, code_type, ets_code)
            if "app.ets" in code:
                path = r'entry/src/main/ets/MainAbility/app.ets'
                file_path = os.path.normpath(
                    os.path.join(os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0],
                                                              "..")), r'project/ets_project/%s' % path))
            else:
                path = r'entry/src/main/ets/MainAbility/pages/index.ets'
                file_path = os.path.normpath(
                    os.path.join(os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0],
                                                              "..")), r'project/ets_project/%s' % path))
            if code_type != 'API9':
                with open(file_path, 'w', encoding='utf8', errors='ignore') as file_open:
                    file_open.truncate()
                    file_open.write(str(code))
        elif code_type == "HTML":
            # 判断代码中是否存入图片
            self.import_image_file(code)
            if '.hml' in code and 'xxx.hml' not in code and '>' in code:
                complist = re.findall('!--(.*?).hml', code)
                path = r'entry/src/main/js/MainAbility/pages/%s/%s.hml' % (complist[0], complist[0] + '.hml')
                file_path = os.path.normpath(
                    os.path.join(os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0],
                                                              "..")), r'project/js_project/%s' % path))

                if not os.path.exists(file_path.replace('\\' + complist[0] + '.hml', '')):
                    os.makedirs(file_path.replace('\\' + complist[0] + '.hml', ''))

            elif 'xxx.hml' in code:
                if 'src' in code:
                    src_list = re.findall("src=(.*?)>", code)
                    src_list1 = re.findall("src=(.*?)'", code)
                    if len(src_list) >= 1:
                        if 'png' not in src_list[0] and 'jpg' not in src_list[0]:
                            code = code.replace(src_list[0].replace('"', "").replace("'", ""), '../' + hml_name)
                    elif len(src_list1) >= 1:
                        if 'png' not in src_list1[0] and 'jpg' not in src_list1[0]:
                            code = code.replace(src_list1[0].replace('"', "").replace("'", ""), '../' + hml_name)
                path = r'entry/src/main/js/MainAbility/pages/index/index.hml'
                file_path = os.path.normpath(
                    os.path.join(os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0],
                                                              "..")), r'project/js_project/%s' % path))
            else:
                path = r'entry/src/main/js/MainAbility/pages/index/index.hml'
                file_path = os.path.normpath(
                    os.path.join(os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0],
                                                              "..")), r'project/js_project/%s' % path))

            if code_type != 'API9':
                with open(file_path, 'w', encoding='utf8', errors='ignore') as file_open:
                    file_open.truncate()
                    print(code)
                    file_open.write(str(code) + '\n')
        elif code_type == "CSS":
            self.css_import_img(code)
            if '.css' in code and 'xx.css' not in code and '<' in code \
                    or '.css' in code and 'xxx.css' not in code and '/*' in code:
                comp = code.find('css')
                complist = code[:comp].replace('<', '').replace('!', '') \
                    .replace('-', '').replace('/', '').replace('*', '').replace(' ', '').replace('.', '')
                path = r'entry/src/main/js/MainAbility/pages/%s/%s.css' % (complist, complist)
                file_path = os.path.normpath(
                    os.path.join(os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0],
                                                              "..")), r'project/js_project/%s' % path))

                if not os.path.exists(file_path.replace('\\' + complist + '.css', '')):
                    os.makedirs(file_path.replace('\\' + complist + '.css', ''))


            elif 'xxx.css' in code or 'xxx.CSS' in code:
                if 'src' in code and css_name in code and '../' in code and css_name != '':
                    src_list = re.findall('src=(.*?)>', code)
                    if 'png' not in src_list[0] and 'jpg' not in src_list[0]:
                        code = code.replace(src_list[0].replace('"', '').replace("'", ''), '../' + css_name)
                path = r'entry/src/main/js/MainAbility/pages/index/index.css'
                file_path = os.path.normpath(
                    os.path.join(os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0],
                                                              "..")), r'project/js_project/%s' % path))
            else:
                path = r'entry/src/main/js/MainAbility/pages/index/index.css'
                file_path = os.path.normpath(
                    os.path.join(os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0],
                                                              "..")), r'project/js_project/%s' % path))
            if code_type != 'API9':
                with open(file_path, 'w+', encoding='utf8', errors='ignore') as file_open:
                    file_open.truncate()
                    print(code)
                    file_open.write(str(code) + '\n')
        elif code_type == 'JavaScript' and not ets_code:
            self.src_import_img(code, code_type, ets_code)

            if '.js' in code and 'xxx.js' not in code and '// js' not in code and '//' in code:
                complist = re.findall('//(.*?).js', code)
                path = r'entry/src/main/js/MainAbility/pages/%s/%s.js' % (
                    complist[0].replace(' ', ''), complist[0].replace(' ', ''))
                file_path = os.path.normpath(
                    os.path.join(os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0],
                                                              "..")), r'project/js_project/%s' % path))

                if not os.path.exists(file_path.replace('\\' + complist[0].replace(' ', '') + '.js', '')):
                    os.makedirs(file_path.replace('\\' + complist[0].replace(' ', '') + '.js', ''))

            elif 'xxx.js' in code or 'xxx.JS' in code:
                if 'src' in code and js_name in code and '../' in code and js_name != '':
                    src_list = re.findall('src=(.*?)>', code)
                    if 'png' not in src_list[0] and 'jpg' not in src_list[0]:
                        code = code.replace(src_list[0].replace('"', '').replace("'", ''), '../' + js_name)
                path = r'entry/src/main/js/MainAbility/pages/index/index.js'
                file_path = os.path.normpath(
                    os.path.join(os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0],
                                                              "..")), r'project/js_project/%s' % path))
            else:
                path = r'entry/src/main/js/MainAbility/pages/index/index.js'
                file_path = os.path.normpath(
                    os.path.join(os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0],
                                                              "..")), r'project/js_project/%s' % path))
            if code_type != 'API9':
                with open(file_path, 'w+', encoding='utf8', errors='ignore') as file_open:
                    file_open.truncate()
                    print(code)
                    file_open.write(str(code) + '\n')

    def import_image_file(self, code):
        # 遍历code，查询是否包含引入的hml文件
        # 遍历code，查询是否包含引入的image文件
        # 正则表达式匹配<image，到</image>
        image_list = re.findall("<image (.*?)>", code)
        for item in image_list:
            item = str(item).replace(' ', '')
            image_src = re.findall('src="(.*?)"', item)[0]
            if len(image_src) == 0:
                image_src = re.findall("src='(.*?)'", item)[0]
            parent_path_list = re.findall(r"\.\.", image_src)
            path = r'entry/src/main/js/MainAbility/pages/index/'
            file_path = os.path.normpath(
                os.path.join(os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0],
                                                          "..")), r'project/js_project/%s' % path))
            for i in parent_path_list:
                file_path = os.path.abspath(os.path.join(file_path, ".."))
            index = self.find_index(image_src, True)
            file_path1 = image_src[index + 1:]
            file_path2 = image_src[:index]
            first_dir = image_src[:self.find_index(image_src, False)]
            if not os.path.exists(os.path.join(file_path, file_path2, file_path1)):
                if not os.path.exists(os.path.join(file_path, file_path2)):
                    os.makedirs(os.path.join(file_path, file_path2))
                    self.image_img_path_list.append(os.path.join(file_path, first_dir))
                if 'jpg' in file_path1 or 'png' in file_path1:
                    self.create_pic(os.path.join(file_path, file_path2, file_path1))
                else:
                    file_open = open(os.path.join(file_path, file_path2, file_path1), 'w')
                    file_open.close()
                self.image_img_path_list.append(os.path.join(file_path, file_path2, file_path1))

    @staticmethod
    def over_write_file(ets_project, js_project, ets_code, md_path):
        if not ets_code and 'js-' in md_path and 'js-apis' not in md_path:
            # html替换为原文件
            path = r'entry/src/main/js/MainAbility/pages/index/index.hml'
            file_path_hml = os.path.normpath(
                os.path.join(os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0],
                                                          "..")), r'project/%s/%s' % (js_project, path)))

            folder_path_hml = os.path.abspath(
                os.path.join(os.path.split(os.path.abspath(__file__))[0], '..', 'backup/js/index.hml'))
            shutil.copyfile(folder_path_hml, file_path_hml)
            print('成功替换')
            # css替换为原文件
            path = r'entry/src/main/js/MainAbility/pages/index/index.css'
            file_path_css = os.path.normpath(
                os.path.join(os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0],
                                                          "..")), r'project/%s/%s' % (js_project, path)))

            folder_path_css = os.path.abspath(
                os.path.join(os.path.split(os.path.abspath(__file__))[0], '..', 'backup/js/index.css'))
            shutil.copyfile(folder_path_css, file_path_css)
            # js替换为原文件
            path = r'entry/src/main/js/MainAbility/pages/index/index.js'
            file_path_js = os.path.normpath(
                os.path.join(os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0],
                                                          "..")), r'project/%s/%s' % (js_project, path)))

            folder_path_js = os.path.abspath(
                os.path.join(os.path.split(os.path.abspath(__file__))[0], '..', 'backup/js/index.js'))
            shutil.copyfile(folder_path_js, file_path_js)
        elif not ets_code and 'ts-' in md_path:
            path = r'entry/src/main/ets/MainAbility/pages/index.ets'
            file_path = os.path.normpath(
                os.path.join(os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0],
                                                          "..")), r'project/%s/%s' % (ets_project, path)))
            folder_path = os.path.abspath(
                os.path.join(os.path.split(os.path.abspath(__file__))[0], '..', 'backup/ts/index.ets'))
            shutil.copyfile(folder_path, file_path)
            path = r'entry/src/main/ets/MainAbility/app.ets'
            file_path_app = os.path.normpath(
                os.path.join(os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0],
                                                          "..")), r'project/%s/%s' % (ets_project, path)))
            folder_path_app = os.path.abspath(
                os.path.join(os.path.split(os.path.abspath(__file__))[0], '..', 'backup/ts/app.ets'))
            shutil.copyfile(folder_path_app, file_path_app)

    # 生成一张图片
    @staticmethod
    def create_pic(file_path):
        width = 256
        height = 256
        img = np.zeros([width, height, 3], dtype=np.uint8)
        # 遍历每个像素点，并进行赋值
        for i in range(width):
            for j in range(height):
                img[i, j, :] = [i % 256, j % 256, (i + j) % 256]

        # 展示图片
        cv2.imwrite(file_path, img)
        cv2.waitKey(0)
        cv2.destroyAllWindows()

    # css引入图片
    def css_import_img(self, code):
        image_list = re.findall(r"url\((.*?)\)", code)
        for item in image_list:
            item = str(item).replace(' ', '').replace("'", '').replace('"', '')
            index = self.find_index(item, True)
            parent_path_list = re.findall(r"\.\.", item)
            file_path1 = item[index + 1:len(item) - 1]
            file_path2 = item[1:index]
            first_dir = item[:self.find_index(file_path2, False)]
            path = r'entry/src/main/js/MainAbility/pages/index'
            file_path = os.path.normpath(
                os.path.join(os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0],
                                                          "..")), r'project/js_project/%s' % path))

            for parent in parent_path_list:
                file_path = os.path.abspath(os.path.join(file_path, '..'))
            if not os.path.exists(os.path.join(file_path, file_path2, file_path1)):
                if not os.path.exists(os.path.join(file_path, file_path2)):
                    os.makedirs(os.path.join(file_path, file_path2))
                    self.image_img_path_list.append(os.path.join(file_path, first_dir))
                if 'jpg' in file_path1 or 'png' in file_path1:
                    self.create_pic(os.path.join(file_path, file_path2, file_path1))
                else:
                    file_open = open(os.path.join(file_path, file_path2, file_path1), 'w')
                    file_open.close()
                self.image_img_path_list.append(os.path.join(file_path, file_path2, file_path1))

    # src方式引入图片，包括src: "/common/asserts/heart78.png" , src = 'common/image/example.jpg';两种方式
    def src_import_img(self, code, code_type, ets_code):
        image_list = re.findall("src:(.*?);|src=(.*?);", code.replace(' ', ''))
        for item in image_list:
            item = str(item).replace(' ', '')
            index = self.find_index(item, True)
            file_path1 = item[index + 1:len(item) - 1]
            file_path2 = item[2:index].replace('"', '').replace("'", '').replace(',', '')
            first_dir = item[:self.find_index(file_path2, False)]
            parent_path_list = re.findall(r"\.\.", item)
            if ets_code:
                path = r'entry/src/main/ets//pages//'
                file_path = os.path.normpath(
                    os.path.join(os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0],
                                                              "..")), r'project/ets_project/%s' % path))

            elif code_type == 'TypeScript':
                path = r'entry/src/main/ets/MainAbility/pages//'
                file_path = os.path.normpath(
                    os.path.join(os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0],
                                                              "..")), r'project/ets_project/%s' % path))
            else:
                path = r'entry/src/main/js/MainAbility/pages/index//'
                file_path = os.path.normpath(
                    os.path.join(os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0],
                                                              "..")), r'project/ets_project/%s' % path))
            for parent in parent_path_list:
                file_path = os.path.abspath(os.path.join(file_path, '..'))
            if not os.path.exists(os.path.join(file_path, file_path2, file_path1)):
                if not os.path.exists(os.path.join(file_path, file_path2)):
                    os.makedirs(os.path.join(file_path, file_path2))
                    self.image_img_path_list.append(os.path.join(file_path, first_dir))
                if 'jpg' in file_path1 or 'png' in file_path1:
                    self.create_pic(os.path.join(file_path, file_path2, file_path1))
                else:
                    file_open = open(os.path.join(file_path, file_path2, file_path1), 'w')
                    file_open.close()
                self.image_img_path_list.append(os.path.join(file_path, file_path2, file_path1))

    # 获取图片名称，主要是获取文件名称所在的位置
    @staticmethod
    def find_index(image_src, right):
        image_src = image_src.replace('\\', '/')
        if image_src.startswith('//'):
            image_src = image_src[2:]
        if image_src.startswith('/'):
            image_src = image_src[1:]
        if right:
            index = image_src.rfind(r'/')
            if index == -1:
                index = image_src.rfind(r'\\')
            if index == -1:
                index = image_src.rfind(r'//')
            if index == -1:
                index = image_src.rfind(r'\\\\')
        else:
            index = image_src.find(r'/')
            if index == -1:
                index = image_src.find(r'\\')
            if index == -1:
                index = image_src.find(r'//')
            if index == -1:
                index = image_src.find(r'\\\\')
        return index
