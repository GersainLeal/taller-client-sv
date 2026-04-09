import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Subject } from '../../interfaces/subjects.interface';
import { SUBJECTS_MOCK } from '../../mocks/subjects.mocks';
import { SubjectsService } from './subjects.service';

describe('SubjectsService', () => {
  let service: SubjectsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(SubjectsService);
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

  describe('getAllSubjects', () => {
    it('deberia realizar una peticion GET y retornar una lista de asignaturas', () => {
      const countSubjects = 5;
      const mockSubjects: Subject[] = SUBJECTS_MOCK;

      service.getAllSubjects(countSubjects).subscribe((asignaturas) => {
        expect(asignaturas).toEqual(mockSubjects);
        expect(asignaturas.length).toBe(mockSubjects.length);
      });

      const req = httpMock.expectOne(`api/subjects/${countSubjects}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockSubjects);
    });

    it('deberia propagar un error si la peticion HTTP falla', () => {
      const countSubjects = 3;

      service.getAllSubjects(countSubjects).subscribe({
        next: () => {
          fail('No deberia emitir datos cuando ocurre un error');
        },
        error: (error) => {
          expect(error.status).toBe(500);
        },
      });

      const req = httpMock.expectOne(`api/subjects/${countSubjects}`);

      req.flush(
        { message: 'Error interno del servidor' },
        { status: 500, statusText: 'Internal Server Error' }
      );
    });
  });
});
