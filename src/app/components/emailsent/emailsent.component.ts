import { Component } from '@angular/core';

// PasswordResetpage

@Component({
  selector: 'app-emailsent',
  templateUrl: './emailsent.component.html',
  styleUrls: ['./emailsent.component.scss']
})
export class EmailsentComponent {
  emailSent = false;

  sendEmail() {
    this.emailSent = true;
  }
}
