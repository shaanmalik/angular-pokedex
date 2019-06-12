import { Pokemon } from './pokemon.model';

export class Pokedex {

    constructor(public pokemonList: Pokemon[]) {

    }

    toString(): string {
        var str = "[";
        this.pokemonList.forEach((pokemon) => {
            str += pokemon.toString();
        });
        return str + "]";
    }

}
