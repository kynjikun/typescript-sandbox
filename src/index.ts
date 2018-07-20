// 
// Strategy Design Pattern
// 

/*
import {Animal} from  "./design-patterns/strategy/Animal"
import {Dog} from  "./design-patterns/strategy/Dog"
import {Bird} from  "./design-patterns/strategy/Bird"

const sparky: Animal = new Dog
const tweety: Animal = new Bird

console.log(sparky.getSound())
console.log(sparky.tryToFly())
console.log(tweety.getSound())
console.log(tweety.tryToFly())
*/

// 
// Observer Design pattern
// 

import { StockGrabber } from "./design-patterns/observer/StockGrabber"
import { StockObserver } from "./design-patterns/observer/StockObserver"

const stockGrabber = new StockGrabber()

const stockObserver1 = new StockObserver(stockGrabber)

stockGrabber.setIbmPrice(197.00)
stockGrabber.setApplePrice(134.00)
stockGrabber.setGoogPrice(154.00)

const stockObserver2 = new StockObserver(stockGrabber)

setInterval(() => {
    stockGrabber.setGoogPrice((Math.random() * 300) + 154.00)
    stockGrabber.setIbmPrice((Math.random() * 300) + 197.00)
    stockGrabber.setApplePrice((Math.random() * 300) + 134.00)
}, (Math.random() * 5500) + 1500)

setTimeout(() => {
    stockGrabber.unregister(stockObserver1)
}, 10000)