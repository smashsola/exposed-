@echo off
where node >nul 2>nul
if errorlevel 1 (
  if exist "%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" (
    "%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" "%~dp0scripts\start.mjs"
  ) else (
    echo Instale Node.js 20 ou posterior para iniciar o EXPOSED.
    pause
    exit /b 1
  )
) else (
  node "%~dp0scripts\start.mjs"
)
if errorlevel 1 pause
