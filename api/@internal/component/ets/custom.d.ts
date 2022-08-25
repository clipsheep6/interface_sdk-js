/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
 * Defines the options of CustomController.
 * @since 9
 */
declare interface CustomControllerOptions {
  /**
   * Custom builder function.
   * @since 9
   */
  builder: any;
  
  /**
   * Defines horizontal space.
   * @since 9
   */
  horizontalSpace?: number;
  
  /**
   * Defines vertical space.
   * @since 9
   */
  verticalSpace?: number;
  
  /**
   * Defines the children.
   * @since 9
   */
  children: () => void;
}

/**
  * Use the CustomController class to display the custom view.
  * @since 9
  */
declare class CustomController {
  /**
   * The constructor transfers parameter settings.
   * @since 9
   */
  constructor(value: CustomControllerOptions);

  /**
   * Custom Draw callback.
   * @since 9
   */
  onDraw(value: CanvasAttribute);

   /**
   * Custom Animation callback.
   * @since 9
   */
  onAnimation();

  /**
   * Custom Mesure callback.
   * @since 9
   */
  onMeasure(width: number, height: number);

  /**
   * Custom Layout callback.
   * @since 9
   */
  onLayout(width: number, height: number);
}