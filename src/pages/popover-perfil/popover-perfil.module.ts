import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopoverPerfilPage } from './popover-perfil';

@NgModule({
  declarations: [
    PopoverPerfilPage,
  ],
  imports: [
    IonicPageModule.forChild(PopoverPerfilPage),
  ],
  entryComponents: [
    PopoverPerfilPage,
  ]
})
export class PopoverPerfilPageModule {}
