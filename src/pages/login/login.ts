import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'login-page'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
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
