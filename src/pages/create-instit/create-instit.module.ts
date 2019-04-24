import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateInstitPage } from './create-instit';

@NgModule({
  declarations: [
    CreateInstitPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateInstitPage),
  ],
})
export class CreateInstitPageModule {}
