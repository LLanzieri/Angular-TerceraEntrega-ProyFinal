import { Observable, map } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sesion } from 'src/app/interfaces/sesion';
import { Usuario } from 'src/app/interfaces/usuario';
import { env } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {

  }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${env.apiURL}/usuarios`);
  }

  crearUsuario(usuarioIngresado: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${env.apiURL}/usuarios`, usuarioIngresado);
  }

  actualizarContrasena(usuarioIngresado: Usuario) {
    return this.http.put<Usuario>(`${env.apiURL}/usuarios/${usuarioIngresado.id}`, usuarioIngresado);
  }

  login(usuarioIngresado: Usuario): Observable<Sesion> {
    return this.http.get<Usuario[]>(`${env.apiURL}/usuarios`).pipe(
      map((usuariosRecorridos: Usuario[]) => {

        const usuarioEncontrado = usuariosRecorridos.find(a => a.usuario === usuarioIngresado.usuario && a.contrasena === usuarioIngresado.contrasena);

        if (usuarioEncontrado === undefined) {
          const sesion: Sesion = {
            sesionActiva: false
          }

          return sesion

        } else {
          const sesion: Sesion = {
            sesionActiva: true,
            usuarioLogueado: usuarioEncontrado
          }

          return sesion
        }
      })
    );
  }

}