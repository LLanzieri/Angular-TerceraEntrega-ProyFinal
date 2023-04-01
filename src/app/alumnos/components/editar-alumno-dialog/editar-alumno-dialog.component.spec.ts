import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { EditarAlumnoDialogComponent } from './editar-alumno-dialog.component';
import { SharedModule } from '../../../shared/shared.module';

describe('EditarAlumnoDialogComponent', () => {
  let component: EditarAlumnoDialogComponent;
  let fixture: ComponentFixture<EditarAlumnoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarAlumnoDialogComponent],
      imports: [
        SharedModule,

      ],
      providers: [
        MatDialogRef,
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EditarAlumnoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
