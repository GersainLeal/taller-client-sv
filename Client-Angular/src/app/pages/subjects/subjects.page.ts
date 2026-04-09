import { Component, inject } from '@angular/core';
import { AlertComponent } from '../../components/alert/alert.component';
import { SubjectsTableComponent } from '../../components/subjects-table/subjects-table.component';
import { State } from '../../interfaces/state.interface';
import { Subject } from '../../interfaces/subjects.interface';
import { SubjectsService } from '../../services/subjects/subjects.service';

/**
 * Componente contenedor de asignaturas.
 */
@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.page.html',
  imports: [SubjectsTableComponent, AlertComponent],
})
export class SubjectsPage {
  /**
   * Listado de asignaturas obtenidas desde el servicio.
   */
  subjects: Subject[] = [];

  /**
   * Estado actual del componente.
   */
  state: State = 'init';

  /**
   * Servicio para obtener asignaturas.
   */
  private subjectsService = inject(SubjectsService);

  /**
   * Inicializa el componente y carga las asignaturas.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.subjectsService.getAllSubjects(10).subscribe({
      next: (subjects) => {
        this.subjects = subjects;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error);
        this.state = 'error';
      },
    });
  }
}
