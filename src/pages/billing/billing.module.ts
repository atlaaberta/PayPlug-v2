import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BillingPage } from './billing';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import StringMask from 'string-mask';

@NgModule({
  declarations: [
    BillingPage,
  ],
  imports: [
    IonicPageModule.forChild(BillingPage),
    NgxQRCodeModule,
  ],
})
export class BillingPageModule {}
