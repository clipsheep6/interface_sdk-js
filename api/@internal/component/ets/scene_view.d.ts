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
 * @since 9
 */
 declare enum PlayBackState {
    /**
     * Defines the state of playing.
     * @since 9
     */
    PLAY = 0,

    /**
     * Defines the state of pausing.
     * @since 9
     */
    PAUSE = 1,

    /**
     * Defines the state of stopping
     * @since 9
     */
    STOP = 2,
}

/**
 * Position of the camera with absolute co-oridinates.
 * @since 9
 */
declare interface SceneViewPosition {
    /**
     * Coordinate x of the Position.
     * @since 9
     */
    xDeg: Length;

    /**
     * Coordinate y of the Position.
     * @since 9
     */
    yDeg: Length;

    /**
     * Coordinate z of the Position.
     * @since 9
     */
    zDeg: Length;

    /**
     * Coordinate distance of the Position.
     * @since 9
     */
    distance: Length;
}

/**
 * Current prototype supports rotation w.r.t one axis at a time.
 * @since 9
 */
declare interface SceneViewAxis {
    /**
     * Coordinate x of the Axis.
     * @since 9
     */
    x: Length;

    /**
     * Coordinate y of the Axis.
     * @since 9
     */
    y: Length;

    /**
     * Coordinate z of the Axis.
     * @since 9
     */
    z: Length;
}

/**
 * A camera's direction of view is by default along the z-axis.
 * @since 9
 */
declare interface SceneViewCameraOption {
    /**
     * Defines the camera's near depth limit.
     * @since 9
     */
    zNear?: Length;

    /**
     * Defines the camera's far depth limit.
     * @since 9
     */
    zFar?: Length;
    fovD?: Length;

    /**
     * Defines the vertical or horizontal viewing angel of the camera.
     * @since 9
     */
    fieldOfView?: Length;

    /**
     * Defines position of camera.
     * @since 9
     */
    position?: SceneViewPosition;

    /**
     * Defines the current prototype support rotation.
     * @since 9
     */
    rotation?: {angle?: Length, axis?: SceneViewAxis};
}

/**
 * Define the light api
 * @since 9
 */
declare interface SceneViewLight {
    /**
     * Defines DIRECTIONAL = 1/POINT = 2/SPOT = 3.
     * @since 9
     */
    type?: Length;

    /**
     * Defines the intensity of light.
     * @since 9
     */
    intensity?: Length;

    /**
     * Defines the shadow is supported for directional and spot lights.
     * @since 9
     */
    shadow?: boolean;

    /**
     * Defines the color of light.
     * @since 9
     */
    color?: ResourceColor;

    /**
     * Defines the position of camera.
     * @since 9
     */
    position?: SceneViewPosition;

    /**
     * Defines rotation of current prototype.
     * @since 9
     */
    rotation?: {angle?: Length, axis?: SceneViewAxis};
}

/**
 * Defines the properties of animation.
 * @since 9
 */
declare interface SceneViewGlTfAnimation {
    /**
     * Defines the name of animation.
     * @since 9
     */
    name?: string;

    /**
     * Defines the state of playback.
     * @since 9
     */
    state?: PlayBackState;

    /**
     * Defines the number of times animation is repeated.
     * @since 9
     */
    repeatCount?: Length;

    /**
     * Defines the speed for animation.
     * @since 9
     */
    speed?: Length;

    /**
     * Defines the mask for animation sequence.
     * @since 9
     */
    reverse?: boolean;

    /**
     * Defines the palyback duration in seconds.
     * @since 9
     */
    duration?: Length;

    /**
     * Defines the time point of callback.
     * @since 9
     */
    callbackTimePoint?: Length;

    /**
     * Defines the callback of animation.
     * @since 9
     */
    callback?: () => void;
}

/**
 * Defines the position of engine.
 * @since 9
 */
declare interface Vec3 {
    /**
     * Coordinate x of the Vec3.
     * @since 9
     */
    x: Length;

    /**
     * Coordinate y of the Vec3.
     * @since 9
     */
    y: Length;

    /**
     * Coordinate z of the Vec3.
     * @since 9
     */
    z: Length;
}

/**
 * Defines SVCube of the engine.
 * @since 9
 */
declare interface SVCube {
    /**
     * Defines the name of SVCube.
     * @since 9
     */
    name?: string;

    /**
     * Defines the width of SVCube.
     * @since 9
     */
    width?: Length;

    /**
     * Defines the height of SVCube.
     * @since 9
     */
    height?: Length;

    /**
     * Defines the depth of SVCube.
     * @since 9
     */
    depth?: Length;

    /**
     * Defines the position of SVCube.
     * @since 9
     */
    position?: Vec3;
}

/**
 * Defines SVSphere of the engine.
 * @since 9
 */
declare interface SVSphere {
    /**
     * Defines the name of SVSphere.
     * @since 9
     */
    name?: string;

    /**
     * Defines the radius of SVSphere.
     * @since 9
     */
    radius?: Length;

    /**
     * Defines the rings of SVSphere.
     * @since 9
     */
    rings?: Length;

    /**
     * Defines the sectors of SVSphere.
     * @since 9
     */
    sectors?: Length;

    /**
     * Defines the position of SVSphere.
     * @since 9
     */
    position?: Vec3;
}

/**
 * Defines SVCone of the engine.
 * @since 9
 */
declare interface SVCone {
    /**
     * Defines the name of SVCone.
     * @since 9
     */
    name?: string;

    /**
     * Defines the radius of SVCone.
     * @since 9
     */
    radius?: Length;

    /**
     * Defines the length of SVCone.
     * @since 9
     */
    length?: Length;

    /**
     * Defines the sectors of SVCone.
     * @since 9
     */
    sectors?: Length;

    /**
     * Defines the position of SVCone.
     * @since 9
     */
    position?: Vec3;
}

/**
 * Provides an interface for camera view.
 * @since 9
 */
interface SceneViewInterface {
    /**
     * Set src to obtain sceneView.
     * @since 9
     */
    (src: { gltfSrc: string | Resource }): SceneViewAttribute;
}

declare class SceneViewAttribute extends CommonMethod<SceneViewAttribute> {
    /**
     * Modifier that defines a point of view.
     * @since 9 
     */
    camera(value: SceneViewCameraOption): SceneViewAttribute;

    /**
     * Configure the light.
     * @since 9
     */
    light(value: SceneViewLight): SceneViewAttribute;

    /**
     * Set the resource of background.
     * @since 9
     */
    background(value: string | Resource): SceneViewAttribute;

    /**
     * Indicate whether the view is transparent or not.
     * @since 9
     */
    transparent(value: boolean): SceneViewAttribute;

    /**
     * Handle animation state and other properties.
     * @since 9
     */
    glTFAnimation(value: SceneViewGlTfAnimation): SceneViewAttribute;

    /**
     * Set the behaviour can be enabled or disabled through the modifier.
     * @since 9
     */
    setHandleCameraMove(value: boolean): SceneViewAttribute;

    /**
     * Called when setting up SVCube.
     * @since 9
     */
    addCube(value: SVCube): SceneViewAttribute;

    /**
     * Called when setting up SVSphere.
     * @since 9
     */
    addSphere(value: SVSphere): SceneViewAttribute;

    /**
     * Called when setting up SVCone.
     * @since 9
     */
    addCone(value: SVCone): SceneViewAttribute;

    /**
     * Called when setting up node's graphic.
     * @since 9
     */
    addRenderNodeGraph(value: string): SceneViewAttribute;
}

declare const SceneViewInstance: SceneViewAttribute;
declare const SceneView: SceneViewInterface;