FROM php:8.4-fpm

RUN apt-get update && apt-get install -y \
    libpq-dev libzip-dev zip unzip git curl \
    && docker-php-ext-install pdo pdo_pgsql pdo_mysql zip \
    && docker-php-ext-enable opcache

# Composer (ไว้ติดตั้งในคอนเทนเนอร์ได้)
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html
