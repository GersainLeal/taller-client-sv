import { faker } from '@faker-js/faker';
import { Teacher, TeacherSpecialty } from '../../../domain/interfaces/teacher.interface';

export class TeachersService {
  private specialties: TeacherSpecialty[] = [
    'Software',
    'Redes',
    'Seguridad',
    'Datos',
    'UX',
  ];

  private colombianNames: string[] = [
    'Santiago',
    'Camila',
    'Andres',
    'Valentina',
    'Mateo',
    'Laura',
    'Sebastian',
    'Daniela',
    'Juan',
    'Paula',
    'Nicolas',
    'Maria',
  ];

  private colombianLastNames: string[] = [
    'Rodriguez',
    'Gomez',
    'Gonzalez',
    'Martinez',
    'Lopez',
    'Perez',
    'Ramirez',
    'Hernandez',
    'Torres',
    'Diaz',
    'Moreno',
    'Rojas',
  ];

  public async getAllTeachers(countTeachers: number): Promise<Teacher[]> {
    const teachers: Promise<Teacher>[] = [];

    for (let i = 1; i <= countTeachers; i++) {
      teachers.push(this.generateTeacher(i));
    }

    return Promise.all(teachers);
  }

  private generateTeacher(id: number): Promise<Teacher> {
    return Promise.resolve({
      id,
      name: faker.helpers.arrayElement(this.colombianNames),
      lastName: faker.helpers.arrayElement(this.colombianLastNames),
      specialty: faker.helpers.arrayElement(this.specialties),
      experience: faker.number.int({ min: 1, max: 25 }),
    });
  }
}
