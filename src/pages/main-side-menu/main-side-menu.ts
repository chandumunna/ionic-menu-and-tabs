import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { PageInterface } from '../../shared/interface/pages.interface';
import { ThreeMenu } from '../../shared/page-menu/page-menu';
import { TabsPage } from "./../tabs/tabs";

@IonicPage()
@Component({
  selector: 'page-main-side-menu',
  templateUrl: 'main-side-menu.html',
})
export class MainSideMenuPage {
  @ViewChild(Nav) nav: Nav;

  rootPage: string = 'TabsPage';
  mymenu: PageInterface[] = ThreeMenu;
  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() { }

  openPage(page: PageInterface) {
    let params = {};

    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
    }

    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
      // Tabs are not active, so reset the root page 
      // In this case: moving to or from SpecialPage
      this.nav.setRoot(page.pageName, params);
    }
  }

  isActive(page: PageInterface) {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNav();

    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }

    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }

}
