import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  searchTerm: FormControl;

  cities: Array<{ name: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.searchTerm = new FormControl('');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  initCities() {
    this.cities = [
      { name: 'Brasília' },
      { name: 'São Paulo' },
      { name: 'Rio de Janeiro' },
      { name: 'Teresina' },
      { name: 'Palmas' },
      { name: 'Curitiba' },
    ]
  }

  onClick(event: any) {
    console.log('Event value: ', event);
  }

  filterCities() {
    this.initCities();
    this.searchTerm.valueChanges
      .pipe(debounceTime(300))
      .subscribe(term => {
        this.cities = this.cities.filter((city) => {
          return city.name.toLocaleLowerCase().indexOf(term.toLocaleLowerCase) > -1;
        })
      })
  }
}
