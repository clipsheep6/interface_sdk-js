/*
* Copyright (C) 2023 Huawei Device Co., Ltd.
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

/**
 * Control style of operation element
 * @enum { ListTreeListenType }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
export declare enum ListTreeListenType {
  /**
   * register listener after a node is clicked.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  NODE_CLICK = "NodeClick",
  /**
   * register listener after a node is add.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  NODE_ADD = "NodeAdd",
  /**
   * register listener after a node is delected.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  NODE_DELETE = "NodeDelete",
  /**
   * register listener after a node is modified.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  NODE_MODIFY = "NodeModify",
  /**
   * register listener after a node is moved.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  NODE_MOVE = "NodeMove",
}

/**
 * Declare class ListTreeListener
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
export declare class ListTreeListener {
  /**
   * Event registration and processing.
   * The event will not be destroyed after being processed.
   *
   * @param { ListTreeListenType } event Registered Events.
   * @param callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  on(type: ListTreeListenType, callback: (callbackParam: CallbackParam) => void): void;

  /**
   * Event registration and processing.
   * After the event is processed once, it will be destroyed.
   *
   * @param { ListTreeListenType } event Registered Events.
   * @param callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  once(type: ListTreeListenType, callback: (callbackParam: CallbackParam) => void): void;

  /**
   * Destroy event.
   *
   * @param { ListTreeListenType } event Registered Events.
   * @param callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  off(type: ListTreeListenType, callback?: (callbackParam: CallbackParam) => void): void;
}

/**
 * Declare class ListTreeListenerManager
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
export declare class ListTreeListenerManager {
  /**
   * Get instance of ListTreeListenerManager.
   * @return ListTreeListenerManager instance
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  static getInstance(): ListTreeListenerManager;

  /**
   * Get ListTreeListener.
   * @return ListTreeListener object
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  getListTreeListener(): ListTreeListener;
}

/**
 * Declare ListTreeListener Component
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
@Component
export declare struct ListTreeView {
  /**
   * Node data source of ListTreeView.
   * @type ListNodeDataSource
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  listTreeNode: ListTreeNode;
}

/**
 * Declare CallbackParam
 * @typedef CallbackParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
export interface CallbackParam {
  /**
   * Get the currentNodeId.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  currentNodeId: number,
  /**
   * Get the parentNodeId.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  parentNodeId?: number,
  /**
   * Get the childIndex.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  childIndex?: number
}

/**
 * Declare NodeParam
 * @typedef NodeParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
export interface NodeParam {
  /**
   * Set the parentNodeId.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  parentNodeId?: number,

  /**
   * Set currentNodeId.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  currentNodeId?: number,

  /**
   * Set catalog whether is floder.
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  isFolder?: boolean;

  /**
   * Set the icon resource.
   * @type { Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  icon?: ResourceStr;

  /**
   * Set selected icon resource.
   * @type { Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  selectedIcon?: ResourceStr;

  /**
   * Set edit icon resource.
   * @type { Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  editIcon?: ResourceStr;

  /**
   * Set primary title content.
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  primaryTitle?: ResourceStr;

  /**
   * Set secondary title content.
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  secondaryTitle?: ResourceStr;

  /**
   * set subcomponent binded on menu.   
   * @type { CustomBuilder }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  menu?: () => void;
}

/**
 * Declare ListTreeNode
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
export declare class ListTreeNode {
  /**
   * Delete a node.
   * Register an ON_ITEM_DELETE callback through the ListTreeListener mechanism to obtain the IDs of all deleted nodes.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  removeNode(): void;

  /**
   * Modify the node name.
   * Register an ON_ITEM_MODIFY callback to obtain the ID, parent node ID, and node name of the modified node.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
   modifyNode(): void;

  /**
   * Initialize the interface of the tree view. This interface is used to generate ListNodeDataSource data.
   * addNode is only designed for initialization. It can only be invoked during initialization.
   *
   * A maximum of 50 directory levels can be added.
   *
   * @param parentNodeId ID of the parent node.
   * @param currentNodeId ID of the new node. The value cannot be -1 or null.
   * @param nodeParam Configuration information of the newly added node.
   *
   * For details, see the comment description of NodeParam.
   * @return ListTreeNode Tree view component proxy class.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  addNode(nodeParam?: NodeParam): ListTreeNode;

  /**
   * After the initialization is complete by calling the addNode interface,
   * call this interface to complete initialization.
   *
   * This interface must be called when you finish initializing the ListTreeView by addNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  buildDone(): void;
}
