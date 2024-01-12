/*
 * Copyright (C) 2023 Huawei Device Co., Ltd.
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

import { CommonShapeMethod } from "./@internal/component/ets/common";

/**
 * @file
 * @kit ArkUI
 */

/**
 * Defines a rect drawing class.
 * 
 * @extends CommonShapeMethod<RectShape>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
export declare class RectShape extends CommonShapeMethod<RectShape> {
  /**
   * Constructor.
   *
   * @param { object } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  constructor(value?:
    {
      width?: number | string;
      height?: number | string;
      radius?: number | string | Array<any>;
    }
    | {
      width?: number | string;
      height?: number | string;
      radiusWidth?: number | string;
      radiusHeight?: number | string;
    });
}

/**
 * Defines a cicle drawing class.
 * 
 * @extends CommonShapeMethod<CircleShape>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
export declare class CircleShape extends CommonShapeMethod<CircleShape> {
  /**
   * Constructor.
   *
   * @param { object } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  constructor(value?: {
    width?: number | string;
    height?: number | string;
  });
}

/**
 * Defines a ellipse drawing class.
 * 
 * @extends CommonShapeMethod<EllipseShape>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
export declare class EllipseShape extends
  CommonShapeMethod<EllipseShape> {
  /**
   * Constructor.
   *
   * @param { object } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  constructor(value?: {
    width?: number | string;
    height?: number | string;
  });
}

/**
 * Defines a path drawing class.
 * 
 * @extends CommonShapeMethod<PathShape>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
export declare class PathShape extends CommonShapeMethod<PathShape> {
  /**
   * Constructor.
   *
   * @param { object } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  constructor(value?: {
    width?: number | string;
    height?: number | string;
    commands?: string;
  });
}