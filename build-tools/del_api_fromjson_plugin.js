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
const path = require('path');
const fs = require('fs');
const ts = require('typescript');

let sourceFile = null;
let lastNoteStr = '';
let lastNodeName = '';

let separatorStr = '&&MMDD%';
let constSet = new Set();
let interfaceSet = new Set();
let methodMap = new Map();
let currentFileName = '';
let regreplace = new RegExp("/", "g");

function readJSON() {
	const content = fs.readFileSync("deleted_api.json");
	var obj = JSON.parse(content);
	for (var i = 0 ; i < obj.length ; i++)
	{
		var filePath = obj[i]["path"];
		if (obj[i]["classname"] == obj[i]["methodname"]) {
			var searchStr = filePath + separatorStr + obj[i]["classname"];
			interfaceSet.add(searchStr);
			continue;
		}
		if (obj[i]["methodname2"].substring(0, 9) == 'function '){
			var strs = obj[i]["methodname"].split('_');
			var key = filePath + separatorStr + strs[0];
			var value = obj[i]["methodname2"];
			if (methodMap.has(key)) {
				var keyv = methodMap.get(key);
				keyv = keyv + value;
				methodMap.set(key, keyv);
			} else {
				methodMap.set(key, value);
			}
			continue;
		}
		if (obj[i]["api type"] == "Constant") {
			var searchStr = filePath + separatorStr + obj[i]["methodname2"];
			constSet.add(searchStr);
			continue;
		}
		if (obj[i]["methodname2"].includes('(type:')) {
			var strsTypeLeft = obj[i]["methodname2"].split('(type:');
			var strs = obj[i]["methodname"].split('_');
			if (strsTypeLeft[0] == strs[0]) {
				var key = filePath + separatorStr + obj[i]["classname"] + separatorStr + strs[0];
				var value = obj[i]["methodname2"];
				if (methodMap.has(key)) {
					var keyv = methodMap.get(key);
					keyv = keyv + value;
					methodMap.set(key, keyv);
				} else {
					methodMap.set(key, value);
				}
			}
			continue;
		}
		if (obj[i]["methodname2"].includes('(event:')) {
			var strsTypeLeft = obj[i]["methodname2"].split('(event:');
			var strs = obj[i]["methodname"].split('_');
			if (strsTypeLeft[0] == strs[0]) {
				var key = filePath + separatorStr + obj[i]["classname"] + separatorStr + strs[0];
				var value = obj[i]["methodname2"];
				if (methodMap.has(key)) {
					var keyv = methodMap.get(key);
					keyv = keyv + value;
					methodMap.set(key, keyv);
				} else {
					methodMap.set(key, value);
				}
			}
		} else {
			var key = filePath + separatorStr + obj[i]["classname"] + separatorStr + obj[i]["methodname"];
			var value = obj[i]["methodname2"];
			if (methodMap.has(key)) {
				var keyv = methodMap.get(key);
				keyv = keyv + value;
				methodMap.set(key, keyv);
			} else {
				methodMap.set(key, value);
			}
		}
	}
	collectDeclaration(apiSourcePath);
}

function collectDeclaration(url) {
  try {
    const utPath = path.resolve(__dirname, url);
    const utFiles = [];
    readFile(utPath, utFiles);
    tsTransform(utFiles, deleteSystemApi);
  } catch (error) {
    console.error("DELETE_SYSTEM_PLUGIN ERROR: ", error)
  }
}

function tsTransform(utFiles, callback) {
  utFiles.forEach((url) => {
	var relative_path = path.relative(apiSourcePath, url);
	relative_path = "\\api\\" + relative_path;
	relative_path = relative_path.replace(regreplace, '\\');
	currentFileName = relative_path;
  
    if (/\.json/.test(url) || /index\-full\.d\.ts/.test(url) || /common\.d\.ts/.test(url)) {
      const content = fs.readFileSync(url, 'utf-8');
      writeFile(url, content);
    } else if (/\.d\.ts/.test(url)) {
      const content = fs.readFileSync(url, 'utf-8');
      const fileName = path.basename(url).replace(/.d.ts/g, '.ts');
      ts.transpileModule(content, {
        compilerOptions: {
          "target": ts.ScriptTarget.ES2017
        },
        fileName: fileName,
        transformers: { before: [callback(url)] }
      });
    }
  });
}

function readFile(dir, utFiles) {
  try {
    const files = fs.readdirSync(dir);
    files.forEach((element) => {
      const filePath = path.join(dir, element);
      const status = fs.statSync(filePath);
      if (status.isDirectory()) {
        readFile(filePath, utFiles);
      } else {
        utFiles.push(filePath);
      }
    })
  } catch (e) {
    console.log('ETS ERROR: ' + e);
  }
}

function writeFile(url, data, option) {
  if (fs.existsSync(outputPath)) {
    fs.rmdirSync(outputPath, { recursive: true });
  }
  const newFilePath = path.resolve(outputPath, path.relative(__dirname, url));
  fs.mkdir(path.relative(__dirname, path.dirname(newFilePath)), { recursive: true }, (err) => {
    if (err) {
      console.log(`ERROR FOR CREATE PATH ${err}`);
    } else {
      fs.writeFile(newFilePath, data, option, (err) => {
        if (err) {
          console.log(`ERROR FOR CREATE FILE ${err}`);
        }
      })
    }
  })
}

const globalModules = new Set(['GlobalResource', 'StateManagement', 'SpecialEvent']);

function formatImportDeclaration(url) {
  return (context) => {
    const allIdentifierSet = new Set([]);
    let copyrightMessage = '';
    let isCopyrightDeleted = false;
    return (node) => {
      sourceFile = node;
      collectAllIdentifier(node);
      node = formatAllNodes(node);
      if (!isEmptyFile(node)) {
        const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
        let result = printer.printNode(ts.EmitHint.Unspecified, node, sourceFile);
        if (isCopyrightDeleted) {
          result = copyrightMessage + '\n' + result;
        }
        writeFile(url, result);
      }
      return node;
    }
    function collectAllIdentifier(node) {
      if (ts.isSourceFile(node) && node.statements) {
        node.statements.forEach(stat => {
          if (!ts.isImportDeclaration(stat)) {
            ts.visitEachChild(stat, collectAllNodes, context);
          }
        });
      }
    }
    function collectAllNodes(node) {
      if (ts.isIdentifier(node)) {
        allIdentifierSet.add(node.escapedText.toString());
      }
      return ts.visitEachChild(node, collectAllNodes, context);
    }
    function formatAllNodes(node) {
      if (ts.isSourceFile(node) && node.statements) {
        const newStatements = [];
        node.statements.forEach(statement => {
          if (ts.isImportDeclaration(statement)) {
            const clauseSet = new Set([]);
            if (statement.importClause && ts.isImportClause(statement.importClause)) {
              const clauseNode = statement.importClause;
              if (!clauseNode.namedBindings && clauseNode.name && ts.isIdentifier(clauseNode.name)) {
                clauseSet.add(clauseNode.name.escapedText.toString());
              } else if (clauseNode.namedBindings && clauseNode.namedBindings.name &&
                ts.isIdentifier(clauseNode.namedBindings.name)) {
                clauseSet.add(clauseNode.namedBindings.name.escapedText.toString());
              } else if (clauseNode.namedBindings && clauseNode.namedBindings.elements) {
                clauseNode.namedBindings.elements.forEach(ele => {
                  if (ele.name && ts.isIdentifier(ele.name)) {
                    clauseSet.add(ele.name.escapedText.toString());
                  }
                });
              }
            }
            const importSpecifier = statement.moduleSpecifier.getText().replace(/[\'\"]/g, '');
            const importSpecifierRealPath = path.resolve(url, `../${importSpecifier}.d.ts`);
            if ((fs.existsSync(importSpecifierRealPath) || globalModules.has(importSpecifier)) && clauseSet.size > 0) {
              const clasueCheckList = [];
              let exsitClauseSet = new Set([]);
              for (const clause of clauseSet) {
                if (allIdentifierSet.has(clause)) {
                  exsitClauseSet.add(clause);
                  clasueCheckList.push('exist');
                } else {
                  clasueCheckList.push('non-exist');
                }
              }
              let hasExsitStatus = false;
              let hasNonExsitStatus = false;
              clasueCheckList.forEach(ele => {
                if (ele === 'exist') {
                  hasExsitStatus = true;
                } else {
                  hasNonExsitStatus = true;
                }
              });
              if (hasExsitStatus) {
                if (hasNonExsitStatus) {
                  const newSpecifiers = [];
                  statement.importClause.namedBindings.elements.forEach(element => {
                    if (exsitClauseSet.has(element.name.escapedText.toString())) {
                      newSpecifiers.push(element);
                    }
                  });
                  statement.importClause.namedBindings = ts.factory.updateNamedImports(
                    statement.importClause.namedBindings, newSpecifiers);
                }
                newStatements.push(statement);
              } else if (hasCopyright(statement)) {
                copyrightMessage = node.getFullText().replace(node.getText(), '');
                isCopyrightDeleted = true;
              }
            } else if (hasCopyright(statement)) {
              copyrightMessage = node.getFullText().replace(node.getText(), '');
              isCopyrightDeleted = true;
            }
          } else {
            newStatements.push(statement);
          }
        });
        node = ts.factory.updateSourceFile(node, newStatements);
      }
      return node;
    }
    function hasCopyright(node) {
      return /http\:\/\/www\.apache\.org\/licenses\/LICENSE\-2\.0/g.test(node.getFullText().replace(node.getText(), ''));
    }
  }
}

function deleteSystemApi(url) {
  return (context) => {
    return (node) => {
      sourceFile = node;
      node = processSourceFile(node);
      node = ts.visitEachChild(node, processAllNodes, context);
      if (!isEmptyFile(node)) {
        const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
        const result = printer.printNode(ts.EmitHint.Unspecified, node, sourceFile);
        const fileName = path.basename(url).replace(/.d.ts/g, '.ts');
        ts.transpileModule(result, {
          compilerOptions: {
            "target": ts.ScriptTarget.ES2017
          },
          fileName: fileName,
          transformers: { before: [formatImportDeclaration(url)] }
        });
      }
      return node;
    }
    function processAllNodes(node) {
      if (ts.isInterfaceDeclaration(node)) {
        const newMembers = [];
        node.members.forEach(member => {
          if (!isSystemapi(member)) {
            newMembers.push(member);
          }
        });
        node = ts.factory.updateInterfaceDeclaration(node, node.modifiers, node.name,
          node.typeParameters, node.heritageClauses, newMembers);
      } else if (ts.isClassDeclaration(node)) {
        const newMembers = [];
        node.members.forEach(member => {
          if (!isSystemapi(member)) {
            newMembers.push(member);
          }
        });
        node = ts.factory.updateClassDeclaration(node, node.modifiers, node.name,
          node.typeParameters, node.heritageClauses, newMembers);
      } else if (ts.isModuleDeclaration(node) && node.body && ts.isModuleBlock(node.body)) {
        const newStatements = [];
        node.body.statements.forEach(statement => {
          if (!isSystemapi(statement)) {
            newStatements.push(statement);
          }
        });
        const newModuleBody = ts.factory.updateModuleBlock(node.body, newStatements);
        node = ts.factory.updateModuleDeclaration(node, node.modifiers, node.name, newModuleBody);
      } else if (ts.isEnumDeclaration(node)) {
        const newMembers = [];
        node.members.forEach(member => {
          if (!isSystemapi(member)) {
            newMembers.push(member);
          }
        });
        node = ts.factory.updateEnumDeclaration(node, node.modifiers, node.name, newMembers);
      }
      return ts.visitEachChild(node, processAllNodes, context);
    }
    function processSourceFile(node) {
      const stateNamesSet = new Set([]);
      const newStatements = [];
      const newStatementsWithoutExport = [];
      node.statements.forEach(statement => {
        if (!isSystemapi(statement)) {
          newStatements.push(statement);
        } else if (ts.isModuleDeclaration(statement) && statement.name && ts.isIdentifier(statement.name)) {
          stateNamesSet.add(statement.name.escapedText.toString());
        }
      });
      newStatements.forEach(statement => {
        if (!(ts.isExportAssignment(statement) && statement.expression && ts.isIdentifier(statement.expression) &&
          stateNamesSet.has(statement.expression.escapedText.toString()))) {
          newStatementsWithoutExport.push(statement);
        }
      });
      return ts.factory.updateSourceFile(node, newStatementsWithoutExport, node.isDeclarationFile,
        node.referencedFiles);
    }
  }
}
exports.deleteSystemApi = deleteSystemApi;

function isSystemapi(node) {
  const notesContent = node.getFullText().replace(node.getText(), "").replace(/[\s]/g, "");
  const notesArr = notesContent.split(/\/\*\*/);
  const notesStr = notesArr[notesArr.length - 1];
  var isSysApi = false;
  if (notesStr.length !== 0) {
    if (ts.isFunctionDeclaration(node) || ts.isMethodSignature(node) || ts.isMethodDeclaration(node)) {
      lastNodeName = node.name && node.name.escapedText ? node.name.escapedText.toString() : "";
      lastNoteStr = notesStr;
    }
    isSysApi = /\@systemapi/g.test(notesStr);
  } else {
    if ((ts.isFunctionDeclaration(node) || ts.isMethodSignature(node) || ts.isMethodDeclaration(node)) && node.name &&
      node.name.escapedText.toString() !== "" && node.name.escapedText.toString() === lastNodeName) {
      isSysApi = /\@systemapi/g.test(lastNoteStr);
    }
  }
  
  if (!isSysApi) {
	  return isWithInJson(node);
  }
  
  return isSysApi;
}

function isWithInJson(node) {
	if (ts.isFunctionDeclaration(node)) {
		var methodStr = currentFileName + separatorStr + node.name.escapedText.toString();
		var strs = node.getFullText().split('\n');
		var funcStr = strs[strs.length -1];
		funcStr = funcStr.trim();
		if (funcStr.substring(0, 7) == "export ") {
			funcStr = funcStr.substr(7);
		}
		if (methodMap.has(methodStr)) {
			if (methodMap.get(methodStr).includes(funcStr)) {
				return true;
			}
			return false;
		}
		return false;
	}
	if (ts.isInterfaceDeclaration(node) | ts.isClassDeclaration(node) | ts.isEnumDeclaration(node)) {
		var interfaceName = currentFileName + separatorStr + node.name.escapedText.toString();
		if (interfaceSet.has(interfaceName)) {
			return true;
		}
		return false;
	}
	if (ts.isMethodDeclaration(node) | ts.isMethodSignature(node)) {
		if (node.parent.name.escapedText == undefined || node.name.escapedText == undefined) {
			return false;
		}
		var methodStr = currentFileName + separatorStr + node.parent.name.escapedText.toString() + separatorStr + node.name.escapedText.toString();
		var strs = node.getFullText().split('\n');
		var funcStr = strs[strs.length -1];
		funcStr = funcStr.trim();
		if (funcStr.substring(0, 7) == "export ") {
			funcStr = funcStr.substr(7);
		}
		if (methodMap.has(methodStr)) {
			if (methodMap.get(methodStr).includes(funcStr)) {
				return true;
			}
			return false;
		}
		return false;
	}
	if (ts.isEnumMember(node)) {
		var enumMember = currentFileName + separatorStr + node.parent.name.escapedText.toString() + separatorStr + node.name.escapedText.toString();
		if (methodMap.has(enumMember)) {
			return true;
		}
		return false;
	}
	if (ts.isPropertySignature(node)) {
		var property = currentFileName + separatorStr + node.parent.name.escapedText.toString() + separatorStr + node.name.escapedText.toString();
		if (methodMap.has(property)) {
			return true;
		}
		return false;
	}
	if (ts.isPropertyDeclaration(node)) {
		var property = currentFileName + separatorStr + node.parent.name.escapedText.toString() + separatorStr + node.name.escapedText.toString();
		if (methodMap.has(property)) {
			return true;
		}
		return false;
	}
	
	if (ts.isConstructorDeclaration(node)) {
		var methodStr = currentFileName + separatorStr + node.parent.name.escapedText.toString() + separatorStr + 'constructor';
		var strs = node.getFullText().split('\n');
		var funcStr = strs[strs.length -1];
		funcStr = funcStr.trim();
		if (methodMap.has(methodStr)) {
			if (methodMap.get(methodStr).includes(funcStr)) {
				return true;
			}
			return false;
		}
		return false;
	}
	if (ts.isVariableStatement(node)) {
		var strs = node.getFullText().split('\n');
		var funcStr = strs[strs.length -1];
		funcStr = funcStr.trim();
		var constKeystr = currentFileName + separatorStr + funcStr;
		if (constSet.has(constKeystr)) {
			return true;
		}
		return false;
	}
	
	return false;
}

function isEmptyFile(node) {
  if (ts.isSourceFile(node) && node.statements) {
    for (let i = 0; i < node.statements.length; i++) {
      const statement = node.statements[i];
      if (!ts.isImportDeclaration(statement)) {
        return false
      }
    }
  }
  return true;
}

const apiSourcePath = '../api';
const outputPath = path.resolve(__dirname, 'output');
readJSON();

