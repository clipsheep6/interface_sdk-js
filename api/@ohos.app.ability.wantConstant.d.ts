/*
 * Copyright (c) 2022-2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 */

/**
 * @file
 * @kit AbilityKit
 */

/**
 * the constant for params and flags in the want
 *
 * @namespace wantConstant
 * @syscap SystemCapability.Ability.AbilityBase
 * @since 9
 */
/**
 * the constant for params and flags in the want
 *
 * @namespace wantConstant
 * @syscap SystemCapability.Ability.AbilityBase
 * @atomicservice
 * @since arkts {'1.1':'11', '1.2':'20'}
 * @arkts 1.1&1.2
 */
declare namespace wantConstant {
  /**
   * The constant for params of the want
   *
   * @enum { string }
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 9
   */
  /**
   * The constant for params of the want
   *
   * @enum { string }
   * @syscap SystemCapability.Ability.AbilityBase
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  export enum Params {
    /**
     * Indicates the param of sandbox flag.
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @systemapi
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    DLP_PARAMS_SANDBOX = 'ohos.dlp.params.sandbox',

    /**
     * Indicates the param of dlp bundle name.
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @systemapi
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    DLP_PARAMS_BUNDLE_NAME = 'ohos.dlp.params.bundleName',

    /**
     * Indicates the param of dlp module name.
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @systemapi
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    DLP_PARAMS_MODULE_NAME = 'ohos.dlp.params.moduleName',

    /**
     * Indicates the param of dlp ability name.
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @systemapi
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    DLP_PARAMS_ABILITY_NAME = 'ohos.dlp.params.abilityName',

    /**
     * Indicates the param of dlp bundle index.
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @systemapi
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    DLP_PARAMS_INDEX = 'ohos.dlp.params.index',

    /**
     * Indicates the type of hide sensitive information.
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @systemapi
     * @since arkts {'1.1':'15', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    HIDE_SENSITIVE_TYPE = 'ohos.media.params.hideSensitiveType',

    /**
     * Indicates the ability in this want can back to the current top ability even though they are not in the same
     * mission stack.
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    /**
     * Indicates the ability in this want can back to the current top ability even though they are not in the same
     * mission stack.
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    ABILITY_BACK_TO_OTHER_MISSION_STACK = 'ability.params.backToOtherMissionStack',

    /**
     * Indicates the param of ability failure restart recovery identification
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 10
     */
    /**
     * Indicates the param of ability failure restart recovery identification
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    ABILITY_RECOVERY_RESTART = 'ohos.ability.params.abilityRecoveryRestart',

    /**
     * Indicates the param of extra content title
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 10
     */
    /**
     * Indicates the param of extra content title
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    CONTENT_TITLE_KEY = 'ohos.extra.param.key.contentTitle',

    /**
     * Indicates the param of extra shared abstract
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 10
     */
    /**
     * Indicates the param of extra shared abstract
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    SHARE_ABSTRACT_KEY = 'ohos.extra.param.key.shareAbstract',

    /**
     * Indicates the param of extra shareURL
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 10
     */
    /**
     * Indicates the param of extra shareURL
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    SHARE_URL_KEY = 'ohos.extra.param.key.shareUrl',

    /**
     * Indicates the param of extra support continue page stack.
     * The default value of the param is true,
     * and the system will automatically flow the page stack information by default.
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 10
     */
    /**
     * Indicates the param of extra support continue page stack.
     * The default value of the param is true,
     * and the system will automatically flow the page stack information by default.
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    SUPPORT_CONTINUE_PAGE_STACK_KEY = 'ohos.extra.param.key.supportContinuePageStack',

    /**
     * Indicates the param of extra stop source ability on continue.
     * The default value of the param is true,
     * and the system will exit the source application by default.
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 10
     */
    /**
     * Indicates the param of extra stop source ability on continue.
     * The default value of the param is true,
     * and the system will exit the source application by default.
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    SUPPORT_CONTINUE_SOURCE_EXIT_KEY = 'ohos.extra.param.key.supportContinueSourceExit',

    /**
     * Indicates the session ID of AssertFault.
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @systemapi
     * @stagemodelonly
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    ASSERT_FAULT_SESSION_ID = 'ohos.ability.params.asssertFaultSessionId',

    /**
     * Indicates the param of show mode key.
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    SHOW_MODE_KEY = 'ohos.extra.param.key.showMode',

    /**
     * Cross-application sharing of file URIs.
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    PARAMS_STREAM = 'ability.params.stream',

    /**
     * Indicates the param of app clone index.
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    APP_CLONE_INDEX_KEY = 'ohos.extra.param.key.appCloneIndex',
  
    /**
     * Indicates the param of caller's request code.
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    CALLER_REQUEST_CODE = 'ohos.extra.param.key.callerRequestCode',

    /**
     * Indicates the param of page path.
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    PAGE_PATH = 'ohos.param.atomicservice.pagePath',

    /**
     * Indicates the param of router name.
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    ROUTER_NAME = 'ohos.param.atomicservice.routerName',

    /**
     * Indicates the param of page source file.
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    PAGE_SOURCE_FILE = 'ohos.param.atomicservice.pageSourceFile',

    /**
     * Indicates the param of build function.
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    BUILD_FUNCTION = 'ohos.param.atomicservice.buildFunction',
  
    /**
     * Indicates the param of subpackage name.
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    SUB_PACKAGE_NAME = 'ohos.param.atomicservice.subpackageName',

    /**
     * Indicates the param of app instance key.
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since arkts {'1.1':'14', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    APP_INSTANCE_KEY = 'ohos.extra.param.key.appInstance',

    /**
    * Indicates the param of creating a new instance.
    *
    * @syscap SystemCapability.Ability.AbilityBase
    * @since arkts {'1.1':'14', '1.2':'20'}
    * @arkts 1.1&1.2
    */
     CREATE_APP_INSTANCE_KEY = 'ohos.extra.param.key.createAppInstance',

    /**
    * Indicates the app clone index of caller.
    *
    * @syscap SystemCapability.Ability.AbilityBase
    * @since arkts {'1.1':'14', '1.2':'20'}
    * @arkts 1.1&1.2
    */
    CALLER_APP_CLONE_INDEX = 'ohos.param.callerAppCloneIndex',

    /**
    * Indicates the key of launch reason message.
    * If the caller needs to set the launch reason through this field when initiating the callee, the caller must
    * be a system application and have applied for the ohos.permission.SET_LAUNCH_REASON_MESSAGE permission.
    *
    * @syscap SystemCapability.Ability.AbilityBase
    * @atomicservice
    * @since arkts {'1.1':'18', '1.2':'20'}
    * @arkts 1.1&1.2
    */
    LAUNCH_REASON_MESSAGE = 'ohos.params.launchReasonMessage',

    /**
    * Indicates the dest ability refers to a plugin ability.
    *
    * @syscap SystemCapability.Ability.AbilityBase
    * @since 19
    */
    DESTINATION_PLUGIN_ABILITY = 'ohos.params.pluginAbility',

    /**
    * Indicates the param of the appIdentifier trustlist when implicitly launching applications.
    *
    * @syscap SystemCapability.Ability.AbilityBase
    * @atomicservice
    * @since 17
    */
    APP_LAUNCH_TRUSTLIST = 'ohos.params.appLaunchTrustList',

    /**
    * Indicates the unified data key used to share file uri.
    *
    * @syscap SystemCapability.Ability.AbilityBase
    * @atomicservice
    * @since 20
    */
    ABILITY_UNIFIED_DATA_KEY = 'ohos.param.ability.udKey',

    /**
    * Indicates the key of the page route upon sharing atomic service.
    *
    * @syscap SystemCapability.Ability.AbilityBase
    * @atomicservice
    * @since 20
    */
    ATOMIC_SERVICE_SHARE_ROUTER = 'ohos.params.atomicservice.shareRouter',
  }

  /**
   * Used to indicate how Want is handled.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 9
   */
  /**
   * Used to indicate how Want is handled.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityBase
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  export enum Flags {
    /**
     * Indicates the grant to perform read operations on the URI.
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    /**
     * Indicates the grant to perform read operations on the URI.
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    FLAG_AUTH_READ_URI_PERMISSION = 0x00000001,

    /**
     * Indicates the grant to perform write operations on the URI.
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    /**
     * Indicates the grant to perform write operations on the URI.
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    FLAG_AUTH_WRITE_URI_PERMISSION = 0x00000002,

    /**
     * Indicates that the URI can be persisted by the callee.
     * @syscap SystemCapability.Ability.AbilityBase
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    FLAG_AUTH_PERSISTABLE_URI_PERMISSION = 0x00000040,

    /**
     * Install the specified ability if it's not installed.
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    /**
     * Install the specified ability if it's not installed.
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    FLAG_INSTALL_ON_DEMAND = 0x00000800,

    /**
     * Collaborative target applications in the distributed scheduling system can be pulled up.
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since arkts {'1.1':'18', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    FLAG_ABILITY_ON_COLLABORATE = 0x00002000,

    /**
     * Indicates that if implicit start ability couldn't match any application, no tip dialog will be pulled up.
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    FLAG_START_WITHOUT_TIPS = 0x40000000
  }

  /**
   * Used to indicate show mode.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityBase
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  export enum ShowMode {
    /**
     * Indicates the window show mode.
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    WINDOW = 0,

    /**
     * Indicates the embedded full show mode.
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    EMBEDDED_FULL = 1
  }
}

export default wantConstant;
