import { NgModule } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { SugerenciasModalComponent } from './sugerencias-modal/sugerencias-modal.component';
import { MatIconModule } from '@angular/material/icon';

const MaterialComponents = [MatStepperModule, MatButtonModule, MatIconModule];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
  declarations: [SugerenciasModalComponent],
})
export class MaterialModule {}
