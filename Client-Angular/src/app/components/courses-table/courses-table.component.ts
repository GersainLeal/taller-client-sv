import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { Course, CourseCategory } from '../../interfaces/courses.interface';

@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  imports: [CommonModule, BadgeAtom],
})
export class CoursesTableComponent {
  @Input() courses: Course[] = [];

  categoryMap: Record<CourseCategory, BadgeType> = {
    'Programming': 'primary',
    'Design': 'warning',
    'Business': 'success',
    'Marketing': 'danger',
    'Data Science': 'secondary',
  };
}
