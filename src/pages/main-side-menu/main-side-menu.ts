import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { PageInterface } from '../../shared/interface/pages.interface';
import { ThreeMenu } from '../../shared/page-menu/page-menu';

@IonicPage()
@Component({
  selector: 'page-main-side-menu',
  templateUrl: 'main-side-menu.html',
})
export class MainSideMenuPage {
  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

  // Basic root for our content view
  rootPage: string = 'TabsPage';

  // ThreeMenu from page-menu
  mymenu: PageInterface[] = ThreeMenu;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() { }

  openPage(page: PageInterface) {
    let params = {};

    if (page.index) {
      params = { tabIndex: page.index };
    }

    let childNav = this.nav.getActiveChildNavs();

    if (typeof childNav !='undefined' && typeof childNav[0] !='undefined' && page.index != undefined) {
      childNav[0].select(page.index);
    } else {
      if (page.pageName == 'LoginPage') {
        this.navCtrl.push('LoginPage');
      }

      this.nav.setRoot(page.pageName, params);
    }
  }

  isActive(page: PageInterface) {
    
    let childNav = this.nav.getActiveChildNavs();
    if (typeof childNav !='undefined' && typeof childNav[0] !='undefined') {
      if (childNav[0].getSelected() && childNav[0].getSelected().root === page.linkName) {
        return 'primary';
      }
      
      return;
    }

    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }

}
