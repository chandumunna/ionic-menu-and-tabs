import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PageInterface } from '../../shared/interface/pages.interface';
import { ThreeMenu } from '../../shared/page-menu/page-menu';

@IonicPage()
@Component({
  selector: 'page-main-side-menu',
  templateUrl: 'main-side-menu.html',
})
export class MainSideMenuPage {
  @Input() mymenu;
  // mymenu: PageInterface[] = ThreeMenu;
  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('Hello from page-main-side-menu', this.mymenu)
  }

  openPage(p) {
    
  }

}
