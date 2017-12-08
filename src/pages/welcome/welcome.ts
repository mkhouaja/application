import { Component} from '@angular/core';
import { Platform } from 'ionic-angular';
import { IonicPage} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from '../login/login';
import {ComptePage} from '../compte/compte';
/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  pages: Array<{title: string, component: any}>;
  loginPage = LoginPage;
  comptePage = ComptePage;
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
      localStorage.setItem('user', "");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

}
