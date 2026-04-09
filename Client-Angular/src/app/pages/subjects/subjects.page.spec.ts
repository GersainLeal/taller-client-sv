import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { SUBJECTS_MOCK } from '../../mocks/subjects.mocks';
import { SubjectsService } from '../../services/subjects/subjects.service';
import { SubjectsTableComponent } from '../../components/subjects-table/subjects-table.component';
import { SubjectsPage } from './subjects.page';

describe('SubjectsPage', () => {
  let component: SubjectsPage;
  let fixture: ComponentFixture<SubjectsPage>;
  let subjectsService: SubjectsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectsPage, SubjectsTableComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(SubjectsPage);
    component = fixture.componentInstance;
    subjectsService = TestBed.inject(SubjectsService);
  });

  it('deberia crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('deberia llamar a getAllSubjects al iniciar', () => {
    const spyGetAllSubjects = jest.spyOn(subjectsService, 'getAllSubjects').mockReturnValue(of(SUBJECTS_MOCK));
    fixture.detectChanges();
    expect(spyGetAllSubjects).toHaveBeenCalled();
  });

  it('deberia asignar las asignaturas recibidas del servicio', () => {
    jest.spyOn(subjectsService, 'getAllSubjects').mockReturnValue(of(SUBJECTS_MOCK));
    fixture.detectChanges();
    expect(component.subjects).toEqual(SUBJECTS_MOCK);
  });

  it('deberia pasar las asignaturas al componente subjects-table', () => {
    jest.spyOn(subjectsService, 'getAllSubjects').mockReturnValue(of(SUBJECTS_MOCK));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(SubjectsTableComponent))
      .componentInstance;
    expect(tableComponent.subjects).toEqual(SUBJECTS_MOCK);
  });

  it('deberia manejar el error cuando falla getAllSubjects', () => {
    component.subjects = [];
    const errorResponse = new Error('Error al cargar asignaturas');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(subjectsService, 'getAllSubjects').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(subjectsService.getAllSubjects).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.subjects.length).toBe(0);
  });
});
