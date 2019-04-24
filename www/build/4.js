webpackJsonp([4],{

/***/ 842:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilDoadorPageModule", function() { return PerfilDoadorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perfil_doador__ = __webpack_require__(852);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PerfilDoadorPageModule = /** @class */ (function () {
    function PerfilDoadorPageModule() {
    }
    PerfilDoadorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__perfil_doador__["a" /* PerfilDoadorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__perfil_doador__["a" /* PerfilDoadorPage */]),
            ],
        })
    ], PerfilDoadorPageModule);
    return PerfilDoadorPageModule;
}());

//# sourceMappingURL=perfil-doador.module.js.map

/***/ }),

/***/ 852:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilDoadorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_database__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Imports do IonicStorage

// Imports do Firebase


// Nomeia a página para redirecionamento
var PerfilDoadorPage = /** @class */ (function () {
    function PerfilDoadorPage(navCtrl, navParams, 
        //  Declaração para integração com IonicStorage 
        storage, 
        //  Declaração para integração com Firebase 
        db, afAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.db = db;
        this.afAuth = afAuth;
    }
    // Metodo para capturar o codigo do chave do usuário
    PerfilDoadorPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('codUser')
            .then(function (resolve) {
            _this.uid = resolve;
            _this.getList();
        });
    };
    // Metodo para buscar da base apartir da chave do usuário
    PerfilDoadorPage.prototype.getList = function () {
        var _this = this;
        var nomeTab = this.db.database.ref('DadosDoadores');
        var addClna = nomeTab.child(this.uid);
        // Tira uma foto do banco no momento atual
        addClna.on('value', function (snapshot) {
            var items = snapshot.val();
            _this.nomeDoadorList = Object.keys(items).map(function (i) { return items[i]; });
        });
    };
    PerfilDoadorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perfil-doador',template:/*ion-inline-start:"C:\Users\Usuario\Documents\BRANDON\workspaces\ionic\doamorApp\src\pages\perfil-doador\perfil-doador.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title> Perfil </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div padding *ngFor="let item of nomeDoadorList">\n        {{ item }}\n  </div>\n\n  <ion-col col-1=""></ion-col>\n  <ion-col col-5="">\n      <button ion-button color="light" round="" full="" class="btn btn-sign-in"\n        [navPush]="\'menu-doador\'">Instituição</button>\n    </ion-col>\n  <ion-col col-1=""></ion-col>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Usuario\Documents\BRANDON\workspaces\ionic\doamorApp\src\pages\perfil-doador\perfil-doador.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__["a" /* AngularFireAuth */]])
    ], PerfilDoadorPage);
    return PerfilDoadorPage;
}());

//# sourceMappingURL=perfil-doador.js.map

/***/ })

});
//# sourceMappingURL=4.js.map