/**
 * Interfaz que representa una asignatura.
 *
 * Contiene la informacion basica necesaria para mostrar una asignatura
 * en la tabla o en cualquier componente de listado.
 */
export interface Subject {
  /** Identificador unico de la asignatura */
  id: number;

  /** Nombre de la asignatura */
  name: string;

  /** Area academica principal */
  area: SubjectArea;

  /** Cantidad de creditos */
  credits: number;

  /** Semestre sugerido */
  semester: number;
}

/**
 * Tipo de area academica.
 */
export type SubjectArea =
  | 'Programacion'
  | 'Datos'
  | 'Redes'
  | 'Gestion'
  | 'Diseno';
