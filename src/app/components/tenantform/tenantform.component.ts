import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, first } from 'rxjs';
import { Tenants } from 'src/app/models/tenant.model';
import { TenantInfo } from 'src/app/models/TenantInfo.model';

// form send to the tenant to enter their information

const BASEURL = 'http://localhost:3000/';


@Component({
  selector: 'app-tenantform',
  templateUrl: './tenantform.component.html',
  styleUrls: ['./tenantform.component.scss']
})


export class TenantformComponent {


  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar


  ) {
}

  tenantInfo: TenantInfo = {} as TenantInfo;
  updateTenant: TenantInfo = {} as TenantInfo;
  token!: string;
  id!: number;

  generateContract(id: number, updateTenant: TenantInfo) {
    const url = window.location.href; // Get the current URL
    const regex = /\/registration\/(\d+)\/token\/(.+)/; // Define a regular expression to match the tenantId and token
    const matches = url.match(regex); // Check if the URL matches the pattern
  
    if (matches && matches.length >= 3) {
      const tenantId = Number(matches[1]); // Extract the tenantId from the matched result
      const token = matches[2]; // Extract the token from the matched result
  
      const tenantInfo = {
      firstname: updateTenant.firstname || this.tenantInfo.firstname,
      lastname: updateTenant.lastname || this.tenantInfo.lastname,
      phoneNumber: updateTenant.phoneNumber || this.tenantInfo.phoneNumber,
      addressStreet: updateTenant.addressStreet || this.tenantInfo.addressStreet,
      addressNumber: updateTenant.addressNumber || this.tenantInfo.addressNumber,
      addressCity: updateTenant.addressCity || this.tenantInfo.addressCity,
      addressPostalCode: updateTenant.addressPostalCode || this.tenantInfo.addressPostalCode,
      addressCountry: updateTenant.addressCountry || this.tenantInfo.addressCountry,
      birthdate: updateTenant.birthdate || this.tenantInfo.birthdate,
      idNumber: updateTenant.idNumber || this.tenantInfo.idNumber,
      };


  
      console.log(tenantInfo);
      this.updateTenantInfo(tenantInfo, tenantId, token).subscribe(
        (response: Tenants) => {
          this.updateTenant = response;
        this.tenantInfo = response;
          console.log(response);
          
          this.snackBar.open('Thanks for sending your information, You will received the contract soon', 'Close', {
            duration: 5000,
          });
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error('Unable to retrieve tenantId and token from the URL');
    }
  }

  
 updateTenantInfo(TenantInfo: any , tenantId:number, token:string): Observable <Tenants> {
    return this.http.put<Tenants>(`${BASEURL}v1/tenant/registration/${tenantId}/token/${token}`, TenantInfo);
  }
  


  
  isMobile() {
    return window.innerWidth <= 767;
  }

}
