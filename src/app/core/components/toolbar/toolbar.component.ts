import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { AuthState } from '../../../autenticacion/state/auth.reducer';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Sesion } from 'src/app/interfaces/sesion';
import { SesionService } from '../../services/sesion.service';
import { Store } from '@ngrx/store';
import { finalizarSesion } from '../../../autenticacion/state/auth.actions';
import { selectSesion } from '../../../autenticacion/state/auth.selectors';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input() estadoMenuTool!: boolean;
  @Output() eventoCambioEstadoMenu: EventEmitter<boolean> = new EventEmitter<boolean>();

  sesion$!: Observable<Sesion>;

  constructor(
    private authStore: Store<AuthState>,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.sesion$ = this.authStore.select(selectSesion);

  };

  toggleMenu() {
    this.estadoMenuTool = !this.estadoMenuTool;
    this.eventoCambioEstadoMenu.emit(this.estadoMenuTool);
  }

  cerrarSesion() {

    this.authStore.dispatch(finalizarSesion());
    this.router.navigate(['auth/login']);
  }

}