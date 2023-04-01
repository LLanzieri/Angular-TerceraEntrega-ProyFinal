import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosService } from '../../services/alumnos.service';
import { EditarNotasComponent } from './editar-notas.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { SharedModule } from '../../../shared/shared.module';

describe('EditarNotasComponent', () => {
  let component: EditarNotasComponent;
  let fixture: ComponentFixture<EditarNotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarNotasComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        SharedModule
      ],
      providers: [
        AlumnosService
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EditarNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El componente EDITARNOTAS se inicia correctamente', () => {
    expect(component).toBeTruthy();
  });
});
