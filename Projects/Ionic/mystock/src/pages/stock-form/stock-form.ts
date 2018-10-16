import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { StockProvider } from '../../providers/stock/stock';
import { Stock } from '../../models/stock';

/**
 * Generated class for the StockFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stock-form',
  templateUrl: 'stock-form.html',
})
export class StockFormPage {

  stockForm: FormGroup;

  constructor(public navCtrl: NavController, public builder: FormBuilder, public loadingCtrl: LoadingController, public stockProvider: StockProvider) {

    this.stockForm = builder.group({
      trading: ['purchase', Validators.required],
      symbol: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required],
      brokerage: ['', Validators.required],
      others_fees: [''],
    })

    console.log(this.stockForm);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');    
  }

  getTradingValue(): number {
    try {
      return (this.stockForm.get('quantity').value) * (this.stockForm.get('price').value);
    } catch (error) {
      return 0;
    }
  }

  getLiquidValue() {
    let value = this.stockForm.get('trading').value;
    if (value == 'purchase') {
      return (this.getTradingValue() + this.getTotalExpenses());
    } else if (value == 'sale') {
      return (this.getTradingValue() - this.getTotalExpenses());
    }
  }

  getTotalExpenses(): number {
    return this.getBrokerage() + this.getOthersFees();
  }

  getBrokerage(): any {
    try {
      return parseFloat(this.stockForm.get('brokerage').value);
    } catch (error) {
      return 0;
    }
  }

  getOthersFees(): any {
    if (!this.stockForm.get('others_fees').value) {
      return 0;
    }
    return parseFloat(this.stockForm.get('others_fees').value);
  }


  onSubmit() {
    console.log(this.stockForm.value);
  }

  addStock() {
    console.log(this.stockForm.value);
    let loading = this.loadingCtrl.create({
      content: "Please wait...",
      spinner: "bubles"
    })
    this.stockProvider.addStock(this.stockForm.value).then((value) => {
      loading.dismiss().then(() => {
        this.navCtrl.setRoot("StocksListPage");
        console.log('Sucessful: ', value)
      })
    }).catch((err) => {
      console.log('Failed: ', err)
    })
  }
}
