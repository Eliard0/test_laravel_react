FROM php:8.3-fpm

RUN apt-get update && apt-get install -y \
    unzip git curl libpq-dev libzip-dev zip \
    && docker-php-ext-install pdo pdo_pgsql zip bcmath

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

RUN composer install

RUN chown -R www-data:www-data /var/www/application \
    && chmod -R 775 /var/www/application/storage /var/www/application/bootstrap/cache

EXPOSE 9000
CMD ["php-fpm"]
