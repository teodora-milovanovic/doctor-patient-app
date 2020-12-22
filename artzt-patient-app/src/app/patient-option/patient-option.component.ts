
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../auth.service';
import { Person } from './../models/Person.model';
import { Formular } from './../models/Formular.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-patient-option',
  templateUrl: './patient-option.component.html',
  styleUrls: ['./patient-option.component.css']
})
export class PatientOptionComponent implements OnInit {

  formsFromPatient: Formular[] = [];
  selectedForm: Formular[];
  allForms: Formular[];
  allPersons: Person[];
  patient: string;
  patientId: string;

  constructor(private Auth: AuthService, private router: Router, private route: ActivatedRoute) {

    this.allPersons = Auth.persons;
    this.allForms = this.Auth.forms;
    this.Auth.getForms();
    this.route.queryParams.subscribe(params => {
      this.patientId = params['id'];
    });
  }

  goToForm() {
    this.router.navigate(['form'], { queryParams: { id: this.patientId } });
  }

  goToDetails() {
    this.router.navigate(['patientDetails'], { queryParams: { id: this.patientId } });
  }

  ngOnInit(): void {
  }

}
