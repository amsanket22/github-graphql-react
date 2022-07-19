
FROM --platform=linux/amd64 node:16.16.0
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm i
COPY . ./

CMD ["npm", "start"]
