import { Component, OnInit } from '@angular/core';
import { Tenants } from 'src/app/models/tenant.model';
import { TenantsService } from 'src/app/services/tenant/tenant.service';

@Component({
  selector: 'app-tenantinfo',
  templateUrl: './tenantinfo.component.html',
  styleUrls: ['./tenantinfo.component.scss']
})
export class TenantinfoComponent implements OnInit {
  id!: number;
  tenant!: Tenants ;
  tenants: Tenants[] = [];
  tenantId!: Tenants;

  constructor(private tenantService: TenantsService) {}

  ngOnInit() {
    console.log('ID:', this.id);
    
    this.tenantService.getTenant(this.id).subscribe((response: Tenants) => {
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
