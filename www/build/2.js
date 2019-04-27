webpackJsonp([2],{

/***/ 845:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPageModule", function() { return StartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__start__ = __webpack_require__(854);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StartPageModule = /** @class */ (function () {
    function StartPageModule() {
    }
    StartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__start__["a" /* StartPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__start__["a" /* StartPage */]),
            ],
            exports: [
                // Exportar para ser visto por outros módulos
                __WEBPACK_IMPORTED_MODULE_2__start__["a" /* StartPage */],
            ]
        })
    ], StartPageModule);
    return StartPageModule;
}());

//# sourceMappingURL=start.module.js.map

/***/ }),

/***/ 854:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__ = __webpack_require__(121);
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
var StartPage = /** @class */ (function () {
    function StartPage(navCtrl, navParams, 
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
    StartPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('codUser')
            .then(function (resolve) {
            _this.uid = resolve;
            _this.getList();
        });
    };
    // Metodo para salvar informação apartir da chave do usuário
    StartPage.prototype.addTask = function (task) {
        var usuarioLogado = this.afAuth.auth.currentUser;
        var userDB = this.db.database.ref('/tasks').child(usuarioLogado.uid);
        userDB.child("task").set(task);
    };
    // Metodo para buscar da base apartir da chave do usuário
    StartPage.prototype.getList = function () {
        var _this = this;
        var listDB = this.db.database.ref('/tasks');
        // Tira uma foto do banco no momento atual
        listDB.on('value', function (snapshot) {
            var items = snapshot.val();
            if (items) {
                _this.listTask = Object.keys(items).map(function (i) { return items[i]; });
            }
        });
    };
    StartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-start',template:/*ion-inline-start:"C:\Users\leticia.abreu.silva\Desktop\master\DoAmorApp\src\pages\start\start.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title> Menu </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-input type="text" placeholder = "Digite sua Tarefa" [(ngModel)]="task"></ion-input>\n  </ion-item>\n  <button ion-button block class="button-add"(click)="addTask(task)"\n  [disabled]="!task || task.length < 3">Adicionar Tarefa</button>\n  <div padding>\n    <ul>\n      <li *ngFor="let item of listTask">\n        {{ item.task }}\n      </li>\n    </ul>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\leticia.abreu.silva\Desktop\master\DoAmorApp\src\pages\start\start.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__["a" /* AngularFireAuth */]])
    ], StartPage);
    return StartPage;
}());

//# sourceMappingURL=start.js.map

/***/ })

});
//# sourceMappingURL=2.js.map