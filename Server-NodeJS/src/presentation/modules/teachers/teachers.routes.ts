import { Router } from 'express';
import { TeachersController } from './teachers.controller';

export class TeachersRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new TeachersController();

    /**
     * @openapi
     * /api/teachers/{countTeachers}:
     *   get:
     *     summary: Obtener listado de docentes
     *     description: Retorna una lista de docentes generados dinamicamente.
     *     tags:
     *       - Teachers
     *     parameters:
     *       - in: path
     *         name: countTeachers
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *           example: 10
     *         description: Cantidad de docentes a generar
     *     responses:
     *       200:
     *         description: Lista de docentes generados
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Teacher'
     *       400:
     *         description: Parametro invalido
     */
    router.get('/:countTeachers', controller.getAllTeachers);

    return router;
  }
}
