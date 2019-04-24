webpackJsonp([0],{

/***/ 840:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateInstitPageModule", function() { return CreateInstitPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_instit__ = __webpack_require__(850);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateInstitPageModule = /** @class */ (function () {
    function CreateInstitPageModule() {
    }
    CreateInstitPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__create_instit__["a" /* CreateInstitPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_instit__["a" /* CreateInstitPage */]),
            ],
        })
    ], CreateInstitPageModule);
    return CreateInstitPageModule;
}());

//# sourceMappingURL=create-instit.module.js.map

/***/ }),

/***/ 847:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ValidateConfirmPassword;
// Valida se as senhas do cadastro são iguais
function ValidateConfirmPassword(control) {
    if (!control.root.value) {
        return null;
    }
    if (control.value === control.root.value.password) {
        return null;
    }
    else {
        return { validConfirmPassword: true };
    }
}
//# sourceMappingURL=confirmPassword.js.map

/***/ }),

/***/ 850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateInstitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_confirmPassword__ = __webpack_require__(847);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_fire_database__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Import da Validação de senhas iguais

// Imports do Firebase


// Imports do IonicStorage

// Nomeia a página para redirecionamento
var CreateInstitPage = /** @class */ (function () {
    function CreateInstitPage(navCtrl, navParams, 
        //  Declaração para integração com IonicStorage 
        storage, 
        //  Declaração para integração com Firebase 
        db, 
        //  Declaração para integração com Firebase 
        afAuth, 
        //  Declaração para Pop-up de Alertas 
        alertCtrl, 
        //  Criação da validação de obrigatoriedade do formulario de cadastro 
        formbuild) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.db = db;
        this.afAuth = afAuth;
        this.alertCtrl = alertCtrl;
        this.formbuild = formbuild;
        this.registerForm = this.formbuild.group({
            razaoSocial: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5)]],
            cnpj: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(14)]],
            email: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email]],
            password: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2)]],
            // Valida se as senhas do cadastro são iguais (ValidateConfirmPassword)      
            passwordConfirm: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_3__validators_confirmPassword__["a" /* ValidateConfirmPassword */]]],
        });
    }
    // Metodo para submeter os dados de Email e senha
    CreateInstitPage.prototype.submitForm = function () {
        var _this = this;
        //  Passagem de parametros
        this.afAuth.auth.createUserWithEmailAndPassword(this.registerForm.value.email, this.registerForm.value.password)
            .then(function (response) {
            // Chama o metodo para adicionar campos na tabela
            _this.addDados('razaoSocialInst', _this.registerForm.value.razaoSocial);
            _this.addDados('cnpjInst', _this.registerForm.value.cnpj);
            _this.addDados('emailInst', _this.registerForm.value.email);
            _this.addDados('cepInstit', ' ');
            _this.addDados('logrdInstit', ' ');
            _this.addDados('logrNroInstit', ' ');
            _this.addDados('imgInstit', ' ');
            _this.addDados('descInstit', ' ');
            _this.addDados('locGeogfInstit', ' ');
            _this.addDados('respInstit', ' ');
            // Chama o metodo de pop-up 
            _this.presentAlert('Cadastro solicitado com Sucesso', 'Estamos analisando sua solicitação, aguarde o e-mail de confirmação ');
            // Redireciona para a pagina nomeada como 'start-page' no start.ts
            _this.navCtrl.setRoot('menu-instit-item');
        })
            .catch(function (error) {
            switch (error.code) {
                // De Erro no cadastro do usuário
                case 'auth/email-already-in-use':
                    // Chama o metodo de pop-up 
                    _this.presentAlert('Erro', 'E-mail já cadastrado!');
                    break;
                // Desconhecido
                default:
                    // Chama o metodo de pop-up 
                    _this.presentAlert('Erro Insert', 'Erro desconhecido, por favor procurar o suporte');
                    break;
            }
        });
    };
    // Metodo para pop-up
    CreateInstitPage.prototype.presentAlert = function (title, subtitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subtitle,
            buttons: ['OK']
        });
        alert.present();
    };
    // Metodo para salvar informação apartir da chave do usuário
    CreateInstitPage.prototype.addDados = function (nomeCampo, valorCampo) {
        var usuarioLogado = this.afAuth.auth.currentUser;
        var userDB = this.db.database.ref('/DadosInstituicao').child(usuarioLogado.uid);
        userDB.child(nomeCampo).set(valorCampo);
    };
    CreateInstitPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-instit',template:/*ion-inline-start:"C:\Users\Usuario\Documents\BRANDON\workspaces\ionic\doamorApp\src\pages\create-instit\create-instit.html"*/'<!-- saved from url=(0142)https://trello-attachments.s3.amazonaws.com/5c9bf714a41103074a2b9e5a/5ca93ce263ec933a1ebafcb8/18915d885efc5ee9756acdcba80574e2/register-i.html -->\n<html>\n\n<head>\n  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\n</head>\n\n<body>\n  <ion-content class="bgLoginRegister" padding="">\n    <ion-grid style="padding-top: 5em; padding-bottom: 2.5em;">\n      <ion-row>\n        <form novalidate [formGroup]="registerForm" (ngSubmit)="submitForm()">\n          <ion-col col-1=""></ion-col>\n          <ion-col col-10="" style="padding-bottom: 2.5em;">\n            <img src="../../assets/imgs/logo2-branco.png">\n          </ion-col>\n          <ion-col col-1=""></ion-col>\n\n          <ion-col col-12="" text-center="">\n            <h4 style="color: #fff;">Cadastro de Instituição</h4>\n          </ion-col>\n\n          <ion-col col-1=""></ion-col>\n          <ion-col col-10="">\n            <ion-item class="input-login">\n              <!--Nome dado na validação do formulário (formControlName="razaoSocial") nome dado no create-instit.ts da página  -->\n              <ion-input type="text" placeholder="razão social" formControlName="razaoSocial"></ion-input>\n              <ion-icon name="ios-contacts" class="icon-login" item-left=""></ion-icon>\n            </ion-item>\n          </ion-col>\n          <ion-col col-1=""></ion-col>\n\n          <ion-col col-1=""></ion-col>\n          <ion-col col-10="">\n            <ion-item class="input-login">\n              <!--Nome dado na validação do formulário (formControlName="email") nome dado no create-instit.ts da página  -->\n              <ion-input type="text" placeholder="cnpj" formControlName="cnpj"></ion-input>\n              <ion-icon name="ios-paper" class="icon-login" item-left=""></ion-icon>\n            </ion-item>\n          </ion-col>\n          <ion-col col-1=""></ion-col>\n\n          <ion-col col-1=""></ion-col>\n          <ion-col col-10="">\n            <ion-item class="input-login">\n              <!--Nome dado na validação do formulário (formControlName="email") nome dado no create-instit.ts da página  -->\n              <ion-input type="email" placeholder="nome@email.com" formControlName="email"></ion-input>\n              <ion-icon name="ios-mail" class="icon-login" item-left=""></ion-icon>\n            </ion-item>\n          </ion-col>\n          <ion-col col-1=""></ion-col>\n\n          <ion-col col-1=""></ion-col>\n          <ion-col col-10="">\n            <ion-item class="input-login">\n              <!--Nome dado na validação do formulário (formControlName="password") nome dado no create-instit.ts da página  -->\n              <ion-input type="password" placeholder="senha" formControlName="password"></ion-input>\n              <ion-icon name="ios-key" item-left="" class="icon-login"></ion-icon>\n            </ion-item>\n          </ion-col>\n          <ion-col col-1=""></ion-col>\n\n          <ion-col col-1=""></ion-col>\n          <ion-col col-10="">\n            <ion-item class="input-login">\n              <!--Nome dado na validação do formulário (formControlName="passwordConfirm") nome dado no create-doador.ts da página  -->\n              <ion-input type="password" placeholder="confirmar senha" formControlName="passwordConfirm"></ion-input>\n              <ion-icon name="ios-key" item-left="" class="icon-login"></ion-icon>\n            </ion-item>\n          </ion-col>\n          <ion-col col-1=""></ion-col>\n\n          <ion-col col-1=""></ion-col>\n          <ion-col col-10="">\n            <button ion-button [disabled]="registerForm.invalid" class="btn btn-gradient-primary" full=""\n              round="">Cadastrar</button>\n          </ion-col>\n          <ion-col col-1=""></ion-col>\n\n          <ion-col col-1=""></ion-col>\n          <ion-col col-10="">\n            <button ion-button="" color="light" round="" full="" class="btn btn-sign-in"\n              [navPush]="\'home\'">Voltar</button>\n          </ion-col>\n          <ion-col col-1=""></ion-col>\n        </form>\n      </ion-row>\n    </ion-grid>\n\n  </ion-content>\n  <object id="__symantecPKIClientMessenger" data-supports-flavor-configuration="true" data-extension-version="0.5.0.109"\n    style="display: none;"></object><span id="__symantecPKIClientDetector" style="display: none;">__PRESENT</span>\n</body>\n\n</html>'/*ion-inline-end:"C:\Users\Usuario\Documents\BRANDON\workspaces\ionic\doamorApp\src\pages\create-instit\create-instit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], CreateInstitPage);
    return CreateInstitPage;
}());

//# sourceMappingURL=create-instit.js.map

/***/ })

});
//# sourceMappingURL=0.js.map