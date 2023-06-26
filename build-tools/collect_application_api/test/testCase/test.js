const { expect } = require('chai');
const path = require('path');
const fs = require('fs');
const { ApiCollector } = require('../../src/api_collector')

describe('collectApi', function () {
    // 传参获得
    const sdkPath = process.argv[process.argv.length - 1];
    const appDir = path.join(__dirname, '..', '/ut/');
    const outputDir = path.join(__dirname, '..', '/output');
    const expectFileDir = path.join(__dirname, '..', '/expect/');
    const appProjectNames = fs.readdirSync(appDir);
    appProjectNames.forEach(projectName => {
        let appProjectPath = path.join(appDir, projectName);
        let expectFilePath = path.join(expectFileDir, `${projectName}.json`);
        it('testFile# ' + path.basename(appProjectPath), function () {
            const expectFileContent = fs.readFileSync(expectFilePath, 'utf-8').replace(/\n|\r|\s/g, '');
            const argv = {
                "app": appProjectPath,
                "sdk": sdkPath,
                "output": outputDir,
                "format": 'json'
            };
            const collector = new ApiCollector(argv);
            collector.start();
            const outputFileName = fs.readdirSync(outputDir);
            const outputFilePath = path.join(outputDir, outputFileName[0]);
            const outputFileContent = fs.readFileSync(outputFilePath, 'utf-8').replace(/\n|\r|\s/g, '');
            expect(outputFileContent).to.be.equal(expectFileContent);
        })
    })
})