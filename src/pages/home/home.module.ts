import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';

// Imports do BrMasker - Mascara no input
import { BrMaskerModule } from 'br-mask';
//import { NgxMaskIonicModule } from 'ngx-mask-ionic'

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    BrMaskerModule,
    //NgxMaskIonicModule,
  ],
  // Exportar para a página  por outros módulos
  exports: [
    HomePage,
  ]  
})
export class HomePageModule {}
