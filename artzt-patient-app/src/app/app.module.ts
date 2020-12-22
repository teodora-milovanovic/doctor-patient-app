import { PatientFormComponentComponent } from './patient-form-component/patient-form-component.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PatientListComponentComponent } from './patient-list-component/patient-list-component.component';
import { AuthService } from './auth.service';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { ChartsModule } from 'ng2-charts';
import { MatTableModule } from '@angular/material/table';
import { PatientOptionComponent } from './patient-option/patient-option.component';
import { FormServiceService } from './form-service.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PatientFormComponentComponent,
    PatientListComponentComponent,
    PatientDetailComponent,
    PatientOptionComponent
  ],
  imports: [

    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
    MatTableModule,

    RouterModule.forRoot(
      [{
        path: '',
        component: HomeComponent
      }, {
        path: 'login',
        component: LoginComponent
      }, {
        path: 'patient-options',
        component: PatientOptionComponent
      }
        , {
        path: 'form',
        component: PatientFormComponentComponent
      }
        , {
        path: 'patientList',
        component: PatientListComponentComponent
      },
      {
        path: 'patientDetails',
        component: PatientDetailComponent
      }

      ]
    ),

  ],

  providers: [AuthService, FormServiceService],
  bootstrap: [AppComponent]

})
export class AppModule { }
