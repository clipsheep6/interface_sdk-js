/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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

import { UIContext } from './@ohos.arkui.UIContext';
import { WrappedBuilder } from 'wrappedBuilderObject';
import type { Color as ColorEnums } from 'CommonEnums';
import matrix4 from './@ohos.matrix4';
import componentUtils from './@ohos.arkui.componentUtils'

/**
 * Size info.
 *
 * @interface Size
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
export interface Size {
  /**
   * Get the width of the rect.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  width: number;

  /**
   * Get the height of the rect.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  height: number;
}

/**
* Defined the controller of node container.Provides lifecycle callbacks for the associated NodeContainer
* and methods to control the child node of the NodeContainer.
* 
* @syscap SystemCapability.ArkUI.ArkUI.Full
* @since 11
*/
export abstract class NodeController {
  /**
   * makeNode Method. Used to build a node tree and return the a BaseNode or null, and
   * attach the return result to the associated NodeContainer.
   * Executed when the associated NodeContainer is created or the rebuild function is called.
   * @param { UIContext } uiContext - uiContext used to makeNode
   * @returns { BaseNode | null } - Returns a BaseNode or null.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  abstract makeNode(uiContext: UIContext): BaseNode | null;

  /**
   * aboutToResize Method. Executed when the associated NodeContainer performs the measure method.
   * @param { Size } size - size used to resize
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  aboutToResize?(size: Size): void;

  /**
   * aboutToAppear Method. Executed when the associated NodeContainer is aboutToAppear.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  aboutToAppear?(): void;

  /**
   * aboutToDisappear Method. Executed when the associated NodeContainer is aboutToDisappear.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  aboutToDisappear?(): void;

  /**
   * rebuild Method. Used to re invoke the makeNode method.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  rebuild(): void;
}

/**
 * Defines BaseNode. Used as a base class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
export declare class BaseNode {
  /**
  * constructor.
  *
  * @param { UIContext } uiContext - uiContext used to create the BaseNode
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  constructor(uiContext: UIContext);
}

/**
* Defines BuilderNode.
*
* @extends BaseNode
* @syscap SystemCapability.ArkUI.ArkUI.Full
* @crossplatform
* @since 11
*/
export declare class BuilderNode<Args extends Object[]> extends BaseNode {
  /**
  * Build the BuilderNode with the builder.
  *
  * @param { WrappedBuilder<Args> } builder - Defined the builder will be called to build the node.
  * @param { Object } arg - Defined the args will be used in the builder.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  build(builder: WrappedBuilder<Args>, arg?: Object): void;
}

type Color = number | string | ColorEnums;

declare interface FrameParams {
  x: number;
  y: number;
  width: number;
  height: number;
}

declare interface RotationParams {
  degreeX: number;
  degreeY: number;
  degreeZ: number;
}

declare interface PivotParams {
  pivotX: number;
  pivotY: number;
}

export declare class GroupNode extends BaseNode {
  /**
  * constructor.
  *
  * @param { UIContext } uiContext - uiContext used to create the GroupNode
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  constructor(uiContext: UIContext);

  /**
  * Add child to the GroupNode.
  *
  * @param { BaseNode } node - The node will be added.
  * @param { number } slot - Location of child node insertion.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  addChild(node: BaseNode, slot: number): void;

  /**
  * remove child from the GroupNode.
  *
  * @param { BaseNode } node - The node will be removed.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  removeChild(node: BaseNode): void;

  /**
  * clear children of the GroupNode.
  *
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  clearChildren(): void;

  /**
  * Add child to the GroupNode.
  * @param { number } index - Get the child by index.
  * @returns { BaseNode } - Returns a BaseNode.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  getChild(index: number): BaseNode;
}

export declare class RenderNode extends GroupNode {
  /**
  * constructor.
  *
  * @param { UIContext } uiContext - uiContext used to create the RenderNode
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  constructor(uiContext: UIContext);

  /**
  * Set the background color of the renderNode.
  * @param { Color } color - The background color.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  setBackgroundColor(color: Color): void;

  /**
  * Get the background color of the renderNode.
  * @returns { Color } - Returns a background color.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  getBackgroundColor(): Color;

  /**
  * Set the foreground color of the renderNode.
  * @param { Color } color - The foreground color.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  setForegroundColor(color: Color): void;

  /**
  * Get the foreground color of the renderNode.
  * @returns { Color } - The foreground color.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  getForegroundColor(): Color;

  /**
  * Set whether the renderNode clip to frame.
  * @param { boolean } useClip - whether the renderNode clip to frame.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  setClipToFrame(useClip: boolean): void;

  /**
  * Get whether the renderNode clip to frame.
  * @returns { boolean } - Returns whether the renderNode clip to frame.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  getClipToFrame(): boolean;

  /**
  * Set visibility of the renderNode.
  * @param { boolean } visible - The visibility of the renderNode.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  setVisible(visible: boolean): void;

  /**
  * Get visibility of the renderNode.
  * @returns { boolean } - Returns the visibility of the renderNode.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  getVisible(): boolean;

  /**
  * Set alpha of the renderNode.
  * @param { number } alpha - The alpha of the renderNode.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  setAlpha(alpha: number): void;

  /**
  * Get alpha of the renderNode.
  * @returns { number } - Returns the alpha of the renderNode.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  getAlpha(): number;

  /**
  * Set frame size of the renderNode.
  * @param { number } width - The width of the renderNode frame.
  * @param { number } height - The height of the renderNode frame.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  setFrameSize(width: number, height: number): void;

  /**
  * Set frame position of the renderNode.
  * @param { number } x - the x-coordinate of the renderNode frame.
  * @param { number } y - the y-coordinate of the renderNode frame.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  setFramePosition(x: number, y: number): void;

  /**
  * Set frame parameters of the renderNode.
  * @param { number } x - the x-coordinate of the renderNode frame.
  * @param { number } y - the y-coordinate of the renderNode frame.
  * @param { number } width - The width of the renderNode frame.
  * @param { number } height - The height of the renderNode frame.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  setFrame(x: number, y: number, width: number, height: number): void;

  /**
  * Get frame parameters of the renderNode.
  * @returns { FrameParams } - Returns frame parameters of the renderNode.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  getFrame(): FrameParams;

  /**
  * Set pivot of the renderNode.
  * @param { number } pivotX - the x-coordinate of the pivot of the renderNode.
  * @param { number } pivotY - the y-coordinate of the pivot of the renderNode.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  setPivot(pivotX: number, pivotY: number): void;

  /**
  * Get pivot parameters of the renderNode.
  * @returns { PivotParams } - Returns pivot parameters of the renderNode.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  getPivot(): PivotParams;

  /**
  * Set scale of the renderNode.
  * @param { number } scaleX - the x-coordinate of the scale of the renderNode.
  * @param { number } scaleY - the y-coordinate of the scale of the renderNode.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  setScale(scaleX: number, scaleY: number): void;

  /**
  * Set scaleX of the renderNode.
  * @param { number } scaleX - the x-coordinate of the scale of the renderNode.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  setScaleX(scaleX: number): void;

  /**
  * Set scaleY of the renderNode.
  * @param { number } scaleY - the y-coordinate of the scale of the renderNode.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  setScaleY(scaleY: number): void;

  /**
  * Get scale parameters of the renderNode.
  * @returns { componentUtils.ScaleResult } - Returns scale parameters of the renderNode.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  getScale(): componentUtils.ScaleResult;

  /**
  * Set translation of the renderNode.
  * @param { number } translationX - the translate value for x-axis of the renderNode.
  * @param { number } translationY - the translate value for y-axis of the renderNode.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  setTranslation(translationX: number, translationY: number): void;

  /**
  * Set the translate value for x-axis of the renderNode.
  * @param { number } translationX - the translate value for x-axis of the renderNode.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  setTranslationX(translationX: number): void;

  /**
  * Set the translate value for y-axis of the renderNode.
  * @param { number } translationY - the translate value for y-axis of the renderNode.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  setTranslationY(translationY: number): void;

  /**
  * Get translation parameters of the renderNode.
  * @returns { componentUtils.TranslateResult } - Returns translation parameters of the render node.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  getTranslation(): componentUtils.TranslateResult;

  /**
  * Set rotation of the renderNode.
  * @param { number } degreeX - the rotation value for x-axis of the renderNode.
  * @param { number } degreeY - the rotation value for y-axis of the renderNode.
  * @param { number } degreeZ - the rotation value for z-axis of the renderNode.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  setRotation(degreeX: number, degreeY: number, degreeZ: number): void;

  /**
  * Set rotation value for x-axis of the renderNode.
  * @param { number } degreeX - the rotation value for x-axis of the renderNode.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  setRotationX(degreeX: number): void;

  /**
  * Set rotation value for y-axis of the renderNode.
  * @param { number } degreeY - the rotation value for y-axis of the renderNode.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  setRotationY(degreeY: number): void;

  /**
  * Get rotation parameters of the renderNode.
  * @returns { RotationParams } - Returns rotation parameters of the render node.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  getRotation(): RotationParams;

  /**
  * Set transform of the renderNode.
  * @param { matrix4.Matrix4Transit } transform - the transform of the renderNode.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  setTransform(transform: matrix4.Matrix4Transit): void;

  /**
  * Get transform of the renderNode.
  * @returns { matrix4.Matrix4Transit } - Returns transform of the render node.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  getTransform(): matrix4.Matrix4Transit;

  /**
  * Set shadow color of the renderNode.
  * @param { Color } color - the shadow color of the renderNode.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  setShadowColor(color: Color): void;

  /**
  * Get shadow color of the renderNode.
  * @returns { Color } - Returns the shadow color of the renderNode.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  getShadowColor(): Color;

  /**
  * Set shadow offset of the renderNode.
  * @param { number } x - the shadow offset for x-axis of the renderNode.
  * @param { number } y - the shadow offset for y-axis of the renderNode.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  setShadowOffset(x: number, y: number): void;

  /**
  * Get shadow offset of the renderNode.
  * @returns { componentUtils.Offset } - Returns the shadow offset of the renderNode.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  getShadowOffset(): componentUtils.Offset;

  /**
  * Set shadow alpha of the renderNode.
  * @param { number } alpha - the shadow alpha of the renderNode.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  setShadowAlpha(alpha: number): void;

  /**
  * Get shadow alpha of the renderNode.
  * @returns { number } - Returns the shadow alpha of the renderNode.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  getShadowAlpha(): number;

  /**
  * Set shadow elevation of the renderNode.
  * @param { number } elevation - the shadow elevation of the renderNode.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  setShadowElevation(elevation: number): void;

  /**
  * Get shadow elevation of the renderNode.
  * @returns { number } - Returns the shadow elevation of the renderNode.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  getShadowElevation(): number;

  /**
  * Set shadow radius of the renderNode.
  * @param { number } radius - the shadow radius of the renderNode.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  setShadowRadius(radius: number): void;

  /**
  * Get shadow radius of the renderNode.
  * @returns { number } - Returns the shadow radius of the renderNode.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  getShadowRadius(): number;
}