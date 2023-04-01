import * as fromMisCursos from './mis-cursos.reducer';

import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectMisCursosState = createFeatureSelector<fromMisCursos.CursosState>(
  fromMisCursos.misCursosFeatureKey
);

export const selectCursos = createSelector(
  selectMisCursosState,
  (state) => state.cursos
);