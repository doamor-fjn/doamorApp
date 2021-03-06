import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// Import da Validação de senhas iguais
import { ValidateConfirmPassword } from '../../validators/confirmPassword';

// Imports do Firebase
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

// Imports do IonicStorage
import { Storage } from '@ionic/storage';

// Nomeia a página para redirecionamento
@IonicPage({
  name: 'create-doador'
})
@Component({
  selector: 'page-create-doador',
  templateUrl: 'create-doador.html',
})
export class CreateDoadorPage {
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
      name: [null, [Validators.required, Validators.minLength(5)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(2)]],
      // Valida se as senhas do cadastro são iguais (ValidateConfirmPassword)      
      passwordConfirm: [null, [Validators.required, Validators.minLength(2), ValidateConfirmPassword]],

    })
  }

    // Metodo para submeter os dados de Email e senha
    submitForm() {
      //  Comando utilizado para gerar LOG para parametros de entrada    
      //  console.log(this.registerForm.value)
      //  Passagem de parametros
      this.afAuth.auth.createUserWithEmailAndPassword(
        this.registerForm.value.email,
        this.registerForm.value.password)
        //  Quando for sucesso, colocar mensagem "Cadastro realizado com Sucesso"
        .then((response) => {
          // Chama o metodo para adicionar campos na tabela de Validação de Usuário
          this.addDadosLogin('emailUsuario', this.registerForm.value.email);
          this.addDadosLogin('tipoUsuario', 'D');
          // Chama o metodo para adicionar campos na tabela de Doador
          this.addDadosDoador('nomeDoador', this.registerForm.value.name);
          this.addDadosDoador('emailDoador', this.registerForm.value.email);
          this.addDadosDoador('dataNascDoador', '01/01/1919');
          this.addDadosDoador('sexoDoador', 'N/A');
          // Chama o metodo de pop-up 
          this.presentAlert('Usuário Cadastrado', 'Usuário cadastrado com sucesso!');
          // Salva a chave do usuário do Firebase 
          this.storage.set('codUser', response.user.uid)
            .then(() => {
              // Redireciona para a pagina nomeada como 'start-page' no start.ts
              this.navCtrl.setRoot('start-doador');
            })
        })
      //  Quando for erro
      .catch((error) => {
        switch (error.code) {
          // De Erro no cadastro do usuário
          case 'auth/email-already-in-use':
            // Chama o metodo de pop-up 
            this.presentAlert('Erro', 'E-mail já cadastrado!')
            break;
          // Desconhecido
          default:
            // Chama o metodo de pop-up 
            this.presentAlert('Erro Insert', 'Erro desconhecido, por favor procurar o suporte')
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
  
  // Metodo para salvar informação apartir da chave do usuário
  addDadosDoador(nomeCampo: string, valorCampo: string) {
    var usuarioLogado = this.afAuth.auth.currentUser;
    var userDB = this.db.database.ref('/DadosDoadores').child(usuarioLogado.uid);
    userDB.child(nomeCampo).set(valorCampo);
  }
  // Metodo para salvar informação apartir da chave do usuário
  addDadosLogin(nomeCampo: string, valorCampo: string) {
    var usuarioLogado = this.afAuth.auth.currentUser;
    var userDB = this.db.database.ref('/DadosLogin').child(usuarioLogado.uid);
    userDB.child(nomeCampo).set(valorCampo);
  }
}