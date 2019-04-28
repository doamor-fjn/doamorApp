import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SobrePage } from './sobre';

@NgModule({
  declarations: [
    SobrePage,
  ],
  imports: [
    IonicPageModule.forChild(SobrePage),
  ],
  exports: [
    // Exportar para ser visto por outros módulos
    SobrePage,
  ]
})
export class SobrePageModule {}
