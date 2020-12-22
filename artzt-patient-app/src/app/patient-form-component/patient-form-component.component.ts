import { Component, OnInit } from '@angular/core';
import { Formular } from '../models/Formular.model';
import { FormServiceService } from '../form-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-patient-form-component',
  templateUrl: './patient-form-component.component.html',
  styleUrls: ['./patient-form-component.component.css']
})
export class PatientFormComponentComponent implements OnInit {



  constructor(private Auth: AuthService, private fs: FormServiceService, private router: Router, private route: ActivatedRoute) { }

  public mood: string = "";
  public activityLevel: string = "";
  public morningLow: string = "";
  public sleepQuality: string = "";
  public sleepDisorder: string = "";
  public otherBodySymptoms: string = "";
  public thoughtsOfSuicide: string = "";
  public appetit: string = "";

  ngOnInit(): void {
  }

  submit(event): void {

    const target = event.target;
    const moodText = target.querySelector('#moodText').value;
    const drugs = target.querySelector('#drugs').value;
    const dosesofmedication = target.querySelector('#dosesOfMedication').value;
    let form: Formular = new Formular;
    this.route.queryParams.subscribe(params => {
      form.formId = params['id'];
    });

    form.date = "";
    form.mood = this.mood;
    form.moodText = moodText;
    form.activityLevel = this.activityLevel;
    form.morningLow = this.morningLow;
    form.sleepQuality = this.sleepQuality;
    form.sleepDisorder = this.sleepDisorder;
    form.appetit = this.appetit;
    form.otherBodySymptoms = this.otherBodySymptoms;
    form.thoughtsOfSuicide = this.thoughtsOfSuicide;
    form.drugs.push(drugs);
    form.dosesOfMedication.push(dosesofmedication);

    this.fs.submitForm(form).subscribe(
      (data: Formular) => {
      },
      (error: any) => { console.log(error); }
    );
    this.Auth.getForms();
    this.goToOption(form.formId)
    } 
    goToOption(id: string) {
      this.router.navigate(['patient-options'], { queryParams: { id: id } });
    }
  
  }
  
  
