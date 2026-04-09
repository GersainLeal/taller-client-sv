import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { Teacher, TeacherSpecialty } from '../../interfaces/teachers.interface';

/**
 * Componente de tabla de docentes.
 *
 * Se utiliza para mostrar un listado de docentes en una tabla,
 * mostrando informacion como nombre, apellido, especialidad y experiencia.
 */
@Component({
  selector: 'app-teachers-table',
  templateUrl: './teachers-table.component.html',
  imports: [CommonModule, BadgeAtom],
})
export class TeachersTableComponent {
  /**
   * Listado de docentes que se mostraran en la tabla.
   */
  @Input() teachers: Teacher[] = [];

  /**
   * Mapeo de especialidades a tipos de Badge.
   */
  specialtyMap: Record<TeacherSpecialty, BadgeType> = {
    Software: 'primary',
    Redes: 'warning',
    Seguridad: 'danger',
    Datos: 'success',
    UX: 'secondary',
  };
}
