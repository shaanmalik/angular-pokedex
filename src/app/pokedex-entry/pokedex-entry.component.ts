import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../pokemon.model';

@Component({
  selector: 'app-pokedex-entry',
  templateUrl: './pokedex-entry.component.html',
  styleUrls: ['./pokedex-entry.component.css']
})
export class PokedexEntryComponent implements OnInit {

  // pokemon: Pokemon = new Pokemon(
  //   "./assets/010-caterpie.png",
  //   "Caterpie",
  //   `Caterpie has a voracious appetite.
  //   It can devour leaves bigger than its body right before your eyes. 
  //   From its antenna, this Pokémon releases a terrifically strong odor.`);

  @Input('pokemon') pokemon: Pokemon; 

  constructor() { 

  }

  ngOnInit() {
  }

}
