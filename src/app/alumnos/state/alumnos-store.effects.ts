import * as AlumnosStoreActions from './alumnos-store.actions';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { agregarAlumno, buscarAlumnos, cargarAlumnos, editarAlumno, editarNotasAlumno, eliminarAlumno } from './alumnos-store.actions';
import { concatMap, map } from 'rxjs/operators';

import { Alumno } from '../../interfaces/alumno';
import { AlumnosService } from '../services/alumnos.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AlumnosStoreEffects {

  constructor(
    private actions$: Actions,
    private _alumnosService: AlumnosService
  ) { }

  buscarYcargarAlumnos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(buscarAlumnos),
      concatMap(() => {
        return this._alumnosService.getAlumnos().pipe(
          map((alumnosMockApi: Alumno[]) =>

            cargarAlumnos({ alumnosEnviados: alumnosMockApi }))
        )
      })
    )
  });

  eliminarAlumno$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(eliminarAlumno),
      concatMap(({ alumnoEnviado }) => {
        return this._alumnosService.eliminarAlumno(alumnoEnviado).pipe(
          map((alumno: Alumno) => {

            return buscarAlumnos();
          }))
      })
    )
  });

  editarAlumno$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(editarAlumno),
      concatMap(({ alumnoEnviado }) => {
        return this._alumnosService.actualizarListaAlumnos(alumnoEnviado).pipe(
          map((alumno: Alumno) => {

            return buscarAlumnos();
          }))
      })
    )
  });

  agregarAlumno$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(agregarAlumno),
      concatMap(({ alumnoEnviado }) => {
        return this._alumnosService.agregarAlumno(alumnoEnviado).pipe(
          map((alumno: Alumno) => {

            return buscarAlumnos();
          }))
      })
    )
  });

  editarNotasAlumno$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(editarNotasAlumno),
      concatMap(({ alumnoEnviado }) => {
        return this._alumnosService.actualizarNotas(alumnoEnviado).pipe(
          map((alumno: Alumno) => {

            return buscarAlumnos();
          }))
      })
    )
  });

}
