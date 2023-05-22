/*
* Copyright (c) 2022 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import { AsyncCallback } from './@ohos.base';
import { WantAgent } from './@ohos.wantAgent';
import { KeyEvent } from './@ohos.multimodalInput.keyEvent';
import { ElementName } from './bundleManager/ElementName';
import image from './@ohos.multimedia.image';
import audio from './@ohos.multimedia.audio';

/**
 * @namespace avSession
 * @syscap SystemCapability.Multimedia.AVSession.Core
 * @since 9
 */
declare namespace avSession {
  /**
   * Create an AVSession instance. An ability can only create one AVSession
   * @param {Context} context The context of application
   * @param {string} tag A user-defined name for this session
   * @param {AVSessionType} type The type of session {@link AVSessionType}
   * @param {AsyncCallback<AVSession>} callback - callback.
   * @throws {BusinessError} 401 - parameter check failed
   * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @systemapi
   * @since 9
   */
  function createAVSession(context: Context, tag: string, type: AVSessionType, callback: AsyncCallback<AVSession>): void;

  /**
   * Create an AVSession instance. An ability can only create one AVSession
   * @param {Context} context The context of application
   * @param {string} tag A user-defined name for this session
   * @param {AVSessionType} type The type of session {@link AVSessionType}
   * @returns {Promise<AVSession>} no callback returns Promise otherwise returns void
   * @throws {BusinessError} 401 - parameter check failed
   * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @systemapi
   * @since 9
   */
  function createAVSession(context: Context, tag: string, type: AVSessionType): Promise<AVSession>;

  /**
   * Get all avsession descriptors of the system
   * @param {AsyncCallback<Array<Readonly<AVSessionDescriptor>>>} callback - callback.
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @throws {BusinessError} 201 - permission denied
   * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 9
   */
  function getAllSessionDescriptors(callback: AsyncCallback<Array<Readonly<AVSessionDescriptor>>>): void;
  
  /**
   * Get all avsession descriptors of the system
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @returns {Promise<Array<Readonly<AVSessionDescriptor>>>} no callback returns Promise otherwise returns void
   * @throws {BusinessError} 201 - permission denied
   * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 9
   */
  function getAllSessionDescriptors(): Promise<Array<Readonly<AVSessionDescriptor>>>;

  /**
   * Get history avsession records. These sessions have been destroyed.
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param {number} maxSize Specifies the maximum size of the returned value array.
   * @param {AsyncCallback<Array<Readonly<AVSessionDescriptor>>>} callback - callback.
   * If provided '0' or not provided, the maximum value is determined by the system.
   * @throws {BusinessError} 401 - parameter check failed
   * @throws {BusinessError} 6600101 - server exception
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi Hide this for inner system use
   * @since 10
   */
  function getHistoricalSessionDescriptors(maxSize: number, callback: AsyncCallback<Array<Readonly<AVSessionDescriptor>>>): void;

  /**
   * Get history avsession records. These sessions have been destroyed.
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param {number} maxSize Specifies the maximum size of the returned value array.
   * If provided '0' or not provided, the maximum value is determined by the system.
   * @returns {Promise<Array<Readonly<AVSessionDescriptor>>>} no callback returns Promise otherwise returns void
   * @throws {BusinessError} 401 - parameter check failed
   * @throws {BusinessError} 6600101 - server exception
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi Hide this for inner system use
   * @since 10
   */
  function getHistoricalSessionDescriptors(maxSize?: number): Promise<Array<Readonly<AVSessionDescriptor>>>;

  /**
   * Create an avsession controller
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param {string} sessionId Specifies the sessionId to create the controller.
   * @param {AsyncCallback<AVSessionController>} callback - callback.
   * If provided 'default', the system will create a default controller, Used to control the system default session
   * @throws {BusinessError} 201 - permission denied
   * @throws {BusinessError} 401 - parameter check failed
   * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
   * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 9
   */
  function createController(sessionId: string, callback: AsyncCallback<AVSessionController>): void;

  /**
   * Create an avsession controller
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param {string} sessionId Specifies the sessionId to create the controller.
   * If provided 'default', the system will create a default controller, Used to control the system default session
   * @returns {Promise<AVSessionController>} no callback returns Promise otherwise returns void
   * @throws {BusinessError} 201 - permission denied
   * @throws {BusinessError} 401 - parameter check failed
   * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
   * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 9
   */
  function createController(sessionId: string): Promise<AVSessionController>;

  /**
   * Cast Audio to the remote devices or cast back local device
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param {SessionToken | string} session Specifies the sessionId which to send to remote.
   * @param {Array<audio.AudioDeviceDescriptor>} audioDevices Specifies the audio devices to cast.
   * @param {AsyncCallback<void>} callback - callback.
   * 'all' means cast all the media audio of this device to remote.
   * @throws {BusinessError} 201 - permission denied
   * @throws {BusinessError} 401 - parameter check failed
   * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
   * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
   * @throws {BusinessError} 6600104 - {@link #ERR_CODE_REMOTE_CONNECTION_ERR} - remote connection error
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 9
   */
  function castAudio(session: SessionToken | 'all', audioDevices: Array<audio.AudioDeviceDescriptor>, callback: AsyncCallback<void>): void;

  /**
   * Cast Audio to the remote devices or cast back local device
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param {SessionToken | string} session Specifies the sessionId which to send to remote.
   * @param {Array<audio.AudioDeviceDescriptor>} audioDevices Specifies the audio devices to cast.
   * @returns {Promise<void>} no callback returns Promise otherwise returns void
   * 'all' means cast all the media audio of this device to remote.
   * @throws {BusinessError} 201 - permission denied
   * @throws {BusinessError} 401 - parameter check failed
   * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
   * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
   * @throws {BusinessError} 6600104 - {@link #ERR_CODE_REMOTE_CONNECTION_ERR} - remote connection error
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 9
   */
  function castAudio(session: SessionToken | 'all', audioDevices: Array<audio.AudioDeviceDescriptor>): Promise<void>;

  /**
   * Session token. Used to judge the legitimacy of the session.
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @typedef SessionToken
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 9
   */
  interface SessionToken {
    /**
     * The unique session id of the avsession object
     * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
     * @type {string}
     * @since 9
     */
    sessionId: string;
    /**
     * Process id of session
     * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
     * @type {number}
     * @since 9
     */
    pid: number;
    /**
     * User id
     * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
     * @type {number}
     * @since 9
     */
    uid: number;
  }

  /**
   * Register system session changed callback
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param {string} type Registration Type, session creation, deletion or top priority session changed
   * @param {(session: AVSessionDescriptor) => void} callback - callback.
   * @throws {BusinessError} 201 - permission denied
   * @throws {BusinessError} 401 - parameter check failed
   * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 9
   */
  function on(type: 'sessionCreate' | 'sessionDestroy' | 'topSessionChange', callback: (session: AVSessionDescriptor) => void): void;

  /**
   * Unregister system session changed callback
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param {string} type Registration Type, session creation
   * @param callback Used to returns the descriptor of created or delete session
   * @throws {BusinessError} 201 - permission denied
   * @throws {BusinessError} 401 - parameter check failed
   * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 9
   */
  function off(type: 'sessionCreate' | 'sessionDestroy' | 'topSessionChange', callback?: (session: AVSessionDescriptor) => void): void;

  /**
   * Register Session service death callback, notifying the application to clean up resources.
   * @param {string} type Registration Type
   * @param callback Used to handle the session service death event.
   * @throws {BusinessError} 201 - permission denied
   * @throws {BusinessError} 401 - parameter check failed
   * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @systemapi
   * @since 9
   */
  function on(type: 'sessionServiceDie', callback: () => void): void;

  /**
   * Unregister Session service death callback, notifying the application to clean up resources.
   * @param {string} type Registration Type
   * @param callback Used to handle the session service death event.
   * @throws {BusinessError} 201 - permission denied
   * @throws {BusinessError} 401 - parameter check failed
   * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @systemapi
   * @since 9
   */
  function off(type: 'sessionServiceDie', callback?: () => void): void;

  /**
   * Send system media key event.The system automatically selects the recipient.
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param {KeyEvent} event The key event to be send
   * @param {AsyncCallback<void>} callback - callback.
   * @throws {BusinessError} 201 - permission denied
   * @throws {BusinessError} 401 - parameter check failed
   * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
   * @throws {BusinessError} 6600105 - {@link #ERR_CODE_COMMAND_INVALID} - command not supported
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 9
   */
  function sendSystemAVKeyEvent(event: KeyEvent, callback: AsyncCallback<void>): void;

  /**
   * Send system media key event.The system automatically selects the recipient.
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param {KeyEvent} event The key event to be send
   * @returns {Promise<void>} no callback returns Promise otherwise returns void
   * @throws {BusinessError} 201 - permission denied
   * @throws {BusinessError} 401 - parameter check failed
   * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
   * @throws {BusinessError} 6600105 - {@link #ERR_CODE_COMMAND_INVALID} - command not supported
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 9
   */
  function sendSystemAVKeyEvent(event: KeyEvent): Promise<void>;

  /**
   * Send system control command.The system automatically selects the recipient.
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param {AVControlCommand} command The command to be send. See {@link AVControlCommand}
   * @param {AsyncCallback<void>} callback - callback.
   * @throws {BusinessError} 201 - permission denied
   * @throws {BusinessError} 401 - parameter check failed
   * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
   * @throws {BusinessError} 6600105 - {@link #ERR_CODE_COMMAND_INVALID} - command not supported
   * @throws {BusinessError} 6600107 - {@link #ERR_CODE_MESSAGE_OVERLOAD} - command or event overload
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 9
   */
  function sendSystemControlCommand(command: AVControlCommand, callback: AsyncCallback<void>): void;

  /**
   * Send system control command.The system automatically selects the recipient.
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param {AVControlCommand} command The command to be send. See {@link AVControlCommand}
   * @returns {Promise<void>} no callback returns Promise otherwise returns void
   * @throws {BusinessError} 201 - permission denied
   * @throws {BusinessError} 401 - parameter check failed
   * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
   * @throws {BusinessError} 6600105 - {@link #ERR_CODE_COMMAND_INVALID} - command not supported
   * @throws {BusinessError} 6600107 - {@link #ERR_CODE_MESSAGE_OVERLOAD} - command or event overload
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 9
   */
  function sendSystemControlCommand(command: AVControlCommand): Promise<void>;

  /**
   * session type.
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @systemapi
   * @since 9
   */
  type AVSessionType = 'audio' | 'video';
  /**
   * AVSession object.
   * @interface AVSession
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @systemapi
   * @since 9
   */
  interface AVSession {
    /**
     * unique session Id
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 9
     */
    readonly sessionId: string;

    /**
     * Set the metadata of this session.
     * In addition to the required properties, users can fill in partially supported properties
     * @param {AVMetadata} data {@link AVMetadata}
     * @param {AsyncCallback<void>} callback - callback.
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 9
     */
    setAVMetadata(data: AVMetadata, callback: AsyncCallback<void>): void;

    /**
     * Set the metadata of this session.
     * In addition to the required properties, users can fill in partially supported properties
     * @param {AVMetadata} data {@link AVMetadata}
     * @returns {Promise<void>} no callback returns Promise otherwise returns void
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 9
     */
    setAVMetadata(data: AVMetadata): Promise<void>;

    /**
     * Set the playback state of this session.
     * @param {AVPlaybackState} state {@link AVPlaybackState}
     * @param {AsyncCallback<void>} callback - callback.
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 9
     */
    setAVPlaybackState(state: AVPlaybackState, callback: AsyncCallback<void>): void;

    /**
     * Set the playback state of this session.
     * @param {AVPlaybackState} state {@link AVPlaybackState}
     * @returns {Promise<void>} no callback returns Promise otherwise returns void
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 9
     */
    setAVPlaybackState(state: AVPlaybackState): Promise<void>;

    /**
     * Set the ability to start the session corresponding to
     * @param {WantAgent} ability The WantAgent for launch the ability
     * @param {AsyncCallback<void>} callback - callback.
     * @since 9
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     */
    setLaunchAbility(ability: WantAgent, callback: AsyncCallback<void>): void;

    /**
     * Set the ability to start the session corresponding to
     * @param {WantAgent} ability The WantAgent for launch the ability
     * @returns {Promise<void>} no callback returns Promise otherwise returns void
     * @since 9
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     */
    setLaunchAbility(ability: WantAgent): Promise<void>;

    /**
     * Dispatch the session event of this session.
     * @param {string} event Session event name to dispatch
     * @param {{ [key: string]: Object }} args The parameters of session event
     * @param {AsyncCallback<void>} callback - callback.
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 10
     */
    dispatchSessionEvent(event: string, args: { [key: string]: Object }, callback: AsyncCallback<void>): void;

    /**
     * Dispatch the session event of this session.
     * @param {string} event Session event name to dispatch
     * @param {{ [key: string]: Object }} args The parameters of session event
     * @returns {Promise<void>} no callback returns Promise otherwise returns void
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 10
     */
    dispatchSessionEvent(event: string, args: { [key: string]: Object }): Promise<void>;

    /**
     * Set the playlist of queueItem. Identifies the content of the playlist presented by this session.
     * @param {Array<AVQueueItem>} items An array of the AVQueueItem
     * @param {AsyncCallback<void>} callback - callback.
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 10
     */
    setAVQueueItems(items: Array<AVQueueItem>, callback: AsyncCallback<void>): void;

    /**
     * Set the playlist of queueItem. Identifies the content of the playlist presented by this session.
     * @param {Array<AVQueueItem>} items An array of the AVQueueItem
     * @returns {Promise<void>} no callback returns Promise otherwise returns void
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 10
     */
    setAVQueueItems(items: Array<AVQueueItem>): Promise<void>;

    /**
     * Set the name of the playlist presented by this session.
     * @param {string} title The name of the playlist
     * @param {AsyncCallback<void>} callback - callback.
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - server exception
     * @throws {BusinessError} 6600102 - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 10
     */
    setAVQueueTitle(title: string, callback: AsyncCallback<void>): void;

    /**
     * Set the name of the playlist presented by this session.
     * @param {string} title The name of the playlist
     * @returns {Promise<void>} no callback returns Promise otherwise returns void
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - server exception
     * @throws {BusinessError} 6600102 - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 10
     */
    setAVQueueTitle(title: string): Promise<void>;

    /**
     * Set the custom media packets for this session.
     * @param {{[key: string]: Object}} extras The custom media packets
     * @param {AsyncCallback<void>} callback - callback.
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 10
     */
    setExtras(extras: {[key: string]: Object}, callback: AsyncCallback<void>): void;

    /**
     * Set the custom media packets for this session.
     * @param {{[key: string]: Object}} extras The custom media packets
     * @returns {Promise<void>} no callback returns Promise otherwise returns void
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 10
     */
    setExtras(extras: {[key: string]: Object}): Promise<void>;

    /**
     * Get the current session's own controller
     * @param {AsyncCallback<AVSessionController>} callback - callback.
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 9
     */
    getController(callback: AsyncCallback<AVSessionController>): void;

    /**
     * Get the current session's own controller
     * @returns {Promise<AVSessionController>} no callback returns Promise otherwise returns void
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 9
     */
    getController(): Promise<AVSessionController>;

    /**
     * Get output device information
     * @param {AsyncCallback<OutputDeviceInfo>} callback - callback.
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 9
     */
    getOutputDevice(callback: AsyncCallback<OutputDeviceInfo>): void;

    /**
     * Get output device information
     * @returns {Promise<OutputDeviceInfo>} no callback returns Promise otherwise returns void
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 9
     */
    getOutputDevice(): Promise<OutputDeviceInfo>;

    /**
     * Register or unregister playback command callback.
     * As long as it is registered, it means that the ability supports this command.
     * If you cancel the callback, you need to call off {@link off}
     * When canceling the callback, need to update the supported commands list.
     * Each playback command only supports registering one callback,
     * and the new callback will replace the previous one.
     * @param {string} type Command to register.
     * @param callback Used to handle callback commands
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 9
     */
    on(type: 'play' | 'pause' | 'stop' | 'playNext' | 'playPrevious' | 'fastForward' | 'rewind', callback: () => void): void;

    /**
     * Unregister playback command callback.
     * When canceling the callback, need to update the supported commands list.
     * @param {string} type Command to register.
     * @param callback Used to handle callback commands
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 9
     */
    off(type: 'play' | 'pause' | 'stop' | 'playNext' | 'playPrevious' | 'fastForward' | 'rewind', callback?: () => void): void;

    /**
     * Register seek command callback
     * @param {string} type Registration Type 'seek'
     * @param callback Used to handle seek command.The callback provide the seek time(ms)
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 9
     */
    on(type: 'seek', callback: (time: number) => void): void;

    /**
     * Unregister seek command callback
     * @param {string} type Registration Type 'seek'
     * @param callback Used to handle seek command.The callback provide the seek time(ms)
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 9
     */
    off(type: 'seek', callback?: (time: number) => void): void;

    /**
     * Register setSpeed command callback
     * @param {string} type Registration Type 'setSpeed'
     * @param callback Used to handle setSpeed command.The callback provide the speed value
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 9
     */
    on(type: 'setSpeed', callback: (speed: number) => void): void;

    /**
     * Unregister setSpeed command callback
     * @param {string} type Registration Type 'setSpeed'
     * @param callback Used to handle setSpeed command.The callback provide the speed value
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 9
     */
    off(type: 'setSpeed', callback?: (speed: number) => void): void;

    /**
     * Register setLoopMode command callback
     * @param {string} type Registration Type 'setLoopMode'
     * @param callback Used to handle setLoopMode command.The callback provide the {@link LoopMode}
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 9
     */
    on(type: 'setLoopMode', callback: (mode: LoopMode) => void): void;

    /**
     * Unregister setLoopMode command callback
     * @param {string} type Registration Type 'setLoopMode'
     * @param callback Used to handle setLoopMode command.The callback provide the {@link LoopMode}
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 9
     */
    off(type: 'setLoopMode', callback?: (mode: LoopMode) => void): void;

    /**
     * Register toggle favorite command callback
     * @param {string} type Registration Type 'toggleFavorite'
     * @param callback Used to handle toggleFavorite command.The callback provide
     * the assetId for which the favorite status needs to be switched.
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 9
     */
    on(type: 'toggleFavorite', callback: (assetId: string) => void): void;

    /**
     * Unregister toggle favorite command callback
     * @param {string} type Registration Type 'toggleFavorite'
     * @param callback Used to handle toggleFavorite command.The callback provide
     * the assetId for which the favorite status needs to be switched.
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 9
     */
    off(type: 'toggleFavorite', callback?: (assetId: string) => void): void;

    /**
     * Register media key handling callback
     * @param {string} type Registration Type
     * @param callback Used to handle key events.The callback provide the KeyEvent
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 9
     */
    on(type: 'handleKeyEvent', callback: (event: KeyEvent) => void): void;

    /**
     * Unregister media key handling callback
     * @param {string} type Registration Type
     * @param callback Used to handle key events.The callback provide the KeyEvent
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 9
     */
    off(type: 'handleKeyEvent', callback?: (event: KeyEvent) => void): void;

    /**
     * Register session output device change callback
     * @param {string} type Registration Type
     * @param callback Used to handle output device changed.
     * The callback provide the new device info {@link OutputDeviceInfo}
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 9
     */
    on(type: 'outputDeviceChange', callback: (device: OutputDeviceInfo) => void): void;

    /**
     * Unregister session output device change callback
     * @param {string} type Registration Type
     * @param callback Used to handle output device changed.
     * The callback provide the new device info {@link OutputDeviceInfo}
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 9
     */
    off(type: 'outputDeviceChange', callback?: (device: OutputDeviceInfo) => void): void;

    /**
     * Register session custom command change callback
     * @param {string} type Registration Type
     * @param callback Used to handle event when the common command is received
     * The callback provide the command name and command args
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - server exception
     * @throws {BusinessError} 6600102 - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 10
     */
    on(type: 'commonCommand', callback: (command: string, args: { [key: string]: Object }) => void): void;

    /**
     * Unregister session custom command change callback
     * @param {string} type Registration Type
     * @param callback Used to cancel a specific listener
     * The callback provide the command name and command args
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - server exception
     * @throws {BusinessError} 6600102 - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 10
     */
    off(type: 'commonCommand', callback?: (command: string, args: { [key: string]: Object }) => void): void;

    /**
     * Register the item to play from the playlist change callback
     * @param {string} type Registration Type
     * @param callback Used to handle the item to play changed.
     * The callback provide the new device info {@link OutputDeviceInfo}
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - server exception
     * @throws {BusinessError} 6600102 - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 10
     */
    on(type: 'skipToQueueItem', callback: (itemId: number) => void): void;

    /**
     * Unregister the item to play from the playlist change callback
     * @param {string} type Registration Type
     * @param callback Used to handle the item to play changed.
     * The callback provide the new device info {@link OutputDeviceInfo}
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - server exception
     * @throws {BusinessError} 6600102 - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 10
     */
    off(type: 'skipToQueueItem', callback?: (itemId: number) => void): void;

    /**
     * Activate the session, indicating that the session can accept control commands
     * @param {AsyncCallback<void>} callback - callback.
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 9
     */
    activate(callback: AsyncCallback<void>): void;

    /**
     * Activate the session, indicating that the session can accept control commands
     * @returns {Promise<void>} no callback returns Promise otherwise returns void
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 9
     */
    activate(): Promise<void>;

    /**
     * Deactivate the session, indicating that the session not ready to accept control commands
     * @param {AsyncCallback<void>} callback - callback.
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 9
     */
    deactivate(callback: AsyncCallback<void>): void;

    /**
     * Deactivate the session, indicating that the session not ready to accept control commands
     * @returns {Promise<void>} no callback returns Promise otherwise returns void
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 9
     */
    deactivate(): Promise<void>;

    /**
     * Destroy this session, the server will clean up the session resources
     * @param {AsyncCallback<void>} callback - callback.
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 9
     */
    destroy(callback: AsyncCallback<void>): void;

      /**
     * Destroy this session, the server will clean up the session resources
     * @returns {Promise<void>} no callback returns Promise otherwise returns void
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 9
     */
    destroy(): Promise<void>;
  }

  /**
   * The metadata of the current media.Used to set the properties of the current media file
   * @interface AVMetadata
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @systemapi
   * @since 9
   */
  interface AVMetadata {
    /**
     * Unique ID used to represent this media.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @type {string}
     * @since 9
     */
    assetId: string;
    /**
     * The title of this media, for display in media center.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @type { ?string }
     * @since 9
     */
    title?: string;
    /**
     * The artist of this media
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @type {?string}
     * @since 9
     */
    artist?: string;
    /**
     * The author of this media
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @type {?string}
     * @since 9
     */
    author?: string;
    /**
     * The album of this media
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @type {?string}
     * @since 9
     */
    album?: string;
    /**
     * The writer of this media
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @type {?string}
     * @since 9
     */
    writer?: string;
    /**
     * The composer of this media
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @type {?string}
     * @since 9
     */
    composer?: string;
    /**
     * The duration of this media, used to automatically calculate playback position
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @type {?number}
     * @since 9
     */
    duration?: number;
    /**
     * The image of the media as a {@link PixelMap} or an uri formatted String,
     * used to display in media center.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 9
     */
    mediaImage?: image.PixelMap | string;
    /**
     * The publishDate of the media
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @type {?Date}
     * @since 9
     */
    publishDate?: Date;
    /**
     * The subtitle of the media, used for display
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @type {?string}
     * @since 9
     */
    subtitle?: string;
    /**
     * The discription of the media, used for display
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @type {?string}
     * @since 9
     */
    description?: string;
    /**
     * The lyric of the media, it should be in standard lyric format
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @type {?string}
     * @since 9
     */
    lyric?: string;
    /**
     * The previous playable media id.
     * Used to tell the controller if there is a previous playable media
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @type {?string}
     * @since 9
     */
    previousAssetId?: string;
    /**
     * The next playable media id.
     * Used to tell the controller if there is a next playable media
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @type {?string}
     * @since 9
     */
    nextAssetId?: string;
  }

  /**
   * The description of the media for an item in the playlist of the session
   * @interface AVMediaDescription
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @since 10
   */
  interface AVMediaDescription {
    /**
     * Unique ID used to represent this media.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @type {string}
     * @since 10
     */
    mediaId: string;
    /**
     * The title of this media, for display in media center.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @type {?string}
     * @since 10
     */
    title?: string;
    /**
     * The subtitle of the media, used for display
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @type {?string}
     * @since 10
     */
    subtitle?: string;
    /**
     * The description of this media
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @type {?string}
     * @since 10
     */
    description?: string;
    /**
     * The image of the media as a {@link PixelMap},
     * used to display in media center.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    icon?: image.PixelMap | string;
    /**
     * The image of the media as an uri formatted String,
     * used to display in media center.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @type {?string}
     * @since 10
     */
    iconUri?: string;
    /**
     * Any additional attributes that can be represented as key-value pairs
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    extras?: { [key: string]: object };
    /**
     * The uri of the media, used to locate the media in some special cases
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @type {?string}
     * @since 10
     */
    mediaUri?: string;
  }

  /**
   * The item in the playlist of the session
   * @interface AVQueueItem
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @since 10
   */
  interface AVQueueItem {
    /**
     * Sequence number of the item in the playlist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @type {number}
     * @since 10
     */
    itemId: number;
    /**
     * The media description of the item in the playlist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    description?: AVMediaDescription;
  }

  /**
   * Used to indicate the playback state of the current media.
   * If the playback state of the media changes, it needs to be updated synchronously
   * @interface AVPlaybackState
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @systemapi
   * @since 9
   */
  interface AVPlaybackState {
    /**
     * Current playback state. See {@link PlaybackState}
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 9
     */
    state?: PlaybackState;
    /**
     * Current playback speed
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @type {?number}
     * @since 9
     */
    speed?: number;
    /**
     * Current playback position of this media. See {@link PlaybackPosition}
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 9
     */
    position?: PlaybackPosition;
    /**
     * The current buffered time, the maximum playable position
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @type {?number}
     * @since 9
     */
    bufferedTime?: number;
    /**
     * Current playback loop mode. See {@link LoopMode}
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 9
     */
    loopMode?: LoopMode;
    /**
     * Current Favorite Status
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @type {?boolean}
     * @since 9
     */
    isFavorite?: boolean;
    /**
     * Current active item id
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @type {?number}
     * @since 10
     */
    activeItemId?: number;
    /**
     * Current custom media packets
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    extras?: {[key: string]: Object};
  }

  /**
   * Playback position definition
   * @interface PlaybackPosition
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @systemapi
   * @since 9
   */
  interface PlaybackPosition {
    /**
     * Elapsed time(position) of this media set by the app.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @type {number}
     * @since 9
     */
    elapsedTime: number;
    /**
     * Record the system time when elapsedTime is set.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @type {number}
     * @since 9
     */
    updateTime: number;
  }
  /**
   * Target Device Information Definition
   * @interface OutputDeviceInfo
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @systemapi
   * @since 9
   */
  interface OutputDeviceInfo {
    /**
     * Whether the remote device
     * @type {boolean}
     * @since 9
     */
    isRemote: boolean;
    /**
     * Audio device id.The length of the audioDeviceId array is greater than 1
     * if output to multiple devices at the same time.
     * @since 9
     */
    audioDeviceId: Array<number>;
    /**
     * Device name. The length of the deviceName array is greater than 1
     * if output to multiple devices at the same time.
     * @since 9
     */
    deviceName: Array<string>;
  }
  /**
   * Loop Play Mode Definition
   * @enum {number}
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @systemapi
   * @since 9
   */
  enum LoopMode {
    /**
     * The default mode is sequential playback
     * @since 9
     */
    LOOP_MODE_SEQUENCE = 0,

    /**
     * Single loop mode
     * @since 9
     */
    LOOP_MODE_SINGLE = 1,

    /**
     * List loop mode
     * @since 9
     */
    LOOP_MODE_LIST = 2,

    /**
     * Shuffle playback mode
     * @since 9
     */
    LOOP_MODE_SHUFFLE = 3,
  }

  /**
   * Definition of current playback state
   * @enum {number}
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @systemapi
   * @since 9
   */
  enum PlaybackState {
    /**
     * Initial state. The initial state of media file
     * @since 9
     */
    PLAYBACK_STATE_INITIAL = 0,

    /**
     * Preparing state. Indicates that the media file is not ready to play,
     * the media is loading or buffering
     * @since 9
     */
    PLAYBACK_STATE_PREPARE = 1,

    /**
     * Playing state.
     * @since 9
     */
    PLAYBACK_STATE_PLAY = 2,

    /**
     * Paused state.
     * @since 9
     */
    PLAYBACK_STATE_PAUSE = 3,

    /**
     * Fast forwarding state.
     * @since 9
     */
    PLAYBACK_STATE_FAST_FORWARD = 4,

    /**
     * Rewinding state.
     * @since 9
     */
    PLAYBACK_STATE_REWIND = 5,

    /**
     * Stopped state.The server will clear the media playback position and other information.
     * @since 9
     */
    PLAYBACK_STATE_STOP = 6,
  }

  /**
   * The description of the session
   * @interface AVSessionDescriptor
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 9
   */
  interface AVSessionDescriptor {
    /**
     * Unique ID of the session
     * @type {string}
     * @since 9
     */
    sessionId: string;
    /**
     * Session type, currently supports audio or video
     * @since 9
     */
    type: AVSessionType;
    /**
     * The session tag set by the application
     * @type {string}
     * @since 9
     */
    sessionTag: string;
    /**
     * The elementName of the ability that created this session. See {@link ElementName} in bundle/elementName.d.ts
     * @since 9
     */
    elementName: ElementName;
    /**
     * Session active state
     * @type {boolean}
     * @since 9
     */
    isActive: boolean;
    /**
     * Is it the top priority session
     * @type {boolean}
     * @since 9
     */
    isTopSession: boolean;
    /**
     * The current output device information.
     * It will be undefined if this is a local session.
     * @since 9
     */
    outputDevice: OutputDeviceInfo;
  }

  /**
   * Session controller,used to control media playback and get media information
   * @interface AVSessionController
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @systemapi
   * @since 9
   */
  interface AVSessionController {
    /**
     * Unique session Id
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 9
     */
    readonly sessionId: string;
    /**
     * Get the playback status of the current session
     * @param {AsyncCallback<AVPlaybackState>} callback - callback.
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @throws {BusinessError} 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @systemapi
     * @since 9
     */
    getAVPlaybackState(callback: AsyncCallback<AVPlaybackState>): void;

    /**
     * Get the playback status of the current session
     * @returns {Promise<AVPlaybackState>} no callback returns Promise otherwise returns void
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @throws {BusinessError} 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @systemapi
     * @since 9
     */
    getAVPlaybackState(): Promise<AVPlaybackState>;

    /**
     * Get the metadata of the current session
     * @param {AsyncCallback<AVMetadata>} callback - callback.
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @throws {BusinessError} 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @systemapi
     * @since 9
     */
    getAVMetadata(callback: AsyncCallback<AVMetadata>): void;

    /**
     * Get the metadata of the current session
     * @returns {Promise<AVMetadata>} no callback returns Promise otherwise returns void
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @throws {BusinessError} 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @systemapi
     * @since 9
     */
    getAVMetadata(): Promise<AVMetadata>;

    /**
     * Get the name of the playlist of the current session
     * @param {AsyncCallback<string>} callback - callback.
     * @throws {BusinessError} 6600101 - server exception
     * @throws {BusinessError} 6600102 - session does not exist
     * @throws {BusinessError} 6600103 - controller does not exist
     * @systemapi
     * @since 10
     */
    getAVQueueTitle(callback: AsyncCallback<string>): void;

    /**
     * Get the name of the playlist of the current session
     * @returns {Promise<string>} no callback returns Promise otherwise returns void
     * @throws {BusinessError} 6600101 - server exception
     * @throws {BusinessError} 6600102 - session does not exist
     * @throws {BusinessError} 6600103 - controller does not exist
     * @systemapi
     * @since 10
     */
    getAVQueueTitle(): Promise<string>;

    /**
     * Get the playlist of the current session
     * @param {AsyncCallback<Array<AVQueueItem>>} callback - callback.
     * @throws {BusinessError} 6600101 - server exception
     * @throws {BusinessError} 6600102 - session does not exist
     * @throws {BusinessError} 6600103 - controller does not exist
     * @systemapi
     * @since 10
     */
    getAVQueueItems(callback: AsyncCallback<Array<AVQueueItem>>): void;

    /**
     * Get the playlist of the current session
     * @returns {Promise<Array<AVQueueItem>>} no callback returns Promise otherwise returns void
     * @throws {BusinessError} 6600101 - server exception
     * @throws {BusinessError} 6600102 - session does not exist
     * @throws {BusinessError} 6600103 - controller does not exist
     * @systemapi
     * @since 10
     */
    getAVQueueItems(): Promise<Array<AVQueueItem>>;

    /**
     * Set the item in the playlist to be played
     * @param {number} itemId The serial number of the item to be played
     * @param {AsyncCallback<void>} callback - callback.
     * @throws {BusinessError} 6600101 - server exception
     * @throws {BusinessError} 6600102 - session does not exist
     * @throws {BusinessError} 6600103 - controller does not exist
     * @systemapi
     * @since 10
     */
    skipToQueueItem(itemId: number, callback: AsyncCallback<void>): void;

    /**
     * Set the item in the playlist to be played
     * @param {number} itemId The serial number of the item to be played
     * @returns {Promise<void>} no callback returns Promise otherwise returns void
     * @throws {BusinessError} 6600101 - server exception
     * @throws {BusinessError} 6600102 - session does not exist
     * @throws {BusinessError} 6600103 - controller does not exist
     * @systemapi
     * @since 10
     */
    skipToQueueItem(itemId: number): Promise<void>;

    /**
     * Get output device information
     * @param {AsyncCallback<OutputDeviceInfo>} callback - callback.
     * @throws {BusinessError} 600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 9
     */
    getOutputDevice(callback: AsyncCallback<OutputDeviceInfo>): void;

    /**
     * Get output device information
     * @returns {Promise<OutputDeviceInfo>} no callback returns Promise otherwise returns void
     * @throws {BusinessError} 600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 9
     */
    getOutputDevice(): Promise<OutputDeviceInfo>;

    /**
     * Send media key event to this session
     * @param {KeyEvent} event The KeyEvent
     * @param {AsyncCallback<void>} callback - callback.
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @throws {BusinessError} 600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @throws {BusinessError} 600105 - {@link #ERR_CODE_COMMAND_INVALID} - command not supported
     * @throws {BusinessError} 600106 - {@link #ERR_CODE_SESSION_INACTIVE} - session inactive
     * @systemapi
     * @since 9
     */
    sendAVKeyEvent(event: KeyEvent, callback: AsyncCallback<void>): void;

    /**
     * Send media key event to this session
     * @param {KeyEvent} event The KeyEvent
     * @returns {Promise<void>} no callback returns Promise otherwise returns void
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @throws {BusinessError} 600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @throws {BusinessError} 600105 - {@link #ERR_CODE_COMMAND_INVALID} - command not supported
     * @throws {BusinessError} 600106 - {@link #ERR_CODE_SESSION_INACTIVE} - session inactive
     * @systemapi
     * @since 9
     */
    sendAVKeyEvent(event: KeyEvent): Promise<void>;

    /**
     * Get the {@link WantAgent} of this session that can launch the session ability
     * @param {AsyncCallback<WantAgent>} callback - callback.
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @throws {BusinessError} 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @systemapi
     * @since 9
     */
    getLaunchAbility(callback: AsyncCallback<WantAgent>): void;

    /**
     * Get the {@link WantAgent} of this session that can launch the session ability
     * @returns {Promise<WantAgent>} no callback returns Promise otherwise returns void
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @throws {BusinessError} 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @systemapi
     * @since 9
     */
    getLaunchAbility(): Promise<WantAgent>;

    /**
     * Get the adjusted playback position. The time automatically calculated by the system
     * taking into account factors such as playback status, playback speed, and application update time.
     * @returns {number} current playback position in ms.Note that the returns value of each call will be different.
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @systemapi
     * @since 9
     */
    getRealPlaybackPositionSync(): number;

    /**
     * Check if the current session is active
     * @param {AsyncCallback<boolean>} callback - callback.
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @throws {BusinessError} 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @systemapi
     * @since 9
     */
    isActive(callback: AsyncCallback<boolean>): void;

    /**
     * Check if the current session is active
     * @returns {Promise<boolean>} no callback returns Promise otherwise returns void
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @throws {BusinessError} 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @systemapi
     * @since 9
     */
    isActive(): Promise<boolean>;

    /**
     * Destroy the server controller
     * @param {AsyncCallback<void>} callback - callback.
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @systemapi
     * @since 9
     */
    destroy(callback: AsyncCallback<void>): void;

    /**
     * Destroy the server controller
     * @returns {Promise<void>} no callback returns Promise otherwise returns void
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @systemapi
     * @since 9
     */
    destroy(): Promise<void>;

    /**
     * Get commands supported by the current session
     * @param {AsyncCallback<Array<AVControlCommandType>>} callback - callback.
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @throws {BusinessError} 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @systemapi
     * @since 9
     */
    getValidCommands(callback: AsyncCallback<Array<AVControlCommandType>>): void;

    /**
     * Get commands supported by the current session
     * @returns {Promise<Array<AVControlCommandType>>} no callback returns Promise otherwise returns void
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @throws {BusinessError} 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @systemapi
     * @since 9
     */
    getValidCommands(): Promise<Array<AVControlCommandType>>;

    /**
     * Send control commands to this session
     * @param {AVControlCommand} command The command to be send. See {@link AVControlCommand}
     * @param {AsyncCallback<void>} callback - callback.
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @throws {BusinessError} 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @throws {BusinessError} 6600105 - {@link #ERR_CODE_COMMAND_INVALID} - command not supported
     * @throws {BusinessError} 6600106 - {@link #ERR_CODE_SESSION_INACTIVE} - session inactive
     * @throws {BusinessError} 6600107 - {@link #ERR_CODE_MESSAGE_OVERLOAD} - command or event overload
     * @systemapi
     * @since 9
     */
    sendControlCommand(command: AVControlCommand, callback: AsyncCallback<void>): void;

    /**
     * Send control commands to this session
     * @param {AVControlCommand} command The command to be send. See {@link AVControlCommand}
     * @returns {Promise<void>} no callback returns Promise otherwise returns void
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
     * @throws {BusinessError} 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @throws {BusinessError} 6600105 - {@link #ERR_CODE_COMMAND_INVALID} - command not supported
     * @throws {BusinessError} 6600106 - {@link #ERR_CODE_SESSION_INACTIVE} - session inactive
     * @throws {BusinessError} 6600107 - {@link #ERR_CODE_MESSAGE_OVERLOAD} - command or event overload
     * @systemapi
     * @since 9
     */
    sendControlCommand(command: AVControlCommand): Promise<void>;

    /**
     * Send common commands to this session
     * @param {string} command The command name to be send.
     * @param {{ [key: string]: Object }} args The parameters of session event
     * @param {AsyncCallback<void>} callback - callback.
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - server exception
     * @throws {BusinessError} 6600102 - session does not exist
     * @throws {BusinessError} 6600103 - controller does not exist
     * @throws {BusinessError} 6600105 - command not supported
     * @throws {BusinessError} 6600106 - session inactive
     * @throws {BusinessError} 6600107 - command or event overload
     * @systemapi
     * @since 10
     */
    sendCommonCommand(command: string, args: { [key: string]: Object }, callback: AsyncCallback<void>): void;

    /**
     * Send common commands to this session
     * @param {string} command The command name to be send.
     * @param {{ [key: string]: Object }} args The parameters of session event
     * @returns {Promise<void>} no callback returns Promise otherwise returns void
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - server exception
     * @throws {BusinessError} 6600102 - session does not exist
     * @throws {BusinessError} 6600103 - controller does not exist
     * @throws {BusinessError} 6600105 - command not supported
     * @throws {BusinessError} 6600106 - session inactive
     * @throws {BusinessError} 6600107 - command or event overload
     * @systemapi
     * @since 10
     */
    sendCommonCommand(command: string, args: { [key: string]: Object }): Promise<void>;

    /**
     * Get custom media packets provided by the corresponding session
     * @param {AsyncCallback<{[key: string]: Object}>} callback - callback.
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - server exception
     * @throws {BusinessError} 6600102 - session does not exist
     * @throws {BusinessError} 6600103 - controller does not exist
     * @throws {BusinessError} 6600105 - command not supported
     * @throws {BusinessError} 6600107 - command or event overload
     * @systemapi
     * @since 10
     */
    getExtras(callback: AsyncCallback<{[key: string]: Object}>): void;

    /**
     * Get custom media packets provided by the corresponding session
     * @returns {Promise<{[key: string]: Object}>} no callback returns Promise otherwise returns void
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - server exception
     * @throws {BusinessError} 6600102 - session does not exist
     * @throws {BusinessError} 6600103 - controller does not exist
     * @throws {BusinessError} 6600105 - command not supported
     * @throws {BusinessError} 6600107 - command or event overload
     * @systemapi
     * @since 10
     */
    getExtras(): Promise<{[key: string]: Object}>;

    /**
     * Register metadata changed callback
     * @param type 'metadataChange'
     * @param { Array<keyof AVMetadata> | string } filter The properties of {@link AVMetadata} that you cared about
     * @param callback The callback used to handle metadata changed event.
     * The callback function provides the {@link AVMetadata} parameter.
     * It only contains the properties set in the filter.
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @systemapi
     * @since 9
     */
    on(type: 'metadataChange', filter: Array<keyof AVMetadata> | 'all', callback: (data: AVMetadata) => void);

    /**
     * Unregister metadata changed callback
     * @param type 'metadataChange'
     * @param callback The callback used to handle metadata changed event.
     * The callback function provides the {@link AVMetadata} parameter.
     * It only contains the properties set in the filter.
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @systemapi
     * @since 9
     */
    off(type: 'metadataChange', callback?: (data: AVMetadata) => void);

    /**
     * Register playback state changed callback
     * @param type 'playbackStateChange'
     * @param { Array<keyof AVPlaybackState> | string } filter The properties of {@link AVPlaybackState} that you cared about
     * @param callback The callback used to handle playback state changed event.
     * The callback function provides the {@link AVPlaybackState} parameter.
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @systemapi
     * @since 9
     */
    on(type: 'playbackStateChange', filter: Array<keyof AVPlaybackState> | 'all', callback: (state: AVPlaybackState) => void);

    /**
     * Unregister playback state changed callback
     * @param type 'playbackStateChange'
     * @param filter The properties of {@link AVPlaybackState} that you cared about
     * @param callback The callback used to handle playback state changed event.
     * The callback function provides the {@link AVPlaybackState} parameter.
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @systemapi
     * @since 9
     */
    off(type: 'playbackStateChange', callback?: (state: AVPlaybackState) => void);

    /**
     * Register current session destroyed callback
     * @param {string} type 'sessionDestroy'
     * @param callback The callback used to handle current session destroyed event.
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @systemapi
     * @since 9
     */
    on(type: 'sessionDestroy', callback: () => void);

    /**
     * Unregister current session destroyed callback
     * @param {string} type 'sessionDestroy'
     * @param callback The callback used to handle current session destroyed event.
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @systemapi
     * @since 9
     */
    off(type: 'sessionDestroy', callback?: () => void);

    /**
     * Register the active state of this session changed callback
     * @param {string} type 'activeStateChange'
     * @param callback The callback used to handle the active state of this session changed event.
     * The callback function provides the changed session state.
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @systemapi
     * @since 9
     */
    on(type: 'activeStateChange', callback: (isActive: boolean) => void);

    /**
     * Unregister the active state of this session changed callback
     * @param {string} type 'activeStateChange'
     * @param callback The callback used to handle the active state of this session changed event.
     * The callback function provides the changed session state.
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @systemapi
     * @since 9
     */
    off(type: 'activeStateChange', callback?: (isActive: boolean) => void);

    /**
     * Register the valid commands of the session changed callback
     * @param {string} type 'validCommandChange'
     * @param callback The callback used to handle the changes.
     * The callback function provides an array of AVControlCommandType.
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @systemapi
     * @since 9
     */
    on(type: 'validCommandChange', callback: (commands: Array<AVControlCommandType>) => void);

    /**
     * Unregister the valid commands of the session changed callback
     * @param {string} type 'validCommandChange'
     * @param callback The callback used to handle the changes.
     * The callback function provides an array of AVControlCommandType.
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @systemapi
     * @since 9
     */
    off(type: 'validCommandChange', callback?: (commands: Array<AVControlCommandType>) => void);

    /**
     * Register session output device change callback
     * @param {string} type Registration Type
     * @param callback Used to handle output device changed.
     * The callback provide the new device info {@link OutputDeviceInfo}
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 9
     */
    on(type: 'outputDeviceChange', callback: (device: OutputDeviceInfo) => void): void;

    /**
     * Unregister session output device change callback
     * @param {string} type Registration Type
     * @param callback Used to handle output device changed.
     * The callback provide the new device info {@link OutputDeviceInfo}
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 9
     */
    off(type: 'outputDeviceChange', callback?: (device: OutputDeviceInfo) => void): void;

    /**
     * Register session event callback
     * @param {string} type 'sessionEvent'
     * @param callback The callback used to handle session event changed event.
     * The callback function provides the event string and key-value pair parameters.
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @systemapi
     * @since 10
     */
    on(type: 'sessionEvent', callback: (sessionEvent: string, args: { [key: string]: Object }) => void): void;

    /**
     * Unregister session event callback
     * @param {string} type 'sessionEvent'
     * @param callback Used to cancel a specific listener
     * The callback function provides the event string and key-value pair parameters.
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @systemapi
     * @since 10
     */
    off(type: 'sessionEvent', callback?: (sessionEvent: string, args: { [key: string]: Object }) => void): void;

    /**
     * Register session playlist change callback
     * @param {string} type Registration Type
     * @param callback Used to handle playlist changed.
     * The callback provide the new array of AVQueueItem {@link AVQueueItem}
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - server exception
     * @throws {BusinessError} 6600103 - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 10
     */
    on(type: 'queueItemsChange', callback: (items: Array<AVQueueItem>) => void): void;

    /**
     * Unregister session playlist change callback
     * @param {string} type Registration Type
     * @param callback Used to handle playlist changed.
     * The callback provide the new array of AVQueueItem {@link AVQueueItem}
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - server exception
     * @throws {BusinessError} 6600103 - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 10
     */
    off(type: 'queueItemsChange', callback?: (items: Array<AVQueueItem>) => void): void;

    /**
     * Register the name of session playlist change callback
     * @param {string} type Registration Type
     * @param callback Used to handle name of playlist changed.
     * The callback provide the new name.
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - server exception
     * @throws {BusinessError} 6600103 - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 10
     */
    on(type: 'queueTitleChange', callback: (title: string) => void): void;

    /**
     * Unregister the name of session playlist change callback
     * @param {string} type Registration Type
     * @param callback Used to handle name of playlist changed.
     * The callback provide the new name.
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - server exception
     * @throws {BusinessError} 6600103 - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 10
     */
    off(type: 'queueTitleChange', callback?: (title: string) => void): void;

    /**
     * Register the custom media packets change callback
     * @param {string} type Registration Type
     * @param callback Used to handle custom media packets changed.
     * The callback provide the new media packets.
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 10
     */
    on(type: 'extrasChange', callback: (extras: {[key: string]: Object}) => void): void;

    /**
     * Unregister the custom media packets change callback
     * @param {string} type Registration Type
     * @param callback Used to handle custom media packets changed.
     * The callback provide the new media packets.
     * @throws {BusinessError} 401 - parameter check failed
     * @throws {BusinessError} 6600101 - {@link #ERR_CODE_SERVICE_EXCEPTION} - server exception
     * @throws {BusinessError} 6600103 - {@link #ERR_CODE_CONTROLLER_NOT_EXIST} - controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 10
     */
    off(type: 'extrasChange', callback?: (extras: {[key: string]: Object}) => void): void;
  }

  /**
   * The type of control command
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @systemapi
   * @since 9
   */
  type AVControlCommandType = 'play' | 'pause' | 'stop' | 'playNext' | 'playPrevious' | 'fastForward' | 'rewind' |
    'seek' | 'setSpeed' | 'setLoopMode' | 'toggleFavorite';

  /**
   * The definition of command to be sent to the session
   * @interface AVControlCommand
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @systemapi
   * @since 9
   */
  interface AVControlCommand {
    /**
     * The command value {@link AVControlCommandType}
     * @since 9
     */
    command: AVControlCommandType;
    /**
     * parameter of the command. Whether this command requires parameters, see {@link AVSessionCommand}
     * seek command requires a number parameter
     * setSpeed command requires a number parameter
     * setLoopMode command requires a {@link LoopMode} parameter.
     * toggleFavorite command requires assetId {@link AVMetadata.assetId} parameter
     * other commands need no parameter
     * @since 9
     */
    parameter?: LoopMode | string | number;
  }

  /**
   * Enumerates ErrorCode types, returns in BusinessError.code.
   * @enum {number}
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @systemapi
   * @since 9
   */
  enum AVSessionErrorCode {
    /**
     * Session service exception.
     * @since 9
     */
    ERR_CODE_SERVICE_EXCEPTION = 6600101,

    /**
     * The session does not exist
     * @since 9
     */
    ERR_CODE_SESSION_NOT_EXIST = 6600102,

    /**
     * The session controller does not exist.
     * @since 9
     */
    ERR_CODE_CONTROLLER_NOT_EXIST = 6600103,

    /**
     * The remote session connection failed.
     * @since 9
     */
    ERR_CODE_REMOTE_CONNECTION_ERR = 6600104,

    /**
     * Invalid session command.
     * @since 9
     */
    ERR_CODE_COMMAND_INVALID = 6600105,

    /**
     * The session is not activated.
     * @since 9
     */
    ERR_CODE_SESSION_INACTIVE = 6600106,

    /**
     * Too many commands or events.
     * @since 9
     */
    ERR_CODE_MESSAGE_OVERLOAD = 6600107,
  }
}

export default avSession;
