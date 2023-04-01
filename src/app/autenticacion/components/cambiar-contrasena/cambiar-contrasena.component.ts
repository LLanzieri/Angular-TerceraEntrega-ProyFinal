import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { actualizarContrasenia, buscarUsuarios } from '../../state/auth.actions';

import { AuthState } from '../../state/auth.reducer';
import { LoginService } from '../../services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/interfaces/usuario';
import { selectUsuarios } from '../../state/auth.selectors';

@Component({
  selector: 'app-cambiar-contrasena',
  templateUrl: './cambiar-contrasena.component.html',
  styleUrls: ['./cambiar-contrasena.component.css']
})
export class CambiarContrasenaComponent implements OnInit {

  usuariosObservable$!: Observable<Usuario[]>;
  listaUsuarios!: Usuario[];
  nuevaContrasenaForm!: FormGroup;

  constructor(private _loginService: LoginService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private authStore: Store<AuthState>) {

  }

  ngOnInit(): void {

    this.nuevaContrasenaForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });

    // Mando a cargar los usuarios
    //this.authStore.dispatch(buscarUsuarios());

    // Busco los usuarios de la Store
    this.usuariosObservable$ = this.authStore.select(selectUsuarios);

    //Asocio los posibles usuarios
    this.usuariosObservable$.subscribe(
      (usuariosMockApi: Usuario[]) => {
        this.listaUsuarios = usuariosMockApi;
      });

  }

  actualizarContrasena() {

    let usuarioIngresado: Usuario = {
      id: "",
      usuario: this.nuevaContrasenaForm.value.email,
      contrasena: this.nuevaContrasenaForm.value.password,
    }

    // Busco si existe el usuario ingresado
    const usuarioEncontrado = this.listaUsuarios.find(a => a.usuario === usuarioIngresado.usuario);

    if (usuarioEncontrado !== undefined) {

      usuarioIngresado.id = usuarioEncontrado.id;

      this._snackBar.open('Contraseña restablecida correctamente.', 'Cerrar', {
        duration: 2000
      });

      this.authStore.dispatch(actualizarContrasenia({ usuarioEnviado: usuarioIngresado }))

      this.router.navigate(['auth/login']);

    }
    else
      this._snackBar.open('El usuario ingresado no existe.', 'Cerrar', {
        duration: 2000
      });
  }

}
