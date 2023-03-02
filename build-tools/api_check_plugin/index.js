const checkLegality = require('./src/check_legality');
exports.checkJSDoc = function(node, sourceFile, permissionConfigPath) {
  return checkLegality.checkJsDocOfCurrentNode(node, sourceFile, permissionConfigPath);
};