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
import ctypes
import datetime
import os
import platform

SPEAK_D_LOG_ENABLE = True
SPEAK_E_LOG_ENABLE = True
SPEAK_I_LOG_ENABLE = True
STD_INPUT_HANDLE = -10
STD_OUTPUT_HANDLE = -11
STD_ERROR_HANDLE = -12

FOREGROUND_BLACK = 0x0
FOREGROUND_BLUE = 0x01
FOREGROUND_GREEN = 0x02
FOREGROUND_RED = 0x04
FOREGROUND_INTENSITY = 0x08

BACKGROUND_BLUE = 0x10
BACKGROUND_GREEN = 0x20
BACKGROUND_RED = 0x40
BACKGROUND_INTENSITY = 0x80


class Speaker:
    def __init__(self):
        self.Name = 'MD_Detection'

    def speaker(self, words):
        if type(words) is int:
            print(datetime.datetime.now().strftime('%Y/%m/%d %H:%M:%S') + '[' + self.Name + ']: ' + str(words))
        else:
            print(datetime.datetime.now().strftime('%Y/%m/%d %H:%M:%S') + '[' + self.Name + ']: ' + words)


def write_log(words):
    now_time = datetime.datetime.now().strftime('%Y-%m-%d')
    root_path = os.path.abspath(os.path.join(os.path.split(os.path.abspath(__file__))[0], '..'))
    log_path = os.path.join(root_path, 'log', now_time)
    if not os.path.exists(log_path):
        os.makedirs(log_path)
    with open(os.path.join(log_path, now_time + '.log'), 'a+', encoding='utf8', errors='ignore') as file_open:
        file_open.write(str(words) + '\n')


global_speaker = Speaker()
window_play = None


def is_windows_play_from():
    global window_play
    if window_play is None:
        system = platform.architecture()
        if str(system).find('Windows') != -1:
            window_play = True
        else:
            window_play = False
    return window_play


def speak_d(*args):
    if SPEAK_D_LOG_ENABLE is False:
        return
    global global_speaker
    words = ''
    for arg in args:
        words = '%s%s ' % (words, str(arg))
    if words != '':
        words = words[:-1]
    global_speaker.speaker(words)


def set_cmd_color(color):
    bool1 = ctypes.windll.kernel32.SetConsoleTextAttribute(ctypes.windll.kernel32.GetStdHandle(STD_OUTPUT_HANDLE),
                                                           color)
    return bool1


def reset_color():
    set_cmd_color(FOREGROUND_RED | FOREGROUND_GREEN | FOREGROUND_BLUE)


def speak_e(*args):
    if SPEAK_E_LOG_ENABLE is False:
        return
    global global_speaker
    words = ''
    for arg in args:
        words = '%s%s ' % (words, str(arg))
    if words != '':
        words = words[:-1]
    if is_windows_play_from():
        global_speaker.speaker('\003[0;31m' + "#Error#: " + words + '\033[0m')
    else:
        global_speaker.speaker('\003[0;31m' + "#Error#: " + words + '\033[0m')


def speak_i(*args):
    if SPEAK_I_LOG_ENABLE is False:
        return
    global global_speaker
    words = ''
    for arg in args:
        words = '%s%s ' % (words, str(arg))
    if words != '':
        words = words[:-1]
    if is_windows_play_from():
        global_speaker.speaker(words)
    else:
        global_speaker.speaker('\003[0;34m' + words + '\033[0m')
