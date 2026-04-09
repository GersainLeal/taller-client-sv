export interface Course {
  id: number;
  name: string;
  instructor: string;
  duration: number;
  category: CourseCategory;
}

export type CourseCategory = 'Programming' | 'Design' | 'Business' | 'Marketing' | 'Data Science';