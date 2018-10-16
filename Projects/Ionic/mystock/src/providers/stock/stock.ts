import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stock } from '../../models/stock';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

/*
  Generated class for the StockProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StockProvider {

  stocks: Array<Stock>;
  private collection = 'purchases';

  private alphaVantageApiKey = "TKZ5TR4ZXUYH4NFW";
  private alphaVantageApi = "https://www.alphavantage.co";

  
  constructor(public http: HttpClient, private firestore: AngularFirestore) {
    console.log('Hello StockProvider Provider');
    this.stocks = [
      { symbol: "PETR4", price: 25.6, quantity: 500, fees: 1.1, sale_fee: 0.75, iss: 1.5 },
      { symbol: "ABEV3", price: 26.7, quantity: 400, fees: 1.1, sale_fee: 0.75, iss: 1.5 },
      { symbol: "ALPA4", price: 15.8, quantity: 300, fees: 1.1, sale_fee: 0.75, iss: 1.5 },
      { symbol: "ITSA4", price: 9.5, quantity: 600, fees: 1.1, sale_fee: 0.75, iss: 1.5 },
      { symbol: "USIM5", price: 10.06, quantity: 1500, fees: 1.1, sale_fee: 0.75, iss: 1.5 },
      { symbol: "BBAS3", price: 35.01, quantity: 400, fees: 1.1, sale_fee: 0.75, iss: 1.5 },
    ]
  }
  
  getStocks(): Observable<Array<Stock>> {
    return Observable.create(observer => {
      observer.next(this.stocks);
    })
  }
  
  getSharesPurchased(): AngularFirestoreCollection<any> {
    return this.firestore.collection(this.collection);
  }

  searchStocksBy(keywords: string) {
    return this.http.get(`${this.alphaVantageApi}/query?function=SYMBOL_SEARCH&keywords=${keywords}&apikey=${this.alphaVantageApiKey}`)
  }
  
  addStock(stock: any): Promise<any> {
    let id = this.firestore.createId();
    return this.firestore.collection(this.collection).doc(id).set(stock);
  }

}
