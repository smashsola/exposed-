$projectPath = $PSScriptRoot
try {
  $response = Invoke-WebRequest -Uri 'http://127.0.0.1:4173/' -TimeoutSec 2
} catch {
  $nodePath = (Get-Command node -ErrorAction SilentlyContinue).Source
  if (-not $nodePath) {
    $bundledNode = Join-Path $env:USERPROFILE '.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node.exe'
    if (Test-Path -LiteralPath $bundledNode) { $nodePath = $bundledNode } else { throw 'Instale Node.js 20 ou posterior para iniciar o EXPOSED!.' }
  }
  Start-Process -FilePath $nodePath -ArgumentList 'scripts/serve.mjs' -WorkingDirectory $projectPath -WindowStyle Hidden
  Start-Sleep -Milliseconds 700
}
Start-Process 'http://127.0.0.1:4173/'
