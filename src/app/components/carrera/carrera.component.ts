import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.component.html',
  styleUrls: ['./carrera.component.css'],
})
export class CarreraComponent implements OnInit {
  faSearch = faSearch;

  constructor() {}

  ngOnInit(): void {}
}
