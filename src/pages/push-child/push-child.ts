import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SplitPaneProvider } from "../../providers/split-pane/split-pane";
import { Menu } from '../../model/menu';

/**
 * Generated class for the PushChildPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-push-child',
  templateUrl: 'push-child.html',
})
export class PushChildPage {

  menu2: Array<Menu> = [
    {
      pageName: 'HomePage',
      label: 'Hoge',
    },
    {
      pageName: 'PushRootPage',
      label: 'Fuga',
    },
  ];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private spp: SplitPaneProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PushChildPage');
  }

  changeMenu() {
    this.spp.setMenuPage(this.menu2);
  }
}
