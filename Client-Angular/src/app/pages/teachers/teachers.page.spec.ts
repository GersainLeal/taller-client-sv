import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { TEACHERS_MOCK } from '../../mocks/teachers.mocks';
import { TeachersService } from '../../services/teachers/teachers.service';
import { TeachersTableComponent } from '../../components/teachers-table/teachers-table.component';
import { TeachersPage } from './teachers.page';

describe('TeachersPage', () => {
  let component: TeachersPage;
  let fixture: ComponentFixture<TeachersPage>;
  let teachersService: TeachersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachersPage, TeachersTableComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(TeachersPage);
    component = fixture.componentInstance;
    teachersService = TestBed.inject(TeachersService);
  });

  it('deberia crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('deberia llamar a getAllTeachers al iniciar', () => {
    const spyGetAllTeachers = jest.spyOn(teachersService, 'getAllTeachers').mockReturnValue(of(TEACHERS_MOCK));
    fixture.detectChanges();
    expect(spyGetAllTeachers).toHaveBeenCalled();
  });

  it('deberia asignar los docentes recibidos del servicio', () => {
    jest.spyOn(teachersService, 'getAllTeachers').mockReturnValue(of(TEACHERS_MOCK));
    fixture.detectChanges();
    expect(component.teachers).toEqual(TEACHERS_MOCK);
  });

  it('deberia pasar los docentes al componente teachers-table', () => {
    jest.spyOn(teachersService, 'getAllTeachers').mockReturnValue(of(TEACHERS_MOCK));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(TeachersTableComponent))
      .componentInstance;
    expect(tableComponent.teachers).toEqual(TEACHERS_MOCK);
  });

  it('deberia manejar el error cuando falla getAllTeachers', () => {
    component.teachers = [];
    const errorResponse = new Error('Error al cargar docentes');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(teachersService, 'getAllTeachers').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(teachersService.getAllTeachers).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.teachers.length).toBe(0);
  });
});
