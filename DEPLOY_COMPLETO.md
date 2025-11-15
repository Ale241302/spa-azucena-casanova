# 🚀 Deploy Completo - SPA Azucena Casanova

**Usuario GitHub:** Ale241302  
**Repositorio:** https://github.com/Ale241302/spa-azucena-casanova

---

## ✅ PASO 1: Crear Repositorio en GitHub (2 min)

1. Ve a **https://github.com/new**
2. **Repository name**: `spa-azucena-casanova`
3. **Description**: "Sitio web del SPA Azucena Casanova López"
4. **Visibilidad**: Private (recomendado) o Public
5. **NO marques** "Initialize with README"
6. Click **"Create repository"**

---

## ✅ PASO 2: Subir Código a GitHub (1 min)

Ejecuta estos comandos en PowerShell:

```powershell
cd C:\Users\ale13\OneDrive\Escritorio\spa-azucena-casanova
git push -u origin main
```

Si te pide credenciales:
- **Usuario**: Ale241302
- **Contraseña**: Usa un **Personal Access Token**
  - Ve a: https://github.com/settings/tokens
  - Click **"Generate new token (classic)"**
  - Nombre: "Deploy SPA"
  - Marca: `repo` (todos los permisos)
  - Click **"Generate token"**
  - Copia el token y úsalo como contraseña

---

## ✅ PASO 3: Railway - Backend + Base de Datos (5 min)

### 3.1 Crear Base de Datos PostgreSQL

1. Ve a **https://railway.app**
2. Click **"Login"** → **"Login with GitHub"** → Autoriza Railway
3. Click **"New Project"**
4. Click **"Add Service"** → **"Database"** → **"PostgreSQL"**
5. Espera a que se cree (30 segundos)
6. Click en el servicio PostgreSQL
7. Ve a la pestaña **"Variables"**
8. Copia el valor de **`DATABASE_URL`** (formato: `postgresql://...`)
   - ⚠️ **GUARDA ESTA URL**, la necesitarás después

### 3.2 Deploy Backend

1. En el mismo proyecto Railway, click **"Add Service"** → **"GitHub Repo"**
2. Selecciona **"spa-azucena-casanova"** → Click **"Deploy Now"**
3. Espera a que aparezca el servicio (puede tardar 1-2 min)
4. Click en el servicio del backend
5. Ve a **"Settings"**:
   - **Root Directory**: Escribe `backend`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - Click **"Save"**
6. Ve a **"Variables"** y agrega estas variables (click **"New Variable"** para cada una):

   ```
   DATABASE_URL = <pega la URL de PostgreSQL que copiaste>
   PORT = 3001
   FRONTEND_URL = https://tu-frontend.vercel.app
   NODE_ENV = production
   ```

7. Railway redeployará automáticamente
8. Espera a que termine el deploy (2-3 minutos)
9. Ve a la pestaña **"Settings"** → Copia la **"Public Domain"** (ej: `https://xxx.up.railway.app`)
   - ⚠️ **GUARDA ESTA URL**, la necesitarás para Vercel

### 3.3 Ejecutar Migraciones

1. En Railway → Backend → Click **"Deploy Logs"**
2. Click **"View Logs"** → Se abrirá una terminal
3. Ejecuta estos comandos uno por uno:

   ```bash
   npx prisma migrate deploy
   ```

   Espera a que termine, luego:

   ```bash
   npx prisma db seed
   ```

4. Deberías ver mensajes de éxito

---

## ✅ PASO 4: Vercel - Frontend (3 min)

### 4.1 Deploy Frontend

1. Ve a **https://vercel.com**
2. Click **"Sign Up"** → **"Continue with GitHub"** → Autoriza Vercel
3. Click **"Add New Project"**
4. Selecciona el repositorio **"spa-azucena-casanova"**
5. En **"Configure Project"**:
   - **Framework Preset**: Vite (debería detectarse automáticamente)
   - **Root Directory**: Escribe `frontend`
   - **Build Command**: `npm run build` (ya está configurado)
   - **Output Directory**: `dist` (ya está configurado)
6. Click **"Environment Variables"** → Click **"Add"**:
   - **Key**: `VITE_API_URL`
   - **Value**: `https://tu-backend.up.railway.app` (reemplaza con la URL real de Railway del paso 3.2)
   - Click **"Save"**
7. Click **"Deploy"**
8. Espera a que termine el deploy (2-3 minutos)
9. Cuando termine, verás **"Congratulations!"**
10. Copia la URL del proyecto (ej: `https://spa-azucena-casanova.vercel.app`)
    - ⚠️ **GUARDA ESTA URL**, la necesitarás para actualizar CORS

---

## ✅ PASO 5: Actualizar CORS en Railway (1 min)

1. Vuelve a **Railway** → Click en el servicio del **Backend**
2. Ve a **"Variables"**
3. Encuentra `FRONTEND_URL` → Click en el lápiz (editar)
4. Cambia el valor a la URL real de Vercel:
   ```
   https://tu-proyecto.vercel.app
   ```
   (Reemplaza con la URL real que copiaste en el paso 4.1)
5. Click **"Save"**
6. Railway redeployará automáticamente (espera 1-2 min)

---

## ✅ PASO 6: Verificar que Todo Funciona

### 6.1 Verificar Backend
Abre en tu navegador:
```
https://tu-backend.up.railway.app/api/health
```

Deberías ver:
```json
{"status":"ok","message":"SPA Azucena Casanova API is running"}
```

### 6.2 Verificar Frontend
Abre en tu navegador la URL de Vercel:
```
https://tu-proyecto.vercel.app
```

Deberías ver:
- ✅ El sitio carga correctamente
- ✅ Los servicios aparecen en la página "Servicios"
- ✅ El formulario de contacto funciona

### 6.3 Probar Formulario
1. Ve a la página **"Contacto"**
2. Llena el formulario
3. Click **"Enviar Mensaje"**
4. Deberías ver un mensaje de éxito
5. El mensaje se guardará en la base de datos de Railway

---

## 🎉 ¡LISTO!

Tu sitio está público y funcionando:

- **Frontend**: https://tu-proyecto.vercel.app
- **Backend**: https://tu-backend.up.railway.app
- **Base de Datos**: PostgreSQL en Railway

---

## 🔧 Si Algo Sale Mal

### Backend no conecta a BD
- Verifica que `DATABASE_URL` en Railway sea correcta
- Ejecuta de nuevo: `npx prisma migrate deploy`

### Frontend no carga servicios
- Verifica que `VITE_API_URL` en Vercel sea correcta
- Debe ser: `https://tu-backend.up.railway.app` (sin `/api` al final)
- Revisa la consola del navegador (F12) para ver errores

### Error CORS
- Verifica que `FRONTEND_URL` en Railway sea exactamente la URL de Vercel
- Debe ser: `https://tu-proyecto.vercel.app` (sin barra final)

---

## 📝 URLs Finales

Guarda estas URLs:

- **Frontend (Vercel)**: _________________________
- **Backend (Railway)**: _________________________
- **Repositorio GitHub**: https://github.com/Ale241302/spa-azucena-casanova

---

**¿Necesitas ayuda?** Revisa los logs en Railway y Vercel para ver errores específicos.

