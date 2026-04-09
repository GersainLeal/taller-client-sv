import { Request, Response } from "express";
import { HandleError } from "../../../domain/erros/handle.error";
import { CoursesService } from "./courses.service";
import { CustomError } from "../../../domain/erros/custom.error";

export class CoursesController {
  private readonly coursesService = new CoursesService();

  getAllCourses = (req: Request, res: Response): void => {
    const { countCourses } = req.params;

    setTimeout(() => {
      this.coursesService
        .getAllCourses(Number(countCourses))
        .then((courses) => res.status(200).json(courses))
        .catch((error) => HandleError.error(error, res));
    }, 3000);
  };
}