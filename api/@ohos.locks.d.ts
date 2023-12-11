/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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

// TODO(lzl): add comments
export class AsyncLock {
  constructor();
  static request(name: string): AsyncLock;

  static query(): AsyncLockState[];
  static query(name: string): AsyncLockState;
  static query(id: number): AsyncLockState;

  lockAsync<T>(mode: AsyncLockMode, callback: AsyncLockCallback<T>): Promise<T>;
  lockAsync<T>(mode: AsyncLockMode, options: AsyncLockOptions, callback: AsyncLockCallback<T>): Promise<T>;
}

interface AsyncLockCallback<T> {
  (): Promise<T>;
}

interface AsyncLockState {
  held?: AsyncLockInfo[];
  pending?: AsyncLockInfo[];
}

type AsyncLockMode = 'exclusive' | 'shared';

interface AsyncLockInfo {
  clientId?: string;
  mode?: AsyncLockMode;
}

interface AsyncLockOptions {
  ifAvailable?: boolean;
  steal?: boolean;
}
