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
import { CommonShapeMethod } from './common';
/*** endif */

/**
 * Ellipse constructor options.
 *
 * @interface EllipseOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'18','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface EllipseOptions {
  /**
   * Set width.
   *
   * @type { ?(string | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Set width.
   *
   * @type { ?(string | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Set width.
   *
   * @type { ?(string | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Set width.
   *
   * @type { ?(string | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Set width.
   * Anonymous Object Rectification.
   *
   * @type { ?(string | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  /**
   * Set width.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  width?: Length;

  /**
   * Set height.
   *
   * @type { ?(string | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Set height.
   *
   * @type { ?(string | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Set height.
   *
   * @type { ?(string | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Set height.
   *
   * @type { ?(string | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Set height.
   * Anonymous Object Rectification.
   *
   * @type { ?(string | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  /**
   * Set height.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  height?: Length;
}

/**
 * Ellipse drawing.
 *
 * @interface EllipseInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Ellipse drawing.
 *
 * @interface EllipseInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Ellipse drawing.
 *
 * @interface EllipseInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Ellipse drawing.
 *
 * @interface EllipseInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
interface EllipseInterface {
  /**
   * use new function to set the value.
   * 
   * @param { object } value
   * @returns { EllipseAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * use new function to set the value.
   * 
   * @param { object } value
   * @returns { EllipseAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * use new function to set the value.
   * 
   * @param { object } value
   * @returns { EllipseAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * use new function to set the value.
   * 
   * @param { object } value
   * @returns { EllipseAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * use new function to set the value.
   * Anonymous Object Rectification.
   *
   * @param { EllipseOptions } [options] - ellipse options
   * @returns { EllipseAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  new (options?: EllipseOptions): EllipseAttribute;

  /**
   * Set the value.
   *
   * @param { object } value
   * @returns { EllipseAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Set the value.
   *
   * @param { object } value
   * @returns { EllipseAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Set the value.
   *
   * @param { object } value
   * @returns { EllipseAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Set the value.
   *
   * @param { object } value
   * @returns { EllipseAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Set the value.
   * Anonymous Object Rectification.
   *
   * @param { EllipseOptions } [options] - ellipse options
   * @returns { EllipseAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  (options?: EllipseOptions): EllipseAttribute;
}

/**
 * @extends CommonShapeMethod<EllipseAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * @extends CommonShapeMethod<EllipseAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * @extends CommonShapeMethod<EllipseAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * @extends CommonShapeMethod<EllipseAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class EllipseAttribute extends CommonShapeMethod<EllipseAttribute> {}

/**
 * Defines Ellipse Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Ellipse Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines Ellipse Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines Ellipse Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const Ellipse: EllipseInterface;

/**
 * Defines Ellipse Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Ellipse Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines Ellipse Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines Ellipse Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const EllipseInstance: EllipseAttribute;

/**
 * Ellipse drawing.
 *
 * @interface EllipseInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
interface EllipseInterface {
  /**
   * Set the value.
   *
   * @param { EllipseOptions } [options] - ellipse options
   * @returns { EllipseAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  (options?: EllipseOptions): EllipseAttribute;
}
