export class Tenants {
  id: number = 0;
  firstname: string = '';
  lastname: string = '';
  fullname: string = '';
  email: string = '';
  deposit: string = '';
  birthdate: string = '';
  idNumber: string = '';
  phoneNumber: string = '';
  addressStreet: string = '';
  addressNumber: string = '';
  addressCity: string = '';
  addressPostalCode: string = '';
  addressCountry: string = '';
  arrival: Date = new Date();
  contractStart: Date = new Date();
  contractEnd: Date = new Date();
  specialCondition: {
    id: number;
    title: string;
    content: string;
  } = {
    id: 0,
    title: '',
    content: '',
  };
  
  tenantRoom: {
    tenantId: number;
    roomId: string;
  } = {
    tenantId: 0,
    roomId: '',
  };
  rooms: Room[] = [];

  constructor() {}
}
    
    export interface Room {
        totalRent: number;
        id: number;
        roomNumber: string;
        status: RoomStatus;
        availableFrom: Date;
        type: RoomType;
        rent: number;
        charges: number;
        rentReview: any;
        specialConditions: any;
        doorCode: string;
        createdAt: Date;
        updatedAt: Date;
        buildingId: any;
        building: any;
        typeOfIncCharges: ChargesIncludeRoom[];
        typeOfExcCharges: ChargesExcludeRoom[];
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
  
    export interface ChargesIncludeRoom {
        id: number;
        type: string;
        createdAt: Date;
        updatedAt: Date;
        chargesIncludeRooms: ChargesIncludeRooms;
    }

    export interface ChargesIncludeRooms {
        createdAt: Date;
        updatedAt: Date;
        roomId: number;
        chargeId: number;
    }

    export interface ChargesExcludeRoom {
        id: number;
        type: string;
        createdAt: Date;
        updatedAt: Date;
        chargesExcludeRooms: ChargesExcludeRooms;
      
       
      }
      
      export interface ChargesExcludeRooms {
        createdAt: Date;
        updatedAt: Date;
        roomId: number;
        chargeId: number;
      
        
        }

  