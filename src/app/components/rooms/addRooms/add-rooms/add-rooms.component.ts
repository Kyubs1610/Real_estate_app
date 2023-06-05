import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-add-rooms',
    templateUrl: './add-rooms.component.html',
})

export class addRoomComponent implements OnInit {
    
        constructor() { }
    
        ngOnInit() {
        }

        openRoomDialog() {

        }
        
        isMobile() {
            return window.innerWidth <= 767;
          }

          addRoom() {
              
          }
    

}