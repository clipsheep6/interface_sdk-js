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

import { CommonMethod, Resource } from "./common";

/**
 * Method of displaying menu.
 * @since 7
 */
export declare enum MenuType {

  /**
   * Shows when clicked.
   * @since 7
   */
  Click,

  /**
   * Long-time display.
   * @since 7
   */
  LongPress
}

/**
 * Make a statement about the menu display.
 * @since 7
 */
export declare class MenuExtend<T> extends MenuAttribute<T> {
}

/**
 * Provides an interface for displaying menus.
 * @since 7
 */
interface Menu extends MenuAttribute<Menu> {
  /**
   * Called when an option is displayed for a menu.
   * @since 7
   */
  (options?: { type?: MenuType, title?: string | Resource }): Menu;
}

/**
 * Method for declaring menu options.
 * @since 7
 */
declare class MenuAttribute<T> extends CommonMethod<T> {
  /**
   * Called when the menu is displayed..
   * @since 7
   */
  show(value: boolean): T;

   /**
   * Called when the display position is set.
   * @since 7
   */
  showPosition(options: {x: number, y: number}): T;
}

/**
 * @since 7
 */
export declare const MenuInterface: Menu;