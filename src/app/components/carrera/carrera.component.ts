import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.component.html',
  styleUrls: ['./carrera.component.css'],
})
export class CarreraComponent implements OnInit {
  @Output() onFinishStep = new EventEmitter();
  faSearch = faSearch;

  constructor() {}

  ngOnInit(): void {}

  finishStep() {
    this.onFinishStep.emit();
  }
}
