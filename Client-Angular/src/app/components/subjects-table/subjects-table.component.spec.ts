import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SUBJECTS_MOCK } from '../../mocks/subjects.mocks';
import { SubjectsTableComponent } from './subjects-table.component';

describe('SubjectsTableComponent', () => {
  let component: SubjectsTableComponent;
  let fixture: ComponentFixture<SubjectsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectsTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubjectsTableComponent);
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

  it('deberia renderizar una fila por cada asignatura', () => {
    component.subjects = SUBJECTS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.subjects.length);
  });

  it('deberia mostrar los datos de la asignatura en cada columna', () => {
    component.subjects = SUBJECTS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const subject = component.subjects[index];

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(subject.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(subject.name);
      expect(columns[3].nativeElement.textContent.trim()).toBe(String(subject.credits));
      expect(columns[4].nativeElement.textContent.trim()).toBe(String(subject.semester));
    });
  });

  it('deberia mapear cada area a su BadgeType correcto', () => {
    expect(component.areaMap.Programacion).toBe('primary');
    expect(component.areaMap.Datos).toBe('success');
    expect(component.areaMap.Redes).toBe('warning');
    expect(component.areaMap.Gestion).toBe('danger');
    expect(component.areaMap.Diseno).toBe('secondary');
  });
});
