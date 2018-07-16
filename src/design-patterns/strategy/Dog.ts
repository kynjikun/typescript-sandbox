import { Animal, ItFlys, CantFly, Flys } from "./Animal"


export class Dog extends Animal {
    constructor() {
        super()
        this.setSound("Woof")
    }
}