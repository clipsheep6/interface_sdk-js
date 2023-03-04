const checkLegality = require('./src/check_legality');
exports.checkJSDoc = function(node, sourceFile) {
  return checkLegality.checkJsDocOfCurrentNode(node, sourceFile, undefined);
};