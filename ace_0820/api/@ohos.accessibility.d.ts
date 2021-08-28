/*
* Copyright (c) 2021 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/


import { AsyncCallback} from './basic';
import { AbilityInfo } from './abilityinfo';

declare namespace accessibility {
  function isOpenAccessibility(callback:AsyncCallback<boolean>): void;
  function isOpenAccessibility(): Promise<boolean>;

  function isOpenTouchExploration(callback:AsyncCallback<boolean>): void;
  function isOpenTouchExploration(): Promise<boolean>;

  function isOpenAccessibilityCaption(callback:AsyncCallback<boolean>): void;
  function isOpenAccessibilityCaption(): Promise<boolean>;

  function emit(type:'click' | 'longCilck' | 'select' | 'focus' | 'textChange' | 'hoverEnter' |'hoverExit' |'scroll' |
  'textSelectionChange' | 'accessibilityFocus' | 'accessibilityFocusClear',
  viewId:number, callback:AsyncCallback<boolean>): void;
  function emit(type:'click' | 'longCilck' | 'select' | 'focus' | 'textChange' | 'hoverEnter' |'hoverExit' |'scroll' |
  'textSelectionChange' | 'accessibilityFocus' | 'accessibilityFocusClear', viewId:number): Promise<boolean>;

  function on(type:'accessibiltityStateChange' | 'touchExploerStateChange', callback:AsyncCallback<'on' | 'off'>): void;
  function off(type?:'accessibiltityStateChange' | 'touchExploerStateChange', callback?: AsyncCallback<'on' | 'off'>): void;

  function getAbilityList(abilityType:'spoken' | 'haptic' | 'aduible' |'visual' | 'generic' | 'braille' | 'all',
  stateType:'enable' | 'disable' | 'install', callback:AsyncCallback<AccessibilityInfo>):void;
  function getAbilityList(abilityType:'spoken' | 'haptic' | 'aduible' |'visual' | 'generic' | 'braille' | 'all',
  stateType:'enable' | 'disable' | 'install'):Promise<AccessibilityInfo>;

  class EventInfo {
    viewId:number;
    windowId?:number;
    moveStep?:number;
    description?: string;
    type:'click' | 'longCilck' | 'select' | 'focus' |
    'textChange' | 'hoverEnter' |'hoverExit' |'scroll' | 'textSelectionChange' |
    'accessibilityFocus' | 'accessibilityFocusClear';
    windowChangeType?:'add' | 'remove' | 'titleChange' | 'boundsChange' | 'layerChange' | 'activeChange' |
    'focusChange' | 'accessibilityFocusChange' | 'parentChange' |'childrenChange' |'pipChange';
  }

  interface AccessibilityInfo {
    readonly id:string;
    readonly name:string;
    readonly description?:string;
    readonly type:'spoken' | 'haptic' | 'aduible' |'visual' | 'generic' | 'braille' | 'all';
    readonly eventType:'click' | 'longCilck' | 'select' | 'focus' |'textChange' | 'hoverEnter' |'hoverExit' |'scroll'
    | 'textSelectionChange' | 'accessibilityFocus' | 'accessibilityFocusClear';
    readonly capability:'windowContent' | 'touchExplorer' | 'filterKeyEvent' | 'magnification' | 'gesture';
    readonly abilityInfo?:AbilityInfo;
  }
}

export default accessibility;
