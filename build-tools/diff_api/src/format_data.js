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

const fs = require('fs');
const https = require('https');
const { StatusCode, StatusMessages } = require('./reporter');

async function mergeDataBetweenVersion(oldVersion, newVersion, allVersionUrl) {
  const oldVersionNumber = oldVersion.replace(/\./g, '');
  const newVersionNumber = newVersion.replace(/\./g, '');
  const url = allVersionUrl.replace('allVersion.json', '');
  let versionArr = [];
  await downloadFiles(allVersionUrl).then(versionNumbers => {
    versionArr = JSON.parse(versionNumbers);
  });

  for (let i = 0; i < versionArr.length; i++) {
    const version = versionArr[i].replace(/\./g, '');
    if (version < oldVersionNumber || version > newVersionNumber) {
      versionArr.splice(i, 1);
      i--;
    }
  }
  let orderVersionArr = versionArr.sort((a, b) => {
    return a.replace(/\.|.json/g, '') - b.replace(/\.|.json/g, '');
  });
  console.log('arr:::',versionArr);
  return formatExcelData(orderVersionArr, url);
}

function downloadFiles(allVersionUrl) {
  return new Promise((resolve, reject) => {
    getVersionsData(allVersionUrl, (versions) => {
      if (versions) {
        resolve(versions);
      } else {
        reject({ code: -1 });
      }
    })
  })
}

function getLink(url, fileName) {
  return `${url}${fileName}.json`;
}

function getVersionsData(versionUrl, callback) {
  let json = '';
  const request = https.get(versionUrl, { timeout: 2000 }, function (res) {
    res.on('data', function (d) {
      json += d;
    })
  }).on('error', function (e) {
    console.log('ERROR:', e.message);
  }).on('close', () => {
    callback(json);
  }).on('timeout', () => {
    request.destroy();
  });
}

/**
 * 将最老版本changelog中函数有变化的数据作为初始数据，去跟其他版本的changelog数据进行合并。
 * @param {Array} orderVersionArr 
 * @param {*} url 
 * @returns 
 */
async function formatExcelData(orderVersionArr, url) {
  let allMergeData = [];
  const versionUrl = getLink(url, orderVersionArr[0]);
  let oldestVersionData = [];
  await downloadFiles(versionUrl).then(versionData => {
    oldestVersionData = JSON.parse(versionData);
  });

  if (orderVersionArr.length < 2) {
    return allMergeData;
  }

  oldestVersionData.forEach(oldestData => {
    if (oldestData.newApi !== oldestData.oldApi) {
      oldestData.version = orderVersionArr[0];
      allMergeData.push(oldestData);
    }
  })
  await mergeAllData(orderVersionArr, url, allMergeData);
  return allMergeData;
}

/**
 * 将初始数据挨个跟下一个版本的changelog数据进行比较合并。
 * 
 * @param {Array} orderVersionArr 
 * @param {*} url 
 * @param {Array} allMergeData 
 */
async function mergeAllData(orderVersionArr, url, allMergeData) {
  let index = 1;
  while (index < orderVersionArr.length) {
    const versionUrl = getLink(url, orderVersionArr[index]);
    let newVersionData = [];
    await downloadFiles(versionUrl).then(versionData => {
      newVersionData = JSON.parse(versionData);
    });
    mergeTwoVersionData(allMergeData, newVersionData, orderVersionArr[index]);
    index++;
  }

}

/**
 * 跟下一个版本的数据进行合并
 * 
 * @param {*} allMergeData 
 * @param {*} newVersionData 
 */
function mergeTwoVersionData(allMergeData, newVersionData, currentVersion) {
  let indexListSet = new Set();
  for (let i = 0; i < allMergeData.length; i++) {
    const data = allMergeData[i];
    for (let j = 0; j < newVersionData.length; j++) {
      if (!indexListSet.has(j) && data.newDtsName === newVersionData[j].oldDtsName &&
        compareApiText(data.newApi, newVersionData[j].oldApi,) && data.newApi !== data.oldApi) {
        allMergeData[i].newApi = newVersionData[j].newApi;
        allMergeData[i].version = currentVersion;
        indexListSet.add(j);
      }
    }
  }

  newVersionData.forEach((data, index) => {
    if (!indexListSet.has(index)) {
      data.version = currentVersion;
      allMergeData.push(data);
    }
  })
}

/**
 * 比较旧版本的newApi和新版本的oldApi,判断是否一样
 * 
 * @param {String} oldApiText 
 * @param {String} newApiText 
 * @returns 
 */
function compareApiText(oldApiText, newApiText) {
  if (formatApi(oldApiText) === formatApi(newApiText) && formatApi(oldApiText) !== undefined) {
    return true;
  }
  return false;
}

/**
 * 格式化API定义内容，排除空格，换行，符号对比较API的影响。
 * 
 * @param {String} apiText 
 * @returns 
 */
function formatApi(apiText) {
  if (!apiText) {
    return;
  }
  return apiText.replace(/\r|\n|\s+|\,|\;/g, '');
}

/**
 * 将数组形式的changelog数据转换成Map
 * 
 * @param {Array} dataInChangelogs 
 * @returns 
 */
function covertToMap(dataInChangelogs) {
  let dataMap = new Map();
  dataInChangelogs.forEach(data => {
    const dataSignature = getSignature(data.newDtsName, data.oldApi);
    if (!dataMap.get(dataSignature)) {
      dataMap.set(dataSignature, [data]);
    } else {
      const dataArr = dataMap.get(dataSignature);
      dataArr.push(data);
      dataMap.set(dataSignature, dataArr);
    }
  })
  return dataMap;
}

function getSignature(dtsName, apiText) {
  const handledDtsName = handleDtsName(dtsName).dtsPath;
  return `${handledDtsName}#${formatApi(apiText)}`;
}

function addChangelogLink(changelogsData, diffsData, diffs) {
  diffsData.forEach(diffData => {
    changelogsData.forEach(changelogData => {
      diffData.changelogs.add({
        version: changelogData.version,
        url: changelogData.changelog
      });

      if (changelogData.oldType !== changelogData.newType) {
        diffData.status = StatusMessages[StatusCode.CLASS_CHANGES];
        diffData.StatusCode = StatusCode.CLASS_CHANGES;
        diffData.oldMessage = changelogData.oldApi;
        diffData.newMessage = changelogData.newApi;
      }

      if (changelogData.oldDtsName !== changelogData.newDtsName) {
        diffData.status = StatusMessages[StatusCode.DTS_CHANGED];
        diffData.StatusCode = StatusCode.DTS_CHANGED;
        diffData.oldMessage = changelogData.oldDtsName;
        diffData.newMessage = changelogData.newDtsName;
      }

      if (changelogData.newApi === changelogData.oldApi || changelogData.newApi === 'N/A') {
        return;
      }

      if (diffData.statusCode === StatusCode.DELETE) {
        const newApiSignature = getSignature(changelogData.newDtsName, changelogData.newApi);
        diffs.delete(newApiSignature);
        diffData.status = StatusMessages[StatusCode.FUNCTION_CHANGES];
        diffData.StatusCode = StatusCode.FUNCTION_CHANGES;
        diffData.oldMessage = changelogData.oldApi;
        diffData.newMessage = changelogData.newApi;
      } else if (diffData.statusCode === StatusCode.DELETE_CLASS) {
        diffData.status = StatusMessages[StatusCode.CLASS_CHANGES];
        diffData.StatusCode = StatusCode.CLASS_CHANGES;
        diffData.oldMessage = changelogData.oldApi;
        diffData.newMessage = changelogData.newApi;
      }
    })
  })
  return diffsData;
}

function mergeDiffsAndChangelogs(changelogs, diffs) {
  changelogs.forEach((data, dataSignature) => {
    const diffsData = diffs.get(dataSignature);
    if (diffsData) {
      diffs.set(dataSignature, addChangelogLink(data, diffsData, diffs));
    } else {
      data.forEach(changelogData => {
        const newApiSignature = getSignature(changelogData.newDtsName, changelogData.newApi);
        const diffsData = diffs.get(newApiSignature);
        if (!diffsData) {
          return;
        }
        diffsData.forEach(diffData => {
          diffData.changelog.add(changelogData.changelog);
        })
        changelogs.delete(dataSignature);
      });
    }
  })

  changelogs.forEach((changelogData, signature) => {
    changelogData.forEach(changelogApi => {
      if (diffs.get(signature)) {
        diffs.get(signature).push(formatChangelogApi(changelogApi));
      } else {
        diffs.set(signature, [formatChangelogApi(changelogApi)]);
      }
    })
  })

  return diffs;
}

function formatChangelogApi(changelogApi) {
  const filePathObj = handleDtsName(changelogApi.newDtsName);
  return {
    packageName: '',
    className: changelogApi.newType,
    rawText: changelogApi.newApi,
    dtsName: filePathObj.dtsPath,
    hint: "",
    changelogs: [{
      version: changelogApi.version,
      url: changelogApi.changelog
    }],
    statusCode: StatusCode.CHANGELOG,
    status: StatusMessages[StatusCode.CHANGELOG],
    oldMessage: changelogApi.oldApi,
    newMessage: changelogApi.newApi
  }
}

function handleDtsName(dtsName) {
  let packageName = dtsName;
  let dtsPath = dtsName;
  if (dtsName.indexOf('api/@internal/component/ets') > -1) {
    packageName === 'ArkUI';
    dtsPath.replace('api/@internal/component/ets', 'component')
  } else if (dtsName.indexOf('api/@internal/ets') > -1) {
    packageName = dtsName.replace('api/@internal/ets', 'api/@internal/full');
    dtsPath = packageName;
  }
  return { packageName, dtsPath };
}


async function mergeDiffWithChangeLog(diffs, oldVersion, newVersion) {
  const allVersionUrl = 'https://gitee.com/an-unsettled-state-of-mind/interface_sdk-js_3/raw/Diffs/build-tools/api_diff/changelogs/allVersion.json';
  const dataInChangelogs = await mergeDataBetweenVersion(oldVersion, newVersion, allVersionUrl);
  const dataMapInChangelogs = covertToMap(dataInChangelogs);
  return mergeDiffsAndChangelogs(dataMapInChangelogs, diffs);
}

exports.applyChangeLogs = mergeDiffWithChangeLog;