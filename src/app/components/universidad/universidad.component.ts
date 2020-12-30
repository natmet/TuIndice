import { useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { CargarUniversidadesService } from 'src/app/services/cargar-universidades.service';
@Component({
  selector: 'app-universidad',
  templateUrl: './universidad.component.html',
  styleUrls: ['./universidad.component.css'],
})
export class UniversidadComponent implements OnInit {
  universidades;
  constructor(private us: CargarUniversidadesService) {}

  ngOnInit(): void {
    this.universidades = this.us.universidades;
  }
}
