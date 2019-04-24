import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerfilDoadorPage } from './perfil-doador';

@NgModule({
  declarations: [
    PerfilDoadorPage,
  ],
  imports: [
    IonicPageModule.forChild(PerfilDoadorPage),
  ],
})
export class PerfilDoadorPageModule {}
