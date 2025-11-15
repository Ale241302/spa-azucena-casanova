import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Crear servicios
  const services = [
    {
      name: 'Limpieza Facial',
      description: 'Limpieza profunda del rostro que elimina impurezas, células muertas y puntos negros. Incluye exfoliación suave, extracción de comedones y mascarilla hidratante. Ideal para mantener la piel limpia y radiante.',
      durationMinutes: 60,
      price: 80000,
      isActive: true,
    },
    {
      name: 'Masajes Relajantes',
      description: 'Masaje terapéutico diseñado para aliviar el estrés y la tensión muscular. Utiliza técnicas suaves y movimientos circulares que promueven la relajación profunda y el bienestar general del cuerpo.',
      durationMinutes: 60,
      price: 90000,
      isActive: true,
    },
    {
      name: 'Masajes Reductores',
      description: 'Tratamiento corporal enfocado en la reducción de medidas y mejora de la circulación. Combina técnicas de masaje con productos especializados para ayudar a tonificar y moldear el cuerpo.',
      durationMinutes: 90,
      price: 120000,
      isActive: true,
    },
    {
      name: 'Postquirúrgicos',
      description: 'Cuidados especializados post-cirugía estética. Incluye masajes de drenaje linfático, aplicación de productos específicos y técnicas para acelerar la recuperación y reducir la inflamación.',
      durationMinutes: 60,
      price: 100000,
      isActive: true,
    },
  ];

  for (const service of services) {
    await prisma.service.upsert({
      where: { name: service.name },
      update: {},
      create: service,
    });
  }

  console.log('Seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
