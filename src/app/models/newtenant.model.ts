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
  typeOfIncCharges: Charge[];
  typeOfExcCharges: Charge[];
}

export interface Tenant {
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  contractStart: string;
  contractEnd: string;
}

export interface TenantRoom {

  roomId: any;
  tenantId: number;
}

export interface Charge {
  id: number;
  type: string;
  createdAt: string;
  updatedAt: string;
  chargesIncludeRooms?: ChargesIncludeRooms;
  chargesExcludeRooms?: ChargesExcludeRooms;
}

export interface ChargesIncludeRooms {
  createdAt: string;
  updatedAt: string;
  roomId: number;
  chargeId: number;
}

export interface ChargesExcludeRooms {
  createdAt: string;
  updatedAt: string;
  roomId: number;
  chargeId: number;
}
