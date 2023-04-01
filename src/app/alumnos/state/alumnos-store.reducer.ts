import * as AlumnosStoreActions from './alumnos-store.actions';

import { createFeature, createReducer, on } from '@ngrx/store';

import { Alumno } from '../../interfaces/alumno';

export const alumnosStoreFeatureKey = 'alumnosStore';

export interface AlumnosState {
  alumnos: Alumno[]
}

export const initialState: AlumnosState = {
  alumnos: []
};

export const AlumnosReducer = createReducer(
  initialState,
  on(AlumnosStoreActions.buscarAlumnos, (state) => {
    return { ...state, state }
  }),

  on(AlumnosStoreActions.cargarAlumnos, (state, { alumnosEnviados }) => {
    return { ...state, alumnos: alumnosEnviados }
  }),

  on(AlumnosStoreActions.eliminarAlumno, (state, { alumnoEnviado }) => {
    return state
  }),

  on(AlumnosStoreActions.agregarAlumno, (state, { alumnoEnviado }) => {
    return state
  }),

  on(AlumnosStoreActions.editarNotasAlumno, (state, { alumnoEnviado }) => {
    return state
  }),

);

