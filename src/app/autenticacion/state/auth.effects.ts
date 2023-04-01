import * as AuthActions from './auth.actions';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { actualizarContrasenia, buscarUsuarios, cargarUsuarios, crearUsuario } from './auth.actions';
import { concatMap, map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Usuario } from '../../interfaces/usuario';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private _loginService: LoginService
  ) { }

  buscarYcargarUsuarios$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(buscarUsuarios),
      concatMap(() => {
        return this._loginService.getUsuarios().pipe(
          map((usuariosMockApi: Usuario[]) => cargarUsuarios({ usuariosEnviados: usuariosMockApi }))
        )
      })
    )
  });

  actualizarContrasena$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actualizarContrasenia),
      concatMap(({ usuarioEnviado }) => {
        return this._loginService.actualizarContrasena(usuarioEnviado).pipe(
          map((u: Usuario) => {
            return buscarUsuarios();
          })
        )
      })
    )
  });

  crearUsuario$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(crearUsuario),
      concatMap(({ usuarioEnviado }) => {
        return this._loginService.crearUsuario(usuarioEnviado).pipe(
          map((u: Usuario) => {
            return buscarUsuarios();
          })
        )
      })
    )
  });

}
