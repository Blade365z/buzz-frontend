#!/usr/bin/env sh
set -eu

envsubst '${VERSION},${APP_NAME}' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

exec "$@"
