/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 *
 * @interface Resource
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the data type of the interface restriction.
 *
 * @interface Resource
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 * Defines the data type of the interface restriction.
 *
 * @interface Resource
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
declare interface Resource {
  /**
   * Set id.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Set id.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Set id.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  readonly id: number;

  /**
   * Set type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Set type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Set type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  readonly type: number;

  /**
   * Set params.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Set params.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Set params.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  readonly params?: any[];

  /**
   * Set bundleName.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Set bundleName.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  readonly bundleName: string;

  /**
   * Set moduleName.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Set moduleName.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  readonly moduleName: string;
}

/**
 * Defines the length property with string, number and resource unit.
 *
 * @since 7
 */
/**
 * Defines the length property with string, number and resource unit.
 *
 * @since 9
 * @form
 */
/**
 * Defines the length property with string, number and resource unit.
 *
 * @crossplatform
 * @since 10
 * @form
 */
declare type Length = string | number | Resource;

/**
 * Defines the length property with number in units of px.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare type PX = `${number}px`;

/**
 * Defines the length property with number in units of vp.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare type VP = `${number}vp`;

/**
 * Defines the length property with number in units of fp.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare type FP = `${number}fp`;

/**
 * Defines the length property with number in units of lpx.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare type LPX = `${number}lpx`;

/**
 * Defines the length property with number in units of Percentage.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare type Percentage = `${number}%`;

/**
 * Defines the angle property with number in units of deg.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare type Degree = `${number}deg`;

/**
 * Defines the dimension property with number with units(vp|px|fp|lpx|%), number and resource unit.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare type Dimension = PX | VP | FP | LPX | Percentage | number | Resource;

/**
 * Defines the string which can use resource.
 *
 * @since 7
 */
/**
 * Defines the string which can use resource.
 *
 * @since 9
 * @form
 */
/**
 * Defines the string which can use resource.
 *
 * @crossplatform
 * @since 10
 * @form
 */
declare type ResourceStr = string | Resource;

/**
 * Defines the padding property.
 *
 * @since 7
 */
/**
 * Defines the padding property.
 *
 * @since 9
 * @form
 */
/**
 * Defines the padding property.
 *
 * @crossplatform
 * @since 10
 * @form
 */
declare type Padding = {
  /**
   * top property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * top property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * top property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  top?: Length;

  /**
   * right property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * right property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * right property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  right?: Length;

  /**
   * bottom property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * bottom property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * bottom property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  bottom?: Length;

  /**
   * left property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * left property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * left property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  left?: Length;
};

/**
 * Defines the margin property.
 *
 * @since 7
 */
/**
 * Defines the margin property.
 *
 * @since 9
 * @form
 */
/**
 * Defines the margin property.
 *
 * @crossplatform
 * @since 10
 * @form
 */
declare type Margin = Padding;

/**
 * Defines the border width property.
 *
 * @since 9
 * @form
 */
/**
 * Defines the border width property.
 *
 * @crossplatform
 * @since 10
 * @form
 */
declare type EdgeWidths = {
  /**
   * top property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * top property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  top?: Length;

  /**
   * right property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * right property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  right?: Length;

  /**
   * bottom property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * bottom property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  bottom?: Length;

  /**
   * left property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * left property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  left?: Length;
};

/**
 * Defines the border radius property.
 *
 * @since 9
 * @form
 */
/**
 * Defines the border radius property.
 *
 * @crossplatform
 * @since 10
 * @form
 */
declare type BorderRadiuses = {
  /**
   * top-left property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * top-left property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  topLeft?: Length;

  /**
   * top-right property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * top-right property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  topRight?: Length;

  /**
   * bottom-left property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * bottom-left property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  bottomLeft?: Length;

  /**
   * bottom-right property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * bottom-right property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  bottomRight?: Length;
};

/**
 * Defines the border color property.
 *
 * @since 9
 * @form
 */
/**
 * Defines the border color property.
 *
 * @crossplatform
 * @since 10
 * @form
 */
declare type EdgeColors = {
  /**
   * top property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * top property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  top?: ResourceColor;

  /**
   * right property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * right property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  right?: ResourceColor;

  /**
   * bottom property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * bottom property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  bottom?: ResourceColor;

  /**
   * left property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * left property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  left?: ResourceColor;
};

/**
 * Defines the border style property.
 *
 * @since 9
 * @form
 */
/**
 * Defines the border style property.
 *
 * @crossplatform
 * @since 10
 * @form
 */
declare type EdgeStyles = {
  /**
   * top property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * top property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  top?: BorderStyle;

  /**
   * right property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * right property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  right?: BorderStyle;

  /**
   * bottom property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * bottom property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  bottom?: BorderStyle;

  /**
   * left property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * left property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  left?: BorderStyle;
};

/**
 * Defines the offset property.
 *
 * @since 7
 */
/**
 * Defines the offset property.
 *
 * @crossplatform
 * @since 10
 */
declare type Offset = {
  /**
   * dx property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * dx property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  dx: Length;

  /**
   * dy property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * dy property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  dy: Length;
};

/**
 * Defines the color which can use resource.
 *
 * @since 7
 */
/**
 * Defines the color which can use resource.
 *
 * @since 9
 * @form
 */
/**
 * Defines the color which can use resource.
 *
 * @crossplatform
 * @since 10
 * @form
 */
declare type ResourceColor = Color | number | string | Resource;

/**
 * Defines the length constrain property.
 *
 * @since 9
 * @form
 */
/**
 * Defines the length constrain property.
 *
 * @crossplatform
 * @since 10
 * @form
 */
declare type LengthConstrain = {
  /**
   * minimum length.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * minimum length.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  minLength: Length;

  /**
   * maximum length.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * maximum length.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  maxLength: Length;
};

/**
 * Defines the font used for text.
 *
 * @interface Font
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the font used for text.
 *
 * @interface Font
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare interface Font {
  /**
   * font size.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * font size.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  size?: Length;

  /**
   * font weight.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * font weight.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  weight?: FontWeight | number | string;

  /**
   * font family.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * font family.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  family?: string | Resource;

  /**
   * font style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * font style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  style?: FontStyle;
}

/**
 * Defines the area property.
 *
 * @interface Area
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the area property.
 *
 * @interface Area
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 * Defines the area property.
 *
 * @interface Area
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
declare interface Area {
  /**
   * Defines the width property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Defines the width property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Defines the width property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  width: Length;

  /**
   * Defines the height property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Defines the height property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Defines the height property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  height: Length;

  /**
   * Defines the local position.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Defines the local position.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Defines the local position.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  position: Position;

  /**
   * Defines the global position.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Defines the global position.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Defines the global position.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  globalPosition: Position;
}

/**
 * Defines the position.
 *
 * @interface Position
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the position.
 *
 * @interface Position
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 * Defines the position.
 *
 * @interface Position
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
declare interface Position {
  /**
   * Coordinate x of the Position.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Coordinate x of the Position.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Coordinate x of the Position.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  x?: Length;

  /**
   * Coordinate y of the Position.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Coordinate y of the Position.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Coordinate y of the Position.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  y?: Length;
}

/**
 * Defines the constrain size options.
 *
 * @interface ConstraintSizeOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the constrain size options.
 *
 * @interface ConstraintSizeOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 * Defines the constrain size options.
 *
 * @interface ConstraintSizeOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
declare interface ConstraintSizeOptions {
  /**
   * Defines the min width.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Defines the min width.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Defines the min width.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  minWidth?: Length;

  /**
   * Defines the max width.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Defines the max width.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Defines the max width.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  maxWidth?: Length;

  /**
   * Defines the min height.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Defines the min height.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Defines the min height.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  minHeight?: Length;

  /**
   * Defines the max height.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Defines the max height.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Defines the max height.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  maxHeight?: Length;
}

/**
 * Defines the size options.
 *
 * @interface SizeOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the size options.
 *
 * @interface SizeOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 * Defines the size options.
 *
 * @interface SizeOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
declare interface SizeOptions {
  /**
   * Defines the width.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Defines the width.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Defines the width.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  width?: Length;

  /**
   * Defines the height.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Defines the height.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Defines the height.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  height?: Length;
}

/**
 * Defines the options of border.
 *
 * @interface BorderOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the options of border.
 *
 * @interface BorderOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 * Defines the options of border.
 *
 * @interface BorderOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
declare interface BorderOptions {
  /**
   * Defines the border width.
   *
   * @type { ?(EdgeWidths | Length) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Defines the border width.
   *
   * @type { ?(EdgeWidths | Length) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Defines the border width.
   *
   * @type { ?(EdgeWidths | Length) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  width?: EdgeWidths | Length;

  /**
   * Defines the border color.
   *
   * @type { ?(EdgeColors | ResourceColor) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Defines the border color.
   *
   * @type { ?(EdgeColors | ResourceColor) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Defines the border color.
   *
   * @type { ?(EdgeColors | ResourceColor) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  color?: EdgeColors | ResourceColor;

  /**
   * Defines the border radius.
   *
   * @type { ?(BorderRadiuses | Length) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Defines the border radius.
   *
   * @type { ?(BorderRadiuses | Length) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Defines the border radius.
   *
   * @type { ?(BorderRadiuses | Length) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  radius?: BorderRadiuses | Length;

  /**
   * Defines the border style.
   *
   * @type { ?(EdgeStyles | BorderStyle) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Defines the border style.
   *
   * @type { ?(EdgeStyles | BorderStyle) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Defines the border style.
   *
   * @type { ?(EdgeStyles | BorderStyle) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  style?: EdgeStyles | BorderStyle;
}

/**
 * Define the style of checkbox mark.
 *
 * @interface MarkStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare interface MarkStyle {
  /**
   * Define the stroke color of checkbox mark.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  strokeColor?: ResourceColor;

  /**
   * Define the size of checkbox mark.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  size?: Length;

  /**
   * Define the stroke width of checkbox mark.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  strokeWidth?: Length;
}

/**
 * Defines the ColorFilter object.
 *
 * @since 9
 * @form
 */
/**
 * Defines the ColorFilter object.
 *
 * @crossplatform
 * @since 10
 * @form
 */
declare class ColorFilter {
  /**
   * Creates ColorFilter with 4*5 matrix.
   *
   * @param { number[] } value 4*5 color matrix values. The value[m*n] is located in the m row and n column. The matrix is row-first.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Creates ColorFilter with 4*5 matrix.
   *
   * @param { number[] } value 4*5 color matrix values. The value[m*n] is located in the m row and n column. The matrix is row-first.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  constructor(value: number[]);
}

declare module 'GlobalResource' {
  module 'GlobalResource' {
    // @ts-ignore
    export { Resource };
  }
}
