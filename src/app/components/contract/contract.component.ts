import { ContractmailService } from './../../services/contract/contractmail.service';
import { Component } from '@angular/core';
import { HomepageService } from 'src/app/services/homepage/homepage.service';
import { AuthResponse } from 'src/app/models/AuthResponse.model';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent {
  fullname!: string;
  emailAddress!: string;

  constructor(private homepageService: HomepageService,
              private contractMailService: ContractmailService) {}

 ngOnInit() {
    this.homepageService.getFirstname().subscribe((response: AuthResponse) => {
      console.log(response.fullname); // Log the firstname property of the first object
      this.fullname = response.fullname; // Assign the firstname property to the template variable
    }, (error) => {
      console.error(error);
    });
  }

  sendContract() {
    if (this.emailAddress) {
      this.contractMailService.sendContract(this.emailAddress).subscribe(
        (response) => {
          console.log('Email sent successfully!');
        },
        (error) => {
          console.error('Failed to send email:', error);
        }
      );
    }
  }


  

}

