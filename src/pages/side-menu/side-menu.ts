import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-side-menu',
  templateUrl: 'side-menu.html',
})
export class SideMenuPage {

  @ViewChild(Nav) nav: Nav;

  rootPage = 'my-profile';

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  pages: PageInterface[] = [
    { title: 'My profile', pageName: 'my-profile', icon: 'home' },
    { title: 'Contact', pageName: 'my-contact', icon: 'contact' },
  ];

  ionViewDidLoad() {
    console.log('ionViewDidLoad SideMenuPage');
  }

  openPage(p) {
    console.log(p);

  }

  isActive(p) {

  }

}
