import { Component,ViewChild } from '@angular/core';
import {Platform,Nav } from 'ionic-angular';

import { WelcomePage } from '../pages/welcome/welcome';
import { AccueilPage } from '../pages/accueil/accueil';
declare var FCMPlugin;
@Component({
  templateUrl: 'app.html'
})
export class MyApp {


  @ViewChild(Nav) nav: Nav;
  rootPage: any = WelcomePage;
  pages: Array<{title: string, component: any}>;
 
   constructor(public platform: Platform) {
    this.pages = [
      {title: 'Catégories', component: AccueilPage },
      { title: 'Se déconnecter()', component: WelcomePage }
    ];

  }
 openPage(p) {
    this.nav.setRoot(p.component);
  }
}