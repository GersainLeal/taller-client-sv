import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { Course, CourseCategory } from '../../interfaces/courses.interface';

/**
 * Componente de tabla de cursos.
 *
 * Se utiliza para mostrar un listado de cursos en una tabla,
 * mostrando informacion como nombre, instructor, duracion y un badge
 * visual que indica la categoria de cada curso.
 *
 * @remarks
 * Este componente recibe los cursos desde un componente padre
 * a traves del Input `courses` y utiliza el mapeo `categoryMap`
 * para asignar colores a los badges segun la categoria.
 *
 * Forma parte de la capa de presentacion de la aplicacion y se considera
 * un organismo dentro del sistema de diseno atomico.
 *
 * @example
 * ```html
 * <app-courses-table [courses]="coursesList"></app-courses-table>
 * ```
 */
@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  imports: [CommonModule, BadgeAtom],
})
export class CoursesTableComponent {
  /**
   * Listado de cursos que se mostraran en la tabla.
   * @type {Course[]}
   */
  @Input() courses: Course[] = [];

  /**
   * Mapeo de categorias de cursos a tipos de Badge.
   * @type {Record<CourseCategory, BadgeType>}
   */
  categoryMap: Record<CourseCategory, BadgeType> = {
    'Programming': 'primary',
    'Design': 'warning',
    'Business': 'success',
    'Marketing': 'danger',
    'Data Science': 'secondary',
  };
}
