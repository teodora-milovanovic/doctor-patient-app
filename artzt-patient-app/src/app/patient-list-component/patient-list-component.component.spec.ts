import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientListComponentComponent } from './patient-list-component.component';

describe('PatientListComponentComponent', () => {
  let component: PatientListComponentComponent;
  let fixture: ComponentFixture<PatientListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
