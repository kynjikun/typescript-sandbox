import {Observer} from  './Observer'
import {Subject} from './Subject'

export class StockObserver implements Observer {
    private ibmPrice: number;
    private googPrice: number;
    private applePrice: number;

    private static observerIDTracker: number = 0;    
    private observerID: number;

    private stockGrabber: Subject;

    constructor(stockGrabber: Subject) {
        this.stockGrabber = stockGrabber
        this.observerID = ++StockObserver.observerIDTracker
        this.applePrice = 0
        this.googPrice = 0
        this.ibmPrice = 0

        console.log("New Observer " + this.observerID )
        this.stockGrabber.register(this)
    }

    update(ibmPrice: number, applePrice: number, googPrice: number): void {
        this.ibmPrice = ibmPrice
        this.applePrice = applePrice
        this.googPrice = googPrice

        this.printPrices()
    }

    printPrices(): void {
        console.log(this.observerID + "\nIBM: " + this.ibmPrice +
            "\nAAPL: " + this.applePrice + "\nGGL: "  + this.googPrice
        )
    }

}