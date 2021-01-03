import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
})
export class CalculadoraComponent implements OnInit {
  @Output() onFinishStep = new EventEmitter();
  inputs: number[] = [0];
  constructor() {}

  ngOnInit(): void {}

  agregarMateria(numero: number) {
    this.inputs.push(numero);
  }

  eliminarMateria(indice: number) {
    if (indice < 1) {
      return;
    } else this.inputs.splice(indice, 1);
  }
  finishStep() {
    this.onFinishStep.emit();
  }
}
