import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import { servicesRouter } from './routes/services';
import { contactRouter } from './routes/contact';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';

// Inicializar Prisma y verificar conexión
const prisma = new PrismaClient();

// Verificar conexión a la base de datos al iniciar
prisma.$connect()
  .then(() => {
    console.log('✅ Conectado a la base de datos');
  })
  .catch((error) => {
    console.error('❌ Error conectando a la base de datos:', error);
  });

// Middlewares
app.use(cors({
  origin: FRONTEND_URL.includes(',') 
    ? FRONTEND_URL.split(',').map(url => url.trim())
    : FRONTEND_URL,
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/services', servicesRouter);
app.use('/api/contact', contactRouter);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'SPA Azucena Casanova API is running' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

