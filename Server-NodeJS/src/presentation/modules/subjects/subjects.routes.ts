import { Router } from 'express';
import { SubjectsController } from './subjects.controller';

export class SubjectsRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new SubjectsController();

    /**
     * @openapi
     * /api/subjects/{countSubjects}:
     *   get:
     *     summary: Obtener listado de asignaturas
     *     description: Retorna una lista de asignaturas generadas dinamicamente.
     *     tags:
     *       - Subjects
     *     parameters:
     *       - in: path
     *         name: countSubjects
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *           example: 10
     *         description: Cantidad de asignaturas a generar
     *     responses:
     *       200:
     *         description: Lista de asignaturas generadas
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Subject'
     *       400:
     *         description: Parametro invalido
     */
    router.get('/:countSubjects', controller.getAllSubjects);

    return router;
  }
}
