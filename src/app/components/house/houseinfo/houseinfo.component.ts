import { Component, OnInit } from '@angular/core';
import { Building } from 'src/app/models/building.model';
import { HouseService } from 'src/app/services/house/house.service';

@Component({
  selector: 'app-houseinfo',
  templateUrl: './houseinfo.component.html',
  styleUrls: ['./houseinfo.component.scss']
})
export class HouseinfoComponent implements OnInit {
  
  buildings: Building[] = [];
  id!: number;
  building!: Building 

  constructor(private HouseService: HouseService) { }
  ngOnInit() {
    this.HouseService.getbuildingById(this.id).subscribe(
      (response: Building) => {
        if (response) {
          this.building = response;
          console.log(this.building);
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }
  
  isMobile() {
    return window.innerWidth <= 767;
  }
}
