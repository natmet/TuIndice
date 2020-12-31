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
      carreras: [
        {
          nombreCarrera: 'Desarollo de software',
          materias: [
            { nombreMateria: '', creditos: 5, calificacion: 'A' },
            { nombreMateria: '', creditos: 5, calificacion: 'A' },
            { nombreMateria: '', creditos: 5, calificacion: 'A' },
            { nombreMateria: '', creditos: 5, calificacion: 'A' },
            { nombreMateria: '', creditos: 5, calificacion: 'A' },
            { nombreMateria: '', creditos: 5, calificacion: 'A' },
            { nombreMateria: '', creditos: 5, calificacion: 'A' },
          ],
        },
      ],
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
    {
      nombre: 'APEC',
      logo: 'assets/img/apec.png',
      tipoCalificacion: 'numeros',
    },
  ];

  constructor() {}
}
