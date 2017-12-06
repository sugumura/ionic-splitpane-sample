import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PushRootPage } from './push-root';

@NgModule({
  declarations: [
    PushRootPage,
  ],
  imports: [
    IonicPageModule.forChild(PushRootPage),
  ],
})
export class PushRootPageModule {}
