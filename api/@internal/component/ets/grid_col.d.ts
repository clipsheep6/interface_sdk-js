/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
* Defines the option in number unit of grid-container child component.
* @since 9
*/
declare interface GridRowColumnSizeOption {
    /**
     * Grid row column size option xs
     * @since 9
     */
    xs?: number,

    /**
     * Grid row column size option sm
     * @since 9
     */
    sm?: number,

    /**
     * Grid row column size option md
     * @since 9
     */
    md?: number,

    /**
     * Grid row column size option lg
     * @since 9
     */
    lg?: number,

    /**
     * Grid row column size option xl
     * @since 9
     */
    xl?: number,

    /**
     * Grid row column size option xxl
     * @since 9
     */
    xxl?: number,
}

/**
 * Defines the options of grid-container child component.
 * @since 9
 */
declare interface GridColOptions {
    /**
     * Sets the span of current gird-container item.
     * @since 9
     */
    span?: number | GridRowColumnSizeOption;

    /**
     * Sets the offset of current gird-container item.
     * @since 9
     */
    offset?: number | GridRowColumnSizeOption;

    /**
     * Sets the order of current gird-container item.
     * @since 9
     */
    order?: number | GridRowColumnSizeOption;
}


/**
 * Defines the the new version of grid-container child component.
 * @since 9
 */
interface GridColInterface {
    /**
     * Defines the constructor of GridContainer.
     * @since 9
     */
    (option?: GridColOptions): GridColAttribute;
}

declare class GridColAttribute extends CommonMethod<GridColAttribute> {
    /**
    * Sets the span of current gird-container item.
    * @since 9
    */
    span(value: number | GridRowColumnSizeOption): GridRowAttribute;

    /**
    * Sets the offset of  current gird-container item.
    * @since 9
    */
    offset(value: number | GridRowColumnSizeOption): GridRowAttribute;

    /**
    * Sets the order of current gird-container item.
    * @since 9
    */
    order(value: number | GridRowColumnSizeOption): GridRowAttribute;
}

declare const GridCol: GridColInterface
declare const GridColInstance: GridColAttribute;