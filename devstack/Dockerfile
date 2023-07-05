FROM nginx:1.20.1-alpine

RUN adduser -D -H -u 1000 -s /bin/bash www-data -G www-data

# copy nginx configuration
ADD ./devstack/nginx.conf.template /etc/nginx/nginx.conf.template
ADD ./devstack/s3_proxy.conf /etc/nginx/s3_proxy.conf

RUN rm /etc/nginx/conf.d/*

COPY ./devstack/entrypoint.sh /
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
