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
 * @enum {number}
 * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
 * @systemapi
 * @since 11
 */
declare enum ModelType {
  /**
   * Model Type is texture
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  TEXTURE = 0,

  /**
   * Model Type is surface 
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  SURFACE = 0,
}

/**
 * @enum { number }
 * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
 * systemapi
 * @since 11
 */

declare enum ModelLightType {
  
  /**
   * Light Type is invalid 
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  INVALID = 0,

  /**
   * Light Type is direct light 
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  DIRECTIONAL = 1,

  /**
   * Light Type is point type 
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  POINT = 0,

  /**
   * Light Type is spot type 
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  SPOT = 0,
}

/**
 * @enum { number }
 * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
 * @systemapi
 * @since 11
 */
declare enum ModelAnimationStates {
  /**
   * AnimationState play.
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  PLAY = 0,

  /**
   * AnimationState pause.
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  PAUSE = 0,

  /**
   * AnimationState stop.
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  STOP = 0,
}

/**
 * @interface ModelVec3
 * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
 * @systemapi
 * @since 11
 */
declare interface ModelVec3 {
  /**
   * First dimension of vector.
   * @type { number }}
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  x: number

  /**
   * Second dimension of vector.
   * @type { number }}
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  y: number

  /**
   * third dimension of vector.
   * @type { number }}
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  z: number
}

/**
 * @interface ModelCartesianPosition
 * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
 * @systemapi
 * @since 11
 */
declare interface ModelCartesianPosition {
  /**
   * Cartesian coordinate system of x
   * @type { number }
   * @systmecap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systempapi
   * @since 11
   */
  x: number;

  /**
   * Cartesian coordinate system of y
   * @type { number }
   * @systmecap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systempapi
   * @since 11
   */
  y: number;

  /**
   * Cartesian coordinate system of z
   * @type { number }
   * @systmecap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systempapi
   * @since 11
   */
  z: number;
}

/**
 * @interface ModelSphericalSpace
 * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
 * @systemapi
 * @since 11
 */
declare interface ModelSphericalSpace {
  /**
   * theta: Polar angle, angle with respect to positive polar axis(range:0-360 degree, Spherical coordinate system)
   *
   * @type { number }
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  theta: number;

  /**
   * phi: Azimuthal angle, angle of rorarion from the initial meridian plane.
   * (range: 0 - 180 degree, Spherical coordinate system)
   * @type { number }
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  phi: number;

  /**
   * radius: Slant distance to original(Spherical coordinate system)
   *
   * @type { number }
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  radius: number;
}

/**
 * @interface ModelPerspective
 * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
 * @systemapi
 * @since 11
 */
declare interface ModelPerspective {
  /**
   * Perspective ProHection near plane
   * @type { ?number }
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  zNear?: number;

  /**
   * Perspective ProHection far plane
   * @type { ?number }
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  zFar?: number;

  /**
   * Perspective ProHection fov-y
   * @type { ?number }
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  yFov?: number;
}

/**
 * @interface ModelCameraSpace
 * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
 * @systemapi
 * @since 11
 */
declare interface ModelCameraSpace {
  /**
   * Camera target position
   * @type { ModelVec3 }
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  front: ModelVec3;

  /**
   * Camera up axis
   * @type { ModelVec3 }
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  up: ModelVec3;

  /**
   * Camera position in Cartesian coordinate system
   * @type { ModelVec3 }
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  position: ModelVec3;
}


/**
 * @interface ModelQuaternion
 * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
 * @systemapi
 * @since 11
 */
declare interface ModelQuaternion {
  /**
   * The first dimension of quaternions
   * @type { number }
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  x: number;

  /**
   * The second dimension of quaternions
   * @type { number }
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  y: number;

  /**
   * The third dimension of quaternions
   * @type { number }
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  z: number;

  /**
   * The fourth dimension of quaternions
   * @type { number }
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  w: number;
}

/**
 * @interface ModelLightSpace
 * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
 * @systemapi
 * @since 11
 */
declare interface ModelLightSpace {
  /**
   * Light position in Cartesian coordinate system
   * @type { ?ModelCartesianPosition }
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  position?: ModelCartesianPosition;

  /**
   * Attitude of light by quaternion
   * @type { ?ModelQuaternion }
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  rotation?: ModelQuaternion;
}

/**
 * @interface ModelLightParam
 * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
 * @systemapi
 * @since 11
 */
declare interface ModelLightParam {
  /**
   * Light type
   * @type { ?ModelLightType }
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  type?: ModelLightType;

  /**
   * Light intensity 
   * @type { ?number }
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  intensity?: number;

  /**
   * Light produce shadows or not
   * @type { ?boolean }
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  shadow?: boolean;

  /**
   * The Color of light
   * @type { ?ResourceColor }
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  color?: ResourceColor;

  /**
   * Location of the light
   * @type { ?(ModelLightSpace | ModelSphericalSpace) }
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  lightSpace?: ModelLightSpace | ModelSphericalSpace;
}

/**
 * @interface ModelCameraParam
 * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
 * @systemapi
 * @since 11
 */
declare interface ModelCameraParam {
  /**
   * Camera Space
   * @type { ?(ModeCameraSpace | ModelSphericalSpace) }
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  cameraSpace?: ModelCameraSpace | ModelSphericalSpace;

  /**
   * Perspective prohection paramter
   * @type { ?ModelPerspective }
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  perspective?: ModelPerspective;
}

/**
 * @interface ModelAnimationParam
 * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
 * @systemapi
 * @since 11
 */
declare interface ModelAnimationParam {
  /**
   * Resource glTF name
   * @type { ?string }
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  name?: string;

  /**
   * Animation status
   * @type { ?ModelAnimationStates }
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  state?: ModelAnimationStates;

  /**
   * repeat count
   * @type { ?number }
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  repeatCount?: number;

  /**
   * PlayBack speed
   * @type { ?number }
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  speed?: number;

  /**
   * Playback duration
   * @type { ?number }
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  duration?: number;

  /**
   * playback reverse
   * @type { ?boolean }
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  reverse?: boolean;
}

/**
 * @interface Component3DInterface
 * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
 * @systemapi
 * @since 11
 */
interface Component3DInterface {
  /**
   * Get Component3D model
   * @param { ResourceStr } src
   * @param { ModelType } type
   * @returns { Component3DAttribute }
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  (src?: ResourceStr, type?: ModelType): Component3DAttribute;
}

/**
 *  Defines the Component3D attribute function.
 *  @extends CommonMethod
 *  @syscap SystemCapability.Graphic.Graphic3D.CustomRender
 *  @systemapi
 *  @since 11
 */
declare class Component3DAttribute extends CommonMethod<Component3DAttribute> {
  /**
   * Load background resource
   * @param { ResourceStr } uri
   * @returns { Component3DAttribute }
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  enviromnet(uri: ResourceStr): Component3DAttribute;

  /**
   * Set move status
   * @param { boolean } value
   * @returns { Component3DAttribute }
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  gestureAccess(value: boolean): Component3DAttribute;

  /**
   * Trancparent or not
   * @param { boolean } value
   * @returns { Component3DAttribute }
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  transparent(value: boolean): Component3DAttribute;

  /**
   * Addimg multiple renders
   * @param { ResourceStr } uri
   * @param { boolean } needsFrameCallback
   * @returns { Component3DAttribute }
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  customRender(uri: ResourceStr, needsFrameCallback: boolean): Component3DAttribute;

  /**
   * Set gltf animation 
   * @param { ModelAnimationParam } params
   * @returns { Component3DAttribute }
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  modelAnimation(params: ModelAnimationParam): Component3DAttribute;

  /**
   * Camera config 
   * @param { ModelCameraParam } params
   * @returns { Component3DAttribute }
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  camera(params: ModelCameraParam): Component3DAttribute;

  /**
   * light config 
   * @param { ModelLightParam } params
   * @returns { Component3DAttribute }
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  light(params: ModelLightParam): Component3DAttribute;

  /**
   * Load Shader directory 
   * @param { ResourceStr } path
   * @returns { Component3DAttribute }
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  shader(path: ResourceStr): Component3DAttribute;

  /**
   * Load Shader resource(texture) 
   * @param { ResourceStr } path
   * @returns { Component3DAttribute }
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  shaderImageTexture(path: ResourceStr): Component3DAttribute;

  /**
   * Sent user data to 3D engine 
   * @param { Array<number> } buffer
   * @returns { Component3DAttribute }
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  shaderInputBuffer(buffer: Array<number>): Component3DAttribute;

  /**
   * Called when load resource fails 
   * @param { function } enevts
   * @returns { Component3DAttribute }
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  onError(event: () => void): Component3DAttribute;

  /**
   * Set render width resulation 
   * @param { Dimension } value
   * @returns { Component3DAttribute }
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  renderWidth(value: Dimension): Component3DAttribute;

  /**
   * Set render hight resulation 
   * @param { Dimension } value
   * @returns { Component3DAttribute }
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  renderHight(value: Dimension): Component3DAttribute;

  /**
   * Set maximum 3D frame rate
   * @param { number } value
   * @returns { Component3DAttribute }
   * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
   * @systemapi
   * @since 11
   */
  renderFrameRateHint(value: number): Component3DAttribute;
}

/**
 * Defines Component3D component
 * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
 * @systemapi
 * @since 11
 */
declare const Component3D: Component3DInterface;

/**
 * Defines Component3D instance 
 * @syscap SystemCapability.Graphic.Graphic3D.CustomRender
 * @systemapi
 * @since 11
 */
declare const Component3DInstance: Component3DAttribute;
