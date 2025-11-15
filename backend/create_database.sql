-- Script para crear la base de datos del SPA Azucena Casanova López
-- Ejecuta este script en pgAdmin o en la consola de PostgreSQL

-- Crear la base de datos
CREATE DATABASE spa_azucena_casanova
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Spanish_Colombia.1252'
    LC_CTYPE = 'Spanish_Colombia.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

-- Verificar que se creó correctamente
\c spa_azucena_casanova

-- Mensaje de confirmación
SELECT 'Base de datos spa_azucena_casanova creada exitosamente!' AS mensaje;

