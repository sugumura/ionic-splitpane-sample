import { Component, ViewChild } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { Menu } from '../model/menu';
import { Subscription } from "rxjs/Subscription";
import { SplitPaneProvider } from "../providers/split-pane/split-pane";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('content') nav: NavController;

  rootPage: any = 'HomePage';
  menus: Array<Menu>;

  menu1: Array<Menu> = [
    {
      pageName: 'HomePage',
      label: 'Home',
    },
    {
      pageName: 'PushRootPage',
      label: 'PushRoot',
    },
  ];

  rootNav$: Subscription;
  menu$: Subscription;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private spp: SplitPaneProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.rootNav$ = this.spp.rootSubject$.subscribe((menu) => {
      console.log('rootNav', menu);
      if (this.rootPage !== menu.pageName) {
        this.rootPage = menu.pageName;
      } else {
        this.nav.goToRoot({});
      }
    });

    this.menu$ = this.spp.menuSubject$.subscribe((menus) => {
      this.menus = menus;
    });

    this.spp.setMenuPage(this.menu1);
  }

  changeRoot(menu: Menu) {
    this.spp.setRootPage(menu);
  }
}

