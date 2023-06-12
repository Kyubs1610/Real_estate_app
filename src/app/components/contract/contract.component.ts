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

  constructor(private homepageService: HomepageService) {}

 ngOnInit() {
    this.homepageService.getFirstname().subscribe((response: AuthResponse) => {
      console.log(response.fullname); // Log the firstname property of the first object
      this.fullname = response.fullname; // Assign the firstname property to the template variable
    }, (error) => {
      console.error(error);
    });
  }


}
