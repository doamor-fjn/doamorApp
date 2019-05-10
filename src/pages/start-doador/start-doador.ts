import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the StartDoadorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'start-doador'
})
@Component({
  selector: 'page-start-doador',
  templateUrl: 'start-doador.html',
})
export class StartDoadorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartDoadorPage');
  }

  entrar() {
    this.navCtrl.push(TabsPage);    
  }

}
