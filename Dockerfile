FROM node:18.16.1-alpine

WORKDIR /usr/app

COPY . .

RUN npm ci

RUN npm run build

CMD [ "npm","start" ]