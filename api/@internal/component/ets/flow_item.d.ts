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
 * 瀑布流网格容器中单项内容容器.
 * @since 9
 */
interface FlowItemInterface {
  /**
   * 返回FlowItem.
   * @since 9
   */
  (): FlowItemAttribute;
}

/**
 * FlowItem属性
 * @since 9
 */
declare class FlowItemAttribute extends CommonMethod<FlowItemAttribute> {
  /**
   * Just use for genetate tsbundle
   * @ignore ide should ignore this arrtibute
   */
  create(): FlowItemAttribute;

  /**
   * Just use for genetate tsbundle
   * @ignore ide should ignore this arrtibute
   */
  pop(): FlowItemAttribute;

  /**
   * FlowItem占用行数.
   * @since 9
   */
  rowSpan(value: number): FlowItemAttribute;
 
  /**
   * FlowItem占用列数.
   * @since 9
   */
  columnSpan(value: number): FlowItemAttribute;
}

declare const FlowItem: FlowItemInterface
declare const FlowItemInstance: FlowItemAttribute;
