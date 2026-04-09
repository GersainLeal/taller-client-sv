/**
 * Interfaz que representa un curso.
 *
 * Contiene la informacion basica necesaria para mostrar un curso
 * en tablas o en cualquier componente de listado.
 *
 * @remarks
 * Cada curso debe tener un `id` unico, un `name` descriptivo,
 * un `instructor`, una `duration` en horas y una `category` valida.
 *
 * @example
 * ```ts
 * const curso: Course = {
 *   id: 1,
 *   name: 'Fundamentos de Programacion Web',
 *   instructor: 'Andres Rojas',
 *   duration: 40,
 *   category: 'Programming'
 * };
 * ```
 */
export interface Course {
	/** Identificador unico del curso */
	id: number;

	/** Nombre o titulo del curso */
	name: string;

	/** Nombre del instructor del curso */
	instructor: string;

	/** Duracion del curso en horas */
	duration: number;

	/** Categoria del curso */
	category: CourseCategory;
}

/**
 * Tipo de categoria de curso.
 *
 * @remarks
 * Este tipo restringe las categorias a valores predefinidos:
 * - 'Programming'
 * - 'Design'
 * - 'Business'
 * - 'Marketing'
 * - 'Data Science'
 */
export type CourseCategory =
	| 'Programming'
	| 'Design'
	| 'Business'
	| 'Marketing'
	| 'Data Science';