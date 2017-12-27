import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, MenuController } from 'ionic-angular';
import { PageInterface } from "../../shared/interface/pages.interface";
import { OneMenu, TwoMenu } from "../../shared/page-menu/page-menu";
@IonicPage()
@Component({
  selector: 'page-side-menu',
  templateUrl: 'side-menu.html',
})
export class SideMenuPage {

  @ViewChild(Nav) nav: Nav;

  rootPage = 'my-profile';

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController) { }

  pages: PageInterface[] = OneMenu;
  pages2: PageInterface[] = TwoMenu;

  ionViewDidLoad() {
    // console.log(this.navParams.get('id'))
    
    if (this.navParams.get('id') == 1) {
      this.menuCtrl.enable(true, 'menuOne');
      this.menuCtrl.enable(false, 'menuTwo');
    }else if (this.navParams.get('id') == 2) {
      this.menuCtrl.enable(false, 'menuOne');
      this.menuCtrl.enable(true, 'menuTwo');
    }
  }

  openPage(page) {
    if (page.pageName =='login-page') {
      this.navCtrl.push('login-page');
    }
    
    this.nav.setRoot(page.pageName);
  }

  isActive(p) {

  }

}
