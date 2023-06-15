export interface Building {
  id: any;
  name: string;
  addressStreet: string;
  addressCity: string;
  addressNumber: string;
  addressPostalCode: string;
  addressCountry: string;
  doorCode: string;
  updatedAt: string;
  createdAt: string;
  rooms: Room[];
  manager: string;
  owners: string;
  company: string;

}

export interface Room {
  totalRent: number;
  id: number;
  roomNumber: string;
  status: string;
  availableFrom: string;
  type: string;
  rent: number;
  charges: number;
  rentReview: string | null;
  specialConditions: string | null;
  doorCode: string;
  createdAt: string;
  updatedAt: string;
  buildingId: number;
  tenants: Tenant[];
}

interface Tenant {
  firstname: string;
  lastname: string;
  tenantRoom: TenantRoom;
}

interface TenantRoom {
  createdAt: string;
  updatedAt: string;
  roomId: number;
  tenantId: number;
}
