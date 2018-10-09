import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Stock } from '../../models/stock';
import { StockProvider } from '../../providers/stock/stock';

/**
 * Generated class for the StocksListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stocks-list',
  templateUrl: 'stocks-list.html',
})
export class StocksListPage {

  stocks: Array<Stock>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public stockProvider: StockProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StocksListPage');
    this.stockProvider.getStocks()
      .subscribe(stocks => {
        this.stocks = stocks;
      })
  }

  openDetail(stock: Stock) {
    this.navCtrl.push('StockDetailPage', { stock: stock });
  }

}
