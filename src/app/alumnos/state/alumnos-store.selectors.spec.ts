import * as fromAlumnosStore from './alumnos-store.reducer';
import { selectAlumnosStoreState } from './alumnos-store.selectors';

describe('AlumnosStore Selectors', () => {
  it('should select the feature state', () => {
    const result = selectAlumnosStoreState({
      [fromAlumnosStore.alumnosStoreFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
