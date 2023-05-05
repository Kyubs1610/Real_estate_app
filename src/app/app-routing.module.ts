import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginSuccessComponent } from './components/login-success/login-success.component';
// import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path:'',
    component : LoginPageComponent
  },

  {
    path:'auth',
    component : LoginSuccessComponent
    // canActivate: [
    //   AuthGuard
    // ],
    // resolve: {
      
    // }
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
