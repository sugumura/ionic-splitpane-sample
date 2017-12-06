import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { Menu } from '../../model/menu';

@Injectable()
export class SplitPaneProvider {

  menuSubject = new Subject<any>();
  menuSubject$ = this.menuSubject.asObservable();

  rootSubject = new Subject<any>();
  rootSubject$ = this.rootSubject.asObservable();

  constructor() {
  }

  setMenuPage(menus: Menu[]) {
    this.menuSubject.next(menus);
  }

  setRootPage(menu: Menu) {
    this.rootSubject.next(menu);
  }

}
