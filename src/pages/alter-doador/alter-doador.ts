import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Imports do IonicStorage
import { Storage } from '@ionic/storage';

// Imports do Firebase
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

@IonicPage(
  {name: 'alter-doador'}
)
@Component({
  selector: 'page-alter-doador',
  templateUrl: 'alter-doador.html',
})
export class AlterDoadorPage {

  uid: string;
  dataNascDoador;
  emailDoador;
  nomeDoador;
  sexoDoador;
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
        this.alterarDoador();
      })
  }

  // Metodo para buscar da base apartir da chave do usuário
  getList() {
    var nomeTab = this.db.database.ref('DadosDoadores');
    var addClna = nomeTab.child(this.uid);
    // Tira uma foto do banco no momento atual
    addClna.on('value', (snapshot) => {
      const items = snapshot.val();
      this.dataNascDoador = items.dataNascDoador;
      this.emailDoador = items.emailDoador;
      this.nomeDoador = items.nomeDoador;
      this.sexoDoador = items.sexoDoador;
    })
  }

  // Metodo para atualizar da base apartir da chave do usuário
  alterarDoador() {
    this.navCtrl.setRoot('menu-doador');
 /*    var nomeTab = this.db.database.ref('DadosDoadores');
    var removeClna = nomeTab.child(this.uid);
    // Tira uma foto do banco no momento atual
    this.db.object(removeClna).update()
      .then(function () {
        console.log("Remove succeeded.")
      })
      .catch(function (error) {
        console.log("Remove failed: " + error.message)
      }); */

  }
}

