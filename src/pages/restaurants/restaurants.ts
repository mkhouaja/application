import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestaurantPage } from '../restaurant/restaurant';
import { RestProvider } from '../../providers/rest/rest';
/**
 * Generated class for the RestaurantsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurants',
  templateUrl: 'restaurants.html',
})
export class RestaurantsPage {
  restaurantPage = RestaurantPage;
  categorie: any; 
  fiches: any; 
  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestProvider) {
    this.categorie = navParams.get('categorie');   
    this.getFiches(this.categorie);
  }
  getFiches(categorie) {
    this.rest.getFiches(categorie)
    .then(data => {
      this.fiches = data;
    });
  }
  selectFiche(event,id_fiche) {  
        this.navCtrl.push(RestaurantPage, {
            id_fiche: id_fiche
        });
    }  
  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantsPage');
  }

}
