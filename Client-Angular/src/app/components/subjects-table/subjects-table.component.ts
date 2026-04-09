import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { Subject, SubjectArea } from '../../interfaces/subjects.interface';

/**
 * Componente de tabla de asignaturas.
 */
@Component({
  selector: 'app-subjects-table',
  templateUrl: './subjects-table.component.html',
  imports: [CommonModule, BadgeAtom],
})
export class SubjectsTableComponent {
  /**
   * Listado de asignaturas que se mostraran en la tabla.
   */
  @Input() subjects: Subject[] = [];

  /**
   * Mapeo de areas a tipos de Badge.
   */
  areaMap: Record<SubjectArea, BadgeType> = {
    Programacion: 'primary',
    Datos: 'success',
    Redes: 'warning',
    Gestion: 'danger',
    Diseno: 'secondary',
  };
}
