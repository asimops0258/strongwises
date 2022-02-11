FROM node:14-alpine
WORKDIR /usr/src/app

RUN apk update
RUN apk --no-cache add tzdata git
ENV TZ=Asia/Taipei

RUN npm install -g react-app-rewired nodemon
COPY ./package* ./
RUN npm install -i