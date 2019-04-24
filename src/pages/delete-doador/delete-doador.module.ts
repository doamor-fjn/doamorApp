import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeleteDoadorPage } from './delete-doador';

@NgModule({
  declarations: [
    DeleteDoadorPage,
  ],
  imports: [
    IonicPageModule.forChild(DeleteDoadorPage),
  ],
})
export class DeleteDoadorPageModule {}
