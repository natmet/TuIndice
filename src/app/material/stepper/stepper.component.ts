import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
})
export class StepperComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  pasos = [false, false, false];
  actualStep = 0;

  pasoSiguiente(pasoActual: number, stepper: any) {
    this.pasos[pasoActual] = true;
    this.actualStep = 1;
    stepper.next();
  }
}
