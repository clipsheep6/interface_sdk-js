/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
 * @form
 * @since 9
 */
<<<<<<< HEAD
/**
 * Defines the option in number unit of grid-container child component.
 * @form 
 * @crossplatform
 * @since 10
 */
=======
>>>>>>> updated test
declare interface GridColColumnOption {
    /**
     * Grid Col Column Option xs
     * @form
     * @since 9
     */
<<<<<<< HEAD
    /**
     * Grid Col Column Option xs
     * @form
     * @crossplatform
     * @since 10   
     */
=======
>>>>>>> updated test
    xs?: number,

    /**
     * Grid Col Column Option sm
     * @form
     * @since 9
     */
<<<<<<< HEAD
    /**
     * Grid Col Column Option sm
     * @form
     * @crossplatform
     * @since 10   
     */
=======
>>>>>>> updated test
    sm?: number,

    /**
     * Grid Col Column Option md
     * @form
     * @since 9
     */
<<<<<<< HEAD
    /**
     * Grid Col Column Option md
     * @form
     * @crossplatform
     * @since 10 
     */
=======
>>>>>>> updated test
    md?: number,

    /**
     * Grid Col Column Option lg
     * @form
     * @since 9
     */
<<<<<<< HEAD
    /**
     * Grid Col Column Option lg
     * @form
     * @crossplatform
     * @since 10 
     */
=======
>>>>>>> updated test
    lg?: number,

    /**
     * Grid Col Column Option xl
     * @form
     * @since 9
     */
<<<<<<< HEAD
    /**
     * Grid Col Column Option xl
     * @form
     * @crossplatform
     * @since 10 
     */
=======
>>>>>>> updated test
    xl?: number,

    /**
     * Grid Col Column Option xxl
     * @form
     * @since 9
     */
<<<<<<< HEAD
    /**
     * Grid Col Column Option xxl
     * @form
     * @crossplatform
     * @since 10 
     */
=======
>>>>>>> updated test
    xxl?: number,
}

/**
 * Defines the options of grid-container child component.
 * @form
 * @since 9
 */
<<<<<<< HEAD
/**
 * Defines the options of grid-container child component.
 * @form
 * @crossplatform
 * @since 10 
 */
=======
>>>>>>> updated test
declare interface GridColOptions {
    /**
     * Sets the span of current gird-container item.
     * @form
     * @since 9
     */
<<<<<<< HEAD
    /**
     * Sets the span of current gird-container item.
     * @form
     * @crossplatform
     * @since 10 
     */
=======
>>>>>>> updated test
    span?: number | GridColColumnOption;

    /**
     * Sets the offset of current gird-container item.
     * @form
     * @since 9
     */
<<<<<<< HEAD
    /**
     * Sets the offset of current gird-container item.
     * @form
     * @crossplatform
     * @since 10 
     */
=======
>>>>>>> updated test
    offset?: number | GridColColumnOption;

    /**
     * Sets the order of current gird-container item.
     * @form
     * @since 9
     */
<<<<<<< HEAD
    /**
     * Sets the order of current gird-container item.
     * @form
     * @crossplatform
     * @since 10 
     */
=======
>>>>>>> updated test
    order?: number | GridColColumnOption;
}

/**
 * Defines the the new version of grid-container child component.
 * @form
 * @since 9
 */
<<<<<<< HEAD
/**
 * Defines the the new version of grid-container child component.
 * @form
 * @crossplatform
 * @since 10 
 */
=======
>>>>>>> updated test
interface GridColInterface {
    /**
     * Defines the constructor of GridContainer.
     * @form
     * @since 9
     */
<<<<<<< HEAD
    /**
     * Defines the constructor of GridContainer.
     * @form
     * @crossplatform
     * @since 10 
     */
=======
>>>>>>> updated test
    (option?: GridColOptions): GridColAttribute;
}

declare class GridColAttribute extends CommonMethod<GridColAttribute> {
    /**
     * Sets the span of current gird-container item.
     * @form
     * @since 9
     */
<<<<<<< HEAD
    /**
     * Sets the span of current gird-container item.
     * @form
     * @crossplatform
     * @since 10 
     */
=======
>>>>>>> updated test
    span(value: number | GridColColumnOption): GridColAttribute;

    /**
     * Sets the offset of current gird-container item.
     * @form
     * @since 9
     */
<<<<<<< HEAD
    /**
     * Sets the offset of current gird-container item.
     * @form
     * @crossplatform
     * @since 10 
     */
=======
>>>>>>> updated test
    gridColOffset(value: number | GridColColumnOption): GridColAttribute;

    /**
     * Sets the order of current gird-container item.
     * @form
     * @since 9
     */
<<<<<<< HEAD
    /**
     * Sets the order of current gird-container item.
     * @form
     * @crossplatform
     * @since 10 
     */
=======
>>>>>>> updated test
    order(value: number | GridColColumnOption): GridColAttribute;
}

/**
 * Defines GridCol Component.
 * @form
 * @since 9
 */
<<<<<<< HEAD
/**
 * Defines GridCol Component.
 * @form
 * @crossplatform
 * @since 10 
 */
=======
>>>>>>> updated test
declare const GridCol: GridColInterface

/**
 * Defines GridCol Component instance.
 * @form
 * @since 9
 */
<<<<<<< HEAD
/**
 * Defines GridCol Component instance.
 * @form
 * @crossplatform
 * @since 10 
 */
=======
>>>>>>> updated test
declare const GridColInstance: GridColAttribute;