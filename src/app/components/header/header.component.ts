import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
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
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  constructor(public auth: AuthService,
              private breakpointObserver: BreakpointObserver){}

  ngOnInit() {
    this.breakpointObserver
      .observe(['(max-width: 767px)'])
      .subscribe((state: BreakpointState) => {
        this.isMobileView = state.matches;
      });
    } 
    someMethod() {
      this.trigger.openMenu();
    }
    
}



