# Build in this container
FROM node:12.19.0-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package* /usr/src/app/

RUN npm install --silent
RUN npm install react-scripts -g --silent

COPY . /usr/src/app/

CMD [ "npm", "run", "start"]