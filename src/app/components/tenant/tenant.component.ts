import { TenantsService } from 'src/app/services/tenant/tenant.service';
import { Component } from '@angular/core';
import { Building, Room } from 'src/app/models/building.model';
import { HouseService } from 'src/app/services/house/house.service';
import { Tenant } from 'src/app/models/newtenant.model';
import {   MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarModule,
  MatSnackBarVerticalPosition, } from '@angular/material/snack-bar';

@Component({
  selector: 'app-tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.scss']
})
export class TenantComponent {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  tenant!: Tenant;
  tenants: Tenant[] = [];
  roomId!: number;

  
  newTenant: Tenant = {
    firstname: '',
    lastname: '',
    email: '',
    phoneNumber: '',
    contractStart: '',
    contractEnd: '',
   

};
  
  buildings: Building[] = [];
  filteredbuildings: Building[] = this.buildings;
  building:Building[] = [];
  selectedBuilding!: Building;

  rooms: Room[] = [];
  selectedRoom!: string 
  filteredRooms!: string[];
  room: Room[] = [];
  

  constructor(private tenantsService: TenantsService,
              private HouseService : HouseService,
              private _snackBar: MatSnackBar
              
              ) {}

  ngOnInit() {
    this.HouseService.getbuilding().subscribe((response: Building[]) => {
      this.buildings = response;
      this.filteredbuildings = response;
    }, (error) => {
      console.error(error);
    });
    this.tenants = [];
  }

  findRoomsByBuilding() {
    const selectedBuildingId = this.selectedBuilding;
    console.log(selectedBuildingId);
    if (selectedBuildingId) {
      this.tenantsService.getRooms(selectedBuildingId).subscribe(
        (response: any) => {
          this.rooms = response.rooms; // Assuming 'rooms' is the array property in the API response
          console.log(this.rooms);
          if (Array.isArray(this.rooms)) {
            this.filteredRooms = this.rooms.map((room) => room.roomNumber);
            console.log(this.filteredRooms);
          } else {
            console.error("this.rooms is not an array.");
          }
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

opensnackbarbusy() {
  this._snackBar.open('This room is occupied, please select another one', 'CLOSE', {
    horizontalPosition: this.horizontalPosition,
    verticalPosition: this.verticalPosition,
  });
}

  findIdByRoom() {
    const selectedRoomId = this.selectedRoom;
    console.log(selectedRoomId);
    if (selectedRoomId) {
      const room = this.rooms.find((r) => r.roomNumber === selectedRoomId);
      if (room) {
        const roomId = room.id; // Retrieve the ID of the room
        console.log(roomId);
        // Use the room ID as needed
        this.roomId = roomId;
        const roomBusy = room.status
        console.log(roomBusy);
        if (roomBusy === "rented") {
          this.opensnackbarbusy()
          // this.TenantpopupComponent.openBusyDialog()
        }
      } else {
        console.error("Room not found.");
      }
    }
  }



  addTenant() {
    const newTenant: Tenant = {
      firstname: this.newTenant.firstname,
      lastname: this.newTenant.lastname,
      email: this.newTenant.email,
      phoneNumber: this.newTenant.phoneNumber,
      contractStart: this.newTenant.contractStart ,
      contractEnd: this.newTenant.contractEnd,
     
    };

    newTenant.firstname = this.newTenant.firstname|| '';
    newTenant.lastname = this.newTenant.lastname|| '';
    newTenant.email = this.newTenant.email|| '';
    newTenant.phoneNumber = this.newTenant.phoneNumber|| '';
    newTenant.contractStart = this.newTenant.contractStart|| '';
    newTenant.contractEnd = this.newTenant.contractEnd|| '';
  
    // const room: any = this.selectedRoom;
    // const buildingId: any = this.selectedBuilding; // Assuming 'this.selectedBuilding' contains the selected building object with a 'buildingId' property
  
    this.tenantsService.addTenant(this.roomId,  newTenant).subscribe(
      (response: Tenant) => {
        console.log(response);
        this.tenants.push(response);
        this.tenants = [response, ...this.tenants];
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
