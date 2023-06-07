import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  isMobileView: boolean = false;
  @ViewChild(MatMenuTrigger, { static: true }) trigger!: MatMenuTrigger;

  constructor(public auth: AuthService,
              private breakpointObserver: BreakpointObserver){}

  ngOnInit() {
    this.breakpointObserver
      .observe(['(max-width: 767px)'])
      .subscribe((state: BreakpointState) => {
        this.isMobileView = state.matches;
        if (this.trigger && !this.isMobileView) {
          // Hide the menu when viewport size exceeds 767px
          this.trigger.closeMenu();
        }
      });
   
    } 
    
   
}



