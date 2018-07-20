import {Observer} from "./Observer"
import {Subject} from "./Subject"


export class StockGrabber implements Subject {
    private observers: Array<Observer>
    private ibmPrice: number
    private applePrice: number
    private googPrice: number

    constructor()  {
        this.observers = []
        this.applePrice = 0
        this.googPrice = 0
        this.ibmPrice = 0
    }
    
    register(newObserver: Observer): void {
        this.observers.push(newObserver)
    }

    unregister(rmObserver: Observer): void {
        let observerIndex = this.observers.indexOf(rmObserver)

        console.log("Observer " + observerIndex + " is deleted" )
        this.observers = this.observers.filter(observer => observer !== this.observers[observerIndex])
    }

    notifyObserver(): void {
        this.observers.forEach(observer => {
            observer.update(this.ibmPrice, this.applePrice, this.googPrice)
        })
    }

    setIbmPrice(newPrice: number): void {
        this.ibmPrice = newPrice
        this.notifyObserver()
    }

    setApplePrice(newPrice: number): void {
        this.applePrice = newPrice
        this.notifyObserver()
    }

    setGoogPrice(newPrice: number): void {
        this.googPrice = newPrice
        this.notifyObserver()
    }
}