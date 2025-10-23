-- ลบถ้ามีอยู่แล้ว
DROP DATABASE IF EXISTS app_db;

-- สร้างใหม่ด้วย locale ที่ต้องการ
CREATE DATABASE app_db
  WITH OWNER = root
  ENCODING = 'UTF8'
  LC_COLLATE = 'C.UTF-8'
  LC_CTYPE = 'C.UTF-8'
  TEMPLATE = template0;