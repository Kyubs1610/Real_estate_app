// import { Component, OnInit } from '@angular/core';
// import { Building } from 'src/app/models/building.model';
// import { TenantsService } from 'src/app/services/tenant/tenant.service';
// import { Room } from 'src/app/models/newtenant.model';
// import { DeleteRoomService } from 'src/app/services/deleteRoom/delete-room.service';

// @Component({
//   selector: 'app-deleteroom',
//   templateUrl: './deleteroom.component.html',
//   styleUrls: ['./deleteroom.component.scss']
// })
// export class DeleteroomComponent implements OnInit{
//   buildings: Building[] = [];
//   filteredbuildings: Building[] = this.buildings;
//   id!: number

//   rooms: Room[] = [];
//   selectedRoom!: string 
//   filteredRooms!: string[];
//   room: Room[] = [];
//   roomId!: number;

//   constructor(
//     private TenantsService: TenantsService,
//     private DeleteRoomService: DeleteRoomService
//       ) {}

//   ngOnInit() {
//     this.TenantsService.getRooms(this.id).subscribe((response: Room[]) => {
//       this.rooms = response;
//     }, (error) => {
//       console.error(error);
//     });

//   }



//   deleteRoom() {
//     this.DeleteRoomService.removeRoom(this.roomId).subscribe((response: any) => {
//       this.rooms = response;
//     }, (error) => {
//       console.error(error);
//     });
    
//   }

//   isMobile() {
//     return window.innerWidth <= 767;
//   }
// }
