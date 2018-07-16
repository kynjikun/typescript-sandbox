class Car {
    
    private static SERIES_NUMBER = 0
    public brandName: string
    private _seriesNumber: number
    private _ownerName: string

    private constructor(brand: string) {
        this.brandName = brand
        Car.SERIES_NUMBER++ 
        this._seriesNumber = Car.SERIES_NUMBER
        this._ownerName = ""
    }

    public static buyCar(brand: string, owner: string): Car {
        let car = new Car(brand)
        car.ownerName = owner
        return car
    }

    public static buildCar(brand: string): Car {
        return new Car(brand)
    }

    public startCar(): void {
        this._startEngine()
    }

    public get seriesNumber(): number {
        return this._seriesNumber
    }

    public get ownerName(): string {
        return this._ownerName
    }

    public set ownerName(name: string) {
        this._ownerName = name
    }

    private _startEngine(): void {}
}

let car = Car.buyCar("Jeep", "Kyndzii");
let truck = Car.buyCar("Canter", "Truck Driver")

console.log("owner: " + car.ownerName, "\nbrand: " + car.brandName)
console.log("owner: " + truck.ownerName, "\nbrand: " + truck.brandName)
