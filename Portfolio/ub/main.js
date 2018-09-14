(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/landingpage/landingpage.component */ "./src/app/pages/landingpage/landingpage.component.ts");
/* harmony import */ var _pages_booker_landing_booker_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/booker-landing/booker-landing.component */ "./src/app/pages/booker-landing/booker-landing.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _pages_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_2__["LandingpageComponent"] },
    { path: 'specialists', component: _pages_booker_landing_booker_landing_component__WEBPACK_IMPORTED_MODULE_3__["BookerLandingComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mobile-view\">\r\n    <img src=\"../assets/icons/mobile-icon.png\" alt=\"Mobile icon\">\r\n    <p>To continue having the best experience with our app, download the app for mobile</p>\r\n    <button>Download</button>\r\n</div>\r\n<div class=\"not-mobile-view\">\r\n    <router-outlet></router-outlet>\r\n    <app-footer></app-footer>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mobile-view {\n  display: none; }\n\n@media only screen and (max-width: 576px) {\n  .not-mobile-view {\n    display: none; }\n  .mobile-view {\n    display: flex;\n    flex-direction: column;\n    align-items: center; }\n    .mobile-view img {\n      margin: 2rem; }\n    .mobile-view p {\n      text-align: center;\n      margin-bottom: 2rem;\n      max-width: 29rem; } }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'uboddy';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/footer/footer.component */ "./src/app/core/footer/footer.component.ts");
/* harmony import */ var _core_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/navbar/navbar.component */ "./src/app/core/navbar/navbar.component.ts");
/* harmony import */ var _pages_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/landingpage/landingpage.component */ "./src/app/pages/landingpage/landingpage.component.ts");
/* harmony import */ var _pages_booker_landing_booker_landing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/booker-landing/booker-landing.component */ "./src/app/pages/booker-landing/booker-landing.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// MODULES


// COMPONENTS





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _core_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _pages_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_7__["LandingpageComponent"],
                _pages_booker_landing_booker_landing_component__WEBPACK_IMPORTED_MODULE_8__["BookerLandingComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/footer/footer.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/footer/footer.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cooperations\">\r\n  <h2>In</h2>\r\n  <h2>cooperation with.</h2>\r\n  <div class=\"partners\">\r\n    <div class=\"partners-item\"></div>\r\n    <div class=\"partners-item\"></div>\r\n    <div class=\"partners-item\"></div>\r\n    <div class=\"partners-item\"></div>\r\n    <div class=\"partners-item\"></div>\r\n  </div>\r\n</div>\r\n<div class=\"footer-navigation\">\r\n  <div class=\"navigation\">\r\n    <ul class=\"is-light\">\r\n      <li>Quick navigation</li>\r\n      <li>Booker portal</li> <!-- <li>Client portal</li> -->\r\n      <li>Customer support</li>\r\n      <li>Newsletter</li>\r\n      <li>uBoddy blog</li>\r\n      <li>Help and FAQ</li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"policy\">\r\n    <p><span class=\"is-light\">&copy; </span><i>New Wave Media Limited <br><span>Est. 2018</span></i></p>\r\n    <span class=\"spacer\"></span>\r\n    <ul>\r\n      <li>Terms and Conditions</li>\r\n      <li>Privacy Policy</li>\r\n      <li>Cookies Policy</li>\r\n      <li>Disclaimer</li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/core/footer/footer.component.scss":
/*!***************************************************!*\
  !*** ./src/app/core/footer/footer.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cooperations {\n  margin: 2rem 8rem; }\n  .cooperations h2 {\n    font-size: 1.1rem;\n    color: #8d7070; }\n  .cooperations .partners {\n    display: flex;\n    justify-content: space-between;\n    margin: 1.5rem 0; }\n  .cooperations .partners-item {\n    width: 17%;\n    height: 5rem;\n    border: 1px solid black; }\n  .footer-navigation {\n  padding: 0 8rem;\n  background-color: #8d7070;\n  color: white; }\n  .footer-navigation .navigation ul {\n    list-style: none;\n    display: flex;\n    align-items: center;\n    padding: .6rem 0;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.5); }\n  .footer-navigation .navigation ul li {\n      cursor: pointer;\n      color: rgba(255, 255, 255, 0.7);\n      font-size: .7rem;\n      margin-right: 2.2rem; }\n  .footer-navigation .navigation ul li:hover {\n      color: white; }\n  .footer-navigation .navigation ul li:first-child {\n      cursor: text;\n      color: white;\n      font-size: .85rem;\n      font-weight: 400;\n      margin-right: 1.2rem; }\n  .footer-navigation .navigation ul li:first-child:hover {\n      color: white; }\n  .footer-navigation .policy {\n    display: flex;\n    padding: .6rem 0; }\n  .footer-navigation .policy p {\n      text-align: center;\n      line-height: .95;\n      font-size: .75rem; }\n  .footer-navigation .policy p span {\n        font-size: .5rem; }\n  .footer-navigation .policy p span:first-child {\n        font-size: 1rem;\n        vertical-align: text-top; }\n  .footer-navigation .policy ul {\n      list-style: none;\n      display: flex;\n      align-items: center; }\n  .footer-navigation .policy ul li {\n        cursor: pointer;\n        color: rgba(255, 255, 255, 0.7);\n        font-size: .7rem;\n        margin-left: 1.2rem; }\n  .footer-navigation .policy ul li:hover {\n        color: white; }\n"

/***/ }),

/***/ "./src/app/core/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/core/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/core/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/core/navbar/navbar.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/navbar/navbar.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  navbar landing\r\n</p>\r\n<p>\r\n  navbar OTHER\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/core/navbar/navbar.component.scss":
/*!***************************************************!*\
  !*** ./src/app/core/navbar/navbar.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/navbar/navbar.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/navbar/navbar.component.ts ***!
  \*************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/core/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/core/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/pages/booker-landing/booker-landing.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/booker-landing/booker-landing.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<p>\r\n  booker-landing works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/booker-landing/booker-landing.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/booker-landing/booker-landing.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/booker-landing/booker-landing.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/booker-landing/booker-landing.component.ts ***!
  \******************************************************************/
/*! exports provided: BookerLandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookerLandingComponent", function() { return BookerLandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookerLandingComponent = /** @class */ (function () {
    function BookerLandingComponent() {
    }
    BookerLandingComponent.prototype.ngOnInit = function () {
    };
    BookerLandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-booker-landing',
            template: __webpack_require__(/*! ./booker-landing.component.html */ "./src/app/pages/booker-landing/booker-landing.component.html"),
            styles: [__webpack_require__(/*! ./booker-landing.component.scss */ "./src/app/pages/booker-landing/booker-landing.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BookerLandingComponent);
    return BookerLandingComponent;
}());



/***/ }),

/***/ "./src/app/pages/landingpage/landingpage.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/landingpage/landingpage.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbo\">\r\n  <nav>\r\n    <ul>\r\n      <li routerLink=\"/specialists\">Specialist portal</li>\r\n      <li>Contact us</li>\r\n      <span class=\"spacer\"></span>\r\n      <li>Sign in</li>\r\n      <li>Sign up</li>\r\n    </ul>\r\n  </nav>\r\n  <header>\r\n    <h2 class=\"is-bold\">Health.</h2>\r\n    <h4 class=\"is-light\">On-demand and on your terms.</h4>\r\n  </header>\r\n  <div class=\"search\">\r\n    <div>\r\n      <p class=\"is-medium\">Your location</p>\r\n      <input class=\"location\" placeholder='ex. \"Stockholm\"' type=\"text\">\r\n    </div>\r\n    <div>\r\n      <p class=\"is-medium\">Treatment</p>\r\n      <select class=\"type\">\r\n        <option *ngFor=\"let trType of treatmentTypes\">{{ trType }}</option>\r\n      </select>\r\n    </div>\r\n    <div>\r\n      <p></p>\r\n      <button></button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<main>\r\n  <section class=\"section-one\">\r\n    <div class=\"section-container\">\r\n      <article>\r\n        <header>\r\n          <h2 class=\"is-light\">On your terms.</h2>\r\n          <h2 class=\"is-light\">When ever, where ever.</h2>\r\n        </header>\r\n        <p>Book an appointments that fits into your daily schedule, rather than trying to fit into someone elses. Either you visit the specialist, or why not have them come to you? All specialists working at uboddy have been thouroughly checket to ensure that you receive quality treatments and services.</p>\r\n      </article>\r\n      <article>\r\n        <header>\r\n          <h2 class=\"is-light\">It doesn't get</h2>\r\n          <h2 class=\"is-light\">easier than this.</h2>\r\n        </header>\r\n        <p>You read that right, it really doesn't get easier than this! This platform is designed to give you the best experience out there. We have gathered all the specialists and treatments under one roof to make is as easy as possible for you to compare and choose. Simplifying the process of finding \"the one\".</p>\r\n      </article>\r\n    </div>\r\n  </section>\r\n  <section class=\"section-two\">\r\n    <div class=\"section-container\">\r\n      <header>\r\n        <h4 class=\"is-semibold\">Improve</h4>\r\n        <h4 class=\"is-semibold\">the quality of your life.</h4>\r\n      </header>\r\n      <div class=\"articles-container\">\r\n        <article>\r\n          <div class=\"img-container massage\">\r\n            <div class=\"find-btn\"></div>\r\n          </div>\r\n          <h5 class=\"is-medium\">Massage therapy</h5>\r\n          <p>Feeling stressed? Take the edge of by treating yourself to a soothing massage session.</p>\r\n        </article>\r\n        <article>\r\n          <div class=\"img-container acupunture\">\r\n            <div class=\"find-btn\"></div>\r\n          </div>\r\n          <h5 class=\"is-medium\">Acupunture/Acupressure</h5>\r\n          <p>Are your neck muscles feeling tight? Acupunture is known for relieving tension.</p>\r\n        </article>\r\n        <article>\r\n          <div class=\"img-container aroma\">\r\n            <div class=\"find-btn\"></div>\r\n          </div>\r\n          <h5 class=\"is-medium\">Aroma therapy</h5>\r\n          <p>Experience true relaxation using calming oils that will stimulate all your senses.</p>\r\n        </article>\r\n        <article>\r\n          <div class=\"img-container zone\">\r\n            <div class=\"find-btn\"></div>\r\n          </div>\r\n          <h5 class=\"is-medium\">Zone therapy</h5>\r\n          <p>Sit back, relax and let the specialist alleciate the pain through pressure points found in your feet and hands.</p>\r\n        </article>\r\n        <article>\r\n          <div class=\"img-container physio\">\r\n            <div class=\"find-btn\"></div>\r\n          </div>\r\n          <h5 class=\"is-medium\">Physio therapy</h5>\r\n          <p>Need help getting back to the same state you were in before an accident? Let a professional to the job!</p>\r\n        </article>\r\n        <article>\r\n          <div class=\"img-container nutrition\">\r\n            <div class=\"find-btn\"></div>\r\n          </div>\r\n          <h5 class=\"is-medium\">Nutrition</h5>\r\n          <p>Treat your body like a temple and consult a nutrionist about your eating habits.</p>\r\n        </article>\r\n        <article>\r\n          <div class=\"img-container healthcoach\">\r\n            <div class=\"find-btn\"></div>\r\n          </div>\r\n          <h5 class=\"is-medium\">Healthcoach</h5>\r\n          <p>Get on the right track to living a healthy, wellbalanced life and improve your day-to-day habits.</p>\r\n        </article>\r\n        <article>\r\n          <div class=\"img-container personalTr\">\r\n            <div class=\"find-btn\"></div>\r\n          </div>\r\n          <h5 class=\"is-medium\">Personal training</h5>\r\n          <p>Optimize the way you train or exercise. Why do it hard way? Or even the wrong way?</p>\r\n        </article>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <section class=\"section-three\">\r\n    <div class=\"section-container\">\r\n      <header>\r\n        <h2 class=\"is-light\">Get up-to-date on the</h2>\r\n        <h2 class=\"is-light\">latest wellness trends.</h2>\r\n      </header>\r\n      <p>Tune in to Emelie Thappers uboddy wellness blog and get all the latest tips and tricks on how to stay healthy and fit. Learn how to get the most out of your day by focusing on yourself. With updates coming out daily on all topics regarding wellness, there is most definitely something there for everyone.</p>\r\n      <div class=\"blog-post\">\r\n        <h6>Latest post</h6>\r\n        <span class=\"spacer\"></span>\r\n        <h6>Combining</h6>\r\n        <h1>Yoga with massage</h1>\r\n        <p>Mixing and mathing techniques to get the most out of the time you have set aside for wellness.</p>\r\n      </div>\r\n      <span class=\"date is-medium\">16th of august, 2018</span>\r\n      <p class=\"post-description is-medium\">So yesterday was an eye-opening dau for me. I found this amazing new massage technique and I can't believe this is the first time I have tried it. I booked a special type of massage therapy with a yoga instructor and to my surprise I found my new obsession. This was sort of like combining message therapy with personal training but didn't cost me twice as much. I straight away booked another appointment through the uboddy app and specifically asked if we could try to incorporate aroma therapy and different message oils during our next session. He had no problem with this and even thought it was a great idea! 2 days to go and believe me I am counting every hour. Ciao!</p>\r\n      <span class=\"btn-blogVisit\">Visit the blog</span>\r\n    </div>\r\n  </section>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/pages/landingpage/landingpage.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/landingpage/landingpage.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbo {\n  background: url('Background.png') center center/cover no-repeat;\n  height: 32rem;\n  padding: 1.1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between; }\n  .jumbo header h2, .jumbo header h4 {\n    margin: 0 1.5rem;\n    color: white; }\n  .jumbo header h2 {\n    font-size: 2rem; }\n  .jumbo header h4 {\n    font-size: 1.4rem; }\n  nav ul {\n  list-style: none;\n  display: flex;\n  align-items: center; }\n  nav ul li {\n    font-size: .68rem;\n    margin: 0 1.5rem;\n    cursor: pointer;\n    color: white;\n    line-height: 1; }\n  nav ul li:hover {\n    color: rgba(219, 219, 219, 0.9); }\n  nav ul li:last-child {\n    color: #f17b5e;\n    border: 1px solid #f17b5e;\n    border-radius: 0 1.4rem;\n    padding: .37rem 2.6rem; }\n  nav ul li:last-child:hover {\n    background-color: #f17b5e;\n    color: white; }\n  .search {\n  width: 100%;\n  margin-bottom: 6.2rem;\n  margin-top: -2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  .search div {\n    display: flex;\n    flex-direction: column; }\n  .search div:nth-child(2) {\n    margin: 0 .6rem; }\n  .search p {\n    color: white;\n    height: 1rem;\n    margin-bottom: .3rem;\n    font-size: .85rem; }\n  .search input, .search select {\n    height: 2.1rem;\n    padding: 1.1rem;\n    font-size: .75rem;\n    border: none; }\n  .search input::-webkit-input-placeholder {\n    font-size: .65rem;\n    font-family: 'Montserrat', sans-serif;\n    color: #a4a4a4;\n    font-weight: 500; }\n  .search input:-ms-input-placeholder {\n    font-size: .65rem;\n    font-family: 'Montserrat', sans-serif;\n    color: #a4a4a4;\n    font-weight: 500; }\n  .search input::-ms-input-placeholder {\n    font-size: .65rem;\n    font-family: 'Montserrat', sans-serif;\n    color: #a4a4a4;\n    font-weight: 500; }\n  .search input::placeholder {\n    font-size: .65rem;\n    font-family: 'Montserrat', sans-serif;\n    color: #a4a4a4;\n    font-weight: 500; }\n  .search .location {\n    width: 18rem; }\n  .search .type {\n    width: 11rem; }\n  .search button {\n    cursor: pointer;\n    width: 2.6rem;\n    height: 2.1rem;\n    border: none;\n    background: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 512 512%22%3E%3Cpath style%3D%22fill%3A%23ffffff%3B%22 d%3D%22M443.5 420.2L336.7 312.4c20.9-26.2 33.5-59.4 33.5-95.5 0-84.5-68.5-153-153.1-153S64 132.5 64 217s68.5 153 153.1 153c36.6 0 70.1-12.8 96.5-34.2l106.1 107.1c3.2 3.4 7.6 5.1 11.9 5.1 4.1 0 8.2-1.5 11.3-4.5 6.6-6.3 6.8-16.7.6-23.3zm-226.4-83.1c-32.1 0-62.3-12.5-85-35.2-22.7-22.7-35.2-52.9-35.2-84.9 0-32.1 12.5-62.3 35.2-84.9 22.7-22.7 52.9-35.2 85-35.2s62.3 12.5 85 35.2c22.7 22.7 35.2 52.9 35.2 84.9 0 32.1-12.5 62.3-35.2 84.9-22.7 22.7-52.9 35.2-85 35.2z%22%2F%3E%3C%2Fsvg%3E\") center center no-repeat;\n    background-color: #f17b5e;\n    background-size: 60%; }\n  section {\n  padding: 2.8rem 0; }\n  section p {\n    line-height: 1.2;\n    margin: 0; }\n  section:nth-child(2) {\n  background-color: #f4f4f4; }\n  .section-container {\n  width: 59.5rem;\n  max-width: 90vw;\n  margin: 0 auto; }\n  .section-one header {\n  margin-bottom: 1rem; }\n  .section-one article:nth-child(1) {\n  margin-bottom: 2.5rem;\n  margin-top: .5rem; }\n  .section-one h2 {\n  font-size: 2.3rem;\n  margin: 0; }\n  .section-one h2:nth-child(2) {\n  color: #8d7070; }\n  .section-two header {\n  margin-bottom: .6rem; }\n  .section-two h4 {\n  margin-bottom: 0.2rem;\n  font-size: 1.3rem;\n  color: #8d7070; }\n  .section-two .articles-container {\n  display: flex;\n  flex-wrap: wrap; }\n  .section-two article {\n  width: 18.3rem;\n  height: 17.5rem;\n  margin: .7rem; }\n  .section-two article h5 {\n    font-size: 1rem;\n    margin: 0.5rem 0; }\n  .section-two article p {\n    font-size: 0.85rem; }\n  .section-two .img-container {\n  width: 100%;\n  height: 11.5rem;\n  background-color: green;\n  position: relative; }\n  .section-two .find-btn {\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATIAAABGCAYAAABPAhimAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGymlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE4LTA5LTEyVDEzOjE5OjMyKzAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE4LTA5LTEyVDE1OjQ2OjIzKzAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOC0wOS0xMlQxNTo0NjoyMyswMzowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NTBhMGZkNS02NjMwLWJlNGMtYmVmYS03MDU2NGE3YzgyY2EiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpkZWQzNzAwNi02ZTJhLTViNDktYjg0YS1iYmI1MzdhNWEwOTIiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmOGE0YWE1Mi00ODRiLTZkNGItOGQ2Ny1mYTI0YjI3YjY4MmEiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmY4YTRhYTUyLTQ4NGItNmQ0Yi04ZDY3LWZhMjRiMjdiNjgyYSIgc3RFdnQ6d2hlbj0iMjAxOC0wOS0xMlQxMzoxOTozMiswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowOWNlYzc2MC1mODVlLTU3NDYtYWViZi1iNDIxNDlhY2Q5NjEiIHN0RXZ0OndoZW49IjIwMTgtMDktMTJUMTM6MTk6MzIrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NTUwYTBmZDUtNjYzMC1iZTRjLWJlZmEtNzA1NjRhN2M4MmNhIiBzdEV2dDp3aGVuPSIyMDE4LTA5LTEyVDE1OjQ2OjIzKzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+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\") center center/contain no-repeat;\n  width: 9rem;\n  height: 2rem;\n  cursor: pointer;\n  position: absolute;\n  left: -.8rem;\n  top: .5rem; }\n  .section-two .find-btn:hover {\n  width: 9.2rem;\n  height: 2.2rem;\n  left: -.7rem;\n  top: .4rem; }\n  .section-two .massage {\n  background: url('Massage.png') center center/cover no-repeat; }\n  .section-two .acupunture {\n  background: url('Acupuncture.png') center center/cover no-repeat; }\n  .section-two .aroma {\n  background: url('Aroma.png') center center/cover no-repeat; }\n  .section-two .zone {\n  background: url('Zone.png') center center/cover no-repeat; }\n  .section-two .physio {\n  background: url('Physio.png') center center/cover no-repeat; }\n  .section-two .nutrition {\n  background: url('Nutrition.png') center center/cover no-repeat; }\n  .section-two .healthcoach {\n  background: url('Healthcoach.png') center center/cover no-repeat; }\n  .section-two .personalTr {\n  background: url('Personaltraining.png') center center/cover no-repeat; }\n  .section-three header {\n  margin-bottom: 1rem; }\n  .section-three h2 {\n  font-size: 2.3rem;\n  margin: 0; }\n  .section-three h2:nth-child(2) {\n  color: #8d7070; }\n  .section-three .blog-post {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 24rem;\n  margin-top: 1rem;\n  padding: .7rem 1.2rem 3.4rem 1.2rem;\n  background: url('blogpicture.png') center center/cover no-repeat;\n  color: white; }\n  .section-three .blog-post h6 {\n    font-weight: normal;\n    font-size: .9rem; }\n  .section-three .blog-post h6:first-child {\n    font-size: .8rem; }\n  .section-three .blog-post h1 {\n    font-size: 3.8rem;\n    font-weight: normal;\n    padding-bottom: .8rem; }\n  .section-three .blog-post p {\n    max-width: 45%; }\n  .section-three .date {\n  color: #a4a4a4;\n  font-size: 0.65rem; }\n  .section-three .post-description {\n  margin: .6rem 0 1rem 0;\n  font-size: 0.9rem;\n  line-height: 1.3; }\n  .section-three .btn-blogVisit {\n  display: inline-block;\n  cursor: pointer;\n  color: white;\n  background-color: #f17b5e;\n  border: 1px solid #f17b5e;\n  border-radius: 0 1.9rem;\n  padding: .5rem 4.6rem;\n  font-size: .8rem; }\n  .section-three .btn-blogVisit:hover {\n  color: #f17b5e;\n  background-color: white; }\n  @media only screen and (max-width: 1069px) {\n  .section-two .articles-container {\n    justify-content: space-between; }\n  .section-two article {\n    width: 40vw;\n    height: 40vw;\n    margin: .7rem; }\n  .section-two .img-container {\n    width: 100%;\n    height: 25vw; } }\n"

/***/ }),

/***/ "./src/app/pages/landingpage/landingpage.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/landingpage/landingpage.component.ts ***!
  \************************************************************/
/*! exports provided: LandingpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingpageComponent", function() { return LandingpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingpageComponent = /** @class */ (function () {
    function LandingpageComponent() {
        this.treatmentTypes = ['Massage', 'Therapy', 'Test1', 'Test2'];
        this.selectedType = 'test';
    }
    LandingpageComponent.prototype.ngOnInit = function () {
        console.log(this.selectedType);
    };
    LandingpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landingpage',
            template: __webpack_require__(/*! ./landingpage.component.html */ "./src/app/pages/landingpage/landingpage.component.html"),
            styles: [__webpack_require__(/*! ./landingpage.component.scss */ "./src/app/pages/landingpage/landingpage.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingpageComponent);
    return LandingpageComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\tomas\Desktop\uBoddy\ub-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map