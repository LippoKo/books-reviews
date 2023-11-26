FROM node:18.7.0-alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
CMD ["npm","run","start"]