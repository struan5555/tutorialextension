import * as vscode from 'vscode';

export function HTMLContent(CSS_Source: vscode.Uri) {
	return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="${CSS_Source}" rel="stylesheet">
      <title>Home Page</title>
    </head>
    <body>

    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" onclick="homePage()">Tutorial Extension</a>
          <ul class="navbar-nav">
            <div class="d-grid gap-2 d-md-block">
              <button type="button" onclick="githubPage()" class="btn btn-primary">Github</button>
              <button type="button" onclick="javaPage()" class="btn btn-primary">Java</button>
              <button type="button" onclick="cSharpPage()" class="btn btn-primary">C#</button>
              <button type="button" onclick="pythonPage()" class="btn btn-primary">Python</button>
              <button type="button" class="btn btn-primary">HTML</button>
            </div>
          </ul>
      </div>
    </nav>

    <div class="container">

        <div class="row" style="padding-top: 20px; padding-left: 10px;">
            <h1>HTML functions</h1>
        </div>

        <div class="row"  style="padding: 20px;">
            <div class="col-sm-auto">
                <h3>When in a html file type try these</h3>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h5>Snippets : use CTRL+SHIFT+P</h5>
                <ul>
                <li>
                    Insert hello world snippet : A simple hello world snippet
                </li>
                </ul>
            </div>
        <div>
        <div class="row">
            <div class="col">
                <h5>Completion : type these in as shown and tab to select</h5>
                <ul>
                <li>
                    A_html_Template : a simple hello world Completion
                </li>
                <li>
                    A_CSS_Link : an input method example
                </li>
                <li>
                    A_JS_Link : a completion showing how to use classes in java
                </li>
                <li>
                    A_html_List : a completion showing the use of arrays and some work on them
                </li>
                <li>
                    A_Bootstrap_Link : showing how to use methods in java
                </li>
                </ul>
            </div>
        </div>
    </div>

	<script>

    function githubPage() {
      const vscode = acquireVsCodeApi();
      vscode.postMessage({
        command: 'Github page'
      });
      console.log("sent");
    }

    function javaPage() {
      const vscode = acquireVsCodeApi();
      vscode.postMessage({
        command: 'Java page'
      });
      console.log("sent");
    }

    function cSharpPage() {
      const vscode = acquireVsCodeApi();
      vscode.postMessage({
        command: 'C# page'
      });
      console.log("sent");
    }

    function pythonPage() {
      const vscode = acquireVsCodeApi();
      vscode.postMessage({
        command: 'Python page'
      });
      console.log("sent");
    }
	</script>

  </body>
  </html>`;
}