import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { CollegeService } from 'src/app/shared/models/college-service';
import { College, Subject } from 'src/app/shared/models/universidades.model';

@Component({ 
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  @Input() careerID: number;
  @Output() onFinishStep = new EventEmitter();

  inputs: number[] = [0];
  college: College;
  subjects: Array<Subject>;
  periods: Array<number>;
  constructor(@Inject('CollegeService') private collegeService: CollegeService) {}


  ngOnInit(): void {
    this.subjects = this.collegeService.getSubjects(this.careerID);
    this.college = this.collegeService.getColleges()[0];
    console.log(this.college.scores);
    this.periods = [1,2,3,4,5];
  }

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
