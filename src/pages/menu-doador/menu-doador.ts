import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Imports do IonicStorage
import { Storage } from '@ionic/storage';

// Imports do Firebase
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

// Nomeia a página para redirecionamento
@IonicPage({
  name: 'menu-doador'
})
@Component({
  selector: 'page-menu-doador',
  templateUrl: 'menu-doador.html',
})
export class MenuDoadorPage {
  uid: string;
  nomeDoador;
  nomeDoadorList;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    //  Declaração para integração com IonicStorage 
    public storage: Storage,
    //  Declaração para integração com Firebase 
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth,
  ) {
  }

  // Metodo para capturar o codigo do chave do usuário
  ionViewDidLoad() {
    this.storage.get('codUser')
      .then((resolve) => {
        this.uid = resolve;
        this.getList();
      })
  }

  // Metodo para buscar da base apartir da chave do usuário
  getList() {
    var nomeTab = this.db.database.ref('DadosDoadores');
    var addClna = nomeTab.child(this.uid);
    // Tira uma foto do banco no momento atual
    addClna.on('value', (snapshot) => {
      const items = snapshot.val();
      this.nomeDoador = items.nomeDoador;
    })

  }
}