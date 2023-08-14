FROM node:18-alpine 
WORKDIR /app
COPY build  ./build
COPY node_modules ./node_modules
COPY package.json .
COPY package-lock.json .

EXPOSE 3000
ENTRYPOINT  [ "node", "./build/index.js" ]