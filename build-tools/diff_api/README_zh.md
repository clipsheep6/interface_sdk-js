#  Api-Diff对比工具

## 简介

该工具可用于对比两个版本SDK里的API差异，并汇总成表格，提供给应用开发者。

## 目录

```
├─test         #测试用例存放路径
└─src          #源码存放路径
```

## 使用方法

### 安装

需要安装npm依赖环境，在package.json同级目录下执行：npm install。

### 使用工具

查看工具命令行参数，在package.json同级目录下运行：

```
node .\src\entry\main.js diff -h
```

```
Usage: diff [options]

Compare the differences between the two SDKS

Options:
  -V, --version                      output the version number
  --old <string>                     old sdk path
  --new <string>                     new sdk path
  --oldVersion <string>              old sdk version
  --newVersion <string>              new sdk version
  --output <string>                  output file path
  --format <json, excel, changelog>  output file format
  --newPath <string>                 new interface_sdk-js path
  --oldPath <string>                 old interface_sdk-js path
  -h, --help                         display help for command
```

生成diff报告，在package.json同级目录下运行：

```
node .\src\entry\main.js diff --old 旧版本sdk根目录/windows/ets --new 新版本sdk根目录/windows/ets --oldVersion 旧版本SDK版本号 --newVersion 新版本SDK版本号 --output 输出路径 --format 报告格式（报告格式可选择excel或者json）
```

生成changelog配置文件，在package.json同级目录下运行：

```
node .\src\entry\main.js diff --oldPath 旧版本interface_sdk-js根目录 --new 新版本旧版本interface_sdk-js根目录 --oldVersion 旧版本号 --newVersion 新版本号 --output 输出路径 --format changelog
```

