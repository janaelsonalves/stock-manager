import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { StockProvider } from '../../providers/stock/stock';

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

  private stockForm: FormGroup;
  private total: number = 0;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public stockProvider: StockProvider, public formBuilder: FormBuilder) {
    this.stockForm = formBuilder.group({
      symbol: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required],
      fees: ['', Validators.required],
      sale_fee: ['', Validators.required],
      iss: [''],
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StockFormPage');
  }

  addStock() {
    console.log(this.stockForm.value);
    let loading = this.loadingCtrl.create({
      content: "Please wait...",
      spinner: "bubles"
    })
    this.stockProvider.addStock(this.stockForm.value).then((value) => {
      loading.dismiss().then(() => {
        this.navCtrl.setRoot("StockListPage");
        console.log('Sucessful: ', value)
      })
    }).catch((err) => {
      console.log('Failed: ', err)
    })
  }
}
