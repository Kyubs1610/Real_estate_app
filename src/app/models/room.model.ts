export class Room {
    roomInfos: {
      roomNumber: string;
      status: RoomStatus;
      availableFrom: string;
      type: RoomType;
      rent: number;
      rentReview: string;
      specialConditions: string;
      doorCode: string;
      charges: number;
    };
    typeCharges: string[];
  
    constructor() {
      this.roomInfos = {
        roomNumber: '',
        status: RoomStatus.free,
        availableFrom: '',
        type: RoomType.room,
        rent: 0,
        rentReview: '',
        specialConditions: '',
        doorCode: '',
        charges: 0,
      };
      this.typeCharges = [];
    }
  }
  
  export enum RoomType {
    room = 'room',
    flat = 'flat',
    studio = 'studio',
    office = 'office',
    commerce = 'commerce',
  }
  
  export enum RoomStatus {
    free = 'free',
    occupied = 'occupied',
    availableFrom = 'available from',
  }
  