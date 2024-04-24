import * as vscode from 'vscode';

export function JavaContent(CSS_Source: vscode.Uri) {
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
              <button type="button" class="btn btn-primary">Java</button>
              <button type="button" onclick="cSharpPage()" class="btn btn-primary">C#</button>
              <button type="button" onclick="pythonPage()" class="btn btn-primary">Python</button>
              <button type="button" onclick="htmlPage()" class="btn btn-primary">HTML</button>
            </div>
          </ul>
      </div>
    </nav>
  
  <div class="container">

    <div class="row" style="padding: 20px;">
      <h1>Java</h1>
      <div>See end for next steps that will help later</div>
    </div>

    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-header">
            <h5>Download 1</h5>
          </div>
          <div class="card-body">
            <p class="card-text">Click the Link below and download the oracle JDK installer take care to find the right Operating System</p>
            <p><a href="https://www.oracle.com/uk/java/technologies/downloads/#jdk22-windows">link</a></p>
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
            <p class="card-text">Work through the wizard and make sure you are happy with all options</p>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card">
          <div class="card-header">
            <h5>Check download</h5>
          </div>
          <div class="card-body">
            <p class="card-text">Open a new command line interface instance and type "java --version"</p>
          </div>
        </div>
      </div>
    </div>

    <div class="row"  style="padding: 20px;">
      <div class="col-sm-auto">
        <h2>Next steps</h2>
        <div>When in a java file type try these</div>
      </div>
      <div class="col">
        <h5>Snippets : use CTRL+SHIFT+P</h5>
        <ul>
          <li>
            Insert hello world snippet : A simple hello world snippet
          </li>
        </ul>
      </div>
      <div class="col">
        <h5>Completion : type these in as shown and tab to select</h5>
        <ul>
          <li>
            A_java_Template : a simple hello world Completion
          </li>
          <li>
            A_java_Input : an input method example
          </li>
          <li>
            A_java_Class : a completion showing how to use classes in java
          </li>
          <li>
            A_java_Array : a completion showing the use of arrays and some work on them
          </li>
          <li>
            A_java_Method : showing how to use methods in java
          </li>
        </ul>
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