import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';

// Imports do Firebase
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

// Imports do IonicStorage
import { Storage } from '@ionic/storage';

// Nomeia a página para redirecionamento
@IonicPage({
  name: 'menu-instit-item'
})

@Component({
  selector: 'page-menu-instit-item',
  templateUrl: 'menu-instit-item.html',
})
export class MenuInstitItemPage {

  uid: string;
  nomeDoador;
  registerForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    //  Declaração para integração com IonicStorage 
    public storage: Storage,
    //  Declaração para integração com Firebase 
    public db: AngularFireDatabase,
    //  Declaração para integração com Firebase 
    public afAuth: AngularFireAuth,
    //  Declaração para Pop-up de Alertas 
    public alertCtrl: AlertController,
    //  Criação da validação de obrigatoriedade do formulario de cadastro 
    public formbuild: FormBuilder
  ) {
    this.registerForm = this.formbuild.group({
      alimentos: [false],
      materialConst: [false],
      eletronico: [false],
      roupas: [false],
      instrMusic: [false],
      brinquedos: [false],
      higienPesl: [false],
      materialEscl: [false],

    })
  }

  // Metodo para submeter os dados de Email e senha
  submitItens() {
    // Chama o metodo para adicionar campos na tabela
    this.addDados('alimentos', this.registerForm.value.alimentos);
    this.addDados('materialConst', this.registerForm.value.materialConst);
    this.addDados('eletronico', this.registerForm.value.eletronico);
    this.addDados('roupas', this.registerForm.value.roupas);
    this.addDados('instrMusic', this.registerForm.value.instrMusic);
    this.addDados('brinquedos', this.registerForm.value.brinquedos);
    this.addDados('higienPesl', this.registerForm.value.higienPesl);
    this.addDados('materialEscl', this.registerForm.value.materialEscl);
    // Chama o metodo de pop-up 
    this.presentAlert('Donativos selecionados com Sucesso', 'Por favor priorizar os itens selecionados');
    // Redireciona para a pagina nomeada como 'start-page' no start.ts
    this.navCtrl.setRoot('menu-doador');
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
  addDados(nomeCampo: string, valorCampo: boolean) {
    if (valorCampo == null) {
      valorCampo = false
    }
    var usuarioLogado = this.afAuth.auth.currentUser;
    var userDB = this.db.database.ref('/ItensRecebidos').child(usuarioLogado.uid);
    userDB.child(nomeCampo).set(valorCampo);
  }
}