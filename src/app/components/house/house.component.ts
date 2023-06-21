import { Tenants } from './../../models/tenant.model';
import { TenantinfoComponent } from './../tenantinfo/tenantinfo.component';
import { MatDialog } from '@angular/material/dialog';
import { HouseService } from '../../services/house/house.service';
import { Component, OnInit } from '@angular/core';
import { addformComponent } from './addbuilding/addform.component';
import { SnackBar } from '../snackbar/snackbar.component';
import { UpdateFormComponent } from './update/updateform.component';
import { AddroomsService } from './../../services/rooms/addrooms.service';
import { Room } from './../../models/room.model';
import { addRoomComponent } from '../rooms/addRooms/add-rooms.component';
import { Building } from 'src/app/models/building.model';
import { BehaviorSubject } from 'rxjs';
import { HouseinfoComponent } from './houseinfo/houseinfo.component';
import { ConfirmDialogComponent } from './removebuilding/confirm-dialog.component';



@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})


export class buildingComponent implements OnInit {

  search: string = '';
  newbuilding: any = {}; // Declare newbuilding property
  showAddBuildingSection: boolean = false;
  buildings: any[] = [];
  filteredbuildings: any[] = this.buildings;
  id!: number
  rooms: Room[] = [];
  data: any;
  building!: Building;
  buildingId!:Building['id'];
  newRoom: Room = new Room();
  roomsSubject: BehaviorSubject<Room[]> = new BehaviorSubject<Room[]>([]);
  tenant!: Tenants;



  constructor(
    private HouseService: HouseService,
    private dialog: MatDialog,
    private snackBar: SnackBar,
    private AddroomsService: AddroomsService,
  
  ) { }

  ngOnInit() {
    this.HouseService.getbuilding().subscribe((response: Building[]) => {
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

  openRoomDialog(building: Building) {
    console.log(building);
    const dialogRef = this.dialog.open(addRoomComponent, {
      panelClass: 'custom',
      data: { building: building }
    });
    const buildingId = building.id;
    console.log(buildingId)
    // send the buildingID to the addRoomComponent
    dialogRef.componentInstance.buildingId = buildingId;
    console.log(dialogRef.componentInstance.buildingId);
  }



  // Open the update dialog
  openUpdateDialog(id: number) {
    // Find the building to update based on the id
    const buildingToUpdate = this.buildings.find((building) => building.id === id);
    // If the building is found, open the dialog with the building data
    if (buildingToUpdate) {
      this.dialog.open(UpdateFormComponent, {
        panelClass: 'custom',
        data: {
          id: id,
          buildings: this.buildings
        }
      });
    } else {
      console.error(`Building with ID ${id} not found.`);
    }
  }

  // Open Tenant info dialog
  openTenantDialog(tenant: Tenants) {
    const tenantId = tenant.tenantRoom.tenantId

    const dialogRef = this.dialog.open(TenantinfoComponent, {
      panelClass: 'custom',
    });
    
    // send the tenantID to the tenantinfoComponent
    dialogRef.componentInstance.id = tenantId;

  }

  openBuildingDialog(building:Building) {
    const buildingId = building.id
    console.log(buildingId)

    const dialogRef = this.dialog.open(HouseinfoComponent, {
      panelClass: 'custom',
    });
    
    dialogRef.componentInstance.id = buildingId;
  }

  // Make the searchbar for looking the building name
  searchBuilding() {
    this.filteredbuildings = this.buildings.filter((building: any) => {
      return building.name.toLowerCase().includes(this.search.toLowerCase());
    });
  }

  // Remove building

  removeBuilding(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: 'Are you sure you want to delete the building and all the information?'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        this.HouseService.removebuilding(id).subscribe(
          (response: Building[]) => {
            this.buildings = response;
            this.snackBar.deleteSnackBar();
          },
          (error) => {
            console.error(error);
          }
        );
      }
    });
  }
  


}

