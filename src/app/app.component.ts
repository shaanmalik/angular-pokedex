import { Component } from '@angular/core';
import { Pokedex } from './pokedex.model';
import { Pokemon } from './pokemon.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private caterpie: Pokemon = new Pokemon(
    "./assets/010-caterpie.png",
    "Caterpie",
    `Caterpie has a voracious appetite.
    It can devour leaves bigger than its body right before your eyes. 
    From its antenna, this Pokémon releases a terrifically strong odor.`);

    pokedex = new Pokedex([this.caterpie]);

}

