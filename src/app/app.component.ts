import { TabsPage } from './../pages/tabs/tabs';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Imports do IonicStorage
import { Storage } from '@ionic/storage';

// Imports do Pagina Menu do Doador
//import { MenuDoadorPage } from '../pages/menu-doador/menu-doador';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any ;
  

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private storage: Storage
    ) {
    platform.ready().then(() => {
      // Caso tenha o usuario logado ir para o Menu
      this.storage.get('codUser').then((validador) => {
        if(validador){
          this.rootPage = TabsPage
        } else {
          // Caso tenha o usuario não ir para o Home
          this.rootPage = HomePage
        }
      })
      // Caso tenha o usuario não ir para o Home
      .catch(() => {
        this.rootPage = HomePage;
      })
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
