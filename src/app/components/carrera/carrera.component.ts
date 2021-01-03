import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  Inject,
  Input,
} from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { CollegeService } from 'src/app/shared/models/college-service';
import { Career } from 'src/app/shared/models/universidades.model';

@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.component.html',
  styleUrls: ['./carrera.component.css'],
})
export class CarreraComponent implements OnInit {
  @Input() collegeID: number;
  @Output() onFinishStep = new EventEmitter();
  faSearch = faSearch;
  careers: Array<Career>;

  constructor(
    @Inject('CollegeService') private collegeService: CollegeService
  ) {}

  ngOnInit(): void {
    this.careers = this.collegeService.getCareers();
  }

  finishStep() {
    this.onFinishStep.emit();
  }
}
