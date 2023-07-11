import {Component, OnInit} from '@angular/core';
import { HouseService } from '../../../services/house/house.service';
import { SnackBar } from '../../snackbar/snackbar.component';
import { addBuilding, company, user } from 'src/app/models/addBuilding.model';

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
      this.getUsers();
      this.getCompanies();
    }

  newBuilding: addBuilding['buildingInfos'] = {} as addBuilding['buildingInfos'];
  showAddBuildingSection: boolean = false;
  buildings: addBuilding['buildingInfos'][] = [];
  selectedManagers: user[] = [];
  selectedOwners: user []=[];
  selectedCompanies: company[] = [];
  users: user[] = [];
  user: user[] = [];
  selectedManagerIds: number[] = [];
  selectedOwnerIds: number[] = [];
  selectedCompanyIds!: number
  companies: company[] = [];  
  selectedCompany!: number ;

  

selectManagers(event: any) {
    this.selectedManagers = event.value;
  }
selectOwners(event: any) {
    this.selectedOwners = event.value;
  }
  selectCompanies(event: any) {
    this.selectedCompanies = event.value;
    console.log(this.selectedCompanies);
  }

  onSelectionChange(event: any) {
    this.selectedCompany = event.value.id;
    console.log('Selected company:', this.selectedCompany);
  }
  addBuilding() {
    const newBuilding: addBuilding = {
      buildingInfos: {
        name: this.newBuilding.name,
        addressStreet: this.newBuilding.addressStreet,
        addressNumber: this.newBuilding.addressNumber,
        addressCity: this.newBuilding.addressCity,
        addressPostalCode: this.newBuilding.addressPostalCode,
        addressCountry: this.newBuilding.addressCountry,
        doorCode: this.newBuilding.doorCode,
        bic: this.newBuilding.bic,
        iban: this.newBuilding.iban,
      },
      managersIds: this.selectedManagers.map(manager => manager.id),
      ownersIds: this.selectedOwners.map(owner => owner.id),
      companyId: this.selectedCompany || 0,
    };

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

  getCompanies() {
    this.HouseService.getCompanies().subscribe(
      (response: company[]) => {
        this.companies = response;
        console.log(this.companies);
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