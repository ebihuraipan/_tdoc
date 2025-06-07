# プロジェクト名

## 開発環境

### VSCode拡張機能確認

```bash
code --list-extensions
```

### VSCode拡張機能一覧

```bash
# 開発環境関連
code --install-extension christian-kohler.npm-intellisense
code --install-extension dbaeumer.vscode-eslint
code --install-extension denoland.vscode-deno
code --install-extension esbenp.prettier-vscode
code --install-extension editorconfig.editorconfig
code --install-extension mosapride.zenkaku
code --install-extension shardulm94.trailing-spaces

# Git関連
code --install-extension eamodio.gitlens
code --install-extension mhutchie.git-graph

# Vue関連
code --install-extension hollowtree.vue-snippets
code --install-extension vue.volar

# Python関連
code --install-extension ms-python.python
code --install-extension ms-python.vscode-pylance
code --install-extension ms-python.debugpy

# Java関連
code --install-extension vscjava.vscode-java-pack
code --install-extension vscjava.vscode-java-debug
code --install-extension vscjava.vscode-java-test
code --install-extension vscjava.vscode-maven
code --install-extension vscjava.vscode-gradle

# テスト関連
code --install-extension ms-playwright.playwright
code --install-extension vitest.explorer

# その他
code --install-extension ms-ceintl.vscode-language-pack-ja
code --install-extension oderwat.indent-rainbow
code --install-extension visualstudioexptteam.vscodeintellicode
code --install-extension visualstudioexptteam.intellicode-api-usage-examples
code --install-extension ms-azuretools.vscode-docker
code --install-extension redhat.vscode-yaml
code --install-extension bradlc.vscode-tailwindcss
```

または、以下のコマンドで一括インストールすることもできます：

```bash
code --install-extension christian-kohler.npm-intellisense dbaeumer.vscode-eslint denoland.vscode-deno esbenp.prettier-vscode editorconfig.editorconfig eamodio.gitlens mhutchie.git-graph hollowtree.vue-snippets vue.volar ms-python.python ms-python.vscode-pylance ms-python.debugpy vscjava.vscode-java-pack vscjava.vscode-java-debug vscjava.vscode-java-test vscjava.vscode-maven vscjava.vscode-gradle ms-playwright.playwright vitest.explorer ms-ceintl.vscode-language-pack-ja oderwat.indent-rainbow visualstudioexptteam.vscodeintellicode visualstudioexptteam.intellicode-api-usage-examples ms-azuretools.vscode-docker redhat.vscode-yaml bradlc.vscode-tailwindcss mosapride.zenkaku shardulm94.trailing-spaces
```

#### 開発環境関連
- [npm IntelliSense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense) - npmのインテリセンス
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - JavaScript/TypeScriptのリンター
- [Deno](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno) - Denoランタイム
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - コードフォーマッター
- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=editorconfig.editorconfig) - エディタ設定の統一
- [ZenKaku](https://marketplace.visualstudio.com/items?itemName=mosapride.zenkaku) - 全角文字の入力支援
- [Trailing Spaces](https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces) - 行末の空白文字の削除

#### Git関連
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) - Gitの拡張機能
- [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph) - Gitのグラフ表示

#### Vue関連
- [Vue Snippets](https://marketplace.visualstudio.com/items?itemName=hollowtree.vue-snippets) - Vue.jsのスニペット
- [Vue Language Features](https://marketplace.visualstudio.com/items?itemName=vue.volar) - Vue.jsの言語サポート

#### Python関連
- [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python) - Python言語サポート
- [Pylance](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance) - Python言語サーバー
- [Python Debugger](https://marketplace.visualstudio.com/items?itemName=ms-python.debugpy) - Pythonデバッガー

#### Java関連
- [Java Extension Pack](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack) - Java開発用拡張パック
- [Java Debug](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-debug) - Javaデバッガー
- [Java Test Runner](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-test) - Javaテストランナー
- [Maven](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-maven) - Mavenサポート
- [Gradle](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-gradle) - Gradleサポート

#### テスト関連
- [Playwright](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) - Playwrightテスト
- [Vitest Explorer](https://marketplace.visualstudio.com/items?itemName=vitest.explorer) - Vitestテストエクスプローラー

#### その他
- [Japanese Language Pack](https://marketplace.visualstudio.com/items?itemName=ms-ceintl.vscode-language-pack-ja) - 日本語言語パック
- [Indent Rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow) - インデントの可視化
- [IntelliCode](https://marketplace.visualstudio.com/items?itemName=visualstudioexptteam.vscodeintellicode) - AI支援コード補完
- [IntelliCode API Usage Examples](https://marketplace.visualstudio.com/items?itemName=visualstudioexptteam.intellicode-api-usage-examples) - API使用例の提案
- [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker) - Dockerサポート
- [YAML](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml) - YAML言語サポート
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - Tailwind CSSのインテリセンス