#!/bin/bash

# mysqlが起動するまで待機
echo "Waiting for MySQL server to become available..."
sleep 30
echo "MySQL server is available!"

# アプリケーションの起動
# cd /var/www/html/src/
# npm install
# npm install -g pm2
# npm run start

# Nginxの起動
service nginx start

# コンテナ起動永続化
tail -f /dev/null