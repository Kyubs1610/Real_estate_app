export class Room {
  roomInfos: {
    roomNumber: string;
    status: RoomStatus;
    availableFrom: string;
    type: RoomType;
    rent: string;
    rentReview: string;
    specialConditions: string;
    doorCode: string;
    charges: string;
  } = {
    roomNumber: '',
    status: RoomStatus.free,
    availableFrom: '',
    type: RoomType.room,
    rent: '',
    rentReview: '',
    specialConditions: '',
    doorCode: '',
    charges: '',
  };
 
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
  