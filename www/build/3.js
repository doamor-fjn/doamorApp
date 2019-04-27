webpackJsonp([3],{

/***/ 844:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartDoadorPageModule", function() { return StartDoadorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__start_doador__ = __webpack_require__(853);
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

/***/ 853:
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
            selector: 'page-start-doador',template:/*ion-inline-start:"C:\Users\leticia.abreu.silva\Desktop\master\DoAmorApp\src\pages\start-doador\start-doador.html"*/'<ion-content class="tutorial-page">\n\n    <ion-slides pager="true" speed="100">\n  \n      <ion-slide class="slide1">\n        <ion-grid >\n          <ion-row>\n            <ion-col col-1></ion-col>\n            <ion-col col-10>\n              <img src="../../assets/imgs/logo2-branco.png"/>\n            </ion-col>\n            <ion-col col-1></ion-col>\n            <!--<ion-col col-1></ion-col>-->\n            <ion-col col-12>\n              <p style="color: #fff">O doAmor foi pensado para você fazer o bem com apenas alguns cliques.</p>\n            </ion-col>\n            <!--<ion-col col-1></ion-col>-->\n          </ion-row>\n        </ion-grid>\n          <ion-footer>\n          <ion-buttons end>\n            <!--Nomeia a página para redirecionamento ([navPush]="\'create-instit\'") nome dado no HTML da página  -->\n            <button ion-button clear color="light" [navPush]="\'menu-doador\'">Pular</button>\n          </ion-buttons>\n        </ion-footer>\n      </ion-slide>\n    \n      <ion-slide class="slide2">\n        <ion-grid >\n          <ion-row>\n            <ion-col col-1></ion-col>\n            <ion-col col-10>\n              <img src="../../assets/imgs/logo2-branco.png"/>\n            </ion-col>\n            <ion-col col-1></ion-col>\n            <ion-col col-12>\n              <p style="color: #fff">Você transforma uma ou mais vidas com um recurso disponível na palma da sua mão e de fácil acesso. Explore-nos.</p>\n            </ion-col>\n            <ion-col col-12>\n              <button ion-button large clear icon-end color="light" [navPush]="\'menu-doador\'">Entrar <ion-icon color="light" name="arrow-forward" ></ion-icon></button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-slide>\n    \n    </ion-slides>\n  \n  </ion-content>'/*ion-inline-end:"C:\Users\leticia.abreu.silva\Desktop\master\DoAmorApp\src\pages\start-doador\start-doador.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], StartDoadorPage);
    return StartDoadorPage;
}());

//# sourceMappingURL=start-doador.js.map

/***/ })

});
//# sourceMappingURL=3.js.map