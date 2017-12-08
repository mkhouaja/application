import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
/**
 * Generated class for the AdressePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adresse',
  templateUrl: 'adresse.html',
})
export class AdressePage {
  adresse: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public rest: RestProvider) {   
  }
  closeModal() {
        this.navCtrl.pop();
    }
  ionViewDidLoad() {
     this.getAdresse(this.navParams.get('id_adresse'));
     
     console.log('ionViewDidLoad AdressePage');
  }
  initializeMap(adresse) { 
    
    let locationOptions = {timeout: 20000, enableHighAccuracy: true};
    navigator.geolocation.getCurrentPosition(
 
        (position) => {
 
            let options = {
              center: new google.maps.LatLng(adresse.latitude, adresse.longitude),
              zoom: 16,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            }
 
           this.map = new google.maps.Map(document.getElementById("map_canvas"), options);
           let optionsMarqueur = {
	               position: this.map.getCenter(),
	               map: this.map
            };
            this.marqueur = new google.maps.Marker(optionsMarqueur);
        },
 
        (error) => {
            console.log(error);
        }, locationOptions
    );
}
getAdresse(adresse) {
    this.rest.getAdresse(adresse)
    .then(data => {
      this.adresse = data;
      this.initializeMap(this.adresse);
      
    });
  }

}
