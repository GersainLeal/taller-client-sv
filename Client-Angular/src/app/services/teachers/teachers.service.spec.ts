import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Teacher } from '../../interfaces/teachers.interface';
import { TEACHERS_MOCK } from '../../mocks/teachers.mocks';
import { TeachersService } from './teachers.service';

describe('TeachersService', () => {
  let service: TeachersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(TeachersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('Creacion del servicio', () => {
    it('deberia crearse correctamente', () => {
      expect(service).toBeTruthy();
    });
  });

  describe('getAllTeachers', () => {
    it('deberia realizar una peticion GET y retornar una lista de docentes', () => {
      const countTeachers = 5;
      const mockTeachers: Teacher[] = TEACHERS_MOCK;

      service.getAllTeachers(countTeachers).subscribe((docentes) => {
        expect(docentes).toEqual(mockTeachers);
        expect(docentes.length).toBe(mockTeachers.length);
      });

      const req = httpMock.expectOne(`api/teachers/${countTeachers}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockTeachers);
    });

    it('deberia propagar un error si la peticion HTTP falla', () => {
      const countTeachers = 3;

      service.getAllTeachers(countTeachers).subscribe({
        next: () => {
          fail('No deberia emitir datos cuando ocurre un error');
        },
        error: (error) => {
          expect(error.status).toBe(500);
        },
      });

      const req = httpMock.expectOne(`api/teachers/${countTeachers}`);

      req.flush(
        { message: 'Error interno del servidor' },
        { status: 500, statusText: 'Internal Server Error' }
      );
    });
  });
});
