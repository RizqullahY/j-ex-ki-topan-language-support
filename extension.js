"use strict";
const vscode = require("vscode");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  vscode.languages.registerDocumentSemanticTokensProvider(
    { language: "topan" },
    new TopanSemanticProvider(),
    legend
  );
}

const legend = new vscode.SemanticTokensLegend([
  "variable",
  "function",
  "keyword",
  "string",
]);

class TopanSemanticProvider {
  provideDocumentSemanticTokens(document) {
    const tokensBuilder = new vscode.SemanticTokensBuilder(legend);
    return tokensBuilder.build();
  }
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
