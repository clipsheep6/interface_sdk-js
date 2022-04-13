/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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
 * 瀑布流样式, 将网格容器划分成"行"和"列", FlowItem元素可以在网格容器内
 * 按照主轴、辅轴方向顺序布局排列。
 * crossSplice：辅轴方向的网格分割份数。
 * mainLength：主轴方向的宫格高度。可选参数，不指定的时候，网格为正方形。
 * @since 9
 */
declare interface GridStyle {
  crossSplice: number;
  mainLength?: Length;
}

/**
 * 瀑布流容器, 二维容器, 支持GridStyle样式。
 * @since 9
 */
interface WaterFlowInterface {
  /**
   * 返回WaterFlow.
   * @since 9
   */
  (style: GridStyle, scroller?: Scroller): WaterFlowAttribute;
}

/**
 * WaterFlow组件属性
 * @since 9
 */
declare class WaterFlowAttribute extends CommonMethod<WaterFlowAttribute> {
  /**
   * Just use for genetate tsbundle
   * @ignore ide should ignore this arrtibute
   */
  create(style: GridStyle, scroller?: Scroller): WaterFlowAttribute;

  /**
   * Just use for genetate tsbundle
   * @ignore ide should ignore this arrtibute
   */
  pop(): WaterFlowAttribute;

  /**
   * Just use for genetate tsbundle
   * @ignore ide should ignore this arrtibute
   * @since 9
   */
  debugLine(value: string): GridAttribute;

  /**
   * 用于设置列与列的间距
   * @since 9
   */
  columnsGap(value: Length): WaterFlowAttribute;

  /**
   * 用于设置行与行的间距
   * @since 9
   */
  rowsGap(value: Length): WaterFlowAttribute;

  /**
   * 控制WaterFlow的布局方向
   * @since 9
   */
  layoutDirection(value: LayoutDirection): WaterFlowAttribute;
}

declare const WaterFlow: WaterFlowInterface;
declare const WaterFlowInstance: WaterFlowAttribute;
