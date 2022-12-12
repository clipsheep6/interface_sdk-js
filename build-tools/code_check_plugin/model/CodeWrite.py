# --coding: utf-8 --
import os
import re
import shutil
import numpy as np
from cv2 import cv2

from util.utils import delFolderOrFile


class CodeWrite:
    def __init__(self):
        self.pictureNameList = ''
        self.filePath = ""
        self.imageImgPathList = []
        self.hmlName = ''

    def startWriteProject(self, code, codeType, hmlName, cssName, jsName, eTSProject, JSProject, etsCode, mdPath):
        if codeType == 'TypeScript':
            # 先查看代码中是否有图片资源需要取，格式未app.media
            self.getPicture(code, eTSProject, JSProject)

        # 然后将code写到相应文件中
        self.writeCode(code, codeType, hmlName, cssName, jsName, eTSProject, JSProject, etsCode, mdPath)

    # 将相应的图片资源创建出来
    def getPicture(self, code, eTSProject, JSProject):
        pictureNameList = re.findall(r"""(?<=app\.media\.).*?(?=')|(?<=app\.media\.).*?(?=")""", str(code))
        # 创建picture文件

        filePath = os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0],
                                                "..")) + r'/project/' + eTSProject + r"\entry\src\main\resources\base\media"
        pictureNameList = set(pictureNameList)
        for item in pictureNameList:
            fp = open(os.path.join(filePath, item), 'w')
            fp.close()
        self.pictureNameList = pictureNameList
        self.filePath = filePath

    # 编译完成后删除文件
    def delPicture(self):
        for item in self.pictureNameList:
            delFolderOrFile(os.path.join(self.filePath, item))
        for item in self.imageImgPathList:
            delFolderOrFile(os.path.join(item))

    # 将相应的code值写入到相应的文件中
    def writeCode(self, code, codeType, hmlName, cssName, jsName, eTSProject, JSProject, etsCode, mdPath):
        filePath = ''

        if codeType == "API9" or etsCode and 'js-apis' in mdPath:
            self.srcImportImg(code, codeType, eTSProject, JSProject, etsCode)
            filePath = os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0], '..')) + \
                       r'/project/' + eTSProject + r'\entry\src\main\ets\pages\index.ets'
            old = "@Entry\n// @ts-ignore\n@Component\nstruct Index {\n  @State message: string = 'Hello World'\
              \nbuild() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .fontSize(50)\n   \
                     .fontWeight(FontWeight.Bold)\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}"

            with open(filePath, 'w', encoding='utf8', errors='ignore') as f:
                f.truncate()
                if "@Entry" not in str(code) and "@Component" not in str(code):
                    f.write(str(code) + '\n' + old)
                else:
                    f.write(str(code))

        elif etsCode and 'ts-' in mdPath:
            self.srcImportImg(code, codeType, eTSProject, JSProject, etsCode)
            filePath = os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0], '..')) + \
                       r'/project/' + eTSProject + r'\entry\src\main\ets\pages\index.ets'
            with open(filePath, 'w', encoding='utf8', errors='ignore') as f:
                f.truncate()
                f.write(str(code))
        elif codeType == "TypeScript" and not etsCode:
            self.srcImportImg(code, codeType, eTSProject, JSProject, etsCode)
            if "app.ets" in code:
                filePath = os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0], '..')) + \
                           r'/project/' + eTSProject + r'\entry\src\main\ets\MainAbility\app.ets'
            else:
                filePath = os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0], '..')) + \
                           r'/project/' + eTSProject + r'\entry\src\main\ets\MainAbility\pages\index.ets'
            if codeType != 'API9':
                with open(filePath, 'w', encoding='utf8', errors='ignore') as f:
                    f.truncate()
                    f.write(str(code))
        elif codeType == "HTML":
            # 判断代码中是否存入图片
            self.importImageFile(code, eTSProject, JSProject)
            if '.hml' in code and 'xxx.hml' not in code and '>' in code:
                complist = re.findall('!--(.*?).hml', code)
                filePath = os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0], "..")) + \
                           r'/project/' + JSProject + r'\entry\src\main\js\MainAbility\pages' + '\\' + complist[
                               0] + '\\' + complist[0] + '.hml'
                if not os.path.exists(filePath.replace('\\' + complist[0] + '.hml', '')):
                    os.makedirs(filePath.replace('\\' + complist[0] + '.hml', ''))

            elif 'xxx.hml' in code:
                if 'src' in code:
                    srcList = re.findall("src=(.*?)>", code)
                    srcList1 = re.findall("src=(.*?)'", code)
                    if len(srcList) >= 1:
                        if 'png' not in srcList[0] and 'jpg' not in srcList[0]:
                            code = code.replace(srcList[0].replace('"', "").replace("'", ""), '../' + hmlName)
                    elif len(srcList1) >= 1:
                        if 'png' not in srcList1[0] and 'jpg' not in srcList1[0]:
                            code = code.replace(srcList1[0].replace('"', "").replace("'", ""), '../' + hmlName)

                filePath = os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0], '..')) + \
                           r'/project/' + JSProject + r'\entry\src\main\js\MainAbility\pages\index\index.hml'
            else:
                filePath = os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0], '..')) + \
                           r'/project/' + JSProject + r'\entry\src\main\js\MainAbility\pages\index\index.hml'
            if codeType != 'API9':
                with open(filePath, 'w', encoding='utf8', errors='ignore') as f:
                    f.truncate()
                    print(code)
                    f.write(str(code) + '\n')
        elif codeType == "CSS":
            self.cssImportImg(code, eTSProject, JSProject)
            if '.css' in code and 'xx.css' not in code and '<' in code \
                    or '.css' in code and 'xxx.css' not in code and '/*' in code:
                comp = code.find('css')
                complist = code[:comp].replace('<', '').replace('!', '') \
                    .replace('-', '').replace('/', '').replace('*', '').replace(' ', '').replace('.', '')
                filePath = os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0], '..')) + \
                           r'/project/' + JSProject + r"\entry\src\main\js\MainAbility\pages" + '\\' + complist + '\\' + \
                           complist + '.css'
                if not os.path.exists(filePath.replace('\\' + complist + '.css', '')):
                    os.makedirs(filePath.replace('\\' + complist + '.css', ''))


            elif 'xxx.css' in code or 'xxx.CSS' in code:
                if 'src' in code and cssName in code and '../' in code and cssName != '':
                    srcList = re.findall('src=(.*?)>', code)
                    if 'png' not in srcList[0] and 'jpg' not in srcList[0]:
                        code = code.replace(srcList[0].replace('"', '').replace("'", ''), '../' + cssName)
                filePath = os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0], '..')) + \
                           r'/project/' + JSProject + r'\entry\src\main\js\MainAbility\pages\index\index.css'
            else:
                filePath = os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0], '..')) + \
                           r'/project/' + JSProject + r'\entry\src\main\js\MainAbility\pages\index\index.css'
            if codeType != 'API9':
                with open(filePath, 'w+', encoding='utf8', errors='ignore') as f:
                    f.truncate()
                    print(code)
                    f.write(str(code) + '\n')
        elif codeType == 'JavaScript' and not etsCode:
            self.srcImportImg(code, codeType, eTSProject, JSProject, etsCode)

            if '.js' in code and 'xxx.js' not in code and '// js' not in code and '//' in code:
                complist = re.findall('//(.*?).js', code)
                filePath = os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0], '..')) + \
                           r'/project/' + JSProject + r'\entry\src\main\js\MainAbility\pages' + '\\' + complist[
                               0].replace(' ', '') + '\\' + complist[0].replace(' ', '') + '.js'
                if not os.path.exists(filePath.replace('\\' + complist[0].replace(' ', '') + '.js', '')):
                    os.makedirs(filePath.replace('\\' + complist[0].replace(' ', '') + '.js', ''))

            elif 'xxx.js' in code or 'xxx.JS' in code:
                if 'src' in code and jsName in code and '../' in code and jsName != '':
                    srcList = re.findall('src=(.*?)>', code)
                    if 'png' not in srcList[0] and 'jpg' not in srcList[0]:
                        code = code.replace(srcList[0].replace('"', '').replace("'", ''), '../' + jsName)
                filePath = os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0], '..')) + \
                           r'/project/' + JSProject + r'\entry\src\main\js\MainAbility\pages\index\index.js'
            else:
                filePath = os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0], '..')) + \
                           r'/project/' + JSProject + r'\entry\src\main\js\MainAbility\pages\index\index.js'
            if codeType != 'API9':
                with open(filePath, 'w+', encoding='utf8', errors='ignore') as f:
                    f.truncate()
                    print(code)
                    f.write(str(code) + '\n')

    def importImageFile(self, code, eTSProject, JSProject):
        # 遍历code，查询是否包含引入的hml文件
        # 遍历code，查询是否包含引入的image文件
        # 正则表达式匹配<image，到</image>
        imageList = re.findall("<image (.*?)>", code)
        for item in imageList:
            item = str(item).replace(' ', '')
            imageSrc = re.findall('src="(.*?)"', item)[0]
            if len(imageSrc) == 0:
                imageSrc = re.findall("src='(.*?)'", item)[0]
            parentPathList = re.findall(r"\.\.", imageSrc)
            filePath = os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0], '..')) + \
                       r'/project/' + JSProject + r'\entry\src\main\js\MainAbility\pages\index\\'
            for i in parentPathList:
                filePath = os.path.abspath(os.path.join(filePath, ".."))
            index = self.findIndex(imageSrc, True)
            filePath1 = imageSrc[index + 1:]
            filePath2 = imageSrc[:index]
            firstDir = imageSrc[:self.findIndex(imageSrc, False)]
            if not os.path.exists(os.path.join(filePath, filePath2, filePath1)):
                if not os.path.exists(os.path.join(filePath, filePath2)):
                    os.makedirs(os.path.join(filePath, filePath2))
                    self.imageImgPathList.append(os.path.join(filePath, firstDir))
                if 'jpg' in filePath1 or 'png' in filePath1:
                    self.create_pic(os.path.join(filePath, filePath2, filePath1))
                else:
                    fp = open(os.path.join(filePath, filePath2, filePath1), 'w')
                    fp.close()
                self.imageImgPathList.append(os.path.join(filePath, filePath2, filePath1))

    @staticmethod
    def overWriteFile(eTSProject, JSProject, etsCode, mdPath):
        if not etsCode and 'js-' in mdPath and 'js-apis' not in mdPath:
            # html替换为原文件
            filePath_hml = os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0], '..')) + \
                           r'/project/' + JSProject + r'\entry\src\main\js\MainAbility\pages\index\index.hml'
            folderPath_hml = os.path.abspath(
                os.path.join(os.path.split(os.path.abspath(__file__))[0], '..', 'backup/js/index.hml'))
            shutil.copyfile(folderPath_hml, filePath_hml)
            print('成功替换')
            # css替换为原文件
            filePath_css = os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0], '..')) + \
                           r'/project/' + JSProject + r'\entry\src\main\js\MainAbility\pages\index\index.css'
            folderPath_css = os.path.abspath(
                os.path.join(os.path.split(os.path.abspath(__file__))[0], '..', 'backup/js/index.css'))
            shutil.copyfile(folderPath_css, filePath_css)
            # js替换为原文件
            filePath_js = os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0], '..')) + \
                          r'/project/' + JSProject + r'\entry\src\main\js\MainAbility\pages\index\index.js'
            folderPath_js = os.path.abspath(
                os.path.join(os.path.split(os.path.abspath(__file__))[0], '..', 'backup/js/index.js'))
            shutil.copyfile(folderPath_js, filePath_js)
        elif not etsCode and 'ts-' in mdPath:
            filePath = os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0], '..')) + \
                       r'/project/' + eTSProject + r'\entry\src\main\ets\MainAbility\pages\index.ets'
            folderPath = os.path.abspath(
                os.path.join(os.path.split(os.path.abspath(__file__))[0], '..', 'backup/ts/index.ets'))
            shutil.copyfile(folderPath, filePath)
            filePathApp = os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0], '..')) + \
                          r'/project/' + eTSProject + r'\entry\src\main\ets\MainAbility\app.ets'
            folderPathApp = os.path.abspath(
                os.path.join(os.path.split(os.path.abspath(__file__))[0], '..', 'backup/ts/app.ets'))
            shutil.copyfile(folderPathApp, filePathApp)

    # 生成一张图片
    @staticmethod
    def create_pic(filePath):
        width = 256
        height = 256
        img = np.zeros([width, height, 3], dtype=np.uint8)
        # 遍历每个像素点，并进行赋值
        for i in range(width):
            for j in range(height):
                img[i, j, :] = [i % 256, j % 256, (i + j) % 256]

        # 展示图片
        cv2.imwrite(filePath, img)
        cv2.waitKey(0)
        cv2.destroyAllWindows()

    # css引入图片
    def cssImportImg(self, code, eTSProject, JSProject):
        imageList = re.findall(r"url\((.*?)\)", code)
        for item in imageList:
            item = str(item).replace(' ', '').replace("'", '').replace('"', '')
            index = self.findIndex(item, True)
            parentPathList = re.findall(r"\.\.", item)
            filePath1 = item[index + 1:len(item) - 1]
            filePath2 = item[1:index]
            firstDir = item[:self.findIndex(filePath2, False)]
            filePath = os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0], '..')) + \
                       r'/project/' + JSProject + r'\entry\src\main\js\MainAbility\pages\index'
            for i in parentPathList:
                filePath = os.path.abspath(os.path.join(filePath, '..'))
            if not os.path.exists(os.path.join(filePath, filePath2, filePath1)):
                if not os.path.exists(os.path.join(filePath, filePath2)):
                    os.makedirs(os.path.join(filePath, filePath2))
                    self.imageImgPathList.append(os.path.join(filePath, firstDir))
                if 'jpg' in filePath1 or 'png' in filePath1:
                    self.create_pic(os.path.join(filePath, filePath2, filePath1))
                else:
                    fp = open(os.path.join(filePath, filePath2, filePath1), 'w')
                    fp.close()
                self.imageImgPathList.append(os.path.join(filePath, filePath2, filePath1))

    # src方式引入图片，包括src: "/common/asserts/heart78.png" , src = 'common/image/example.jpg';两种方式
    def srcImportImg(self, code, codeType, eTSProject, JSProject, etsCode):
        imageList = re.findall("src:(.*?);|src=(.*?);", code.replace(' ', ''))
        for item in imageList:
            item = str(item).replace(' ', '')
            index = self.findIndex(item, True)
            filePath1 = item[index + 1:len(item) - 1]
            filePath2 = item[2:index].replace('"', '').replace("'", '').replace(',', '')
            firstDir = item[:self.findIndex(filePath2, False)]
            parentPathList = re.findall(r"\.\.", item)
            if etsCode:
                filePath = os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0], '..')) + \
                           r'/project/' + eTSProject + r'\entry\src\main\ets\\pages\\'
            elif codeType == 'TypeScript':
                filePath = os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0], '..')) + \
                           r'/project/' + eTSProject + r'\entry\src\main\ets\MainAbility\pages\\'
            else:
                filePath = os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0], '..')) + \
                           r'/project/' + JSProject + r'\entry\src\main\js\MainAbility\pages\index\\'
            for i in parentPathList:
                filePath = os.path.abspath(os.path.join(filePath, '..'))
            if not os.path.exists(os.path.join(filePath, filePath2, filePath1)):
                if not os.path.exists(os.path.join(filePath, filePath2)):
                    os.makedirs(os.path.join(filePath, filePath2))
                    self.imageImgPathList.append(os.path.join(filePath, firstDir))
                if 'jpg' in filePath1 or 'png' in filePath1:
                    self.create_pic(os.path.join(filePath, filePath2, filePath1))
                else:
                    fp = open(os.path.join(filePath, filePath2, filePath1), 'w')
                    fp.close()
                self.imageImgPathList.append(os.path.join(filePath, filePath2, filePath1))

    # 获取图片名称，主要是获取文件名称所在的位置
    @staticmethod
    def findIndex(imageSrc, right):
        index = 0
        imageSrc = imageSrc.replace('\\', '/')
        if imageSrc.startswith('//'):
            imageSrc = imageSrc[2:]
        if imageSrc.startswith('/'):
            imageSrc = imageSrc[1:]
        if right:
            index = imageSrc.rfind(r'/')
            if index == -1:
                index = imageSrc.rfind(r'\\')
            if index == -1:
                index = imageSrc.rfind(r'//')
            if index == -1:
                index = imageSrc.rfind(r'\\\\')
        else:
            index = imageSrc.find(r'/')
            if index == -1:
                index = imageSrc.find(r'\\')
            if index == -1:
                index = imageSrc.find(r'//')
            if index == -1:
                index = imageSrc.find(r'\\\\')
        return index