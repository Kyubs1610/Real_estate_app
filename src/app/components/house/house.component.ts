import { MatDialog } from '@angular/material/dialog';
import { HouseService } from './../../services/house.service';
import { Component, OnInit } from '@angular/core';
import { addformComponent } from './add/addform.component';
import { SnackBar } from '../snackbar/snackbar.component';
import { UpdateFormComponent } from './update/updateform.component';
import { AddroomsService } from './../../services/rooms/addrooms.service';
import { Room } from './../../models/room.model';
import { addRoomComponent } from '../rooms/addRooms/add-rooms/add-rooms.component';

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
  rooms: Room[] = [];
  
  constructor(
    private HouseService : HouseService,
    private dialog: MatDialog,
    private snackBar: SnackBar,
    private AddroomsService: AddroomsService,
    ) {}

    ngOnInit() {
      this.HouseService.getbuilding().subscribe((response: building) => {
        this.buildings = response;
        this.filteredbuildings = response;
      }, (error) => {
        console.error(error);
      });
      this.AddroomsService.roomsSubject.subscribe((response: Room[]) => {
        this.rooms = response;
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

  openRoomDialog(id: number) {
    this.dialog.open(addRoomComponent, { panelClass: 'custom' })
  }

// Open the update dialog
openUpdateDialog(id: number) {
  // Find the building to update based on the id
  const buildingToUpdate = this.buildings.find((building) => building.id === id);

  // If the building is found, open the dialog with the building data
  if (buildingToUpdate) {
    const dialogRef = this.dialog.open(UpdateFormComponent, {
      panelClass: 'custom',
      data: {
        id: id,
        buildings: this.buildings
      }
    });

    // Optional: Subscribe to the dialog's afterClosed event to perform any necessary actions after the dialog is closed
    dialogRef.afterClosed().subscribe(result => {
      // Handle refresh data & show snackbar
    });
  } else {
    console.error(`Building with ID ${id} not found.`);
  }
}

  // Make the searchbar for looking the building name
searchBuilding() {
  this.filteredbuildings = this.buildings.filter((building: any) => {
    return building.name.toLowerCase().includes(this.search.toLowerCase());
  });
}

  // Remove building

  removeBuilding(id: number) {
    this.HouseService.removebuilding(id).subscribe(
      (response: building) => {
        this.buildings = response;
        this.snackBar.deleteSnackBar();
      },
      (error) => {
        console.error(error);
      }
    );
  }



}

