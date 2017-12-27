import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainPage } from './main';
import { MainSideMenuPage } from '../main-side-menu/main-side-menu';

@NgModule({
  declarations: [
    MainPage,
    MainSideMenuPage
  ],
  imports: [
    IonicPageModule.forChild(MainPage),
  ],
})
export class MainPageModule {}
