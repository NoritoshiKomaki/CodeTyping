# README

# タイトル:Code-Typing
<img width="1440" alt="スクリーンショット 2020-04-22 16 42 36" src="https://user-images.githubusercontent.com/61044016/79957655-dde96500-84bc-11ea-8ec0-23389ca6927b.png"><br><br><br>

# アプリの説明
このアプリはプログラミング言語に特化したタイピングアプリです。<br>
指示されたコードを入力すると画面下部の仮想エディタに入力したコードが記入されていきます。<br>
ゲーム終了後、開発環境の整ったエディタにコピー＆ペーストするとブラウザもしくはターミナルで打ち込んだコードの挙動を確認する事ができます。<br><br><br>

# UPDATE予定
・新しいゲームを追加する<br>
・過去のタイピング結果確認ページを実装<br>
・エディタの導入方法と使用方法の解説ページを作成する。<br>
・各ゲームの解説ページを作成する<br><br><br>

# 本番環境URL
http://18.177.63.130/<br><br><br>

# 各ページ説明

## トップページ

言語一覧が表示されていますので、選択すると各言語のゲーム一覧ページへ移動します。<br><br>

<img width="1440" alt="スクリーンショット 2020-04-22 16 42 36" src="https://user-images.githubusercontent.com/61044016/79957655-dde96500-84bc-11ea-8ec0-23389ca6927b.png"><br><br>

## ゲーム選択ページ

ゲーム一覧が表示されていますので、選択すると各ゲームのタイピングゲームページへ移動します。<br>
選択肢左上のアルファベットは過去最高記録のスコアが表示されます。

<img width="1440" alt="スクリーンショット 2020-04-22 16 56 51" src="https://user-images.githubusercontent.com/61044016/79957660-e04bbf00-84bc-11ea-914a-bf29abf1508a.png"><br><br>

## タイピングゲームページ

3秒のカウントダウンの後ゲームが開始します。

<img width="1440" alt="スクリーンショット 2020-04-22 17 11 39" src="https://user-images.githubusercontent.com/61044016/79957667-e17cec00-84bc-11ea-9f63-0e17c650dc67.png"><br><br>

設定された文字数を打ち終えるとタイピング結果が表示されます。<br>
ログイン状態で結果を登録すると、ゲーム選択ページのスコアとランキングに反映されます。

<img width="1440" alt="スクリーンショット 2020-04-22 17 01 12" src="https://user-images.githubusercontent.com/61044016/79957673-e2ae1900-84bc-11ea-933b-4d2bdc10954c.png"><br><br>

## ランキングページ

ヘッダーのランキングボタンにマウスオーバーし、選択することで各言語毎のユーザーランキングが表示されます。

<img width="1440" alt="スクリーンショット 2020-04-22 16 57 57" src="https://user-images.githubusercontent.com/61044016/79957682-e641a000-84bc-11ea-92f4-6d208802cf54.png">


# DB設計

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|username|string||
|password|integer||

### Association
- has_many :htmls
- has_many :csses
- has_many :javascripts

### Validation
- validates :name, uniqueness: true, presence: true, length: { maximum: 10 }
- VALID_PASSWORD_REGEX = /\A[a-z0-9]+\z/i
- validates :password, format: { with: VALID_PASSWORD_REGEX }

## htmlsテーブル

|Column|Type|Options|
|------|----|-------|
|score|integer||
|game|string||
|user_id|integer|foreign_key: true|

### Association
- belongs_to :user

## cssesテーブル

|Column|Type|Options|
|------|----|-------|
|score|integer||
|game|string||
|user_id|integer|foreign_key: true|

### Association
- belongs_to :user

## javascriptsテーブル

|Column|Type|Options|
|------|----|-------|
|score|integer||
|game|string||
|user_id|integer|foreign_key: true|

### Association
- belongs_to :user