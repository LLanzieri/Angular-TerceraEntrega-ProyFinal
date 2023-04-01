import * as fromAlumnosStore from './alumnos-store.reducer';

import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectAlumnosStoreState = createFeatureSelector<fromAlumnosStore.AlumnosState>(
  fromAlumnosStore.alumnosStoreFeatureKey
);

export const selectAlumnos = createSelector(
  selectAlumnosStoreState,
  (state) => state.alumnos
);
