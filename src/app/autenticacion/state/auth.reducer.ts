import * as AuthActions from './auth.actions';

import { createFeature, createReducer, on } from '@ngrx/store';

import { Sesion } from '../../interfaces/sesion';
import { Usuario } from 'src/app/interfaces/usuario';

export const authFeatureKey = 'auth';

export interface AuthState {
  usuarios: Usuario[],
  sesion: Sesion
}

export const initialState: AuthState = {
  usuarios: [],
  sesion: {
    sesionActiva: false
  }
};

export const authReducer = createReducer(
  initialState,

  on(AuthActions.buscarUsuarios, (state) => {

    return { ...state, state }
  }),

  on(AuthActions.cargarUsuarios, (state, { usuariosEnviados }) => {

    return { ...state, usuarios: usuariosEnviados }
  }),

  on(AuthActions.actualizarContrasenia, (state) => {

    return { ...state, state }
  }),

  on(AuthActions.crearUsuario, (state, { usuarioEnviado }) => {

    return { ...state, state }
  }),

  on(AuthActions.cargarSesion, (state, { sesion }) => {

    if (!sesion.sesionActiva)
      return { ...state, sesion: state.sesion }
    else
      return { ...state, sesion: sesion }
  }),

  on(AuthActions.finalizarSesion, (state) => {

    return { ...state, sesion: { sesionActiva: false } }
  }),

);
