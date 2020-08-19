# サンプルアプリケーションサーバー

## Setup

dockerコマンドにECRの認証を登録
```
$ aws ecr get-login-password --region <YOUR_REGION> | docker login --username AWS --password-stdin <YOUR_AWS_ACCOUNT_ID>.dkr.ecr.<YOUR_REGION>.amazonaws.com
```
YOUR_REGIONとYOUR_AWS_ACCOUNT_IDを自身の内容に置き換えて実行


## Prepare sample download

Size 200MBのサンプルファイルを入手。
https://www.thinkbroadband.com/download から200MBファイルを選択し、 `server/assets`下 にファイル名 `200MB.file`として保存

## Compile, Bake and push image

1. `npm install`
1. `npm run compile`
1. `docker build -t sample-by-session .`
1. 上記で作成したDocker imageを [ECRにプッシュ](https://docs.aws.amazon.com/ja_jp/AmazonECR/latest/userguide/docker-push-ecr-image.html)
1. (root)/setup/k8s/deployment.yamlのimage名をECRにプッシュしたものに変更
1. (root)/setup/k8s の各yamlをkubectlでapply
