import { College, Career, Subject } from "./universidades.model";

export interface CollegeService {
    getColleges(): Array<College>
    getCareers(): Array<Career>
    getSubjects(id: number): Array<Subject> 

}
