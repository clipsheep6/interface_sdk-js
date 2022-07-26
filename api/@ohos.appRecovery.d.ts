/*
 * Copyright (c) 2022-2022 Huawei Device Co., Ltd.
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
 * This module provides the capability to app receovery.
 *
 * @since 9
 * @syscap SystemCapability.HiviewDFX.Hiview.AppReceovery
 * @import import sensor from '@ohos.appReceovery'
 */
declare namespace AppReceovery {
    /**
     * The type of no restart mode.
     * @since 9
     * @syscap SystemCapability.HiviewDFX.Hiview.AppReceovery
     */
    enum RestartFlags {
      /**
       * NONE: no restart restrictions
       * @since 9
       */
      NONE = 0,

      /**
       * CPP_CRASH_NO_RESTART: Do not restart if process terminates due to cpp exception
       * @since 9
       */
      CPP_CRASH_NO_RESTART = 1,

      /**
       * JS_CRASH_NO_RESTART: Do not restart if process terminates due to js/ts/ets exception
       * @since 9
       */
      JS_CRASH_NO_RESTART = 2,

      /**
       * APP_FREEZE_NO_RESTART: Do not restart if process terminates due to appliction not respondong
       * @since 9
       */
      APP_FREEZE_NO_RESTART = 4,

      /**
       * NO_RESTART: Do not restart
       * @since 9
       */
      NO_RESTART = 0xFFFF,
    }

    /**
     * The type of when to save.
     * @since 9
     * @syscap SystemCapability.HiviewDFX.Hiview.AppReceovery
     */
    enum SaveFlags {
      /**
       * SAVE_DEFAULT is saving with an optimal configuration
       * and developers don't need to care about specific mode.default saving lifecycle.
       * @since 9
       */
      SAVE_DEFAULT = 0,

      /**
       * SAVE_WHEN_ERROR is saving when an error occurs.
       * @since 9
       */
      SAVE_WHEN_ERROR = 1,

      /**
       * SAVE_WHEN_CREATE is saving on create.
       * @since 9
       */
      SAVE_WHEN_CREATE = 2,

      /**
       * SAVE_WHEN_CREATE is saving on background.
       * @since 9
       */
      SAVE_WHEN_BACKGROUND = 4,
    }

    /**
     * The type of where to save.
     * @since 9
     * @syscap SystemCapability.HiviewDFX.Hiview.AppReceovery
     */
    enum SaveMode {
      /**
       * SAVE_DEFAULT is saving with an optimal configuration
       * and developers don't need to care about specific mode. default saving to shared memory.
       * @since 9
       */
      SAVE_DEFAULT = 0,
 
      /**
       * SAVE_WITH_DB is saving to db.
       * @since 9
       */
      SAVE_WITH_DB = 1,
 
      /**
       * SAVE_WITH_FILE is saving to file.
       * @since 9
       */
      SAVE_WITH_FILE = 2,
 
      /**
       * SAVE_WITH_SHARED_MEMORY is saving to shared memory.
       * @since 9
       */
      SAVE_WITH_SHARED_MEMORY = 4,
    }

    /**
     * enable appRecovery and app supports save and restore
     * @since 9
     * @syscap SystemCapability.HiviewDFX.Hiview.AppReceovery
     * @param restartFlags no restart mode
     * @param saveFlags The type of When to save
     * @param saveMode The type of where to save
     */
    function enableAppRecovery(restartFlags: RestartFlags, saveFlags: SaveFlags, saveMode: SaveMode) : void;
  }

export default AppReceovery;