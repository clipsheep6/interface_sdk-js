/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
 * Defines the data type of the interface restriction.
 * @since 7
 */
/**
 * Defines the data type of the interface restriction.
 * @crossplatform
 * @since 10
 */
declare interface Resource {
  /**
   * Set id.
   * @since 7
   */
  /**
   * Set id.
   * @crossplatform
   * @since 10
   */
  readonly id: number;

  /**
   * Set type.
   * @since 7
   */
  /**
   * Set type.
   * @crossplatform
   * @since 10
   */
  readonly type: number;

  /**
   * Set params.
   * @since 7
   */
  /**
   * Set params.
   * @crossplatform
   * @since 10
   */
  readonly params?: any[];

  /**
   * Set bundleName.
   * @since 9
   */
  /**
   * Set bundleName.
   * @crossplatform
   * @since 10
   */
  readonly bundleName: string;

  /**
   * Set moduleName.
   * @since 9
   */
  /**
   * Set moduleName.
   * @crossplatform
   * @since 10
   */
  readonly moduleName: string;
}

/**
 * Defines the length property with string, number and resource unit.
 * @since 7
 */
/**
 * Defines the length property with string, number and resource unit.
 * @crossplatform
 * @since 10
 */
declare type Length = string | number | Resource;

/**
 * Defines the string which can use resource.
 * @since 7
 */
/**
 * Defines the string which can use resource.
 * @crossplatform
 * @since 10
 */
declare type ResourceStr = string | Resource;

/**
 * Defines the padding property.
 * @since 7
 */
/**
 * Defines the padding property.
 * @crossplatform
 * @since 10
 */
declare type Padding = {
  /**
   * top property.
   */
  /**
   * top property.
   * @crossplatform
   * @since 10
   */
  top?: Length;

  /**
   * right property.
   */
  /**
   * right property.
   * @crossplatform
   * @since 10
   */
  right?: Length;

  /**
   * bottom property.
   */
  /**
   * bottom property.
   * @crossplatform
   * @since 10
   */
  bottom?: Length;

  /**
   * left property.
   */
  /**
   * left property.
   * @crossplatform
   * @since 10
   */
  left?: Length;
};

/**
 * Defines the margin property.
 * @since 7
 */
/**
 * Defines the margin property.
 * @crossplatform
 * @since 10
 */
declare type Margin = Padding;

/**
 * Defines the border width property.
 * @since 9
 */
/**
 * Defines the border width property.
 * @crossplatform
 * @since 10
 */
declare type EdgeWidths = {
  /**
   * top property.
   * @since 9
   */
  /**
   * top property.
   * @crossplatform
   * @since 10
   */
  top?: Length;

  /**
   * right property.
   * @since 9
   */
  /**
   * right property.
   * @crossplatform
   * @since 10
   */
  right?: Length;

  /**
   * bottom property.
   * @since 9
   */
  /**
   * bottom property.
   * @crossplatform
   * @since 10
   */
  bottom?: Length;

  /**
   * left property.
   * @since 9
   */
  /**
   * left property.
   * @crossplatform
   * @since 10
   */
  left?: Length;
};

/**
 * Defines the border radius property.
 * @since 9
 */
/**
 * Defines the border radius property.
 * @crossplatform
 * @since 10
 */
declare type BorderRadiuses = {
  /**
   * top-left property.
   * @since 9
   */
  /**
   * top-left property.
   * @crossplatform
   * @since 10
   */
  topLeft?: Length;

  /**
   * top-right property.
   * @since 9
   */
  /**
   * top-right property.
   * @crossplatform
   * @since 10
   */
  topRight?: Length;

  /**
   * bottom-left property.
   * @since 9
   */
  /**
   * bottom-left property.
   * @crossplatform
   * @since 10
   */
  bottomLeft?: Length;

  /**
   * bottom-right property.
   * @since 9
   */
  /**
   * bottom-right property.
   * @crossplatform
   * @since 10
   */
  bottomRight?: Length;
};

/**
 * Defines the border color property.
 * @since 9
 */
/**
 * Defines the border color property.
 * @crossplatform
 * @since 10
 */
declare type EdgeColors = {
  /**
   * top property.
   * @since 9
   */
  /**
   * top property.
   * @crossplatform
   * @since 10
   */
  top?: ResourceColor;

  /**
   * right property.
   * @since 9
   */
  /**
   * right property.
   * @crossplatform
   * @since 10
   */
  right?: ResourceColor;

  /**
   * bottom property.
   * @since 9
   */
  /**
   * bottom property.
   * @crossplatform
   * @since 10
   */
  bottom?: ResourceColor;

  /**
   * left property.
   * @since 9
   */
  /**
   * left property.
   * @crossplatform
   * @since 10
   */
  left?: ResourceColor;
};

/**
 * Defines the border style property.
 * @since 9
 */
/**
 * Defines the border style property.
 * @crossplatform
 * @since 10
 */
declare type EdgeStyles = {
  /**
   * top property.
   * @since 9
   */
  /**
   * top property.
   * @crossplatform
   * @since 10
   */
  top?: BorderStyle;

  /**
   * right property.
   * @since 9
   */
  /**
   * right property.
   * @crossplatform
   * @since 10
   */
  right?: BorderStyle;

  /**
   * bottom property.
   * @since 9
   */
  /**
   * bottom property.
   * @crossplatform
   * @since 10
   */
  bottom?: BorderStyle;

  /**
   * left property.
   * @since 9
   */
  /**
   * left property.
   * @crossplatform
   * @since 10
   */
  left?: BorderStyle;
};

/**
 * Defines the offset property.
 * @since 7
 */
/**
 * Defines the offset property.
 * @crossplatform
 * @since 10
 */
declare type Offset = {
  /**
   * dx property.
   */
  /**
   * dx property.
   * @crossplatform
   * @since 10
   */
  dx: Length;

  /**
   * dy property.
   */
  /**
   * dy property.
   * @crossplatform
   * @since 10
   */
  dy: Length;
};

/**
 * Defines the color which can use resource.
 * @since 7
 */
/**
 * Defines the color which can use resource.
 * @crossplatform
 * @since 10
 */
declare type ResourceColor = Color | number | string | Resource;

/**
 * Defines the length constrain property.
 * @since 9
 */
/**
 * Defines the length constrain property.
 * @crossplatform
 * @since 10
 */
declare type LengthConstrain = {
  /**
   * minimum length.
   */
  /**
   * minimum length.
   * @crossplatform
   * @since 10 
   */
  minLength: Length;

  /**
   * maximum length.
   */
  /**
   * maximum length.
   * @crossplatform
   * @since 10 
   */
  maxLength: Length;
};

/**
 * Defines the font used for text.
 * @since 7
 */
/**
 * Defines the font used for text.
 * @crossplatform
 * @since 10 
 */
declare interface Font {
  /**
   * font size.
   */
  /**
   * font size.
   * @crossplatform
   * @since 10 
   */
  size?: Length;

  /**
   * font weight.
   */
  /**
   * font weight.
   * @crossplatform
   * @since 10 
   */
  weight?: FontWeight | number | string;

  /**
   * font family.
   */
  /**
   * font family.
   * @crossplatform
   * @since 10 
   */
  family?: string | Resource;

  /**
   * font style.
   */
  /**
   * font style.
   * @crossplatform
   * @since 10 
   */
  style?: FontStyle;
}

/**
 * Defines the area property.
 * @since 8
 */
/**
 * Defines the area property.
 * @crossplatform
 * @since 10 
 */
declare interface Area {
  /**
   * Defines the width property.
   * @since 8
   */
  /**
   * Defines the width property.
   * @crossplatform
   * @since 10 
   */
  width: Length;

  /**
   * Defines the height property.
   * @since 8
   */
  /**
   * Defines the height property.
   * @crossplatform
   * @since 10 
   */
  height: Length;

  /**
   * Defines the local position.
   * @since 8
   */
  /**
   * Defines the local position.
   * @crossplatform
   * @since 10 
   */
  position: Position;

  /**
   * Defines the global position.
   * @since 8
   */
  /**
   * Defines the global position.
   * @crossplatform
   * @since 10 
   */
  globalPosition: Position;
}

/**
 * Defines the position.
 * @since 7
 */
/**
 * Defines the position.
 * @crossplatform
 * @since 10 
 */
declare interface Position {
  /**
   * Coordinate x of the Position.
   * @since 7
   */
  /**
   * Coordinate x of the Position.
   * @crossplatform
   * @since 10 
   */
  x?: Length;
  /**
   * Coordinate y of the Position.
   * @since 7
   */
  /**
   * Coordinate y of the Position.
   * @crossplatform
   * @since 10 
   */
  y?: Length;
}

/**
 * Defines the constrain size options.
 * @since 7
 */
/**
 * Defines the constrain size options.
 * @crossplatform
 * @since 10 
 */
declare interface ConstraintSizeOptions {
  /**
   * Defines the min width.
   * @since 7
   */
  /**
   * Defines the min width.
   * @crossplatform
   * @since 10 
   */
  minWidth?: Length;
  /**
   * Defines the max width.
   * @since 7
   */
  /**
   * Defines the max width.
   * @crossplatform
   * @since 10 
   */
  maxWidth?: Length;
  /**
   * Defines the min height.
   * @since 7
   */
  /**
   * Defines the min height.
   * @crossplatform
   * @since 10 
   */
  minHeight?: Length;
  /**
   * Defines the max height.
   * @since 7
   */
  /**
   * Defines the max height.
   * @crossplatform
   * @since 10 
   */
  maxHeight?: Length;
}

/**
 * Defines the size options.
 * @since 7
 */
/**
 * Defines the size options.
 * @crossplatform
 * @since 10 
 */
declare interface SizeOptions {
  /**
   * Defines the width.
   * @since 7
   */
  /**
   * Defines the width.
   * @crossplatform
   * @since 10 
   */
  width?: Length;
  /**
   * Defines the height.
   * @since 7
   */
  /**
   * Defines the height.
   * @crossplatform
   * @since 10 
   */
  height?: Length;
}

/**
 * Defines the options of border.
 * @since 7
 */
/**
 * Defines the options of border.
 * @crossplatform
 * @since 10 
 */
declare interface BorderOptions {
  /**
   * Defines the border width.
   * @type { Length }
   * @since 7
   */
  /**
   * Defines the border width.
   * @type { EdgeWidths | Length }
   * @since 9
   */
  /**
   * Defines the border width.
   * @type { EdgeWidths | Length }
   * @crossplatform
   * @since 10 
   */
  width?: EdgeWidths | Length;
  /**
   * Defines the border color.
   * @type { ResourceColor }
   * @since 7
   */
  /**
   * Defines the border color.
   * @type { EdgeColors | ResourceColor }
   * @since 9
   */
  /**
   * Defines the border color.
   * @type { EdgeColors | ResourceColor }
   * @crossplatform
   * @since 10 
   */
  color?: EdgeColors | ResourceColor;
  /**
   * Defines the border radius.
   * @type { Length }
   * @since 7
   */
  /**
   * Defines the border radius.
   * @type { BorderRadiuses | Length }
   * @since 9
   */
  /**
   * Defines the border radius.
   * @type { BorderRadiuses | Length }
   * @crossplatform
   * @since 10 
   */
  radius?: BorderRadiuses | Length;
  /**
   * Defines the border style.
   * @type { BorderStyle }
   * @since 7
   */
  /**
   * Defines the border style.
   * @type { EdgeStyles | BorderStyle }
   * @since 9
   */
  /**
   * Defines the border style.
   * @type { EdgeStyles | BorderStyle }
   * @crossplatform
   * @since 10 
   */
  style?: EdgeStyles | BorderStyle;
}

/**
 * Define the style of checkbox mark.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface MarkStyle {
  /**
   * Define the stroke color of checkbox mark.
   * @type { ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  strokeColor?: ResourceColor;

  /**
   * Define the size of checkbox mark.
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  size?: Length;

  /**
   * Define the stroke width of checkbox mark.
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  strokeWidth?: Length;
}

/**
 * Defines the ColorFilter object.
 * @since 9
 */
/**
 * Defines the ColorFilter object.
 * @crossplatform
 * @since 10 
 */
declare class ColorFilter {
  /**
   * Creates ColorFilter with 4*5 matrix.
   * @param value 4*5 color matrix values. The value[m*n] is located in the m row and n column. The matrix is row-first.
   * @since 9
   */
  /**
   * Creates ColorFilter with 4*5 matrix.
   * @param value 4*5 color matrix values. The value[m*n] is located in the m row and n column. The matrix is row-first.
   * @crossplatform
   * @since 10 
   */
  constructor(value: number[]);
}

declare module "GlobalResource" {
  module "GlobalResource" {
    // @ts-ignore
    export { Resource };
  }
}
