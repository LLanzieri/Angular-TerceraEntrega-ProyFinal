import { cursosReducer, misCursosFeatureKey } from './state/mis-cursos.reducer';

import { CommonModule } from '@angular/common';
import { CursosInicioComponent } from './components/cursos-inicio/cursos-inicio.component';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosService } from './services/cursos.service';
import { EffectsModule } from '@ngrx/effects';
import { MisCursosEffects } from './state/mis-cursos.effects';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    CursosInicioComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CursosRoutingModule,
    StoreModule.forFeature(misCursosFeatureKey, cursosReducer),
    EffectsModule.forFeature([MisCursosEffects])
  ],
  providers: [CursosService]
})
export class CursosModule { }
