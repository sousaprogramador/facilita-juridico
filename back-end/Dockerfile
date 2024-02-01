FROM node:18

WORKDIR /app

# COPY yarn.lock package.json /app/

COPY . /app/

RUN npm install

EXPOSE 9000

CMD ["npm","run", "dev"]
