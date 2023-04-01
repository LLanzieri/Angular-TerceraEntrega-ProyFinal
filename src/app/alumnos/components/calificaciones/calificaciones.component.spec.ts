import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosService } from '../../services/alumnos.service';
import { CalificacionesComponent } from './calificaciones.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from '../../../shared/shared.module';

describe('CalificacionesComponent', () => {
  let component: CalificacionesComponent;
  let fixture: ComponentFixture<CalificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalificacionesComponent],
      imports: [
        HttpClientTestingModule,
        SharedModule
      ],
      providers: [
        AlumnosService
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CalificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El componente CALIFICACIONES se crea correctamente', () => {
    expect(component).toBeTruthy();
  });
});
