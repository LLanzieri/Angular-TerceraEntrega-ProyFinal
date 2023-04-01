import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRoutingModule } from '../../../app-routing.module';
import { AutenticacionInicioComponent } from './autenticacion-inicio.component';
import { AutenticacionRoutingModule } from '../../autenticacion-routing.module';

describe('AutenticacionInicioComponent', () => {
  let component: AutenticacionInicioComponent;
  let fixture: ComponentFixture<AutenticacionInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutenticacionInicioComponent],
      imports: [
        AppRoutingModule,
        AutenticacionRoutingModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AutenticacionInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
