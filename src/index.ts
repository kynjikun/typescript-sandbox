// 
// Strategy Design Pattern
// 
import {Animal} from  "./design-patterns/strategy/Animal"
import {Dog} from  "./design-patterns/strategy/Dog"
import {Bird} from  "./design-patterns/strategy/Bird"

const sparky: Animal = new Dog
const tweety: Animal = new Bird

console.log(sparky.getSound())
console.log(sparky.tryToFly())
console.log(tweety.getSound())
console.log(tweety.tryToFly())


// 
// 
// 
