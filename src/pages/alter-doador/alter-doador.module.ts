import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlterDoadorPage } from './alter-doador';

@NgModule({
  declarations: [
    AlterDoadorPage,
  ],
  imports: [
    IonicPageModule.forChild(AlterDoadorPage),
  ],
  exports: [
    AlterDoadorPage,
  ]
})

export class AlterDoadorPageModule {}
