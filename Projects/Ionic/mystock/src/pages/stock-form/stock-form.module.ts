import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StockFormPage } from './stock-form';

@NgModule({
  declarations: [
    StockFormPage,
  ],
  imports: [
    IonicPageModule.forChild(StockFormPage),
  ],
})
export class StockFormPageModule {}
