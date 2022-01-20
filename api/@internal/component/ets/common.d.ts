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
* @Syscap SystemCapability.ArkUI.Standard
 */
declare const Component: ClassDecorator;

/**
 * Defining Entry ClassDecorator.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare const Entry: ClassDecorator;

/**
 * Defining Observed ClassDecorator.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare const Observed: ClassDecorator;

/**
 * Defining Preview ClassDecorator.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare const Preview: ClassDecorator & ((value: PreviewParams) => ClassDecorator);

/**
 * Defining BuilderParam PropertyDecorator
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare const BuilderParam: PropertyDecorator;

/**
 * Defining State PropertyDecorator.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare const State: PropertyDecorator;

/**
 * Defining Prop PropertyDecorator.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare const Prop: PropertyDecorator;

/**
 * Defining Link PropertyDecorator.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare const Link: PropertyDecorator;

/**
 * Defining ObjectLink PropertyDecorator.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare const ObjectLink: PropertyDecorator;

/**
 * Defining Provide PropertyDecorator.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare const Provide: PropertyDecorator & ((value: string) => PropertyDecorator);

/**
 * Defining Consume PropertyDecorator.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare const Consume: PropertyDecorator & ((value: string) => PropertyDecorator);

/**
 * Defining StorageProp PropertyDecorator.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare const StorageProp: (value: string) => PropertyDecorator;

/**
 * Defining StorageLink PropertyDecorator.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare const StorageLink: (value: string) => PropertyDecorator;

/**
 * Defining Watch PropertyDecorator.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare const Watch: (value: string) => PropertyDecorator;


/**
 * Defining Builder MethodDecorator
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare const Builder: MethodDecorator;

/**
 * Defining  CustomDialog ClassDecorator
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare const CustomDialog: ClassDecorator;

/**
 * Defines the data type of the interface restriction.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare interface Configuration {
  /**
   * Set colorMode.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  readonly colorMode: string;

  /**
   * Set fontScale.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  readonly fontScale: number;
}

/**
 * Defines the data type of the interface restriction.
 * @devices phone, tablet, car
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
declare interface Rectangle {
  /**
   * x:Horizontal coordinate
   * @devices phone, tablet, car
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  x?: Length;

  /**
   * y:Vertical axis coordinate.
   * @devices phone, tablet, car
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  y?: Length;

  /**
   * Sets the width of the current touchRect.
   * @devices phone, tablet, car
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  width?: Length;

  /**
   * Sets the height of the current touchRect.
   * @devices phone, tablet, car
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  height?: Length;
}

/**
 * Defining isSystemplugin Constants.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare const isSystemplugin: (...args: string[]) => any;

/**
 * global $r function
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare function $r(value: string, ...params: any[]): Resource;

/**
 * global $rawfile function
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare function $rawfile(value: string): Resource;

/**
 * global getContentStorage function
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
declare function getContentStorage(value: any): ContentStorage;

declare type Context = any;

/**
 * global getContext function
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
declare function getContext(value: any): Context;

interface AnimateToParam {
  duration?: number;
  tempo?: number;
  curve?: Curve | string;
  delay?: number;
  iterations?: number;
  playMode?: PlayMode;
  onFinish?: () => void;
}

/**
 * Define Preview property
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
interface PreviewParams {
  title?: string;
  width?: number;
  height?: number;
  language?: string;
  colorMode?: string;
  deviceType?: string;
  dpi?: number;
  orientation?: string;
  roundScreen?: boolean;
}

/**
 * ItemDragInfo object description
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
interface ItemDragInfo {
  /**
   * Obtains the X coordinate of the drag window, in vp.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  x: number;

  /**
   * Obtains the Y coordinate of the drag window, in vp.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  y: number;
}

/**
 * Defining animation function.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare function animateTo(value: AnimateToParam, event: () => void): void;

/**
 * Converts a value in vp units to a value in px.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare function vp2px(value: number): number;

/**
 * Converts a number in units of px to a number in units of vp.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare function px2vp(value: number): number;

/**
 * Converts a number in fp units to a number in px.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare function fp2px(value: number): number;

/**
 * Converts a number in units of px to a number in units of fp.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare function px2fp(value: number): number;

/**
 * Converts a number in units of lpx to a number in units of px.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare function lpx2px(value: number): number;

/**
 * Converts a number in units of px to a number in units of lpx.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare function px2lpx(value: number): number;

/**
 * Defines the event target.
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
interface EventTarget {
  /**
   * Area of current target.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  area: Area;
}

/**
 * Defines the event source type.
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum SourceType {
  /**
   * Unknown type.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  Unknown,

  /**
   * The mouse type.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  Mouse,

  /**
   * The touch screen type.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  TouchScreen,
}

/**
 * Defines the base event.
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
interface BaseEvent {
  /**
   * Defines the current target which fires this event.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  target: EventTarget;

  /**
   * Event timestamp.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  timestamp: number;

  /**
   * the event source info.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  source: SourceType;
}

/**
 * The tap action triggers this method invocation.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
interface ClickEvent extends BaseEvent {
  /**
   * X coordinate of the click point relative to the left edge of the device screen.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  screenX: number;

  /**
   * The Y coordinate of the touch point relative to the upper edge of the device screen.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  screenY: number;

  /**
   * X coordinate of the click point relative to the left edge of the clicked element.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  x: number;

  /**
   * Y coordinate of the click point relative to the upper edge of the clicked element.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  y: number;
}

/**
 * The mouse click action triggers this method invocation.
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
interface MouseEvent extends BaseEvent {
  /**
   * Mouse button of the click event.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  button: MouseButton;

  /**
   * Mouse action of the click event.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  action: MouseAction;

  /**
   * X coordinate of the click point relative to the left edge of the device screen.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  screenX: number;

  /**
   * The Y coordinate of the click point relative to the upper edge of the device screen.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  screenY: number;

  /**
   * X coordinate of the click point relative to the left edge of the clicked element.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  x: number;

  /**
   * Y coordinate of the click point relative to the upper edge of the clicked element.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  y: number;

  /**
   * The blocking event pops up.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  stopPropagation?: () => void;
}

/**
 * Type of the touch event.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
interface TouchObject {
  /**
   * Type of the touch event.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  type: TouchType;

  /**
   * Finger unique identifier.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  id: number;

  /**
   * X coordinate of the touch point relative to the left edge of the device screen.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  screenX: number;

  /**
   * The Y coordinate of the touch point relative to the upper edge of the device screen.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  screenY: number;

  /**
   * X coordinate of the touch point relative to the left edge of the touched element.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  x: number;

  /**
   * Y coordinate of the touch point relative to the upper edge of the touched element.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  y: number;
}

/**
 * Touch Action Function Parameters
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
interface TouchEvent extends BaseEvent {
  /**
   * Type of the touch event.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  type: TouchType;

  /**
   * All finger information.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  touches: TouchObject[];

  /**
   * Indicates the current changed finger information.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  changedTouches: TouchObject[];

  /**
   * The blocking event pops up.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  stopPropagation?: () => void;
}

/**
 * pixelmap object with release function.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare class PixelMap {
  /**
   * release function.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  release(): void;
}

/**
 * DragEvent object description
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
interface DragEvent {
  /**
   * Obtains the X coordinate of the drag window, in vp.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  getX(): number;

  /**
   * Obtains the Y coordinate of the drag window, in vp.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  getY(): number;
}

/**
 * KeyEvent object description:
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
interface KeyEvent {
  /**
   * Type of a key.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  type: KeyType;

  /**
   * Key code of a key
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  keyCode: number;

  /**
   * Key value of a key.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  keyText: string;

  /**
   * Type of the input device that triggers the current key, such as the keyboard or handle.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  keySource: KeySource;

  /**
   * Indicates the ID of the input device that triggers the current key.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  deviceId: number;

  /**
   * Indicates the status of the key when the key is pressed.
   * The value 1 indicates the pressed state, and the value 0 indicates the unpressed state.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  metaKey: number;

  /**
   * Timestamp when the key was pressed.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  timestamp: number;

  /**
   * Block event bubbling.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  stopPropagation?: () => void;
}

/**
 * Component State Styels.
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
interface StateStyels {
  /**
   * Defines normal state styles.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  normal?: any;

  /**
   * Defines pressed state styles.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  pressed?: any;

  /**
   * Defines disabled state styles.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  disabled?: any;

  /**
   * Defines focused state styles.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  focused?: any;

  /**
   * Defines clicked state styles.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  clicked?: any;
}

interface PopupOption {
  /**
   * Information in the pop-up window.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  message: string;

  /**
   * placement On Top
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  placementOnTop?: boolean;

  /**
   * The first button.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  primaryButton?: {
    /**
     * Button text value
     * @since 7
* @Syscap SystemCapability.ArkUI.Standard
     */
    value: string;

    /**
     * action
     * @since 7
* @Syscap SystemCapability.ArkUI.Standard
     */
    action: () => void;
  };

  /**
   * The second button.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  secondaryButton?: {
    /**
     * Button text value
     * @since 7
* @Syscap SystemCapability.ArkUI.Standard
     */
    value: string;

    /**
     * action
     * @since 7
* @Syscap SystemCapability.ArkUI.Standard
     */
    action: () => void;
  };

  /**
   * on State Change
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onStateChange?: (event: { isVisible: boolean }) => void;
}

interface CustomPopupOption {
  /**
   * builder of popup
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  builder: CustomBuilder;

  /**
   * placement of popup
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  placement?: Placement;

  /**
   * mask color of popup
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  maskColor?: Color | string | Resource | number;

  /**
   * background color of popup
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  popupColor?: Color | string | Resource | number;

  /**
   * whether show arrow
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  enableArrow?: boolean;

  /**
   * whether hide popup when click mask
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  autoCancel?: boolean;

  /**
   * on State Change
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  onStateChange?: (event: { isVisible: boolean }) => void;
}

/**
 * CommonMethod
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare class CommonMethod<T> {
  /**
   * constructor.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  constructor();

  /**
   * Sets the width of the current component.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  width(value: Length): T;

  /**
   * Sets the width of the current component.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  height(value: Length): T;

  /**
   * Sets the response region of the current component.
   * @devices phone, tablet, car
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  responseRegion(value: Array<Rectangle> | Rectangle): T;

  /**
   * The size of the current component.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  size(value: { width?: Length; height?: Length }): T;

  /**
   * constraint Size：
   * minWidth：minimum Width，maxWidth：maximum Width，minHeight：minimum Height ，maxHeight：maximum Height，
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  constraintSize(value: {
    minWidth?: number | string | Resource;
    maxWidth?: number | string | Resource;
    minHeight?: number | string | Resource;
    maxHeight?: number | string | Resource;
  }): T;

  /**
   * Sets the touchable of the current component
   * @devices phone, tablet, car
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  touchable(value: boolean): T;

  /**
   * layout Weight
   * @devices phone, tablet, car.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  layoutWeight(value: number | string): T;

  /**
   * Inner margin
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  padding(value: Padding | Length): T;

  /**
   * Outer Margin
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  margin(value: Margin | Length): T;

  /**
   * Background color
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  backgroundColor(value: Color | number | string | Resource): T;

  /**
   * Background image
   * src: Image address url
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  backgroundImage(src: string, repeat?: ImageRepeat): T;

  /**
   * Background image size
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  backgroundImageSize(value: { width?: number | string; height?: number | string } | ImageSize): T;

  /**
   * Background image position
   * x:Horizontal coordinate;y:Vertical axis coordinate.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  backgroundImagePosition(value: { x?: number | string; y?: number | string } | Alignment): T;

  /**
   * Opacity
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  opacity(value: number | Resource): T;

  /**
   * Opacity
   * width:Border width;color:Border color;radius:Border radius;
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  border(value: {
    width?: number | string | Resource;
    color?: Color | number | string | Resource;
    radius?: number | string | Resource;
    style?: BorderStyle;
  }): T;

  /**
   * Border style
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  borderStyle(value: BorderStyle): T;

  /**
   * Border width
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  borderWidth(value: number | string | Resource): T;

  /**
   * Border color
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  borderColor(value: Color | number | string | Resource): T;

  /**
   * Border radius
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  borderRadius(value: number | string | Resource): T;

  /**
   * Trigger a click event when a click is clicked.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onClick(event: (event?: ClickEvent) => void): T;

  /**
   * Trigger a mouse hover event.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  onHover(event: (isHover?: boolean) => void): T;

  /**
   * Set hover effect.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  hoverEffect(value: HoverEffect): T;

  /**
   * Trigger a mouse event.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  onMouse(event: (event?: MouseEvent) => void): T;

  /**
   * Trigger a touch event when touched.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onTouch(event: (event?: TouchEvent) => void): T;

  /**
   * Keyboard input
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onKeyEvent(event: (event?: KeyEvent) => void): T;

  /**
   * animation
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  animation(value: {
    duration?: number;
    tempo?: number;
    curve?: Curve | string;
    delay?: number;
    iterations?: number;
    playMode?: PlayMode;
    onFinish?: () => void;
  }): T;

  /**
   * Transition parameter
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  transition(value: {
    type?: TransitionType;
    opacity?: number;
    translate?: {
      x?: number | string;
      y?: number | string;
      z?: number | string;
    };
    scale?: {
      x?: number;
      y?: number;
      z?: number;
      centerX?: number | string;
      centerY?: number | string;
    };
    rotate?: {
      x?: number;
      y?: number;
      z?: number;
      centerX?: number | string;
      centerY?: number | string;
      angle: number | string;
    };
  }): T;

  /**
   * Bind gesture recognition.
   * gesture:Bound Gesture Type,mask:GestureMask;
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  gesture(gesture: GestureType, mask?: GestureMask): T;

  /**
   * Binding Preferential Recognition Gestures
   * gesture:Bound Gesture Type,mask:GestureMask;
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  priorityGesture(gesture: GestureType, mask?: GestureMask): T;

  /**
   * Binding gestures that can be triggered simultaneously with internal component gestures
   * gesture:Bound Gesture Type,mask:GestureMask;
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  parallelGesture(gesture: GestureType, mask?: GestureMask): T;

  /**
   * Adds the content blurring effect for the current component. The input parameter is the blurring radius.
   * The larger the blurring radius, the more blurring the content.
   * If the value is 0, the content blurring effect is not blurring.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  blur(value: number): T;

  /**
   * Adds a highlight effect to the current component.
   * The input parameter is the highlight proportion. 0 indicates no highlight effect, and 1 indicates the maximum highlight proportion.
   * The component is displayed as all white (percentage).
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  brightness(value: number): T;

  /**
   * Adds a contrast effect to the current component. The input parameter is the contrast value.
   * A larger contrast value indicates a sharper image. When the contrast value is 0, the image becomes gray. (%)
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  contrast(value: number): T;

  /**
   * Adds a grayscale effect to the current component.
   * The value is the gray scale conversion ratio. If the input parameter is 1.0, the gray scale image is completely converted to the gray scale image. If the input parameter is 0.0, the image does not change.
   * If the input parameter is between 0.0 and 1.0, the effect changes. (Percentage)
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  grayscale(value: number): T;

  /**
   * Adds a color overlay effect for the current component. The input parameter is the superimposed color.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  colorBlend(value: Color | string | Resource): T;

  /**
   * Adds a saturation effect to the current component.
   * The saturation is the ratio of the color-containing component to the achromatic component (gray).
   * The larger the color-containing component, the greater the saturation.
   * The larger the achromatic component, the smaller the saturation. (Percentage)
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  saturate(value: number): T;

  /**
   * Converts the image to sepia. Value defines the scale of the conversion.
   * A value of 1 is completely sepia, and a value of 0 does not change the image. (Percentage)
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  sepia(value: number): T;

  /**
   * Inverts the input image. Value defines the scale of the conversion. 100% of the value is a complete reversal.
   * A value of 0% does not change the image. (Percentage)
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  invert(value: number): T;

  /**
   * Adds the hue rotation effect to the current component.
   * The input parameter is the rotation angle. When the input parameter is 0deg, the image does not change (the default value is 0deg), and the input parameter does not have a maximum value.
   * If the value exceeds 360deg, the image is circled again.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  hueRotate(value: number | string): T;

  /**
   * Adds the background blur effect for the current component. The input parameter is the blur radius.
   * The larger the blur radius, the more blurred the background. If the value is 0, the background blur is not blurred.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  backdropBlur(value: number): T;

  /**
   * Sets the translation effect during page transition.
   * The value is the start point of entry and end point of exit.
   * When this parameter is set together with slide, slide takes effect by default.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  translate(value: { x?: number | string; y?: number | string; z?: number | string }): T;

  /**
   * Sets the zoom effect during page transition. The value is the start point of entry and end point of exit.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  scale(value: { x?: number; y?: number; z?: number; centerX?: number | string; centerY?: number | string }): T;

  /**
   * Default number of occupied columns, indicating the number of occupied grid columns when the number of columns (span) of the corresponding size is not set in the useSizeType attribute.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  gridSpan(value: number): T;

  /**
   * The default offset column number indicates the number of offset columns of the current component in the start direction of the parent component when the useSizeType attribute does not set the offset of the corresponding dimension. That is,
   * the current component is located in the nth column.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  gridOffset(value: number): T;

  /**
   * Sets the rotation effect during assembly transition.
   * The values are the start point during insertion and the end point during deletion.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  rotate(value: {
    x?: number;
    y?: number;
    z?: number;
    centerX?: number | string;
    centerY?: number | string;
    angle: number | string;
  }): T;

  /**
   * Sets the transformation matrix for the current component.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  transform(value: object): T;

  /**
   * This callback is triggered when a component mounts a display.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onAppear(event: () => void): T;

  /**
   * This callback is triggered when component uninstallation disappears.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onDisAppear(event: () => void): T;

  /**
   * This callback is triggered when the size or position of this component has changed.
   * @param event event callback.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  onAreaChange(event: (oldValue: Area, newValue: Area) => void): T;

  /**
   * Controls the display or hide of the current component.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  visibility(value: Visibility): T;

  /**
   * The percentage of the remaining space of the Flex container allocated to the component on which this property resides.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  flexGrow(value: number): T;

  /**
   * The proportion of the Flex container compression size assigned to the component on which this attribute resides.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  flexShrink(value: number): T;

  /**
   * The base dimension of the assembly on which this attribute is located in the direction of the principal axis in the Flex container.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  flexBasis(value: number | string): T;

  /**
   * Overrides the default configuration of alignItems in the Flex Layout container.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  alignSelf(value: ItemAlign): T;

  /**
   * Sets the current component and displays the priority in the layout container. This parameter is valid only in Row, Column, and Flex single-row layouts.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  displayPriority(value: number): T;

  /**
   * The sibling components in the same container are hierarchically displayed. A larger value of z indicates a higher display level.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  zIndex(value: number): T;

  /**
   * If the components of the two pages are configured with the same ID, the shared element transition is performed during transition. If the parameter is set to an empty string, the shared element transition does not occur. For details about the options parameter, see the options parameter description.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  sharedTransition(
    id: string,
    options?: {
      duration?: number;
      curve?: Curve | string;
      delay?: number;
      motionPath?: {
        path: string;
        from?: number;
        to?: number;
        rotatable?: boolean;
      };
      zIndex?: number;
      type?: SharedTransitionEffectType;
    },
  ): T;

  /**
   * Sets the sliding direction. The enumerated value supports logical AND (&) and logical OR (|).
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  direction(value: Direction): T;

  /**
   * align
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  align(value: Alignment): T;

  /**
   * position
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  position(value: { x?: number | string | Resource; y?: number | string | Resource }): T;

  /**
   * Sets the anchor point of the element when it is positioned. The base point is offset from the top start point of the element.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  markAnchor(value: { x?: number | string | Resource; y?: number | string | Resource }): T;

  /**
   * Coordinate offset relative to the layout completion position.
   * Setting this attribute does not affect the layout of the parent container. The position is adjusted only during drawing.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  offset(value: { x?: number | string | Resource; y?: number | string | Resource }): T;

  /**
   * If the value is true, the component is available and can respond to operations such as clicking.
   *  If it is set to false, click operations are not responded.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  enabled(value: boolean): T;

  /**
   * Sets the number of occupied columns and offset columns for a specific device width type.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  useSizeType(value: {
    xs?: number | { span: number; offset: number };
    sm?: number | { span: number; offset: number };
    md?: number | { span: number; offset: number };
    lg?: number | { span: number; offset: number };
  }): T;

  /**
   * Specifies the aspect ratio of the current component.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  aspectRatio(value: number): T;

  /**
   * After a listener is bound, the component can be dragged. After the drag occurs, a callback is triggered.
   * (To be triggered, press and hold for 170 milliseconds (ms))
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onDragStart(event: (event?: DragEvent, extraParams?: string) => (() => any) | void): T;

  /**
   * After binding, a callback is triggered when the component is dragged to the range of the component.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onDragEnter(event: (event?: DragEvent, extraParams?: string) => void): T;

  /**
   * After binding, a callback is triggered when the drag moves within the range of a placeable component.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onDragMove(event: (event?: DragEvent, extraParams?: string) => void): T;

  /**
   * After binding, a callback is triggered when the component is dragged out of the component range.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onDragLeave(event: (event?: DragEvent, extraParams?: string) => void): T;

  /**
   * The component bound to this event can be used as the drag release target.
   * This callback is triggered when the drag behavior is stopped within the scope of the component.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onDrop(event: (event?: DragEvent, extraParams?: string) => void): T;

  /**
   * Add mask text to the current component. The layout is the same as that of the current component.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  overlay(value: string, options?: { align?: Alignment; offset?: { x?: number; y?: number } }): T;

  /**
   * Linear Gradient
   * angle: Angle of Linear Gradient; direction:Direction of Linear Gradient;  colors:Color description for gradients,repeating:repeating.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  linearGradient(value: {
    angle?: number | string;
    direction?: GradientDirection;
    colors: Array<any>;
    repeating?: boolean;
  }): T;

  /**
   * Angle Gradient
   * center:is the center point of the angle gradient
   * start:Start point of angle gradient
   * end:End point of angle gradient
   * number:number
   * rotating:rotating
   * colors:Color description for gradients
   * repeating:repeating
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  sweepGradient(value: {
    center: Array<any>;
    start?: number | string;
    end?: number | string;
    rotation?: number | string;
    colors: Array<any>;
    repeating?: boolean;
  }): T;

  /**
   * Radial Gradient
   * center:Center point of radial gradient
   * radius:Radius of Radial Gradient
   * colors:Color description for gradients
   * repeating: Refill
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  radialGradient(value: { center: Array<any>; radius: number | string; colors: Array<any>; repeating?: boolean }): T;

  /**
   * Set the motion path of the component
   * path:Motion path for displacement animation, using the svg path string.
   * from:Start point of the motion path. The default value is 0.0.
   * to:End point of the motion path. The default value is 1.0.
   * rotatble:Whether to follow the path for rotation.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  motionPath(value: { path: string; from?: number; to?: number; rotatable?: boolean }): T;

  /**
   * Add a shadow effect to the current component
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  shadow(value: {
    radius: number | Resource;
    color?: Color | string | Resource;
    offsetX?: number | Resource;
    offsetY?: number | Resource;
  }): T;

  /**
   * When the parameter is of the Shape type, the current component is cropped according to the specified shape.
   * When the parameter is of the boolean type, this parameter specifies whether to crop based on the edge contour.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  clip(value: boolean | CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute): T;

  /**
   * Applies a mask of the specified shape to the current assembly.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  mask(value: CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute): T;

  /**
   * Key. User can set an key to the component to identify it.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  key(value: string): T;

  /**
   * Id. User can set an id to the component to identify it.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  id(value: string): T;

  /**
   * geometryTransition
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  geometryTransition(id: string): T;

  /**
   * Popup control
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  bindPopup(show: boolean, popup: PopupOption | CustomPopupOption): T;

  /**
   * Menu control
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  bindMenu(content: { value: string; action: () => void }[] | CustomBuilder): T;

  /**
   * ContextMenu control
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  bindContextMenu(content: CustomBuilder, responseType : ResponseType): T;

  /**
   * Sets styles for component state.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  stateStyles(value: StateStyels): T;
}

/**
 * Defines the CustomBuilder Type.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare type CustomBuilder = () => any;

/**
 * CommonShapeMethod
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare class CommonShapeMethod<T> extends CommonMethod<T> {
  /**
   * constructor.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  constructor();

  /**
   * border Color
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  stroke(value: Color | number | string | Resource): T;

  /**
   * Fill color.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  fill(value: Color | number | string | Resource): T;

  /**
   * Offset from the start point of the border drawing.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  strokeDashOffset(value: number | string): T;

  /**
   * Path endpoint drawing style.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  strokeLineCap(value: LineCapStyle): T;

  /**
   * Border corner drawing style.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  strokeLineJoin(value: LineJoinStyle): T;

  /**
   * Limits for drawing acute angles as bevels
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  strokeMiterLimit(value: number | string): T;

  /**
   * Sets the opacity of the border.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  strokeOpacity(value: number | string | Resource): T;

  /**
   * fill Opacity
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  fillOpacity(value: number | string | Resource): T;

  /**
   * Sets the width of the dividing line.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  strokeWidth(value: number | string | Resource): T;

  /**
   * Indicates whether to enable anti-aliasing
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  antiAlias(value: boolean): T;

  /**
   * Sets the gap for the border.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  strokeDashArray(value: Array<any>): T;
}

/**
 * Custom Component
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare class CustomComponent {
  /**
   * Customize the pop-up content constructor.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  build(): void;

  /**
   * Private  aboutToAppear Method
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  private aboutToAppear?(): void;

  /**
   * Private  aboutToDisappear Method
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  private aboutToDisappear?(): void;
}
