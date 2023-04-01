import { Alumno } from './alumno';

export interface Curso {
    id: string;
    nombre: string;
    fechaInicio: string;
    fechaFin: string,
    direccion: string;
    aula: string;
    turno: string;
    alumnos: Alumno[],
    comision: string
}