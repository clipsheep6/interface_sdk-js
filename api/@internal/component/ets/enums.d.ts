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
 * common enum of color
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum Color {
  /**
   * White.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  White,

  /**
   * Black.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Black,

  /**
   * Blue.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Blue,

  /**
   * Brown.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Brown,

  /**
   * Gray.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Gray,

  /**
   * Green.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Green,

  /**
   * Grey.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Grey,

  /**
   * Orange.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Orange,

  /**
   * color.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Pink,

  /**
   * Red.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Red,

  /**
   * Yellow.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Yellow,
}

/**
 * Image display mode
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum ImageFit {
  /**
   * Keep the aspect ratio to zoom out or zoom in so that the image is completely displayed within the display boundary.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Contain,

  /**
   * Keep the aspect ratio to zoom out or zoom in so that both sides of the image are greater than or equal to the display boundary.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Cover,

  /**
   * Adaptive display
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Auto,

  /**
   * Zoom in or out without maintaining the aspect ratio so that the image fills the display boundary.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Fill,

  /**
   * Keep the aspect ratio displayed, and the image zooms out or remains unchanged.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  ScaleDown,

  /**
   * Keep the original size and display it in the center.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  None,
}

/**
 * Border Style
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum BorderStyle {
  /**
   * Displays as a series of dots with a radius of half the borderWidth.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Dotted,

  /**
   * Shows as a series of short square dashed lines.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Dashed,

  /**
   * Shows as a solid line.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Solid,
}

/**
 * Line Join Style
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum LineJoinStyle {
  /**
   * Connect path segments using bevels.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Miter,

  /**
   * Connect path segments using sharp corners.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Round,

  /**
   * Connect path segments using fillets.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Bevel,
}

/**
 * Function Called by Touch
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum TouchType {
  /**
   * Triggered when the finger is pressed.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Down,

  /**
   * Triggered when the finger is raised.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Up,

  /**
   * Triggered when the finger presses on the screen.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Move,

  /**
   * Triggers when the touch event cancels.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Cancel,
}

/**
 * Function Called by Mouse
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum MouseButton {
  /**
   * Mouse Left Button.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  Left,

  /**
   * Mouse Right Button.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  Right,

  /**
   * Mouse Middle Button.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  Middle,

  /**
   * Mouse Back Button.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  Back,

  /**
   * Mouse Forward Button.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  Forward,

  /**
   * Mouse None Button.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  None,
}

/**
 * Function Called by Mouse
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum MouseAction {
  /**
   * Triggered when the mouse is pressed.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  Press,

  /**
   * Triggered when the mouse is released.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  Release,

  /**
   * Triggered when the mouse is Moved.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  Move,

  /**
   * Triggered when the mouse is Hovered.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  Hover,

  /**
   * Triggered when the mouse status is None.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  None,
}

/**
 * Animation status.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum AnimationStatus {
  /**
   * Initial state of the animation.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Initial,

  /**
   * The animation is playing.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Running,

  /**
   * The animation is paused.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Paused,

  /**
   * The animation is stopped.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Stopped,
}

/**
 * Sets the animation playback mode. By default, the animation starts to play again after the playback is complete.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum Curve {
  /**
   * Indicates that the speed of the animation is the same from start to finish.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Linear,

  /**
   * Indicates that the animation starts at a low speed, then accelerates, and then slows down before it ends, CubicBezier(0.25, 0.1, 0.25, 1.0).
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Ease,

  /**
   * Indicates that the animation starts at a low speed, CubicBezier(0.42, 0.0, 1.0, 1.0).
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  EaseIn,

  /**
   * Indicates that the animation ends at a low speed, CubicBezier(0.0, 0.0, 0.78, 1.0).
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  EaseOut,

  /**
   * Indicates that the animation starts and ends at a slow speed, CubicBezier(0.42, 0.0, 0.78, 1.0).
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  EaseInOut,

  /**
   * Slow-in, fast-out
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  FastOutSlowIn,

  /**
   * Linear Out Slow In
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  LinearOutSlowIn,

  /**
   * Fast OutL inear In.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  FastOutLinearIn,

  /**
   * Extreme Deceleration.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  ExtremeDeceleration,

  /**
   * Sharp.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Sharp,

  /**
   * Rhythm.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Rhythm,

  /**
   * Smooth.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Smooth,

  /**
   * Damping curve, CubicBezier(0.2, 0.0, 0.2, 1.0).
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Friction,
}

/**
 * Sets the state before and after the animation starts.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum FillMode {
  /**
   * Restores to the initial state after the playback is complete.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  None,

  /**
   * Retains the state at the end of the animation when the playback is complete.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Forwards,

  /**
   * Applies the start attribute value for the period specified by animation-delay before the animation is displayed.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Backwards,

  /**
   * Both forward and backward fill modes are applied.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Both,
}

/**
 * Play Mode
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum PlayMode {
  /**
   * The animation plays normally.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Normal,

  /**
   * The animation plays backwards.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Reverse,

  /**
   * The animation plays forward on odd numbers (1, 3, 7...) and backward on even numbers (2, 4, 6...).
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Alternate,

  /**
   * The animation plays backwards on odd numbers (1, 3, 7...) and forwards on even numbers (2, 4, 6...)..
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  AlternateReverse,
}

/**
 * This style allows you to set the window blurring degree and blurring style of the current component layout range,
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum BlurStyle {
  /**
   * Small range glow effect.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  SmallLight,

  /**
   * Medium range glow effect.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  MediumLight,

  /**
   * Wide range of luminous effects.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  LargeLight,

  /**
   * Super-range luminous effect.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  XlargeLight,

  /**
   * Small range of dark effects.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  SmallDark,

  /**
   * Medium range dark effect.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  MediumDark,

  /**
   * Wide range of dark effects.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  LargeDark,

  /**
   * Extra large range of dark effects.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  XlargeDark,
}

/**
 * Type of a key.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum KeyType {
  /**
   * Press the key.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Down,

  /**
   * The key is released.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Up,
}

/**
 * Type of the input device that triggers the current key.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum KeySource {
  /**
   * The input device type is unknown.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Unknown,

  /**
   * Set Device Type to Keyboard.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Keyboard,
}

/**
 * Edge.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum Edge {
  /**
   * The top is centered horizontally.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Top,

  /**
   * Center horizontal and vertical.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Center,

  /**
   * The bottom is centered horizontally.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Bottom,

  /**
   * Cross axis direction text baseline alignment.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Baseline,

  /**
   * Align the head of the cross axis direction.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Start,

  /**
   * Middle
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Middle,

  /**
   * Align the head of the cross axis direction.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  End,
}

/**
 * Set Weekend
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum Week {
  /**
   * Monday.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Mon,

  /**
   * Tuesday.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Tue,

  /**
   * Wednesday.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Wed,

  /**
   * Thursday.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Thur,

  /**
   * Friday.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Fri,

  /**
   * Saturday.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Sat,

  /**
   * Sunday.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Sun,
}

/**
 * Sets the horizontal layout of elements.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum Direction {
  /**
   * Elements are laid out from left to right.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Ltr,

  /**
   * Elements are laid out from right to left.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Rtl,

  /**
   * Use the default layout direction.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Auto,
}

/**
 * Sets the horizontal layout of elements.
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum FocusDirection {
  /**
   * From the key up.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  Up,

  /**
   * From the key down.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  Down,

  /**
   * From the key left.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  Left,

  /**
   * From the key right.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  Right,

  /**
   * From the key tab.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  Tab,
}

/**
 * Used to set the status of the scroll bar.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum BarState {
  /**
   * Not displayed.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Off,

  /**
   * On-demand display (displayed when you touch it and disappears after 2 seconds).
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Auto,

  /**
   * Resident display.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  On,
}

/**
 * Sliding effect
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum EdgeEffect {
  /**
   * Elastic physical action, sliding to the edge can continue to slide for a distance based on the initial speed or touch event, and spring back when released.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Spring,

  /**
   * Fade.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Fade,

  /**
   * Sliding to the edge has no effect.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  None,
}

/**
 * Alignment enumeration description.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum Alignment {
  /**
   * Top Start.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  TopStart,

  /**
   * The top is centered horizontally.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Top,

  /**
   * Top tail end.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  TopEnd,

  /**
   * The starting end is centered longitudinally.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Start,

  /**
   * Center horizontal and vertical.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Center,

  /**
   * The tail end is centered longitudinally.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  End,

  /**
   * Bottom starting end.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  BottomStart,

  /**
   * The bottom is centered horizontally.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Bottom,

  /**
   * Bottom end.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  BottomEnd,
}

/**
 * TransitionType enumeration description.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum TransitionType {
  /**
   * Specifies that the current transition action takes effect in all change scenarios of the component.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  All,

  /**
   * Specifies the insertion scenario in which the current transition action takes effect.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Insert,

  /**
   * Specifies the deletion scenario in which the current transition action takes effect.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Delete,
}

/**
 * RelateType enumeration description
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum RelateType {
  /**
   * Scales the current component to fill the parent component.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  FILL,

  /**
   * Scales the current component to fit the parent component.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  FIT,
}

/**
 * Controls the display or hide of the current component
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum Visibility {
  /**
   * Show
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Visible,

  /**
   * Hide, but participate in layout for placeholder.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Hidden,

  /**
   * Hides but does not participate in layout and does not take place.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  None,
}

/**
 * LineCapStyle enumeration description
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum LineCapStyle {
  /**
   * The two ends of the dividing line are parallel lines.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Butt,

  /**
   * The two ends of the dividing line are semicircles.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Round,

  /**
   * Extends half a circle at the end of the path with a width equal to half the line width and a height equal to the line width.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Square,
}

/**
 * Axis enumeration description.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum Axis {
  /**
   * Longitudinal arrangement
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Vertical,

  /**
   * Horizontal arrangement.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Horizontal,
}

/**
 * HorizontalAlign enumeration description.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum HorizontalAlign {
  /**
   * Aligns the start end in the language direction.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Start,

  /**
   * Center alignment. The default alignment mode is used.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Center,

  /**
   * Aligns the ends in the language direction.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  End,
}

/**
 * FlexAlign enumeration description.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum FlexAlign {
  /**
   * The element is aligned at the head of the principal axis,
   * the first element is aligned with the head of the row, and subsequent elements are aligned with the previous one.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Start,

  /**
   * The elements are centered in the direction of the principal axis,
   * and the first element is the same distance from the beginning of the row as the last element is from the end of the row.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Center,

  /**
   * The element is aligned at the tail of the principal axis,
   * the last element is aligned at the end of the row, and the other elements are aligned with the next.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  End,

  /**
   * Elastic elements are evenly distributed in the direction of the Flex principal axis,
   * with the same distance between adjacent elements.
   * The first element aligns with the beginning of the line, and the last element aligns with the end of the line.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  SpaceBetween,

  /**
   * Elastic elements are evenly distributed in the direction of the Flex principal axis,
   *  with the same distance between adjacent elements. Half the distance between adjacent elements as the distance between
   * the first element and the distance between the last element and the end of the row.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  SpaceAround,

  /**
   * Elements in the Flex axis direction are evenly spaced.
   * The spacing between adjacent elements, the spacing between the first element and the beginning of the row,
   * and the spacing between the last element and the end of the row are the same.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  SpaceEvenly,
}

/**
 * ItemAlign enumeration description
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum ItemAlign {
  /**
   * Use the default configuration in the Flex container.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Auto,

  /**
   * The element is in the Flex container with the cross-axis direction head aligned.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Start,

  /**
   * The element is centered in the Flex container with the cross axis direction aligned.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Center,

  /**
   * The element is bottom aligned in the Flex container with the cross axis direction.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  End,

  /**
   * Element In the Flex container, the cross-axis direction text baseline is aligned.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Baseline,

  /**
   * Element In a Flex container, the fill is stretched across the axis and, when no dimension is set, to the container size.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Stretch,
}

/**
 * FlexDirection enumeration description
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum FlexDirection {
  /**
   * The main axis is consistent with the row direction as the layout mode.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Row,

  /**
   * The main axis is consistent with the column direction as the layout mode.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Column,

  /**
   * The layout is in the opposite direction to the Row direction.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  RowReverse,

  /**
   * Layout in the opposite direction to the column.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  ColumnReverse,
}

/**
 * FlexWrap enumeration description
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum FlexWrap {
  /**
   * The Flex container has a single row/column layout of elements, and children are allowed to go beyond the container.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  NoWrap,

  /**
   * The elements of the Flex container are arranged in multiple rows or columns, and the sub-items are allowed to exceed the container.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Wrap,

  /**
   * The elements of the Flex container are arranged in reverse multiple rows/columns, and children are allowed to exceed the container.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  WrapReverse,
}

/**
 * VerticalAlign enumeration description
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum VerticalAlign {
  /**
   * Top alignment.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Top,

  /**
   * Center alignment. The default alignment mode is used.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Center,

  /**
   * Bottom alignment.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Bottom,
}

/**
 * ImageRepeat enumeration description
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum ImageRepeat {
  /**
   * Do not draw the picture again.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  NoRepeat,

  /**
   * Repeat the drawing only on the horizontal axis.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  X,

  /**
   * Repeat the drawing only on the vertical axis.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Y,

  /**
   * Draw the picture repeatedly on both axes.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  XY,
}

/**
 * ImageSize enumeration description
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum ImageSize {
  /**
   * Keep the scale of the original image unchanged.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Auto,

  /**
   * Default value. Keep the aspect ratio to zoom in or out the image so that both sides of the image are greater than or equal to the display boundary.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Cover,

  /**
   * Keep the aspect ratio to zoom out or zoom in so that the image is completely displayed within the display boundary.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Contain,
}

/**
 * GradientDirection enumeration description
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum GradientDirection {
  /**
   * Right to left.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Left,

  /**
   * From the bottom up.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Top,

  /**
   * From left to right.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Right,

  /**
   * From the top down.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Bottom,

  /**
   * Top Left
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  LeftTop,

  /**
   * Left Bottom
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  LeftBottom,

  /**
   * Right Top
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  RightTop,

  /**
   * Right Bottom
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  RightBottom,

  /**
   * None
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  None,
}

/**
 * SharedTransitionEffectType enumeration description
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum SharedTransitionEffectType {
  /**
   * The location of the destination page element remains unchanged, and you can configure the transparency animation. Currently,
   * only the static effect configured for redirecting to the target page takes effect.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Static,

  /**
   * Move the source page element to the destination page element location and scale it appropriately.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Exchange,
}

/**
 * Text style
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum FontStyle {
  /**
   * Default style.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Normal,

  /**
   * Italic style.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Italic,
}

/**
 * The font weight of the text
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum FontWeight {
  /**
   * Defines a lighter value than [Inherited Value]..
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Lighter,

  /**
   * Normal font. Equivalent to a digital value of 400.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Normal,

  /**
   * Defines a more general value than [Inherited Value].
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Regular,

  /**
   * Defines a value that is more centered than [Inherited Value].
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Medium,

  /**
   * Bold. Equivalent to a numeric value of 700.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Bold,

  /**
   * Defines a value that is heavier than [Inherited Value].
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Bolder,
}

/**
 * Alignment of text.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum TextAlign {
  /**
   * Center the text.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Center,

  /**
   * The text is aligned in the same direction as the writing
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Start,

  /**
   * The text is aligned in the opposite direction of writing
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  End,
}

/**
 * Declare how text overflows.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum TextOverflow {
  /**
   * When the text is too long, it will be cropped and displayed.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */

  Clip,
  /**
   * If the text is too long, the text that cannot be displayed shall be replaced by ellipsis.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */

  Ellipsis,

  /**
   * Text is not cropped when it is too long.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  None,
}

/**
 * Type of text modifier.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum TextDecorationType {
  /**
   * Do not use text decorative lines.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  None,

  /**
   * Underline the words.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Underline,

  /**
   * Text is in all uppercase.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Overline,

  /**
   * A modifier line that passes through the text.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  LineThrough,
}

/**
 * Letter type in text
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum TextCase {
  /**
   * The default is normal.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Normal,

  /**
   * The text is all lowercase.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  LowerCase,

  /**
   * The text is all uppercase.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  UpperCase,
}

/**
 * ResponseType for contextMenu
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum ResponseType {
  /**
   * Right click.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  RightClick,

  /**
   * Long press.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  LongPress,
}

/**
 * HoverEffect enumeration description
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum HoverEffect {
  /**
   * Default effect
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  Auto,

  /**
   * Zoom in and out effect
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  Scale,

  /**
   * Highlight effect
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  Board,

  /**
   * None effect
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  None,
}

/**
 * Placement enumeration description
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum Placement {
  /**
   * Left placement
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  Left,

  /**
   * Right placement
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  Right,

  /**
   * Top placement
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  Top,

  /**
   * Bottom placement
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  Bottom,

  /**
   * TopLeft placement
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  TopLeft,

  /**
   * TopRight placement
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  TopRight,

  /**
   * BottomLeft placement
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  BottomLeft,

  /**
   * BottomRight placement
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  BottomRight,
}
