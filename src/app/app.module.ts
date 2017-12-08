import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Fcm } from '@ionic-native/fcm';
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
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RestProvider } from '../providers/rest/rest';

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
    HttpClientModule,
    HttpModule,
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
    Fcm,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
