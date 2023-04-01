import { AuthState } from './autenticacion/state/auth.reducer';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { cargarSesion } from './autenticacion/state/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menuDesplegado: boolean = false;

  ngOnInit(): void {

  }

  actualizarMenu(estado: boolean) {

    this.menuDesplegado = estado;
  }
}
