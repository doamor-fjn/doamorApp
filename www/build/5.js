webpackJsonp([5],{

/***/ 842:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuInstitPriortPageModule", function() { return MenuInstitPriortPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_instit_priort__ = __webpack_require__(851);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuInstitPriortPageModule = /** @class */ (function () {
    function MenuInstitPriortPageModule() {
    }
    MenuInstitPriortPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__menu_instit_priort__["a" /* MenuInstitPriortPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu_instit_priort__["a" /* MenuInstitPriortPage */]),
            ],
        })
    ], MenuInstitPriortPageModule);
    return MenuInstitPriortPageModule;
}());

//# sourceMappingURL=menu-instit-priort.module.js.map

/***/ }),

/***/ 851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuInstitPriortPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_database__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Imports do Firebase


// Imports do IonicStorage

var MenuInstitPriortPage = /** @class */ (function () {
    function MenuInstitPriortPage(navCtrl, navParams, 
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
            alimentos: [false],
            materialConst: [false],
            eletronico: [false],
            roupas: [false],
            instrMusic: [false],
            brinquedos: [false],
            higienPesl: [false],
            materialEscl: [false],
        });
    }
    // Metodo para submeter os dados de Email e senha
    MenuInstitPriortPage.prototype.submitItens = function () {
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
    };
    // Metodo para pop-up
    MenuInstitPriortPage.prototype.presentAlert = function (title, subtitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subtitle,
            buttons: ['OK']
        });
        alert.present();
    };
    // Metodo para salvar informação apartir da chave do usuário
    MenuInstitPriortPage.prototype.addDados = function (nomeCampo, valorCampo) {
        if (valorCampo == null) {
            valorCampo = false;
        }
        var usuarioLogado = this.afAuth.auth.currentUser;
        var userDB = this.db.database.ref('/ItensRecebidos').child(usuarioLogado.uid);
        userDB.child(nomeCampo).set(valorCampo);
    };
    MenuInstitPriortPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu-instit-priort',template:/*ion-inline-start:"C:\Users\thiago.maimone\Desktop\doamorApp\src\pages\menu-instit-priort\menu-instit-priort.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Donativos Recebiveis</ion-title>\n  </ion-navbar>\n  <h2> Recebe  ____________________________________ Prioridade</h2>\n</ion-header>\n<ion-content padding>\n  <form novalidate [formGroup]="registerForm" (ngSubmit)="submitItens()">\n    <ion-list no-border>\n      <ion-item>\n        <ion-label>\n          Alimentos\n        </ion-label>\n        <ion-checkbox  [(ngModel)]=\'alimentos\' formControlName=\'alimentos\'></ion-checkbox>\n        <ion-icon name="restaurant" item-start></ion-icon>\n          <ion-select placeholder="Nenhuma" >\n            <ion-option value="alta">Alta</ion-option>\n            <ion-option value="media">Média</ion-option>\n            <ion-option value="baixa">Baixa</ion-option>\n          </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>\n          Material de Construção\n        </ion-label>\n        <ion-toggle [(ngModel)]=\'materialConst\' formControlName=\'materialConst\'></ion-toggle>\n        <ion-icon name="construct" item-start></ion-icon>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>\n          Eletrônicos\n        </ion-label>\n        <ion-toggle [(ngModel)]=\'eletronico\' formControlName=\'eletronico\'></ion-toggle>\n        <ion-icon name="desktop" item-start></ion-icon>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>\n          Roupas\n        </ion-label>\n        <ion-toggle [(ngModel)]=\'roupas\' formControlName=\'roupas\'></ion-toggle>\n        <ion-icon name="shirt" item-start></ion-icon>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>\n          Instrumentos Músicais\n        </ion-label>\n        <ion-toggle [(ngModel)]=\'instrMusic\' formControlName=\'instrMusic\'></ion-toggle>\n        <ion-icon name="musical-notes" item-start></ion-icon>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>\n          Brinquedos\n        </ion-label>\n        <ion-toggle [(ngModel)]=\'brinquedos\' formControlName=\'brinquedos\'></ion-toggle>\n        <ion-icon name="football" item-start></ion-icon>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>\n          Higiene Pessoal\n        </ion-label>\n        <ion-toggle [(ngModel)]=\'higienPesl\' formControlName=\'higienPesl\'></ion-toggle>\n        <ion-icon name="switch" item-start></ion-icon>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>\n          Material Escolar\n        </ion-label>\n        <ion-toggle [(ngModel)]=\'materialEscl\' formControlName=\'materialEscl\'></ion-toggle>\n        <ion-icon name="book" item-start></ion-icon>\n      </ion-item>\n    </ion-list>\n    <div padding>\n      <!--Desabilita o botão de cadastrar caso o  formulario registerForm no create-doador.ts não seja atentido-->\n      <button type="submit">Cadastrar</button>\n    </div>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\Users\thiago.maimone\Desktop\doamorApp\src\pages\menu-instit-priort\menu-instit-priort.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], MenuInstitPriortPage);
    return MenuInstitPriortPage;
}());

//# sourceMappingURL=menu-instit-priort.js.map

/***/ })

});
//# sourceMappingURL=5.js.map