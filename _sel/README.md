# selenium



## インストール

### pythonインストール

`sudo apt update`

`sudo apt upgrade`

`sudo apt install python3-pip`

### chromeインストール

`cd ~`

`wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb`

`sudo apt install google-chrome-stable_current_amd64.deb`

### seleniumとchrome-driverのインストール

`pip install selenium chromedriver-binary`

*バージョンを指定する場合*

`pip install chromedriver-binary==136.0.7103.59`



## 仮想環境


### 仮想環境開始
`python3 -m venv ~/venv`

`source ~/_venv/bin/activate`

### 仮想環境終了
`deactivate`



## バージョン確認

### chromeとchrome-driverのバージョンを合わせる必要があるらしい

*ある程度番号を合わせれば末尾がズレていても動いた*

#### chromeのバージョン確認

`google-chrome --version`

#### pipで入れたchrome-driverのバージョン確認

`pip show chromedriver-binary`



## vscodeのシンタックスエラー対応

*pipで仮想環境で入れたものを動かすとき、vscodeがimport元を見つけられずにシンタックスエラーを返す。*

*vscodeでpythonインタプリタ先をvenv内の`bin/python3`を追加する。*

ここのpythonバージョン番号をクリックして、

![](/home/u20/Desktop/_tdoc/_sel/img/python_interpreter_001.png)

`~/venv`に仮想環境を置いた場合、

pythonインタプリタパスに`~/venv/bin/python3`を選択する

![python_interpreter_002](/home/u20/Desktop/_tdoc/_sel/img/python_interpreter_002.png)

しばらくすると？下記になってシンタックスエラーが消える
