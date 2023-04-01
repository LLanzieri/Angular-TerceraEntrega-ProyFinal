import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosService } from '../../services/alumnos.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormAgregarAlumnoComponent } from './form-agregar-alumno.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { SharedModule } from '../../../shared/shared.module';

describe('FormAgregarAlumnoComponent', () => {
  let component: FormAgregarAlumnoComponent;
  let fixture: ComponentFixture<FormAgregarAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormAgregarAlumnoComponent],
      imports: [
        HttpClientTestingModule,
        SharedModule,
        BrowserAnimationsModule
      ],
      providers: [
        AlumnosService,

      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FormAgregarAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
