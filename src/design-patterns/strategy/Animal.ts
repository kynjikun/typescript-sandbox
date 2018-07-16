export interface Flys {
    fly() : string
}

export class ItFlys implements Flys {
    fly(): string {
        return "Flying baby"
    }
}

export class CantFly implements Flys {
    fly(): string {
        return "Cannot Fly"
    }
}

export class Animal {
    private name: string;
    private favFood: string;
    private speed: number;
    private sound: string;
    private flyTpe: Flys; //this style is known as composition

    constructor() {
        this.name = ""
        this.favFood = ""
        this.speed = 0
        this.sound = ""
        this.flyTpe = new CantFly
    }

    setName(newName: string): void {
        this.name = newName
    }

    getName(): string {
        return this.name
    }

    setSpeed(newSpeed: number): void {
        this.speed = newSpeed
    }

    getSpeed(): number {
        return this.speed
    }

    setFavFood(newFavFood: string): void {
        this.favFood = newFavFood
    }

    getFavFood(): string {
        return this.favFood
    }

    setSound(newSound: string): void {
        this.sound = newSound
    }

    getSound(): string {
        return this.sound
    }

    tryToFly(): string {
        return this.flyTpe.fly()
    }

    giveFlyingAbility(): void {
        this.flyTpe = new ItFlys()
    }

}