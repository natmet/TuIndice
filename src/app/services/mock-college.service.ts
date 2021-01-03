import { Injectable } from '@angular/core';
import { Career, College, Subject } from 'src/app/shared/models/universidades.model'
import { CollegeService } from 'src/app/shared/models/college-service'

@Injectable({
  providedIn: 'root'
})
export class MockCollegeService implements CollegeService {

  constructor() { 
  }

  getColleges(): Array<College> {
    let colleges = new Array<College>();
    let college: College = {
      id: 1,
      name: 'ITLA',
      logo: '',
      scoringSystem: 'Numeric',
      careers: []
    }

    colleges.push(college);

    return colleges;
  }  

  getCareers(): Array<Career> {
    let careers = new Array<Career>();
    let colleges = ['Multimedia','Sonido','Mecatronica','Seguridad Informatica'];
    let career: Career = {
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
    return new Array<Subject>();
  }
}
