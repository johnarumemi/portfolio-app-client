FROM node:latest AS source
RUN mkdir -p /app/src && \
    mkdir -p /app/public
ADD src/ /app/src
ADD public/ /app/public
ADD *.json /app/
WORKDIR /app
RUN npm install
RUN npm run build

FROM nginx:latest
MAINTAINER "John Arumemi-Ikhide <john.arumemi@gmail.com"
ENV NODE_ENV=production
RUN mkdir -p /var/www/html
COPY --from=source /app/build/ /var/www/html/
ADD nginx_config/* /etc/nginx/conf.d/
WORKDIR /var/www/html
EXPOSE 80 443
CMD ['service', 'nginx', 'start']
