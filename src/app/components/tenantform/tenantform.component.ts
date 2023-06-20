import { Component } from '@angular/core';

@Component({
  selector: 'app-tenantform',
  templateUrl: './tenantform.component.html',
  styleUrls: ['./tenantform.component.scss']
})
export class TenantformComponent {

  
  isMobile() {
    return window.innerWidth <= 767;
  }

}
