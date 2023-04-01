import { AlumnosService } from './alumnos.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

describe('AlumnosService', () => {
  let service: AlumnosService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new AlumnosService(httpClientSpy as any);
  });

  it('should be created', (done: DoneFn) => {
    expect(service).toBeTruthy();
    done();
  });
});
