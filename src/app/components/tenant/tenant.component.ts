import { Component } from '@angular/core';

export interface tenants {
  name: string;
  position: number;
  building: string;
  room: string;
  deposit : string;
  birthdate: string;
  ID: string;
  phone: string;
  email: string;
  streetName: string;
  cityName: string;
  arrivalDate: string;
  departureDate: string;
  comments: string;
}

const ELEMENT_DATA: tenants[] = [
  { position: 1, name: 'Zoe SEBIRE', building:'FLAGATOR', room: '2', deposit: '1700',birthdate: '13/10/92', ID: 'FR 150627200049', phone: '0477/77.77.77', email: 'x@tbc.com', streetName: 'Chaussée d Ixelles 287', cityName: '1060 Saint-Gilles', arrivalDate: '01/09/2021', departureDate: '31/08/2022', comments: ''},
  { position: 2, name: 'Jiacinto SEBIRE', building:'FLAGATOR', room: '2', deposit: '1700',birthdate: '13/10/92', ID: 'FR 150627200049', phone: '0477/77.77.77', email: '', streetName: 'Chaussée d Ixelles 287', cityName: '1060 Saint-Gilles', arrivalDate: '01/09/2021', departureDate: '31/08/2022', comments: ''},
  { position: 3, name: 'Zoe SEBIRE', building:'FLAGATOR', room: '2', deposit: '1700',birthdate: '13/10/92', ID: 'FR 150627200049', phone: '0477/77.77.77', email: '', streetName: 'Chaussée d Ixelles 287', cityName: '1060 Saint-Gilles', arrivalDate: '01/09/2021', departureDate: '31/08/2022', comments: ''},
  { position: 4, name: 'Zoe SEBIRE', building:'FLAGATOR', room: '2', deposit: '1700',birthdate: '13/10/92', ID: 'FR 150627200049', phone: '0477/77.77.77', email: '', streetName: 'Chaussée d Ixelles 287', cityName: '1060 Saint-Gilles', arrivalDate: '01/09/2021', departureDate: '31/08/2022', comments: ''},
  { position: 5, name: 'Zoe SEBIRE', building:'FLAGATOR', room: '2', deposit: '1700',birthdate: '13/10/92', ID: 'FR 150627200049', phone: '0477/77.77.77', email: '', streetName: 'Chaussée d Ixelles 287', cityName: '1060 Saint-Gilles', arrivalDate: '01/09/2021', departureDate: '31/08/2022', comments: ''},
  { position: 6, name: 'Zoe SEBIRE', building:'FLAGATOR', room: '2', deposit: '1700',birthdate: '13/10/92', ID: 'FR 150627200049', phone: '0477/77.77.77', email: '', streetName: 'Chaussée d Ixelles 287', cityName: '1060 Saint-Gilles', arrivalDate: '01/09/2021', departureDate: '31/08/2022', comments: ''},
  { position: 7, name: 'Zoe SEBIRE', building:'FLAGATOR', room: '2', deposit: '1700',birthdate: '13/10/92', ID: 'FR 150627200049', phone: '0477/77.77.77', email: '', streetName: 'Chaussée d Ixelles 287', cityName: '1060 Saint-Gilles', arrivalDate: '01/09/2021', departureDate: '31/08/2022', comments: ''},
  { position: 8, name: 'Zoe SEBIRE', building:'FLAGATOR', room: '2', deposit: '1700',birthdate: '13/10/92', ID: 'FR 150627200049', phone: '0477/77.77.77', email: '', streetName: 'Chaussée d Ixelles 287', cityName: '1060 Saint-Gilles', arrivalDate: '01/09/2021', departureDate: '31/08/2022', comments: ''},
  { position: 9, name: 'Zoe SEBIRE', building:'FLAGATOR', room: '2', deposit: '1700',birthdate: '13/10/92', ID: 'FR 150627200049', phone: '0477/77.77.77', email: '', streetName: 'Chaussée d Ixelles 287', cityName: '1060 Saint-Gilles', arrivalDate: '01/09/2021', departureDate: '31/08/2022', comments: ''},
  { position: 10, name: 'Zoe SEBIRE', building:'FLAGATOR', room: '2', deposit: '1700',birthdate: '13/10/92', ID: 'FR 150627200049', phone: '', email: '', streetName: 'Chaussée d Ixelles 287', cityName: '1060 Saint-Gilles', arrivalDate: '01/09/2021', departureDate: '', comments: ''},
];

@Component({
  selector: 'app-tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.scss'],
})
export class TenantComponent {
  isplayedColumns: string[] = ['position', 'name', 'building', 'room','deposit','birthdate','ID','phone','email','streetName','cityName','arrivalDate','departureDate','comments'];
  dataSource = ELEMENT_DATA;

}
