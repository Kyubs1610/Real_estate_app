export interface addBuilding {
    buildingInfos: {
    name: string;
    addressStreet: string;
    addressCity: string;
    addressNumber: string;
    addressPostalCode: string;
    addressCountry: string;
    doorCode: string;
    bic: string;
    iban: string;
    }
    managersIds:number[];
    ownersIds:number[]
    companyId:number;
  
  }
  
export interface manager {
    id: number;
    managerId: string;
    fullname: string;

}
export interface owner {
    id: number;
    ownerId: string;
    fullname: string;
}


export interface user {
    fullname: string;
    id: number;
    firstname: string;
    lastname: string;
    phoneNumber: string;
    email: string;
}
export interface company{
    id: number;
    name: string;
    siren: string;
    tva: string;
    addressStreet: string;
    addressNumber: string;
    addressPostCode: string;
    addressCity: string;
    addressCountry: string;
    email: string;
}
