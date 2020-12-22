import { Injectable, Injector } from '@angular/core';
import { Person } from './models/Person.model';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { Formular } from './models/Formular.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  persons: Person[];
  forms: Formular[];
  http: HttpClient

  constructor(http: HttpClient, private router: Router, private injector: Injector) {

    http.get<Person[]>('http://localhost:8080/api/v1/person')
      .subscribe(data => {

        this.persons = data;
      });

    http.get<Formular[]>('http://localhost:8080/api/v1/person/form')
      .subscribe(data => {
  
        this.forms = data;
      });
    this.http = injector.get(HttpClient);
  }

  getForms() {

    return this.http.get<Formular[]>('http://localhost:8080/api/v1/person/form');
  }

  findForms(id: String) {

    let findForms: Formular[] = [];
    for (let i = 0; i < this.forms.length; i++) {
      if (this.forms[i].formId == id) {
        findForms.push(this.forms[i]);
      }
    }
    return findForms;
  }

  loginUser(email, password) {
    const persons = this.persons.filter(p => p.email == email);
    if (persons.length == 1) {
      if (persons[0].password == password) {
        if (persons[0].role == 'D') {
          this.router.navigate(['patientList'], { queryParams: { id: persons[0].id } });
        } else if (persons[0].role == 'P') {
          this.router.navigate(['patient-options'], { queryParams: { id: persons[0].id } });
        }
      } else {
        console.log("falsches password");
      }
    }
  }
}


