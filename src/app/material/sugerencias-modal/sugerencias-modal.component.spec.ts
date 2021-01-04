import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SugerenciasModalComponent } from './sugerencias-modal.component';

describe('SugerenciasModalComponent', () => {
  let component: SugerenciasModalComponent;
  let fixture: ComponentFixture<SugerenciasModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugerenciasModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SugerenciasModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
