import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  stockForm: FormGroup;

  constructor(public navCtrl: NavController, public builder: FormBuilder) {

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
    this.stockForm.get('brokerage').valueChanges.subscribe(value => {
      console.log('Value: ', value);
      console.log(this.getLiquidValue());
    })

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

}
