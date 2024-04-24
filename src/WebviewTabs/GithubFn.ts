import * as vscode from 'vscode';

export function GithubContent(CSS_Source: vscode.Uri, AccImgSrc: vscode.Uri) {
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
              <button type="button" class="btn btn-primary">Github</button>
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
        <h1>Github</h1>
      </div>

      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-header">
              <h5>Accounts</h5>
            </div>
            <div class="card-body">
              <p class="card-text">Click the accounts button at the bottom left of the screen</p>
              <img src="${AccImgSrc}" alt="accounts icon for VS Code" style="height: 50px; width: 50px;">
            </div>
          </div>
        </div>
      </div>

      <div class="row" style="padding-top: 20px;">
        <div class="col">
          <div class="card">
            <div class="card-header">
            <h5>Backup and sync</h5>
            </div>
            <div class="card-body">
              <div class="card-text">Click "backup and sync settings"</div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <div class="card-header">
              <h5>Sign in</h5>
            </div>
            <div class="card-body">
              <div class="card-text">Click sign in</div>
            </div>
          </div>
        </div>
      </div>


      <div class="row" style="padding-top: 20px;">
        <div class="col">
          <div class="card">
            <div class="card-header">
              <h5>Sign in with Github</h5>
            </div>
            <div class="card-body">
              <div class="card-text">Click sign in with Github</div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <div class="card-header">
            <h5>Download GIT</h5>
            </div>
            <div class="card-body">
              <div class="card-text">Now download GIT for Windows from <a href="https://git-scm.com/download/win">Git's official website</a></div>
            </div>
          </div>
        </div>
      </div>

      <div class="row" style="padding-top: 20px;">
        <div class="col">
          <div class="card">
            <div class="card-header">
            <h5>Download wizard</h5>
            </div>
            <div class="card-body">
              <div class="card-text">Work through the wizard and make sure you are happy with all options</div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <div class="card-header">
            <h5>Check download</h5>
            </div>
            <div class="card-body">
              <div class="card-text">Open a new command line interface instance and type "git --version"</div>
            </div>
          </div>
        </div>
      </div>
  
    </div>

	<script>

    function homePage() {
      const vscode = acquireVsCodeApi();
      vscode.postMessage({
        command: 'Home page'
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