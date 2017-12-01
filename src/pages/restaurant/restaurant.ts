import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { AdressePage } from '../adresse/adresse';
import { CommentairesPage } from '../commentaires/commentaires';
import { RestProvider } from '../../providers/rest/rest';
/**
 * Generated class for the RestaurantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurant',
  templateUrl: 'restaurant.html',
})
export class RestaurantPage {
  id_fiche: any; 
  fiche: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,public rest: RestProvider) {
    this.id_fiche = navParams.get('id_fiche');
    this.getFiche(this.id_fiche);
  }
  openModal() {
    let myModal = this.modalCtrl.create(AdressePage);
    myModal.present();
  }
  seeComments(id_fiche) {
    let myModal = this.modalCtrl.create(CommentairesPage,{ id_fiche: id_fiche });
    myModal.present();
  }
  getFiche(id_fiche) {
    this.rest.getFiche(id_fiche)
    .then(data => {
      this.fiche = data;
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantPage');
  }

}
