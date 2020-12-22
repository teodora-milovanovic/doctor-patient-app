import { Component, OnInit } from '@angular/core';
import { Formular } from '../models/Formular.model';
import { AuthService } from '../auth.service';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


export interface moodDisorder {
  datum: string;
  mood: string;
}
const moodData: moodDisorder[] = [];

export interface sleepDisorder {
  datum: string;
  sleep: string;
}
const sleepData: sleepDisorder[] = [];

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {

  displayedColumns: string[] = ['datum', 'medikament', 'dosis'];
  displayedColumnsMoodText: string[] = ['datum', 'mood'];
  displayedColumnsSleepText: string[] = ['datum', 'sleep'];
  moodDataUI = moodData;
  sleepDataUI = sleepData;
  drugs: string[] = [];
  doses: string[] = [];
  forms: Formular[] = [];
  id: String;

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = [];
  public barChartType = 'line';
  public barChartLegend = true;

  public medication = [];
  dataSource = this.medication;

  public barChartDataMood = [
    { data: [], label: 'Stimmung', text: [[], []], hasText: true, moodText: true }
  ];
  public barChartDataActivity = [
    { data: [], label: 'Aktivitätsniveau', text: [[], []], hasText: false, }
  ];
  public barChartDataSleep = [
    { data: [], label: 'Schlafqualität', text: [[], []], hasText: true, sleepText: true }
  ];
  public barChartDataBodySymptoms = [
    { data: [], label: 'Körperliche Symptome', text: [[], []], hasText: false }
  ];
  public barChartDataSuicid = [
    { data: [], label: 'Anwesenheit der Suizidalen Gedanken', text: [[], []], hasText: false }
  ];
  public barChartDataMorningTief = [
    { data: [], label: 'Anwesenheit des Morgentiefs', text: [[], []], hasText: false }
  ];
  public barChartDataApetit = [
    { data: [], label: 'Appetit', text: [[], []], hasText: false }
  ];


  barChartData: Object[] = [this.barChartDataMood, this.barChartDataActivity, this.barChartDataSleep,
  this.barChartDataBodySymptoms, this.barChartDataSuicid, this.barChartDataMorningTief, this.barChartDataApetit];

  showSleepTable: boolean = false;
  showSleepTableOnClick() {

    if (this.showSleepTable === false) {
      this.showSleepTable = true;
    } else {
      this.showSleepTable = false;
    }
  }

  showMoodTable: boolean = false;
  showMoodTableOnClick() {

    if (this.showMoodTable === false) {
      this.showMoodTable = true;
    } else {
      this.showMoodTable = false;
    }
  }

  showMedicationTable: boolean = false;
  showMedicationTableOnClick() {

    if (this.showMedicationTable === false) {
      this.showMedicationTable = true;
    }
    else {
      this.showMedicationTable = false;
    }
  }

  constructor(private Auth: AuthService, http: HttpClient,
    private route: ActivatedRoute) {
    Auth.getForms().subscribe(data => {
      this.route.queryParams.subscribe(params => {
        this.id = params['id'];
        this.forms = Auth.findForms(this.id);
      });
      
      this.forms = data;
      let selectedForms: Formular[] = [];
      for (let i = 0; i < this.forms.length; i++) {
        if (this.forms[i].formId == this.id) {
          selectedForms.push(this.forms[i]);
        }
      }
      this.forms = selectedForms;
      
      if (moodData.length == 0) {
        for (let i = 0; i < this.forms.length; i++) {
          moodData.push({ datum: this.forms[i].date.toString(), mood: this.forms[i].moodText });
        }
      }

      if (sleepData.length == 0) {

        for (let i = 0; i < this.forms.length; i++) {
          sleepData.push({ datum: this.forms[i].date.toString(), sleep: this.forms[i].sleepDisorder });
        }

      }
      if (this.barChartDataMood[0].data.length === 0) {
        for (let i = 0; i < this.forms.length; i++) {

          this.barChartLabels.push(this.forms[i].date.toString());
          this.barChartDataMood[0].data.push(Number.parseInt(this.forms[i].mood));
          this.barChartDataMood[0].text[0].push(this.forms[i].moodText);
          this.barChartDataMood[0].text[1].push(this.forms[i].date.toString());
          this.barChartDataActivity[0].data.push(Number.parseInt(this.forms[i].activityLevel));
          this.barChartDataSleep[0].data.push(Number.parseInt(this.forms[i].sleepQuality));
          this.barChartDataSleep[0].text[0].push(this.forms[i].sleepDisorder);
          this.barChartDataSleep[0].text[1].push(this.forms[i].date.toString());
          this.barChartDataBodySymptoms[0].data.push(Number.parseInt(this.forms[i].otherBodySymptoms));
          this.barChartDataSuicid[0].data.push(Number.parseInt(this.forms[i].thoughtsOfSuicide));
          this.barChartDataMorningTief[0].data.push(Number.parseInt(this.forms[i].morningLow));
          this.barChartDataApetit[0].data.push(Number.parseInt(this.forms[i].appetit));

          let therapie = [
            {
              drug: this.forms[i].drugs.toString(), doses: this.forms[i].dosesOfMedication.toString(),
              date: this.forms[i].date.toString()
            }
          ];
          this.medication.push(therapie[0]);
        }
      }
    });
    sleepData.length = 0;
    moodData.length = 0;
  }
  ngOnInit(): void {

  }
}
