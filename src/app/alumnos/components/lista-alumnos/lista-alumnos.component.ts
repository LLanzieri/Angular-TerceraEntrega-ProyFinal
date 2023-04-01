import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, map, of } from 'rxjs';
import { agregarAlumno, editarAlumno, eliminarAlumno } from '../../state/alumnos-store.actions';

import { AgregarAlumnoDialogComponent } from '../agregar-alumno-dialog/agregar-alumno-dialog.component';
import { Alumno } from '../../../interfaces/alumno';
import { AlumnosService } from 'src/app/alumnos/services/alumnos.service';
import { AlumnosState } from '../../state/alumnos-store.reducer';
import { EditarAlumnoDialogComponent } from '../editar-alumno-dialog/editar-alumno-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table'
import { Store } from '@ngrx/store';
import { selectAlumnos } from '../../state/alumnos-store.selectors';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})

export class ListaAlumnosComponent implements OnInit {

  alumnosObservable$!: Observable<Alumno[]>
  listaAlumnos!: Alumno[];

  suscripcion!: Subscription;

  dataSource: MatTableDataSource<Alumno> = new MatTableDataSource<Alumno>();

  columnas: string[] = ['DNI', 'Alumno', 'Edad', 'Estado', 'Acciones'];

  constructor(
    private dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private alumnosStore: Store<AlumnosState>
  ) { }


  ngOnInit(): void {

    // Traigo alumnos de la Store
    this.alumnosObservable$ = this.alumnosStore.select(selectAlumnos);

    // Forma de suscribirme a la nueva lista Observable que me traje de la Store
    this.suscripcion = this.alumnosObservable$.subscribe(
      (alumnos: Alumno[]) => {

        this.listaAlumnos = alumnos;

        // Refresco la tabla con la lista obtenida
        this.dataSource = new MatTableDataSource<Alumno>(alumnos);
      }
    );

  }

  ngOnDestroy(): void {

    // Saco la suscripción al observable
    this.suscripcion.unsubscribe();
  }

  editarAlumno(item: Alumno) {
    const dialogRef = this.dialog.open(EditarAlumnoDialogComponent, {
      data: item
    });

    // Agarro el objeto modificado
    dialogRef.afterClosed().subscribe(result => {

      // Action para editar
      this.alumnosStore.dispatch(editarAlumno({ alumnoEnviado: result }));

      this.refrescarTabla();

      this._snackBar.open('Información actualizada', 'Cerrar', {
        duration: 2000
      });
    });

  }

  eliminarAlumno(item: Alumno) {

    // Action para eliminar
    this.alumnosStore.dispatch(eliminarAlumno({ alumnoEnviado: item }));

    this.refrescarTabla();

    this._snackBar.open('Alumno eliminado', 'Cerrar', {
      duration: 2000
    });

  }

  agregarAlumno() {
    const dialogRef = this.dialog.open(AgregarAlumnoDialogComponent, {

    });

    // Agarro el objeto modificado
    dialogRef.afterClosed().subscribe(result => {

      let existeDNI: boolean = false;

      // Si el modal mando algo, me fijo si no existe ya el DNI que quiero agregar
      if (result) {

        existeDNI = this.listaAlumnos.some(element => {
          if (element.dni == result.dni) {
            return true;
          }

          return false;
        });
      }

      // Si el dialog mando algo y EXISTE EL DNI - DNI DUPLICADO
      if (result && existeDNI) {
        this._snackBar.open('DNI duplicado', 'Cerrar', {
          duration: 2000
        });
      }

      // Si el dialog mando algo y NO EXISTE EL DNI - AGREGO
      if (result && !existeDNI) {

        // Action para agregar 
        this.alumnosStore.dispatch(agregarAlumno({ alumnoEnviado: result }));

        this.refrescarTabla();

        this._snackBar.open('Alumno agregado', 'Cerrar', {
          duration: 2000
        });

      }

    });
  }

  mostrarAprobados(valor: boolean) {

    if (valor) {
      of(this.listaAlumnos).pipe(
        map((alumnos: Alumno[]) => {
          return alumnos.filter((item: Alumno) => item.cursoAprobado == true)
        })
      ).subscribe(
        (resultado) => {

          // Refresco la tabla con la lista obtenida
          this.dataSource = new MatTableDataSource<Alumno>(resultado);
        });
    }
    else
      // Refresco la tabla con la lista existente
      this.dataSource = new MatTableDataSource<Alumno>(this.listaAlumnos);
  }

  mostrarDesaprobados(valor: boolean) {

    if (valor) {
      of(this.listaAlumnos).pipe(
        map((alumnos: Alumno[]) => {
          return alumnos.filter((item: Alumno) => item.cursoAprobado == false)
        })
      ).subscribe(
        (resultado) => {

          // Refresco la tabla con la lista obtenida
          this.dataSource = new MatTableDataSource<Alumno>(resultado);
        });
    }
    else
      // Refresco la tabla con la lista existente
      this.dataSource = new MatTableDataSource<Alumno>(this.listaAlumnos);
  }

  refrescarTabla(): void {

    this.alumnosObservable$.subscribe(
      (alumnos: Alumno[]) => {

        // Refresco la tabla con la lista obtenida
        this.dataSource = new MatTableDataSource<Alumno>(alumnos);
      }
    )

  }

}