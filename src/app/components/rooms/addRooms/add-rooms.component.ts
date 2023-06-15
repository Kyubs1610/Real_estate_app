import { Component, OnInit } from '@angular/core';
import { Room, RoomStatus, RoomType } from 'src/app/models/room.model';
import { AddroomsService } from 'src/app/services/rooms/addrooms.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Building } from 'src/app/models/building.model';


@Component({
  selector: 'app-add-rooms',
  templateUrl: './add-rooms.component.html',
})


export class addRoomComponent implements OnInit {
  constructor(
    private addroomsService: AddroomsService,

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
        specialConditions: '',
        doorCode: '',
        charges: '',
      }
    };

    newRoom.roomInfos.roomNumber = this.newRoom.roomInfos.roomNumber;
    newRoom.roomInfos.status = this.newRoom.roomInfos.status;
    newRoom.roomInfos.availableFrom = this.newRoom.roomInfos.availableFrom;
    newRoom.roomInfos.type = this.newRoom.roomInfos.type;
    newRoom.roomInfos.rent = this.newRoom.roomInfos.rent;
    newRoom.roomInfos.rentReview = this.newRoom.roomInfos.rentReview;
    newRoom.roomInfos.specialConditions = this.newRoom.roomInfos.specialConditions;
    newRoom.roomInfos.doorCode = this.newRoom.roomInfos.doorCode;
    newRoom.roomInfos.charges = this.newRoom.roomInfos.charges;

    this.addroomsService.addRooms(buildingId, newRoom).subscribe((response: Room) => {
      console.log(response);
      this.rooms.push(response);
      this.roomsSubject.next(this.rooms);


    }, (error) => {
      console.error(error);
    });

  }

}        
