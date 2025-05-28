### 参考
#### ユニットテスト
https://qiita.com/KokiSakano/items/f23e979004f72d70165e
#### コンポーネントテスト
https://qiita.com/Shakya_Bishal/items/3678d8f9f4df3a5c125f

# vitest



## インストール



### テストの雛形サイトを作る

`pnpm create vite`

色々選択する

```
Select a framework:
->Vue
Select a variant:
->JavaScript
```



### テストをインストール

`pnpm add -D vitest`
pnpm add -D @vue/test-utils
pnpm add -D @vitest/coverage-v8


追記する

```
 "scripts": {
    "test":"vitest"
 }
```



テスト実行

`pnpm test`



pnpm add vue-router









# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).
