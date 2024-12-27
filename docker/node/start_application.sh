#!/bin/bash

# mysqlが起動するまで待機
echo "Waiting for MySQL server to become available..."
sleep 30
echo "MySQL server is available!"

# アプリケーションの起動
cd /var/www/html/src/
npm i
npm i -g pm2@5.3.0
pm2 start ecosystem.config.js

# Nginxの起動
service nginx start

# コンテナ起動永続化
tail -f /dev/null