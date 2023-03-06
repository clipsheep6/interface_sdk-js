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

describe('test', function() {
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