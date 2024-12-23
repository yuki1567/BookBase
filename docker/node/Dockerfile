FROM nginx:1.17

RUN apt-get update && apt-get install -y curl vim locales procps build-essential lsof
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