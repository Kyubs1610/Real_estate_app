import { SnackBar } from './../../snackbar/snackbar.component';
import { Component, OnInit } from '@angular/core';
import { Room, RoomStatus, RoomType } from 'src/app/models/room.model';
import { AddroomsService } from 'src/app/services/rooms/addrooms.service';
import { BehaviorSubject } from 'rxjs';
import { Building } from 'src/app/models/building.model';

@Component({
  selector: 'app-add-rooms',
  templateUrl: './add-rooms.component.html',
  styleUrls: ['./add-rooms.component.scss'],
 

})


export class addRoomComponent implements OnInit {


  constructor(
    private addroomsService: AddroomsService,
    private snackBar: SnackBar,

  ) { }
  roomsSubject: BehaviorSubject<Room[]> = new BehaviorSubject<Room[]>([]);
  buildings!: Building[];
  building!: Building[];
  buildingId!: Building;
  newRoom: Room = new Room();
  rooms: Room[] = [];

  ngOnInit() { }



  isMobile() {
    return window.innerWidth <= 767;
  }


  addRoom(buildingId: any) {

    const newRoom: Room = {
      roomInfos: {
        roomNumber: '',
        status: RoomStatus.free,
        availableFrom: '',
        type: RoomType.room,
        rent: '',
        rentReview: '',
        doorCode: '',
        charges: '',
      },
      typeCharges: [],
    };

    newRoom.roomInfos.roomNumber = this.newRoom.roomInfos.roomNumber;
    newRoom.roomInfos.status = this.newRoom.roomInfos.status;
    newRoom.roomInfos.availableFrom = this.newRoom.roomInfos.availableFrom;
    newRoom.roomInfos.type = this.newRoom.roomInfos.type;
    newRoom.roomInfos.rent = this.newRoom.roomInfos.rent;
    newRoom.roomInfos.rentReview = this.newRoom.roomInfos.rentReview;
    newRoom.roomInfos.doorCode = this.newRoom.roomInfos.doorCode;
    newRoom.roomInfos.charges = this.newRoom.roomInfos.charges;

    newRoom.typeCharges.push(...this.newRoom.typeCharges);

    this.addroomsService.addRooms(buildingId, newRoom).subscribe((response: Room) => {
      console.log(response);
      this.rooms.push(response);
      this.roomsSubject.next(this.rooms);
      this.snackBar.openSnackBarRoom();



    }, (error) => {
      console.error(error);
    });

  }



}        
