/**
 * Interfaz que representa un docente.
 *
 * Contiene la informacion basica necesaria para mostrar un docente
 * en la tabla o en cualquier componente de listado.
 */
export interface Teacher {
  /** Identificador unico del docente */
  id: number;

  /** Nombre del docente */
  name: string;

  /** Apellido del docente */
  lastName: string;

  /** Especialidad principal del docente */
  specialty: TeacherSpecialty;

  /** Anios de experiencia del docente */
  experience: number;
}

/**
 * Tipo de especialidad de docente.
 */
export type TeacherSpecialty =
  | 'Software'
  | 'Redes'
  | 'Seguridad'
  | 'Datos'
  | 'UX';
