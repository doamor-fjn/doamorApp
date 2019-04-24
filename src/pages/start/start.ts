import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

}

