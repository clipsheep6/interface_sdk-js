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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
export declare enum ListTreeListenType {
  /**
   * register listener after a node is clicked.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  ON_NODE_INFO_GET = "onNodeInfoGet",
  /**
   * register listener after a node is add.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  ON_NODE_ADD = "onNodeAdd",
  /**
   * register listener after a node is delected.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  ON_NODE_DELETE = "onNodeDelete",
  /**
   * register listener after a node is modified.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  ON_NODE_MODIFY = "onNodeModify",
  /**
   * register listener after a node is moved.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  ON_NODE_MOVE = "onNodeMove",
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
  on(type: ListTreeListenType, callback: Callback<NodeParam>): void;

  /**
   * Event registration and processing.
   * After the event is processed once, it will be destroyed.
   *
   * @param { ListTreeListenType } event Registered Events.
   * @param callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  once(type: ListTreeListenType, callback: Callback<NodeParam>): void;

  /**
   * Destroy event.
   *
   * @param { ListTreeListenType } event Registered Events.
   * @param callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  off(type: ListTreeListenType, callback?: Callback<NodeParam>): void;
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
  listNodeDataSource: ListNodeDataSource;
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
  parentNodeId: number,

  /**
   * Set currentNodeId.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  currentNodeId: number,

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
  icon?: Resource;

  /**
   * Set selected icon resource.
   * @type { Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  selectedIcon?: Resource;

  /**
   * Set edit icon resource.
   * @type { Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  editIcon?: Resource;

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
   * After the addNode interface is invoked,
   * this interface is used to obtain the initialization data of
   * the tree view component for creating a tree view component.
   *
   * @return ListNodeDataSource Obtains the initialization data of the tree view component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  getDataSource(): ListNodeDataSource;

  /**
   * Obtains the subNode information of the currently clicked node.
   *
   * @return Array Returns an array that stores the configuration information of each node.
   * If there is no child node, an empty array is returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  getChildren(): Array<{
    /**
     * Id of node item.
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    itemId: number;

    /**
     * Icon of node item.
     * @type { Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    itemIcon: Resource;

    /**
     * Title of node item.
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    itemTitle: string;

    /**
     * Type of folder.
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    isFolder: boolean;
  }>;

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
  addNode(parentNodeId?: number, currentNodeId?: number, nodeParam?: NodeParam): ListTreeNode;

  /**
   * After the initialization is complete by calling the addNode interface,
   * call this interface to complete initialization.
   *
   * This interface must be called when you finish initializing the ListTreeView by addNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  BuildDone(): void;
}
