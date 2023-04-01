import { AlumnosReducer, alumnosStoreFeatureKey } from '../alumnos/state/alumnos-store.reducer';
import { authFeatureKey, authReducer } from '../autenticacion/state/auth.reducer';
import { cursosReducer, misCursosFeatureKey } from '../cursos/state/mis-cursos.reducer';

import { AlumnosService } from '../alumnos/services/alumnos.service';
import { AlumnosStoreEffects } from '../alumnos/state/alumnos-store.effects';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { CursosService } from '../cursos/services/cursos.service';
import { EffectsModule } from '@ngrx/effects';
import { Error404Component } from './components/error404/error404.component';
import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './components/inicio/inicio.component';
import { MisCursosEffects } from '../cursos/state/mis-cursos.effects';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
    declarations: [
        InicioComponent,
        Error404Component,
        ToolbarComponent,
        NavbarComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        AppRoutingModule,
        HttpClientModule,
        StoreModule.forFeature(authFeatureKey, authReducer),
        StoreModule.forFeature(alumnosStoreFeatureKey, AlumnosReducer),
        StoreModule.forFeature(misCursosFeatureKey, cursosReducer),
        EffectsModule.forFeature([AlumnosStoreEffects, MisCursosEffects])

    ],
    exports: [
        InicioComponent,
        Error404Component,
        ToolbarComponent,
        NavbarComponent,
        HttpClientModule
    ],
    providers: [AlumnosService, CursosService]
})
export class CoreModule { }