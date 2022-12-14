'''
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
'''
# --coding: utf-8 --
import re

# 子系统对应关系
systemDict = {'js-apis-DataUriUtils.md': '元能力', 'js-apis-featureAbility.md': '元能力',
              'js-apis-particleAbility.md': '元能力', 'js-apis-ability-wantConstant.md': '元能力',
              'js-apis-abilityAccessCtrl.md': '程序访问控制',
              'js-apis-accessibility.md': '无障碍软件服务',
              'js-apis-appAccount.md': '账号', 'js-apis-distributed-account.md': '账号',
              'js-apis-osAccount.md': '账号', 'js-apis-animator.md': 'ArkUI开发框架',
              'js-apis-application-ability.md': '元能力', 'js-apis-application-abilityConstant.md': '元能力',
              'js-apis-application-abilitystage.md': '元能力', 'js-apis-configuration.md': '元能力',
              'js-apis-configurationconstant.md': '元能力', 'js-apis-formextension.md': '元能力',
              'js-apis-application-StartOptions.md': '元能力', 'js-apis-uripermissionmanager.md': '元能力',
              'js-apis-application-Want.md': '元能力',
              'js-apis-appmanager.md': '元能力', 'js-apis-formbindingdata.md': '元能力',
              'js-apis-missionManager.md': '元能力', 'js-apis-backgroundTaskManager.md': '资源调度',
              'js-apis-battery-info.md': '电源服务', 'js-apis-bluetooth.md': '基础通信', 'js-apis-brightness.md': '电源服务',
              'js-apis-bytrace.md': 'DFX',
              'js-apis-commonEvent.md': '事件通知', 'js-apis-config-policy.md': '定制', 'js-apis-convertxml.md': '公共基础类库',
              'js-apis-data-ability-md': '分布式数据管理',
              'js-apis-distributed-data.md': '分布式数据管理',
              'js-apis-data-distributedobject.md': '分布式数据管理', 'js-apis-data-rdb.md': '分布式数据管理',
              'js-apis-data-storage.md': '分布式数据管理', 'js-apis-device-info.md': '启动恢复',
              'js-apis-device-manager.md': '分布式硬件',
              'js-apis-environment.md': '文件管理', 'js-apis-emitter.md': '事件通知', 'js-apis-faultLogger.md': 'DFX',
              'js-apis-filemanager.md': '文件管理', 'js-apis-fileio.md': '文件管理', 'js-apis-geolocation.md': '位置服务',
              'js-apis-hiappevent.md': 'DFX', 'js-apis-hitracechain.md': 'DFX', 'js-apis-hitracemeter.md': 'DFX',
              'js-apis-hichecker.md': 'DFX', 'js-apis-hidebug.md': 'DFX', 'js-apis-hilog.md': 'DFX',
              'js-apis-i18n.md': '全球化', 'js-apis-inputmethodengine.md': 'Misc软件服务',
              'js-apis-intl.md': '全球化', 'js-apis-mediaquery.md': 'ArkUI开发框架',
              'js-apis-audio.md': 'OS媒体软件', 'js-apis-camera.md': 'OS媒体软件',
              'js-apis-image.md': '图形图像', 'js-apis-media.md': 'OS媒体软件',
              'js-apis-medialibrary.md': '文件管理', 'js-apis-inputconsumer.md': '多模输入',
              'js-apis-inputdevice.md': '多模输入', 'js-apis-inputmonitor.md': '多模输入',
              'js-apis-net-connection.md': '网络管理', 'js-apis-http.md': '网络管理', 'js-apis-socket.md': '网络管理',
              'js-apis-notification.md': '事件通知', 'js-apis-contact.md': '电话服务', 'js-apis-pasteboard.md': 'Misc软件服务',
              'js-apis-power.md': '电源服务', 'js-apis-process.md': '公共基础类库',
              'js-apis-prompt.md': 'ArkUI开发框架', 'js-apis-reminderAgent.md': '事件通知',
              'js-apis-resource-manager.md': '全球化',
              'js-apis-router.md': 'ArkUI开发框架', 'js-apis-rpc.md': '分布式软总线', 'js-apis-runninglock.md': '电源服务',
              'js-apis-screenshot.md': '窗口管理', 'js-apis-huks.md': '安全基础能力', 'js-apis-sensor.md': '泛Sensor服务',
              'js-apis-settings.md': '应用', 'js-apis-statfs.md': '文件管理', 'js-apis-storage-statistics.md': '文件管理',
              'js-apis-system-time.md': 'Misc软件服务',
              'js-apis-system-parameter.md': '启动恢复', 'js-apis-thermal.md': '电源服务', 'js-apis-update.md': '升级服务',
              'js-apis-uri.md': '公共基础类库', 'js-apis-url.md': '公共基础类库', 'js-apis-usb.md': 'USB服务',
              'js-apis-useriam-userauth.md': '用户IAM', 'js-apis-arraylist.md': '公共基础类库',
              'js-apis-deque.md': '公共基础类库', 'js-apis-hashmap.md': '公共基础类库',
              'js-apis-hashset.md': '公共基础类库', 'js-apis-lightweightmap.md': '公共基础类库',
              'js-apis-lightweightset.md': '公共基础类库', 'js-apis-linkedlist.md': '公共基础类库',
              'js-apis-list.md': '公共基础类库', 'js-apis-plainarray.md': '公共基础类库',
              'js-apis-queue.md': '公共基础类库', 'js-apis-stack.md': '公共基础类库', 'js-apis-treemap.md': '公共基础类库',
              'js-apis-treeset.md': '公共基础类库', 'js-apis-vector.md': '公共基础类库', 'js-apis-util.md': '公共基础类库',
              'js-apis-vibrator.md': '泛Sensor服务', 'js-apis-volumemanager.md': '文件管理',
              'js-apis-wallpaper.md': 'Misc软件服务', 'js-apis-wantAgent.md': '元能力', 'js-apis-wifi.md': '基础通信',
              'js-apis-wifiext.md': '基础通信', 'js-apis-window.md': '窗口管理', 'js-apis-workScheduler.md': '资源调度',
              'js-apis-worker.md': '公共基础类库', 'js-apis-xml.md': '公共基础类库', 'js-apis-zlib.md': '包管理',
              'js-apis-call.md': '电话服务',
              'js-apis-telephony-data.md': '电话服务', 'js-apis-observer.md': '电话服务',
              'js-apis-radio.md': '电话服务', 'js-apis-sim.md': '电话服务',
              'js-apis-sms.md': '电话服务',
              'js-apis-testRunner.md': '元能力',
              'js-apis-display.ma': '窗口管理',
              'js-apis-webSocket.md': '网络管理', 'js-apis-WorkSchedulerExtensionAbility.md': '资源调度',
              'js-apis-service-extension-ability.md': '元能力',
              'js-apis-application-staticSubscriberExtensionAbility.md': '元能力',
              'js-apis-deviceUsageStatistics.md': '资源调度',
              'js-apis-formerroe.md': '元能力',
              'js-apis-formInfo.md': '元能力', 'js-apis-connectedTag.md': '基础通信',
              'js-apis-document.md': '文件管理', 'js-apis-enterprise-device-manager.md': '全球化',
              'js-apis-inputeventclient.md': '多模输入',
              'js-apis-screen-lock.md': 'Misc软件服务', 'js-apis-uitest.md': '测试框架',
              'js-apis-inputmethod.md': 'Misc软件服务',
              'js-apis-data-preferences.md': '分布式数据管理',
              'js-apis-request.md': 'Misc软件服务',
              'js-apis-abilityDelegatorRegistry.md': '元能力',
              'js-apis-formhost.md': '元能力',
              'js-apis-formprovider.md': '元能力',
              'js-apis-ability-context.md': '元能力',
              'js-apis-abilityrunninginfo.md': '元能力',
              'js-apis-abilitystagecontext.md': '元能力',
              'js-apis-application-abilityDelegatorArgs.md': '元能力',
              'js-apis-application-context.md': '元能力',
              'js-apis-application-missionInfo.md': '元能力',
              'js-apis-application-MissionSnapshot.md': '元能力',
              'js-apis-application-shellCmdResult.md': '元能力',
              'js-apis-Context.md': '元能力',
              'js-apis-dataAbilityHelper.md': '元能力',
              'js-apis-eventhub.md': '元能力',
              'js-apis-extension-context.md': '元能力',
              'js-apis-extensionrunninginfo.md': '元能力',
              'js-apis-formextensioncontext.md': '元能力',
              'js-apis-processrunninginfo.md': '元能力',
              'js-apis-application-applicationContext.md': '元能力',
              'js-apis-bundle-AbilityInfo.md': '包管理',
              'js-apis-bundle-ApplicationInfo.md': '包管理',
              'js-apis-bundle-BundleInfo.md': '包管理',
              'js-apis-bundle-CustomizeData.md': '包管理',
              'js-apis-bundle-ExtensionAbilityInfo.md': '包管理',
              'js-apis-bundle-HapModuleInfo.md': '包管理',
              'js-apis-bundle-Metadata.md': '包管理',
              'js-apis-bundle-ModuleInfo.md': '包管理',
              'js-apis-permissionrequestresult.md': '元能力',
              'js-apis-service-extension-context.md': '元能力',
              'js-apis-webgl.md': '图形图像',
              'js-apis-webgl2.md': '图形图像',
              'js-apis-ability-errorCode.md': '元能力',
              'js-apis-data-resultset.md': '分布式数据管理',
              'js-apis-application-abilityDelegator.md': '元能力',
              'js-apis-Bundle.md': '包管理',
              'js-apis-system-bluetooth.md': '基础通信',
              'js-apis-system-app.md': '元能力',
              'js-apis-system-battery.md': '电源服务',
              'js-apis-system-cipher.md': '安全基础能力',
              'js-apis-system-brightness.md': '电源服务',
              'js-apis-system-mediaquery.md': 'ArkUI开发框架',
              'js-apis-system-configuration.md': '元能力',
              'js-apis-system-device.md': '启动恢复',
              'js-apis-system-file.md': '文件管理',
              'js-apis-system-location.md': '位置服务',
              'js-apis-system-network.md': '网络管理',
              'js-apis-system-notification.md': '事件通知',
              'js-apis-system-package.md': '包管理',
              'js-apis-system-prompt.md': 'ArkUI开发框架',
              'js-apis-system-request.md': 'Misc软件服务',
              'js-apis-system-router.md': 'ArkUI软件服务',
              'js-apis-system-sensor.md': '泛Sensor服务',
              'js-apis-system-storage.md': '分布式数据管理',
              'js-apis-system-vibrate.md': '泛Sensor服务',
              'js-apis-securityLabel.md': '文件管理',
              'js-apis-cardEmulation.md': '基础通信',
              'js-apis-nfcTag.md': '基础通信',
              'js-apis-nfcController.md': '基础通信',
              'js-apis-inputevent.md': '多模输入',
              'js-apis-keycode.md': '多模输入',
              'js-apis-keyevent.md': '多模输入',
              'js-apis-mouseevent.md': '多模输入',
              'js-apis-touchevent.md': '多模输入',
              'js-apis-application-abilityLifecycleCallback.md': '元能力',
              'js-apis-application-abilityMonitor.md': "元能力",
              'js-apis-logs.md': 'ArkUI开发框架',
              'js-apis-timer.md': 'ArkUI开发框架',
              'js-apis-data-DataShareResultSet.md': '分布式数据管理',
              'js-apis-data-dataShare.md': '分布式数据管理',
              'js-apis-application-DataShareExtensionAbility.md': '分布式数据管理',
              'js-apis-continuation-continuationManager.md': '元能力',
              'js-apis-distributeMissionManager.md': '资源调度',
              'js-apis-screen.md': '窗口管理',
              'js-apis-privacyManager.md': '安全基础能力',
              'js-apis-EnterpriseAdminExtensionAbility.md': '定制子系统',
              'js-apis-data-dataSharePredicates.md': '分布式数据管理',
              'js-apis-abilityManager.md': '元能力',
              'js-apis-application-EnvironmentCallback.md': '元能力',
              'js-apis-bundle-defaultAppManager.md': '元能力',
              'js-apis-bundle-ElementName.md': '事件通知',
              'js-apis-continuation-continuationExtraParams.md': '元能力',
              'js-apis-continuation-continuationResult.md': '元能力',
              'js-apis-data-ValuesBucket.md': '分布式数据管理',
              'js-apis-hisysevent.md': 'DFX',
              'js-apis-system-fetch.md': '网络管理',
              'js-apis-application-abilityManager.md': '元能力',
              'js-apis-application-AccessibilityExtensionAbility.md': '无障碍软件服务',
              'js-apis-accessibility-extension-context.md': '无障碍软件服务',
              'js-apis-bundle-BundleInstaller.md': '事件通知',
              'js-apis-bundle-distributedBundle.md': '事件通知',
              'js-apis-Bundle-InnerBundleManager.md': '事件通知',
              'js-apis-bundle-LauncherAbilityInfo.md': '事件通知',
              'js-apis-bundle-PermissionDef.md': '事件通知',
              'js-apis-bundle-remoteAbilityInfo.md': '事件通知',
              'js-apis-bundle-ShortcutInfo.md': '事件通知',
              'js-apis-dispatchInfo.md': '包管理',
              'js-apis-effectKit.md': '图形图像',
              'js-apis-errorManager.md': '元能力',
              'js-apis-windowAnimationManager.md': '图形图像',
              'js-apis-cryptoFramework.md': '安全基础能力',
              'js-apis-net-policy.md': '网络管理',
              'js-apis-buffer.md': '公共基础类库',
              'js-apis-net-sharing.md': '网络管理',
              'js-apis-net-statistics.md': '网络管理',
              'js-apis-fileAccess.md': '文件管理',
              'js-apis-tlsSocket.md': '网络管理',
              'js-apis-distributedKVStore.md': '分布式数据管理',
              'js-apis-accessibility-config.md': '无障碍软件服务',
              'js-apis-application-quickFixManager.md': '元能力',
              'js-apis-net-ethernet.md': '网络管理',
              'js-apis-appControl.md': '包管理',
              'js-apis-bundleManager.md': '包管理',
              'js-apis-colorSpaceManager.md': '图形图像',
              'js-apis-batteryStatistics.md': '电源服务',
              'js-apis-accessibility-GesturePoint.md': '无障碍软件服务',
              'js-apis-freeInstall.md': '包管理',
              'js-apis-matrix4.md': 'ArkUI开发框架',
              'js-apis-accessibility-GesturePath.md': '无障碍软件服务',
              'js-apis-application-WindowExtensionAbility.md': '窗口管理',
              'js-apis-Bundle-BundleStatusCallback.md': '包管理',
              'js-apis-bundleManager-abilityInfo.md': '包管理',
              'js-apis-bundleManager-applicationInfo.md': '包管理',
              'js-apis-bundleManager-bundleInfo.md': '包管理',
              'js-apis-bundleManager-dispatchInfo.md': '包管理',
              'js-apis-bundleManager-elementName.md': '包管理',
              'js-apis-bundleManager-extensionAbilityInfo.md': '包管理',
              'js-apis-bundleManager-hapModuleInfo.md': '包管理',
              'js-apis-bundleManager-launcherAbilityInfo.md': '包管理',
              'js-apis-bundleManager-metadata.md': '包管理',
              'js-apis-bundleManager-packInfo.md': '包管理',
              'js-apis-bundleManager-permissionDef.md': '包管理',
              'js-apis-bundleManager-remoteAbilityInfo.md': '包管理',
              'js-apis-bundleManager-shortcutInfo.md': '包管理',
              'js-apis-bundleMonitor.md': '包管理',
              'js-apis-commonEventManager.md': '事件通知',
              'js-apis-curve.md': 'ArkUI开发框架',
              'js-apis-defaultAppManager.md': '包管理',
              'js-apis-distributedBundle.md': '包管理',
              'js-apis-enterpriseDeviceManager-DeviceSettingsManager.md': '定制',
              'js-apis-fileExtensionInfo.md': '文件管理',
              'js-apis-geoLocationManager.md': '位置服务',
              'js-apis-hiviewdfx-hiappevent.md': 'DFX',
              'js-apis-inputmethod-extension-ability.md': 'Misc软件服务',
              'js-apis-inputmethod-subtype.md': 'Misc软件服务',
              'js-apis-inputmethod-extension-context.md': 'Misc软件服务',
              'js-apis-installer.md': '包管理',
              'js-apis-promptAction.md': 'ArkUI开发框架',
              'js-apis-system-parameterV9.md': '启动恢复',
              'js-apis-usb-deprecated.md': 'USB服务',
              'js-apis-userFileManager.md': '文件管理',
              'js-apis-avsession.md': 'OS媒体软件',
              'ts-basic-components-web.md': 'Web',
              'js-apis-ability-abilityResult.md': '元能力',
              'js-apis-ability-ability.md': '元能力',
              'js-apis-ability-Want.md': '元能力',
              'js-apis-application-configuration.md': '元能力',
              'js-apis-application-configurationConstant.md': '元能力',
              'js-apis-cooperate.md': '多模输入',
              'js-apis-launcherBundleManager.md': '包管理',
              'js-apis-nfctech.md': '基础通信',
              'js-apis-pointer.md': '多模输入',
              'js-apis-processrunninginformation.md': '元能力',
              'js-apis-resourceschedule-backgroundTaskManager.md': '资源调度',
              'js-apis-resourceschedule-deviceUsageStatistics.md': '资源调度',
              'js-apis-system-timer.md': 'Misc软件服务',
              'js-apis-tagSession.md': '基础通信',
              'js-apis-useriam-faceauth.md': '用户IAM',
              'js-apis-webview.md': 'Web'
              }
# 不进行自动化的文档
noTest = ['js-apis-data-resultset.md', 'js-apis-application-MissionSnapshot.md',
          'js-apis-application-staticSubscriberExtensionAbility.md', 'js-apis-system-fetch.md',
          'js-components-common-transition.md', 'ts-basic-components-plugincomponent.md',
          'ts-components-canvas-lottie.md', 'js-apis-inputmethodengine.md', 'js-apis-animator.md', 'js-apis-usb.md',
          'js-apis-webgl.md', 'js-apis-webgl2.md', 'js-apis-data-DataShareResultSet.md', 'js-apis-bytrace.md',
          'js-apis-data-storage.md',
          'js-apis-distributed-data.md',
          'js-apis-prompt.md',
          'js-apis-reminderAgent.md',
          'js-apis-usb-deprecated.md',
          'js-apis-system-app.md',
          'js-apis-system-battery.md',
          'js-apis-system-bluetooth.md',
          'js-apis-system-brightness.md',
          'js-apis-system-configuration.md',
          'js-apis-system-device.md',
          'js-apis-system-fetch.md',
          'js-apis-system-file.md',
          'js-apis-system-location.md',
          'js-apis-system-mediaquery.md',
          'js-apis-system-network.md',
          'js-apis-system-notification.md',
          'js-apis-system-package.md',
          'js-apis-system-prompt.md',
          'js-apis-system-request.md',
          'js-apis-system-router.md',
          'js-apis-system-sensor.md',
          'js-apis-system-storage.md',
          'js-apis-system-vibrate.md', 'js-apis-nfctech.md', 'js-components-custom-style.md',
          'ts-basic-components-web.md', 'js-apis-fileAccess.md']
# api9示例文档
api9 = []
# 不进行回调的文档
nocallback = ['js-apis-distributedobject.md', 'js-apis-rpc.md', 'js-apis-data-distributedobject.md',
              'js-apis-runninglock.md', 'js-apis-medialibrary.md', 'js-apis-resource-manager.md',
              'js-apis-commonEvent.md', 'js-apis-pasteboard.md', 'js-apis-distributedKVStore.md',
              'js-apis-accessibility.md', 'js-apis-cryptoFramework.md',
              'js-apis-userFileManager.md', 'js-apis-display.md']
# 回调位置错误文档
callbackBeyond = ['js-apis-image.md', 'js-apis-i18n.md', 'js-apis-effectKit.md', 'js-apis-accessibility.md']


# 文档中存在找不到的链接，需要替换内容执行

def special(code, mdPath, specail_input, specail_output):
    if 'js-apis-distributedMissionManager.md' in mdPath and 'remoteDeviceId' in code:
        code = code.replace('remoteDeviceId', "'example'")
    elif 'js-apis-ability-context.md' in mdPath or 'js-apis-application-context.md' in mdPath \
            or 'js-apis-service-extension-context.md' in mdPath:
        if 'context' in code:
            code = code.replace('this.context', 'globalThis.context')

    elif 'js-apis-camera.md' in mdPath:
        if 'let profile =' not in code:
            code = code.replace('profile',
                                '{format: camera.CameraFormat.CAMERA_FORMAT_RGBA_8888, size:{height: 100,width:100}}').replace(
                'surfaceId', '"surfaceId"')
        else:
            code = code.replace('surfaceId', '"surfaceId"')
        if specail_input:
            importcode = re.findall('import.+from.+\n', code)
            for i in range(len(importcode)):
                Index = code.find('\n')
                code = code[Index + 1:]
            specail_code1 = 'cameraManager.getSupportedCameras().then((cameras) => {\n'
            specail_code2 = '\n    console.log(`Promise returned with an array of supported cameras: ${cameras.length}`);\n})\n'
            code = specail_code1 + code + specail_code2
            for i in range(len(importcode)):
                if importcode[i].replace('\n', '') not in code:
                    code = importcode[i] + code
        if specail_output:
            importcode = re.findall('import.+from.+\n', code)
            for i in range(len(importcode)):
                Index = code.find('\n')
                code = code[Index + 1:]
            specail_code1 = '  cameraManager.getSupportedCameras().then((cameras) => {\n    let cameraDevice = cameras[0];\n    cameraManager.getSupportedOutputCapability(cameraDevice).then((cameraoutputcapability) => {\n'
            specail_code2 = "\n      console.log('Promise returned with an array of supported outputCapability');\n    })     console.log(`Promise returned with an array of supported cameras: ${cameras.length}`);\n  })\n"
            code = specail_code1 + code + specail_code2
            for i in range(len(importcode)):
                if importcode[i].replace('\n', '') not in code:
                    code = importcode[i] + code

    if 'context' in code and 'js-apis-window.md' not in mdPath:
        code = code.replace('(context', '(globalThis.context').replace(', context', ', globalThis.context')
    if 'this.context' in code:
        code = code.replace('(this.context', '(globalThis.context').replace(', this.context',
                                                                            ', globalThis.context').replace(
            '= this.context', '= globalThis.context').replace('this.context.', 'globalThis.context.').replace(
            ': this.context', ': globalThis.context')
    if 'cameraId' in code:
        code = code.replace('(cameraId', '("device@3.5/legacy/0"').replace(', cameraId',
                                                                           ', "device@3.5/legacy/0"').replace(
            '+ cameraId', '+ "device@3.5/legacy/0"').replace('then(("device@3.5/legacy/0")', 'then((cameraId)').replace(
            '(err, "device@3.5/legacy/0")', '(err, cameraId)')
    # 新增端口号赋值
    if 'js-apis-socket.md' in mdPath and 'port' in code:
        code = code.replace('port: xxxx,', 'port: 8080,').replace('port:xxxx,', 'port: 8080,')
    return code


# 特殊处理的文档
def fileio(code, mdPath):
    if 'js-apis-fileio.md' in mdPath:
        newcode = " import featureAbility from '@ohos.ability.featureAbility';\n let context = featureAbility.getContext();\n let path = '';\n context.getFilesDir().then((data) => {\n path = data;\n })\n"
        importcode = "import fileio from '@ohos.fileio';\n"
        if 'let context = featureAbility.getContext();' not in code:
            if 'import' in code and 'from' in code and code.count('\n') > 1:
                code = code.replace("import fileio from '@ohos.fileio';\n", importcode + newcode)
            # fd声明需要在path下
            else:
                code = importcode + newcode + code
    return code


def request(code):
    if code.count('let uploadTask;') > 1:
        task_index = code.rfind('let uploadTask;')
        code = code[:task_index] + code[task_index + 15:]
    elif code.count('let downloadTask;') > 1:
        task_index = code.rfind('let downloadTask;')
        code = code[:task_index] + code[task_index + 17:]
    return code


def data_rdb(code, mdPath):
    if 'js-apis-data-rdb.md' in mdPath:
        importcode = "import dataShare from '@ohos.data.dataShare'\n"
        if "import dataShare from '@ohos.data.dataShare'" in code:
            code = code.replace(importcode, '')
            code = importcode + code
    return code


def InstructionsForUse(code, InstructionsForUseCode):
    importcode = re.findall('import.+from.+\n', code)
    print('导入模块', importcode)
    for i in range(len(importcode)):
        Index = code.find('\n')
        code = code[Index + 1:]
    code = InstructionsForUseCode.replace('//使用说明\n', code + '\n')
    for i in range(len(importcode)):
        if importcode[i].replace('\n', '') not in code:
            code = importcode[i] + code
    return code


def RepeatDefinition(code, mdPath, className):
    if 'js-apis-distributed-data.md' in mdPath:
        mdlist = code.split('\n')
        del mdlist[-1]
        letName = 'let' + ' ' + className
        varName = 'var' + ' ' + className
        constName = 'const' + ' ' + className
        delcode = ''
        for i in range(5):
            if letName in mdlist[i] or varName in mdlist[i] or constName in mdlist[i]:
                delcode = mdlist[i]
                break
        code = code.replace(delcode, '')
        return code


def handling_import(code):
    return code.replace('\n', '').replace(' ', '').replace(';', '').replace("'", '').replace('"', '').lower()


def handling_code(code):
    return code.replace(';', '').replace("'", '').replace('"', '').replace(' ', '').lower()
