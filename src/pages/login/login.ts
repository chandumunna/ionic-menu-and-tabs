import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

@IonicPage({
  name: 'login-page'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController) { }

  ionViewDidLoad() {
    this.menuCtrl.enable(false, 'menuOne');
    this.menuCtrl.enable(false, 'menuTwo');
  }

  MenuOne() {
    this.navCtrl.setRoot('SideMenuPage', {
      id: 1
    });
  }

  MenuTwo() {
    this.navCtrl.setRoot('SideMenuPage', {
      id: 2
    });
  }

}
