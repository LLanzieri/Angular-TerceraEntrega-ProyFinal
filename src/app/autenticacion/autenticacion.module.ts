import { authFeatureKey, authReducer } from './state/auth.reducer';

import { AutenticacionInicioComponent } from './components/autenticacion-inicio/autenticacion-inicio.component';
import { AutenticacionRoutingModule } from './autenticacion-routing.module';
import { AuthEffects } from './state/auth.effects';
import { CambiarContrasenaComponent } from './components/cambiar-contrasena/cambiar-contrasena.component';
import { CommonModule } from '@angular/common';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { EffectsModule } from '@ngrx/effects';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AutenticacionInicioComponent,
    LoginComponent,
    CrearUsuarioComponent,
    CambiarContrasenaComponent
  ],
  imports: [
    CommonModule,
    AutenticacionRoutingModule,
    SharedModule,
    StoreModule.forFeature(authFeatureKey, authReducer),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class AutenticacionModule { }
