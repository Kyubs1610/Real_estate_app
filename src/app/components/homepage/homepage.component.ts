import { Component, OnInit } from '@angular/core';
import { HomepageService } from 'src/app/services/homepage.service';

interface AuthResponse {
  [index: number]: 
  {
  fullname: string;
  id: number;
  firstname: string;
  lastname: string;
  phoneNumber: string;
  email: string;
  isPasswordRequired: boolean;
  createdAt: string;
  updatedAt: string;
}}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  firstname!: string;

  constructor(private homepageService: HomepageService) {}

  ngOnInit() {
    this.homepageService.getFirstname().subscribe((response: AuthResponse) => {
      console.log(response[0].firstname); // Log the firstname property of the first object
      this.firstname = response[0].firstname; // Assign the firstname property to the template variable
    }, (error) => {
      console.error(error);
    });
  }
}
