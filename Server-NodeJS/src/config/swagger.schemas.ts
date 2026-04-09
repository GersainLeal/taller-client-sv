/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       description: Representa un usuario del sistema
 *       required:
 *         - id
 *         - name
 *         - lastName
 *         - age
 *         - email
 *         - engineering
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Carlos
 *         lastName:
 *           type: string
 *           example: Ramírez
 *         age:
 *           type: number
 *           example: 22
 *         email:
 *           type: string
 *           format: email
 *           example: carlos.ramirez@example.com
 *         engineering:
 *           type: string
 *           enum:
 *             - Sistemas
 *             - Electronica
 *             - Biomedica
 *             - Industrial
 *             - Ambiental
 *           example: Sistemas
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       description: Representa un producto del sistema
 *       required:
 *         - id
 *         - name
 *         - category
 *         - price
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Leche entera
 *         category:
 *           type: string
 *           enum:
 *             - Lacteos
 *             - Carnes
 *             - Frutas
 *             - Verduras
 *           example: Lacteos
 *         price:
 *           type: number
 *           example: 4500
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Course:
 *       type: object
 *       description: Representa un curso del sistema
 *       required:
 *         - id
 *         - name
 *         - instructor
 *         - duration
 *         - category
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Angular Avanzado
 *         instructor:
 *           type: string
 *           example: John Doe
 *         duration:
 *           type: number
 *           example: 40
 *         category:
 *           type: string
 *           enum:
 *             - Programming
 *             - Design
 *             - Business
 *             - Marketing
 *             - Data Science
 *           example: Programming
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Teacher:
 *       type: object
 *       description: Representa un docente del sistema
 *       required:
 *         - id
 *         - name
 *         - lastName
 *         - specialty
 *         - experience
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Andres
 *         lastName:
 *           type: string
 *           example: Rojas
 *         specialty:
 *           type: string
 *           enum:
 *             - Software
 *             - Redes
 *             - Seguridad
 *             - Datos
 *             - UX
 *           example: Software
 *         experience:
 *           type: number
 *           example: 8
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Subject:
 *       type: object
 *       description: Representa una asignatura del sistema
 *       required:
 *         - id
 *         - name
 *         - area
 *         - credits
 *         - semester
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Arquitectura de Software
 *         area:
 *           type: string
 *           enum:
 *             - Programacion
 *             - Datos
 *             - Redes
 *             - Gestion
 *             - Diseno
 *           example: Programacion
 *         credits:
 *           type: number
 *           example: 4
 *         semester:
 *           type: number
 *           example: 6
 */
export {};