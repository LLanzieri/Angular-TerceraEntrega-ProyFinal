import * as fromMisCursos from './mis-cursos.reducer';
import { selectMisCursosState } from './mis-cursos.selectors';

describe('MisCursos Selectors', () => {
  it('should select the feature state', () => {
    const result = selectMisCursosState({
      [fromMisCursos.misCursosFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
