
interface SeedData {
    entries: SeedEntry[];
}

interface SeedEntry {
    description: string;
    status: string;
    createAt: number;
}

export const seedData: SeedData = {
    entries: [
        {
            description: 'Pendiente: Aliquip velit laboris ad aliqua ipsum aliquip exercitation cupidatat enim irure duis incididunt mollit.',
            status: 'pending',
            createAt: Date.now(),
        },
        {
            description: 'En progreso: Ut ad aliquip Lorem ipsum magna ipsum.',
            status: 'in-progress',
            createAt: Date.now() - 1000000,
        },
        {
            description: 'Terminadas: Proident consequat id veniam laboris ad commodo aute consequat ut ad ex pariatur pariatur.',
            status: 'finished',
            createAt: Date.now() - 100000,
        }
    ]
}