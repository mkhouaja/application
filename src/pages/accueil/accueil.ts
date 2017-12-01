import { Component, ViewChild } from '@angular/core';
import { Nav} from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComptePage } from '../compte/compte';
import { RestaurantsPage } from '../restaurants/restaurants';
import { RestProvider } from '../../providers/rest/rest';
/**
 * Generated class for the AccueilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',
})
export class AccueilPage {
  
  
  
  restaurantsPage = RestaurantsPage;
  @ViewChild(Nav) nav: Nav;

  pages: Array<{title: string, component: any}>;
  categories: any;
  data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestProvider) {
    this.getCategories();
    this.pages = [
      { title: 'Compte', component: ComptePage }
    ];
  }
  
  getCategories() {
    this.rest.getCategories()
    .then(data => {
      this.categories = data;
    });
  }
  selectFiches(event, categorie) {
        this.navCtrl.push(RestaurantsPage, {
            categorie: categorie
        });
    }    
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccueilPage');
  }

}
