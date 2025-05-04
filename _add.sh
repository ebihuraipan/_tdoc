#!/bin/bash

mkdir "$1"

touch "$1/README.md"

mkdir "$1/.vscode"
touch "$1/.vscode/settings.json"
echo '{
    "titleBar.activeBackground": "#069194",
    "titleBar.activeForeground": "#000000",
    "activityBar.background": "#069194",
    "activityBar.foreground": "#000000"
}' > "$1/.vscode/settings.json"

