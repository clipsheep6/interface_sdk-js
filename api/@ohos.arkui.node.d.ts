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


/**
 * Indicates the DirtyFlag of the BaseNode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
 export declare enum DirtyFlag {


    /**
     * Indicates to update the property of the node.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    UPDATE_PROPERTY = 0,
  
    /**
     * Indicates to update the content of the node.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    UPDATE_CONTENT = 1,

    UPDATE_RENDER_TYPE = 2,
  }


export enum BuilderNodeRenderType {
    RENDER_TYPE_DEFAULT,
    RENDER_TYPE_EXPORT_TEXTURE,
}

export interface RenderTypeChanges {
    oldType:BuilderNodeRenderType;
    newType:BuilderNodeRenderType;
}


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

export class GraphicsContext {}

export class DrawContext {

    getGraphicsContent(): GraphicsContext;
    getSize(): Size;
    drawDefault: () => void

}

export interface DrawModifier {

    drawBackground?(context: DrawContext): void;
    drawContent?(context: DrawContext): void;
    drawForeground?(context: DrawContext): void;
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
     * Executed when the associated NodeContainer is created or the rebuild funtcion is called.
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
     * rebuild Method. Used to reinvoke the makeNode method.
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
  
  
  
    /**
    * Mark the dirty type of BaseNode. Used an enum value of DirtyFlag to indicate different dirty type.
    *
    * @param { DirtyFlag } flag - Defined the dirty type of the node.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @since 11
    */
    markDirty(flag: DirtyFlag): void;
  
  }
  

/**
* Defines BuilderNode.
* BuidlerNode can be used to make a node tree by WrappedBuilder, and hold the root node.
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
    * Update the BuilderNode.
    *
    * @param { Object } arg 
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 11
    */
    update(arg:Object): void;

    /**
    * Set the surfaceId which specific nativeimage to recieve the texture of the builderNode.
    *
    * @param { string } surfaceId - surfaceId of the NativeImage which can recieve the texuture of the builderNode
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 11
    */
     setSurfaceId(surfaceId: string): void;

     /**
     * Set the render type of the builderNode.
     *
     * @param { BuilderNodeRenderType } type - render type
     * @returns { boolean } Returns if set the render type successfully;
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
     setRenderType(type: BuilderNodeRenderType): boolean;
 
     /**
     * Stop exporting the texture of the builderNode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
     getRenderType(): BuilderNodeRenderType;
 
     /**
      * Register the listener that watches for if the builderNode enables exporting texture.
      *
      * @param { 'renderTypeChanges' } type - type of the listened event.
      * @param { function } callback - callback of the listened event.
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @since 11
      */
     on(type: 'renderTypeChanges',
       callback: import('./@ohos.base').Callback<RenderTypeChanges>): void;
 
     /**
      * Deregisters the listener that watches for if the builderNode enables exporting texture.
      *
      * @param { 'renderTypeChanges' } type - type of the listened event.
      * @param { function } callback - callback of the listened event.
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @since 11
      */
     off(type: 'renderTypeChanges',
       callback?: import('./@ohos.base').Callback<RenderTypeChanges>): void;
}

export declare class GroupNode extends BaseNode {

    addChild(node: BaseNode, slot: number): void;
    removeChild(node: BaseNode): void;
    cleanChild(): void;
    getChildNode(index: number): BaseNode;
}

/**
* Defines RenderNode
*
* @syscap SystemCapability.ArkUI.ArkUI.Full
* @since 11
*/
export declare class RenderNode extends GroupNode {

    setClipToFrame(useClip: boolean): void;
    getClipToFrame(): boolean;

    setVisible(isVisible: boolean): void;
    getVisible(): boolean;

    setAlpha(alpha: number): void;
    getAlpha(): number;
}