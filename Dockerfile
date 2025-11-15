FROM node:18-alpine AS builder

WORKDIR /app

# Copiar package.json y package-lock.json
COPY backend/package*.json ./

# Instalar todas las dependencias
RUN npm ci

# Copiar archivos necesarios para Prisma
COPY backend/prisma ./prisma
COPY backend/tsconfig.json ./

# Generar Prisma Client
RUN npx prisma generate

# Copiar código fuente
COPY backend/src ./src

# Compilar TypeScript
RUN npm run build

# Imagen de producción
FROM node:18-alpine

WORKDIR /app

# Copiar solo lo necesario para producción
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

# Exponer puerto
EXPOSE 3001

# Comando de inicio
CMD ["node", "dist/server.js"]

