import { TabsPage } from './../pages/tabs/tabs';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Imports do IonicStorage
import { Storage } from '@ionic/storage';

// Imports do Firebase
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';


// Imports do Pagina Menu do Doador
//import { MenuDoadorPage } from '../pages/menu-doador/menu-doador';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any ;
  uid: string;
  emailUsuario;
  tipoUsuario;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    //  Declaração para integração com IonicStorage 
    public storage: Storage,
    //  Declaração para integração com Firebase 
    public db: AngularFireDatabase,
    //  Declaração para integração com Firebase 
    public afAuth: AngularFireAuth,
     ) {
    platform.ready().then(() => {
      // Caso tenha o usuario logado ir para o Menu
      this.storage.get('codUser').then((validador) => {
        this.getList();
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

  getList() {
    var nomeTab = this.db.database.ref('DadosLogin');
    var addClna = nomeTab.child(this.uid);
    // Tira uma foto do banco no momento atual
    addClna.on('value', (snapshot) => {
      const items = snapshot.val();
      this.tipoUsuario = items.tipoUsuario;
      this.emailUsuario = items.emailUsuario;
    })
}
}

