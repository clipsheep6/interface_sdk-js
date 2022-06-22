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
* Defines the option in length unit of grid-container component.
* @since 9
*/
declare interface GridRowSizeOption {
    xs?: Length,
    sm?: Length,
    md?: Length,
    lg?: Length,
    xl?: Length,
    xxl?: Length,
}

/**
* Defines the option in number unit of grid-container component.
* @since 9
*/
declare interface GridRowColumnOption {
    xs?: number,
    sm?: number,
    md?: number,
    lg?: number,
    xl?: number,
    xxl?: number,
}

/**
* Defines the getter of grid-container component.
* @since 9
*/
declare interface GetterOption {
    x?: GridRowSizeOption,
    y?: GridRowSizeOption
}

/**
* Defines the breakpoint reference of grid-container component.
* @since 9
*/
declare enum BreakpointsReference {
    WindowSize,
    ComponentSize,
}

/**
* Defines the direction of grid-container component.
* @since 9
*/
declare enum GridRowDirection {
    Row,
    RowReverse,
}

/**
* Defines the breakpoints of grid-container component.
* @since 9
*/
declare interface BreakPoints {
    value?: Array<string>,
    reference?: BreakpointsReference,
}

/**
 * Defines the options of grid-container component.
 * @since 9
 */
declare interface GridRowOptions {
    /**
     * Sets the total number of columns in the current layout.
     * @since 9
     */
    columns?: number | GridRowColumnOption;

    /**
     * grid-container layout column spacing.
     * @since 9
     */
    gutter?: GridRowSizeOption;

    /**
     * grid-container layout breakpoints.
     * @since 9
     */
    breakpoints?: BreakPoints;

    /**
     * grid-container layout direction.
     * @since 9
     */
    direction?: GridRowDirection;
}


/**
 * Defines the the new version of grid-container component.
 * @since 9
 */
interface GridRowInterface {
    /**
     * Defines the constructor of GridContainer.
     * @since 7
     */
    (optiion?: GridRowOptions): GridRowAttribute;
}

declare class GridRowAttribute extends CommonMethod<GridRowAttribute> {
    onBreakpointChange(callback: (breakpoints: string) => void): GridRowAttribute;
}

declare const GridRow: GridRowInterface
declare const GridRowInstance: GridRowAttribute;
