export class Room {


  roomInfos: {
    roomNumber: string;
    status: RoomStatus;
    availableFrom: string;
    type: RoomType;
    rent: string;
    rentReview: string;
    doorCode: string;
    charges: string;
    
  }
  
  = {
    roomNumber: '',
    status: RoomStatus.free,
    availableFrom: '',
    type: RoomType.room,
    rent: '',
    rentReview: '',
    doorCode: '',
    charges: '',
  };

 typeCharges: string[] = []; 
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
  
  