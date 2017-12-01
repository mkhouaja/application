import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class RestProvider {
  categorie: string;
  id_fiche: string;
  constructor(public http: HttpClient) {  
   
    console.log('Hello RestProvider Provider');           
  }
  
  getCategories() {
    return new Promise(resolve => {
    this.http.get('http://127.0.0.1:8000/api/categories-list').subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
}
  getFiches(categorie: any) {
   var url ='http://127.0.0.1:8000/api/fiches-list/'+categorie;
    return new Promise(resolve => {
    this.http.get(url).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
  }
  
  getFiche(id_fiche: any) {
   var url ='http://127.0.0.1:8000/api/fiche/'+id_fiche;
    return new Promise(resolve => {
    this.http.get(url).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
}
getCommentaires(id_fiche: any) {
   var url ='http://127.0.0.1:8000/api/commentaires/'+id_fiche;
    return new Promise(resolve => {
    this.http.get(url).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
}
}
