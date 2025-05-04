#!/bin/bash

mkdir "$1"

touch "$1/README.md"

mkdir "$1/.vscode"
touch "$1/.vscode/settings.json"
echo '{
    "workbench.colorCustomizations": {
        "titleBar.activeBackground": "#1e4e13", // タイトルバーの背景色
        "titleBar.activeForeground": "#fff", // タイトルバーの文字色
        "activityBar.background": "#1e4e13", // サイドバーの背景色
        "activityBar.foreground": "#fff", // サイドバーの文字色
    }
}' > "$1/.vscode/settings.json"

