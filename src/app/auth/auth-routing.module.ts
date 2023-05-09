import { NgModule } from '@angular/core';
import { Routes }  from '@angular/router';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from '../components/login-page/login-page.component';

const routes: Routes = [
    { path: '', component: LoginPageComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
