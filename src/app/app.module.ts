import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { UniversidadComponent } from './components/universidad/universidad.component';
import { CarreraComponent } from './components/carrera/carrera.component';
import { CollegeService } from 'src/app/shared/models/college-service';
import {MockCollegeService} from 'src/app/services/mock-college.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { StepperComponent } from './material/stepper/stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    NavbarComponent,
    FooterComponent,
    UniversidadComponent,
    CarreraComponent,
    StepperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [{provide: 'CollegeService', useClass: MockCollegeService}],

  bootstrap: [AppComponent],
})
export class AppModule {}
