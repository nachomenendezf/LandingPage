FROM node:18-alpine3.15 as builder

WORKDIR /front
COPY ./ /front

RUN npm install
RUN npm run build

FROM nginx:1.23.0-alpine
#Install tools
RUN apk add vim \
    && apk add curl \
    && apk add nano;

COPY .devops/conf/default.conf /etc/nginx/conf.d/default.conf
COPY .devops/conf/nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /front/build/ /usr/share/nginx/site/dist

EXPOSE 3001
CMD [ "nginx" , "-g" , "daemon off;"]