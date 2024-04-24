import * as vscode from 'vscode';

export function CSharpContent(CSS_Source: vscode.Uri) {
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
                <button type="button" class="btn btn-primary">C#</button>
                <button type="button" onclick="pythonPage()" class="btn btn-primary">Python</button>
                <button type="button" onclick="htmlPage()" class="btn btn-primary">HTML</button>
              </div>
            </ul>
        </div>
      </nav>
  
      <div class="container">
  
        <div class="row" style="padding: 20px;">
          <h1>C#</h1>
        </div>
      
        <div class="row">
          <div class="col">
            <div class="card">
              <div class="card-header">
                <h5>Download 1</h5>
              </div>
              <div class="card-body">
                <p class="card-text">Click the Link below and download</p>
                <p><a href="https://github.com/msys2/msys2-installer/releases/download/2023-10-26/msys2-x86_64-20231026.exe">link</a></p>
              </div>
            </div>
          </div>
        </div>
  
        <div class="row"  style="padding-top: 20px;">
          <div class="col">
            <div class="card">
              <div class="card-header">
                <h5>Download wizard</h5>
              </div>
              <div class="card-body">
                <p class="card-text">Work through the wizard and make sure you are happy with all options</p>
              </div>
            </div>
          </div>
  
          <div class="col">
            <div class="card">
              <div class="card-header">
                <h5>mingw client</h5>
              </div>
              <div class="card-body">
                <p class="card-text">Open the mingw cli as admin enter "pacman -S --needed base-devel mingw-w64-ucrt-x86_64-toolchain"</p>
              </div>
            </div>
          </div>
        </div>
  
        <div class="row" style="padding-top: 20px;">
          <div class="col">
            <div class="card">
              <div class="card-header">
                <h5>Work through</h5>
              </div>
              <div class="card-body">
                <p class="card-text">Hit enter for default and then yes, wait for download to finish</p>
              </div>
            </div>
          </div>
    
          <div class="col">
            <div class="card">
              <div class="card-header">
                <h5>environment variables</h5>
              </div>
              <div class="card-body">
                <p class="card-text">Open environment variables and add *your file location for this file* + "ucrt64\bin"</p>
              </div>
            </div>
          </div>
        </div>
  
        <div class="row" style="padding-top: 20px;"">
          <div class="col">
            <div class="card">
              <div class="card-header">
                <h5>Check download</h5>
              </div>
              <div class="card-body">
                <p class="card-text">Open a new command line interface instance and type "g++ --version" or "gcc --version" or "gdb --version"</p>
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