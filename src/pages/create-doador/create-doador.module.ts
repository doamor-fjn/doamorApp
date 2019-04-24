import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateDoadorPage } from './create-doador';

@NgModule({
  declarations: [
    CreateDoadorPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateDoadorPage),
  ],
})
export class CreateDoadorPageModule {}
