/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * @file
 * @kit ArkUI
 */

/*** if arkts 1.2 */
import { Resource } from '../../global/resource';
import { ImageAIOptions, ImageAnalyzerConfig } from './imageCommon';
import { ImageFit } from './enums';
import { CommonMethod, Callback, PixelMap } from './common';
import { VoidCallback, ColorMetrics } from './units';
/*** endif */

/**
 * Seek mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Seek mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Seek mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare enum SeekMode {
  /**
   * Sync to keyframes before the time point.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sync to keyframes before the time point.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sync to keyframes before the time point.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  PreviousKeyframe,

  /**
   * Sync to keyframes after the time point.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sync to keyframes after the time point.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sync to keyframes after the time point.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  NextKeyframe,

  /**
   * Sync to closest keyframes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sync to closest keyframes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sync to closest keyframes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  ClosestKeyframe,

  /**
   * Seek to frames closest the time point.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Seek to frames closest the time point.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Seek to frames closest the time point.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  Accurate,
}

/**
 * playback speed.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * playback speed.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * playback speed.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare enum PlaybackSpeed {
  /**
   * 0.75x speed playback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * 0.75x speed playback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * 0.75x speed playback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  Speed_Forward_0_75_X,

  /**
   * 1.00x speed playback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * 1.00x speed playback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * 1.00x speed playback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  Speed_Forward_1_00_X,

  /**
   * 1.25x speed playback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * 1.25x speed playback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * 1.25x speed playback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  Speed_Forward_1_25_X,

  /**
   * 1.75x speed playback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * 1.75x speed playback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * 1.75x speed playback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  Speed_Forward_1_75_X,

  /**
   * 2.00x speed playback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * 2.00x speed playback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * 2.00x speed playback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  Speed_Forward_2_00_X,
}

/**
 * Fullscreen information of the video.
 *
 * @typedef FullscreenInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'18','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface FullscreenInfo {
  /**
   * The flag whether play in full screen.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The flag whether play in full screen.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * The flag whether play in full screen.
   * Anonymous Object Rectification.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fullscreen: boolean;
}

/**
 * Prepared information of the video.
 *
 * @typedef PreparedInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'18','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface PreparedInfo {
  /**
   * The duration of the current video, in seconds.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The duration of the current video, in seconds.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * The duration of the current video, in seconds.
   * Anonymous Object Rectification.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  duration: number;
}

/**
 * Playback information of the video.
 *
 * @typedef PlaybackInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'18','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface PlaybackInfo {
  /**
   * The current video playback progress, expressed in seconds.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The current video playback progress, expressed in seconds.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * The current video playback progress, expressed in seconds.
   * Anonymous Object Rectification.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  time: number;
}

/**
 * Defines the video poster options.
 *
 * @interface PosterOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since arkts {'1.1':'18','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface PosterOptions {
  /**
   * Whether to display the first frame of video on prepared status of AVPlayer.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  showFirstFrame?: boolean;
}

/**
 * Defines the video options.
 *
 * @interface VideoOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the video options.
 *
 * @interface VideoOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the video options.
 *
 * @interface VideoOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
/**
 * Defines the video options.
 *
 * @interface VideoOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface VideoOptions {
  /**
   * src of video.
   *
   * @type { ?(string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * src of video.
   *
   * @type { ?(string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * src of video.
   *
   * @type { ?(string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  src?: string | Resource;

  /**
   * playback rate of video.
   *
   * @type { ?(number | string | PlaybackSpeed) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * playback rate of video.
   *
   * @type { ?(number | string | PlaybackSpeed) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * playback rate of video.
   *
   * @type { ?(number | string | PlaybackSpeed) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  currentProgressRate?: number | string | PlaybackSpeed;

  /**
   * preview uri of video.
   *
   * @type { ?(string | PixelMap | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * preview uri of video.
   *
   * @type { ?(string | PixelMap | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * preview uri of video.
   *
   * @type { ?(string | PixelMap | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  previewUri?: string | PixelMap | Resource;

  /**
   * controller of video.
   *
   * @type { ?VideoController }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * controller of video.
   *
   * @type { ?VideoController }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * controller of video.
   *
   * @type { ?VideoController }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  controller?: VideoController;

  /**
   * image ai options of video.
   *
   * @type { ?ImageAIOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  imageAIOptions?: ImageAIOptions;

  /**
   * poster options of video.
   *
   * @type { ?PosterOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  posterOptions?: PosterOptions;
}

/**
 * Defines the video controller.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the video controller.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the video controller.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11', '1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class VideoController {
  /**
   * constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  constructor();

  /**
   * Provides events to play.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Provides events to play.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Provides events to play.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  start();

  /**
   * Provides events to play.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  start(): void;

  /**
   * Provides a pause event for playback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Provides a pause event for playback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Provides a pause event for playback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  pause();

  /**
   * Provides a pause event for playback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  pause(): void;

  /**
   * Provides an event to stop playback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Provides an event to stop playback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Provides an event to stop playback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  stop();

  /**
   * Provides an event to stop playback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  stop(): void;

  /**
   * Provide the progress method of video playback.
   *
   * @param { number } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Provide the progress method of video playback.
   *
   * @param { number } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Provide the progress method of video playback.
   *
   * @param { number } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  setCurrentTime(value: number);

  /**
   * Provide the progress method of video playback.
   *
   * @param { number } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  setCurrentTime(value: number): void;

  /**
   * Provides a full screen playback method.
   *
   * @param { boolean } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Provides a full screen playback method.
   *
   * @param { boolean } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Provides a full screen playback method.
   *
   * @param { boolean } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  requestFullscreen(value: boolean);

  /**
   * Provides a full screen playback method.
   *
   * @param { boolean } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  requestFullscreen(value: boolean): void;

  /**
   * Provides a method to exit full screen playback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Provides a method to exit full screen playback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Provides a method to exit full screen playback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  exitFullscreen();

  /**
   * Provides a method to exit full screen playback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  exitFullscreen(): void;

  /**
   * Provide the progress method of video playback.
   *
   * @param { number } value
   * @param { SeekMode } seekMode
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Provide the progress method of video playback.
   *
   * @param { number } value
   * @param { SeekMode } seekMode
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Provide the progress method of video playback.
   *
   * @param { number } value
   * @param { SeekMode } seekMode
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  setCurrentTime(value: number, seekMode: SeekMode);

  /**
   * Provide the progress method of video playback.
   *
   * @param { number } value
   * @param { SeekMode } seekMode
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  setCurrentTime(value: number, seekMode: SeekMode): void;

  /**
   * Provide the reset method of video playback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  reset(): void;
}

/**
 * Defines the video interface.
 *
 * @interface VideoInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the video interface.
 *
 * @interface VideoInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the video interface.
 *
 * @interface VideoInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface VideoInterface {
  /**
   * Set the value.
   *
   * @param { VideoOptions } value
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Set the value.
   *
   * @param { VideoOptions } value
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set the value.
   *
   * @param { VideoOptions } value
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  (value: VideoOptions): VideoAttribute;
}

/**
 * Defines the video attribute functions.
 *
 * @extends CommonMethod<VideoAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the video attribute functions.
 *
 * @extends CommonMethod<VideoAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the video attribute functions.
 *
 * @extends CommonMethod<VideoAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class VideoAttribute extends CommonMethod<VideoAttribute> {
  /**
   * Called when judging whether the video is muted.
   *
   * @param { boolean } value
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when judging whether the video is muted.
   *
   * @param { boolean } value
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when judging whether the video is muted.
   *
   * @param { boolean } value
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  muted(value: boolean): VideoAttribute;

  /**
   * Called when judging whether the video is played automatically.
   *
   * @param { boolean } value
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when judging whether the video is played automatically.
   *
   * @param { boolean } value
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when judging whether the video is played automatically.
   *
   * @param { boolean } value
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  autoPlay(value: boolean): VideoAttribute;

  /**
   * Called when judging whether the control bar is displayed.
   *
   * @param { boolean } value
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when judging whether the control bar is displayed.
   *
   * @param { boolean } value
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when judging whether the control bar is displayed.
   *
   * @param { boolean } value
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  controls(value: boolean): VideoAttribute;

  /**
   * Called when judging whether the video is played circular.
   *
   * @param { boolean } value
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 6
   */
  /**
   * Called when judging whether the video is played circular.
   *
   * @param { boolean } value
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when judging whether the video is played circular.
   *
   * @param { boolean } value
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  loop(value: boolean): VideoAttribute;

  /**
   * Called when determining the zoom type of the video source.
   *
   * @param { ImageFit } value
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when determining the zoom type of the video source.
   *
   * @param { ImageFit } value
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when determining the zoom type of the video source.
   *
   * @param { ImageFit } value
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  objectFit(value: ImageFit): VideoAttribute;

  /**
   * Called when the video is played.
   *
   * @param { function } event
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the video is played.
   *
   * @param { function } event
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the video is played.
   *
   * @param { function } event
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Called when the video is played.
   * Anonymous Object Rectification.
   *
   * @param { VoidCallback } event
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onStart(event: VoidCallback): VideoAttribute;

  /**
   * Called when the video is paused.
   *
   * @param { function } event
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the video is paused.
   *
   * @param { function } event
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the video is paused.
   *
   * @param { function } event
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Called when the video is paused.
   * Anonymous Object Rectification.
   *
   * @param { VoidCallback } event
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onPause(event: VoidCallback): VideoAttribute;

  /**
   * Called when the video playback ends.
   *
   * @param { function } event
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the video playback ends.
   *
   * @param { function } event
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the video playback ends.
   *
   * @param { function } event
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Called when the video playback ends.
   * Anonymous Object Rectification.
   *
   * @param { VoidCallback } event
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onFinish(event: VoidCallback): VideoAttribute;

  /**
   * Called when the video enters and exits the full screen.
   *
   * @param { function } callback
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the video enters and exits the full screen.
   *
   * @param { function } callback
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the video enters and exits the full screen.
   *
   * @param { function } callback
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Called when the video enters and exits the full screen.
   * Anonymous Object Rectification.
   *
   * @param { Callback<FullscreenInfo> } callback
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onFullscreenChange(callback: Callback<FullscreenInfo>): VideoAttribute;

  /**
   * Called when the video preparation is complete.
   *
   * @param { function } callback
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the video preparation is complete.
   *
   * @param { function } callback
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the video preparation is complete.
   *
   * @param { function } callback
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Called when the video preparation is complete.
   * Anonymous Object Rectification.
   *
   * @param { Callback<PreparedInfo> } callback
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onPrepared(callback: Callback<PreparedInfo>): VideoAttribute;

  /**
   * Called when the time information is reported when the progress bar process is operated.
   *
   * @param { function } callback
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the time information is reported when the progress bar process is operated.
   *
   * @param { function } callback
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the time information is reported when the progress bar process is operated.
   *
   * @param { function } callback
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Called when the time information is reported when the progress bar process is operated.
   * Anonymous Object Rectification.
   *
   * @param { Callback<PlaybackInfo> } callback
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onSeeking(callback: Callback<PlaybackInfo>): VideoAttribute;

  /**
   * Called when the playback time information is reported after the operation progress bar is completed.
   *
   * @param { function } callback
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the playback time information is reported after the operation progress bar is completed.
   *
   * @param { function } callback
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the playback time information is reported after the operation progress bar is completed.
   *
   * @param { function } callback
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Called when the playback time information is reported after the operation progress bar is completed.
   * Anonymous Object Rectification.
   *
   * @param { Callback<PlaybackInfo> } callback
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onSeeked(callback: Callback<PlaybackInfo>): VideoAttribute;

  /**
   * Called when the playback progress changes.
   *
   * @param { function } callback
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the playback progress changes.
   *
   * @param { function } callback
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the playback progress changes.
   *
   * @param { function } callback
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Called when the playback progress changes.
   * Anonymous Object Rectification.
   *
   * @param { Callback<PlaybackInfo> } callback
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onUpdate(callback: Callback<PlaybackInfo>): VideoAttribute;

  /**
   * Called when playback fails.
   *
   * @param { function } event
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when playback fails.
   *
   * @param { function } event
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when playback fails.
   *
   * @param { function } event
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Called when playback fails.
   *
   * @param { VoidCallback | import('../api/@ohos.base').ErrorCallback } event
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  onError(event: VoidCallback | import('../api/@ohos.base').ErrorCallback): VideoAttribute;
  
  /**
   * Called when playback fails.
   *
   * @param { function } event
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  onError(event: () => void): VideoAttribute;

  /**
   * Called when the video is stopped.
   *
   * @param { Callback<void> } event
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onStop(event: Callback<void>): VideoAttribute;

  /**
   * Enable image analyzer.
   *
   * @param { boolean } enable
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enableAnalyzer(enable: boolean): VideoAttribute;

  /**
   * Set image analyzer with config.
   *
   * @param { ImageAnalyzerConfig } config
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  analyzerConfig(config: ImageAnalyzerConfig): VideoAttribute;

  /**
   * Set background color of the surface holden by Video(only support Color.Black and Color.Transparent). The default value is Color.Black.
   *
   * @param { ColorMetrics } color
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since arkts {'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  surfaceBackgroundColor(color: ColorMetrics): VideoAttribute;

  /**
   * Indicates whether to response shortcut key. The default value is false.
   * If the value is true, video will respond to the shortcut keys as follows:
   * Space key: play/pause the video.
   * Up/Down arrow key: turn up/down volume of the video.
   * Right/Left arrow key: fast forward/backward the video.
   *
   * @param { boolean } enabled
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enableShortcutKey(enabled: boolean): VideoAttribute;
}

/**
 * Defines Video Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Video Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines Video Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const Video: VideoInterface;

/**
 * Defines Video Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Video Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines Video Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const VideoInstance: VideoAttribute;
