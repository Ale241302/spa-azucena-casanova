# SPA Azucena Casanova López

Sitio web completo para el SPA Azucena Casanova López, desarrollado con React + TypeScript y Node.js + Express.

## 🚀 Características

- Frontend moderno con React + TypeScript + Vite
- Estilos con TailwindCSS (diseño minimalista y responsive)
- Backend con Node.js + Express + TypeScript
- Base de datos PostgreSQL con Prisma ORM
- Diseño responsive y optimizado para móviles
- Botón flotante de WhatsApp para contacto directo

## 📋 Requisitos Previos

- Node.js (v18 o superior)
- PostgreSQL (v14 o superior)
- npm o yarn

## 🛠️ Instalación

### 1. Instalar dependencias

```bash
npm run install:all
```

O manualmente:

```bash
npm install
cd frontend && npm install
cd ../backend && npm install
```

### 2. Configurar Base de Datos

1. Crea una base de datos PostgreSQL:

```sql
CREATE DATABASE spa_azucena_casanova;
```

2. Copia el archivo de ejemplo de variables de entorno:

```bash
cp backend/.env.example backend/.env
```

3. Edita `backend/.env` con tus credenciales de PostgreSQL:

```env
DATABASE_URL="postgresql://usuario:password@localhost:5432/spa_azucena_casanova"
PORT=3001
```

### 3. Ejecutar Migraciones

```bash
cd backend
npx prisma migrate dev
npx prisma db seed
```

El seed creará algunos servicios de ejemplo en la base de datos.

## 🏃 Ejecutar el Proyecto

### Desarrollo (Frontend + Backend simultáneamente)

Desde la raíz del proyecto:

```bash
npm run dev
```

Esto iniciará:
- Backend en `http://localhost:3001`
- Frontend en `http://localhost:5173`

### Solo Frontend

```bash
npm run dev:frontend
```

### Solo Backend

```bash
npm run dev:backend
```

## 📁 Estructura del Proyecto

```
spa-azucena-casanova/
├── frontend/          # Aplicación React + TypeScript
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.tsx
│   └── package.json
├── backend/           # API Node.js + Express
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   └── server.ts
│   ├── prisma/
│   │   └── schema.prisma
│   └── package.json
└── package.json       # Workspace root
```

## 🎨 Paleta de Colores

El proyecto utiliza una paleta de colores pastel personalizada definida en `frontend/tailwind.config.ts`:

- **Rosa suave**: `#F8E8E8`
- **Beige**: `#F5F1E8`
- **Verde menta**: `#E8F5E9`
- **Lavanda**: `#F3E5F5`

## 📝 Endpoints de la API

- `GET /api/services` - Obtener lista de servicios
- `POST /api/contact` - Enviar mensaje de contacto

## 🗄️ Base de Datos

### Tablas

- **services**: Información de servicios del SPA
- **contact_messages**: Mensajes recibidos del formulario de contacto

## 📱 Contacto

- **Teléfono**: 3122057768
- **Email**: azucenacalo82@gmail.com
- **Ubicaciones**: 
  - Cartago, Valle del Cauca
  - Obando, Valle del Cauca

## 📄 Licencia

Este proyecto es privado y propiedad de SPA Azucena Casanova López.

