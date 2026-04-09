import { Product } from "../interfaces/products.interface";

/**
 * Mock de productos para pruebas unitarias y ejemplos de UI.
 *
 * @remarks
 * Este arreglo simula una respuesta de catálogo desde el backend
 * y se utiliza en specs del módulo de productos.
 */
export const PRODUCTS_MOCK: Product[] = [
    {
        id: 1,
        name: 'Leche entera',
        category: 'Lacteos',
        price: 4500,
    },
    {
        id: 2,
        name: 'Manzana roja',
        category: 'Frutas',
        price: 3200,
    }
];