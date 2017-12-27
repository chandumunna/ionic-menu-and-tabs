import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { PageInterface } from '../../shared/interface/pages.interface';
import { ThreeMenu, TabsMenu } from '../../shared/page-menu/page-menu';
import { MainSideMenuPage } from '../main-side-menu/main-side-menu';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  @ViewChild(Nav) nav: Nav;

  rootPage = 'my-profile';
  mymenu: PageInterface[] = ThreeMenu;
  tabsMenu: any = TabsMenu;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() { }

  openPage(page) {

    if (page.pageName == 'login-page') {
      this.navCtrl.push('login-page');
    }

    this.nav.setRoot(page.pageName);
  }

}
