import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


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
      <button ion-item [navPush]="'home'">Sair</button>
  </ion-list>
  `,
})
export class PopoverPerfilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ngOnInit() {
    if (this.navParams.data) {
      this.contentEle = this.navParams.data.contentEle;
      this.textEle = this.navParams.data.textEle;
    }
  }
}