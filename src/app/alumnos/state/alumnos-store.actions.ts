import { createAction, props } from '@ngrx/store';

import { Alumno } from '../../interfaces/alumno';

export const buscarAlumnos = createAction(
  '[AlumnosStore] Buscar Alumnos'
);

export const cargarAlumnos = createAction(
  '[AlumnosStore] Cargar Alumnos',
  props<{ alumnosEnviados: Alumno[] }>()
);

export const eliminarAlumno = createAction(
  '[AlumnosStore] Eliminar Alumno',
  props<{ alumnoEnviado: Alumno }>()
);

export const editarAlumno = createAction(
  '[AlumnosStore] Editar Alumno',
  props<{ alumnoEnviado: Alumno }>()
);

export const agregarAlumno = createAction(
  '[AlumnosStore] Agregar Alumno',
  props<{ alumnoEnviado: Alumno }>()
);

export const editarNotasAlumno = createAction(
  '[AlumnosStore] Editar Notas',
  props<{ alumnoEnviado: Alumno }>()
);