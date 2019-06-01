import { Pokemon } from './pokemon.model';

export class Pokedex {

    constructor(private pokemonList: Pokemon[]) {

    }

    toString(): string {
        var str = "[";
        this.pokemonList.forEach((pokemon) => {
            str += pokemon.toString();
        });
        return str + "]";
    }

}
