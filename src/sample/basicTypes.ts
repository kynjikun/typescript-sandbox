let isDog: boolean = false
let dogAge: number = 2
let dogName: string = `Ishi`

let dogNames: Array<string> = [`testing`, `Hello`]
let dogAges: Array<number> = [1,2,3,4]

const doStuff = function(): void {
    console.log(`nani?`)
}
doStuff();

const throwError = function(msg: string): never {
    throw new Error(msg)
}

enum ErrorCode {
    OUT_OF_MEMORY = 32,
    WRONG_INPUT = 1,
}

var error: ErrorCode = ErrorCode.OUT_OF_MEMORY

let getNameAndAge = function(): [string, number] {
    return [`Kyndzii`, 14]
}

let tuple: [string, number] = [`some string`, 1]
let firstItem: string = tuple[0]
let secondItem: number = tuple[1]