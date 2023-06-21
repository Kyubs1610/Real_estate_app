export interface RoomModel {
  buildingName: any;
  rooms: Room[];
}

export interface Room {
  totalRent: number;
  id: number;
  roomNumber: any;
  status: string;
  availableFrom: string;
  type: string;
  rent: number;
  charges: number;
  rentReview: null | string;
  specialConditions: null | string;
  doorCode: string;
  createdAt: string;
  updatedAt: string;
  buildingId: number;
  tenants: Tenant[];
  typeOfIncCharges: ChargesIncludeRoom[];
  typeOfExcCharges: ChargesExcludeRoom[];
  
}

export interface Tenant {
  tenantInfos: {
  firstname: string;
  lastname: string;
  email: string;
  contractStart: string;
  contractEnd: string;
  deposit: string;
},
specialCondition:{
  title: string;
  content: string;
}
}

export interface TenantRoom {

  roomId: any;
  tenantId: number;
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

