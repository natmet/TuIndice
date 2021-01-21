import { Component, OnInit } from '@angular/core';
import { UsuarioServicioService } from 'src/app/services/usuario-servicio.service';

@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.component.html',
  styleUrls: ['./sugerencias.component.css'],
})
export class SugerenciasComponent implements OnInit {
  constructor(private usuarioServicio: UsuarioServicioService) {}

  ngOnInit(): void {}

  enviarForm(form): void {
    this.usuarioServicio.sendForm(form);
  }
}
