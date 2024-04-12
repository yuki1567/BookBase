#!/bin/bash

cd /var/www/html/src/
npm install
npm install -g pm2
pm2 start "npm run dev" --name nuxt

tail -f /dev/null