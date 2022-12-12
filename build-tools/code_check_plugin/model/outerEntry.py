# --coding: utf-8 --
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
def run(resultName, jsonName, f, o='', bat=''):

    speak_d('Start progress run')
    md_detection = MaterialDetection()
    if f:
        if o:
            md_detection.operation(f, o, bat, resultName, jsonName)
        else:
            md_detection.operation(f, f, bat, resultName, jsonName)
    else:
        speak_e('Param error')
