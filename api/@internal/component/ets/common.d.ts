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
 * Defining Component ClassDecorator * @since 7
 */
declare const Component: ClassDecorator;

/**
 * Defining Entry ClassDecorator.
 * @since 7
 */
declare const Entry: ClassDecorator;

/**
 * Defining Observed ClassDecorator.
 * @since 7
 */
declare const Observed: ClassDecorator;

/**
 * Defining Preview ClassDecorator.
 * @since 7
 */
declare const Preview: ClassDecorator & ((value: PreviewParams) => ClassDecorator);

/**
 * Defining BuilderParam PropertyDecorator
 * @since 7
 */
declare const BuilderParam: PropertyDecorator;

/**
 * Defining State PropertyDecorator.
 * @since 7
 */
declare const State: PropertyDecorator;

/**
 * Defining Prop PropertyDecorator.
 * @since 7
 */
declare const Prop: PropertyDecorator;

/**
 * Defining Link PropertyDecorator.
 * @since 7
 */
declare const Link: PropertyDecorator;

/**
 * Defining ObjectLink PropertyDecorator.
 * @since 7
 */
declare const ObjectLink: PropertyDecorator;

/**
 * Defining Provide PropertyDecorator.
 * @since 7
 */
declare const Provide: PropertyDecorator & ((value: string) => PropertyDecorator);

/**
 * Defining Consume PropertyDecorator.
 * @since 7
 */
declare const Consume: PropertyDecorator & ((value: string) => PropertyDecorator);

/**
 * Defining StorageProp PropertyDecorator.
 * @since 7
 */
declare const StorageProp: (value: string) => PropertyDecorator;

/**
 * Defining StorageLink PropertyDecorator.
 * @since 7
 */
declare const StorageLink: (value: string) => PropertyDecorator;

/**
 * Defining Watch PropertyDecorator.
 * @since 7
 */
declare const Watch: (value: string) => PropertyDecorator;

/**
 * Defining Builder MethodDecorator
 * @since 7
 */
declare const Builder: MethodDecorator;

/**
 * Defining Styles MethodDecorator
 * @since 8
 */
declare const Styles: MethodDecorator;

/**
 * Defining Extend MethodDecorator
 * @since 7
 */
declare const Extend: MethodDecorator & ((value: any) => MethodDecorator);

/**
 * Defining  CustomDialog ClassDecorator
 * @since 7
 */
declare const CustomDialog: ClassDecorator;

/**
 * Defines the data type of the interface restriction.
 * @since 7
 */
declare interface Configuration {
  /**
   * Set colorMode.
   * @since 7
   */
  readonly colorMode: string;

  /**
   * Set fontScale.
   * @since 7
   */
  readonly fontScale: number;
}

/**
 * Defines the data type of the interface restriction.
 * @since 8
 */
declare interface Rectangle {
  /**
   * x:Horizontal coordinate
   * @since 8
   */
  x?: Length;

  /**
   * y:Vertical axis coordinate.
   * @since 8
   */
  y?: Length;

  /**
   * Sets the width of the current touchRect.
   * @since 8
   */
  width?: Length;

  /**
   * Sets the height of the current touchRect.
   * @since 8
   */
  height?: Length;
}

/**
 * global $r function
 * @since 7
 */
declare function $r(value: string, ...params: any[]): Resource;

/**
 * global $rawfile function
 * @since 7
 */
declare function $rawfile(value: string): Resource;

/**
 * Defines the animate function params.
 * @since 7
 */
declare interface AnimateParam {
  /**
   * Animation duration, in ms.
   * @since 7
   */
  duration?: number;
  /**
   * Animation playback speed. A larger value indicates faster animation playback, and a smaller value indicates slower
   * animation playback. The value 0 means that there is no animation.
   * @since 7
   */
  tempo?: number;
  /**
   * Animation curve.
   * @since 7
   */
  curve?: Curve | string;
  /**
   * Animation playback mode. By default, the animation is played from the beginning after the playback is complete.
   * @since 7
   */
  delay?: number;
  /**
   * Animation playback mode. By default, the animation is played from the beginning after the playback is complete.
   * @since 7
   */
  iterations?: number;
  /**
   * Animation playback mode. By default, the animation is played from the beginning after the playback is complete.
   * @since 7
   */
  playMode?: PlayMode;
  /**
   * Callback invoked when the animation playback is complete.
   * @since 7
   */
  onFinish?: () => void;
}

/**
 * Defines the motion path options.
 * @since 7
 */
declare interface MotionPathOptions {
  /**
   * The path info.
   * @since 7
   */
  path: string;
  /**
   * The origin point info.
   * @since 7
   */
  from?: number;
  /**
   * The distance point info.
   * @since 7
   */
  to?: number;
  /**
   * The rotate info.
   * @since 7
   */
  rotatable?: boolean;
}

/**
 * Defines the shard transition function params.
 * @since 7
 */
declare interface sharedTransitionOptions {
  /**
   * Animation duration, in ms.
   * @since 7
   */
  duration?: number;
  /**
   * Animation duration, in ms.
   * @since 7
   */
  curve?: Curve | string;
  /**
   * Animation playback mode. By default, the animation is played from the beginning after the playback is complete.
   * @since 7
   */
  delay?: number;
  /**
   * The motion path info.
   * @since 7
   */
  motionPath?: MotionPathOptions;
  /**
   * Z index info.
   * @since 7
   */
  zIndex?: number;
  /**
   * the animate type.
   * @since 7
   */
  type?: SharedTransitionEffectType;
}

/**
 * Defines the options of translate.
 * @since 7
 */
declare interface TranslateOptions {
  /**
   * The param of x direction.
   * @since 7
   */
  x?: number | string;
  /**
   * The param of y direction.
   * @since 7
   */
  y?: number | string;
  /**
   * The param of z direction.
   * @since 7
   */
  z?: number | string;
}

/**
 * Defines the options of scale.
 * @since 7
 */
declare interface ScaleOptions {
  /**
   * The param of x direction.
   * @since 7
   */
  x?: number;
  /**
   * The param of y direction.
   * @since 7
   */
  y?: number;
  /**
   * The param of z direction.
   * @since 7
   */
  z?: number;
  /**
   * The param of center point of x.
   * @since 7
   */
  centerX?: number | string;
  /**
   * The param of center point of y.
   * @since 7
   */
  centerY?: number | string;
}

declare interface RotateOptions {
  /**
   * The param of x direction.
   * @since 7
   */
  x?: number;
  /**
   * The param of y direction.
   * @since 7
   */
  y?: number;
  /**
   * The param of z direction.
   * @since 7
   */
  z?: number;
  /**
   * The param of center point of x.
   * @since 7
   */
  centerX?: number | string;
  /**
   * The param of center point of y.
   * @since 7
   */
  centerY?: number | string;
  /**
   * The param of angle.
   * @since 7
   */
  angle: number | string;
}

/**
 * Defines the param of transition.
 * @since 7
 */
declare interface TransitionOptions {
  /**
   * Defines the param of type.
   * @since 7
   */
  type?: TransitionType;
  /**
   * Defines the param of opacity.
   * @since 7
   */
  opacity?: number;
  /**
   * Defines the param of translate.
   * @since 7
   */
  translate?: TranslateOptions;
  /**
   * Defines the param of scale.
   * @since 7
   */
  scale?: ScaleOptions;
  /**
   * Defines the param of rotate.
   * @since 7
   */
  rotate?: RotateOptions;
}

/**
 * ItemDragInfo object description
 * @since 8
 */
declare interface ItemDragInfo {
  /**
   * Obtains the X coordinate of the drag window, in vp.
   * @since 8
   */
  x: number;

  /**
   * Obtains the Y coordinate of the drag window, in vp.
   * @since 8
   */
  y: number;
}

/**
 * DragItemInfo object description
 * @since 8
 */
declare interface DragItemInfo {
  /**
   * Uses the pixelMap object for drawing.
   * @since 8
   */
  pixelMap?: PixelMap;

  /**
   * Uses the custom builder for drawing, if pixelMap is set, this value is ignored.
   * @since 8
   */
  builder?: CustomBuilder;

  /**
   * Sets the extra info for drag event.
   * @since 8
   */
  extraInfo?: string;
}

/**
 * Defining animation function.
 * @since 7
 */
declare function animateTo(value: AnimateParam, event: () => void): void;

/**
 * Converts a value in vp units to a value in px.
 * @since 7
 */
declare function vp2px(value: number): number;

/**
 * Converts a number in units of px to a number in units of vp.
 * @since 7
 */
declare function px2vp(value: number): number;

/**
 * Converts a number in fp units to a number in px.
 * @since 7
 */
declare function fp2px(value: number): number;

/**
 * Converts a number in units of px to a number in units of fp.
 * @since 7
 */
declare function px2fp(value: number): number;

/**
 * Converts a number in units of lpx to a number in units of px.
 * @since 7
 */
declare function lpx2px(value: number): number;

/**
 * Converts a number in units of px to a number in units of lpx.
 * @since 7
 */
declare function px2lpx(value: number): number;

/**
 * Defines the event target.
 * @since 8
 */
declare interface EventTarget {
  /**
   * Area of current target.
   * @since 8
   */
  area: Area;
}

/**
 * Defines the event source type.
 * @since 8
 */
declare enum SourceType {
  /**
   * Unknown type.
   * @since 8
   */
  Unknown,

  /**
   * The mouse type.
   * @since 8
   */
  Mouse,

  /**
   * The touch screen type.
   * @since 8
   */
  TouchScreen,
}

/**
 * Defines the base event.
 * @since 8
 */
declare interface BaseEvent {
  /**
   * Defines the current target which fires this event.
   * @since 8
   */
  target: EventTarget;

  /**
   * Event timestamp.
   * @since 8
   */
  timestamp: number;

  /**
   * the event source info.
   * @since 8
   */
  source: SourceType;
}

/**
 * The tap action triggers this method invocation.
 * @since 7
 */
declare interface ClickEvent extends BaseEvent {
  /**
   * X coordinate of the click point relative to the left edge of the device screen.
   * @since 7
   */
  screenX: number;

  /**
   * The Y coordinate of the touch point relative to the upper edge of the device screen.
   * @since 7
   */
  screenY: number;

  /**
   * X coordinate of the click point relative to the left edge of the clicked element.
   * @since 7
   */
  x: number;

  /**
   * Y coordinate of the click point relative to the upper edge of the clicked element.
   * @since 7
   */
  y: number;
}

/**
 * The mouse click action triggers this method invocation.
 * @since 8
 */
declare interface MouseEvent extends BaseEvent {
  /**
   * Mouse button of the click event.
   * @since 8
   */
  button: MouseButton;

  /**
   * Mouse action of the click event.
   * @since 8
   */
  action: MouseAction;

  /**
   * X coordinate of the click point relative to the left edge of the device screen.
   * @since 8
   */
  screenX: number;

  /**
   * The Y coordinate of the click point relative to the upper edge of the device screen.
   * @since 8
   */
  screenY: number;

  /**
   * X coordinate of the click point relative to the left edge of the clicked element.
   * @since 8
   */
  x: number;

  /**
   * Y coordinate of the click point relative to the upper edge of the clicked element.
   * @since 8
   */
  y: number;

  /**
   * The blocking event pops up.
   * @since 8
   */
  stopPropagation?: () => void;
}

/**
 * Type of the touch event.
 * @since 7
 */
declare interface TouchObject {
  /**
   * Type of the touch event.
   * @since 7
   */
  type: TouchType;

  /**
   * Finger unique identifier.
   * @since 7
   */
  id: number;

  /**
   * X coordinate of the touch point relative to the left edge of the device screen.
   * @since 7
   */
  screenX: number;

  /**
   * The Y coordinate of the touch point relative to the upper edge of the device screen.
   * @since 7
   */
  screenY: number;

  /**
   * X coordinate of the touch point relative to the left edge of the touched element.
   * @since 7
   */
  x: number;

  /**
   * Y coordinate of the touch point relative to the upper edge of the touched element.
   * @since 7
   */
  y: number;
}

/**
 * Touch Action Function Parameters
 * @since 7
 */
declare interface TouchEvent extends BaseEvent {
  /**
   * Type of the touch event.
   * @since 7
   */
  type: TouchType;

  /**
   * All finger information.
   * @since 7
   */
  touches: TouchObject[];

  /**
   * Indicates the current changed finger information.
   * @since 7
   */
  changedTouches: TouchObject[];

  /**
   * The blocking event pops up.
   * @since 7
   */
  stopPropagation?: () => void;
}

/**
 * Defines the PixelMap type object for ui component.
 * @since 7
 */
declare type PixelMap = PixelMapMock;

/**
 * DragEvent object description
 * @since 7
 */
declare interface DragEvent {
  /**
   * Obtains the X coordinate of the drag window, in vp.
   * @since 7
   */
  getX(): number;

  /**
   * Obtains the Y coordinate of the drag window, in vp.
   * @since 7
   */
  getY(): number;
}

/**
 * KeyEvent object description:
 * @since 7
 */
declare interface KeyEvent {
  /**
   * Type of a key.
   * @since 7
   */
  type: KeyType;

  /**
   * Key code of a key
   * @since 7
   */
  keyCode: number;

  /**
   * Key value of a key.
   * @since 7
   */
  keyText: string;

  /**
   * Type of the input device that triggers the current key, such as the keyboard or handle.
   * @since 7
   */
  keySource: KeySource;

  /**
   * Indicates the ID of the input device that triggers the current key.
   * @since 7
   */
  deviceId: number;

  /**
   * Indicates the status of the key when the key is pressed.
   * The value 1 indicates the pressed state, and the value 0 indicates the unpressed state.
   * @since 7
   */
  metaKey: number;

  /**
   * Timestamp when the key was pressed.
   * @since 7
   */
  timestamp: number;

  /**
   * Block event bubbling.
   * @since 7
   */
  stopPropagation?: () => void;
}

/**
 * Component State Styels.
 * @since 8
 */
declare interface StateStyles {
  /**
   * Defines normal state styles.
   * @since 8
   */
  normal?: any;

  /**
   * Defines pressed state styles.
   * @since 8
   */
  pressed?: any;

  /**
   * Defines disabled state styles.
   * @since 8
   */
  disabled?: any;

  /**
   * Defines focused state styles.
   * @since 8
   */
  focused?: any;

  /**
   * Defines clicked state styles.
   * @since 8
   */
  clicked?: any;
}

/**
 * Defines the popup options.
 * @since 7
 */
declare interface PopupOptions {
  /**
   * Information in the pop-up window.
   * @since 7
   */
  message: string;

  /**
   * placement On Top
   * @since 7
   */
  placementOnTop?: boolean;

  /**
   * The first button.
   * @since 7
   */
  primaryButton?: {
    /**
     * Button text value
     * @since 7
     */
    value: string;

    /**
     * action
     * @since 7
     */
    action: () => void;
  };

  /**
   * The second button.
   * @since 7
   */
  secondaryButton?: {
    /**
     * Button text value
     * @since 7
     */
    value: string;

    /**
     * action
     * @since 7
     */
    action: () => void;
  };

  /**
   * on State Change
   * @since 7
   */
  onStateChange?: (event: { isVisible: boolean }) => void;
}

/**
 * Defines the custom popup options.
 * @since 8
 */
declare interface CustomPopupOptions {
  /**
   * builder of popup
   * @since 8
   */
  builder: CustomBuilder;

  /**
   * placement of popup
   * @since 8
   */
  placement?: Placement;

  /**
   * mask color of popup
   * @since 8
   */
  maskColor?: Color | string | Resource | number;

  /**
   * background color of popup
   * @since 8
   */
  popupColor?: Color | string | Resource | number;

  /**
   * whether show arrow
   * @since 8
   */
  enableArrow?: boolean;

  /**
   * whether hide popup when click mask
   * @since 8
   */
  autoCancel?: boolean;

  /**
   * on State Change
   * @since 8
   */
  onStateChange?: (event: { isVisible: boolean }) => void;
}

/**
 * CommonAttribute for ide.
 * @since 7
 */
declare class CommonAttribute extends CommonMethod<CommonAttribute> {}

/**
 * CommonInterface for ide.
 * @since 7
 */
interface CommonInterface {
  (): CommonAttribute;
}

/**
 * CommonInstance for ide.
 * @since 7
 */
declare const CommonInstance: CommonAttribute;

/**
 * Common for ide.
 * @since 7
 */
declare const Common: CommonInterface;

/**
 * Defines the CustomBuilder Type.
 * @since 7
 */
declare type CustomBuilder = (() => any) | void;

/**
 * CommonShapeMethod
 * @since 7
 */
declare class CommonShapeMethod<T> extends CommonMethod<T> {
  /**
   * constructor.
   * @since 7
   * @syetemapi
   */
  constructor();

  /**
   * border Color
   * @since 7
   */
  stroke(value: ResourceColor): T;

  /**
   * Fill color.
   * @since 7
   */
  fill(value: ResourceColor): T;

  /**
   * Offset from the start point of the border drawing.
   * @since 7
   */
  strokeDashOffset(value: number | string): T;

  /**
   * Path endpoint drawing style.
   * @since 7
   */
  strokeLineCap(value: LineCapStyle): T;

  /**
   * Border corner drawing style.
   * @since 7
   */
  strokeLineJoin(value: LineJoinStyle): T;

  /**
   * Limits for drawing acute angles as bevels
   * @since 7
   */
  strokeMiterLimit(value: number | string): T;

  /**
   * Sets the opacity of the border.
   * @since 7
   */
  strokeOpacity(value: number | string | Resource): T;

  /**
   * fill Opacity
   * @since 7
   */
  fillOpacity(value: number | string | Resource): T;

  /**
   * Sets the width of the dividing line.
   * @since 7
   */
  strokeWidth(value: Length): T;

  /**
   * Indicates whether to enable anti-aliasing
   * @since 7
   */
  antiAlias(value: boolean): T;

  /**
   * Sets the gap for the border.
   * @since 7
   */
  strokeDashArray(value: Array<any>): T;
}

/**
 * Custom Component
 * @since 7
 */
declare class CustomComponent {
  /**
   * Customize the pop-up content constructor.
   * @since 7
   */
  build(): void;

  /**
   * aboutToAppear Method
   * @since 7
   */
  aboutToAppear?(): void;

  /**
   * aboutToDisappear Method
   * @since 7
   */
  aboutToDisappear?(): void;

  /**
   * onPageShow Method
   * @since 7
   */
  onPageShow?(): void;

  /**
   * onPageHide Method
   * @since 7
   */
  onPageHide?(): void;

  /**
   * onBackPress Method
   * @since 7
   */
  onBackPress?(): void;
}
