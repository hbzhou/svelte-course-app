FROM node:18-alpine 
WORKDIR /app
COPY build  .
COPY package.json .
COPY package-lock.json .

RUN npm ci --omit dev

EXPOSE 3000
ENTRYPOINT  [ "node", "index.js" ]