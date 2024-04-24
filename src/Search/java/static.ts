import * as vscode from "vscode";
import { Brace } from "../Braces";
import { Brackets } from "../Brackets";



interface SearchResult {
  lineNumber: number;
  word: string;
}

export function Static(editor: vscode.TextEditor) {
  const searchTerm = "static";
  if (!searchTerm) {
    return;
  }

  const document = editor.document;
  const searchRegex = new RegExp(`\\b${searchTerm}\\b`, "gi");

  let results: SearchResult[] = []; // Define the type of 'results' array

  for (let i = 0; i < document.lineCount; i++) {
    const line = document.lineAt(i);
    const matches = line.text.match(searchRegex);
    if (matches) {
      matches.forEach((match) => {
        results.push({ lineNumber: i + 1, word: match });
      });
    }
  }

  if (results.length === 0) {
    vscode.window.showInformationMessage(
      `No occurrences of '${searchTerm}' found`
    );
  } else if (results.length === 1) {
    // Display results in a new text document
    const resultText = results
      .map((result) => `${result.lineNumber}: '${result.word}'`)
      .join("\n");

    const messageText = "You have used the word static once. This makes sense";
    const finalText = resultText + "\n" + messageText; // Combine search results and message

    vscode.workspace
      .openTextDocument({ content: finalText, language: "plaintext" })
      .then((doc) => {
        vscode.window.showTextDocument(doc, { preview: false });
        Brace(editor);
        Brackets(editor);
      });
  } else {
    // Display results in a new text document
    const resultText = results
      .map((result) => `${result.lineNumber}: '${result.word}'`)
      .join("\n");

    const messageText =
      "You have used the word static multiple times in the code. Make sure you have used it appropriately.";
    const finalText = resultText + "\n" + messageText; // Combine search results and message

    vscode.workspace
      .openTextDocument({ content: finalText, language: "plaintext" })
      .then((doc) => {
        vscode.window.showTextDocument(doc, { preview: false });
        Brace(editor);
        Brackets(editor);
      });
  }
}
