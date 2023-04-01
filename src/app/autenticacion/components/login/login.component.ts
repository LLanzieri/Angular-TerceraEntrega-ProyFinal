import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { buscarUsuarios, cargarSesion } from '../../state/auth.actions';

import { AuthState } from '../../state/auth.reducer';
import { LoginService } from '../../services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Sesion } from 'src/app/interfaces/sesion';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Usuario } from '../../../interfaces/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  suscripcion!: Subscription;
  listaUsuarios!: Usuario[];
  loginForm!: FormGroup;

  constructor(
    private _snackBar: MatSnackBar,
    private router: Router,
    private _loginService: LoginService,
    private authStore: Store<AuthState>) {

  }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });

    // Mando a cargar los usuarios
    this.authStore.dispatch(buscarUsuarios());

  }

  login() {

    // Cargo el objeto con los valores ingresados
    let usuarioIngresado: Usuario = {
      id: "",
      usuario: this.loginForm.value.email,
      contrasena: this.loginForm.value.password,
    }

    // Hago el login y veo el objeto Sesión devuelto
    this.suscripcion = this._loginService.login(usuarioIngresado).subscribe(
      (sesionDevuelta: Sesion) => {

        // Si devolvió algo, existe el usuario
        if (sesionDevuelta.sesionActiva) {

          // MANDO A GUARDAR A LA STORE LA SESION
          this.authStore.dispatch(cargarSesion({ sesion: sesionDevuelta }));

          this._snackBar.open('¡Bienvenid@!', 'Cerrar', {
            duration: 2000
          });
          this.router.navigate(['home']);
        }
        else
          this._snackBar.open('Usuario o contraseña incorrectos.', 'Cerrar', {
            duration: 2000
          });

      });

  }

  ngOnDestroy(): void {
    if (this.suscripcion)
      this.suscripcion.unsubscribe();
  }

}