import { User } from "../interfaces/users.interface";

/**
 * Mock de usuarios para pruebas unitarias y ejemplos de UI.
 *
 * @remarks
 * Este arreglo representa una respuesta típica del backend
 * y se reutiliza en specs del módulo de usuarios.
 */
export const USERS_MOCK: User[] = [
    {
        id: 1,
        name: 'Carlos',
        lastName: 'Ramírez',
        age: 22,
        email: 'carlos.ramirez@example.com',
        engineering: 'Sistemas',
    },
    {
        id: 2,
        name: 'Ana',
        lastName: 'Gómez',
        age: 24,
        email: 'ana.gomez@example.com',
        engineering: 'Industrial',
    }
];