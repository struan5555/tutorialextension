import * as vscode from 'vscode';

export function HomeContent(CSS_Source: vscode.Uri) {
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
        <a class="navbar-brand">Tutorial Extension</a>
          <ul class="navbar-nav">
            <div class="d-grid gap-2 d-md-block">
              <button type="button" onclick="githubPage()" class="btn btn-primary">Github</button>
              <button type="button" onclick="javaPage()" class="btn btn-primary">Java</button>
              <button type="button" onclick="cSharpPage()" class="btn btn-primary">C#</button>
              <button type="button" onclick="pythonPage()" class="btn btn-primary">Python</button>
              <button type="button" onclick="htmlPage()" class="btn btn-primary">HTML</button>
            </div>
          </ul>
      </div>
    </nav>

    <div class="container">

      <div class="row" style="padding-top: 20px; padding-left: 10px;">
        <h1>Tutorial extension</h1>
      </div>

      <div class="row">
        <div>This is an extension designed to help you to setup the VSCode IDE.</div>
        <p>
        <div>Select one of the tabs from the navbar to begin working through the tutorials</div>
        <p>
        <div>When in html, java and python use ctrl+shift+P and type insert hello world snippet to see a starter hello world snippet for that language</div>
        <p>
        <div>When in html, java and python type "A_" to see a list of completions for you to use in your code.</div>
        <div>such as "A_html_Template" for an html template to show up</div>
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

    function htmlPage() {
      const vscode = acquireVsCodeApi();
      vscode.postMessage({
        command: 'HTML page'
      });
      console.log("sent");
    }
	</script>

  </body>
  </html>`;
}