import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  username: string = 'Guillaume';

  constructor(private cookieService: CookieService) {
    this.username = this.cookieService.get('monCookie');
  }


}
