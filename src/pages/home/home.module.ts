import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
  // Exportar para a página  por outros módulos
  exports: [
    HomePage,
  ]  
})
export class HomePageModule {}
