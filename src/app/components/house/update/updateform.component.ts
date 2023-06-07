import { Component } from '@angular/core';
import { HouseService } from 'src/app/services/house/house.service';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackBar } from '../../snackbar/snackbar.component';
import { UpdateBuilding } from 'src/app/models/updatebuilding.model';


@Component({
  selector: 'updateform',
  templateUrl: 'updateform.component.html',
})
export class UpdateFormComponent {
  constructor(
  private snackBar: SnackBar,
  @Inject(MAT_DIALOG_DATA) private data: any,
  private houseService: HouseService,
) {
  this.id = data.id;
  this.buildings = data.buildings;
}


  showAddBuildingSection: boolean = false;
  buildings: any[] = [];
  id!: number;
  updateBuildings: any = {};
  


  updateBuilding(id: any, updateBuilding: any) {
    //find the building to update based on the id
  const buildingToUpdate = this.buildings.find((building) => building.id === id);

    if (buildingToUpdate) {
      const updateBuildings = {
        name: updateBuilding.name || buildingToUpdate.name,
        addressStreet: updateBuilding.addressStreet || buildingToUpdate.addressStreet,
        addressNumber: updateBuilding.addressNumber || buildingToUpdate.addressNumber,
        addressCity: updateBuilding.addressCity || buildingToUpdate.addressCity,
        addressPostalCode: updateBuilding.addressPostalCode || buildingToUpdate.addressPostalCode,
        addressCountry: updateBuilding.addressCountry || buildingToUpdate.addressCountry,
        doorCode: updateBuilding.doorCode || buildingToUpdate.doorCode,
      };
      console.log(buildingToUpdate);
      this.houseService.updatebuilding(id, updateBuildings).subscribe(
        (response: UpdateBuilding) => {
          this.buildings = response;
          this.updateBuildings = response;
          this.snackBar.updateSnackBar();

        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error(`Building with ID ${id} not found.`);
    }
  }
  
  isMobile() {
    return window.innerWidth <= 767;
  }
}