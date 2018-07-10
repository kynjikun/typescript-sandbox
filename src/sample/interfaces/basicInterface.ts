interface Santa {
    readonly numberOfVisits: number
    weight?: number
    giveGift(cb: GiftGivenCallback): void
    drinkMik?(): void
    
};

interface Santa {
    eat?(fast: boolean): void
}

interface FatSanta extends Santa {
    laugh(): void
}

interface GiftGivenCallback {
    (success: boolean): void
}

let santa: Santa = {
    numberOfVisits: 1234 ,
    giveGift: (callback: GiftGivenCallback) => {
        callback(false)
    },
    eat: (fast: boolean)  => {}
}

let fatSanta: FatSanta;
// fatSanta.eat();

let numberOfKidsToVisit = santa.numberOfVisits

let getNameAndAge2 = function():
     {name: string, age: number } {
    return { name: `Kyndzii`,age: 14 }
}

let tuple2 = getNameAndAge2()

let someName = tuple2.name
let someAge = tuple2.age
