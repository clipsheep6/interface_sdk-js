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
 * @file
 * @kit ArkUI
 */

/*** if arkts 1.2 */
import { Resource as _Resource } from '../../global/resource';
import { Color, BorderStyle, FontWeight, FontStyle, DividerMode} from './enums';
import { OutlineStyle } from './common';
import { LengthMetricsUnit as _LengthMetricsUnit, LengthMetrics as _LengthMetrics, ColorMetrics as _ColorMetrics } from '../Graphics';
/*** endif */

/**
 * Defines the data type of the interface restriction.
 *
 * @typedef { import('../api/global/resource').Resource } Resource
 * @interface Resource
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the data type of the interface restriction.
 *
 * @typedef { import('../api/global/resource').Resource } Resource
 * @interface Resource
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the data type of the interface restriction.
 *
 * @typedef { import('../api/global/resource').Resource } Resource
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the data type of the interface restriction.
 *
 * @typedef { import('../api/global/resource').Resource } Resource
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare type Resource = import('../api/global/resource').Resource;

/**
 * Defines the data type of the interface restriction.
 *
 * @typedef { _Resource } Resource
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
declare type Resource = _Resource;

/**
 * Defines the length property with string, number and resource unit.
 *
 * @typedef { string | number | Resource } Length
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the length property with string, number and resource unit.
 *
 * @typedef { string | number | Resource } Length
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the length property with string, number and resource unit.
 *
 * @typedef { string | number | Resource } Length
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the length property with string, number and resource unit.
 *
 * @typedef { string | number | Resource } Length
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare type Length = string | number | Resource;

/**
 * Defines the length property with number in units of px.
 *
 * @typedef { `${number}px` } PX
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Defines the length property with number in units of px.
 *
 * @typedef { `${number}px` } PX
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
/**
 * Defines the length property with number in units of px.
 *
 * @typedef { `${number}px` } PX
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare type PX = `${number}px`;


/**
 * Defines the length property with number in units of px.
 *
 * @typedef { string } PX
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
declare type PX = string;
/**
 * Defines the length property with number or number in units of vp.
 *
 * @typedef { `${number}vp` | number } VP
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Defines the length property with number or number in units of vp.
 *
 * @typedef { `${number}vp` | number } VP
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
/**
 * Defines the length property with number or number in units of vp.
 *
 * @typedef { `${number}vp` | number } VP
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare type VP = `${number}vp` | number;

/**
 * Defines the length property with number or number in units of vp.
 *
 * @typedef { string | number } VP
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
declare type VP = string | number;

/**
 * Defines the length property with number in units of fp.
 *
 * @typedef { `${number}fp` } FP
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Defines the length property with number in units of fp.
 *
 * @typedef { `${number}fp` } FP
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
/**
 * Defines the length property with number in units of fp.
 *
 * @typedef { `${number}fp` } FP
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare type FP = `${number}fp`;

/**
 * Defines the length property with number in units of fp.
 *
 * @typedef { string } FP
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
declare type FP = string;

/**
 * Defines the length property with number in units of lpx.
 *
 * @typedef { `${number}lpx` } LPX
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Defines the length property with number in units of lpx.
 *
 * @typedef { `${number}lpx` } LPX
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
/**
 * Defines the length property with number in units of lpx.
 *
 * @typedef { `${number}lpx` } LPX
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare type LPX = `${number}lpx`;

/**
 * Defines the length property with number in units of lpx.
 *
 * @typedef { string } LPX
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
declare type LPX = string;

/**
 * Defines the length property with number in units of Percentage.
 *
 * @typedef { `${number}%` } Percentage
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Defines the length property with number in units of Percentage.
 *
 * @typedef { `${number}%` } Percentage
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
/**
 * Defines the length property with number in units of Percentage.
 *
 * @typedef { `${number}%` } Percentage
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare type Percentage = `${number}%`;

/**
 * Defines the length property with number in units of Percentage.
 *
 * @typedef { string } Percentage
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
declare type Percentage = string;

/**
 * Defines the angle property with number in units of deg.
 *
 * @typedef { `${number}deg` } Degree
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Defines the angle property with number in units of deg.
 *
 * @typedef { `${number}deg` } Degree
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
declare type Degree = `${number}deg`;

/**
 * Defines the angle property with number in units of deg.
 *
 * @typedef { string } Degree
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
declare type Degree = string;

/**
 * Defines the dimension property with number with units(vp|px|fp|lpx|%), and resource.
 *
 * @typedef { PX | VP | FP | LPX | Percentage | Resource } Dimension
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Defines the dimension property with number with units(vp|px|fp|lpx|%), and resource.
 *
 * @typedef { PX | VP | FP | LPX | Percentage | Resource } Dimension
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
/**
 * Defines the dimension property with number with units(vp|px|fp|lpx|%), and resource.
 *
 * @typedef { PX | VP | FP | LPX | Percentage | Resource } Dimension
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'18','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare type Dimension = PX | VP | FP | LPX | Percentage | Resource;

/**
 * Defines the string which can use resource.
 *
 * @typedef { string | Resource } ResourceStr
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the string which can use resource.
 *
 * @typedef { string | Resource } ResourceStr
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the string which can use resource.
 *
 * @typedef { string | Resource } ResourceStr
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the string which can use resource.
 *
 * @typedef { string | Resource } ResourceStr
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare type ResourceStr = string | Resource;

/**
 * Defines the padding property.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the padding property.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the padding property.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the padding property.
 *
 * @typedef { object } Padding
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
/**
 * Defines the padding property.
 *
 * Anonymous Object Rectification
 * @typedef { object } Padding
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 * @arkts 1.1&1.2
 */
declare interface Padding {
  /**
   * top property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * top property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * top property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * top property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   * @form
   */
  top?: Length;

  /**
   * right property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * right property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * right property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * right property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   * @form
   */
  right?: Length;

  /**
   * bottom property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * bottom property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * bottom property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * bottom property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   * @form
   */
  bottom?: Length;

  /**
   * left property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * left property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * left property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * left property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   * @form
   */
  left?: Length;
};

/**
 * Defines the localized padding property.
 *
 * @interface LocalizedPadding
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface LocalizedPadding {
  /**
   * top property.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  top?: LengthMetrics;

  /**
   * end property.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  end?: LengthMetrics;

  /**
   * bottom property.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  bottom?: LengthMetrics;

  /**
   * start property.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  start?: LengthMetrics;
};

/**
 * Defines the margin property.
 *
 * @typedef { Padding } Margin
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the margin property.
 *
 * @typedef { Padding } Margin
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the margin property.
 *
 * @typedef { Padding } Margin
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the margin property.
 *
 * @typedef { Padding } Margin
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare type Margin = Padding;

/**
 * Defines the border width property.
 *
 * @typedef { EdgeWidths } EdgeWidth
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the border width property.
 *
 * @typedef { EdgeWidths } EdgeWidth
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare type EdgeWidth = EdgeWidths;

/**
 * Defines the border width property.
 *
 * @typedef { object } EdgeWidths
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the border width property.
 *
 * @typedef { object } EdgeWidths
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the border width property.
 *
 * @typedef { object } EdgeWidths
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
/**
 * Defines the border width property.
 *
 * Anonymous Object Rectification
 * @typedef { object } EdgeWidths
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 * @arkts 1.1&1.2
 */
declare interface EdgeWidths {
  /**
   * top property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * top property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * top property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   * @form
   */
  top?: Length;

  /**
   * right property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * right property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * right property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   * @form
   */
  right?: Length;

  /**
   * bottom property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * bottom property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * bottom property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   * @form
   */
  bottom?: Length;

  /**
   * left property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * left property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * left property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   * @form
   */
  left?: Length;
};

/**
 * Defines the localized border width property.
 *
 * @interface LocalizedEdgeWidths
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface LocalizedEdgeWidths {
  /**
   * top property.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  top?: LengthMetrics;

  /**
   * end property.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  end?: LengthMetrics;

  /**
   * bottom property.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  bottom?: LengthMetrics;

  /**
   * start property.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  start?: LengthMetrics;
};

/**
 * Defines the outline width property.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 11
 */
/**
 * Defines the outline width property.
 *
 * @typedef { object } EdgeOutlineWidths
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
/**
 * Defines the outline width property.
 *
 * @interface EdgeOutlineWidths
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 * @arkts 1.1&1.2
 */
declare interface EdgeOutlineWidths {
  /**
   * top outline width property.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   * @form
   */
  /**
   * top outline width property.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  top?: Dimension;

  /**
   * right outline width property.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   * @form
   */
  /**
   * right outline width property.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  right?: Dimension;

  /**
   * bottom outline width property.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   * @form
   */
  /**
   * bottom outline width property.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  bottom?: Dimension;

  /**
   * left outline width property.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   * @form
   */
  /**
   * left outline width property.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  left?: Dimension;
};

/**
 * Defines the border radius property.
 *
 * @typedef { object } BorderRadiuses
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the border radius property.
 *
 * @typedef { object } BorderRadiuses
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the border radius property.
 *
 * @typedef { object } BorderRadiuses
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
/**
 * Defines the border radius property.
 *
 * Anonymous Object Rectification
 * @typedef { object } BorderRadiuses
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 * @arkts 1.1&1.2
 */
declare interface BorderRadiuses {
  /**
   * top-left property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * top-left property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * top-left property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   * @form
   */
  topLeft?: Length;

  /**
   * top-right property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * top-right property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * top-right property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   * @form
   */
  topRight?: Length;

  /**
   * bottom-left property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * bottom-left property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * bottom-left property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   * @form
   */
  bottomLeft?: Length;

  /**
   * bottom-right property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * bottom-right property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * bottom-right property.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   * @form
   */
  bottomRight?: Length;
};

/**
 * Defines the localized border radius property.
 *
 * @interface LocalizedBorderRadiuses
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface LocalizedBorderRadiuses  {
  /**
   * top-start property.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  topStart?: LengthMetrics;

  /**
   * top-end property.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  topEnd?: LengthMetrics;

  /**
   * bottom-start property.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  bottomStart?: LengthMetrics;

  /**
   * bottom-end property.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  bottomEnd?: LengthMetrics;
};

/**
 * Defines the outline radius property.
 *
 * @typedef { object } OutlineRadiuses
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 11
 */
/**
 * Defines the outline radius property.
 *
 * @typedef { object } OutlineRadiuses
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
/**
 * Defines the outline radius property.
 *
 * @interface OutlineRadiuses
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 * @arkts 1.1&1.2
 */
declare interface OutlineRadiuses {
  /**
   * top-left property.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   * @form
   */
  /**
   * top-left property.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  topLeft?: Dimension;

  /**
   * top-right property.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   * @form
   */
  /**
   * top-right property.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  topRight?: Dimension;

  /**
   * bottom-left property.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   * @form
   */
  /**
   * bottom-left property.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  bottomLeft?: Dimension;

  /**
   * bottom-right property.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   * @form
   */
  /**
   * bottom-right property.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  bottomRight?: Dimension;
};

/**
 * Defines the border color property.
 *
 * @typedef { object } EdgeColors
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the border color property.
 *
 * @typedef { object } EdgeColors
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the border color property.
 *
 * @typedef { object } EdgeColors
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
/**
 * Defines the border color property.
 *
 * Anonymous Object Rectification
 * @typedef { object } EdgeColors
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 * @arkts 1.1&1.2
 */
declare interface EdgeColors {
  /**
   * top property.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * top property.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * top property.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   * @form
   */
  top?: ResourceColor;

  /**
   * right property.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * right property.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * right property.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   * @form
   */
  right?: ResourceColor;

  /**
   * bottom property.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * bottom property.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * bottom property.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   * @form
   */
  bottom?: ResourceColor;

  /**
   * left property.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * left property.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * left property.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   * @form
   */
  left?: ResourceColor;
};

/**
 * Defines the localized border color property.
 *
 * @interface LocalizedEdgeColors
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface LocalizedEdgeColors  {
  /**
   * top property.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  top?: ResourceColor;

  /**
   * end property.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  end?: ResourceColor;

  /**
   * bottom property.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  bottom?: ResourceColor;

  /**
   * start property.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  start?: ResourceColor;
};

/**
 * Defines the localized margin property.
 *
 * @typedef { LocalizedPadding } LocalizedMargin
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
*/
declare type LocalizedMargin = LocalizedPadding;

/**
 * Defines the border style property.
 *
 * @typedef { object } EdgeStyles
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the border style property.
 *
 * @typedef { object } EdgeStyles
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the border style property.
 *
 * @typedef { object } EdgeStyles
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
/**
 * Defines the border style property.
 *
 * Anonymous Object Rectification
 * @typedef { object } EdgeStyles
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 * @arkts 1.1&1.2
 */
declare interface EdgeStyles {
  /**
   * top property.
   *
   * @type { ?BorderStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * top property.
   *
   * @type { ?BorderStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * top property.
   *
   * @type { ?BorderStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   * @form
   */
  top?: BorderStyle;

  /**
   * right property.
   *
   * @type { ?BorderStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * right property.
   *
   * @type { ?BorderStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * right property.
   *
   * @type { ?BorderStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   * @form
   */
  right?: BorderStyle;

  /**
   * bottom property.
   *
   * @type { ?BorderStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * bottom property.
   *
   * @type { ?BorderStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * bottom property.
   *
   * @type { ?BorderStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   * @form
   */
  bottom?: BorderStyle;

  /**
   * left property.
   *
   * @type { ?BorderStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * left property.
   *
   * @type { ?BorderStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * left property.
   *
   * @type { ?BorderStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   * @form
   */
  left?: BorderStyle;
};

/**
 * Defines the outline style property.
 *
 * @typedef { object } EdgeOutlineStyles
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 11
 */
/**
 * Defines the outline style property.
 *
 * @typedef { object } EdgeOutlineStyles
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
/**
 * Defines the outline style property.
 *
 * @interface EdgeOutlineStyles
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 * @arkts 1.1&1.2
 */
declare interface EdgeOutlineStyles {
  /**
   * top property.
   *
   * @type { ?OutlineStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   * @form
   */
  /**
   * top property.
   *
   * @type { ?OutlineStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  top?: OutlineStyle;

  /**
   * right property.
   *
   * @type { ?OutlineStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   * @form
   */
  /**
   * right property.
   *
   * @type { ?OutlineStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  right?: OutlineStyle;

  /**
   * bottom property.
   *
   * @type { ?OutlineStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   * @form
   */
  /**
   * bottom property.
   *
   * @type { ?OutlineStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  bottom?: OutlineStyle;

  /**
   * left property.
   *
   * @type { ?OutlineStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   * @form
   */
  /**
   * left property.
   *
   * @type { ?OutlineStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  left?: OutlineStyle;
};

/**
 * Defines the offset property.
 *
 * @typedef { object } Offset
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the offset property.
 *
 * @typedef { object } Offset
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the offset property.
 *
 * @typedef { object } Offset
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface Offset {
  /**
   * dx property.
   *
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * dx property.
   *
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * dx property.
   *
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  dx: Length;

  /**
   * dy property.
   *
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * dy property.
   *
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * dy property.
   *
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  dy: Length;
};

/**
 * Defines the color which can use resource.
 *
 * @typedef { Color | number | string | Resource } ResourceColor
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the color which can use resource.
 *
 * @typedef { Color | number | string | Resource } ResourceColor
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the color which can use resource.
 *
 * @typedef { Color | number | string | Resource } ResourceColor
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the color which can use resource.
 *
 * @typedef { Color | number | string | Resource } ResourceColor
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare type ResourceColor = Color | number | string | Resource;

/**
 * Defines the length constrain property.
 *
 * @typedef { object } LengthConstrain
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the length constrain property.
 *
 * @typedef { object } LengthConstrain
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the length constrain property.
 *
 * @typedef { object } LengthConstrain
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
/**
 * Defines the length constrain property.
 *
 * Anonymous Object Rectification
 * @typedef { object } LengthConstrain
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 * @arkts 1.1&1.2
 */
declare interface LengthConstrain {
  /**
   * minimum length.
   *
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * minimum length.
   *
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * minimum length.
   *
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   * @form
   */
  minLength: Length;

  /**
   * maximum length.
   *
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * maximum length.
   *
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * maximum length.
   *
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   * @form
   */
  maxLength: Length;
};

/**
 * Defines VoidCallback.
 *
 * @typedef { function } VoidCallback
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare type VoidCallback  = () => void;

/**
 * Defines length metrics unit.
 *
 * @typedef { import('../api/arkui/Graphics').LengthMetricsUnit } LengthMetricsUnit
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare type LengthMetricsUnit = import('../api/arkui/Graphics').LengthMetricsUnit;

/**
 * Defines length metrics unit.
 *
 * @typedef { _LengthMetricsUnit } LengthMetricsUnit
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
declare type LengthMetricsUnit = _LengthMetricsUnit;

/**
 * Defines LengthMetrics.
 *
 * @typedef { import('../api/arkui/Graphics').LengthMetrics } LengthMetrics
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type LengthMetrics = import('../api/arkui/Graphics').LengthMetrics;

/**
 * Defines LengthMetrics.
 *
 * @typedef { _LengthMetrics } LengthMetrics
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
declare type LengthMetrics = _LengthMetrics;

/**
 * Defines ColorMetrics.
 *
 * @typedef { import('../api/arkui/Graphics').ColorMetrics } ColorMetrics
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type ColorMetrics = import('../api/arkui/Graphics').ColorMetrics;

/**
 * Defines ColorMetrics.
 *
 * @typedef { _ColorMetrics } ColorMetrics
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
declare type ColorMetrics = _ColorMetrics;

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
/**
 * Defines the font used for text.
 *
 * @interface Font
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface Font {
  /**
   * font size.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * font size.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * font size.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  size?: Length;

  /**
   * font weight.
   *
   * @type { ?(FontWeight | number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * font weight.
   *
   * @type { ?(FontWeight | number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * font weight.
   *
   * @type { ?(FontWeight | number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  weight?: FontWeight | number | string;

  /**
   * font family.
   *
   * @type { ?(string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * font family.
   *
   * @type { ?(string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * font family.
   *
   * @type { ?(string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  family?: string | Resource;

  /**
   * font style.
   *
   * @type { ?FontStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * font style.
   *
   * @type { ?FontStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * font style.
   *
   * @type { ?FontStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
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
 * @form
 * @since 9
 */
/**
 * Defines the area property.
 *
 * @interface Area
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the area property.
 *
 * @interface Area
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface Area {
  /**
   * Defines the width property.
   *
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Defines the width property.
   *
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Defines the width property.
   *
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Defines the width property.
   *
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  width: Length;

  /**
   * Defines the height property.
   *
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Defines the height property.
   *
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Defines the height property.
   *
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Defines the height property.
   *
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  height: Length;

  /**
   * Defines the local position.
   *
   * @type { Position }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Defines the local position.
   *
   * @type { Position }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Defines the local position.
   *
   * @type { Position }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Defines the local position.
   *
   * @type { Position }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  position: Position;

  /**
   * Defines the global position.
   *
   * @type { Position }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Defines the global position.
   *
   * @type { Position }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Defines the global position.
   *
   * @type { Position }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Defines the global position.
   *
   * @type { Position }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
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
 * @form
 * @since 9
 */
/**
 * Defines the position.
 *
 * @interface Position
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the position.
 *
 * @interface Position
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface Position {
  /**
   * Coordinate x of the Position.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Coordinate x of the Position.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Coordinate x of the Position.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Coordinate x of the Position.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  x?: Length;

  /**
   * Coordinate y of the Position.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Coordinate y of the Position.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Coordinate y of the Position.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Coordinate y of the Position.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  y?: Length;
}

/**
 * Defines the LocalizedPosition.
 *
 * @interface LocalizedPosition
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface LocalizedPosition {
  /**
   * Coordinate start of the Position.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  start?: LengthMetrics;

  /**
   * Coordinate top of the Position.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  top?: LengthMetrics;
}

/**
 * Defines the Edges.
 *
 * @interface Edges
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface Edges {
  /**
   * top property.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  top?: Dimension;

  /**
   * left property.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  left?: Dimension;

   /**
   * bottom property.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  bottom?: Dimension;

  /**
   * right property.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  right?: Dimension;
}

/**
 * Defines the LocalizedEdges.
 *
 * @interface LocalizedEdges
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface LocalizedEdges {
  /**
   * top property.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  top?: LengthMetrics;

  /**
   * start property.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  start?: LengthMetrics;

  /**
   * bottom property.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  bottom?: LengthMetrics;

  /**
   * end property.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  end?: LengthMetrics;
}

/**
 * Defines the Bias.
 *
 * @interface Bias
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 11
 */
/**
 * Defines the Bias.
 *
 * @interface Bias
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface Bias {
  /**
   * Horizontal ratio of the Bias, it must be >= 0.
   *
   * @type { ?number }
   * @default 0.5
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Horizontal ratio of the Bias, it must be >= 0.
   *
   * @type { ?number }
   * @default 0.5
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  horizontal?: number;

  /**
   * Vertical ratio of the Bias, it must be >= 0.
   *
   * @type { ?number }
   * @default 0.5
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Vertical ratio of the Bias, it must be >= 0.
   *
   * @type { ?number }
   * @default 0.5
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  vertical?: number;
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
 * @form
 * @since 9
 */
/**
 * Defines the constrain size options.
 *
 * @interface ConstraintSizeOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the constrain size options.
 *
 * @interface ConstraintSizeOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface ConstraintSizeOptions {
  /**
   * Defines the min width.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Defines the min width.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Defines the min width.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Defines the min width.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  minWidth?: Length;

  /**
   * Defines the max width.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Defines the max width.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Defines the max width.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Defines the max width.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  maxWidth?: Length;

  /**
   * Defines the min height.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Defines the min height.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Defines the min height.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Defines the min height.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  minHeight?: Length;

  /**
   * Defines the max height.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Defines the max height.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Defines the max height.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Defines the max height.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
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
 * @form
 * @since 9
 */
/**
 * Defines the size options.
 *
 * @interface SizeOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the size options.
 *
 * @interface SizeOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface SizeOptions {
  /**
   * Defines the width.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Defines the width.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Defines the width.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Defines the width.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  width?: Length;

  /**
   * Defines the height.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Defines the height.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Defines the height.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Defines the height.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
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
 * @form
 * @since 9
 */
/**
 * Defines the options of border.
 *
 * @interface BorderOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the options of border.
 *
 * @interface BorderOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
/**
 * Defines the options of border.
 *
 * @interface BorderOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface BorderOptions {
  /**
   * Defines the border width.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Defines the border width.
   *
   * @type { ?(EdgeWidths | Length) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Defines the border width.
   *
   * @type { ?(EdgeWidths | Length) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Defines the border width.
   *
   * @type { ?(EdgeWidths | Length) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Defines the border width.
   *
   * @type { ?(EdgeWidths | Length | LocalizedEdgeWidths) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  width?: EdgeWidths | Length | LocalizedEdgeWidths;

  /**
   * Defines the border color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Defines the border color.
   *
   * @type { ?(EdgeColors | ResourceColor) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Defines the border color.
   *
   * @type { ?(EdgeColors | ResourceColor) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Defines the border color.
   *
   * @type { ?(EdgeColors | ResourceColor) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Defines the border color.
   *
   * @type { ?(EdgeColors | ResourceColor | LocalizedEdgeColors) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  color?: EdgeColors | ResourceColor | LocalizedEdgeColors;

  /**
   * Defines the border radius.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Defines the border radius.
   *
   * @type { ?(BorderRadiuses | Length) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Defines the border radius.
   *
   * @type { ?(BorderRadiuses | Length) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Defines the border radius.
   *
   * @type { ?(BorderRadiuses | Length) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Defines the border radius.
   *
   * @type { ?(BorderRadiuses | Length | LocalizedBorderRadiuses) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  radius?: BorderRadiuses | Length | LocalizedBorderRadiuses;

  /**
   * Defines the border style.
   *
   * @type { ?BorderStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Defines the border style.
   *
   * @type { ?(EdgeStyles | BorderStyle) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Defines the border style.
   *
   * @type { ?(EdgeStyles | BorderStyle) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Defines the border style.
   *
   * @type { ?(EdgeStyles | BorderStyle) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  style?: EdgeStyles | BorderStyle;

  /**
   * Defines the gap of dash when BorderStyle is dashed.
   *
   * @type { ?(EdgeWidths | LengthMetrics | LocalizedEdgeWidths) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  dashGap?: EdgeWidths | LengthMetrics | LocalizedEdgeWidths;

  /**
   * Defines the length of dash when BorderStyle is dashed.
   *
   * @type { ?(EdgeWidths | LengthMetrics | LocalizedEdgeWidths) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  dashWidth?: EdgeWidths | LengthMetrics | LocalizedEdgeWidths;
}

/**
 * Defines the options of border.
 *
 * @interface OutlineOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 11
 */
/**
 * Defines the options of border.
 *
 * @interface OutlineOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface OutlineOptions {
  /**
   * Defines the outline width.
   *
   * @type { ?(EdgeOutlineWidths | Dimension) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Defines the outline width.
   *
   * @type { ?(EdgeOutlineWidths | Dimension) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  width?: EdgeOutlineWidths | Dimension;

  /**
   * Defines the outline color.
   *
   * @type { ?(EdgeColors | ResourceColor) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Defines the outline color.
   *
   * @type { ?(EdgeColors | ResourceColor | LocalizedEdgeColors) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  color?: EdgeColors | ResourceColor | LocalizedEdgeColors;

  /**
   * Defines the outline radius.
   *
   * @type { ?(OutlineRadiuses | Dimension) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Defines the outline radius.
   *
   * @type { ?(OutlineRadiuses | Dimension) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  radius?: OutlineRadiuses | Dimension;

  /**
   * Defines the outline style.
   *
   * @type { ?(EdgeOutlineStyles | OutlineStyle) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Defines the outline style.
   *
   * @type { ?(EdgeOutlineStyles | OutlineStyle) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  style?: EdgeOutlineStyles | OutlineStyle;
}

/**
 * Define the style of checkbox mark.
 *
 * @interface MarkStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Define the style of checkbox mark.
 *
 * @interface MarkStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
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
  /**
   * Define the stroke color of checkbox mark.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
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
  /**
   * Define the size of checkbox mark.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
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
  /**
   * Define the stroke width of checkbox mark.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  strokeWidth?: Length;
}

/**
 * Defines the ColorFilter object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the ColorFilter object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the ColorFilter object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class ColorFilter {
  /**
   * Creates ColorFilter with 4*5 matrix.
   *
   * @param { number[] } value 4*5 color matrix values. The value[m*n] is located in the m row and n column. The matrix is row-first.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Creates ColorFilter with 4*5 matrix.
   *
   * @param { number[] } value 4*5 color matrix values. The value[m*n] is located in the m row and n column. The matrix is row-first.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Creates ColorFilter with 4*5 matrix.
   *
   * @param { number[] } value 4*5 color matrix values. The value[m*n] is located in the m row and n column. The matrix is row-first.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  constructor(value: number[]);
}

/**
 * Defines TouchPoint
 *
 * @interface TouchPoint
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
/**
 * Defines TouchPoint
 *
 * @interface TouchPoint
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
/**
 * Defines TouchPoint
 *
 * @interface TouchPoint
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'18','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface TouchPoint {
  /**
   * Define the touch point x coordinate.
   *
   * @type { Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * Define the touch point x coordinate.
   *
   * @type { Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  /**
   * Define the touch point x coordinate.
   *
   * @type { Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  x: Dimension;

  /**
   * Define the touch point y coordinate.
   *
   * @type { Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * Define the touch point y coordinate.
   *
   * @type { Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  /**
   * Define the touch point y coordinate.
   *
   * @type { Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  y: Dimension;
}

/**
 * Defines the DirectionalEdgesT interface.
 *
 * @interface DirectionalEdgesT
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface DirectionalEdgesT<T> {
  /**
   * Start edge.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  start: T;

  /**
   * End edge.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  end: T;

  /**
   * Top edge.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  top: T;

  /**
   * Bottom edge.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  bottom: T;
}

/**
 * Defines the struct of DividerStyleOptions.
 *
 * @interface DividerStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface DividerStyleOptions {
  /**
   * The strokeWidth of Divider.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  strokeWidth?: LengthMetrics;

  /**
   * The color of Divider.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  color?: ResourceColor;

  /**
   * The startMargin of Divider.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  startMargin?: LengthMetrics;

  /**
   * The endMargin of Divider.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  endMargin?: LengthMetrics;

  /**
   * The mode of Divider.
   *
   * @type { ?DividerMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'19','1.2':'20'}
   * @arkts 1.1&1.2
   */
  mode?: DividerMode;
}

/**
 * Defines the ChainWeightOptions interface.
 *
 * @interface ChainWeightOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'14','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface ChainWeightOptions {
  /**
   * Horizontal ChainWeight.
   *
   * @type { ?(number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'14','1.2':'20'}
   * @arkts 1.1&1.2
   */
  horizontal?: number;

  /**
   * Vertical ChainWeight.
   *
   * @type { ?(number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'14','1.2':'20'}
   * @arkts 1.1&1.2
   */
  vertical?: number;
}

/**
 * Defines the struct of AccessibilityOptions.
 *
 * @interface AccessibilityOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'14','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface AccessibilityOptions {
  /**
   * accessibilityPreferred - Should accessibilityText be prioritized when contatenating child component strings.
   *
   * @type { ?(boolean) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'14','1.2':'20'}
   * @arkts 1.1&1.2
   */
  accessibilityPreferred?: boolean;
}

/**
 * Define scrollbar margin options.
 *
 * @interface ScrollBarMargin
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 */
declare interface ScrollBarMargin {
  /**
   * Start margin of the scroll bar.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  start?: LengthMetrics;

  /**
   * End margin of the scroll bar.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  end?: LengthMetrics;
}