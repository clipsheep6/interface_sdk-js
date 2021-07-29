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

import {CommonMethod, Color, LineCapStyle, LineJoinStyle} from "./common";

interface Shape extends CommonMethod<Shape> {
  (): Shape;

  viewPort(value: {
    x?: number | string, y?: number | string,
    width?: number | string, height?: number | string
  }): Shape;

  stroke(value: Color | number | string): Shape;

  fill(value: Color | number | string): Shape;

  strokeDashOffset(value: number | string): Shape;

  strokeDashArray(value: Array<any>): Shape;

  strokeLineCap(value: LineCapStyle): Shape;

  strokeLineJoin(value: LineJoinStyle): Shape;

  strokeMiterLimit(value: number | string): Shape;

  strokeOpacity(value: number | string): Shape;

  fillOpacity(value: number | string): Shape;

  strokeWidth(value: number | string): Shape;

  antiAlias(value: boolean): Shape;
}

export declare const ShapeInterface: Shape;
