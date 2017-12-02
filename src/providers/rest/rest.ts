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
getCategorie(categorie: any) {
   var url ='http://127.0.0.1:8000/api/categorie/'+categorie;
    return new Promise(resolve => {
    this.http.get(url).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
}
addCommentaire(data) {
  return new Promise((resolve, reject) => {
    this.http.post('http://127.0.0.1:8000/api/commentaire/ajout', JSON.stringify(data))
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}
addNote(data) {
  return new Promise((resolve, reject) => {
    this.http.post('http://127.0.0.1:8000/api/note/ajout', JSON.stringify(data))
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}
addUtilisateur(data) {
  return new Promise((resolve, reject) => {
    this.http.post('http://127.0.0.1:8000/api/utilisateur/ajout', JSON.stringify(data))
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}
login(data) {
  return new Promise((resolve, reject) => {
    this.http.post('http://127.0.0.1:8000/api/utilisateur/login', JSON.stringify(data))
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}
}
