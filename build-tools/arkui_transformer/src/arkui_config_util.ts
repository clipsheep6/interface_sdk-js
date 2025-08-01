/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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

import { OptionValues } from 'commander';
import * as fs from 'fs';

import path from 'path';

export interface ArkUIConfig {
    components: Array<string>;
}

interface NoneUIConfig {
    files: Array<string>;
}

export class ArkUIConfigUtil {
    static instance: ArkUIConfigUtil = new ArkUIConfigUtil();
    constructor() {
        this.config = JSON.parse(fs.readFileSync('./config/arkui_config.json', 'utf-8'));
        this.config.components.forEach(c => {
            this.componentSet.add(c);
        });
        this.noneUIconfig = JSON.parse(fs.readFileSync('./config/none_arkui_files.json', 'utf-8'));
        this.noneUIconfig.files.forEach(f => {
            this.noneUIFileSet.add(f);
        });
    }
    // ui components
    private config: ArkUIConfig;
    // None ui files
    private noneUIconfig: NoneUIConfig;
    private noneUIFileSet: Set<string> = new Set();
    // Full set of component, should be manually mantained by config file
    private componentSet: Set<string> = new Set();
    // Component superclass set, generated by traversing the declartion AST
    private componentSuperclassSet: Set<string> = new Set();
    // All class/interface name related to component attribute heritage
    private componentHeritage: Set<string> = new Set();
    // All implement relationship of component heritage
    private componentHerirageRelation: Map<string, string> = new Map();
    // All component filename
    private componentFiles: Set<string> = new Set();
    private file2Attrbiute: Map<string, string> = new Map();
    private shouldNotHaveAttributeModifier: Set<string> = new Set();
    private _useMemoM3: boolean = false;
    private _configPath: string = '';
    get isHdsComponent(): boolean {
        return this._configPath.length > 0;
    }
    get useMemoM3(): boolean {
        return this._useMemoM3;
    }
    public loadConfig(config: OptionValues): void {
        if (config.useMemoM3) {
            this._useMemoM3 = true;
        }

        if (config.configPath != undefined && config.configPath != '') {
            this._configPath = config.configPath;
            // exception process: avoid non-existing given path
            try {
                this.config = JSON.parse(fs.readFileSync(this._configPath + '/hds_uicomponents.json', 'utf-8'));
                this.componentSet.clear();
                this.config.components.forEach(c => {
                    this.componentSet.add(c);
                });
                this.noneUIconfig = JSON.parse(fs.readFileSync(this._configPath + '/hds_non_uicomponents.json', 'utf-8'));
                this.noneUIFileSet.clear();
                this.noneUIconfig.files.forEach(f => {
                    this.noneUIFileSet.add(f);
                });
            } catch (error) {
                this._configPath = '';
                console.log('Load given hds_uicomponents file failed!', error);
            }
        }
    }
    private getPureName(name: string): string {
        return path
            .basename(name)
            .replace(/\.d\.e?ts/g, '')
            .replace(/_/g, '')
            .toLowerCase();
    }

    public isRelatedToComponent(name: string): boolean {
        return this.componentSet.has(name) || this.componentSuperclassSet.has(name);
    }
    public isComponent(name: string, subfix: string): boolean {
        const regSubfix = new RegExp(subfix, 'g');
        return this.componentSet.has(name.replace(regSubfix, ''));
    }
    public addComponentSuperclass(name: string): void {
        if (!this.isComponent(name, 'Attribute')) {
            this.componentSuperclassSet.add(name);
        }
    }
    public addComponentAttributeHeritage(name: string[]): void {
        let prev: string | undefined = undefined;
        name.forEach(n => {
            if (prev) {
                this.componentHerirageRelation.set(prev, n);
            }
            prev = n;
            this.componentHeritage.add(n);
        });
        if (name.length == 1) {
            this.shouldNotHaveAttributeModifier.add(name[0]);
        }
    }
    public getComponentSuperclass(name: string): string | undefined {
        return this.componentHerirageRelation.get(name);
    }
    public isUIHeritage(name: string): boolean {
        return this.componentHeritage.has(name);
    }
    public notUIFile(name: string): boolean {
        return this.noneUIFileSet.has(this.getPureName(name));
    }
    public addComponentFile(name: string): void {
        this.componentFiles.add(this.getPureName(name));
    }
    public isComponentFile(name: string): boolean {
        return this.componentFiles.has(this.getPureName(name));
    }
    public shouldHaveAttributeModifier(name: string): boolean {
        if (this.isHdsComponent) {
            return false;
        }
        return !this.shouldNotHaveAttributeModifier.has(name) && this.isComponent(name, 'Attribute');
    }
}

export default ArkUIConfigUtil.instance;
