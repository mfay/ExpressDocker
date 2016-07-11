FROM node

RUN mkdir /app
WORKDIR /app

COPY . /app
RUN npm install

CMD node app.js

EXPOSE 3000
