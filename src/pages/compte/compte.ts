import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { AccueilPage } from '../accueil/accueil';
/**
 * Generated class for the ComptePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-compte',
  templateUrl: 'compte.html',
})
export class ComptePage {
  user = { email: '', password: '', pseudo: '',device:''};
  pushPage: any;
  error: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public rest: RestProvider) {
  }
 //Add utilisateur 
  addUtilisateur() {
    this.user.device = localStorage.getItem("device");
    this.rest.addUtilisateur(this.user).then((result) => {
      
      if(result=="pseudo") {
        this.error = "pseudo déjà existant";
      }
      else if (result =="email") {
        this.error = "pseudo déjà existant";
      }
      else if (result =="pseudo + email") {
        this.error = "pseudo et email déjà existants";
      }
      else {
        this.error="";  
        localStorage.setItem('user', JSON.stringify(result));
        this.navCtrl.push(AccueilPage);
      }
      
  }, (err) => {
    console.log(err);
  });
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ComptePage');
  }

}
