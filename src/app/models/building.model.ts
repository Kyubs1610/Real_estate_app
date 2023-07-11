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
  bic: string;
  iban: string;
  managers: managers[];
  owners: owners[];
  company: any;

}

export interface owners {
  id: number;
  ownerId: string;
  fullname: string;
}

export interface managers {
  id: number;
  managerId: string;
  fullname: string;
}

export interface Room {
  totalRent: number;
  id: number;
  roomNumber: number;
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
  deposit: string;
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
