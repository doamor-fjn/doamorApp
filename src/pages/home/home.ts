import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonicPage } from 'ionic-angular';

// Imports do Firebase
import { AngularFireAuth } from '@angular/fire/auth';

// Imports do IonicStorage
import { Storage } from '@ionic/storage';

// Nomeia a página para redirecionamento
@IonicPage({
  name: 'home'
})

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  loginForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    //  Declaração para integração com IonicStorage 
    public storage: Storage,
    //  Declaração para integração com Firebase 
    public afAuth: AngularFireAuth,
    //  Declaração para Pop-up de Alertas 
    public alertCtrl: AlertController,
    //  Criação da validação de obrigatoriedade do formulario de login 
    public formbuild: FormBuilder
  ) {
    this.loginForm = this.formbuild.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(2)]]
    })

  }

  // Metodo para submeter os dados de Email e senha
  submitLogin() {
    //  Passagem de parametros
    this.afAuth.auth.signInWithEmailAndPassword(
      this.loginForm.value.email,
      this.loginForm.value.password)
      //  Quando for sucesso, colocar a mensagem "Usuário Autenticado"
      .then((response) => {
        // Salva a chave do usuário do Firebase 
        this.storage.set('codUser', response.user.uid)
          .then(() => {
            // Redireciona para a pagina nomeada como 'menu-doador' no start.ts
            this.navCtrl.setRoot('menu-doador');
          })
      })
      //  Quando for erro
      .catch((error) => {
        switch (error.code) {
          // De Email Inválido
          case 'auth/invalid-email':
            // Chama o metodo de pop-up 
            this.presentAlert('Erro', 'Email Inválido!')
            break;
          // De Usuário desabilitado
          case 'auth/user-disabled':
            // Chama o metodo de pop-up 
            this.presentAlert('Erro', 'Usuário desabilitado!')
            break;
          // De Senha Incorreta
          case 'auth/wrong-password':
            // Chama o metodo de pop-up 
            this.presentAlert('Erro', 'Senha Incorreta, digite novamente!')
            // Limpar campo de senha para digitar novamente
            this.loginForm.controls['password'].setValue(null)
            break;
          // De Usuário não cadastrado
          case 'auth/user-not-found':
            // Chama o metodo de pop-up 
            this.presentAlert('Erro', 'Usuário não cadastrado!')
            break;
          // Desconhecido
          default:
            // Chama o metodo de pop-up 
            this.presentAlert('Erro', 'Erro desconhecido, por favor procurar o suporte')
            break;
        }
      })
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
}