# ys-front

これは[夢色水車](https://ys.7oh.dev/)のフロントエンドです。
「こんなのあったらいいな」という人々の要望をカテゴリ別に閲覧できます。
バックエンド API の[ys-back](https://github.com/7oh2020/ys-back)と連携して Static Generation を実現できます。

## 特徴

- Next.js の Static Generate によりレンダリング済みのページを高速に表示できます。
- バックエンドの API と通信してビルド時にデータをページに埋め込みます。

## 環境変数の変更

お使いの環境に合わせて環境変数を設定する必要があります。
.env.example を参考にして.env ファイルを作成してください。
以下 2 つの URL は[バックエンド](https://github.com/7oh2020/ys-back)と対応しています。

- NEXT_PUBLIC_FETCH_META_URL -> ツイート件数などのメタ情報を返す API のエンドポイント
- NEXT_PUBLIC_FETCH_INDEX_URL -> ツイートを取得する API のエンドポイント

## 開発サーバーの起動：

以下のコマンドを実行すると localhost:3000 で開発サーバーが起動します。
開発サーバーの起動中はファイルの変更が画面に即時反映されます。

```
npm run dev
```

## ビルド

以下のコマンドを実行すると Static Generate が実行され out ディレクトリにファイル一式が出力されます。
この時に環境変数で指定したバックエンド API が呼び出されてデータがページに静的に埋め込まれます。

```
npm run build
```
