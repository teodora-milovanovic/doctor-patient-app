import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { Person } from '../models/Person.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Formular } from '../models/Formular.model';


@Component({
  selector: 'app-patient-list-component',
  templateUrl: './patient-list-component.component.html',
  styleUrls: ['./patient-list-component.component.css']
})
export class PatientListComponentComponent implements OnInit {


  @Input() id: string;
  allPersons: Person[];
  allForms: Formular[];
  doctor: Person;
  doctorId: string;
  patientIds: string[];
  patientsOfDoctor: Person[] = [];
  selectedPatient: Person;
  formsFromPatient: Formular[] = [];

  constructor(private Auth: AuthService, private route: ActivatedRoute, private router: Router) {

    this.allPersons = Auth.persons;
    this.allForms = this.Auth.forms;
    this.route.queryParams.subscribe(params => {
      this.doctorId = params['id'];
    });
    this.doctor = this.allPersons.filter(p => p.id == this.doctorId)[0];
    this.patientIds = this.doctor.patientIds;


    for (let i = 0; i < this.patientIds.length; i++) {
      this.patientsOfDoctor.push(this.allPersons.filter(p => p.id == this.patientIds[i])[0]);
    }
  }

  onSelect(id: string): void {

    this.router.navigate(['patientDetails'], { queryParams: { id: id } });
  }

  ngOnInit(): void { }

}
