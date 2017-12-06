import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PushChildPage } from './push-child';

@NgModule({
  declarations: [
    PushChildPage,
  ],
  imports: [
    IonicPageModule.forChild(PushChildPage),
  ],
})
export class PushChildPageModule {}
