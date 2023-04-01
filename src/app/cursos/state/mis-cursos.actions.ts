import { createAction, props } from '@ngrx/store';

import { Curso } from '../../interfaces/curso';

export const buscarCursos = createAction(
  '[MisCursos] Buscar MisCursos'
);

export const cargarCursos = createAction(
  '[MisCursos] Cargar MisCursos',
  props<{ cursosEnviados: Curso[] }>()
);

