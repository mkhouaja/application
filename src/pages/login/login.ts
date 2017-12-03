import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AccueilPage} from '../accueil/accueil';
import { RestProvider } from '../../providers/rest/rest';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  accueilPage = AccueilPage;
  pushPage:any;
  erreurMsg:any;
  user = {email: '', password: ''};
  constructor(public navCtrl: NavController, public navParams: NavParams,public rest: RestProvider) {
  }
login() {
    this.rest.login(this.user).then((result) => {

      if(result == "ko"){
        this.erreurMsg = "Vérifiez vos identifiants";
      }
      else {
        this.erreurMsg = "";
        localStorage.setItem('user', JSON.stringify(result));
        this.pushPage = AccueilPage;
      }
  }, (err) => {
    console.log(err);
  });
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
