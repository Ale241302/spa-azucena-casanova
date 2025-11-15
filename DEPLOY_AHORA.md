# 🚀 Deploy Rápido - 5 Minutos

## ⚡ Pasos Rápidos (Sigue en orden)

### 1️⃣ Subir a GitHub (2 min)
```bash
# Si aún no tienes el repo en GitHub, créalo en github.com primero
# Luego ejecuta:
git remote add origin https://github.com/TU_USUARIO/spa-azucena-casanova.git
git push -u origin main
```

### 2️⃣ Railway - Backend + Base de Datos (3 min)

1. Ve a **https://railway.app** → Inicia sesión con GitHub
2. **New Project** → **Add Service** → **Database** → **PostgreSQL**
3. Copia la `DATABASE_URL` (formato: `postgresql://...`)
4. **Add Service** → **GitHub Repo** → Selecciona `spa-azucena-casanova`
5. En el servicio del backend:
   - **Settings** → **Root Directory**: `backend`
   - **Settings** → **Build Command**: `npm install && npm run build`
   - **Settings** → **Start Command**: `npm start`
   - **Variables** → Agrega:
     ```
     DATABASE_URL=<pega la URL de PostgreSQL>
     PORT=3001
     FRONTEND_URL=https://tu-frontend.vercel.app
     NODE_ENV=production
     ```
6. Espera a que termine el deploy
7. Copia la URL del backend (ej: `https://tu-backend.up.railway.app`)
8. **IMPORTANTE**: Ve a **Deploy Logs** → **View Logs** → Terminal y ejecuta:
   ```bash
   npx prisma migrate deploy
   npx prisma db seed
   ```

### 3️⃣ Vercel - Frontend (2 min)

1. Ve a **https://vercel.com** → Inicia sesión con GitHub
2. **Add New Project** → Selecciona `spa-azucena-casanova`
3. Configura:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build` (ya está)
   - **Output Directory**: `dist` (ya está)
4. **Environment Variables** → Agrega:
   ```
   VITE_API_URL=https://tu-backend.up.railway.app
   ```
   (Reemplaza con la URL real de Railway del paso 2)
5. **Deploy**
6. Copia la URL del frontend (ej: `https://tu-proyecto.vercel.app`)

### 4️⃣ Actualizar CORS (1 min)

1. Vuelve a Railway → Backend → **Variables**
2. Actualiza `FRONTEND_URL` con la URL real de Vercel:
   ```
   FRONTEND_URL=https://tu-proyecto.vercel.app
   ```
3. Railway redeployará automáticamente

## ✅ Verificar

- Frontend: Abre la URL de Vercel
- Backend: Abre `https://tu-backend.up.railway.app/api/health`
- Servicios: Deben aparecer en la página de servicios
- Formulario: Prueba enviar un mensaje

## 🎉 ¡Listo!

Tu sitio estará público y funcionando.

