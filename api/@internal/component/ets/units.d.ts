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
 * @form
 * @since 9
 */
declare interface Resource {
  /**
   * Set id.
   * @since 7
   */
  /**
   * Set id.
   * @form
   * @since 9
   */
  readonly id: number;

  /**
   * Set type.
   * @since 7
   */
  /**
   * Set type.
   * @form
   * @since 9
   */
  readonly type: number;

  /**
   * Set params.
   * @since 7
   */
  /**
   * Set params.
   * @form
   * @since 9
   */
  readonly params?: any[];

  /**
   * Set bundleName.
   * @form
   * @since 9
   */
  readonly bundleName: string;

  /**
   * Set moduleName.
   * @form
   * @since 9
   */
  readonly moduleName: string;
}

/**
 * Defines the length property with string, number and resource unit.
 * @since 7
 */
/**
 * Defines the length property with string, number and resource unit.
 * @form
 * @since 9
 * @deprecated since 10
 * @useinstead ILength
 */
declare type Length = string | number | Resource;

/**
 * Defines the length property with number in units of px.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare type Px = `${number}px`;

/**
 * Defines the length property with number in units of vx.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare type Vp = `${number}vp`;

/**
 * Defines the length property with number in units of fp.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare type Fp = `${number}fp`;

/**
 * Defines the length property with number in units of Lpx.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare type Lpx = `${number}lpx`;

/**
 * Defines the length property with number in units of Percentage.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare type Percentage = `${number}%`

/**
 * Defines the angle property with number in units of deg.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare type Deg = `${number}deg`

/**
 * Defines the length property with number with units(vp|px|fp|lxp|%), number and resource unit.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare type ILength = Px | Vp | Fp | Lpx | Percentage | number | Resource;

/**
 * Defines the string type.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 * @deprecated since 10
 */
declare type StringType = string;

/**
 * Defines the string which can use resource.
 * @since 7
 */
/**
 * Defines the string which can use resource.
 * @form
 * @since 9
 */
declare type ResourceStr = string | Resource;

/**
 * Defines the padding property.
 * @since 7
 */
/**
 * Defines the padding property.
 * @form
 * @since 9
 */
declare type Padding = {
  /**
   * top property.
   * @since 7
   */
  /**
   * top property.
   * @form
   * @since 9
   */
  /**
   * top property.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */  
  top?: Length | ILength;

  /**
   * right property.
   * @since 7
   */
  /**
   * right property.
   * @form
   * @since 9
   */
  /**
   * right property.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */  
  right?: Length | ILength;

  /**
   * bottom property.
   * @since 7
   */
  /**
   * bottom property.
   * @form
   * @since 9
   */
  /**
   * bottom property.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */  
  bottom?: Length | ILength;

  /**
   * left property.
   * @since 7
   */
  /**
   * left property.
   * @form
   * @since 9
   */
  /**
   * left property.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */  
  left?: Length | ILength;
};

/**
 * Defines the margin property.
 * @since 7
 */
/**
 * Defines the margin property.
 * @form
 * @since 9
 */
declare type Margin = Padding;

/**
 * Defines the border width property.
 * @form
 * @since 9
 */
declare type EdgeWidths = {
  /**
   * top property.
   * @form
   * @since 9
   */
  /**
   * top property.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */  
  top?: Length | ILength;

  /**
   * right property.
   * @form
   * @since 9
   */
  /**
   * right property.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */  
  right?: Length | ILength;

  /**
   * bottom property.
   * @form
   * @since 9
   */
  /**
   * bottom property.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */  
  bottom?: Length | ILength;

  /**
   * left property.
   * @form
   * @since 9
   */
  /**
   * left property.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */  
  left?: Length | ILength;
};

/**
 * Defines the border radius property.
 * @form
 * @since 9
 */
declare type BorderRadiuses = {
  /**
   * top-left property.
   * @form
   * @since 9
   */
  /**
   * top-left property.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */  
  topLeft?: Length | ILength;

  /**
   * top-right property.
   * @form
   * @since 9
   */
  /**
   * top-right property.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */  
  topRight?: Length | ILength;

  /**
   * bottom-left property.
   * @form
   * @since 9
   */
  /**
   * bottom-left property.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */  
  bottomLeft?: Length | ILength;

  /**
   * bottom-right property.
   * @form
   * @since 9
   */
  /**
   * bottom-right property.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */  
  bottomRight?: Length | ILength;
};

/**
 * Defines the border color property.
 * @form
 * @since 9
 */
declare type EdgeColors = {
  /**
   * top property.
   * @form
   * @since 9
   */
  top?: ResourceColor;

  /**
   * right property.
   * @form
   * @since 9
   */
  right?: ResourceColor;

  /**
   * bottom property.
   * @form
   * @since 9
   */
  bottom?: ResourceColor;

  /**
   * left property.
   * @form
   * @since 9
   */
  left?: ResourceColor;
};

/**
 * Defines the border style property.
 * @form
 * @since 9
 */
declare type EdgeStyles = {
  /**
   * top property.
   * @form
   * @since 9
   */
  top?: BorderStyle;

  /**
   * right property.
   * @form
   * @since 9
   */
  right?: BorderStyle;

  /**
   * bottom property.
   * @form
   * @since 9
   */
  bottom?: BorderStyle;

  /**
   * left property.
   * @form
   * @since 9
   */
  left?: BorderStyle;
};

/**
 * Defines the offset property.
 * @since 7
 */
/**
 * Defines the offset property.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare type Offset = {
  /**
   * dx property.
   */
  dx: Length | ILength;

  /**
   * dy property.
   */
  dy: Length | ILength;
};

/**
 * Defines the color which can use resource.
 * @since 7
 */
/**
 * Defines the color which can use resource.
 * @form
 * @since 9
 */
declare type ResourceColor = Color | number | string | Resource;

/**
 * Defines the length constrain property.
 * @form
 * @since 9
 */
declare type LengthConstrain = {
  /**
   * minimum length.
   * @form
   * @since 9
   */
  /**
   * minimum length.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */  
  minLength: Length | ILength;

  /**
   * maximum length.
   * @form
   * @since 9
   */
  /**
   * maximum length.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */  
  maxLength: Length | ILength;
};

/**
 * Defines the font used for text.
 * @since 7
 */
declare interface Font {
  /**
   * font size.
   */
  /**
   * font size.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */  
  size?: Length | ILength;

  /**
   * font weight.
   */
  weight?: FontWeight | number | string;

  /**
   * font family.
   */
  family?: string | Resource;

  /**
   * font style.
   */
  style?: FontStyle;
}

/**
 * Defines the area property.
 * @since 8
 */
/**
 * Defines the area property.
 * @form
 * @since 9
 */
declare interface Area {
  /**
   * Defines the width property.
   * @since 8
   */
  /**
   * Defines the width property.
   * @form
   * @since 9
   */
  /**
   * Defines the width property.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */  
  width: Length | ILength;

  /**
   * Defines the height property.
   * @since 8
   */
  /**
   * Defines the height property.
   * @form
   * @since 9
   */
  /**
   * Defines the height property.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */  
  height: Length | ILength;

  /**
   * Defines the local position.
   * @since 8
   */
  /**
   * Defines the local position.
   * @form
   * @since 9
   */
  position: Position;

  /**
   * Defines the global position.
   * @since 8
   */
  /**
   * Defines the global position.
   * @form
   * @since 9
   */
  globalPosition: Position;
}

/**
 * Defines the position.
 * @since 7
 */
/**
 * Defines the position.
 * @form
 * @since 9
 */
/**
 * Defines the position.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface Position {
  /**
   * Coordinate x of the Position.
   * @since 7
   */
  /**
   * Coordinate x of the Position.
   * @form
   * @since 9
   */
  /**
   * Coordinate x of the Position.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */  
  x?: Length | ILength;
  /**
   * Coordinate y of the Position.
   * @since 7
   */
  /**
   * Coordinate y of the Position.
   * @form
   * @since 9
   */
  /**
   * Coordinate y of the Position.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */  
  y?: Length | ILength;
}

/**
 * Defines the constrain size options.
 * @since 7
 */
/**
 * Defines the constrain size options.
 * @form
 * @since 9
 */
/**
 * Defines the constrain size options.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface ConstraintSizeOptions {
  /**
   * Defines the min width.
   * @since 7
   */
  /**
   * Defines the min width.
   * @form
   * @since 9
   */
  /**
   * Defines the min width.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */  
  minWidth?: Length | ILength;
  /**
   * Defines the max width.
   * @since 7
   */
  /**
   * Defines the max width.
   * @form
   * @since 9
   */
  /**
   * Defines the max width.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */  
  maxWidth?: Length | ILength;
  /**
   * Defines the min height.
   * @since 7
   */
  /**
   * Defines the min height.
   * @form
   * @since 9
   */
  /**
   * Defines the min height.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */  
  minHeight?: Length | ILength;
  /**
   * Defines the max height.
   * @since 7
   */
  /**
   * Defines the max height.
   * @form
   * @since 9
   */
  /**
   * Defines the max height.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */  
  maxHeight?: Length | ILength;
}

/**
 * Defines the size options.
 * @since 7
 */
/**
 * Defines the size options.
 * @form
 * @since 9
 */
/**
 * Defines the size options.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface SizeOptions {
  /**
   * Defines the width.
   * @since 7
   */
  /**
   * Defines the width.
   * @form
   * @since 9
   */
  /**
   * Defines the width.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */  
  width?: Length | ILength;
  /**
   * Defines the height.
   * @since 7
   */
  /**
   * Defines the height.
   * @form
   * @since 9
   */
  /**
   * Defines the width.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */    
  height?: Length | ILength;
}

/**
 * Defines the options of border.
 * @since 7
 */
/**
 * Defines the options of border.
 * @form
 * @since 9
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
   * @form
   * @since 9
   */
  /**
   * Defines the border width.
   * @type { EdgeWidths | Length | ILength }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */  
  width?: EdgeWidths | Length | ILength;
  /**
   * Defines the border color.
   * @type { ResourceColor }
   * @since 7
   */
  /**
   * Defines the border color.
   * @type { EdgeColors | ResourceColor }
   * @form
   * @since 9
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
   * @form
   * @since 9
   */
  /**
   * Defines the border radius.
   * @type { BorderRadiuses | Length | ILength }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */  
  radius?: BorderRadiuses | Length | ILength;
  /**
   * Defines the border style.
   * @type { BorderStyle }
   * @since 7
   */
  /**
   * Defines the border style.
   * @type { EdgeStyles | BorderStyle }
   * @form
   * @since 9
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
   * @type { Length | ILength }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  size?: Length | ILength;

  /**
   * Define the stroke width of checkbox mark.
   * @type { Length | ILength }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  strokeWidth?: Length | ILength;
}

/**
 * Defines the ColorFilter object.
 * @form
 * @since 9
 */
declare class ColorFilter {
  /**
   * Creates ColorFilter with 4*5 matrix.
   * @param value 4*5 color matrix values. The value[m*n] is located in the m row and n column. The matrix is row-first.
   * @form
   * @since 9
   */
  constructor(value: number[]);
}

declare module "GlobalResource" {
  module "GlobalResource" {
    // @ts-ignore
    export { Resource };
  }
}
