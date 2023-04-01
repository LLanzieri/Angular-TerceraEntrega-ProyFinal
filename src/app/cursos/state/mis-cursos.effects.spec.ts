import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { MisCursosEffects } from './mis-cursos.effects';

describe('MisCursosEffects', () => {
  let actions$: Observable<any>;
  let effects: MisCursosEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MisCursosEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(MisCursosEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
