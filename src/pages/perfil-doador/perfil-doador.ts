import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController,  } from 'ionic-angular';

import { PopoverPerfilPage } from '../popover-perfil/popover-perfil';

// Imports do IonicStorage
import { Storage } from '@ionic/storage';

// Imports do Firebase
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

// Nomeia a página para redirecionamento
@IonicPage({
  name: 'perfil-doador',
})


@Component({
  selector: 'page-perfil-doador',
  templateUrl: 'perfil-doador.html',  
})

export class PerfilDoadorPage {

  @ViewChild('popoverContent', {read: ElementRef}) content: ElementRef;
  @ViewChild('popoverText', {read: ElementRef}) text: ElementRef;


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
    // Declaração para o Menu Popover
    private popoverCtrl: PopoverController
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
      this.dataNascDoador = items.dataNascDoador;
      this.emailDoador = items.emailDoador;
      this.nomeDoador = items.nomeDoador;
      this.sexoDoador = items.sexoDoador;
    })

  }

  // Metodo para remover chave do usuário
  removeDoador() {
    this.navCtrl.setRoot('menu-doador');
    var nomeTab = this.db.database.ref('DadosDoadores');
    var removeClna = nomeTab.child(this.uid);
    // Tira uma foto do banco no momento atual
    this.db.object(removeClna).remove()
      .then(function () {
        console.log("Remove succeeded.")
      })
      .catch(function (error) {
        console.log("Remove failed: " + error.message)
      });

  }

  presentPopover(ev: UIEvent) {
    let popover = this.popoverCtrl.create(PopoverPerfilPage);
    popover.present({
      ev: ev
    });
  }

  logout() {
    this.storage.remove('codUser');
    this.navCtrl.setRoot('home');
  }

}

