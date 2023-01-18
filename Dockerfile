FROM node:16-slim

WORKDIR /app
COPY package.json .
COPY .npmrc .

RUN NODE_ENV=development yarn install

COPY . .
RUN NODE_ENV=production yarn build

ENV PORT=6006
EXPOSE $PORT 

CMD yarn start
