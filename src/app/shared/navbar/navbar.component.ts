import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SugerenciasComponent } from 'src/app/components/sugerencias/sugerencias.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    this.dialog.open(SugerenciasComponent);
  }
}
