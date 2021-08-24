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

import {GestureType, GestureMask} from "./gesture"
import {DefaultData, ViewModel} from "../../js";
import { Circle } from "./circle";
import { Ellipse } from "./ellipse";
import { Path } from "./path";
import { Rect } from "./rect";

export declare const Component: ClassDecorator;
export declare const Entry: ClassDecorator;
export declare const Observed: ClassDecorator;
export declare const Preview: ClassDecorator;
export declare const State: PropertyDecorator;
export declare const Prop: PropertyDecorator;
export declare const Link: PropertyDecorator;
export declare const ObjectLink: PropertyDecorator;
export declare const Provide: any;
export declare const Consume: any;
export declare const StorageProp: any;
export declare const StorageLink: any;
export declare const Watch: any;
export declare const Builder: MethodDecorator;

declare const isSystemplugin: Function;

// global function
export declare function $s(value: string, params?: object | Array<any> | number): string;

export declare function $m(value: string): string;

export declare function animateTo(value: {
  duration?: number, tempo?: number, curve?: Curve | string,
  delay?: number, iterations?: number, playMode?: PlayMode, onFinish?: () => void
}, event: () => void): void;

// common enum
export declare enum Color {
  White,
  Black,
  Blue,
  Brown,
  Gray,
  Green,
  Grey,
  Orange,
  Pink,
  Red,
  Yellow
}

export declare enum ImageFit {
  Contain,
  Cover,
  Auto,
  Fill,
  ScaleDown,
  None
}

export declare enum BorderStyle {
  Dotted,
  Dashed,
  Solid
}

export declare enum LineJoinStyle {
  Miter,
  Round,
  Bevel
}

export declare enum TouchType {
  Down,
  Up,
  Move,
  Cancel
}

export declare enum AnimationStatus {
  Initial,
  Running,
  Paused,
  Stopped
}

export declare enum Curve {
  Linear,
  Ease,
  EaseIn,
  EaseOut,
  EaseInOut,
  Friction
}

export declare enum FillMode {
  None,
  Forwards,
  Backwards,
  Both
}

export declare enum PlayMode {
  Normal,
  Reverse,
  Alternate,
  AlternateReverse
}

export declare enum BlurStyle {
  SmallLight,
  MediumLight,
  LargeLight,
  XlargeLight,
  SmallDark,
  MediumDark,
  LargeDark,
  XlargeDark
}

export declare enum KeyType {
  Down,
  Up,
  LongPress
}

export declare enum KeySource {
  Unknown,
  Keyboard,
  Mouse,
  Dpad,
  Gamepad,
  Joystick,
  TouchScreen,
  TouchPad,
  Stylus,
  Trackball,
  Knob,
  Any
}

export declare enum Edge {
  Top,
  Center,
  Bottom,
  Baseline,
  Start,
  Middle,
  End
}

export declare enum Week {
  Mon,
  Tue,
  Wed,
  Thur,
  Fri,
  Sat,
  Sun,
}

export declare enum Direction {
  Ltr,
  Rtl,
  Auto
}

export interface ClickEvent {
  screenX: number;
  screenY: number;
  x: number;
  y: number;
  timestamp: number;
}

export interface TouchObject {
  type: TouchType;
  id: number;
  screenX: number;
  screenY: number;
  x: number;
  y: number;
}

export interface TouchEvent {
  type: TouchType;
  touches: TouchObject[];
  changedTouches: TouchObject[];
  timestamp: number;
  stopPropagation?: () => void;
}

export interface KeyEvent {
  type: KeyType;
  keyCode: number;
  keyText: string;
  keySource: KeySource;
  deviceId: number;
  metaKey: number;
  timestamp: number;
  stopPropagation?: () => void;
}

export declare enum Alignment {
  TopStart,
  Top,
  TopEnd,
  Start,
  Center,
  End,
  BottomStart,
  Bottom,
  BottomEnd
}

export declare enum TransitionType {
  All,
  Insert,
  Delete
}

export declare enum RelateType {
  FILL,
  FIT
}

export declare enum Visibility {
  Visible,
  Hidden,
  None
}

export declare enum LineCapStyle {
  Butt,
  Round,
  Square
}

export declare enum Axis {
  Vertical,
  Horizontal
}

export declare enum HorizontalAlign {
  Start,
  Center,
  End
}

export declare enum FlexAlign {
  Start,
  Center,
  End,
  SpaceBetween,
  SpaceAround,
  SpaceEvenly
}

export declare enum ItemAlign {
  Auto,
  Start,
  Center,
  End,
  Baseline,
  Stretch
}

export declare enum FlexDirection {
  Row,
  Column,
  RowReverse,
  ColumnReverse
}

export declare enum FlexWrap {
  NoWrap,
  Wrap,
  WrapReverse
}

export declare enum VerticalAlign {
  Top,
  Center,
  Bottom
}

export declare class VerticalAlignDeclaration {
  constructor(value?: VerticalAlign)
}

export declare class HorizontalAlignDeclaration {
  constructor(value?: HorizontalAlign)
}

export declare enum ImageRepeat {
  NoRepeat,
  X,
  Y,
  XY
}

export declare enum ImageSize {
  Auto,
  Cover,
  Contain
}

export declare enum GradientDirection {
  Left,
  Top,
  Right,
  Bottom,
  LeftTop,
  LeftBottom,
  RightTop,
  RightBottom,
  None
}

export declare class CommonMethod<T> {
  constructor();

  width(value: number | string): T;

  height(value: number | string): T;

  size(value: { width?: number | string, height?: number | string }): T;

  constraintSize(value: { minWidth?: number | string, maxWidth?: number | string, minHeight?: number | string, maxHeight?: number | string }): T;

  layoutPriority(value: number | string): T;

  layoutWeight(value: number | string): T;

  padding(value: { top?: number | string, right?: number | string, bottom?: number | string, left?: number | string } | number | string): T;

  margin(value: { top?: number | string, right?: number | string, bottom?: number | string, left?: number | string } | number | string): T;

  backgroundColor(value: Color | number | string): T;

  backgroundImage(src: string, repeat?: ImageRepeat): T;

  backgroundImageSize(value: {width?: number | string, height?: number | string} | ImageSize): T;

  backgroundImagePosition(value: {x?: number | string, y?: number | string} | Alignment): T;

  opacity(value: number): T

  border(value: { width?: number | string, color?: Color | number | string, radius?: number | string, style?: BorderStyle }): T;

  borderStyle(value: BorderStyle): T;

  borderWidth(value: number | string): T;

  borderColor(value: Color | number | string): T;

  borderRadius(value: number | string): T;

  navigationTitle(value: string): T;

  navigationSubTitle(value: string): T;

  hideNavigationBar(value: boolean): T;

  hideNavigationBackButton(value: boolean): T;

  toolBar(value: object): T;

  hideToolBar(value: boolean): T;

  onClick(event: (event?: ClickEvent) => void): T;

  onTouch(event: (event?: TouchEvent) => void): T;

  onKeyEvent(event: (event?: KeyEvent) => void): T;

  onPan(event: (event?: any) => void): T;

  animation(value: {
    duration?: number, tempo?: number, curve?: Curve | string, delay?: number, iterations?: number,
    playMode?: PlayMode, onFinish?: () => void
  }): T;

  transition(value: {
    type?: TransitionType, opacity?: number,
    translate?: { x?: number | string, y?: number | string, z?: number | string },
    scale?: { x?: number, y?: number, z?: number, centerX?: number | string, centerY?: number | string },
    rotate?: { x?: number, y?: number, z?: number, centerX?: number | string, centerY?: number | string, angle: number | string }
  }): T;

  gesture(gesture: GestureType, mask?: GestureMask): T;

  priorityGesture(gesture: GestureType, mask?: GestureMask): T;

  parallelGesture(gesture: GestureType, mask?: GestureMask): T;

  blur(value: number): T;

  backdropBlur(value: number): T;

  windowBlur(value: { percent: number, style?: BlurStyle }): T;

  translate(value: { x?: number | string, y?: number | string, z?: number | string }): T;

  scale(value: { x?: number, y?: number, z?: number, centerX?: number | string, centerY?: number | string }): T;

  gridSpan(value: number): T

  gridOffset(value: number): T

  rotate(value: { x?: number, y?: number, z?: number, centerX?: number | string, centerY?: number | string, angle: number | string }): T;

  transform(value: object): T;

  onAppear(event: () => void): T;

  onDisAppear(event: () => void): T;

  visibility(value: Visibility): T;

  flexGrow(value: number): T;

  flexShrink(value: number): T;

  flexBasis(value: number | string): T;

  alignSelf(value: ItemAlign): T;

  displayPriority(value: number): T;

  useAlign(align: HorizontalAlignDeclaration | VerticalAlignDeclaration, value: { side: Edge, offset?: number | string }): T;

  zIndex(value: number): T;

  sharedTransition(id: string, options?: { duration?: number, curve?: Curve | string, delay?: number }, motionPath?: { path: string, from?: number, to?: number, rotatable?: boolean }): T;

  direction(value: Direction): T;

  align(value: Alignment): T;

  position(value: { x?: number | string, y?: number | string }): T;

  offset(value: { x?: number | string, y?: number | string }): T;

  enabled(value: boolean): T;

  useSizeType(value: {
    xs?: number | {span: number, offset: number},
    sm?: number | {span: number, offset: number},
    md?: number | {span: number, offset: number},
    lg?: number | {span: number, offset: number}
  }): T;

  aspectRatio(value: number): T;

  onDrag(event: () => void): T;

  onDragEnter(event: () => void): T;

  onDragLeave(event: () => void): T;

  onDrop(event: () => void): T;

  overlay(value: string, options?: { align?: Alignment, offset?: { x?: number, y?: number } }): T;

  linearGradient(value: { angle?: number | string, direction?: GradientDirection, colors: Array<any>, repeating?: boolean }): T;

  sweepGradient(value: { center: Array<any>, start?: number | string, end?: number | string, rotation?: number | string, colors: Array<any>, repeating?: boolean }): T;

  radialGradient(value: { center: Array<any>, radius: number | string, colors: Array<any>, repeating?: boolean }): T;

  motionPath(value: { path: string, from?: number, to?: number, rotatable?: boolean }): T;

  shadow(value: { radius: number, color?: Color | string, offsetX?: number, offsetY?: number }): T;

  clip(value: boolean | Circle | Ellipse | Path | Rect): T;

  mask(value: Circle | Ellipse | Path | Rect): T;
}

export declare class CommonShapeMethod<T> extends CommonMethod<T> {
  constructor();

  stroke(value: Color | number | string): T;

  fill(value: Color | number | string): T;

  strokeDashOffset(value: number | string): T;

  strokeLineCap(value: LineCapStyle): T;

  strokeLineJoin(value: LineJoinStyle): T;

  strokeMiterLimit(value: number | string): T;

  strokeOpacity(value: number | string): T;

  fillOpacity(value: number | string): T;

  strokeWidth(value: number | string): T;

  antiAlias(value: boolean): T;

  strokeDashArray(value: Array<any>): T
}

export declare class CustomComponent<T> {
  build(): void;

  private aboutToAppear?(): void;

  private aboutToDisappear?(): void;
}
