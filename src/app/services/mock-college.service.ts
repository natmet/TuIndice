import { Injectable } from '@angular/core';
import { Career, College, Score, Subject } from 'src/app/shared/models/universidades.model'
import { CollegeService } from 'src/app/shared/models/college-service'

@Injectable({
  providedIn: 'root'
})
export class MockCollegeService implements CollegeService {

  constructor() { 
  }

  getColleges(): Array<College> {
    const colleges = new Array<College>();
    const scores = [{a:'A',b:4},{a:'B',b:3},{a:'C',b:2},{a:'F',b:0}];
    const collegeScores = new Array<Score>();
    const score: Score = {
      literal: '',
      value: 0
    }
    scores.forEach(x => {
      score.literal = x.a;
      score.value = x.b;
      collegeScores.push(Object.assign({},score))
    })
    const college: College = {
      id: 1,
      name: 'ITLA',
      logo: '',
      scoringSystem: 'Numeric',
      scores: collegeScores,
      careers: []
    }
    
    colleges.push(college);

    return colleges;
  }  

  getCareers(): Array<Career> {
    const careers = new Array<Career>();
    const colleges = [
      'Multimedia',
      'Sonido',
      'Mecatronica',
      'Seguridad Informatica'
    ];
    const career: Career = {
      id: 1,
      name: '',
      subjects: new Array<Subject>()
    }

    colleges.forEach((x)=>{
      career.name = x;
      careers.push(Object.assign({},career));
    } );
    
    return careers;
  }

  getSubjects(): Array<Subject> {
    const subjects = new Array<Subject>();
    const subject:Subject = {
      id: 1,
      score: 0,
      name: '',
      credits:0
    }
    const subjectNames = [
      {name: 'Redacción Castellana', credits:4},
      {name: 'Historia Dominicana', credits:4},
      {name: 'Ética 1: Ética de la Persona', credits:3}
    ]
    subjectNames.forEach(x => {
      subject.name = x.name;
      subject.credits = x.credits;
      subjects.push(Object.assign({},subject));
    })
    
    return subjects;
  }
}
