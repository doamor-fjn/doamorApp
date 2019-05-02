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
  name: 'create-instit'
})

@Component({
  selector: 'page-create-instit',
  templateUrl: 'create-instit.html',
})
export class CreateInstitPage {

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
      razaoSocial: [null, [Validators.required, Validators.minLength(5)]],
      cnpj: [null, [Validators.required, Validators.minLength(14)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(2)]],
      // Valida se as senhas do cadastro são iguais (ValidateConfirmPassword)      
      passwordConfirm: [null, [Validators.required, Validators.minLength(2), ValidateConfirmPassword]],

    })
  }

    // Metodo para submeter os dados de Email e senha
    submitForm() {
      //  Passagem de parametros
      this.afAuth.auth.createUserWithEmailAndPassword(
        this.registerForm.value.email,
        this.registerForm.value.password)
        //  Quando for sucesso, colocar mensagem "Cadastro realizado com Sucesso"
        .then((response) => {
          // Chama o metodo para adicionar campos na tabela
          this.addDados('razaoSocialInst', this.registerForm.value.razaoSocial);
          this.addDados('cnpjInst', this.registerForm.value.cnpj);
          this.addDados('emailInst', this.registerForm.value.email);
          this.addDadosD('emailInst', this.registerForm.value.email); // Inserir no banco doador
          this.addDadosD('flag', 'I'); // Inserir no banco doador
          this.addDadosD('dataNascDoador', '00/00/0000'); // Inserir no banco doador
          this.addDadosD('sexoDoador', 'N/A'); // Inserir no banco doador
          this.addDados('cepInstit', ' ');
          this.addDados('logrdInstit', ' ');
          this.addDados('logrNroInstit', ' ');
          this.addDados('imgInstit', ' ');
          this.addDados('descInstit', ' ');
          this.addDados('locGeogfInstit', ' ');
          this.addDados('respInstit', ' ');
          // Chama o metodo de pop-up 
          this.presentAlert('Cadastro solicitado com Sucesso', 'Estamos analisando sua solicitação, aguarde o e-mail de confirmação ');
          // Redireciona para a pagina nomeada como 'start-page' no start.ts
          this.navCtrl.setRoot('menu-instit-item');
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
  addDados(nomeCampo: string, valorCampo: string) {
    var usuarioLogado = this.afAuth.auth.currentUser;
    var userDB = this.db.database.ref('/DadosInstituicao').child(usuarioLogado.uid);
    userDB.child(nomeCampo).set(valorCampo);
  }

  addDadosD(nomeCampo: string, valorCampo: string) {
    var usuarioLogado = this.afAuth.auth.currentUser;
    var userDB = this.db.database.ref('/DadosDoadores').child(usuarioLogado.uid);
    userDB.child(nomeCampo).set(valorCampo);
  }
}