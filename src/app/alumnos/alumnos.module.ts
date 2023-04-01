import { AlumnosReducer, alumnosStoreFeatureKey } from './state/alumnos-store.reducer';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosService } from './services/alumnos.service';
import { AlumnosStoreEffects } from './state/alumnos-store.effects';
import { BooleanoAtextoPipe } from './pipes/booleano-atexto.pipe';
import { CalificacionesComponent } from './components/calificaciones/calificaciones.component';
import { CommonModule } from '@angular/common';
import { EditarNotasComponent } from './components/editar-notas/editar-notas.component';
import { EffectsModule } from '@ngrx/effects';
import { FormAgregarAlumnoComponent } from './components/form-agregar-alumno/form-agregar-alumno.component';
import { FormatearNombreApellidoPipe } from './pipes/formatear-nombre-apellido.pipe';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { ListaCardsComponent } from './components/lista-cards/lista-cards.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    FormAgregarAlumnoComponent,
    CalificacionesComponent,
    ListaCardsComponent,
    ListaAlumnosComponent,
    BooleanoAtextoPipe,
    FormatearNombreApellidoPipe,
    EditarNotasComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    SharedModule,
    StoreModule.forFeature(alumnosStoreFeatureKey, AlumnosReducer),
    EffectsModule.forFeature([AlumnosStoreEffects])
  ],
  providers: [AlumnosService]
})
export class AlumnosModule { }