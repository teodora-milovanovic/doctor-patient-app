import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientOptionComponent } from './patient-option.component';

describe('PatientOptionComponent', () => {
  let component: PatientOptionComponent;
  let fixture: ComponentFixture<PatientOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
