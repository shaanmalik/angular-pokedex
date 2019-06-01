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
    From its antenna, this Pokémon releases a terrifically strong odor.`,
    10);
    
  private bulbasaur: Pokemon = new Pokemon(
    "./assets/001-bulbasaur.png",
    "Bulbasaur",
    `Bulbasaur can be seen napping in bright sunlight. 
    There is a seed on its back. 
    By soaking up the sun's rays, the seed grows progressively larger.`,
    1);

  private abra: Pokemon = new Pokemon(
    "./assets/063-abra.png",
    "Abra",
    `Abra sleeps for eighteen hours a day. 
    However, it can sense the presence of foes even while it is sleeping. 
    In such a situation, this Pokémon immediately teleports to safety.`,
    63);

  private cubone: Pokemon = new Pokemon(
    "./assets/104-cubone.png",
    "Cubone",
    `Cubone pines for the mother it will never see again. 
    Seeing a likeness of its mother in the full moon, it cries. 
    The stains on the skull the Pokémon wears are made by the tears it sheds.`,
    104);

  pokedex = new Pokedex([this.caterpie, this.bulbasaur, this.abra, this.cubone]);

}

