import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HomepageService } from 'src/app/services/homepage/homepage.service';
import { AuthResponse } from 'src/app/models/AuthResponse.model';
import { HttpClient } from '@angular/common/http';

const BASEURL = 'http://localhost:3000/';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent {
  fullname!: string;
  emailAddress!: string;

  constructor(
    private homepageService: HomepageService,
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.homepageService.getFirstname().subscribe(
      (response: AuthResponse) => {
        console.log(response.fullname);
        this.fullname = response.fullname;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  sendEmail(tenantEmail: string) {
    const body = { tenantEmail };
    const options = {
      withCredentials: true
    };
    console.log(body);

    return this.http
      .post<any>(`${BASEURL}v1/tenant/registrationform`, body, options)
      .subscribe(
        (response) => {
          console.log('Email sent successfully!', response);
          this.snackBar.open('Email sent successfully!', 'Close', {
            duration: 2000
          });
        },
        (error) => {
          console.error('Error sending email:', error);
          this.snackBar.open('Error sending email!', 'Close', {
            duration: 2000
          });
        }
      );
  }

  generateContract() {}
}
