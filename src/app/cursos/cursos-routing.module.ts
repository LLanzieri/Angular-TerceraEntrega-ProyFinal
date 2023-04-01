import { RouterModule, Routes } from '@angular/router';

import { CursosInicioComponent } from './components/cursos-inicio/cursos-inicio.component';
import { NgModule } from '@angular/core';
import { SesionGuard } from '../core/guards/sesion.guard';

const routes: Routes = [
  { path: '', canActivate: [SesionGuard], component: CursosInicioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
