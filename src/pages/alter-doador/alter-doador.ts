import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Imports do IonicStorage
import { Storage } from '@ionic/storage';

// Imports do Firebase
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';


@IonicPage(
  { name: 'alter-doador' }
)
@Component({
  selector: 'page-alter-doador',
  templateUrl: 'alter-doador.html',
})
export class AlterDoadorPage {

  uid: string;
  updateForm: FormGroup;
  dataNascDoador : Date;
  emailDoador;
  nomeDoador;
  sexoDoador;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    //  Declaração para integração com IonicStorage 
    public storage: Storage,
    //  Declaração para integração com Firebase 
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth,
    //  Declaração para Pop-up de Alertas 
    public alertCtrl: AlertController,
    //  Criação da validação de obrigatoriedade do formulario de cadastro 
    public formbuild: FormBuilder,
  ) {
    this.updateForm = this.formbuild.group({
      nomeDoadorForm: [null, [Validators.required, Validators.minLength(5)]],
      dataNascDoadorForm: [null, [Validators.required]],
      sexoDoadorForm: [null, [Validators.required, Validators.minLength(1)]],
    })
  }

  // Metodo para capturar o codigo do chave do usuário
  ionViewDidLoad() {
    this.storage.get('codUser')
      .then((resolve) => {
        this.uid = resolve;
        this.getList()
      })
  }

  // Metodo para buscar da base apartir da chave do usuário
  getList() {
    var nomeTab = this.db.database.ref('DadosDoadores');
    var addClna = nomeTab.child(this.uid);
    // Tira uma foto do banco no momento atual
    addClna.on('value', (snapshot) => {
      const items = snapshot.val();
      if (items == null) {
        this.navCtrl.setRoot('home');
      } else {
        this.dataNascDoador = items.dataNascDoador;
        this.emailDoador = items.emailDoador;
        this.nomeDoador = items.nomeDoador;
        this.sexoDoador = items.sexoDoador;
      }
    })
  }

  // Metodo para atualizar da base apartir da chave do usuário
  alterarDoador() {

    if (!this.updateForm.value.nomeDoadorForm) {
      console.log()
    } else {
      this.updDados('nomeDoador', this.updateForm.value.nomeDoadorForm);
    }

    if (!this.updateForm.value.dataNascDoadorForm) {
      console.log()
    } else {
      this.updDados('dataNascDoador', this.updateForm.value.dataNascDoadorForm);
    }

    if (!this.updateForm.value.sexoDoadorForm) {
      console.log()
    } else {
      this.updDados('sexoDoador', this.updateForm.value.sexoDoadorForm);
    }
    // Chama o metodo de pop-up 
    this.presentAlert('Usuário Alterado', 'Alterações realizadas com sucesso!');
  }
  
  // Metodo para pop-up
  presentAlert(title: string, subtitle: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subtitle,
      buttons: ['OK']
    });
    alert.present();
  }
  
  // Metodo para salvar informação apartir da chave do usuário
  updDados(nomeCampo: string, valorCampo: string) {
    var usuarioLogado = this.afAuth.auth.currentUser;
    var userDB = this.db.database.ref('/DadosDoadores').child(usuarioLogado.uid);
    userDB.child(nomeCampo).set(valorCampo);
  }
  
  // Metodo para remover chave do usuário
  removeDoador() {
    var nomeTab = this.db.database.ref('DadosDoadores');
    var removeClna = nomeTab.child(this.uid);
    // Tira uma foto do banco no momento atual
    this.db.object(removeClna).remove()
    .then(function () {
      console.log("Remove succeeded.")
      // Chama o metodo de pop-up 
      this.presentAlert('Usuário Alterado', 'Alterações realizadas com sucesso!');
    })
    .catch(function (error) {
      console.log("Remove failed: " + error.message)
    });
    
  }
}
