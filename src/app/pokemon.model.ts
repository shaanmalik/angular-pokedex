export class Pokemon {

    constructor(private image: string, private name: string, private description: string, private pokedexNumber) {

    }

    toString(): string {
        return "{" + this.pokedexNumber + ", " + this.name + ", " + this.image + ", " +  this.description + "}";
    }

}
