export interface Stock {

    symbol: string;
    price: number;
    quantity: number;
    fees: number;
    sale_fee: number;
    iss?: number;
}