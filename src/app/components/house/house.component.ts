import { Component } from '@angular/core';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})

export class HouseComponent {
search!: string;
newMaison: any = {}; // Declare newMaison property

maisons = [
  {
    id: 1,
    nom: 'FLAGATOR',
    adresse: 'Chaussée d Ixelles 287,', 
    ville : '1060 Saint-Gilles',
    chambres: [
      { id: 1, nom: 'COMMERCE', locataire: 'Locataire A' },
      { id: 2, nom: 'STUDIO', locataire: 'Locataire B' },
      { id: 3, nom: 'FLAT 1', locataire: 'Locataire C' },
      { id: 4, nom: 'FLAT 2', locataire: 'Locataire D' },
      { id: 5, nom: 'FLAT 3.1', locataire: 'Locataire E' },
      { id: 6, nom: 'FLAT 3.2', locataire: 'Locataire F' },
      { id: 7, nom: 'FLAGATORETTE 1', locataire: 'Locataire G' },
      { id: 8, nom: 'FLAGATORETTE 2', locataire: 'Locataire H' },
    ],
    showDetails: false
  },
  {
    id: 2,
    nom: 'WATERCOOL',
    adresse: 'Chaussée de Waterloo 370,',
    ville : '1060 Saint-Gilles',
    chambres: [
      { id: 1, nom: 'WATERCOOL 1.1', locataire: 'Locataire A' },
      { id: 2, nom: 'WATERCOOL 1.2', locataire: 'Locataire B' },
      { id: 3, nom: 'WATERCOOL 1.3', locataire: 'Jiacinto' },
      { id: 4, nom: 'WATERCOOL 2', locataire: 'Locataire D' },
      { id: 5, nom: 'WATERCOOL 3', locataire: 'Locataire E' },
      { id: 6, nom: 'COMMERCE', locataire: 'Locataire F' },
    ],
    showDetails: false
  },
  {
    id: 3,
    nom: 'PORTLAND',
    adresse: 'Rue du Portugal 4,',
    ville : '1060 Saint-Gilles',
    chambres: [
      { id: 1, nom: 'PORTLAND 1', locataire: 'Locataire A' },
      { id: 2, nom: 'PORTLAND 2', locataire: 'Locataire B' },
      { id: 3, nom: 'PORTLAND 3', locataire: 'Locataire C' },
      { id: 4, nom: 'PORTLAND 4', locataire: 'Locataire D' },
      { id: 5, nom: 'PORTLAND 5', locataire: 'Locataire E' },
      { id: 6, nom: 'PORTLAND 6', locataire: 'Locataire F' },
      { id: 7, nom: 'PORTLAND 7', locataire: 'Locataire G' },
      { id: 8, nom: 'PORTLAND 8', locataire: 'Locataire H' },
    ],
    showDetails: false
  },
  {
    id: 4,
    nom: 'DUCATUS',
    adresse: 'Avenue Ducpetiaux 15,',
    ville : '1060 Saint-Gilles',
    chambres: [
      { id: 1, nom: 'DUCATUS 0', locataire: 'Locataire A' },
      { id: 2, nom: 'DUCATUS 1', locataire: 'Locataire B' },
      { id: 3, nom: 'DUCATUS 2', locataire: 'Locataire C' },
      { id: 4, nom: 'DUCATUS 3', locataire: 'Locataire D' },
      { id: 5, nom: 'DUCATUS 4', locataire: 'Locataire E' },
      { id: 6, nom: 'DUCATUS 5', locataire: 'Locataire F' },
      { id: 7, nom: 'DUCATUS 6', locataire: 'Locataire G' },
      { id: 8, nom: 'DUCATUS 7', locataire: 'Locataire H' },
      { id: 9, nom: 'DUCATUS 8', locataire: 'Locataire I' },
      { id: 10, nom: 'DUCATUS 9', locataire: 'Locataire J' },
    ],
    showDetails: false
  },
  
];
filteredMaisons: any[] = this.maisons;

selectedMaison: any;
selectedChambre: any;


selectMaison(maison: any) {
  this.selectedMaison = maison;
  this.selectedChambre = null;
}

selectChambre(chambre: any) {
  this.selectedChambre = chambre;
}
addMaison() {
  const newMaison = {
    id: this.maisons.length + 1,
    nom: '', // Initialize with empty values
    adresse: '',
    ville: '',
    chambres: [],
    showDetails: false,
  };


  // Assign input values if they are not null or empty strings
  newMaison.nom = this.newMaison.nom || '';
  newMaison.adresse = this.newMaison.adresse|| '';
  newMaison.ville = this.newMaison.ville || '';
    
  this.maisons.unshift(newMaison);
}
toggleDetails(maison: any) {
  maison.showDetails = !maison.showDetails;
}

// Make the searchbar functionnal
searchMaison() {
  if (this.search === '') {
    this.filteredMaisons = this.maisons; // No search term, show all maisons
    return;
  }
  this.filteredMaisons = this.maisons.filter((maison) =>
    maison.nom.toLowerCase().includes(this.search.toLowerCase())
  );
}
}




