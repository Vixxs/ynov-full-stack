FROM node:16 as storybook

WORKDIR /usr/app
COPY ./my-lib-ui /usr/app
RUN npm install -g yalc
RUN npm install
RUN npm run yalc:build
RUN npm run storybook &

FROM node:16 as next-app
WORKDIR /usr/app
COPY ./vitrine /usr/app

RUN npm install -g yalc
RUN npm install
RUN yalc add my-lib-ui
RUN npm run dev &
