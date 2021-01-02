import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { UniversidadComponent } from './components/universidad/universidad.component';
import { CarreraComponent } from './components/carrera/carrera.component';

const routes: Routes = [
  { path: 'inicio', component: UniversidadComponent },
  { path: 'carreras', component: CarreraComponent },
  { path: 'calculadora', component: CalculadoraComponent },
  { path: '**', component: UniversidadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
