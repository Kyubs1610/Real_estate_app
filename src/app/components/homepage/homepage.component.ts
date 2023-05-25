import { Component, OnInit } from '@angular/core';
import { HomepageService } from 'src/app/services/homepage.service';

interface AuthResponse {
   
  
  fullname: string;
  id: number;
  firstname: string;
  lastname: string;
  phoneNumber: string;
  email: string;
  isPasswordRequired: boolean;
  createdAt: string;
  updatedAt: string;
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
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
