import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CargarUniversidadesService {
  universidades = [
    {
      nombre: 'ITLA',
      logo: 'assets/img/itla.png',
      tipoCalificacion: 'numeros',
      // carreras: [
      //   {
      //     nombreCarrera: 'Desarollo de software',
      //     materias: [{ nombreMateria: '', creditos: 5 }],
      //   },
      // ],
    },
    {
      nombre: 'UNIBE',
      logo: 'assets/img/unibe.png',
      tipoCalificacion: 'numeros',
    },
    {
      nombre: 'INTEC',
      logo: 'assets/img/intec.png',
      tipoCalificacion: 'numeros',
    },
  ];

  constructor() {}
}
