FROM node:18-alpine AS builder

WORKDIR /app

# Instalar OpenSSL para Prisma
RUN apk add --no-cache openssl1.1-compat

# Copiar package.json y package-lock.json
COPY backend/package*.json ./

# Copiar archivos necesarios para Prisma ANTES de npm install
COPY backend/prisma ./prisma
COPY backend/tsconfig.json ./

# Instalar dependencias (sin postinstall)
RUN npm install --ignore-scripts

# Generar Prisma Client manualmente después de instalar
RUN npx prisma generate

# Copiar código fuente
COPY backend/src ./src

# Compilar TypeScript
RUN npm run build

# Imagen de producción
FROM node:18-alpine

WORKDIR /app

# Instalar OpenSSL para Prisma
RUN apk add --no-cache openssl1.1-compat

# Copiar solo lo necesario para producción
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

# Exponer puerto
EXPOSE 3001

# Comando de inicio
CMD ["node", "dist/server.js"]

