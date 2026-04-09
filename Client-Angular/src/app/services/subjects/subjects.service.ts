import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from '../../interfaces/subjects.interface';

/**
 * Servicio encargado de la gestion de asignaturas.
 *
 * Proporciona metodos para obtener informacion de asignaturas
 * desde la API REST.
 */
@Injectable({
  providedIn: 'root',
})
export class SubjectsService {
  /**
   * Cliente HTTP de Angular para realizar peticiones a la API.
   */
  private httpClient = inject(HttpClient);

  /**
   * Obtiene una lista de asignaturas desde el backend.
   *
   * @param countSubjects Numero de asignaturas a obtener.
   * @returns Observable que emite un array de asignaturas.
   */
  getAllSubjects(countSubjects: number): Observable<Subject[]> {
    return this.httpClient.get<Subject[]>(`api/subjects/${countSubjects}`);
  }
}
