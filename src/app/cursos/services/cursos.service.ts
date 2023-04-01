import { Curso } from '../../interfaces/curso';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from 'src/environment/environment';

@Injectable()
export class CursosService {

  constructor(
    private http: HttpClient) {

  }

  getCursos(): Observable<Curso[]> {

    return this.http.get<Curso[]>(`${env.apiURLCursos}/cursos`);

  }
}
