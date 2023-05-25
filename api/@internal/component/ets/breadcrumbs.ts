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
 * Naivagtion title mode.
 * @since 8
 */

declare interface CrumbInfo {
    path: string;
    displayName?: string;
    icon?: ResourceStr;
    param?: unknown;
  }
  
  declare interface BreadCrumbsInterface {
    (crumbInfos: CrumbInfo[]): BreadCrumbsAttribute;
  }
  
  declare class BreadCrumbsAttribute extends CommonMethod<BreadCrumbsAttribute> {
    entry(crumbInfos: CrumbInfo[]): BreadCrumbsAttribute;
    back(): BreadCrumbsAttribute;
    backTo(path?: string): BreadCrumbsAttribute;
    onCrumbDrag(callback: (path: string, status: DragStatus) => void): BreadCrumbsAttribute;
  }

declare const BreadCrumbs: BreadCrumbsInterface;
declare const BreadCrumbsInstance: BreadCrumbsAttribute;
