import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

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
      <button ion-item [navPush]="'alter-doador'" (click)="close()">Editar Perfil</button>
      <button ion-item (click)="logout()" [navPush]="'home'">Sair</button>
  </ion-list>
  `,
})
export class PopoverPerfilPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    //  Declaração para integração com IonicStorage 
    public storage: Storage,
    public viewCtrl: ViewController,    
    ) {

  }

  logout() {
    this.storage.remove('codUser');
  }

  close() {
    this.viewCtrl.dismiss();
  }

}