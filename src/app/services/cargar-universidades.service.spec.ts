import { TestBed } from '@angular/core/testing';

import { CargarUniversidadesService } from './cargar-universidades.service';

describe('CargarUniversidadesService', () => {
  let service: CargarUniversidadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargarUniversidadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
