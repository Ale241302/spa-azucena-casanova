# Solución Error Railway - Missing script prisma:generate

## Problema
Railway está ejecutando el comando desde la raíz del proyecto, no desde `backend/`.

## Solución

En Railway → Settings → Build Command, cambia a:

```
cd backend && npm install && npm run prisma:generate && npm run build
```

O mejor aún:

```
cd backend && npm install && npx prisma generate && npm run build
```

## Configuración Completa en Railway Settings

**Root Directory:**
```
backend
```

**Build Command:**
```
cd backend && npm install && npx prisma generate && npm run build
```

**Start Command:**
```
cd backend && npm start
```

O si Root Directory está bien configurado, simplemente:

**Root Directory:**
```
backend
```

**Build Command:**
```
npm install && npx prisma generate && npm run build
```

**Start Command:**
```
npm start
```

## Alternativa: Usar el script postinstall

Si Root Directory está configurado como `backend`, puedes usar:

**Build Command:**
```
npm install && npm run build
```

Porque `postinstall` en package.json ya ejecuta `prisma generate` automáticamente.

