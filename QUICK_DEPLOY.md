# 🚀 Deploy Rápido - SPA Azucena Casanova

## Opción Más Rápida: Railway (Todo en uno)

### Paso 1: Crear Base de Datos PostgreSQL
1. Ve a https://railway.app y crea una cuenta (con GitHub)
2. **New Project** → **Add Service** → **Database** → **PostgreSQL**
3. Copia la `DATABASE_URL` (formato: `postgresql://...`)

### Paso 2: Deploy Backend
1. En el mismo proyecto Railway: **Add Service** → **GitHub Repo**
2. Selecciona tu repositorio `spa-azucena-casanova`
3. En **Settings**:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
4. En **Variables**:
   ```
   DATABASE_URL=<pega la URL de PostgreSQL>
   PORT=3001
   FRONTEND_URL=https://tu-frontend.vercel.app
   NODE_ENV=production
   ```
5. Railway generará una URL como: `https://tu-backend.up.railway.app`
6. **IMPORTANTE**: Después del primer deploy, ve a **Deploy Logs** → **View Logs** → Ejecuta:
   ```bash
   npx prisma migrate deploy
   npx prisma db seed
   ```

### Paso 3: Deploy Frontend en Vercel
1. Ve a https://vercel.com y crea una cuenta (con GitHub)
2. **Add New Project** → Selecciona tu repositorio
3. Configura:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build` (ya está configurado)
   - **Output Directory**: `dist` (ya está configurado)
4. En **Environment Variables**:
   ```
   VITE_API_URL=https://tu-backend.up.railway.app
   ```
   (Reemplaza con la URL real de Railway)
5. **Deploy**

### Paso 4: Actualizar CORS
1. Vuelve a Railway → Backend → **Variables**
2. Actualiza `FRONTEND_URL` con la URL real de Vercel:
   ```
   FRONTEND_URL=https://tu-proyecto.vercel.app
   ```
3. Railway redeployará automáticamente

## ✅ Verificar que Funciona

1. **Frontend**: Abre la URL de Vercel → Debe cargar el sitio
2. **Backend**: Abre `https://tu-backend.up.railway.app/api/health` → Debe responder `{"status":"ok"}`
3. **Servicios**: En el sitio, ve a "Servicios" → Deben aparecer los 4 servicios
4. **Formulario**: Prueba enviar un mensaje de contacto → Debe guardarse en la BD

## 🔧 Solución Rápida de Problemas

### Backend no conecta a BD
```bash
# En Railway → Backend → View Logs → Terminal
npx prisma migrate deploy
npx prisma db seed
```

### Frontend no carga servicios
- Verifica que `VITE_API_URL` en Vercel sea correcta
- Revisa la consola del navegador (F12) para ver errores
- Asegúrate de que el backend esté corriendo

### Error CORS
- Verifica que `FRONTEND_URL` en Railway tenga la URL exacta de Vercel
- Debe ser `https://tu-proyecto.vercel.app` (sin barra final)

## 📝 URLs que Necesitarás

- **Backend Railway**: `https://tu-backend.up.railway.app`
- **Frontend Vercel**: `https://tu-proyecto.vercel.app`
- **Base de Datos**: Se configura automáticamente en Railway

## 💰 Costos

- **Railway**: $5/mes después del trial (incluye PostgreSQL)
- **Vercel**: Gratis para proyectos personales
- **Total**: ~$5/mes

## 🎉 ¡Listo!

Tu sitio estará público y funcionando con backend y base de datos.

