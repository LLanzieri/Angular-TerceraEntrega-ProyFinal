import { createAction, props } from '@ngrx/store';

import { Sesion } from 'src/app/interfaces/sesion';
import { Usuario } from '../../interfaces/usuario';

export const buscarUsuarios = createAction(
  '[Auth] Buscar Usuarios'
);

export const cargarUsuarios = createAction(
  '[Auth] Cargar Usuarios',
  props<{ usuariosEnviados: Usuario[] }>()
);

export const actualizarContrasenia = createAction(
  '[Auth] Actualizar Contrasena',
  props<{ usuarioEnviado: Usuario }>()
);

export const crearUsuario = createAction(
  '[Auth] Crear Usuario',
  props<{ usuarioEnviado: Usuario }>()
);

// ACTIONS SESIÓN

export const cargarSesion = createAction(
  '[Auth] Sesion cargada',
  props<{ sesion: Sesion }>()
);

export const finalizarSesion = createAction(
  '[Auth] Sesion finalizada'
);
