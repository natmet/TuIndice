import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarterComponent } from './quarter.component';

describe('QuarterComponent', () => {
  let component: QuarterComponent;
  let fixture: ComponentFixture<QuarterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuarterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
