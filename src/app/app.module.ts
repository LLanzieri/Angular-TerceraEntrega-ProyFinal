import { NgModule, isDevMode } from '@angular/core';

import { AgregarAlumnoDialogComponent } from './alumnos/components/agregar-alumno-dialog/agregar-alumno-dialog.component';
import { AlumnosStoreEffects } from './alumnos/state/alumnos-store.effects';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthEffects } from './autenticacion/state/auth.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { EditarAlumnoDialogComponent } from './alumnos/components/editar-alumno-dialog/editar-alumno-dialog.component';
import { EffectsModule } from '@ngrx/effects';
import { FormatoTituloDirective } from './directives/formato-titulo.directive';
import { SharedModule } from './shared/shared.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    FormatoTituloDirective,
    EditarAlumnoDialogComponent,
    AgregarAlumnoDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
