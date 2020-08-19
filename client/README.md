# サンプルアプリケーションクライアント

## Server URLの取得

```
$ kubectl get svc
```
コマンドでscaler-sampleのURLを取得する （ここでは aaa.server.com とする)

## Compile

1. `npm install`
1. `npm run compile`

# Test

`$ node dist/index.js -n 5 -u http://aaa.server.com/apis/slow`
でダウンロード開始

オプション説明
-n 5  ダウンロードを5つ同時並行で実行 5の部分は変更可能
-u http://.... ダウンロード実行URL サーバー側は/apis/slow というパスで定義されている
