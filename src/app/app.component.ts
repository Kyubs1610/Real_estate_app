import { Component } from '@angular/core';
import { Router } from 'express';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'elivy_app';
  constructor(public router: Router) {}

  isValid(): boolean {
    if ((this.router.url != '/'))  {
              return true;
      }
    return false;
  }
}
