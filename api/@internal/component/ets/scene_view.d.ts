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
 * Define three states for playback.
 * @since 8
 */
declare enum PlayBackState {
    /**
     * Defines the state of playing.
     * @since 8
     */
    PLAY = 0,

    /**
     * Defines the state of pausing.
     * @since 8
     */
    PAUSE = 1,

    /**
     * Defines the state of stopping
     * @since 8
     */
    STOP = 2,
}

/**
 * Position of the camera with absolute co-oridinates.
 * @since 8
 */
declare interface SceneViewPosition {
    /**
     * Coordinate x of the Position.
     * @since 8
     */
    xDeg: Length;

    /**
     * Coordinate y of the Position.
     * @since 8
     */
    yDeg: Length;

    /**
     * Coordinate z of the Position.
     * @since 8
     */
    zDeg: Length;

    /**
     * Coordinate distance of the Position.
     * @since 8
     */
    distance: Length;
}

/**
 * Current prototype supports rotation w.r.t one axis at a time.
 * @since 8
 */
declare interface SceneViewAxis {
    /**
     * Coordinate x of the Axis.
     * @since 8
     */
    x: Length;

    /**
     * Coordinate y of the Axis.
     * @since 8
     */
    y: Length;

    /**
     * Coordinate z of the Axis.
     * @since 8
     */
    z: Length;
}

/**
 * A camera's direction of view is by default along the z-axis.
 * @since 8
 */
declare interface SceneViewCameraOption {
    /**
     * Defines the camera's near depth limit.
     * @since 8
     */
    zNear?: Length;

    /**
     * Defines the camera's far depth limit.
     * @since 8
     */
    zFar?: Length;
    fovD?: Length;

    /**
     * Defines the vertical or horizontal viewing angel of the camera.
     * @since 8
     */
    fieldOfView?: Length;

    /**
     * Defines position of the camera.
     * @since 8
     */
    position?: SceneViewPosition;

    /**
     * Defines the current prototype support rotation.
     * @since 8
     */
    rotation?: {angle?: Length, axis?: SceneViewAxis};
}

/**
 * Define the light api
 * @since 8
 */
declare interface SceneViewLight {
    /**
     * Defines DIRECTIONAL = 1/POINT = 2/SPOT = 3.
     * @since 8
     */
    type?: Length;

    /**
     * Defines the intensity of the light.
     * @since 8
     */
    intensity?: Length;

    /**
     * Defines the shadow is supported for directional and spot lights.
     * @since 8
     */
    shadow?: boolean;

    /**
     * Defines the color of the light.
     * @since 8
     */
    color?: ResourceColor;

    /**
     * Defines position of the camera.
     * @since 8
     */
    position?: SceneViewPosition;

    /**
     * Defines rotation of current prototype.
     * @since 8
     */
    rotation?: {angle?: Length, axis?: SceneViewAxis};
}

/**
 * Defines the properties of animation.
 * @since 8
 */
declare interface SceneViewGlTfAnimation {
    /**
     * Defines the name of the animation.
     * @since 8
     */
    name?: string;

    /**
     * Defines the state of the playback.
     * @since 8
     */
    state?: PlayBackState;

    /**
     * Defines the number of times animation is repeated.
     * @since 8
     */
    repeatCount?: Length;

    /**
     * Defines the speed for animation.
     * @since 8
     */
    speed?: Length;

    /**
     * Defines the palyback duration in seconds.
     * @since 8
     */
    duration?: Length;

    /**
     * Defines the time point of the callback.
     * @since 8
     */
    callbackTimePoint?: Length;

    /**
     * Defines the callback of the animation.
     * @since 8
     */
    callback?: () => void;
}

/**
 * Provides an interface for camera view.
 * @since 8
 */
interface SceneViewInterface {
    /**
     * Set src to obtain sceneView.
     * @since 8
     */
    (src: { gltfSrc: string | Resource }): SceneViewAttribute;
}

declare class SceneViewAttribute extends CommonMethod<SceneViewAttribute> {
    /**
     * Modifier that defines a point of view.
     * @since 8 
     */
    camera(value: SceneViewCameraOption): SceneViewAttribute;

    /**
     * Configure the light.
     * @since 8
     */
    light(value: SceneViewLight): SceneViewAttribute;

    /**
     * Set the resource of background.
     * @since 8
     */
    background(value: string | Resource): SceneViewAttribute;

    /**
     * Indicate whether the view is transparent or not.
     * @since 8
     */
    transparent(value: boolean): SceneViewAttribute;

    /**
     * Handle animation state and other properties.
     * @since 8
     */
    glTFAnimation(value: SceneViewGlTfAnimation): SceneViewAttribute;

    /**
     * Set the behaviour can be enabled or disabled through the modifier.
     * @since 8
     */
    setHandleCameraMove(value: boolean): SceneViewAttribute;
}

declare const SceneViewInstance: SceneViewAttribute;
declare const SceneView: SceneViewInterface;