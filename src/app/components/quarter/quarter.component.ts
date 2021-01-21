import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import {Subject} from 'src/app/shared/models/universidades.model';

@Component({
  selector: 'app-quarter',
  templateUrl: './quarter.component.html',
  styleUrls: ['./quarter.component.css']
})
export class QuarterComponent implements OnInit {
  @Input() index: number;
  @Input() availableSubjects: Array<Subject>;
  @Input() scoreRange: Array<any>;

  quarterGPA: number;
  quarterForm: FormGroup;
  inputs: number[] = [0];
  subjectRows: FormArray;
  constructor() { }

  ngOnInit(): void {
    this.quarterForm = new FormGroup({
      subjectRows: new FormArray([])
    });
    this.quarterForm.valueChanges.subscribe(x => {
      console.log(x);
    })

    this.subjectRows = this.quarterForm.get('subjectRows') as FormArray;
  }

  agregarMateria(): void {
    this.subjectRows.push(new FormGroup({
      subjectCredits: new FormControl(''),
      subjectScore: new FormControl('')
    },[Validators.required]));

    this.getQuarterGPA();
  }

  getQuarterGPA(): void {
    const info = this.subjectRows.controls.map(x => {
      const obj = {
        credits: +x.get('subjectCredits').value,
        score: +x.get('subjectScore').value,
        total: +x.get('subjectCredits').value * (+x.get('subjectScore').value)
      }
      return obj;
    })

    let result = info.reduce((acc, element) => { 
      acc.credits = acc.credits + element.credits;
      acc.total = acc.total + element.total;
      return acc;
    });

    this.quarterGPA = (result.total /  result.credits);


  }

  eliminarMateria(indice: number): void {
    if (indice < 1) {
      return;
    } else this.inputs.splice(indice, 1);
  }
}
