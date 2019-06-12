export class Pokemon {

    constructor(public image: string, public name: string, public description: string, public pokedexNumber) {

    }

    toString(): string {
        return "{" + this.pokedexNumber + ", " + this.name + ", " + this.image + ", " +  this.description + "}";
    }

}
