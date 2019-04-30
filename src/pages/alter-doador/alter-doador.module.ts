import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlterDoadorPage } from './alter-doador';

// Imports do BrMasker - Mascara no input
//import { BrMaskerModule } from 'br-mask';
//import {NgxMaskModule} from 'ngx-mask';


@NgModule({
  declarations: [
    AlterDoadorPage,
  ],
  imports: [
    IonicPageModule.forChild(AlterDoadorPage),
    //BrMaskerModule,
    //NgxMaskModule.forRoot()
  ],
  exports: [
    AlterDoadorPage,
  ]
})

export class AlterDoadorPageModule {}
