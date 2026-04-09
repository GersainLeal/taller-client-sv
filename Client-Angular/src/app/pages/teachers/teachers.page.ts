import { Component, inject } from '@angular/core';
import { AlertComponent } from '../../components/alert/alert.component';
import { TeachersTableComponent } from '../../components/teachers-table/teachers-table.component';
import { State } from '../../interfaces/state.interface';
import { Teacher } from '../../interfaces/teachers.interface';
import { TeachersService } from '../../services/teachers/teachers.service';

/**
 * Componente contenedor de docentes.
 *
 * Se utiliza para gestionar y mostrar un listado de docentes
 * utilizando el componente `TeachersTableComponent`.
 */
@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.page.html',
  imports: [TeachersTableComponent, AlertComponent],
})
export class TeachersPage {
  /**
   * Listado de docentes obtenidos desde el servicio.
   */
  teachers: Teacher[] = [];

  /**
   * Estado actual del componente.
   */
  state: State = 'init';

  /**
   * Servicio para obtener docentes.
   */
  private teachersService = inject(TeachersService);

  /**
   * Inicializa el componente y carga los docentes.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.teachersService.getAllTeachers(10).subscribe({
      next: (teachers) => {
        this.teachers = teachers;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error);
        this.state = 'error';
      },
    });
  }
}
