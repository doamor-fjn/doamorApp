webpackJsonp([3],{

/***/ 845:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartDoadorPageModule", function() { return StartDoadorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__start_doador__ = __webpack_require__(855);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StartDoadorPageModule = /** @class */ (function () {
    function StartDoadorPageModule() {
    }
    StartDoadorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__start_doador__["a" /* StartDoadorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__start_doador__["a" /* StartDoadorPage */]),
            ],
        })
    ], StartDoadorPageModule);
    return StartDoadorPageModule;
}());

//# sourceMappingURL=start-doador.module.js.map

/***/ }),

/***/ 855:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartDoadorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the StartDoadorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StartDoadorPage = /** @class */ (function () {
    function StartDoadorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StartDoadorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StartDoadorPage');
    };
    StartDoadorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-start-doador',template:/*ion-inline-start:"C:\Users\leticia.abreu.silva\Desktop\master\DoAmorApp\src\pages\start-doador\start-doador.html"*/'<ion-content>\n  <ion-slides pager="true" speed="100">\n    <ion-slide>\n      <img\n        src="https://trello-attachments.s3.amazonaws.com/5c9bf714a41103074a2b9e5a/5ca93ce263ec933a1ebafcb8/4bbeb13b432b1a2af0c5216b7d211ef9/image.png" />\n    </ion-slide>\n    <ion-slide>\n      <img src="http://www.carlesmarcos.com/wp-content/uploads/2016/01/DAR-ANTES-QUE-RECIBIR.jpg" />\n    </ion-slide>\n    <ion-slide>\n      <img\n        src="https://trello-attachments.s3.amazonaws.com/5c9bf714a41103074a2b9e5a/5ca93ce263ec933a1ebafcb8/4bbeb13b432b1a2af0c5216b7d211ef9/image.png" />\n    </ion-slide>\n  </ion-slides>\n  <ion-col col-5="">\n    <!--Nomeia a página para redirecionamento ([navPush]="\'create-instit\'") nome dado no HTML da página  -->\n    <button ion-button color="light" round="" full="" class="btn btn-sign-in" [navPush]="\'menu-doador\'">Pular</button>\n  </ion-col>\n</ion-content>'/*ion-inline-end:"C:\Users\leticia.abreu.silva\Desktop\master\DoAmorApp\src\pages\start-doador\start-doador.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], StartDoadorPage);
    return StartDoadorPage;
}());

//# sourceMappingURL=start-doador.js.map

/***/ })

});
//# sourceMappingURL=3.js.map