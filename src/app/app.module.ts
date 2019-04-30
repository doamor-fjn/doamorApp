import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

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
import { MenuDoadorPage } from '../pages/menu-doador/menu-doador';
import { HomePageModule } from '../pages/home/home.module';
import { PopoverPerfilPage } from '../pages/popover-perfil/popover-perfil';

// Imports do BrMasker - Mascara no input
//import { BrMaskerModule } from 'br-mask';
//import { NgxMaskIonicModule } from 'ngx-mask-ionic';
//import { BrMaskerModule } from 'brmasker-ionic-3';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
   // HomePage,
    TabsPage,
    PopoverPerfilPage
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
    // Imports do BrMasker - Mascara no input
    //BrMaskerModule,
    //NgxMaskIonicModule.forRoot(),
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
    PopoverPerfilPage
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
