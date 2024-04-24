import * as vscode from "vscode";

interface SearchResult {
  lineNumber: number;
  word: string;
}

export function Brace(editor: vscode.TextEditor) {
  const openBraces = "{";
  const closedBraces = "}";
  if (!openBraces && !closedBraces) {
    return;
  }

  const document = editor.document;
  const searchOpenBrace = new RegExp(`${openBraces}`, "gi");
  const searchClosedBrace = new RegExp(`${closedBraces}`, "gi");

  let results: SearchResult[] = []; // Define the type of 'results' array

  for (let i = 0; i < document.lineCount; i++) {
    const line = document.lineAt(i);
    const openBraceMatches = line.text.match(searchOpenBrace);
    const closedBraceMatches = line.text.match(searchClosedBrace);
    if (openBraceMatches) {
      openBraceMatches.forEach((match) => {
        results.push({ lineNumber: i + 1, word: match });
      });
    }

    if (closedBraceMatches) {
      closedBraceMatches.forEach((match) => {
        results.push({ lineNumber: i + 1, word: match });
      });
    }
  }

  if (results.length === 0) {
    vscode.window.showInformationMessage(
      `No occurrences of braces found`
    );
  }
  else if (results.length % 2 === 0) {
    vscode.window.showInformationMessage(
      `There is an even number of braces, this suggests you have not missed any braces`
    );
  } else {
    const finalText =
      " There is an uneven number of braces(" +
      results.length +
      ") in the code, this suggests you are missing one"; // Combine search results and message

    vscode.workspace
      .openTextDocument({ content: finalText, language: "plaintext" })
      .then((doc) => {
        vscode.window.showTextDocument(doc, { preview: false });
      });
  }
}
