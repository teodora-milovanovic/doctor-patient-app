import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientFormComponentComponent } from './patient-form-component.component';

describe('PatientFormComponentComponent', () => {
  let component: PatientFormComponentComponent;
  let fixture: ComponentFixture<PatientFormComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientFormComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
