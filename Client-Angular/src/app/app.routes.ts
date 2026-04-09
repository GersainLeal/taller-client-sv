import { Routes } from '@angular/router';
import { UsersPage } from './pages/users/users.page';
import { ProductsPage } from './pages/products/products.page';
import { CoursesPage } from './pages/courses/courses.page';
import { TeachersPage } from './pages/teachers/teachers.page';
import { SubjectsPage } from './pages/subjects/subjects.page';

/**
 * Definición de las rutas principales de la aplicación.
 *
 * @remarks
 * Este archivo contiene la configuración de enrutamiento
 * utilizada por Angular Router para mapear las URLs
 * a los componentes correspondientes.
 *
 * Incluye:
 * - Rutas de navegación principales
 * - Redirección por defecto para rutas no existentes
 *
 * @see {@link UsersPage}
 * @see {@link ProductsPage}
 */
export const routes: Routes = [

  /**
   * Ruta de usuarios.
   *
   * @remarks
   * Renderiza el componente `UsersPage`, encargado
   * de mostrar y gestionar el listado de usuarios.
   */
  { path: 'users', component: UsersPage },

  /**
   * Ruta de productos.
   *
   * @remarks
   * Renderiza el componente `ProductsPage`, encargado
   * de mostrar y gestionar el listado de productos.
   */
  { path: 'products', component: ProductsPage },

  /**
   * Ruta de cursos.
   *
   * @remarks
   * Renderiza el componente `CoursesPage`, encargado
   * de mostrar y gestionar el listado de cursos.
   */
  { path: 'courses', component: CoursesPage },

  /**
   * Ruta de docentes.
   *
   * @remarks
   * Renderiza el componente `TeachersPage`, encargado
   * de mostrar y gestionar el listado de docentes.
   */
  { path: 'teachers', component: TeachersPage },

  /**
   * Ruta de asignaturas.
   *
   * @remarks
   * Renderiza el componente `SubjectsPage`, encargado
   * de mostrar y gestionar el listado de asignaturas.
   */
  { path: 'subjects', component: SubjectsPage },

  /**
   * Ruta comodín.
   *
   * @remarks
   * Captura cualquier ruta no definida y redirige
   * automáticamente a la ruta de usuarios.
   */
  { path: '**', redirectTo: 'users' },
];