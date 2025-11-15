# Guía de Instalación - SPA Azucena Casanova López

Esta guía te ayudará a configurar y ejecutar el proyecto paso a paso.

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 18 o superior) - [Descargar Node.js](https://nodejs.org/)
- **PostgreSQL** (versión 14 o superior) - [Descargar PostgreSQL](https://www.postgresql.org/download/)
- **npm** o **yarn** (viene con Node.js)

## 🚀 Pasos de Instalación

### 1. Clonar o Descargar el Proyecto

Si tienes el proyecto en un repositorio Git:

```bash
git clone <url-del-repositorio>
cd spa-azucena-casanova
```

### 2. Instalar Dependencias

Instala todas las dependencias del proyecto (raíz, frontend y backend):

```bash
npm run install:all
```

O manualmente:

```bash
# Instalar dependencias de la raíz
npm install

# Instalar dependencias del frontend
cd frontend
npm install
cd ..

# Instalar dependencias del backend
cd backend
npm install
cd ..
```

### 3. Configurar PostgreSQL

#### 3.1. Crear la Base de Datos

Abre PostgreSQL (puedes usar pgAdmin o la línea de comandos) y ejecuta:

```sql
CREATE DATABASE spa_azucena_casanova;
```

#### 3.2. Configurar Variables de Entorno

Copia el archivo de ejemplo y edítalo con tus credenciales:

```bash
cd backend
copy .env.example .env
```

Edita el archivo `backend/.env` con tus credenciales de PostgreSQL:

```env
DATABASE_URL="postgresql://usuario:password@localhost:5432/spa_azucena_casanova"
PORT=3001
FRONTEND_URL=http://localhost:5173
```

**Reemplaza:**
- `usuario` con tu usuario de PostgreSQL (normalmente `postgres`)
- `password` con tu contraseña de PostgreSQL
- `localhost:5432` si tu PostgreSQL está en otro host/puerto

### 4. Configurar Prisma

#### 4.1. Generar el Cliente de Prisma

```bash
cd backend
npm run prisma:generate
```

#### 4.2. Ejecutar Migraciones

Esto creará las tablas en la base de datos:

```bash
npm run prisma:migrate
```

Cuando se te pregunte el nombre de la migración, puedes usar: `init`

#### 4.3. Poblar la Base de Datos (Seed)

Ejecuta el seed para crear los servicios iniciales:

```bash
npm run prisma:seed
```

### 5. Ejecutar el Proyecto

#### Opción A: Ejecutar Frontend y Backend Simultáneamente

Desde la raíz del proyecto:

```bash
npm run dev
```

Esto iniciará:
- **Backend** en `http://localhost:3001`
- **Frontend** en `http://localhost:5173`

#### Opción B: Ejecutar por Separado

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

### 6. Verificar que Todo Funciona

1. Abre tu navegador en `http://localhost:5173`
2. Deberías ver la página de inicio del SPA
3. Navega a "Servicios" para ver los servicios cargados desde la base de datos
4. Prueba el formulario de contacto en "Contacto"

## 🔧 Solución de Problemas

### Error: "Cannot find module '@prisma/client'"

Ejecuta:
```bash
cd backend
npm run prisma:generate
```

### Error de Conexión a PostgreSQL

1. Verifica que PostgreSQL esté corriendo:
   ```bash
   # En Windows (PowerShell)
   Get-Service postgresql*
   
   # En Linux/Mac
   sudo systemctl status postgresql
   ```

2. Verifica las credenciales en `backend/.env`

3. Prueba la conexión manualmente:
   ```bash
   psql -U usuario -d spa_azucena_casanova
   ```

### Error: "Port 3001 already in use"

Cambia el puerto en `backend/.env`:
```env
PORT=3002
```

Y actualiza `frontend/vite.config.ts` para apuntar al nuevo puerto.

### Las migraciones fallan

Si hay problemas con las migraciones, puedes resetear la base de datos:

```bash
cd backend
npx prisma migrate reset
```

**⚠️ ADVERTENCIA:** Esto eliminará todos los datos. Luego ejecuta las migraciones y el seed nuevamente.

## 📝 Comandos Útiles

### Backend

```bash
cd backend

# Desarrollo
npm run dev

# Build para producción
npm run build

# Ejecutar en producción
npm start

# Prisma
npm run prisma:generate    # Generar cliente Prisma
npm run prisma:migrate     # Ejecutar migraciones
npm run prisma:seed        # Poblar base de datos
```

### Frontend

```bash
cd frontend

# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 🎨 Personalización

### Cambiar Colores

Los colores están definidos en `frontend/tailwind.config.ts`. Puedes modificar la paleta de colores personalizada allí.

### Agregar Servicios

Puedes agregar servicios directamente en la base de datos o modificar `backend/prisma/seed.ts` y ejecutar el seed nuevamente.

## 📞 Soporte

Si tienes problemas, verifica:
1. Que todas las dependencias estén instaladas
2. Que PostgreSQL esté corriendo
3. Que las variables de entorno estén correctamente configuradas
4. Los logs en la consola para ver errores específicos

## ✅ Checklist de Instalación

- [ ] Node.js instalado
- [ ] PostgreSQL instalado y corriendo
- [ ] Base de datos creada
- [ ] Dependencias instaladas (raíz, frontend, backend)
- [ ] Archivo `.env` configurado en backend
- [ ] Prisma cliente generado
- [ ] Migraciones ejecutadas
- [ ] Seed ejecutado
- [ ] Backend corriendo en puerto 3001
- [ ] Frontend corriendo en puerto 5173
- [ ] Sitio web accesible en el navegador

¡Listo! El proyecto debería estar funcionando correctamente. 🎉

