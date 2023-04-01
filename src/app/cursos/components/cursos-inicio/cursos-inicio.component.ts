import { Component, OnInit } from '@angular/core';

import { Curso } from '../../../interfaces/curso';
import { CursosState } from '../../state/mis-cursos.reducer';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCursos } from '../../state/mis-cursos.selectors';

@Component({
  selector: 'app-cursos-inicio',
  templateUrl: './cursos-inicio.component.html',
  styleUrls: ['./cursos-inicio.component.css']
})
export class CursosInicioComponent implements OnInit {

  panelOpenState = false;
  listaCursos$!: Observable<Curso[]>;

  constructor(
    private cursosStore: Store<CursosState>
  ) { }

  ngOnInit(): void {

    // Traigo los cursos de la store
    this.listaCursos$ = this.cursosStore.select(selectCursos);
  }
}
