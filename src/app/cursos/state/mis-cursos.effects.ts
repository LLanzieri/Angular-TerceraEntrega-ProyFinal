import * as MisCursosActions from './mis-cursos.actions';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, Observable } from 'rxjs';
import { buscarCursos, cargarCursos } from './mis-cursos.actions';
import { concatMap, map } from 'rxjs/operators';

import { Curso } from '../../interfaces/curso';
import { CursosService } from '../services/cursos.service';
import { Injectable } from '@angular/core';

@Injectable()
export class MisCursosEffects {

  constructor(
    private actions$: Actions,
    private _cursoService: CursosService) { }

  buscarYcargarCursos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(buscarCursos),
      concatMap(() => {
        return this._cursoService.getCursos().pipe(
          map((cursosMockApi: Curso[]) => cargarCursos({ cursosEnviados: cursosMockApi }))
        )
      })
    )
  });


}
