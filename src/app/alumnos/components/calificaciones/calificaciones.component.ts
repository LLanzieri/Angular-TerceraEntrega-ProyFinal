import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Alumno } from 'src/app/interfaces/alumno';
import { AlumnosService } from '../../services/alumnos.service';
import { AlumnosState } from '../../state/alumnos-store.reducer';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectAlumnos } from '../../state/alumnos-store.selectors';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html',
  styleUrls: ['./calificaciones.component.css']
})
export class CalificacionesComponent implements OnInit, OnDestroy {

  alumnosObservable$!: Observable<Alumno[]>;

  suscripcion!: Subscription;

  dataSource: MatTableDataSource<Alumno> = new MatTableDataSource<Alumno>();

  columnas: string[] = ['Alumno', 'Nota 1', 'Nota 2', 'Modificar notas'];

  constructor(
    private alumnosStore: Store<AlumnosState>,
    private router: Router) { }

  ngOnInit(): void {

    // Traigo alumnos de la Store
    this.alumnosObservable$ = this.alumnosStore.select(selectAlumnos);

    // Forma de suscribirme a la nueva lista Observable que me traje de la Store
    this.suscripcion = this.alumnosObservable$.subscribe(
      (alumnos: Alumno[]) => {

        // Refresco la tabla con la lista obtenida
        this.dataSource = new MatTableDataSource<Alumno>(alumnos);
      }
    );

  }

  modificarNotas(alumno: Alumno) {

    this.router.navigate(['alumnos/editarnotas', alumno]);
  }

  ngOnDestroy(): void {

    // Saco la suscripción al observable
    this.suscripcion.unsubscribe();
  }

}
