import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() { }

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

  MenuThree() {
    this.navCtrl.setRoot('MainSideMenuPage');
  }

}
