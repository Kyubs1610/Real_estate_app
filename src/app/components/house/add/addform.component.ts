import {Component} from '@angular/core';
import { HouseService } from '../../../services/house.service';
import { MatDialogRef } from '@angular/material/dialog';
import { SnackBar } from '../../snackbar/snackbar.component';
interface building extends Array<{
    id: number;
    name: string;
    addressStreet: string;
    addressCity: string;
    addressPostalCode: string;
    addressCountry: string;
    doorCode: string;
    updatedAt: string;
    createdAt: string;
    
  }> {}

@Component({
    selector: 'addform',
    templateUrl: 'addform.component.html',
}) 



export class addformComponent {
    constructor(
        private dialogRef: MatDialogRef<addformComponent>,
        private HouseService : HouseService,
        private snackBar: SnackBar,
    ) {
    }

    newbuilding: any = {}; // Declare newbuilding property
    showAddBuildingSection: boolean = false;
    buildings:  any[] = [];

    addBuilding() {
        const newBuilding = {
          id: this.buildings.length + 1 ,
          name: '', // Initialize with empty values
          addressStreet: '',
          addressNumber: '',
          addressCity: '',
          addressPostalCode: '',
          addressCountry: '',
          doorCode: '',
        };
        // Assign input values if they are not null or empty strings
        newBuilding.name = newBuilding.name || '';
        newBuilding.addressStreet = newBuilding.addressStreet || '';
        newBuilding.addressNumber = newBuilding.addressNumber || '';
        newBuilding.addressCity = newBuilding.addressCity || '';
        newBuilding.addressPostalCode = newBuilding.addressPostalCode || '';
        newBuilding.addressCountry = newBuilding.addressCountry || '';
        newBuilding.doorCode = newBuilding.doorCode || '';
       
        this.HouseService.addbuilding(this.newbuilding).subscribe(
          (response: building) => {
            console.log(response); // Log the response object
            this.buildings = [response, ...this.buildings]; // Update buildings array with the response
            // reload the page to see the change
            this.snackBar.openSnackBar();
          },
          (error) => {
            console.error(error);
            this.snackBar.openSnackBarError();
          }
        );
      }

      isMobile() {
        return window.innerWidth <= 767;
      }

  
}