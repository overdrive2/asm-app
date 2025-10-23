FROM php:8.4-fpm

# ติดตั้ง dependencies และ extension ทั้ง Postgres + MySQL
RUN apt-get update && apt-get install -y \
    libpq-dev \
    libzip-dev \
    zip unzip git curl mariadb-client \
    && docker-php-ext-install pdo pdo_pgsql pdo_mysql zip \
    && docker-php-ext-enable opcache

# ตั้ง timezone และ composer
RUN ln -sf /usr/share/zoneinfo/Asia/Bangkok /etc/localtime \
    && echo "Asia/Bangkok" > /etc/timezone

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer
WORKDIR /var/www/html

COPY ./src /var/www/html
RUN composer install --no-dev --optimize-autoloader \
    && php artisan config:cache \
    && php artisan route:cache \
    && php artisan view:cache \
    && chmod -R 775 storage bootstrap/cache

# เปิด port ของ PHP-FPM (optional)
EXPOSE 9000

# คำสั่งเริ่มต้น (จะถูก override ใน docker-compose)
CMD ["php-fpm"]