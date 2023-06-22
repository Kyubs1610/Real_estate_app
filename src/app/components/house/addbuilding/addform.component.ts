import {Component, OnInit} from '@angular/core';
import { HouseService } from '../../../services/house/house.service';
import { SnackBar } from '../../snackbar/snackbar.component';
import { addBuilding, user } from 'src/app/models/addBuilding.model';

@Component({
    selector: 'addform',
    templateUrl: 'addform.component.html',
    styleUrls: ['addform.component.scss']}) 


export class addformComponent implements OnInit {
    constructor(
        private HouseService : HouseService,
        private snackBar: SnackBar,
    ) {
    }

    ngOnInit() {
      this.HouseService.getUsers().subscribe((response: user[]) => {
        this.users = response;
        this.selectedManagerIds =  this.users.map(user => user.id);
        this.selectedOwnerIds = this.users.map(user => user.id);
      }
      );
      
    }

  newBuilding: addBuilding['buildingInfos'] = {} as addBuilding['buildingInfos'];
  showAddBuildingSection: boolean = false;
  buildings: addBuilding['buildingInfos'][] = [];
  selectedManagers: user[] = [];
  selectedOwners: user []=[];
  users: user[] = [];
  user: user[] = [];
  selectedManagerIds: number[] = [];
  selectedOwnerIds: number[] = [];
  companyIds: string = '';

  addBuilding() {
    const newBuilding: addBuilding =  {
      buildingInfos: {
        name: '',
        addressStreet: '',
        addressNumber: '',
        addressCity: '',
        addressPostalCode: '',
        addressCountry: '',
        doorCode: '',
        bic: '',
        iban: '',
      },
        managersIds: [],
        ownersIds: [],
        // companyIds:'',
    };

    newBuilding.buildingInfos.name = this.newBuilding.name;
    newBuilding.buildingInfos.addressStreet = this.newBuilding.addressStreet;
    newBuilding.buildingInfos.addressNumber = this.newBuilding.addressNumber;
    newBuilding.buildingInfos.addressCity = this.newBuilding.addressCity;
    newBuilding.buildingInfos.addressPostalCode = this.newBuilding.addressPostalCode;
    newBuilding.buildingInfos.addressCountry = this.newBuilding.addressCountry;
    newBuilding.buildingInfos.doorCode = this.newBuilding.doorCode;
    newBuilding.buildingInfos.iban = this.newBuilding.iban;
    newBuilding.buildingInfos.bic = this.newBuilding.bic;

    newBuilding.managersIds.push(...this.selectedManagerIds);
    newBuilding.ownersIds.push(...this.selectedOwnerIds);


    // newBuilding.companyIds = this.companyIds;

    this.HouseService.addbuilding(newBuilding).subscribe(
      (response: addBuilding) => {
        console.log(response);
        this.buildings = [...this.buildings, ...this.buildings];
        this.snackBar.openSnackBar();
      },
      (error) => {
        console.error(error);
        this.snackBar.openSnackBarError();
      }
    );
  }

  getUsers() {
    this.HouseService.getUsers().subscribe(
      (response: user[]) => {
        this.users = response;
        console.log(this.users);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  isMobile() {
    return window.innerWidth <= 767;
  }
}