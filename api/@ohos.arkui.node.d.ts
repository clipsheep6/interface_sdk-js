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
import { TouchEvent } from 'touchEvent';

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

  /**
   * OnTouchEvent Method. Executed when associated NodeContainer is touched.
   * @param { TouchEvent } event - The TouchEvent when associated NodeContainer is touched.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  onTouchEvent?(event: TouchEvent): void;
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

  /**
   * Update the BuilderNode based on the provided parameters.
   *
   * @param { Object } arg - Parameters used to update the BuilderNode, which must match the types required by the builder bound to the BuilderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  update(arg: Object): void;

  /**
   * Get the FrameNode in BuilderNode.
   * @returns { FrameNode | null } - Returns a FrameNode inside the BuilderNode, or null if not contained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  getFrameNode(): FrameNode | null;

  /**
   * Dispatch touchEvent to targetNode.
   * @param { TouchEvent } event - The touchEvent which will be sent to the targetNode.
   * @returns { boolean } - Returns true if the TouchEvent has been successfully posted to the targetNode, false otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  postTouchEvent(event: TouchEvent): boolean;
}

/**
 * Defines DrawContext.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
export class DrawContext {

  /**
   * Function to get the size of the drawContext.
   * @returns { Size } - Size of the drawContext, which includes width and height.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  get size(): Size;
}

/**
 * Defines FrameNode.
 *
 * @extends BaseNode
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
export declare class FrameNode extends BaseNode {
  /**
   * Get the RenderNode in FrameNode.
   * @returns { RenderNode | null } - Returns a RenderNode inside the FrameNode, or null if not contained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  getRenderNode(): RenderNode | null;
}

/**
 * Defines RenderNode. Contains node tree operations and render property operations on node.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
export declare class RenderNode {
  /**
   * Constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  constructor();

  /**
   * Add child to the end of the RenderNode's children.
   *
   * @param { RenderNode } node - The node will be added.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  appendChild(node: RenderNode): void;

  /**
   * Add child to the current RenderNode.
   *
   * @param { RenderNode } child - The node will be added.
   * @param { RenderNode | null } sibling - The new node is added after this node. When sibling is null, insert node as the first children of the node.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  insertChildAfter(child: RenderNode, sibling: RenderNode | null): void;

  /**
   * Remove child from the current RenderNode.
   *
   * @param { RenderNode } node - The node will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  removeChild(node: RenderNode): void;

  /**
   * Clear children of the current RenderNode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  clearChildren(): void;

  /**
   * Get a child of the current RenderNode by index.
   * 
   * @param { number } index - The index of the desired node in the children of RenderNode.
   * @returns { RenderNode | null } - Returns a RenderNode. When the required node does not exist, returns null.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  getChild(index: number): RenderNode | null;

  /**
   * Get the first child of the current RenderNode.
   * 
   * @returns {  RenderNode | null } - Returns a RenderNode, which is first child of the current RenderNode.
   * If current RenderNode does not have child node, returns null.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  getFirstChild(): RenderNode | null;

  /**
   * Get the next sibling node of the current RenderNode.
   * 
   * @returns { RenderNode | null } - Returns a RenderNode. If current RenderNode does not have next sibling node, returns null.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  getNextSibling(): RenderNode | null;

  /**
   * Get the previous sibling node of the current RenderNode.
   * 
   * @returns { RenderNode | null } - Returns a RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  getPreviousSibling(): RenderNode | null;

  /**
   * Set the background color of the RenderNode.
   * 
   * @param { number } color - The background color. Colors are defined as ARGB format represented by number.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  set backgroundColor(color: number);

  /**
   * Get the background color of the RenderNode.
   * 
   * @returns { number } - Returns a background color. Colors are defined as ARGB format represented by number.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  get backgroundColor(): number;

  /**
   * Set whether the RenderNode clip to frame.
   * 
   * @param { boolean } useClip - Whether the RenderNode clip to frame.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  set clipToFrame(useClip: boolean);

  /**
   * Get whether the RenderNode clip to frame.
   * 
   * @returns { boolean } - Returns whether the RenderNode clip to frame.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  get clipToFrame(): boolean;

  /**
   * Set opacity of the RenderNode.
   * 
   * @param { number } value - The opacity of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  set opacity(value: number);

  /**
   * Get opacity of the RenderNode.
   *
   * @returns { number } - Returns the opacity of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  get opacity(): number;

  /**
   * Set frame size of the RenderNode.
   * @param { Size } size - The size of the RenderNode frame.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  set size(size: Size);

  /**
   * Set frame position of the RenderNode.
   * @param { Vector2 } position - The position of the RenderNode frame.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  set position(position: Vector2);

  /**
   * Set frame info of the RenderNode.
   * @param { Frame } frame - The frame info of the RenderNode frame.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  set frame(frame: Frame);

  /**
   * Get frame info of the RenderNode.
   * @returns { Frame } - Returns frame info of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  get frame(): Frame;

  /**
   * Set pivot of the RenderNode.
   * @param { Vector2 } pivot - The pivot of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  set pivot(pivot: Vector2);

  /**
   * Get pivot vector of the RenderNode.
   * @returns { Vector2 } - Returns pivot vector of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  get pivot(): Vector2;

  /**
   * Set scale of the RenderNode.
   * @param { Vector2 } scale - The scale of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  set scale(scale: Vector2);

  /**
   * Get scale vector of the RenderNode.
   * @returns { Vector2 } - Returns scale vector of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  get scale(): Vector2;

  /**
   * Set translation of the RenderNode.
   * @param { Vector2 } translation - the translate vector of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  set translation(translation: Vector2);

  /**
   * Get translation vector of the RenderNode.
   * @returns { Vector2 } - Returns translation vector of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  get translation(): Vector2;

  /**
   * Set rotation vector of the RenderNode.
   * @param { Vector3 } rotation - The rotation vector of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  set rotation(rotation: Vector3);

  /**
   * Get rotation vector of the RenderNode.
   * @returns { Vector3 } - Returns rotation vector of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  get rotation(): Vector3;

  /**
   * Set transform info of the RenderNode.
   * @param { Transform } transform - the transform info of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  set transform(transform: Transform);

  /**
   * Get transform info of the RenderNode.
   * @returns {Transform } - Returns transform info of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  get transform(): Transform;

  /**
   * Set shadow color of the RenderNode.
   * @param { number } color - the shadow color of the RenderNode. Colors are defined as ARGB format represented by number.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  set shadowColor(color: number);

  /**
   * Get shadow color of the RenderNode.
   * @returns { number } - Returns the shadow color of the RenderNode. Colors are defined as ARGB format represented by number.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  get shadowColor(): number;

  /**
   * Set shadow offset of the RenderNode.
   * @param { Vector2 } offset - the shadow offset of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  set shadowOffset(offset: Vector2);

  /**
   * Get shadow offset of the RenderNode.
   * @returns { Vector2 } - Returns the shadow offset of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  get shadowOffset(): Vector2;

  /**
   * Set shadow alpha of the RenderNode.
   * @param { number } alpha - the shadow alpha of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  set shadowAlpha(alpha: number);

  /**
   * Get shadow alpha of the RenderNode.
   * @returns { number } - Returns the shadow alpha of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  get shadowAlpha(): number;

  /**
   * Set shadow elevation of the RenderNode.
   * @param { number } elevation - the shadow elevation of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  set shadowElevation(elevation: number);

  /**
   * Get shadow elevation of the RenderNode.
   * @returns { number } - Returns the shadow elevation of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  get shadowElevation(): number;

  /**
   * Set shadow radius of the RenderNode.
   * @param { number } radius - the shadow radius of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  set shadowRadius(radius: number);

  /**
   * Get shadow radius of the RenderNode.
   * @returns { number } - Returns the shadow radius of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  get shadowRadius(): number;

  /**
   * Draw Method. Executed when the associated RenderNode is onDraw.
   * @param { DrawContext } context - The DrawContext will be used when executed draw method.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  draw(context: DrawContext): void;

  /**
   * Invalidate the RenderNode, which will cause a re-render of the RenderNode.
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  invalidate(): void;
}

/**
 * Frame info, include the position info and size info.
 *
 * @interface Frame
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
export declare interface Frame {
  /**
   * Position value for x-axis of the frame info.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  x: number;

  /**
   * Position value for y-axis of the frame info.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  y: number;


  /**
   * Size value for width of the frame info.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  width: number;

  /**
   * Size value for height of the frame info.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  height: number;
}

/**
  * Defined a vector with two values.
  * @interface Vector2
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
export declare interface Vector2 {
  /**
   * The x component of the vector.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  x: number

  /**
   * The y component of the vector.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  y: number
}

/**
 * Defined a vector with three values.
 *
 * @interface Vector3
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
export declare interface Vector3 {

  /**
   * Degree value for x-axis of the vector.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  x: number;

  /**
   * Degree value for y-axis of the vector.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  y: number;

  /**
   * Degree value for z-axis of the vector.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  z: number;
}

/**
 * Transform info. It's a 4x4 matrix, represent by number[].
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
export type Transform = [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number
];
