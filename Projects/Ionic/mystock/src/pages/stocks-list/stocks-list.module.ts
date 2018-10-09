import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StocksListPage } from './stocks-list';

@NgModule({
  declarations: [
    StocksListPage,
  ],
  imports: [
    IonicPageModule.forChild(StocksListPage),
  ],
})
export class StocksListPageModule {}
