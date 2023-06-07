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
 * This module provides functionality for component coordinates and sizes.
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @componentAttribute
 * @since 10
 */
declare namespace componentAttribute {
   /**
    * Rect attribute information.
    * @syscap RectAttribute
    * @since 10
    */
    class RectAttribute {
        /**
         * Obtain the X-point coordinates of the component.
         * @since 10
         */
        getX: number
        /**
         * Obtain the Y-point coordinates of the component.
         * @since 10
         */
        getY: number
        /**
         * Get component width.
         * @since 10
         */
        getWidth: number
        /**
         * Get component height.
         * @since 10
         */
        getHeight: number
    }
    /**
     * Offset attribute information.
     * @syscap OffsetF
     * @since 10
     */
    class OffsetAttribute {
        /**
         * Obtain the X-point coordinates of the component.
         * @since 10
         */
        getX: number
        /**
         * Obtain the Y-point coordinates of the component.
         * @since 10
         */
        getY: number
    }
    /**
     * Attribute information of components.
     * @syscap ComponentRect.
     * @since 10
     */
    export interface ComponentRect {
        /**
         * Obtain property information relative to the parent component.
         * @return RectAttribute.
         * @since 10
         */
        size: Size
        /**
         * Obtain attribute information relative to the window.
         * @return OffsetAttribute.
         * @since 10
         */
        localOffset: Offset
        /**
         * Obtain attribute information relative to the screen.
         * @return OffsetAttribute.
         * @since 10
         */
        screenOffset: Offset
        /**
         * Obtain attribute information of the transformation matrix.
         * @return RectAttribute.
         * @since 10
         */
        matrix: Matrix4
    }
    /**
     * Provide the ability to obtain the coordinates and size of component drawing areas.
     * @param id ID of the component whose attributes are to be obtained.
     * @returns { ComponentRect } the object of ComponentRect.
     * @syscap getComponentRectByKey
     * @since 10
     */
    function getComponentRectByKey(id: string): ComponentRect;
}

export default componentAttribute;