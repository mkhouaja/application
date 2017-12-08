import { Component,ElementRef,ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
/**
 * Generated class for the AdressePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google; 
@IonicPage()
@Component({
  selector: 'page-adresse',
  templateUrl: 'adresse.html',
})
export class AdressePage {
  @ViewChild('map') mapElement: ElementRef;
  adresse: any;
  map: any;
  marqueur: any;
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
    
    let pos = { lat: parseFloat(adresse.latitude), lng: parseFloat(adresse.longitude)}
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
        zoom: 16,
        center: pos,
        mapTypeId: 'roadmap'
    });
    this.map.setCenter(pos);
         let optionsMarqueur = {
	           position: this.map.getCenter(),
	           map: this.map
         };
    this.marqueur = new google.maps.Marker(optionsMarqueur);
       
}
getAdresse(adresse) {
    this.rest.getAdresse(adresse)
    .then(data => {
      this.adresse = data;
      this.initializeMap(this.adresse);
      
    });
  }
}
