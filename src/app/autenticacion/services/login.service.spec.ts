import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginService } from './login.service';
import { TestBed } from '@angular/core/testing';
import { Usuario } from 'src/app/interfaces/usuario';
import { of } from 'rxjs';

describe('LoginService', () => {
  let service: LoginService;
  let httpClientSpy: { get: jasmine.Spy }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new LoginService(httpClientSpy as any);
  });

  it('El servicio LOGINSERVICE se inicializa correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('El servicio retorna la lista de alumnos mockeados', (done: DoneFn) => {
    const mockDatos: Usuario[] = [
      {
        "usuario": "Leora80@hotmail.com",
        "contrasena": "_b_FxSNwvo1v213",
        "id": "1"
      },
      {
        "usuario": "Grayce52@gmail.com",
        "contrasena": "JSHt2F8C0rR3hRp",
        "id": "2"
      },
      {
        "usuario": "Aurore.Predovic75@yahoo.com",
        "contrasena": "6VVt4KtIQkrXsAT",
        "id": "3"
      },
      {
        "usuario": "Tommie.Schaefer65@hotmail.com",
        "contrasena": "SzO7e25AyvWwc7x",
        "id": "4"
      },
      {
        "usuario": "Dameon.Bernier19@yahoo.com",
        "contrasena": "dYNqqncpDoOM5aM",
        "id": "5"
      },
      {
        "usuario": "Kale_OKon@hotmail.com",
        "contrasena": "7U7BGofcwf7i7l9",
        "id": "6"
      },
      {
        "usuario": "Otho16@gmail.com",
        "contrasena": "1A4xMDI3r0o8jnA",
        "id": "7"
      },
      {
        "usuario": "Holden.Hudson53@gmail.com",
        "contrasena": "ia9tW147Av1P436",
        "id": "8"
      },
      {
        "usuario": "Josefa24@hotmail.com",
        "contrasena": "NKh2KuHT3p0u0Sq",
        "id": "9"
      },
      {
        "usuario": "Rolando_Lynch71@gmail.com",
        "contrasena": "rvAO7QXR3V9HCTl",
        "id": "10"
      },
      {
        "usuario": "prueba@hotmail.com",
        "contrasena": "prueba@hotmail.com",
        "id": "11"
      },
      {
        "usuario": "asdasdasdsd@hotmail.com",
        "contrasena": "123123",
        "id": "12"
      },
      {
        "usuario": "asdasdasd@asdasd",
        "contrasena": "asdsadsad",
        "id": "13"
      },
      {
        "usuario": "sadasdasd@asdasdasd",
        "contrasena": "123123132",
        "id": "14"
      }
    ]

    httpClientSpy.get.and.returnValue(of(mockDatos));

    service.getUsuarios().subscribe((usuarios: Usuario[]) => {
      expect(usuarios).toEqual(mockDatos);
      done();
    })

  })
});
