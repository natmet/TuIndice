import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { UniversidadComponent } from './components/universidad/universidad.component';

const routes: Routes = [
  { path: 'inicio', component: UniversidadComponent },
  { path: '**', component: UniversidadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
