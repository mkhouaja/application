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
  id_adresse: any;
  fiche: any;
  commentaire = { texte: '', id_fiche: '', id_utilisateur: ''};
  note = { note: '', id_fiche: '', id_utilisateur: ''};
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,public rest: RestProvider) {
    this.id_fiche = navParams.get('id_fiche');
    this.getFiche(this.id_fiche);
   
    
  }
  openModal(id_adresse) {
    let myModal = this.modalCtrl.create(AdressePage,{ id_adresse: id_adresse});
    myModal.present();
  }
  seeComments(id_fiche) {
    let myModal = this.modalCtrl.create(CommentairesPage,{ id_fiche: id_fiche });
    myModal.present();
  }
  // Add commentaire
  addCommentaire() {
    this.commentaire.id_fiche = this.id_fiche;
    this.commentaire.id_utilisateur = localStorage.getItem('user');
    this.rest.addCommentaire(this.commentaire).then((result) => {
    this.commentaire={ texte: '', id_fiche: '', id_utilisateur: ''};
    this.seeComments(this.id_fiche);
  }, (err) => {
    console.log(err);
  });
  }
  //Add note 
  addNote() {
    this.note.id_fiche = this.id_fiche;
    this.note.id_utilisateur = localStorage.getItem('user');
    this.rest.addNote(this.note).then((result) => {
    this.getFiche(this.note.id_fiche);
  }, (err) => {
    console.log(err);
  });
    
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
