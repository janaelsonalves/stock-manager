import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stock } from '../../models/stock';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the StockProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StockProvider {

  stocks: Array<Stock>;

  constructor(public http: HttpClient) {
    console.log('Hello StockProvider Provider');
    this.stocks = [
      { symbol: "PETR4", price: 25.6, quantity: 500 },
      { symbol: "ABEV3", price: 26.7, quantity: 500 },
      { symbol: "ALPA4", price: 15.8, quantity: 500 },
      { symbol: "ITSA4", price: 9.5, quantity: 500 },
      { symbol: "USIM5", price: 10.06, quantity: 500 },
      { symbol: "BBAS3", price: 35.01, quantity: 500 },
    ]
  }

  getStocks(): Observable<Array<Stock>> {
    return Observable.create(observer => {
      observer.next(this.stocks);
    })
  }

}
