import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TEACHERS_MOCK } from '../../mocks/teachers.mocks';
import { TeachersTableComponent } from './teachers-table.component';

describe('TeachersTableComponent', () => {
  let component: TeachersTableComponent;
  let fixture: ComponentFixture<TeachersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachersTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TeachersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deberia crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('deberia renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('deberia renderizar una fila por cada docente', () => {
    component.teachers = TEACHERS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.teachers.length);
  });

  it('deberia mostrar los datos del docente en cada columna', () => {
    component.teachers = TEACHERS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const teacher = component.teachers[index];

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(teacher.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(teacher.name);
      expect(columns[2].nativeElement.textContent.trim()).toBe(teacher.lastName);
      expect(columns[4].nativeElement.textContent.trim()).toBe(String(teacher.experience));
    });
  });

  it('deberia mapear cada especialidad a su BadgeType correcto', () => {
    expect(component.specialtyMap.Software).toBe('primary');
    expect(component.specialtyMap.Redes).toBe('warning');
    expect(component.specialtyMap.Seguridad).toBe('danger');
    expect(component.specialtyMap.Datos).toBe('success');
    expect(component.specialtyMap.UX).toBe('secondary');
  });
});
