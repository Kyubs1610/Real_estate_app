import { TenantsService } from 'src/app/services/tenant/tenant.service';
import { Component } from '@angular/core';
import { Building, Room } from 'src/app/models/building.model';
import { HouseService } from 'src/app/services/house/house.service';
import { Tenant } from 'src/app/models/newtenant.model';
import {   MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition, } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.scss']})
export class TenantComponent {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  tenant!: Tenant;
  tenants: Tenant[] = [];
  roomId!: number;

  
  newTenant: Tenant["tenantInfos"] & { specialCondition: Tenant["specialCondition"] } = {} as Tenant["tenantInfos"] & { specialCondition: Tenant["specialCondition"] };
  specialCondition: Tenant["specialCondition"] = {} as Tenant["specialCondition"]; 
  
  buildings: Building[] = [];
  filteredbuildings: Building[] = this.buildings;
  building:Building[] = [];
  selectedBuilding!: Building;

  rooms: Room[] = [];
  selectedRoom!: number; 
  filteredRooms!: number[];
  room: Room[] = [];
  
 

  constructor(private tenantsService: TenantsService,
              private HouseService : HouseService,
              private _snackBar: MatSnackBar,
              private router: Router,

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

  opensnackbarbusy(tenantName: string) {
    const message = `This room is occupied by ${tenantName} `;
    this._snackBar.open(message, 'CLOSE', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
  

  openSnackbarTenant() {
    let snackBarRef = this._snackBar.open('Tenant well added to the database', 'confirmed', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  snackBarRef.onAction().subscribe(() => {
    this.router.navigate(['/house']);
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
        const roomBusy = room.status;
        console.log(roomBusy);
        if (roomBusy === "rented") {
          const tenant = room.tenants[0]; // Assuming there is only one tenant per room
          console.log(tenant)
          const tenantName = `${tenant.firstname} ${tenant.lastname}`;
          
          this.opensnackbarbusy(tenantName);
          // Alternatively, you can pass the 'tenant' object to the dialog component and extract the required information there
          // this.TenantpopupComponent.openBusyDialog(tenant);
        }
      }
    }
  }
  

  


  dateFormat() {
    const contractStart: string = this.newTenant.contractStart; // Assuming this.newTenant.contractStart is of type string
    const contractStartDate: Date = new Date(contractStart); // Convert string to Date object
    const formattedDate: string = contractStartDate.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
    console.log(formattedDate);
  }

  


  addTenant() {
    const newTenant: Tenant = {
      tenantInfos:{
      firstname: this.newTenant.firstname,
      lastname: this.newTenant.lastname,
      email: this.newTenant.email,
      contractStart: this.newTenant.contractStart ,
      contractEnd: this.newTenant.contractEnd,
      deposit: this.newTenant.deposit,
      },
        specialCondition: {
          title: this.specialCondition.title,
          content: this.specialCondition.content,
      }
    };

    newTenant.tenantInfos.firstname = this.newTenant.firstname ;
    newTenant.tenantInfos.lastname = this.newTenant.lastname ;
    newTenant.tenantInfos.email = this.newTenant.email ;
    newTenant.tenantInfos.contractStart = this.newTenant.contractStart;
    newTenant.tenantInfos.contractEnd = this.newTenant.contractEnd;
    newTenant.tenantInfos.deposit = this.newTenant.deposit;
    newTenant.specialCondition.title = this.specialCondition.title
    newTenant.specialCondition.content = this.specialCondition.content,

    console.log(newTenant);  
    this.tenantsService.addTenant(this.roomId,  newTenant).subscribe(
      (response: Tenant) => {
        console.log(response);
        this.tenants.push(response);
        this.tenants = [response, ...this.tenants];
        this.openSnackbarTenant();

      },
    );
 
  }

  isMobile() {
    return window.innerWidth <= 767;
  }
}
