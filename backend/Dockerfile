FROM node:18-alpine

WORKDIR /app

# Instalar OpenSSL para Prisma
RUN apk add --no-cache openssl openssl-dev

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar todas las dependencias
RUN npm install

# Copiar archivos necesarios para Prisma
COPY prisma ./prisma
COPY tsconfig.json ./

# Generar Prisma Client
RUN npx prisma generate

# Copiar código fuente
COPY src ./src

# Compilar TypeScript
RUN npm run build

# Ejecutar migraciones (se ejecutará en runtime, no en build)
# Las migraciones se ejecutarán al iniciar el contenedor

# Exponer puerto
EXPOSE 3001

# Comando de inicio
CMD ["node", "dist/server.js"]

