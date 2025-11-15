FROM node:18-alpine

WORKDIR /app

# Copiar package.json y package-lock.json
COPY backend/package*.json ./

# Instalar dependencias
RUN npm ci --only=production

# Copiar archivos necesarios para Prisma
COPY backend/prisma ./prisma
COPY backend/tsconfig.json ./

# Generar Prisma Client
RUN npx prisma generate

# Copiar código fuente
COPY backend/src ./src

# Compilar TypeScript
RUN npm run build

# Exponer puerto
EXPOSE 3001

# Comando de inicio
CMD ["node", "dist/server.js"]

