import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Stock } from '../../models/stock';
import { StockProvider } from '../../providers/stock/stock';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private stockProvider: StockProvider) {
    this.stock = navParams.get('stock')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StockDetailPage');
    console.log(this.stock);
  }

  deleteStock() {
    let alert = this.alertCtrl.create({
      message: `Are you sure you want to delete ${this.stock.symbol} (${this.stock.trading})?`,
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Clicked cancel');
          }
        },
        {
          text: 'Ok',
          handler: () => {
            console.log('Clicked Ok');
            let navTransition = alert.dismiss();
            this.stockProvider.deleteStock(this.stock.id).then((value) => {
              console.log('Deleted successful!');
              navTransition.then(() => {
                this.navCtrl.pop();
              })
            })
            return false;
          }
        }
      ]
    });
    alert.present();
  }

}
