export class Pokemon {

    constructor(private image: string, private name: string, private description: string) {

    }

    toString(): string {
        return "{" + this.image + ", " + this.name + ", " + this.description + "}";
    }

}
