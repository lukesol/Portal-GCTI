FROM node:12.18.0-alpine3.12 as angular
WORKDIR /app
COPY package*.json /app/
RUN npm install --silent
COPY ./ /app/
RUN npm run build


FROM nginx:stable-alpine
VOLUME /var/cache/nginx
COPY --from=angular app/dist/portal-gcti-v2 /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf