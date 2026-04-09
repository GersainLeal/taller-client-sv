import { Request, Response } from 'express';
import { HandleError } from '../../../domain/erros/handle.error';
import { TeachersService } from './teachers.service';
import { CustomError } from '../../../domain/erros/custom.error';

export class TeachersController {
  private readonly teachersService = new TeachersService();

  getAllTeachers = (req: Request, res: Response): void => {
    const { countTeachers } = req.params;
    const parsedCountTeachers = Number(countTeachers);

    if (!Number.isInteger(parsedCountTeachers) || parsedCountTeachers <= 0) {
      HandleError.error(
        CustomError.badRequest('countTeachers debe ser un entero mayor a 0'),
        res
      );
      return;
    }

    setTimeout(() => {
      this.teachersService
        .getAllTeachers(parsedCountTeachers)
        .then((teachers) => res.status(200).json(teachers))
        .catch((error) => HandleError.error(error, res));
    }, 3000);
  };
}
