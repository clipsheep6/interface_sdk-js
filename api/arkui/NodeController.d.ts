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

/**
 * @file
 * @kit ArkUI
 */

import { UIContext } from '../@ohos.arkui.UIContext';
import { FrameNode } from './FrameNode';
import { Size } from './Graphics';

/*** if arkts 1.2 */
import { Callback } from '../@ohos.base';
import { TouchEvent } from './component/common';
/*** endif */

/**
 * Defined the controller of node container.Provides lifecycle callbacks for the associated NodeContainer
 * and methods to control the child node of the NodeContainer.
 * 
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defined the controller of node container.Provides lifecycle callbacks for the associated NodeContainer
 * and methods to control the child node of the NodeContainer.
 * 
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
/**
 * Defined the controller of node container.Provides lifecycle callbacks for the associated NodeContainer
 * and methods to control the child node of the NodeContainer.
 * 
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.1&1.2
 */
export declare abstract class NodeController {
  /**
   * MakeNode Method. Used to build a node tree and return the a FrameNode or null, and
   * attach the return result to the associated NodeContainer.
   * Executed when the associated NodeContainer is created or the rebuild function is called.
   *
   * @param { UIContext } uiContext - uiContext used to makeNode
   * @returns { FrameNode | null } - Returns a FrameNode or null.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * MakeNode Method. Used to build a node tree and return the a FrameNode or null, and
   * attach the return result to the associated NodeContainer.
   * Executed when the associated NodeContainer is created or the rebuild function is called.
   *
   * @param { UIContext } uiContext - uiContext used to makeNode
   * @returns { FrameNode | null } - Returns a FrameNode or null.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts{'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  abstract makeNode(uiContext: UIContext): FrameNode | null;

  /**
   * AboutToResize Method. Executed when the associated NodeContainer performs the measure method.
   *
   * @param { Size } size - size used to resize
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * AboutToResize Method. Executed when the associated NodeContainer performs the measure method.
   *
   * @param { Size } size - size used to resize
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  aboutToResize?(size: Size): void;

  /**
   * AboutToResize Method. Executed when the associated NodeContainer performs the measure method.
   *
   * @param { Size } size - size used to resize
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  aboutToResize(size: Size): void;

  /**
   * AboutToAppear Method. Executed when the associated NodeContainer is aboutToAppear.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * AboutToAppear Method. Executed when the associated NodeContainer is aboutToAppear.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  aboutToAppear?(): void;

  /**
   * AboutToAppear Method. Executed when the associated NodeContainer is aboutToAppear.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  aboutToAppear(): void;

  /**
   * AboutToDisappear Method. Executed when the associated NodeContainer is aboutToDisappear.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * AboutToDisappear Method. Executed when the associated NodeContainer is aboutToDisappear.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  aboutToDisappear?(): void;

  /**
   * AboutToDisappear Method. Executed when the associated NodeContainer is aboutToDisappear.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  aboutToDisappear(): void;

  /**
   * Rebuild Method. Used to invoke the makeNode method.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Rebuild Method. Used to re invoke the makeNode method.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts{'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  rebuild(): void;

  /**
   * OnTouchEvent Method. Executed when associated NodeContainer is touched.
   *
   * @param { TouchEvent } event - The TouchEvent when associated NodeContainer is touched.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * OnTouchEvent Method. Executed when associated NodeContainer is touched.
   *
   * @param { TouchEvent } event - The TouchEvent when associated NodeContainer is touched.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onTouchEvent?(event: TouchEvent): void;
  
  /**
   * OnTouchEvent Method. Executed when associated NodeContainer is touched.
   *
   * @param { TouchEvent } event - The TouchEvent when associated NodeContainer is touched.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  onTouchEvent(event: TouchEvent): void;

  /**
   * OnAttach Method. Executed when the associated NodeContainer is attached to the main tree.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  onAttach?(): void;

  /**
   * OnAttach Method. Executed when the associated NodeContainer is attached to the main tree.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  onAttach(): void;

  /**
   * OnDetach Method. Executed when the associated NodeContainer is detached from the main tree.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  onDetach?(): void;

  /**
   * OnDetach Method. Executed when the associated NodeContainer is detached from the main tree.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  onDetach(): void;

  /**
   * OnWillBind Method. Executed before the NodeController is bound to a NodeContainer.
   *
   * @param { number } containerId - the uniqueId of the NodeContainer.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  onWillBind?(containerId: number): void;

  /**
   * OnWillBind Method. Executed before the NodeController is bound to a NodeContainer.
   *
   * @param { number } containerId - the uniqueId of the NodeContainer.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  onWillBind(containerId: number): void;

  /**
   * OnWillUnbind Method. Executed before the NodeController is unbind with the NodeContainer.
   *
   * @param { number } containerId - the uniqueId of the NodeContainer.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  onWillUnbind?(containerId: number): void;

  /**
   * OnWillUnbind Method. Executed before the NodeController is unbind with the NodeContainer.
   *
   * @param { number } containerId - the uniqueId of the NodeContainer.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  onWillUnbind(containerId: number): void;
  
  /**
   * OnBind Method. Executed after the NodeController is bound to a NodeContainer.
   *
   * @param { number } containerId - the uniqueId of the NodeContainer.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  onBind?(containerId: number): void;
  
  /**
   * OnBind Method. Executed when the NodeController is bound to a NodeContainer.
   *
   * @param { number } containerId - the uniqueId of the NodeContainer.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  onBind(containerId: number): void;

  /**
   * OnUnbind Method. Executed after the NodeController is unbind with the NodeContainer.
   *
   * @param { number } containerId - the uniqueId of the NodeContainer.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  onUnbind?(containerId: number): void;

  /**
   * OnUnbind Method. Executed when the NodeController is unbind with the NodeContainer.
   *
   * @param { number } containerId - the uniqueId of the NodeContainer.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  onUnbind(containerId: number): void;
}
