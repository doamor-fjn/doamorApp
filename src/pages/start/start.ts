import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, } from 'ionic-angular';

// Import do Menu Popover
import { PopoverPerfilPage } from '../popover-perfil/popover-perfil';

// Imports do IonicStorage
import { Storage } from '@ionic/storage';

// Imports do Firebase
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

// Nomeia a página para redirecionamento
@IonicPage({
  name: 'start-page'
})
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

  uid: string;
  task;
  listTask;
  searchQuery: string = '';
  items: string[];



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
        this.getAll();
      })
  }

  
  // Metodo para salvar informação apartir da chave do usuário
  addTask(task: string) {
    var usuarioLogado = this.afAuth.auth.currentUser;
    var userDB = this.db.database.ref('/tasks').child(usuarioLogado.uid);
    userDB.child("task").set(task);
  }

  // Metodo para buscar da base apartir da chave do usuário
  getList(){
    let listDB = this.db.database.ref('/tasks');
    // Tira uma foto do banco no momento atual
    listDB.on('value', (snapshot) =>  {
      const items = snapshot.val();
      if(items) {
        this.listTask = Object.keys(items).map(i => items[i])
      }
    })

  }

  getAll() {
    let listDB = this.db.database.ref('/DadosInstituicao');
    // Tira uma foto do banco no momento atual
    listDB.on('value', (snapshot) =>  {
      const items = snapshot.val();
      if(items) {
        this.listTask = Object.keys(items).map(i => items[i])
      }
    })
    }

  presentPopover(ev: UIEvent) {
    let popover = this.popoverCtrl.create(PopoverPerfilPage);
    popover.present({
      ev: ev
    });
  }


}

