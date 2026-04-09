export interface Teacher {
  id: number;
  name: string;
  lastName: string;
  specialty: TeacherSpecialty;
  experience: number;
}

export type TeacherSpecialty =
  | 'Software'
  | 'Redes'
  | 'Seguridad'
  | 'Datos'
  | 'UX';
