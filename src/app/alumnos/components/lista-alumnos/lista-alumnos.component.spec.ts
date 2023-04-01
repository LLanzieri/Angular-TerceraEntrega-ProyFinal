import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alumno } from 'src/app/interfaces/alumno';
import { AlumnosService } from '../../services/alumnos.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ListaAlumnosComponent } from './lista-alumnos.component';
import { SharedModule } from '../../../shared/shared.module';
import { of } from 'rxjs';

describe('ListaAlumnosComponent', () => {
  let component: ListaAlumnosComponent;
  let fixture: ComponentFixture<ListaAlumnosComponent>;
  let service: AlumnosService;
  let httpClientSpy: { get: jasmine.Spy }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaAlumnosComponent],
      imports: [
        SharedModule,
        HttpClientTestingModule
      ],
      providers: [
        AlumnosService,

      ]
    })
      .compileComponents();
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new AlumnosService(httpClientSpy as any);
    fixture = TestBed.createComponent(ListaAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El componente LISTAALUMNOS se inicializa correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('El servicio retorna la lista de alumnos mockeados', (done: DoneFn) => {
    const mockDatos: Alumno[] = [
      {
        "id": "1",
        "dni": 123123123,
        "nombre": "Lionel",
        "apellido": "Messi",
        "edad": 35,
        "cursoAprobado": true,
        "urlFoto": "../../assets/messi.jpg",
        "nota1": 10,
        "nota2": 10
      },
      {
        "id": "2",
        "dni": 222222333,
        "nombre": "Sergio",
        "apellido": "Aguero",
        "edad": 30,
        "cursoAprobado": false,
        "urlFoto": "../../assets/kun-aguero.jpg",
        "nota1": 2,
        "nota2": 3
      },
      {
        "id": "3",
        "dni": 33221111,
        "nombre": "Leandro",
        "apellido": "Paredes",
        "edad": 30,
        "cursoAprobado": true,
        "urlFoto": "../../assets/Leandro-Paredes.jpg",
        "nota1": 7,
        "nota2": 7
      },
      {
        "id": "4",
        "dni": 111223344,
        "nombre": "Emiliano",
        "apellido": "Martinez",
        "edad": 32,
        "cursoAprobado": true,
        "urlFoto": "../../assets/dibumartinez.jpg",
        "nota1": 9,
        "nota2": 9
      },
      {
        "id": "5",
        "dni": 6667754,
        "nombre": "Nicolas",
        "apellido": "Otamendi",
        "edad": 29,
        "cursoAprobado": true,
        "urlFoto": "../../assets/otamendi.jpg",
        "nota1": 9,
        "nota2": 8
      },
      {
        "id": "6",
        "dni": 456421,
        "nombre": "Alexis",
        "apellido": "Mac Allister",
        "edad": 28,
        "cursoAprobado": false,
        "urlFoto": "../../assets/alexis.PNG",
        "nota1": 3,
        "nota2": 3
      },
      {
        "id": "7",
        "dni": 908754,
        "nombre": "Lautaro",
        "apellido": "Martinez",
        "edad": 29,
        "cursoAprobado": true,
        "urlFoto": "../../assets/lautaromartinez.PNG",
        "nota1": 9,
        "nota2": 8
      },
      {
        "id": "8",
        "dni": 200715141,
        "nombre": "Angel",
        "apellido": "Di Maria",
        "edad": 34,
        "cursoAprobado": false,
        "urlFoto": "../../assets/dimaria.PNG",
        "nota1": 4,
        "nota2": 2
      },
      {
        "dni": 123123123213213,
        "nombre": "sadsadasd",
        "apellido": "ddddddddddd",
        "edad": 22,
        "cursoAprobado": true,
        "urlFoto": "../../../assets/incognito.png",
        "nota1": 5,
        "nota2": 10,
        "id": "9"
      },
      {
        "dni": 11111111111111112,
        "nombre": "Prueba nombre",
        "apellido": "Prueba apellido",
        "edad": 33,
        "cursoAprobado": true,
        "urlFoto": "../../../assets/incognito.png",
        "nota1": 2,
        "nota2": 2,
        "id": "10"
      },
      {
        "dni": 1312321321312,
        "nombre": "sadsdas",
        "apellido": "asdasdas",
        "edad": 22,
        "cursoAprobado": false,
        "urlFoto": "../../../assets/incognito.png",
        "nota1": 3,
        "nota2": 5,
        "id": "11"
      }
    ]

    httpClientSpy.get.and.returnValue(of(mockDatos));

    service.getAlumnos().subscribe((alumnos: Alumno[]) => {

      expect(alumnos).toEqual(mockDatos);
      done();
    })

  })

});
