# Solución Error Deploy en Railway

## Posibles Causas y Soluciones

### 1. Verificar los Logs del Deploy

En Railway:
1. Ve a **"Deploy Logs"** → **"View Logs"**
2. Lee los últimos mensajes de error
3. Busca líneas que digan "Error" o "Failed"

### 2. Verificar Configuración en Settings

Asegúrate de que en **Settings** tengas:

**Root Directory:**
```
backend
```

**Build Command:**
```
npm install && npm run prisma:generate && npm run build
```

**Start Command:**
```
npm start
```

### 3. Verificar que las Variables Estén Configuradas

En **Variables**, asegúrate de tener:
- `DATABASE_URL` (debe tener valor)
- `PORT` = `3001`
- `NODE_ENV` = `production`

### 4. Error Común: Prisma no encuentra el schema

Si el error menciona Prisma, prueba cambiar el Build Command a:
```
cd backend && npm install && npx prisma generate && npm run build
```

### 5. Error Común: No encuentra package.json

Si el error dice que no encuentra package.json, verifica:
- Root Directory debe ser exactamente: `backend` (sin espacios, sin barras)
- El repositorio debe tener la carpeta `backend/` con `package.json` dentro

### 6. Solución Alternativa: Usar Nixpacks

Si sigue fallando:
1. En Settings → **Builder**
2. Cambia a **"Nixpacks"** (si está disponible)
3. Deja el Build Command vacío o usa: `npm install && npm run build`

### 7. Verificar que el Código Esté en GitHub

Asegúrate de que el código esté subido:
- Ve a https://github.com/Ale241302/spa-azucena-casanova
- Verifica que exista la carpeta `backend/`
- Verifica que exista `backend/package.json`

## Pasos para Diagnosticar

1. **Copia el error completo** de los logs
2. **Verifica la configuración** en Settings
3. **Verifica las variables** en Variables
4. **Intenta hacer Redeploy** después de corregir

## Si Nada Funciona

Puedes intentar:
1. Eliminar el servicio en Railway
2. Crearlo de nuevo desde cero
3. Seguir los pasos de configuración cuidadosamente

