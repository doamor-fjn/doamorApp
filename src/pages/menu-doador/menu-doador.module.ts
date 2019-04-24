import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuDoadorPage } from './menu-doador';

@NgModule({
  declarations: [
    MenuDoadorPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuDoadorPage),
  ],
  // Exportar para a página  por outros módulos
  exports: [
    MenuDoadorPage,
  ]
})
export class MenuDoadorPageModule {}
