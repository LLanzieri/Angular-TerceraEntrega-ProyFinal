import { Component, OnInit } from '@angular/core';

import { AlumnosState } from 'src/app/alumnos/state/alumnos-store.reducer';
import { CursosState } from '../../../cursos/state/mis-cursos.reducer';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { buscarAlumnos } from '../../../alumnos/state/alumnos-store.actions';
import { buscarCursos } from '../../../cursos/state/mis-cursos.actions';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(
    private router: Router,
    private alumnosStore: Store<AlumnosState>,
    private cursosStore: Store<CursosState>
  ) { }

  ngOnInit(): void {

    // Mando a cargar los alumnos
    this.alumnosStore.dispatch(buscarAlumnos());

    // Mando a cargar los cursos
    this.cursosStore.dispatch(buscarCursos());
  }

  redirigirListaAlumnos() {
    this.router.navigateByUrl('alumnos/lista');
  }

  redirigirDatosAlumnos() {
    this.router.navigateByUrl('alumnos/datos');
  }

  redirigirFormularioAgregarAlumno() {
    this.router.navigateByUrl('alumnos/formularioagregar');
  }

  redirigirCursosAsignados() {
    this.router.navigateByUrl('cursos');
  }

}