import { Animal, ItFlys, CantFly, Flys } from "./Animal"

export class Bird extends Animal {
    constructor() {
        super()
        this.setSound("Tweet")
        this.giveFlyingAbility()
    }

    digHole(): void {
        console.log("Im'a dig hole b****")
    }
}