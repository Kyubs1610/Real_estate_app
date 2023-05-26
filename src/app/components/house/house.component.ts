import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HouseService } from './../../services/house.service';
import { Component, OnInit } from '@angular/core';
import { addformComponent } from './addform.component';

interface building extends Array<{
  id: number;
  name: string;
  addressStreet: string;
  addressCity: string;
  addressPostalCode: string;
  addressCountry: string;
  doorCode: string;
  updatedAt: string;
  createdAt: string;
  rooms: any[];
  
}> {}

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})


export class buildingComponent implements OnInit {
  search: string = '';
  newbuilding: any = {}; // Declare newbuilding property
  showAddBuildingSection: boolean = false;
  buildings:  any[] = [];
  filteredbuildings: any[] = this.buildings;
  id!: number 

  
  constructor(
    private HouseService : HouseService,
    private dialog: MatDialog,
    ) {}

    ngOnInit() {
      this.HouseService.getbuilding().subscribe((response: building) => {
        console.log(response); // Log the response object
        this.buildings = response; // Assign the response to buildings array
        this.filteredbuildings = response; // Assign the response to filteredbuildings array
      }, (error) => {
        console.error(error);
      });
    }

  toggleDetails(building: any) {
      building.showDetails = !building.showDetails;
  }  

  openDialog() {
   this.dialog.open(addformComponent, { panelClass: 'custom' })
  }

    
  tooglerooms() {
    this.showAddBuildingSection = !this.showAddBuildingSection;
    this.newbuilding = {}; // Reset newbuilding object when toggling the section
  }
  // Make the searchbar for looking the building name
searchBuilding() {
  this.filteredbuildings = this.buildings.filter((building: any) => {
    return building.name.toLowerCase().includes(this.search.toLowerCase());
  });
}
    //remove building

    removeBuilding(id: number) {
      this.HouseService.removebuilding(id).subscribe(
        (response: building) => {
          console.log(response); // Log the response object
          this.buildings = response; // Assign the response to buildings array
          this.filteredbuildings = response; // Assign the response to filteredbuildings array
        },
        (error) => {
          console.error(error);
        }
      );
    }

// addRoom() {
//   if (!this.newbuilding.chambres || this.newbuilding.chambres.length === 0) {
//     // If chambres array is empty, initialize it with a default room
//     this.newbuilding.chambres = [
//       {
//         id: 1,
//         nom: '',
//         locataire: ''
//       }
//     ];
//   } else {
//     // If chambres array already has rooms, add a new room
//     const newRoom = {
//       id: this.newbuilding.chambres.length + 1,
//       nom: '',
//       locataire: ''
//     };
//     this.newbuilding.chambres.push(newRoom);
//   }
// }


// removeRoom(index: number) {
//   this.newbuilding.chambres.splice(index, 1);
// }



}

