export interface Observer {
    update(ibmPrice: number, applePrice: number, googPrice: number): void;
}