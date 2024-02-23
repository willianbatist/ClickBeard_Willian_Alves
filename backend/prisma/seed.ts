import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    // Seed para a tabela User
    await prisma.user.create({
      data: {
        name: 'Admin',
        email: 'admin@clickbeard.com',
        password: '$2b$10$CvcXUhcSdkZiNtAm0IgnM.iCwK2RGVt72lWJKba/ihiVbItcPhXue',
        role: 'admin',
      },
    });
    await prisma.barber.createMany({
      data: [
        {
          name: 'Rogério Ceni',
          age: 51,
          dateHire: new Date(),
          specialties: ['corte de tesoura', 'barba'],
        },
        {
          name: 'Tele Santana',
          age: 35,
          dateHire: new Date(),
          specialties: ['corte de tesoura', 'barba'],
        },
        {
          name: 'Jonathan Calleri',
          age: 30,
          dateHire: new Date(),
          specialties: ['corte degrade', 'sobrancelha'],
        },
        {
          name: 'Rodrigo Nestor',
          age: 23,
          dateHire: new Date(),
          specialties: ['corte degrade', 'tratamento capilar'],
        },
      ],
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();