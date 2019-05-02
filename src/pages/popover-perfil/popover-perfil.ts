import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// Imports do IonicStorage
import { Storage } from '@ionic/storage';

/**
 * Generated class for the PopoverPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'popover-perfil',
  template: `
  <ion-list style="margin: -1px 0;">
      <button ion-item [navPush]="'alter-doador'">Editar Perfil</button>
      <button ion-item (click)="logout()" [navPush]="'home'">Sair</button>
  </ion-list>
  `,
})
export class PopoverPerfilPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    //  Declaração para integração com IonicStorage 
    public storage: Storage,) {

  }

  logout() {

    this.storage.remove('codUser');
  }
  
}