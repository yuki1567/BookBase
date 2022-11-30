FROM nginx:1.17

RUN apt-get update && apt-get install -y curl vim locales procps build-essential lsof
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
# nodeをインストール
RUN apt-get install -y nodejs

# ローカルの default.conf をコンテナ内の /etc/nginx/conf.d/ にコピーする
COPY ./default.conf /etc/nginx/conf.d/

ENV LANG="ja_JP.UTF-8"
ENV LANGUAGE="ja_JP:ja"