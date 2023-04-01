import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { AgregarAlumnoDialogComponent } from './agregar-alumno-dialog.component';
import { SharedModule } from '../../../shared/shared.module';

describe('AgregarAlumnoDialogComponent', () => {
  let component: AgregarAlumnoDialogComponent;
  let fixture: ComponentFixture<AgregarAlumnoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarAlumnoDialogComponent],
      imports: [
        SharedModule,
        MatDialogModule
      ],
      providers: [
        MatDialogRef
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AgregarAlumnoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
