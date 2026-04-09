export interface Subject {
  id: number;
  name: string;
  area: SubjectArea;
  credits: number;
  semester: number;
}

export type SubjectArea =
  | 'Programacion'
  | 'Datos'
  | 'Redes'
  | 'Gestion'
  | 'Diseno';
