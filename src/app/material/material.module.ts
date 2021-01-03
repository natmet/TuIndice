import { NgModule } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';

const MaterialComponents = [MatStepperModule];

@NgModule({
  imports: [MatStepperModule],
  exports: [MatStepperModule],
})
export class MaterialModule {}
