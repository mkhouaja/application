import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { AdressePage } from '../adresse/adresse';
import { CommentairesPage } from '../commentaires/commentaires';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    
  }
  openModal() {
    let myModal = this.modalCtrl.create(AdressePage);
    myModal.present();
  }
  seeComments() {
    let myModal = this.modalCtrl.create(CommentairesPage);
    myModal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantPage');
  }

}
