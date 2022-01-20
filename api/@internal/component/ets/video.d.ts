/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
 */

/**
 * Seek mode.
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum SeekMode {
  /**
   * Sync to keyframes before the time point.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  PreviousSync,

  /**
   * Sync to keyframes after the time point.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  NextSync,

  /**
   * Sync to closest keyframes.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  ClosestSync,

   /**
   * Seek to frames closest the time point.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  Closest,
}

/**
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare class VideoController {
  /**
   * constructor.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  constructor();

  /**
   * Provides events to play.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  start();

  /**
   * Provides a pause event for playback.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  pause();

  /**
   * Provide the progress method of video playback.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  setCurrentTime(value: number);

  /**
   * Provide the progress method of video playback.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  setCurrentTime(value: number, seekMode: SeekMode);
}

/**
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
interface VideoInterface {
  /**
   * Set the value.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  (value: {
    src?: string | Resource;
    previewUri?: string | PixelMap | Resource;
    controller?: VideoController;
  }): VideoAttribute;
}

/**
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare class VideoAttribute extends CommonMethod<VideoAttribute> {
  /**
   * Called when judging whether the video is muted.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  muted(value: boolean): VideoAttribute;

  /**
   * Called when judging whether the video is played automatically.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  autoPlay(value: boolean): VideoAttribute;

  /**
   * Called when judging whether the control bar is displayed.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  controls(value: boolean): VideoAttribute;

  /**
   * Called when judging whether the video is played circular.
   * @since 6
* @Syscap SystemCapability.ArkUI.Standard
* @Syscap SystemCapability.ArkUI.Standard
* @Syscap SystemCapability.ArkUI.Standard
* @Syscap SystemCapability.ArkUI.Standard
   */
  loop(value: boolean): VideoAttribute;

  /**
   * Called when determining the zoom type of the video source.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  objectFit(value: ImageFit): VideoAttribute;

  /**
   * Called when the video is played.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onStart(event: () => void): VideoAttribute;

  /**
   * Called when the video is paused.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onPause(event: () => void): VideoAttribute;

  /**
   * Called when the video playback ends.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onFinish(event: () => void): VideoAttribute;

  /**
   * Called when the video preparation is complete.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onPrepared(callback: (event?: { duration: number }) => void): VideoAttribute;

  /**
   * Called when the time information is reported when the progress bar process is operated.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onSeeking(callback: (event?: { time: number }) => void): VideoAttribute;

  /**
   * Called when the playback time information is reported after the operation progress bar is completed.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onSeeked(callback: (event?: { time: number }) => void): VideoAttribute;

  /**
   * Called when the playback progress changes.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onUpdate(callback: (event?: { time: number }) => void): VideoAttribute;

  /**
   * Called when playback fails.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onError(event: () => void): VideoAttribute;
}

declare const Video: VideoInterface;
declare const VideoInstance: VideoAttribute;
