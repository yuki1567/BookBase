FROM nginx:1.17

# インストールするツールとその概要
# curl HTTPリクエストツール
# vim テキストエディタ
# locals ロケール（多言語対応）設定ツール
# procps プロセス管理ツール(ps, topなど)
# build-essential コンパイルツール
# lsof 開いているファイル情報を確認するツール（デバッグやトラブルシューティング用）
RUN apt-get update && apt-get install -y curl vim locales procps build-essential lsof
# NodeSourceのリポジトリを追加し、Node.jsバージョン19のインストールを準備
RUN curl -sL https://deb.nodesource.com/setup_19.x | bash -
# nodeをインストール
RUN apt-get install -y nodejs

# ローカルの default.conf をコンテナ内の /etc/nginx/conf.d/ にコピーする
COPY default.conf /etc/nginx/conf.d/

COPY start_application.sh /var/www/html/start_application.sh
RUN chmod +x /var/www/html/start_application.sh

ENV LANG="ja_JP.UTF-8"
ENV LANGUAGE="ja_JP:ja"

CMD ["/var/www/html/start_application.sh"]