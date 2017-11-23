import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMaps } from '@ionic-native/google-maps';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { WelcomePage } from '../pages/welcome/welcome';
import { ComptePage } from '../pages/compte/compte';
import { AccueilPage } from '../pages/accueil/accueil';
import { RestaurantsPage } from '../pages/restaurants/restaurants';
import { RestaurantPage } from '../pages/restaurant/restaurant';
import { CommentairesPage } from '../pages/commentaires/commentaires';
import { AdressePage } from '../pages/adresse/adresse';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    WelcomePage,
    RestaurantsPage,
    RestaurantPage,
    AdressePage,
    CommentairesPage,
    ComptePage,
    AccueilPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    WelcomePage,
    ComptePage,
    RestaurantsPage,
    RestaurantPage,
    AdressePage,
    CommentairesPage,
    AccueilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
