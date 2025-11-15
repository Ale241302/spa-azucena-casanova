# Guía de Deploy - SPA Azucena Casanova López

Esta guía te ayudará a exponer el sitio web de manera pública con backend y base de datos funcionando.

## 🎯 Opciones de Hosting Recomendadas

### Opción 1: Railway (Recomendado - Todo en uno)
**Ventajas**: Fácil de usar, incluye PostgreSQL gratis, deploy automático desde GitHub

1. **Crear cuenta en Railway**: https://railway.app
2. **Conectar GitHub**: Conecta tu repositorio de GitHub
3. **Crear Base de Datos PostgreSQL**:
   - En Railway, crea un nuevo servicio → PostgreSQL
   - Copia la `DATABASE_URL` que te proporciona
4. **Deploy Backend**:
   - Crea un nuevo servicio → GitHub Repo → Selecciona tu repo
   - En Variables de Entorno, agrega:
     ```
     DATABASE_URL=<la URL de PostgreSQL de Railway>
     PORT=3001
     FRONTEND_URL=https://tu-frontend.vercel.app
     ```
   - En Settings → Deploy, configura:
     - Root Directory: `backend`
     - Build Command: `npm install && npm run build`
     - Start Command: `npm start`
5. **Deploy Frontend** (en Vercel o Netlify):
   - Ve a Vercel.com o Netlify.com
   - Conecta tu repositorio de GitHub
   - Configura:
     - Root Directory: `frontend`
     - Build Command: `npm run build`
     - Output Directory: `dist`
   - Agrega variable de entorno:
     ```
     VITE_API_URL=https://tu-backend.railway.app
     ```

### Opción 2: Render (Todo en uno)
**Ventajas**: Incluye PostgreSQL, fácil configuración

1. **Crear cuenta en Render**: https://render.com
2. **Base de Datos PostgreSQL**:
   - New → PostgreSQL
   - Copia la `Internal Database URL`
3. **Backend**:
   - New → Web Service → Conecta GitHub
   - Root Directory: `backend`
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
   - Variables de entorno:
     ```
     DATABASE_URL=<URL de PostgreSQL de Render>
     PORT=3001
     FRONTEND_URL=https://tu-frontend.vercel.app
     ```
4. **Frontend** (en Vercel):
   - Mismo proceso que en Opción 1

### Opción 3: Vercel (Frontend) + Railway/Render (Backend + DB)
**Ventajas**: Vercel es excelente para frontend React, gratis

## 📋 Preparación del Proyecto

### 1. Actualizar Variables de Entorno

El proyecto ya está preparado para producción. Solo necesitas:

**Backend (.env en producción)**:
```env
DATABASE_URL=<URL de PostgreSQL del hosting>
PORT=3001
FRONTEND_URL=https://tu-frontend.vercel.app
```

**Frontend (variables de entorno en Vercel/Netlify)**:
```env
VITE_API_URL=https://tu-backend.railway.app
```

### 2. Ejecutar Migraciones en Producción

Después de hacer deploy del backend, ejecuta las migraciones:

```bash
# En Railway/Render, usa el terminal web o CLI
cd backend
npx prisma migrate deploy
npx prisma db seed
```

O agrega esto al script de build del backend.

## 🚀 Pasos Detallados para Railway (Recomendado)

### Paso 1: Crear Base de Datos
1. Ve a Railway.app → New Project
2. Add Service → Database → PostgreSQL
3. Copia la `DATABASE_URL` (formato: `postgresql://user:pass@host:port/db`)

### Paso 2: Deploy Backend
1. Add Service → GitHub Repo → Selecciona tu repo
2. En Settings:
   - Root Directory: `backend`
   - Build Command: `npm install && npm run prisma:generate && npm run build`
   - Start Command: `npm start`
3. En Variables:
   ```
   DATABASE_URL=<URL de PostgreSQL>
   PORT=3001
   FRONTEND_URL=https://tu-frontend.vercel.app
   NODE_ENV=production
   ```
4. Railway generará una URL como: `https://tu-backend.up.railway.app`

### Paso 3: Ejecutar Migraciones
1. En Railway, abre el terminal del servicio backend
2. Ejecuta:
   ```bash
   npx prisma migrate deploy
   npx prisma db seed
   ```

### Paso 4: Deploy Frontend en Vercel
1. Ve a vercel.com → New Project
2. Conecta tu repositorio de GitHub
3. Configura:
   - Framework Preset: Vite
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Variables de entorno:
   ```
   VITE_API_URL=https://tu-backend.up.railway.app
   ```
5. Deploy

### Paso 5: Actualizar CORS en Backend
Actualiza `FRONTEND_URL` en el backend con la URL real de Vercel:
```
FRONTEND_URL=https://tu-proyecto.vercel.app
```

## 🔧 Configuración Adicional

### Actualizar CORS en el Backend
El backend ya está configurado para aceptar requests del frontend. Solo asegúrate de que `FRONTEND_URL` tenga la URL correcta.

### Verificar que Todo Funciona
1. Frontend: Debe cargar en la URL de Vercel
2. Backend: Prueba `https://tu-backend.railway.app/api/health`
3. Servicios: Deben aparecer en la página de servicios
4. Formulario de contacto: Debe guardar mensajes en la BD

## 📝 Notas Importantes

- **Seguridad**: Nunca subas el archivo `.env` con credenciales reales a GitHub
- **Base de Datos**: Los servicios gratuitos suelen tener límites (Railway: 500MB, Render: 90 días gratis)
- **Variables de Entorno**: Configúralas en el panel de cada servicio, no en archivos locales
- **CORS**: Asegúrate de que `FRONTEND_URL` en el backend coincida con la URL real del frontend

## 🆘 Solución de Problemas

### Backend no conecta a la BD
- Verifica que `DATABASE_URL` esté correcta
- Asegúrate de ejecutar las migraciones: `npx prisma migrate deploy`

### Frontend no carga servicios
- Verifica que `VITE_API_URL` apunte al backend correcto
- Revisa la consola del navegador para errores CORS
- Asegúrate de que el backend esté corriendo

### Error 404 en API
- Verifica que la URL del backend sea correcta
- Asegúrate de que el backend esté desplegado y corriendo

## 💡 Alternativas Gratuitas

- **Supabase**: PostgreSQL gratis + hosting
- **Neon**: PostgreSQL serverless gratis
- **Fly.io**: Hosting gratis con PostgreSQL
- **PlanetScale**: MySQL gratis (requeriría cambios)

