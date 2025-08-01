/*
 * Copyright (C) 2025 Huawei Device Co., Ltd.
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
 * @file
 * @kit ArkUI
 * @arkts 1.2
 */

import { DecoratedV1VariableBase, IDecoratedMutableVariable } from '../base/decoratorBase';
import { WatchIdType, WatchFuncType } from './decoratorWatch';

export declare class ProvideDecoratedVariable<T> extends DecoratedV1VariableBase<T>
    implements IDecoratedMutableVariable<T> {
    public constructor(varName: string, provideAlias: string, initValue: T, watchFunc?: WatchFuncType)
    public get(): T
    public set(newValue: T): void
}