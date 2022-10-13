/*
 * Copyright (C) 2022 Huawei Device Co., Ltd.
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

import {ErrorCallback, AsyncCallback} from './basic';
import { Context } from './app/context';
import { BusinessError } from './interface_sdk-js_cameraErrorCode/api/basic';

/**
 * @name camera
 * @syscap SystemCapability.Multimedia.Camera.Core
 * @import import camera from '@ohos.multimedia.camera';
 * @since 9
 */
declare namespace camera {

  /**
   * Creates a CameraManager instance.
   * @param context Current application context.
   * @return CameraManager instance.
   * @since 9
   * @syscap SystemCapability.Multimedia.Camera.Core
   * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
   */
  function getCameraManager(context: Context): CameraManager;

  /**
   * Enum for camera status.
   * @since 9
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  enum CameraStatus {
    /**
     * Appear status.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    CAMERA_STATUS_APPEAR = 0,
    /**
     * Disappear status.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    CAMERA_STATUS_DISAPPEAR = 1,
    /**
     * Available status.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    CAMERA_STATUS_AVAILABLE = 2,
    /**
     * Unavailable status.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    CAMERA_STATUS_UNAVAILABLE = 3
  }

  /**
   * Profile for camera streams.
   * @since 9
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  interface Profile {
    /**
     * Camera format.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    readonly format: CameraFormat;
    /**
     * Picture size.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    readonly size: Size;
  }

  /**
   * Frame rate range.
   * @since 9
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  interface FrameRateRange {
    /**
     * Min frame rate.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    readonly min: number;
    /**
     * Max frame rate.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    readonly max: number;
  }

  /**
   * Video profile.
   * @since 9
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  interface VideoProfile extends Profile {
    /**
     * Frame rate in unit fps (frames per second).
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    readonly frameRateRange: FrameRateRange;
  }

  /**
   * Camera output capability.
   * @since 9
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  interface CameraOutputCapability  {
    /**
     * Preview profiles.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    readonly previewProfiles: Array<Profile>;
    /**
     * Photo profiles.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    readonly photoProfiles: Array<Profile>;
    /**
     * Video profiles.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    readonly videoProfiles: Array<VideoProfile>;
    /**
     * All the supported metadata Object Types.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    readonly supportedMetadataObjectTypes: Array<MetadataObjectType>;
  }
  
  /**
   * Enum for camera error code.
   * @since 9
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
   enum CameraErrorCode {
    /**
     * Invaild argument.
     * @since 9
     */
    INVALID_ARGUMENT = 7400101,
    /**
     * Operation not allow.
     * @since 9
     */
    OPERATION_NOT_ALLOWED = 7400102,
    /**
     * Session not config.
     * @since 9
     */
    SESSION_NOT_CONFIG = 7400103,
    /**
     * Session not running.
     * @since 9
     */
    SESSION_NOT_RUNNING = 7400104,
    /**
     * Session config locked.
     * @since 9
     */
    SESSION_CONFIG_LOCKED = 7400105,
    /**
     * Device setting locked.
     * @since 9
     */
    DEVICE_SETTING_LOCKED = 7400106,
    /**
     * Confilict camera.
     * @since 9
     */
    CONFILICT_CAMERA = 7400107,
    /**
     * Driver disabled.
     * @since 9
     */
    DEVICE_DISABLED = 7400108,
    /**
     * Service fatal error.
     * @since 9
     */
    SERVICE_FATAL_ERROR = 7400201
  }

  /**
   * Camera manager object.
   * @since 9
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  interface CameraManager  {
    /**
     * Gets supported camera descriptions.
     * @return An array of supported cameras.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    getSupportedCameras(): Array<CameraDevice>;

    /**
     * Gets supported output capability for specific camera.
     * @param camera Camera device.
     * @return The camera output capability.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    getSupportedOutputCapability(camera: CameraDevice): CameraOutputCapability;

    /**
     * Determine wether camera is muted.
     * @return Is camera muted.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    isCameraMuted(): boolean;

    /**
     * Determine wether camera mute is supported.
     * @return Is camera mute supported.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     */
    isCameraMuteSupported(): boolean;

    /**
     * Mute camera.
     * @param mute Mute camera if TRUE, otherwise unmute camera.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     */
    muteCamera(mute: boolean): void;

    /**
     * Creates a CameraInput instance by camera.
     * @param camera Camera device used to create the instance.
     * @return The CameraInput instance.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     * @permission ohos.permission.CAMERA
     */
    createCameraInput(camera: CameraDevice): CameraInput;

    /**
     * Creates a CameraInput instance by camera position and type.
     * @param position Target camera position.
     * @param type Target camera type.
     * @return The CameraInput instance.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     * @permission ohos.permission.CAMERA
     */
    createCameraInput(position: CameraPosition, type: CameraType): CameraInput;

    /**
     * Creates a PreviewOutput instance.
     * @param profile Preview output profile.
     * @param surfaceId Surface object id used in camera photo output.
     * @return The PreviewOutput instance.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    createPreviewOutput(profile: Profile, surfaceId: string): PreviewOutput;

    /**
     * Creates a PhotoOutput instance.
     * @param profile Photo output profile.
     * @param surfaceId Surface object id used in camera photo output.
     * @return The PhotoOutput instance.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    createPhotoOutput(profile: Profile, surfaceId: string): PhotoOutput;

    /**
     * Creates a VideoOutput instance.
     * @param profile Video profile.
     * @param surfaceId Surface object id used in camera video output.
     * @return The VideoOutput instance.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    createVideoOutput(profile: VideoProfile, surfaceId: string): VideoOutput;

    /**
     * Creates a MetadataOutput instance.
     * @param metadataObjectTypes Array of MetadataObjectType.
     * @return The MetadataOutput instance.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    createMetadataOutput(metadataObjectTypes: Array<MetadataObjectType>): MetadataOutput;

    /**
     * Gets a CaptureSession instance.
     * @return The CaptureSession instance.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    createCaptureSession(): CaptureSession;

    /**
     * Subscribes camera status change event callback.
     * @param type Event type.
     * @param callback Callback used to get the camera status change.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    on(type: 'cameraStatus', callback: AsyncCallback<CameraStatusInfo>): void;

    /**
     * Subscribes camera mute change event callback.
     * @param type Event type.
     * @param callback Callback used to get the camera mute change.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @systemapi
     */
    on(type: 'cameraMute', callback: AsyncCallback<boolean>): void;
  }

  /**
   * Camera status info.
   * @since 9
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  interface CameraStatusInfo {
    /**
     * Camera instance.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    camera: CameraDevice;
    /**
     * Current camera status.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    status: CameraStatus;
  }

  /**
   * Enum for camera position.
   * @since 9
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  enum CameraPosition {
    /**
     * Unspecified position.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    CAMERA_POSITION_UNSPECIFIED = 0,
    /**
     * Back position.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    CAMERA_POSITION_BACK = 1,
    /**
     * Front position.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    CAMERA_POSITION_FRONT = 2
  }

  /**
   * Enum for camera type.
   * @since 9
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  enum CameraType {
    /**
     * Default camera type
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    CAMERA_TYPE_DEFAULT = 0,

    /**
     * Wide camera
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    CAMERA_TYPE_WIDE_ANGLE = 1,

    /**
     * Ultra wide camera
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    CAMERA_TYPE_ULTRA_WIDE = 2,

    /**
     * Telephoto camera
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    CAMERA_TYPE_TELEPHOTO = 3,

    /**
     * True depth camera
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    CAMERA_TYPE_TRUE_DEPTH = 4
  }

  /**
   * Enum for camera connection type.
   * @since 9
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  enum ConnectionType {
    /**
     * Built-in camera.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    CAMERA_CONNECTION_BUILT_IN = 0,

    /**
     * Camera connected using USB
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    CAMERA_CONNECTION_USB_PLUGIN = 1,

    /**
     * Remote camera
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    CAMERA_CONNECTION_REMOTE = 2
  }

  /**
   * Camera device object.
   * @since 9
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  interface CameraDevice {
    /**
     * Camera id attribute.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    readonly cameraId: string;
    /**
     * Camera position attribute.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    readonly cameraPosition: CameraPosition;
    /**
     * Camera type attribute.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    readonly cameraType: CameraType;
    /**
     * Camera connection type attribute.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    readonly connectionType: ConnectionType;
  }

  /**
   * Size parameter.
   * @since 9
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  interface Size {
    /**
     * Width.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
     width: number;
    /**
     * Height.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    height: number;
  }

  /**
   * Point parameter.
   * @since 9
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  interface Point {
    /**
     * x co-ordinate
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    x: number;
    /**
     * y co-ordinate
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    y: number;
  }

  /**
   * Camera input object.
   * @since 9
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  interface CameraInput {
    /**
     * Open camera.
     * @param callback Callback used to return the result.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    open(callback: AsyncCallback<void>): void;

    /**
     * Open camera.
     * @return Promise used to return the result.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    open(): Promise<void>;

    /**
     * Close camera.
     * @param callback Callback used to return the result.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    close(callback: AsyncCallback<void>): void;

    /**
     * Close camera.
     * @return Promise used to return the result.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    close(): Promise<void>;

    /**
     * Subscribes error event callback.
     * @param type Event type.
     * @param camera Camera device.
     * @param callback Callback used to get the camera input errors.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    on(type: 'error', camera: CameraDevice, callback: ErrorCallback<BusinessError>): void;
  }

  /**
   * Enum for camera format type.
   * @since 9
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
   enum CameraFormat {
    /**
     * RGBA 8888 Format.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    CAMERA_FORMAT_RGBA_8888 = 3,

    /**
     * YUV 420 Format.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    CAMERA_FORMAT_YUV_420_SP = 1003,

    /**
     * JPEG Format.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    CAMERA_FORMAT_JPEG = 2000
  }

  /**
   * Enum for flash mode.
   * @since 9
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  enum FlashMode {
    /**
     * Close mode.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    FLASH_MODE_CLOSE = 0,
    /**
     * Open mode.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    FLASH_MODE_OPEN = 1,
    /**
     * Auto mode.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    FLASH_MODE_AUTO = 2,
    /**
     * Always open mode.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    FLASH_MODE_ALWAYS_OPEN = 3
  }

  /**
   * Enum for exposure mode.
   * @since 9
   */
  enum ExposureMode {
    /**
     * Lock exposure mode.
     * @since 9
     */
    EXPOSURE_MODE_LOCKED = 0,
    /**
     * Auto exposure mode.
     * @since 9
     */
     EXPOSURE_MODE_AUTO = 1,
     /**
     * Continuous automatic exposure.
     * @since 9
     */
    EXPOSURE_MODE_CONTINUOUS_AUTO = 2
  }

  /**
   * Enum for focus mode.
   * @since 9
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  enum FocusMode {
    /**
     * Manual mode.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    FOCUS_MODE_MANUAL = 0,
    /**
     * Continuous auto mode.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    FOCUS_MODE_CONTINUOUS_AUTO = 1,
    /**
     * Auto mode.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    FOCUS_MODE_AUTO = 2,
    /**
     * Locked mode.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    FOCUS_MODE_LOCKED = 3
  }

  /**
   * Enum for focus state.
   * @since 9
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  enum FocusState {
    /**
     * Scan state.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    FOCUS_STATE_SCAN = 0,
    /**
     * Focused state.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    FOCUS_STATE_FOCUSED = 1,
    /**
     * Unfocused state.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    FOCUS_STATE_UNFOCUSED = 2
  }

  /**
   * Enum for video stabilization mode.
   * @since 9
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
   enum VideoStabilizationMode {
    /**
     * Turn off video stablization.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    OFF = 0,
    /**
     * LOW mode provides basic stabilization effect.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    LOW = 1,
    /**
     * MIDDLE mode means algorithms can achieve better effects than LOW mode.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    MIDDLE = 2,
    /**
     * HIGH mode means algorithms can achieve better effects than MIDDLE mode.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    HIGH = 3,
    /**
     * Camera HDF can select mode automatically.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    AUTO = 4
  }

  /**
   * Capture session object.
   * @since 9
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  interface CaptureSession {
    /**
     * Begin capture session config.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    beginConfig(): void;

    /**
     * Commit capture session config.
     * @param callback Callback used to return the result.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    commitConfig(callback: AsyncCallback<void>): void;

    /**
     * Commit capture session config.
     * @return Promise used to return the result.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    commitConfig(): Promise<void>;

    /**
     * Adds a camera input.
     * @param cameraInput Target camera input to add.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    addInput(cameraInput: CameraInput): void;

    /**
     * Removes a camera input.
     * @param cameraInput Target camera input to remove.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    removeInput(cameraInput: CameraInput): void;

    /**
     * Adds a camera output.
     * @param cameraOutput Target camera output to add.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    addOutput(cameraOutput: CameraOutput): void;

    /**
     * Removes a camera output.
     * @param previewOutput Target camera output to remove.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    removeOutput(cameraOutput: CameraOutput): void;

    /**
     * Starts capture session.
     * @param callback Callback used to return the result.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    start(callback: AsyncCallback<void>): void;

    /**
     * Starts capture session.
     * @return Promise used to return the result.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    start(): Promise<void>;

    /**
     * Stops capture session.
     * @param callback Callback used to return the result.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    stop(callback: AsyncCallback<void>): void;

    /**
     * Stops capture session.
     * @return Promise used to return the result.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    stop(): Promise<void>;

    /**
     * Release capture session instance.
     * @param callback Callback used to return the result.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    release(callback: AsyncCallback<void>): void;

    /**
     * Release capture session instance.
     * @return Promise used to return the result.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    release(): Promise<void>;

    /**
     * Check if device has flash light.
     * @return The flash light support status.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    hasFlash(): boolean;

    /**
     * Checks whether a specified flash mode is supported.
     * @param flashMode Flash mode
     * @return Is the flash mode supported.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    isFlashModeSupported(flashMode: FlashMode): boolean;

    /**
     * Gets current flash mode.
     * @return The current flash mode.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    getFlashMode(): FlashMode;

    /**
     * Sets flash mode.
     * @param flashMode Target flash mode.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    setFlashMode(flashMode: FlashMode): void;

    /**
     * Checks whether a specified exposure mode is supported.
     * @param aeMode Exposure mode
     * @return Is the exposure mode supported.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    isExposureModeSupported(aeMode: ExposureMode): boolean;
 
    /**
     * Gets current exposure mode.
     * @return The current exposure mode.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    getExposureMode(): ExposureMode;

     /**
      * Sets Exposure mode.
      * @param aeMode Exposure mode
      * @since 9
      * @syscap SystemCapability.Multimedia.Camera.Core
      * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
      */
    setExposureMode(aeMode: ExposureMode): void;

    /**
     * Gets current metering point.
     * @return The current metering point.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    getMeteringPoint(): Point;

    /**
     * Set the center point of the metering area.
     * @param point metering point
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    setMeteringPoint(point: Point): void;

    /**
     * Query the exposure compensation range.
     * @return The array of compenstation range.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    getExposureBiasRange(): Array<number>;

    /**
     * Set exposure compensation.
     * @param exposureBias Exposure compensation
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    setExposureBias(exposureBias: number): void;

    /**
     * Query the exposure value.
     * @return The exposure value.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    getExposureValue(): number;

    /**
     * Checks whether a specified focus mode is supported.
     * @param afMode Focus mode.
     * @return Is the focus mode supported.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    isFocusModeSupported(afMode: FocusMode): boolean;

    /**
     * Gets current focus mode.
     * @return The current focus mode.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    getFocusMode(): FocusMode;

    /**
     * Sets focus mode.
     * @param afMode Target focus mode.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    setFocusMode(afMode: FocusMode): void;

    /**
     * Sets focus point.
     * @param afMode Target focus point.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    setFocusPoint(point: Point): void;

    /**
     * Gets current focus point.
     * @return The current focus point.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    getFocusPoint(): Point;

    /**
     * Gets current focal length.
     * @return The current focal point.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    getFocalLength(): number;

    /**
     * Gets all supported zoom ratio range.
     * @return The zoom ratio range.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    getZoomRatioRange(): Array<number>;

    /**
     * Gets zoom ratio.
     * @return The zoom ratio value.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    getZoomRatio(): number;

    /**
     * Sets zoom ratio.
     * @param zoomRatio Target zoom ratio.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    setZoomRatio(zoomRatio: number): void;

    /**
     * Check whether the specified video stabilization mode is supported.
     * @param callback Callback used to return if video stablization mode is supported.
     * @return Is flash mode supported.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    isVideoStablizationModeSupported(vsMode: VideoStabilizationMode): boolean;

    /**
     * Query the video stabilization mode currently in use.
     * @return The current video stabilization mode.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    getActiveVideoStabilizationMode(): VideoStabilizationMode;

    /**
     * Set video stabilization mode.
     * @param mode video stabilization mode to set.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    setVideoStabilizationMode(mode: VideoStabilizationMode): void;

    /**
     * Subscribes focus status change event callback.
     * @param type Event type.
     * @param callback Callback used to get the focus state change.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void;

    /**
     * Subscribes error event callback.
     * @param type Event type.
     * @param callback Callback used to get the capture session errors.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    on(type: 'error', callback: ErrorCallback<BusinessError>): void;
  }

  /**
   * Camera output object.
   * @since 9
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  interface CameraOutput {
    /**
     * Release output instance.
     * @param callback Callback used to return the result.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    release(callback: AsyncCallback<void>): void;

    /**
     * Release output instance.
     * @return Promise used to return the result.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    release(): Promise<void>;
  }

  /**
   * Preview output object.
   * @since 9
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  interface PreviewOutput extends CameraOutput {
    /**
     * Start output instance.
     * @param callback Callback used to return the result.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    start(callback: AsyncCallback<void>): void;

    /**
     * Start output instance.
     * @return Promise used to return the result.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    start(): Promise<void>;

    /**
     * Stop output instance.
     * @param callback Callback used to return the result.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    stop(callback: AsyncCallback<void>): void;

    /**
     * Stop output instance.
     * @return Promise used to return the result.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    stop(): Promise<void>;

    /**
     * Subscribes frame start event callback.
     * @param type Event type.
     * @param callback Callback used to return the result.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    on(type: 'frameStart', callback: AsyncCallback<void>): void;

    /**
     * Subscribes frame end event callback.
     * @param type Event type.
     * @param callback Callback used to return the result.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    on(type: 'frameEnd', callback: AsyncCallback<void>): void;

    /**
     * Subscribes error event callback.
     * @param type Event type.
     * @param callback Callback used to get the preview output errors.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    on(type: 'error', callback: ErrorCallback<BusinessError>): void;
  }

  /**
   * Enumerates the image rotation angles.
   * @since 9
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  enum ImageRotation {
    /**
     * The capture image rotates 0 degrees.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    ROTATION_0 = 0,

    /**
     * The capture image rotates 90 degrees.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    ROTATION_90 = 90,

    /**
     * The capture image rotates 180 degrees.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    ROTATION_180 = 180,

    /**
     * The capture image rotates 270 degrees.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    ROTATION_270 = 270
  }

  interface Location {
    /**
     * Latitude.
     * @since 9
     */
    latitude: number;

    /**
     * Longitude.
     * @since 9
     */
    longitude: number;

    /**
     * Altitude.
     * @since 9
     */
    altitude: number;
  }

  /**
   * Enumerates the image quality levels.
   * @since 9
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  enum QualityLevel {
    /**
     * High image quality.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    QUALITY_LEVEL_HIGH = 0,

    /**
     * Medium image quality.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    QUALITY_LEVEL_MEDIUM = 1,

    /**
     * Low image quality.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    QUALITY_LEVEL_LOW = 2
  }

  /**
   * Photo capture options to set.
   * @since 9
   */
  interface PhotoCaptureSetting {
    /**
     * Photo image quality.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    quality?: QualityLevel;

    /**
     * Photo rotation.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    rotation?: ImageRotation;

    /**
     * Photo location.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    location?: Location;

    /**
     * Set the mirror photo function switch, default to false.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    mirror?: boolean;
  }

  /**
   * Photo output object.
   * @since 9
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  interface PhotoOutput extends CameraOutput {
    /**
     * Get default capture setting.
     * @return The default capture setting.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    getDefaultCaptureSetting(): PhotoCaptureSetting;

    /**
     * Start capture output.
     * @param callback Callback used to return the result.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    capture(callback: AsyncCallback<void>): void;

    /**
     * Start capture output.
     * @return Promise used to return the result.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
     capture(): Promise<void>;

    /**
     * Start capture output.
     * @param setting Photo capture settings.
     * @param callback Callback used to return the result.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    capture(setting: PhotoCaptureSetting, callback: AsyncCallback<void>): void;

    /**
     * Start capture output.
     * @param setting Photo capture settings.
     * @return Promise used to return the result.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    capture(setting?: PhotoCaptureSetting): Promise<void>;

    /**
     * Check whether to support mirror photo.
     * @return Is the mirror supported.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    isMirrorSupported(): boolean;

    /**
     * Subscribes capture start event callback.
     * @param type Event type.
     * @param callback Callback used to get the capture ID.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    on(type: 'captureStart', callback: AsyncCallback<number>): void;

    /**
     * Subscribes frame shutter event callback.
     * @param type Event type.
     * @param callback Callback used to get the frame shutter information.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    on(type: 'frameShutter', callback: AsyncCallback<FrameShutterInfo>): void;

    /**
     * Subscribes capture end event callback.
     * @param type Event type.
     * @param callback Callback used to get the capture end information.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    on(type: 'captureEnd', callback: AsyncCallback<CaptureEndInfo>): void;

    /**
     * Subscribes error event callback.
     * @param type Event type.
     * @param callback Callback used to get the photo output errors.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    on(type: 'error', callback: ErrorCallback<BusinessError>): void;
  }

  /**
   * Frame shutter callback info.
   * @since 9
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  interface FrameShutterInfo {
    /**
     * Capture id.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    captureId: number;
    /**
     * Timestamp for frame.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    timestamp: number;
  }

  /**
   * Capture end info.
   * @since 9
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  interface CaptureEndInfo {
    /**
     * Capture id.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    captureId: number;
    /**
     * Frame count.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    frameCount: number;
  }

  /**
   * Video output object.
   * @since 9
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  interface VideoOutput extends CameraOutput {
    /**
     * Start video output.
     * @param callback Callback used to return the result.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    start(callback: AsyncCallback<void>): void;

    /**
     * Start video output.
     * @return Promise used to return the result.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    start(): Promise<void>;

    /**
     * Stop video output.
     * @param callback Callback used to return the result.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    stop(callback: AsyncCallback<void>): void;

    /**
     * Stop video output.
     * @return Promise used to return the result.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    stop(): Promise<void>;

    /**
     * Subscribes frame start event callback.
     * @param type Event type.
     * @param callback Callback used to return the result.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    on(type: 'frameStart', callback: AsyncCallback<void>): void;

    /**
     * Subscribes frame end event callback.
     * @param type Event type.
     * @param callback Callback used to return the result.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    on(type: 'frameEnd', callback: AsyncCallback<void>): void;

    /**
     * Subscribes error event callback.
     * @param type Event type.
     * @param callback Callback used to get the video output errors.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    on(type: 'error', callback: ErrorCallback<BusinessError>): void;
  }

  /**
   * Metadata object type.
   * @since 9
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  enum MetadataObjectType {
    FACE_DETECTION = 0
  }

  /**
   * Rectangle definition.
   * @since 9
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  interface Rect {
    /**
     * X coordinator of top left point.
     * @param Promise used to return the result.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    topLeftX: number;
    /**
     * Y coordinator of top left point.
     * @param Promise used to return the result.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    topLeftY: number;
    /**
     * Width of this rectangle.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    width: number;
    /**
     * Height of this rectangle.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    height: number;
  }

  /**
   * Metadata object basis.
   * @since 9
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  interface MetadataObject {
    /**
     * Metadata object type.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
     readonly type: MetadataObjectType;
    /**
     * Metadata object timestamp in milliseconds.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
     readonly timestamp: number;
    /**
     * The axis-aligned bounding box of detected metadata object.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
     readonly boundingBox: Rect;
  }

  /**
   * Metadata Output object
   * @since 9
   * @syscap SystemCapability.Multimedia.Camera.Core
   */
  interface MetadataOutput extends CameraOutput {
    /**
     * Start output metadata
     * @param callback Callback used to return the result.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    start(callback: AsyncCallback<void>): void;

    /**
     * Start output metadata
     * @return Promise used to return the result.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    start(): Promise<void>;

    /**
     * Stop output metadata
     * @param callback Callback used to return the result.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    stop(callback: AsyncCallback<void>): void;

    /**
     * Stop output metadata
     * @return Promise used to return the result.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @throws Throws this exception if any of the following errors occurs:{@link CameraErrorCode}.
     */
    stop(): Promise<void>;

    /**
     * Subscribes to metadata objects available event callback.
     * @param type Event type.
     * @param callback Callback used to get the available metadata objects.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    on(type: 'metadataObjectsAvailable', callback: AsyncCallback<Array<MetadataObject>>): void;

    /**
     * Subscribes error event callback.
     * @param type Event type.
     * @param callback Callback used to get the video output errors.
     * @since 9
     * @syscap SystemCapability.Multimedia.Camera.Core
     */
    on(type: 'error', callback: ErrorCallback<BusinessError>): void;
  }
}

export default camera;
