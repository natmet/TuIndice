import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CargarUniversidadesService } from 'src/app/services/cargar-universidades.service';

@Component({
  selector: 'app-universidad',
  templateUrl: './universidad.component.html',
  styleUrls: ['./universidad.component.css'],
})
export class UniversidadComponent implements OnInit {
  @Output() onFinishStep = new EventEmitter();
  universidades;
  constructor(private us: CargarUniversidadesService) {}

  ngOnInit(): void {
    this.universidades = this.us.universidades;
  }

  finishStep() {
    this.onFinishStep.emit();
  }
}
