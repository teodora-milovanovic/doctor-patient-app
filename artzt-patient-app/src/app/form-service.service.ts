import { Injectable } from '@angular/core';
import { Formular } from './models/Formular.model';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class FormServiceService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }


  submitForm(form: Formular): Observable<Formular> {
    return this.http.post<Formular>('http://localhost:8080/api/v1/person/form', form, this.httpOptions)
      .pipe(

        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    // TODO: seems we cannot use messageService from here...
    let errMsg = (error.message) ? error.message : 'Server error';
    console.error(errMsg);
    if (error.status === 401) {
      window.location.href = '/';
    }
    return Observable.throw(errMsg);
  }
}
