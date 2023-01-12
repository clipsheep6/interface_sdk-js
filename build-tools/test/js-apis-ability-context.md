# AbilityContext

AbilityContext是Ability的上下文环境，继承自Context。

AbilityContext模块提供允许访问特定Ability的资源的能力，包括对Ability的启动、停止的设置、获取caller通信接口、拉起弹窗请求用户授权等。

> **说明：**
>
>  - 本模块首批接口从API version 9开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
>  - 本模块接口仅可在Stage模型下使用。

## 使用说明

在使用AbilityContext的功能前，需要通过Ability子类实例获取。

