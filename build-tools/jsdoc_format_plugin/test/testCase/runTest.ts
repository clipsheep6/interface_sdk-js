import { assert, expect } from "chai";
import path from 'path';
import fs from 'fs';
import { JSDOcModifierTestEntry } from '../../src/core/entry';

function testJSDoc(testFilePath: string, expectFilePath: string, outputFilePath: string) {
  const testEntry = new JSDOcModifierTestEntry();
  testEntry.runTest(testFilePath, outputFilePath);
  const outputFileContent: string = fs.readFileSync(outputFilePath, 'utf-8').replace(/\r\n/g, '\n');
  const expectFileContent: string = fs.readFileSync(expectFilePath, 'utf-8').replace(/\r\n/g, '\n');
  expect(outputFileContent).eql(expectFileContent);
}

describe('test jsdoc formatter', function() {
  const testFileDir = path.join(__dirname, '..', '/ut/');
  const outFileDir = path.join(__dirname, '..', '/output/');
  const expectFileDir = path.join(__dirname, '..', '/expect/');
  const testFileNames = fs.readdirSync(testFileDir);
  testFileNames.forEach((testFileName) => {
    const testFilePath = path.join(testFileDir, testFileName);
    const outputFilePath = path.join(outFileDir, testFileName);
    const expectFilePath = path.join(expectFileDir, testFileName);
    it(testFilePath, function() {
      testJSDoc(testFilePath, expectFilePath, outputFilePath);
    });
  })
});

describe('testOnly', function () {
  const testFileDir = path.join(__dirname, '..', '/ut/');
  const outFileDir = path.join(__dirname, '..', '/output/');
  const expectFileDir = path.join(__dirname, '..', '/expect/');
  assert(process.argv.length >= 7, "请输入测试用例名称，例如 npm run testOnly 1.d.ts 2.d.ts");
  const testFileNames = process.argv.slice(6);
  testFileNames.forEach((testFileName) => {
    const testFilePath = path.join(testFileDir, testFileName);
    const outputFilePath = path.join(outFileDir, testFileName);
    const expectFilePath = path.join(expectFileDir, testFileName);
    it(testFilePath, function () {
      testJSDoc(testFilePath, expectFilePath, outputFilePath);
    });
  })
});