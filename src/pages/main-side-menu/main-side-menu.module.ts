import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainSideMenuPage } from './main-side-menu';

@NgModule({
  declarations: [
    MainSideMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(MainSideMenuPage),
  ],
})
export class MainSideMenuPageModule {}
