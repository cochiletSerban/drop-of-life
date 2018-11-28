import { MaterializeModule } from 'angular2-materialize';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HttpClientModule } from '@angular/common/http';
import { GetBgService } from './services/get-bg.service';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AvaibleDonationsComponent } from './avaible-donations/avaible-donations.component';
import { CauseComponent } from './cause/cause.component';
import { UserFormComponent } from './user-form/user-form.component';

const appRoutes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: AuthPageComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'avaible-donations', component: AvaibleDonationsComponent },
  { path: 'user-form', component: UserFormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AuthPageComponent,
    UserProfileComponent,
    AvaibleDonationsComponent,
    CauseComponent,
    UserFormComponent
  ],
  imports: [
    MaterializeModule,
    BrowserModule,
    ReactiveFormsModule,
    Angular2FontawesomeModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GetBgService, AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
