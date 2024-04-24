import * as vscode from "vscode";

interface SearchResult {
  lineNumber: number;
  word: string;
}

export function Brackets(editor: vscode.TextEditor) {
  const openBrackets = "\\(";
  const closedBrackets = "\\)";
  if (!openBrackets && !closedBrackets) {
    return;
  }

  const document = editor.document;
  const searchOpenBrackets = new RegExp(`${openBrackets}`, "gi");
  const searchClosedBrackets = new RegExp(`${closedBrackets}`, "gi");


  let results: SearchResult[] = []; // Define the type of 'results' array

  for (let i = 0; i < document.lineCount; i++) {
    const line = document.lineAt(i);
    const openBracketsMatches = line.text.match(searchOpenBrackets);
    const closedBracketsMatches = line.text.match(searchClosedBrackets);

    if (openBracketsMatches) {
      openBracketsMatches.forEach((match) => {
        results.push({ lineNumber: i + 1, word: match });
        console.log("Found " + match);
      });
    }

    if (closedBracketsMatches) {
      closedBracketsMatches.forEach((match) => {
        results.push({ lineNumber: i + 1, word: match });
        console.log("Found " + match);
      });
    }
  }

  if (results.length === 0) {
    vscode.window.showInformationMessage(
      `No occurrences of brackets found`
    );
  }
  else if (results.length % 2 === 0) {
    vscode.window.showInformationMessage(
      `There is an even number of brackets, this suggests you have not missed any brackets`
    );
  } else {
    const finalText =
      " There is an uneven number of brackets(" +
      results.length +
      ") in the code, this suggests you are missing one"; // Combine search results and message

    vscode.workspace
      .openTextDocument({ content: finalText, language: "plaintext" })
      .then((doc) => {
        vscode.window.showTextDocument(doc, { preview: false });
      });
  }
}
