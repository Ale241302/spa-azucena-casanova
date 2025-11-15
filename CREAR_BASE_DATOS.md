# Crear Base de Datos PostgreSQL

Sigue estos pasos para crear la base de datos manualmente:

## Opción 1: Usando pgAdmin (Recomendado)

1. Abre **pgAdmin** (debería estar instalado con PostgreSQL)
2. Conéctate al servidor PostgreSQL (usuario: `postgres`, contraseña: `241302`)
3. Haz clic derecho en **Databases** → **Create** → **Database...**
4. En el campo **Database name**, escribe: `spa_azucena_casanova`
5. Haz clic en **Save**

## Opción 2: Usando la Consola SQL de pgAdmin

1. Abre **pgAdmin**
2. Conéctate al servidor PostgreSQL
3. Haz clic derecho en **Databases** → **Query Tool**
4. Copia y pega este comando SQL:

```sql
CREATE DATABASE spa_azucena_casanova;
```

5. Presiona **F5** o haz clic en el botón de ejecutar (▶)

## Opción 3: Usando la Línea de Comandos (si psql está en el PATH)

Abre PowerShell o CMD y ejecuta:

```bash
psql -U postgres -c "CREATE DATABASE spa_azucena_casanova;"
```

Te pedirá la contraseña: `241302`

## Opción 4: Buscar psql manualmente

Si PostgreSQL está instalado pero `psql` no está en el PATH, busca el ejecutable en:

- `C:\Program Files\PostgreSQL\[VERSION]\bin\psql.exe`
- `C:\Program Files (x86)\PostgreSQL\[VERSION]\bin\psql.exe`

Luego ejecuta:

```bash
"C:\Program Files\PostgreSQL\[VERSION]\bin\psql.exe" -U postgres -c "CREATE DATABASE spa_azucena_casanova;"
```

## Verificar que se creó correctamente

Después de crear la base de datos, verifica que existe:

```sql
SELECT datname FROM pg_database WHERE datname = 'spa_azucena_casanova';
```

Si aparece `spa_azucena_casanova` en los resultados, ¡la base de datos fue creada exitosamente!

## Siguiente Paso

Una vez creada la base de datos, continúa con la configuración de Prisma:

```bash
cd backend
npm install
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed
```

