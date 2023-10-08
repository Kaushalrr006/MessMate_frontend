import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardsComponent } from './cards/cards.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{
  path: '', component: DashboardComponent
},
{
  path: 'dashboard', component: DashboardComponent
},
{
  path: 'navbar', component: NavbarComponent
},
{
  path: 'cards', component: CardsComponent
},
{
  path: 'signup', component: SignupComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
