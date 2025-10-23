#!/bin/sh
set -e  # หยุดสคริปต์ถ้าเจอ error

echo "🚀 Starting Laravel production container..."

# ตรวจว่ามี .env หรือยัง
if [ ! -f /var/www/html/.env ]; then
  echo "⚠️  No .env file found in /var/www/html/.env"
  echo "Creating a temporary fallback environment..."
  cp /var/www/html/.env.example /var/www/html/.env 2>/dev/null || true
fi

# ✅ ตั้ง permission storage / cache
chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache || true

# ✅ clear & cache config
echo "🧩 Caching Laravel configuration..."
php artisan config:clear || true
php artisan config:cache || true

# ✅ cache route / view
echo "🗺️  Caching routes and views..."
php artisan route:clear || true
php artisan route:cache || true
php artisan view:clear || true
php artisan view:cache || true

# ✅ migrate database
echo "🗄️  Running database migrations..."
php artisan migrate --force || true

echo "✅ Laravel container ready! Starting PHP-FPM..."
exec php-fpm
