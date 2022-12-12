# --coding: utf-8 --
from model import outerEntry
from util.speaker import speak_i
import sys

if __name__ == '__main__':
    speak_i("Start DocCodeCheck")
    outerEntry.run(sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4])
