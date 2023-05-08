import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'elivy_app';
  constructor(public router: Router) {}



  isValid(): boolean {
    if ((this.router.url != '/' && this.router.url != '/unauthorized'))  {
              return true;
      }
    return false;
  }



}
