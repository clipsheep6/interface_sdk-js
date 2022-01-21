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
 * Provides the interface for the marquee attributes.
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
interface MarqueeInterface {
  /**
   * Create marquee.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  (value: { start: boolean; step?: number; loop?: number; fromStart?: boolean; src: string }): MarqueeAttribute;
}

/**
 * Declares marquee properties.
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
declare class MarqueeAttribute extends CommonMethod<MarqueeAttribute> {
  /**
   * Set marquee font Color.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  fontColor(value: ResourceColor): MarqueeAttribute;

  /**
   * Set marquee font size.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  fontSize(value: Length): MarqueeAttribute;

  /**
   * Set marquee allow scale.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  allowScale(value: boolean): MarqueeAttribute;

  /**
   * Set marquee font weight.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  fontWeight(value: number | FontWeight | string): MarqueeAttribute;

  /**
   * Set marquee font family.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  fontFamily(value: string | Resource): MarqueeAttribute;

  /**
   * Called when scrolling starts.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  onStart(event: () => void): MarqueeAttribute;

  /**
   * Called when scrolling to the bottom.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  onBounce(event: () => void): MarqueeAttribute;

  /**
   * Called when scrolling is complete.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  onFinish(event: () => void): MarqueeAttribute;
}

declare const Marquee: MarqueeInterface;
declare const MarqueeInstance: MarqueeAttribute;
