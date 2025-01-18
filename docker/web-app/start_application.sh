#!/bin/bash

# mysqlが起動するまで待機
echo "Waiting for MySQL server to become available..."
sleep 30
echo "MySQL server is available!"

# アプリケーションの起動
cd /var/www/html/src/
npm i
cd /var/www/html/src/server
npm i
npm run migration:run
npm run seed
cd /var/www/html/src/front
npm i
cd /var/www/html/src/
npm run start:all

# Nginxの起動
service nginx start

# コンテナ起動永続化
tail -f /dev/null