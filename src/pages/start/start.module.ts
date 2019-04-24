import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StartPage } from './start';

@NgModule({
  declarations: [
    StartPage,
  ],
  imports: [
    IonicPageModule.forChild(StartPage),
  ],
  exports: [
    // Exportar para ser visto por outros módulos
    StartPage,
  ]
})
export class StartPageModule {}
