import { Request, Response } from "express";
import { HandleError } from "../../../domain/erros/handle.error";
import { UsersService } from "./users.service";
import { CustomError } from "../../../domain/erros/custom.error";

/**
 * Controlador de usuarios.
 *
 * @remarks
 * Esta clase maneja las peticiones HTTP relacionadas con usuarios,
 * delegando la lógica de negocio al `UsersService`.
 */
export class UsersController {

  /**
   * Servicio de usuarios.
   */
  private readonly usersService = new UsersService();

  /**
   * Maneja la petición HTTP para obtener un listado de usuarios.
   *
   * @remarks
   * El número de usuarios a generar se obtiene desde los
   * parámetros de la ruta.
   *
   * @param req Objeto de petición de Express
   * @param res Objeto de respuesta de Express
   *
   * @example
   * ```http
   * GET /users/10
   * ```
   */
  getAllUsers = (req: Request, res: Response): void => {
    const { countUsers } = req.params;
    const parsedCountUsers = Number(countUsers);

    if (!Number.isInteger(parsedCountUsers) || parsedCountUsers <= 0) {
      HandleError.error(
        CustomError.badRequest('countUsers debe ser un entero mayor a 0'),
        res
      );
      return;
    }

    setTimeout(() => {
      this.usersService
      .getAllUsers(parsedCountUsers)
      .then((users) => res.status(200).json(users))
      .catch((error) => HandleError.error(error, res));
    }, 3000);
  };
}