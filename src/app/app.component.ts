import { Component,ViewChild } from '@angular/core';
import {Platform,Nav,AlertController } from 'ionic-angular';

import { WelcomePage } from '../pages/welcome/welcome';
import { AccueilPage } from '../pages/accueil/accueil';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {


  @ViewChild(Nav) nav: Nav;
  rootPage: any = WelcomePage;
  pages: Array<{title: string, component: any}>;
 
   constructor(public platform: Platform,public push: Push,public alertCtrl: AlertController) {
    this.pages = [
      {title: 'Catégories', component: AccueilPage },
      { title: 'Se déconnecter()', component: WelcomePage }
    ];
    this.platform.ready().then( () => {
         this.pushsetup();
    });

  }
   pushsetup() {
    const options: PushOptions = {
     android: {
         senderID: '577328583141',
         sound: true,
		     vibrate: true,
     }
  };
 
  const pushObject: PushObject = this.push.init(options);
 
  pushObject.on('notification').subscribe((notification: any) => {

    if (notification.additionalData.foreground) {
      let youralert = this.alertCtrl.create({
        title: 'New Push notification',
        message: notification.message
      });
      youralert.present();
    }
  });
   pushObject.on('registration').subscribe((registration: any) => {
      localStorage.setItem("device",registration.registrationId);
   });
  pushObject.on('error').subscribe(error => alert('Error with Push plugin' + error));
  }
 openPage(p) {
    this.nav.setRoot(p.component);
  }
}