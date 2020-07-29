FROM library/node:10.15.2

COPY . /app

RUN cd /app \
  && npm install --production

WORKDIR /app

CMD ["node", "bot.js"]

