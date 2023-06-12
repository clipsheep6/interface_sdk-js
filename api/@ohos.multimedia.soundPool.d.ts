/*
* Copyright (C) 2021 Huawei Device Co., Ltd.
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

import { ErrorCallback, AsyncCallback, Callback } from './@ohos.base';
import audio from "./@ohos.multimedia.audio";

/**
 * @name soundPool
 * @since 10
 */
declare namespace soundPool {
  /**
   * Creates an soundPool instance.
   * @since 10
   * @syscap SystemCapability.Multimedia.SoundPool
   * @param maxStreams The maximum number of simultaneous streams for this soundPool instance
   * @param audioRenderInfo Audio renderer information
   * @param callback Callback used to return AVPlayer instance if the operation is successful; returns null otherwise.
   * @throws { BusinessError } 5400101 - No memory. Return by callback.
   */
  function createSoundPool(maxStreams: number, audioRenderInfo: audio.AudioRendererInfo,  callback: AsyncCallback<SoundPool>): void;

  /**
   * Creates an soundPool instance.
   * @since 10
   * @syscap SystemCapability.Multimedia.SoundPool
   * @param maxStreams The maximum number of simultaneous streams for this soundPool instance
   * @param audioRenderInfo Audio renderer information
   * @returns A Promise instance used to return SoundPool instance if the operation is successful; returns null otherwise.
   * @throws { BusinessError } 5400101 - No memory. Return by promise.
   */
  function createSoundPool(maxStreams: number, audioRenderInfo: audio.AudioRendererInfo): Promise<SoundPool>;

  /**
   * Manages and plays sound. Before calling an SoundPool method, you must use createSoundPool()
   * to create an SoundPool instance.
   * @since 9
   * @syscap SystemCapability.Multimedia.SoundPool
   */
  interface SoundPool {
    /**
     * Load the sound from the specified path.
     * @since 10
     * @syscap SystemCapability.Multimedia.SoundPool
     * @param path The path to the audio file
     * @param callback Callback used to return the result.
     */
    load(path: string, callback: AsyncCallback<void>): void;
    /**
     * Load the sound from the specified path.
     * @since 10
     * @syscap SystemCapability.Multimedia.SoundPool
     * @param path The path to the audio file
     * @returns Promise used to return the result.
     */
    load(path: string): Promise<void>;
    /**
     * Load the sound from a FileDescriptor.
     * @since 10
     * @syscap SystemCapability.Multimedia.SoundPool
     * @param fd a FileDescriptor object
     * @param offset offset to the start of the sound
     * @param length length of the sound
     * @param callback Callback used to return the result.
     */
    load(fd: number, offset: number, length: number, callback: AsyncCallback<void>): void;
    /**
     * Load the sound from a FileDescriptor.
     * @since 10
     * @syscap SystemCapability.Multimedia.SoundPool
     * @param fd a FileDescriptor object
     * @param offset offset to the start of the sound
     * @param length length of the sound
     * @returns Promise used to return the result.
     */
    load(fd: number, offset: number, length: number): Promise<void>;
    /**
     * Play a sound from a sound ID.
     * @since 10
     * @syscap SystemCapability.Multimedia.SoundPool
     * @param soundID returned by the load()
     * @param params player parameters
     * @param callback Callback used to return a non-zero streamID if successful, zero if it fails.
     */
    play(soundID: number, params: PlayParameters, callback: AsyncCallback<number>): void;
    /**
     * Play a sound from a sound ID.
     * @since 10
     * @syscap SystemCapability.Multimedia.SoundPool
     * @param soundID returned by the load()
     * @param params player parameters
     * @returns Returns a non-zero streamID if successful, zero if it fails.
     */
    play(soundID: number, params: PlayParameters): Promise<number>;
    /**
     * Stop a stream which is playing.
     * @since 10
     * @syscap SystemCapability.Multimedia.SoundPool
     * @param streamID returned by the play()
     * @param callback Callback used to return the result.
     */
     stop(streamID: number, callback: AsyncCallback<void>): void;
     /**
      * Stop a stream which is playing.
      * @since 10
      * @syscap SystemCapability.Multimedia.SoundPool
      * @param streamID returned by the play()
      * @returns Promise used to return the result.
      */
    stop(streamID: number): Promise<void>;
    /**
     * set loop mode.
     * @since 10
     * @syscap SystemCapability.Multimedia.SoundPool
     * @param streamID returned by the play()
     * @param loop loop mode (0 = no loop, -1 = loop forever)
     */
    setLoop(streamID: number, loop: number): void;
    /**
     * set stream priority.
     * @since 10
     * @syscap SystemCapability.Multimedia.SoundPool
     * @param streamID returned by the play()
     * @param priority stream priority (0 = lowest priority)
     */
    setPriority(streamID: number, priority: number): void;
    /**
     * Set playback rate. 
     * @since 10
     * @syscap SystemCapability.Multimedia.SoundPool
     * @param streamID returned by the play()
     * @param rate playback rate
     */
    setRate(streamID: number, rate: audio.AudioRendererRate): void;
    /**
     * Set stream volume. 
     * @since 10
     * @syscap SystemCapability.Multimedia.SoundPool
     * @param streamID returned by the play()
     * @param leftVolume volume value(range = 0.0 to 1.0),current leftVolume = rightVolume
     * @param rightVolume volume value(range = 0.0 to 1.0),current leftVolume = rightVolume
     */
    setVolume(streamID: number, leftVolume: number, rightVolume: number): void;
    /**
     * Unload a sound from a sound ID.
     * @since 10
     * @syscap SystemCapability.Multimedia.SoundPool
     * @param soundID returned by the load()
     * @param callback Callback used to return the result.
     */
    unload(soundID: number, callback: AsyncCallback<void>): void;
    /**
     * Unload a sound from a sound ID.
     * @since 10
     * @syscap SystemCapability.Multimedia.SoundPool
     * @param soundID returned by the load()
     * @returns Promise used to return the result.
     */
    unload(soundID: number): Promise<void>;
    /**
     * Releases the soundPool. This method uses an asynchronous callback to return the result.
     * @since 10
     * @syscap SystemCapability.Multimedia.SoundPool
     * @param callback Callback used to return the result.
     */
     release(callback: AsyncCallback<void>): void;
     /**
      * Releases the soundPool. This method uses a promise to return the result.
      * @since 10
      * @syscap SystemCapability.Multimedia.SoundPool
      * @returns Promise used to return the result.
      */
     release(): Promise<void>;
     /**
     * Register or unregister listens for load result event.
     * @since 10
     * @syscap SystemCapability.Multimedia.SoundPool
     * @param type Type of the play finish event to listen for.
     * @param callback Callback used to listen for load result event
     */
      on(type: 'loadComplete', callback: Callback<number>): void;
      off(type: 'loadComplete'): void;
     /**
     * Register or unregister listens for play finish event.
     * @since 10
     * @syscap SystemCapability.Multimedia.SoundPool
     * @param type Type of the play finish event to listen for.
     * @param callback Callback used to listen for the play finish
     */
     on(type: 'playFinished', callback: Callback<void>): void;
     off(type: 'playFinished'): void;
  }
  /**
   * Describes play parameters.
   * @since 10
   * @syscap SystemCapability.Multimedia.SoundPool
   */
  interface PlayParameters {
    /**
     * loop mode (0 = no loop, -1 = loop forever)
     * @since 10
     * @syscap SystemCapability.Multimedia.SoundPool
     */
    loop: number;
    /**
     * playback rate
     * @since 10
     * @syscap SystemCapability.Multimedia.SoundPool
     */
    rate: number;
    /**
     * left volume value(range = 0.0 to 1.0),current leftVolume = rightVolume
     * @since 10
     * @syscap SystemCapability.Multimedia.SoundPool
     */
    leftVolume: number;
    /**
     * right volume value(range = 0.0 to 1.0),current leftVolume = rightVolume
     * @since 10
     * @syscap SystemCapability.Multimedia.SoundPool
     */
    rightVolume: number;
    /**
     * stream priority (0 = lowest priority)
     * @since 10
     * @syscap SystemCapability.Multimedia.SoundPool
     */
    priority: number;
  }

}
export default soundPool;