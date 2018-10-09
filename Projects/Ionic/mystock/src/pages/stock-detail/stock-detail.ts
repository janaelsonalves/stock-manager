import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Stock } from '../../models/stock';

/**
 * Generated class for the StockDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stock-detail',
  templateUrl: 'stock-detail.html',
})
export class StockDetailPage {

  stock: Stock;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.stock = navParams.get('stock')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StockDetailPage');
    console.log(this.stock);    
  }

}
