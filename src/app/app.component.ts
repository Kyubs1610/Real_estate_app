import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'elivy_app';
  constructor(private router: Router) {}



  isValid(): boolean {
    const tenantRegistrationPattern = /^\/tenant\/registration\/\d+\/token\/[a-zA-Z0-9]+$/;
    if (
      this.router.url !== '/' &&
      this.router.url !== '/tenant/registration/:id/token/:token' &&
      this.router.url !== '/unauthorized' &&
      this.router.url !== '/email' &&
      !this.router.url.startsWith('/reset') &&
      !tenantRegistrationPattern.test(this.router.url)
    ) {
      return true;
    }
    return false;
  }



}
