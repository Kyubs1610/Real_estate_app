import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NofoundComponent } from './nofound/nofound.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path:'',
    component : LoginPageComponent,
  },

  {
    path:'homepage',
    component : HomepageComponent,
    canActivate: [AuthGuard]
    
  },
  {
    path:'unauthorized',
    component : NofoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
