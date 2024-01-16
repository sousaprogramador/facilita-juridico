FROM node:18

WORKDIR /app

COPY yarn.lock /app/

RUN yarn install

COPY . /app/

EXPOSE 9000

CMD ["yarn","run", "dev"]
