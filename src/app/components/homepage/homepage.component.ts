import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

interface AuthResponse {
  message: string;
  info: {
    fullname: string;
    token: string;
  };
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})


export class HomepageComponent {

  fullname: string = 'le G';

  constructor(private cookieService: CookieService) {
    this.fullname = this.cookieService.get('monCookie');
  }


}
