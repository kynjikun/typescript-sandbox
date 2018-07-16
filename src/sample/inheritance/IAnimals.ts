interface IAnimals {
    readonly numberOfLegs: number
    makeSound(): void;
    eatFood(food: String): void;
}

function testAnimal(animal: IAnimals): void {
    console.log(animal.numberOfLegs)
    animal.makeSound()
    animal.eatFood("Niku")
}

abstract class Animals implements IAnimals {
    constructor(public numberOfLegs: number) {}
    abstract makeSound(): void
    eatFood(food: string): void {
        console.log("nam nam " + food)
    }
}

class Dog extends Animals {
    constructor() {
        super(4)
    }

    makeSound(): void {
        console.log("woof")
    }

    eatFood(food: string) {
        if (food !== "meat") {
            console.log("Eww")
        } else {
            super.eatFood(food)
        }
    }
}


testAnimal(new Dog())