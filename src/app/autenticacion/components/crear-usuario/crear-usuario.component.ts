import { Component, OnInit, isDevMode } from '@angular/core';
import { FormControl, FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { buscarUsuarios, crearUsuario } from '../../state/auth.actions';

import { AuthState } from '../../state/auth.reducer';
import { LoginService } from '../../services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/interfaces/usuario';
import { selectUsuarios } from '../../state/auth.selectors';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  usuariosObservable$!: Observable<Usuario[]>;
  listaUsuarios!: Usuario[];
  createForm!: FormGroup;

  constructor(private _loginService: LoginService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private authStore: Store<AuthState>) {

  }

  ngOnInit(): void {

    this.createForm = new FormGroup({
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

  crearUsuario() {

    let usuarioIngresado: Usuario = {
      id: "",
      usuario: this.createForm.value.email,
      contrasena: this.createForm.value.password,
    }

    // Busco si existe el usuario ingresado
    const usuarioEncontrado = this.listaUsuarios.find(a => a.usuario === usuarioIngresado.usuario);

    // Si NO existe, creo el usuario
    if (usuarioEncontrado === undefined) {

      this._snackBar.open('Nuevo usuario creado.', 'Cerrar', {
        duration: 2000
      });

      this.authStore.dispatch(crearUsuario({ usuarioEnviado: usuarioIngresado }))

      this.router.navigate(['auth/login']);
    }
    else
      this._snackBar.open('El usuario ingresado ya existe.', 'Cerrar', {
        duration: 2000
      });
  }

}