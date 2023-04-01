import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AlumnosStoreEffects } from './alumnos-store.effects';

describe('AlumnosStoreEffects', () => {
  let actions$: Observable<any>;
  let effects: AlumnosStoreEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AlumnosStoreEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(AlumnosStoreEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
