# インストール

*runnを動かすにはgoが必要*



## goインストール

`sudo apt install golang-go`



*なんかバージョンが古かったのでgoのバージョン管理？的なものを追加する*

`sudo add-apt-repository ppa:longsleep/golang-backports`

`sudo apt update`

`sudo apt install golang-go`　# 違うバージョン入れた時の削除用

`sudo apt install golang-go`



### 確認

`go version`



## runnインストール



*下記のgo install〜はダメだった*

`go install github.com/k1LoW/runn/cmd/runn@latest`



*下記のdebインストールで成功*

`export RUNN_VERSION=0.130.0`

`curl -o runn.deb -L https://github.com/k1LoW/runn/releases/download/v$RUNN_VERSION/runn_$RUNN_VERSION-1_amd64.deb`

`dpkg -i runn.deb`



### 確認

`runn --version`



## 参考

https://github.com/k1LoW/runn?tab=readme-ov-file

go: github.com/k1LoW/runn@v0.130.0 requires go >= 1.23.8; switching to go1.23.8



$ export RUNN_VERSION=X.X.X
$ curl -o runn.deb -L https://github.com/k1LoW/runn/releases/download/v$RUNN_VERSION/runn_$RUNN_VERSION-1_amd64.deb
$ dpkg -i runn.deb