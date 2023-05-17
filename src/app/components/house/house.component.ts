import { Component } from '@angular/core';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent {
search!: string;
houses: { name: string; id: number }[] = [
  { name: 'FLAGATOR (COMMERCE)', id: 1 },
  { name: 'FLAGATOR (STUDIO)', id: 2 },
  { name: 'FLAGATOR (FLAT 1)', id: 3 },
  { name: 'FLAGATOR (FLAT 2)', id: 4 }
  // Add more house objects as needed
];
isHouseVisible(house: { name: string }): boolean {
  return house.name.toLowerCase().includes(this.search.toLowerCase());
}


}
// addMenu(){
//   console.log("add menu");
  
// }


