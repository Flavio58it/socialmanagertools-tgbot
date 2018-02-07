FROM keymetrics/pm2:8-alpine

WORKDIR /app

RUN npm install

CMD ["pm2-runtime", "bot.js"]
