# i18n

internationalization のための大本の言語別ファイルを出力するためのディレクトリ。
以下から構成される。

- [辞書ファイル](./index.csv)
- [スクリプト](./index.js)

index.csv には `ja-JP`, `en-US` の二言語のための設定が用意されている。  
index.js が `next-international` に最適化された `ts`ファイルを[出力先](../gen/i18n/)へ出力する。
