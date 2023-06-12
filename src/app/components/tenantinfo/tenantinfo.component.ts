import { Component, OnInit } from '@angular/core';
import { Tenant } from 'src/app/models/tenant.model';
import { TenantsService } from 'src/app/services/tenant/tenant.service';

@Component({
  selector: 'app-tenantinfo',
  templateUrl: './tenantinfo.component.html',
  styleUrls: ['./tenantinfo.component.scss']
})
export class TenantinfoComponent implements OnInit {
  id!: number;
  tenant!: Tenant ;
  tenants: Tenant[] = [];
  tenantId!: Tenant;

  constructor(private tenantService: TenantsService) {}

  ngOnInit() {
    console.log('ID:', this.id);
    
    this.tenantService.getTenant(this.id).subscribe((response: Tenant) => {
      this.tenant = response;
    },
      (error) => {
        console.error('Error retrieving tenant:', error);
      }
    );
 
  }

  isMobile() {
    return window.innerWidth <= 767;
  }
}
