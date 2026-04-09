import { Request, Response } from 'express';
import { HandleError } from '../../../domain/erros/handle.error';
import { SubjectsService } from './subjects.service';
import { CustomError } from '../../../domain/erros/custom.error';

export class SubjectsController {
  private readonly subjectsService = new SubjectsService();

  getAllSubjects = (req: Request, res: Response): void => {
    const { countSubjects } = req.params;
    const parsedCountSubjects = Number(countSubjects);

    if (!Number.isInteger(parsedCountSubjects) || parsedCountSubjects <= 0) {
      HandleError.error(
        CustomError.badRequest('countSubjects debe ser un entero mayor a 0'),
        res
      );
      return;
    }

    setTimeout(() => {
      this.subjectsService
        .getAllSubjects(parsedCountSubjects)
        .then((subjects) => res.status(200).json(subjects))
        .catch((error) => HandleError.error(error, res));
    }, 3000);
  };
}
