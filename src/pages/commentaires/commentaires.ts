import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
/**
 * Generated class for the CommentairesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-commentaires',
  templateUrl: 'commentaires.html',
})
export class CommentairesPage {
  commentaires: any;
  id_fiche: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public rest: RestProvider) {
    this.id_fiche = navParams.get('id_fiche');
    this.getCommentaires(this.id_fiche);
  }
  closeModal() {
        this.navCtrl.pop();
    }
  getCommentaires(id_fiche) {
    this.rest.getCommentaires(id_fiche)
    .then(data => {
      this.commentaires = data;
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentairesPage');
  }

}
