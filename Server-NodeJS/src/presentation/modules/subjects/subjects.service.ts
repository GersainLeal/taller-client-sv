import { faker } from '@faker-js/faker';
import { Subject, SubjectArea } from '../../../domain/interfaces/subject.interface';

export class SubjectsService {
  private areas: SubjectArea[] = [
    'Programacion',
    'Datos',
    'Redes',
    'Gestion',
    'Diseno',
  ];

  private subjectNames: string[] = [
    'Arquitectura de Software',
    'Programacion Orientada a Objetos',
    'Bases de Datos Avanzadas',
    'Redes de Computadores',
    'Gestion de Proyectos TI',
    'Diseno de Experiencia de Usuario',
    'Ingenieria de Requisitos',
    'Sistemas Distribuidos',
    'Analitica de Datos',
    'Seguridad Informatica',
  ];

  public async getAllSubjects(countSubjects: number): Promise<Subject[]> {
    const subjects: Promise<Subject>[] = [];

    for (let i = 1; i <= countSubjects; i++) {
      subjects.push(this.generateSubject(i));
    }

    return Promise.all(subjects);
  }

  private generateSubject(id: number): Promise<Subject> {
    return Promise.resolve({
      id,
      name: faker.helpers.arrayElement(this.subjectNames),
      area: faker.helpers.arrayElement(this.areas),
      credits: faker.number.int({ min: 2, max: 5 }),
      semester: faker.number.int({ min: 1, max: 10 }),
    });
  }
}
