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

const { ApiDigestInfo } = require('./api_data');
const { DiffReporter } = require('./reporter');
const { StatusCode } = require('./reporter');

class TagItem {
  constructor() { }

  addSinceVersion(version) {
    this.setProperty('sinceVersion', version);
  }

  getSinceVersion() {
    return this.sinceVersion;
  }

  addSyscap(sysCap) {
    this.setProperty('sysCap', sysCap);
  }

  getSyscap() {
    return this.sysCap;
  }

  addAppModel(model) {
    this.setProperty('appModel', model);
  }

  getAppModel() {
    return this.appModel;
  }

  addDeprecated(deprecated) {
    this.setProperty('deprecated', deprecated);
  }

  getDeprecated() {
    return this.deprecated;
  }

  addErrorCode(errorCode) {
    this.setProperty('errorCode', errorCode);
  }

  getErrorCode() {
    return this.errorCode;
  }

  addApiLevel(level) {
    this.setProperty('apiLevel', level)
  }

  getApiLevel() {
    return this.apiLevel;
  }

  addTypeTag(type) {
    this.setProperty('type', type);
  }

  getTypeTag() {
    return this.type;
  }

  addUseInstead(useinstead) {
    this.setProperty('useinstead', useinstead);
  }

  getUseInstead() {
    return this.useinstead;
  }

  addPermission(permission) {
    this.setProperty('permission', permission);
  }

  getPermission() {
    return this.permission;
  }

  setProperty(name, value) {
    if (this[name]) {
      this[name].push(value);
    } else {
      this[name] = [value];
    }
  }
}

function isArrayEquals(first, second) {
  if (!first && !second) {
    return true;
  }
  const ret = first && second && first.length === second.length;
  if (ret) {
    first.sort();
    second.sort();
    for (let index = 0; index < first.length; index++) {
      if (first[index] !== second[index]) {
        return false;
      }
    }
  }
  return ret;
}

function arrayToString(array) {
  if (!array || array.length === 0) {
    return '';
  }
  return array.join();
}

/**
 * 获取API @deprecated 标签信息, 继承父类
 * 
 * @param {ApiDigestInfo} api 
 */
function getApiDeprecated(api) {
  let curApi = api;
  while (curApi) {
    const jsdocTagItem = getTagItemFromJSDoc(curApi);
    if (jsdocTagItem.getDeprecated()) {
      return jsdocTagItem.getDeprecated();
    }
    curApi = curApi.getParent();
  }
  return [];
}

/**
 * 获取 API @syscap 标签信息，继承父类
 * 
 * @param {ApiDigestInfo} api 
 * @returns 
 */
function getApiSyscap(api) {
  let curApi = api;
  while (curApi) {
    const jsdocTagItem = getTagItemFromJSDoc(curApi);;
    if (jsdocTagItem.getSyscap()) {
      return jsdocTagItem.getSyscap();
    }
    curApi = curApi.getParent();
  }
  return [];
}



/**
 * 获取API @useinstead，继承父类
 * 
 * @param {ApiDigestInfo} api 
 * @returns 
 */
function getApiUseInstead(api) {
  let curApi = api;
  while (curApi) {
    const jsdocTagItem = getTagItemFromJSDoc(curApi);;
    if (jsdocTagItem.getUseInstead()) {
      return jsdocTagItem.getUseInstead();
    }
    curApi = curApi.getParent();
  }
  return [];
}

/**
 * 从 JSDoc 对象获取所有Tag标签信息
 * 
 * @param {ApiDigestInfo} api 
 */
function getTagItemFromJSDoc(api) {
  let jsdocTagItem = api.getJSDocTagItem();
  if (!jsdocTagItem) {
    jsdocTagItem = createTagItemFromJSDoc(api.jsdoc);
    api.setJSDocTagItem(jsdocTagItem);
  }
  return jsdocTagItem;
}

function wrapApiChanges(api, statusCode, oldMessage, newMessage, hint, oldNode, newNode, syscap) {
  return {
    api: api,
    statusCode: statusCode,
    oldMessage: oldMessage,
    newMessage: newMessage,
    hint: hint,
    oldNode: oldNode,
    newNode: newNode,
    syscap: syscap
  };
}

/**
 * 比较JSDoc的差异
 * 
 * @param {ApiDigestInfo} oldApi 
 * @param {ApiDigestInfo} newApi 
 * @param {DiffReporter} diffReporter 
 */
function compareJSDocs(oldApi, newApi, diffReporter) {
  const oldTagItem = getTagItemFromJSDoc(oldApi);
  const newTagItem = getTagItemFromJSDoc(newApi);
  const useinstead = getApiUseInstead(newApi);
  const hint = useinstead.length > 0 ? `useinstead: ${useinstead[0]}` : '';
  // compare since version
  if (!isArrayEquals(oldTagItem.getSinceVersion(), newTagItem.getSinceVersion())) {
    diffReporter.addChangedApi(wrapApiChanges(
      newApi, StatusCode.VERSION_CHNAGES, arrayToString(oldTagItem.getSinceVersion()),
      arrayToString(newTagItem.getSinceVersion()),
      hint, '', '', getApiSyscap(newApi)[0]
    ));
  }

  const oldDeprecated = getApiDeprecated(oldApi);
  const newDeprecated = getApiDeprecated(newApi);
  if (!isArrayEquals(oldDeprecated, newDeprecated)) {
    diffReporter.addChangedApi(wrapApiChanges(
      newApi, StatusCode.DEPRECATED_CHNAGES,
      arrayToString(oldDeprecated), arrayToString(newDeprecated),
      hint, '', '', getApiSyscap(newApi)[0]
    ));
  }

  if (!isArrayEquals(oldTagItem.getErrorCode(), newTagItem.getErrorCode())) {
    let statusCode = '';
    if (oldTagItem.getErrorCode() === undefined) {
      statusCode = StatusCode.NEW_ERRORCODE;
    } else {
      statusCode = StatusCode.ERRORCODE_CHANGES;
    }
    diffReporter.addChangedApi(wrapApiChanges(
      newApi, statusCode, arrayToString(oldTagItem.getErrorCode()),
      arrayToString(newTagItem.getErrorCode()),
      hint,
      oldApi.node,
      newApi.node,
      getApiSyscap(newApi)[0]
    ));
    diffReporter.addDiffInfo(wrapApiChanges(
      newApi, statusCode, arrayToString(oldTagItem.getErrorCode()),
      arrayToString(newTagItem.getErrorCode()),
      hint,
      oldApi.node,
      newApi.node
    ))
  }

  const oldSyscap = getApiSyscap(oldApi);
  const newSyscap = getApiSyscap(newApi);
  if (!isArrayEquals(oldSyscap, newSyscap)) {
    diffReporter.addChangedApi(wrapApiChanges(
      newApi, StatusCode.SYSCAP_CHANGES, arrayToString(oldSyscap),
      arrayToString(newSyscap),
      hint, '', '', newSyscap[0]
    ));
  }

  if (!isArrayEquals(oldTagItem.getApiLevel(), newTagItem.getApiLevel())) {
    diffReporter.addChangedApi(wrapApiChanges(
      newApi, StatusCode.SYSTEM_API_CHNAGES,
      arrayToString(oldTagItem.getApiLevel()),
      arrayToString(newTagItem.getApiLevel()),
      hint, '', '', getApiSyscap(newApi)[0]
    ));
  }

  if (!isArrayEquals(oldTagItem.getPermission(), newTagItem.getPermission())) {
    diffReporter.addChangedApi(wrapApiChanges(newApi, StatusCode.PERMISSION_CHNAGES,
      arrayToString(oldTagItem.getPermission()),
      arrayToString(newTagItem.getPermission()),
      hint,
      oldApi.node,
      newApi.node,
      getApiSyscap(newApi)[0]
    ));

    diffReporter.addDiffInfo(wrapApiChanges(newApi, StatusCode.PERMISSION_CHNAGES,
      arrayToString(oldTagItem.getPermission()),
      arrayToString(newTagItem.getPermission()),
      hint,
      oldApi.node,
      newApi.node
    ))
  }

  if (!isArrayEquals(oldTagItem.getAppModel(), newTagItem.getAppModel())) {
    diffReporter.addChangedApi(wrapApiChanges(newApi, StatusCode.MODEL_CHNAGES,
      arrayToString(oldTagItem.getAppModel()), arrayToString(newTagItem.getAppModel()),
      hint, '', '', getApiSyscap(newApi)[0]
    ));
  }

  if (!isArrayEquals(oldTagItem.getTypeTag(), newTagItem.getTypeTag())) {
    diffReporter.addChangedApi(wrapApiChanges(newApi, StatusCode.TYPE_CHNAGES,
      arrayToString(oldTagItem.getTypeTag()), arrayToString(newTagItem.getTypeTag()),
      hint,'', '', getApiSyscap(newApi)[0]
    ));
  }
}

/**
 * 解析 @since 7
 * 
 * @param {Object} tagObject 
 * @param {TagItem} tagItem 
 */
function appendSinceTag(tagObject, tagItem) {
  tagItem.addSinceVersion(tagObject.name ? tagObject.name : '');
}

/**
 * 解析 @syscap
 * 
 * @param {Object} tagObject 
 * @param {TagItem} tagItem 
 */
function appendSyscapTag(tagObject, tagItem) {
  tagItem.addSyscap(tagObject.name ? tagObject.name : '');
}

/**
 * 解析 @permission
 * 
 * @param {*} tagObject 
 * @param {*} tagItem 
 */
function appendPermissionTag(tagObject, tagItem) {
  const permissionRegExp = RegExp(/ohos\.permission\.\w+/g);
  let sourceText = '';
  tagObject.source.forEach((src) => {
    sourceText += src.source;
  });
  const permissionArray = sourceText.match(permissionRegExp);
  if (permissionArray) {
    permissionArray.forEach((permission) => {
      tagItem.addPermission(permission);
    });
  }
}

/**
 * 解析 @deprecated 标签
 * 
 * @param {Object} tagObject 
 * @param {TagItem} tagItem 
 */
function appendDeprecatedTag(tagObject, tagItem) {
  tagItem.addDeprecated(tagObject.description);
}

/**
 * 解析 @FAModelOnly @StageModelOnly
 * 
 * @param {Object} tagObject 
 * @param {TagItem} tagItem 
 */
function appendModelTag(tagObject, tagItem) {
  tagItem.addAppModel(tagObject.tag);
}

/**
 * 解析 @systemapi
 * 
 * @param {Object} tagObject 
 * @param {TagItem} tagItem 
 */
function appendApiLevelTag(tagObject, tagItem) {
  tagItem.addApiLevel(tagObject.tag);
}

/**
 * 解析 @type {string}
 * 
 * @param {Object} tagObject 
 * @param {TagItem} tagItem 
 */
function appendTypeTag(tagObject, tagItem) {
  tagItem.addTypeTag(tagObject.type);
}

/**
 * 解析 @useinstedad 标签
 * 
 * @param {Object} tagObject 
 * @param {TagItem} tagItem 
 */
function appendUseInsteadTag(tagObject, tagItem) {
  tagItem.addUseInstead(tagObject.name);
}

/**
 * 解析 @throws { BusinessError } 201 - 标签
 * 
 * @param {Object} tagObject 
 * @param {TagItem} tagItem 
 */
function appendErrorCodeTag(tagObject, tagItem) {
  tagItem.addErrorCode(tagObject.name);
}

const tagHandlerMap = new Map([
  ['since', appendSinceTag],
  ['syscap', appendSyscapTag],
  ['permission', appendPermissionTag],
  ['deprecated', appendDeprecatedTag],
  ['famodelonly', appendModelTag],
  ['stagemodelonly', appendModelTag],
  ['systemapi', appendApiLevelTag],
  ['type', appendTypeTag],
  ['useinstead', appendUseInsteadTag],
  ['throws', appendErrorCodeTag],
]);

/**
 * 从 comment-parser 库解析的JSDoc对象中提取标签信息
 * 
 * @param {Object} jsdocs 
 */
function createTagItemFromJSDoc(jsdocs) {
  const tagItem = new TagItem();
  if (!jsdocs || jsdocs.length === 0) {
    return tagItem;
  }
  jsdocs.forEach((singleJSDoc) => {
    if (singleJSDoc.tags) {
      singleJSDoc.tags.forEach((tagObject) => {
        const handler = tagHandlerMap.get(tagObject.tag.toLowerCase())
        if (handler) {
          handler(tagObject, tagItem);
        }
      });
    }
  });
  return tagItem;
}

exports.JSDocDiffer = {
  collectJSDocDiffs: compareJSDocs
}