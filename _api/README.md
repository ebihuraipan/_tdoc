# json-server



## インストール

`pnpm add json-server`



## 実行

```bash
# サーバ起動
npx json-server --watch db.json -p 3000

# APIサーバ起動確認

curl -H "Content-Type: application/json" -d '{"title":"test"}' -X POST http://localhost:3000/posts
```

node http.js 
curl -H "Content-Type: application/json" -X GET http://localhost:3003/



## 参考

https://qiita.com/ryome/items/36da51f0f5973eab8720







