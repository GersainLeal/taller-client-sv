import { faker } from '@faker-js/faker';
import { Course, CourseCategory } from '../../../domain/interfaces/course.interface';

export class CoursesService {
  private categories: CourseCategory[] = [
    'Programming',
    'Design',
    'Business',
    'Marketing',
    'Data Science'
  ];

  private courseTitles: string[] = [
    'Fundamentos de Programacion Web',
    'Diseno de Interfaces de Usuario',
    'Analisis de Datos para Negocios',
    'Marketing Digital para Emprendedores',
    'Introduccion a Ciencia de Datos',
    'Arquitectura de Software Moderna',
    'Gestion de Proyectos Agiles',
    'Bases de Datos Relacionales',
    'Visualizacion de Datos con Dashboard',
    'Desarrollo Frontend con Angular'
  ];

  private instructorNames: string[] = [
    'Andres Rojas',
    'Valentina Morales',
    'Camilo Herrera',
    'Daniela Pineda',
    'Santiago Cardenas',
    'Laura Jimenez',
    'Sebastian Castillo',
    'Paula Ramirez',
    'Mateo Gonzalez',
    'Natalia Duarte'
  ];

  public async getAllCourses(countCourses: number): Promise<Course[]> {
    const courses: Promise<Course>[] = [];
    for (let i = 1; i <= countCourses; i++) {
      courses.push(this.generateCourse(i));
    }
    return Promise.all(courses);
  }

  private generateCourse(id: number): Promise<Course> {
    return Promise.resolve({
      id,
      name: faker.helpers.arrayElement(this.courseTitles),
      instructor: faker.helpers.arrayElement(this.instructorNames),
      duration: faker.number.int({ min: 10, max: 120 }),
      category: faker.helpers.arrayElement(this.categories),
    });
  }
}