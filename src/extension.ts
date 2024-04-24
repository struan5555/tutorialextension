import * as path from "path";
import * as vscode from "vscode";
//html Completion
import { htmlComplete } from "./CompletionFns/html/Html";
import { cssLink } from "./CompletionFns/html/CssLink";
import { jsLink } from "./CompletionFns/html/JsLink";
import { listComplete } from "./CompletionFns/html/List";
import { bootstrapComplete } from "./CompletionFns/html/Bootstrap";
//java Completion
import { javaTemplate } from "./CompletionFns/java/java";
import { javaInput } from "./CompletionFns/java/input";
import { javaClass } from "./CompletionFns/java/class";
import { javaArray } from "./CompletionFns/java/array";
import { javaMethod } from "./CompletionFns/java/method";
//python completion
import { PythonTemplate } from "./CompletionFns/python/python";
import { PythonInput } from "./CompletionFns/python/input";
import { PythonClass } from "./CompletionFns/python/class";
import { PythonArray } from "./CompletionFns/python/array";
import { PythonFiles } from "./CompletionFns/python/files";
//html snippets
import { htmlSnippet } from "./SnippetFns/Html";
import { BoostrapSnippet } from "./SnippetFns/Bootstrap";
//java snippets
import { javaSnippet } from "./SnippetFns/java";
//python snippets
import { pythonSnippet } from "./SnippetFns/python";
//webviews
import { HomeContent } from "./WebviewTabs/HomeFn";
import { GithubContent } from "./WebviewTabs/GithubFn";
import { JavaContent } from "./WebviewTabs/JavaFn";
import { CSharpContent } from "./WebviewTabs/CSharpfn";
import { PythonContent } from "./WebviewTabs/Pythonfn";
import { HTMLContent } from "./WebviewTabs/HTMLFn";
//search terms
import { Static } from "./Search/java/static";
import { Brackets } from "./Search/Brackets";
import { Brace } from "./Search/Braces";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("tutorialextension.begin", () => {
      const panel = vscode.window.createWebviewPanel(
        "Tutorial Webview",
        "Tutorial",
        vscode.ViewColumn.One,
        {
          enableScripts: true,
        }
      );

      //URI for Bootstrap CSS
      const onDiskCSS = vscode.Uri.joinPath(
        context.extensionUri,
        "media",
        "bootstrap.css"
      );

      const onDiskaccountsIMG = vscode.Uri.joinPath(
        context.extensionUri,
        "media",
        "accounts.png"
      );

      // And get the special URI to use with the webview
      const CSS_Source = panel.webview.asWebviewUri(onDiskCSS);
      const AccImgSrc = panel.webview.asWebviewUri(onDiskaccountsIMG);

      panel.webview.html = HomeContent(CSS_Source);

      panel.webview.onDidReceiveMessage(
        (message) => {
          switch (message.command) {
            case "Home page":
              console.log("home receive");
              panel.webview.html = HomeContent(CSS_Source);
              return;

            case "Github page":
              console.log("github receive");
              panel.webview.html = GithubContent(CSS_Source, AccImgSrc);
              return;

            case "Java page":
              console.log("java receive");
              panel.webview.html = JavaContent(CSS_Source);
              return;

            case "C# page":
              console.log("c# receive");
              panel.webview.html = CSharpContent(CSS_Source);
              return;

            case "Python page":
              console.log("python receive");
              panel.webview.html = PythonContent(CSS_Source);
              return;

            case "HTML page":
                console.log("html receive");
                panel.webview.html = HTMLContent(CSS_Source);
                return;
          }
        },
        undefined,
        context.subscriptions
      );
    }),

    vscode.commands.registerCommand("tutorialextension.insertSnippet", () => {
      // Get the active text editor
      const editor = vscode.window.activeTextEditor;

      let languages: string[] = ["html", "java", "python"];
      let message: string = "This command is only available in: ";
      for (let i = 0; i < languages.length; i++) {
        message += languages[i];
        if (i < languages.length - 1) {
          message += ", ";
        }
      }

      if (editor) {
        switch (editor.document.languageId) {
          case "html":
            editor.insertSnippet(new vscode.SnippetString(htmlSnippet()));
            break;
          case "java":
            editor.insertSnippet(new vscode.SnippetString(javaSnippet()));
            break;
          case "python":
            editor.insertSnippet(new vscode.SnippetString(pythonSnippet()));
            break;
          default:
            vscode.window.showErrorMessage(message);
        }
      }
    }),

    vscode.commands.registerCommand("tutorialextension.insertBootstrap", () => {
      // Get the active text editor
      const editor = vscode.window.activeTextEditor;

      let message: string = "This command is only available in: html";

      if (editor) {
        switch (editor.document.languageId) {
          case "html":
            editor.insertSnippet(new vscode.SnippetString(BoostrapSnippet()));
            break;
          default:
            vscode.window.showErrorMessage(message);
        }
      }
    }),

    vscode.commands.registerCommand("tutorialextension.searchWord", () => {
      // Get the active text editor
      const editor = vscode.window.activeTextEditor;

      let message = "This command is only available in: Java, Python";

      if (editor) {
        switch (editor.document.languageId) {
          case "java":
            Static(editor);
            break;
          case "python":
            Brackets(editor);
            Brace(editor);
            break;
          case "html":
            Brackets(editor);
            Brace(editor);
            break;
          default:
            vscode.window.showErrorMessage(message);
        }
      }
    })
  );

  const provider1 = vscode.languages.registerCompletionItemProvider("html", {
    provideCompletionItems(
      document: vscode.TextDocument,
      position: vscode.Position,
      token: vscode.CancellationToken,
      context: vscode.CompletionContext
    ) {
      const htmlCompletion = new vscode.CompletionItem(`A_html_Template`);
      htmlCompletion.insertText = new vscode.SnippetString(htmlComplete());

      const cssCompletion = new vscode.CompletionItem(`A_CSS_Link`);
      cssCompletion.insertText = new vscode.SnippetString(cssLink());

      const jsCompletion = new vscode.CompletionItem(`A_JS_Link`);
      jsCompletion.insertText = new vscode.SnippetString(jsLink());

      const listCompletion = new vscode.CompletionItem(`A_html_List`);
      listCompletion.insertText = new vscode.SnippetString(listComplete());

      const BootstrapCompletion = new vscode.CompletionItem(`A_Bootstrap_Link`);
      BootstrapCompletion.insertText = new vscode.SnippetString(bootstrapComplete());

      return [
        htmlCompletion,
        cssCompletion,
        jsCompletion,
        listCompletion,
        BootstrapCompletion,
      ];
    },
  });

  const provider2 = vscode.languages.registerCompletionItemProvider("java", {
    provideCompletionItems(
      document: vscode.TextDocument,
      position: vscode.Position,
      token: vscode.CancellationToken,
      context: vscode.CompletionContext
    ) {
      const javaCompletion = new vscode.CompletionItem(`A_java_Template`);
      javaCompletion.insertText = new vscode.SnippetString(javaTemplate());

      const javaInputTemplate = new vscode.CompletionItem(`A_Java_Input`);
      javaInputTemplate.insertText = new vscode.SnippetString(javaInput());

      const javaClassTemplate = new vscode.CompletionItem(`A_Java_Class`);
      javaClassTemplate.insertText = new vscode.SnippetString(javaClass());

      const javaArrayTemplate = new vscode.CompletionItem(`A_Java_Array`);
      javaArrayTemplate.insertText = new vscode.SnippetString(javaArray());

      const javaMethodTemplate = new vscode.CompletionItem(`A_Java_Method`);
      javaMethodTemplate.insertText = new vscode.SnippetString(javaMethod());

      return [
        javaCompletion,
        javaInputTemplate,
        javaClassTemplate,
        javaArrayTemplate,
        javaMethodTemplate,
      ];
    },
  });

  const provider3 = vscode.languages.registerCompletionItemProvider("python", {
    provideCompletionItems(
      document: vscode.TextDocument,
      position: vscode.Position,
      token: vscode.CancellationToken,
      context: vscode.CompletionContext
    ) {
      const PythonCompletion = new vscode.CompletionItem(`A_python_Template`);
      PythonCompletion.insertText = new vscode.SnippetString(PythonTemplate());

      const PythonInputTemplate = new vscode.CompletionItem(`A_Python_Input`);
      PythonInputTemplate.insertText = new vscode.SnippetString(PythonInput());

      const PythonClassTemplate = new vscode.CompletionItem(`A_Python_Class`);
      PythonClassTemplate.insertText = new vscode.SnippetString(PythonClass());

      const PythonArrayTemplate = new vscode.CompletionItem(`A_Python_Array`);
      PythonArrayTemplate.insertText = new vscode.SnippetString(PythonArray());

      const PythonFileTemplate = new vscode.CompletionItem(`A_Python_File`);
      PythonFileTemplate.insertText = new vscode.SnippetString(PythonFiles());

      return [
        PythonCompletion,
        PythonInputTemplate,
        PythonClassTemplate,
        PythonArrayTemplate,
        PythonFileTemplate,
      ];
    },
  });

  context.subscriptions.push(provider1, provider2, provider3);
}