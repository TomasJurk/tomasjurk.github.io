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
		var e = new Error('Cannot find module "' + req + '".');
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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _how_to_how_to_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./how-to/how-to.component */ "./src/app/how-to/how-to.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'how-to', component: _how_to_how_to_component__WEBPACK_IMPORTED_MODULE_3__["HowToComponent"] }
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

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
        this.title = 'app';
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/data.service */ "./src/app/core/data.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _how_to_how_to_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./how-to/how-to.component */ "./src/app/how-to/how-to.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// MODULES


// SERVICES

// COMPONENTS





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _how_to_how_to_component__WEBPACK_IMPORTED_MODULE_9__["HowToComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [_core_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/data.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/data.service.ts ***!
  \**************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.githubApiUrl = 'https://api.github.com/';
    }
    DataService.prototype.getData = function (request) {
        return this.http.get(this.githubApiUrl + request);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <a href=\"https://github.com/\" target=\"_blank\">\n    <img class=\"footer-logo\" src=\"../../assets/GitHub-Logo.png\" alt=\"\">\n  </a>\n  <span class=\"spacer\"></span>\n  <div class=\"social-links\">\n    <a href=\"https://www.facebook.com/GitHub/\" target=\"_blank\">\n      <i class=\"fab fa-facebook\"></i>\n    </a>\n    <a href=\"https://twitter.com/github\" target=\"_blank\">\n      <i class=\"fab fa-twitter-square\"></i>\n    </a>\n    <a href=\"https://www.instagram.com/github/?hl=en\" target=\"_blank\">\n      <i class=\"fab fa-instagram\"></i>\n    </a>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  width: 100%;\n  background-color: #b0f5f5;\n  padding: 0.75rem 1.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 5rem; }\n  footer .footer-logo {\n    height: 2rem; }\n  footer .social-links i {\n    font-size: 2rem;\n    color: #222222;\n    margin-left: 1rem; }\n  footer .social-links i:hover {\n    color: #003dc0; }\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
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
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <!-- SEARCH CONTAINER -->\r\n  <div class=\"search\">\r\n    <div class=\"checkbox-container\">\r\n      <label class=\"chearch-type\">\r\n        <input type=\"radio\" checked=\"checked\" name=\"radio\" (click)=\"switchToUserSearch()\"> Get user information\r\n      </label>\r\n      <label class=\"chearch-type\">\r\n        <input type=\"radio\" name=\"radio\" (click)=\"switchToRepoSearch()\"> Search for repositories\r\n      </label>\r\n    </div>\r\n\r\n    <div class=\"search-box\" *ngIf=\"searchType\">\r\n      <input type=\"text\" #userName>\r\n      <button (click)=\"getData(userName.value)\">Search</button>\r\n      <span class=\"is-danger\" *ngIf=\"errorMsg\">{{errorMsg}}</span>\r\n    </div>\r\n\r\n    <div class=\"search-box\" *ngIf=\"!searchType\">\r\n      <input type=\"text\" #searchWord>\r\n      <button (click)=\"getData(searchWord.value)\">Search</button>\r\n      <span class=\"is-danger\" *ngIf=\"errorMsg\">{{errorMsg}}</span>\r\n      <div class=\"sorting-checkbox\">\r\n          <label class=\"chearch-type\">\r\n            <input type=\"radio\" checked=\"checked\" name=\"sort\" #bestMatch value=\"\" (click)=\"setSortType('')\"> Best match\r\n          </label>\r\n          <label class=\"chearch-type\">\r\n            <input type=\"radio\" name=\"sort\" #stars value=\"&sort=stars\" (click)=\"setSortType('&sort=stars')\"> Sort by stars\r\n          </label>\r\n          <label class=\"chearch-type\">\r\n            <input type=\"radio\" name=\"sort\" #update value=\"&sort=updated\" (click)=\"setSortType('&sort=updated')\"> Sort by updated\r\n          </label>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- FOUND REPOS CARDS -->\r\n  <div class=\"cards\">\r\n    <div class=\"card\" *ngFor=\"let rep of reposFound\">\r\n      <img src=\"{{rep.owner.avatar_url}}\" alt=\"\">\r\n      <h3>Owner: {{rep.owner.login}}</h3>\r\n      <h4 class=\"linkToClick\" (click)=\"getSingleRep('repos/' + rep.owner.login + '/' + rep.name)\">Repository found: {{rep.name}}</h4>\r\n      <span class=\"spacer\"></span>\r\n      <p class=\"linkToClick\" (click)=\"getRepos('users/' + rep.owner.login + '/repos')\">See all repositories <i class=\"fas fa-code-branch\"></i></p>\r\n      <p><a href=\"{{rep.owner.html_url}}\" target=\"_blank\">See user's Github page</a></p>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- SINGLE USER CARD -->\r\n  <div class=\"card\" *ngIf=\"singleUser\">\r\n    <img src=\"{{singleUser.avatar_url}}\" alt=\"\">\r\n    <h3>{{singleUser.login}}</h3>\r\n    <p>Repositories: {{singleUser.public_repos}}</p>\r\n    <p class=\"linkToClick\" (click)=\"getRepos('users/' + singleUser.login + '/repos')\">See repositories <i class=\"fas fa-code-branch\"></i></p>\r\n    <span class=\"spacer\"></span>\r\n    <p><a href=\"{{singleUser.html_url}}\" target=\"_blank\">See user's Github page</a></p>\r\n  </div>\r\n\r\n  <!-- MODAL SINGLE REPOSITORY -->\r\n  <div class=\"modal\" #modalWindow *ngIf=\"singleRepository\" (click)=\"closeModal(modalWindow)\">\r\n    <div class=\"card modal-content\">\r\n      <h3>{{singleRepository.name}}</h3>\r\n      <p>Description: {{singleRepository.description}}</p>\r\n      <p>Language: {{singleRepository.language}}</p>\r\n      <p>Created at: {{singleRepository.created_at}}</p>\r\n      <p>Pushed at: {{singleRepository.pushed_at}}</p>\r\n      <p>Updated at: {{singleRepository.updated_at}}</p>\r\n      <span class=\"spacer\"></span>\r\n      <p><a href=\"{{singleRepository.html_url}}\" target=\"_blank\">See at Github...</a></p>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- MODAL REPOSITORIES -->\r\n  <div class=\"modal\" #modalWindow *ngIf=\"repositories\" (click)=\"closeModal(modalWindow)\">\r\n    <div class=\"card modal-content\">\r\n      <h3>Repositories list</h3>\r\n      <p *ngFor=\"let rep of repositories\">\r\n        <a href=\"{{rep.html_url}}\" target=\"_blank\">{{rep.name}}</a>\r\n      </p>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search {\n  width: 100%;\n  padding: 1rem; }\n\n.checkbox-container {\n  margin-bottom: 1rem; }\n\n.chearch-type {\n  margin-right: 1rem; }\n\n.search-box * {\n  margin-right: .5rem;\n  margin-bottom: .5rem; }\n\n.cards {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center; }\n\n.card {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.36);\n  height: 25rem;\n  width: 16rem;\n  margin: 1rem;\n  display: flex;\n  flex-direction: column; }\n\n.card img {\n    width: 100%; }\n\n.card h3 {\n    margin: .5rem auto;\n    text-align: center; }\n\n.card h4 {\n    margin: 0 .5rem .5rem .5rem;\n    overflow: hidden;\n    width: unset; }\n\n.card p {\n    margin: 0 .5rem .5rem .5rem; }\n\n.card:hover {\n  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.26); }\n\n.modal {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0.26);\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.modal .modal-content {\n    background-color: white;\n    overflow: auto;\n    padding: .5rem;\n    width: 25rem; }\n\n@media only screen and (max-width: 576px) {\n  .container {\n    display: flex;\n    align-items: center;\n    flex-direction: column; }\n  .search {\n    display: flex;\n    flex-direction: column;\n    align-items: center; }\n  .search-box {\n    display: flex;\n    flex-direction: column;\n    align-items: center; }\n  .search-box * {\n    margin-right: 0; }\n  .chearch-type {\n    display: block; }\n  .card {\n    height: 30rem;\n    width: 20rem; } }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/data.service */ "./src/app/core/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(_dS) {
        this._dS = _dS;
        this.searchType = true;
        this.searchCriteria = '';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.switchToUserSearch = function () {
        this.searchType = true;
    };
    HomeComponent.prototype.switchToRepoSearch = function () {
        this.searchType = false;
    };
    HomeComponent.prototype.setSortType = function (type) {
        this.searchCriteria = type;
    };
    // Get data from github main function (single user data or searched repos)
    HomeComponent.prototype.getData = function (arg) {
        var _this = this;
        if (this.searchType && arg.length > 2) {
            this._dS.getData("users/" + arg).subscribe(function (data) {
                _this.singleUser = data;
                _this.reposFound = null;
                _this.errorMsg = '';
            }, function (error) {
                _this.errorMsg = "'" + arg + "' was not found";
                console.log(error.message);
            });
        }
        else if (!this.searchType && arg.length > 2) {
            this._dS.getData("search/repositories?q=" + arg + this.searchCriteria).subscribe(function (data) {
                _this.reposFound = data['items'];
                _this.singleUser = null;
                _this.errorMsg = '';
            }, function (error) {
                _this.errorMsg = "'" + arg + "' was not found";
                console.log(error.message);
            });
        }
        else {
            this.errorMsg = 'Minimum 3 letters';
        }
    };
    // Get user's repositories list
    HomeComponent.prototype.getRepos = function (url) {
        var _this = this;
        this._dS.getData(url).subscribe(function (data) {
            _this.repositories = data;
        }, function (error) {
            console.log(error.message);
        });
    };
    // Get single repository's data
    HomeComponent.prototype.getSingleRep = function (url) {
        var _this = this;
        this._dS.getData(url).subscribe(function (data) {
            _this.singleRepository = data;
        }, function (error) {
            console.log(error.message);
        });
    };
    HomeComponent.prototype.closeModal = function (modalWindow) {
        if (event.target === modalWindow) {
            this.repositories = null;
            this.singleRepository = null;
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/how-to/how-to.component.html":
/*!**********************************************!*\
  !*** ./src/app/how-to/how-to.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <a class=\"linkBack\" routerLink=\"/\">\r\n    <i class=\"fas fa-arrow-left\"></i>\r\n  </a>\r\n  <div class=\"container-howTo\">\r\n    <h1>How to use</h1>\r\n    <ul>\r\n      <li>\r\n        <i>\"Search for repositories\"</i> - type keywords, what repositories are you looking for (minimum 3 letters) and choose sorting type\r\n      </li>\r\n      <li>\r\n        <i>\"Get user information\"</i> - if you know the full nickname of the user, use this option and type full user nickname to the input (minimum 3 letters)\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/how-to/how-to.component.scss":
/*!**********************************************!*\
  !*** ./src/app/how-to/how-to.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".linkBack {\n  color: black; }\n\n.container-howTo {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\n.container-howTo h1 {\n    margin: 1rem auto; }\n\n.container-howTo ul {\n    max-width: 90%;\n    margin: 1rem auto; }\n\n.container-howTo ul li {\n      margin-bottom: .5rem; }\n"

/***/ }),

/***/ "./src/app/how-to/how-to.component.ts":
/*!********************************************!*\
  !*** ./src/app/how-to/how-to.component.ts ***!
  \********************************************/
/*! exports provided: HowToComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowToComponent", function() { return HowToComponent; });
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

var HowToComponent = /** @class */ (function () {
    function HowToComponent() {
    }
    HowToComponent.prototype.ngOnInit = function () {
    };
    HowToComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-how-to',
            template: __webpack_require__(/*! ./how-to.component.html */ "./src/app/how-to/how-to.component.html"),
            styles: [__webpack_require__(/*! ./how-to.component.scss */ "./src/app/how-to/how-to.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HowToComponent);
    return HowToComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <a routerLink=\"/\">\n    <img class=\"logo\" src=\"../../assets/octocat.png\" alt=\"Logo\">\n  </a>\n  <span class=\"spacer\"></span>\n  <a routerLink=\"/how-to\" class=\"navLink\">how to use</a>\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  width: 100%;\n  background-color: #b0f5f5;\n  padding: 0.75rem 1.5rem;\n  display: flex;\n  align-items: center;\n  height: 5rem; }\n  nav .logo {\n    width: 3.5rem; }\n  nav .navLink {\n    text-decoration: none;\n    text-transform: uppercase;\n    color: black;\n    padding-left: 1.5rem; }\n  nav .navLink:hover {\n    font-size: 1.1rem;\n    text-decoration: underline; }\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
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
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
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
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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

module.exports = __webpack_require__(/*! C:\Users\ca_front201\Desktop\Futurehome assignment\spapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map