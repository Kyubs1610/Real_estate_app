import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NofoundComponent } from './components/nofound/nofound.component';
import { AuthGuard } from './guards/auth.guard';
import { ResetComponent } from './components/reset/reset.component';
import { buildingComponent } from './components/house/house.component';
import { TenantComponent } from './components/tenant/tenant.component';
import { EmailsentComponent } from './components/emailsent/emailsent.component';

const routes: Routes = [
  {
    path:'',
    component : LoginPageComponent,
  },
  {
    path:'email',
    component : EmailsentComponent,
    canActivate: [AuthGuard]
  },
  {
   path: 'resetPassword/id/:id/token/:token',
   component : ResetComponent,
   
  },
  {
    path:'homepage',
    component : HomepageComponent,
    canActivate: [AuthGuard]
    
  },
  {
    path:'unauthorized',
    component : NofoundComponent
  },
  { path:'house',
    component : buildingComponent,
    canActivate: [AuthGuard]
  },
  { path:'tenant',  
    component : TenantComponent,
    canActivate: [AuthGuard]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
