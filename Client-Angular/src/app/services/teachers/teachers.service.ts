import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from '../../interfaces/teachers.interface';

/**
 * Servicio encargado de la gestion de docentes.
 *
 * Proporciona metodos para obtener informacion de docentes
 * desde la API REST.
 */
@Injectable({
  providedIn: 'root',
})
export class TeachersService {
  /**
   * Cliente HTTP de Angular para realizar peticiones a la API.
   */
  private httpClient = inject(HttpClient);

  /**
   * Obtiene una lista de docentes desde el backend.
   *
   * @param countTeachers Numero de docentes a obtener.
   * @returns Observable que emite un array de docentes.
   */
  getAllTeachers(countTeachers: number): Observable<Teacher[]> {
    return this.httpClient.get<Teacher[]>(`api/teachers/${countTeachers}`);
  }
}
