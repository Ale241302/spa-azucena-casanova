import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export const createContactMessage = async (req: Request, res: Response) => {
  try {
    const { name, email, phone, message }: ContactRequest = req.body;

    // Validación básica
    if (!name || !email || !message) {
      return res.status(400).json({
        error: 'Los campos nombre, email y mensaje son obligatorios',
      });
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: 'El formato del email no es válido',
      });
    }

    const contactMessage = await prisma.contactMessage.create({
      data: {
        name,
        email,
        phone: phone || null,
        message,
      },
    });

    res.status(201).json({
      message: 'Mensaje enviado correctamente',
      data: contactMessage,
    });
  } catch (error) {
    console.error('Error creating contact message:', error);
    res.status(500).json({ error: 'Error al enviar el mensaje' });
  }
};

