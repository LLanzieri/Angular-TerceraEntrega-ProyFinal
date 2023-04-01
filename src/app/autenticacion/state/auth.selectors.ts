import * as fromAuth from './auth.reducer';

import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectAuthState = createFeatureSelector<fromAuth.AuthState>(
  fromAuth.authFeatureKey
);

export const selectSesion = createSelector(
  selectAuthState,
  (state) => state.sesion
);

export const selectUsuarioActivo = createSelector(
  selectAuthState,
  (state) => state.sesion.usuarioLogueado
);

export const selectUsuarios = createSelector(
  selectAuthState,
  (state) => state.usuarios
);


