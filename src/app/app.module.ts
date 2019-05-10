import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Import Pages
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PerfilDoadorPage } from '../pages/perfil-doador/perfil-doador';
import { StartPage } from '../pages/start/start';
import { SobrePage } from '../pages/sobre/sobre';
import { PopoverPerfilPage } from '../pages/popover-perfil/popover-perfil';
import { MenuDoadorPage } from '../pages/menu-doador/menu-doador';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Imports Firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment'; 
import { AngularFireAuth } from '@angular/fire/auth';

// Imports IonicStorage
import { IonicStorageModule } from '@ionic/storage';

// Imports do Firebase
import { AngularFireDatabase } from '@angular/fire/database';
import { MenuDoadorPageModule } from '../pages/menu-doador/menu-doador.module';
import { HomePageModule } from '../pages/home/home.module';
import { PerfilDoadorPageModule } from './../pages/perfil-doador/perfil-doador.module';
import { MenuInstitItemPage } from '../pages/menu-instit-item/menu-instit-item';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    //HomePage,
    TabsPage,
    PopoverPerfilPage,
    //PerfilDoadorPage,
    StartPage,
    SobrePage,
    MenuInstitItemPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    IonicModule.forRoot(MyApp),
    // Import IonicStorage
    IonicStorageModule.forRoot(),
    // Import MenuDoadorModulo
    MenuDoadorPageModule,
    HomePageModule,
    PerfilDoadorPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    // Import MenuDoadorPage
    MenuDoadorPage,
    PopoverPerfilPage,
    PerfilDoadorPage,
    StartPage,
    SobrePage,
    MenuInstitItemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    //  Provider integração com Firebase 
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
