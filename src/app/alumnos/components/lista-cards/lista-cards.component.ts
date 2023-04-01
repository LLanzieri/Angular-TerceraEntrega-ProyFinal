import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Alumno } from '../../../interfaces/alumno';
import { AlumnosService } from 'src/app/alumnos/services/alumnos.service';
import { AlumnosState } from '../../state/alumnos-store.reducer';
import { Store } from '@ngrx/store';
import { selectAlumnos } from '../../state/alumnos-store.selectors';

@Component({
  selector: 'app-lista-cards',
  templateUrl: './lista-cards.component.html',
  styleUrls: ['./lista-cards.component.css']
})
export class ListaCardsComponent implements OnInit {

  listaAlumnos$!: Observable<Alumno[]>;

  constructor(
    private alumnosStore: Store<AlumnosState>
  ) { }

  ngOnInit(): void {

    // Busco y seteo el observable
    this.listaAlumnos$ = this.alumnosStore.select(selectAlumnos);

  }

}