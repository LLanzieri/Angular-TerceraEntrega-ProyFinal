import * as MisCursosActions from './mis-cursos.actions';

import { createFeature, createReducer, on } from '@ngrx/store';

import { Curso } from 'src/app/interfaces/curso';

export const misCursosFeatureKey = 'misCursos';

export interface CursosState {
  cursos: Curso[]
}

export const initialState: CursosState = {
  cursos: []
};

export const cursosReducer = createReducer(
  initialState,

  on(MisCursosActions.buscarCursos, (state) => {
    return { ...state, state }
  }),

  on(MisCursosActions.cargarCursos, (state, { cursosEnviados }) => {
    return { ...state, cursos: cursosEnviados }
  }),

);

