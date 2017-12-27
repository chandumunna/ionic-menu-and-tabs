import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  rootPage = 'my-profile';
  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() { }

}
