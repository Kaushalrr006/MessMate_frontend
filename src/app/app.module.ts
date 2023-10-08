import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
<<<<<<< HEAD
import { SignupComponent } from './signup/signup.component';
=======
import { SignInComponent } from './sign-in/sign-in.component';
>>>>>>> 1089240274dec0c8c3f510f76ae195fc5b6066ed

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    DashboardComponent,
    NavbarComponent,
<<<<<<< HEAD
    SignupComponent
=======
    SignInComponent
>>>>>>> 1089240274dec0c8c3f510f76ae195fc5b6066ed
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
