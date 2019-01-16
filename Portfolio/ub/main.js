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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<uboddy-header></uboddy-header>\n<uboddy-aboutus></uboddy-aboutus>\n<uboddy-booking-steps></uboddy-booking-steps>\n<uboddy-features></uboddy-features>\n<uboddy-services></uboddy-services>\n<uboddy-contact-us></uboddy-contact-us>\n"

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
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'uboddy-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/aboutus/aboutus.component */ "./src/app/views/aboutus/aboutus.component.ts");
/* harmony import */ var _views_booking_steps_booking_steps_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/booking-steps/booking-steps.component */ "./src/app/views/booking-steps/booking-steps.component.ts");
/* harmony import */ var _views_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/contact-us/contact-us.component */ "./src/app/views/contact-us/contact-us.component.ts");
/* harmony import */ var _views_features_features_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/features/features.component */ "./src/app/views/features/features.component.ts");
/* harmony import */ var _views_services_services_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/services/services.component */ "./src/app/views/services/services.component.ts");
/* harmony import */ var _views_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/header/header.component */ "./src/app/views/header/header.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _views_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_3__["AboutusComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _views_booking_steps_booking_steps_component__WEBPACK_IMPORTED_MODULE_4__["BookingStepsComponent"],
                _views_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__["ContactUsComponent"],
                _views_features_features_component__WEBPACK_IMPORTED_MODULE_6__["FeaturesComponent"],
                _views_services_services_component__WEBPACK_IMPORTED_MODULE_7__["ServicesComponent"],
                _views_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"]
            ],
            exports: [
                _views_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_3__["AboutusComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _views_booking_steps_booking_steps_component__WEBPACK_IMPORTED_MODULE_4__["BookingStepsComponent"],
                _views_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__["ContactUsComponent"],
                _views_features_features_component__WEBPACK_IMPORTED_MODULE_6__["FeaturesComponent"],
                _views_services_services_component__WEBPACK_IMPORTED_MODULE_7__["ServicesComponent"],
                _views_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/views/aboutus/aboutus.component.css":
/*!*****************************************************!*\
  !*** ./src/app/views/aboutus/aboutus.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".round\n{\n  border-radius:50%;\n  border:2px solid black;\n  width:30px;\n  padding:5px;\n  margin-left:17%;\n}\n\n.second\n{\n  height:700px;\n  margin: 50px 0px 100px 0px;\n  padding: 20px 0px 20px 0px;\n}\n\n.second h1\n{\n  text-align:left;\n  font-weight: bold;\n}\n\n.second p\n{\n  font-size:16px;\n  text-align:left;\n  font-weight: 600;\n}\n\ndiv.absolute {\n  position: absolute;\n  top: 80px;\n  right: 50;\n  margin-right:50%;\n}\n\n.normaltext\n{\n  display:inline;\n  font-size:32px;\n  font-weight:normal;\n}\n\ndiv.relative {\n  position: relative;\n  margin-right: -80px;\n  top: -20px;\n}\n\n.logo {\n  padding-bottom: 100px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYWJvdXR1cy9hYm91dHVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtDQUNqQjs7QUFFRDs7RUFFRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLDJCQUEyQjtDQUM1Qjs7QUFFRDs7RUFFRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0NBQ25COztBQUVEOztFQUVFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixVQUFVO0VBQ1YsaUJBQWlCO0NBQ2xCOztBQUVEOztFQUVFLGVBQWU7RUFDZixlQUFlO0VBQ2YsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxzQkFBc0I7Q0FDdkIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9hYm91dHVzL2Fib3V0dXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3VuZFxue1xuICBib3JkZXItcmFkaXVzOjUwJTtcbiAgYm9yZGVyOjJweCBzb2xpZCBibGFjaztcbiAgd2lkdGg6MzBweDtcbiAgcGFkZGluZzo1cHg7XG4gIG1hcmdpbi1sZWZ0OjE3JTtcbn1cblxuLnNlY29uZFxue1xuICBoZWlnaHQ6NzAwcHg7XG4gIG1hcmdpbjogNTBweCAwcHggMTAwcHggMHB4O1xuICBwYWRkaW5nOiAyMHB4IDBweCAyMHB4IDBweDtcbn1cblxuLnNlY29uZCBoMVxue1xuICB0ZXh0LWFsaWduOmxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc2Vjb25kIHBcbntcbiAgZm9udC1zaXplOjE2cHg7XG4gIHRleHQtYWxpZ246bGVmdDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuZGl2LmFic29sdXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDgwcHg7XG4gIHJpZ2h0OiA1MDtcbiAgbWFyZ2luLXJpZ2h0OjUwJTtcbn1cblxuLm5vcm1hbHRleHRcbntcbiAgZGlzcGxheTppbmxpbmU7XG4gIGZvbnQtc2l6ZTozMnB4O1xuICBmb250LXdlaWdodDpub3JtYWw7XG59XG5cbmRpdi5yZWxhdGl2ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXJpZ2h0OiAtODBweDtcbiAgdG9wOiAtMjBweDtcbn1cblxuLmxvZ28ge1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/views/aboutus/aboutus.component.html":
/*!******************************************************!*\
  !*** ./src/app/views/aboutus/aboutus.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"second\">\n  <div class=\"container-fluid\">\n    <div class=\"container\">\n      <h1>Enhance Your Quality of life,<br>\n        <span class=\"normaltext\">with</span> fitness and wellness</h1>\n          <p>Finding the right treatment doesn't <br>\n            have to be complicated.</p>\n          <div class=\"col-md-4 logo\">\n            <div>\n              <img src=\"../../../assets/Icons_Images/MainLogo.png\" class=\"img-responsive\" width=\"250\" height=\"90\">\n            </div>\n          </div>\n          <div class=\"col-md-8\">\n              <div class=\"relative\"><img src=\"../../../assets/Icons_Images/Preview.png\" class=\"img-responsive\"  width=\"750\" height=\"450\"></div>\n            <div class=\"absolute\"><img src=\"../../../assets/Icons_Images/MobPreview.png\" class=\"img-responsive\" width=\"200\" height=\"350\"></div>\n          </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/aboutus/aboutus.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/aboutus/aboutus.component.ts ***!
  \****************************************************/
/*! exports provided: AboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusComponent", function() { return AboutusComponent; });
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

var AboutusComponent = /** @class */ (function () {
    function AboutusComponent() {
    }
    AboutusComponent.prototype.ngOnInit = function () {
    };
    AboutusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'uboddy-aboutus',
            template: __webpack_require__(/*! ./aboutus.component.html */ "./src/app/views/aboutus/aboutus.component.html"),
            styles: [__webpack_require__(/*! ./aboutus.component.css */ "./src/app/views/aboutus/aboutus.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutusComponent);
    return AboutusComponent;
}());



/***/ }),

/***/ "./src/app/views/booking-steps/booking-steps.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/views/booking-steps/booking-steps.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".third\n{\n  background: #fafafa;\n  margin: 100px 0px 100px 0px;\n  padding: 50px 0px 50px 0px;\n  box-shadow: 0px 5px 5px #ebebeb, 0px -5px 5px #ebebeb;\n  text-align:left;\n}\n\n.third h1\n{\n  font-weight:bold;\n}\n\n.third p\n{\n  font-weight:bold;\n}\n\n.icon\n{\n  height: 80px;\n  width:80px;\n}\n\n.round {\n  border-radius: 50%;\n  border: 2px solid black;\n  width: 30px;\n  padding: 5px;\n  margin-left: 17%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYm9va2luZy1zdGVwcy9ib29raW5nLXN0ZXBzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsb0JBQW9CO0VBQ3BCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isc0RBQXNEO0VBQ3RELGdCQUFnQjtDQUNqQjs7QUFFRDs7RUFFRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7O0VBRUUsaUJBQWlCO0NBQ2xCOztBQUVEOztFQUVFLGFBQWE7RUFDYixXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvYm9va2luZy1zdGVwcy9ib29raW5nLXN0ZXBzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGhpcmRcbntcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgbWFyZ2luOiAxMDBweCAwcHggMTAwcHggMHB4O1xuICBwYWRkaW5nOiA1MHB4IDBweCA1MHB4IDBweDtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggI2ViZWJlYiwgMHB4IC01cHggNXB4ICNlYmViZWI7XG4gIHRleHQtYWxpZ246bGVmdDtcbn1cblxuLnRoaXJkIGgxXG57XG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XG59XG5cbi50aGlyZCBwXG57XG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XG59XG5cbi5pY29uXG57XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6ODBweDtcbn1cblxuLnJvdW5kIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgd2lkdGg6IDMwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDE3JTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/booking-steps/booking-steps.component.html":
/*!******************************************************************!*\
  !*** ./src/app/views/booking-steps/booking-steps.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"third\">\n  <div class=\"container-fluid\">\n    <div class=\"container\">\n      <h1>Booking a treatment couldn't<br> be simpler! </h1><br>\n        <div class=\"col-md-4\">\n          <p class=\"round\">1.</p>\n          <p>Find the right specialist for you.</p>\n          <div>\n            <img src=\"../../../assets/Icons_Images/MobPreview.png\" class=\"img-responsive\">\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <p class=\"round\">2.</p>\n          <p>Choose the treatment you want.</p>\n          <div>\n            <img src=\"../../../assets/Icons_Images/Step2Preview.png\" class=\"img-responsive\">\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <p class=\"round\">3.</p>\n          <p>And pay straight away!</p>\n          <div>\n            <img src=\"../../../assets/Icons_Images/Step3Preview.png\" class=\"img-responsive\">\n          </div>\n        </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/booking-steps/booking-steps.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/booking-steps/booking-steps.component.ts ***!
  \****************************************************************/
/*! exports provided: BookingStepsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingStepsComponent", function() { return BookingStepsComponent; });
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

var BookingStepsComponent = /** @class */ (function () {
    function BookingStepsComponent() {
    }
    BookingStepsComponent.prototype.ngOnInit = function () {
    };
    BookingStepsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'uboddy-booking-steps',
            template: __webpack_require__(/*! ./booking-steps.component.html */ "./src/app/views/booking-steps/booking-steps.component.html"),
            styles: [__webpack_require__(/*! ./booking-steps.component.css */ "./src/app/views/booking-steps/booking-steps.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BookingStepsComponent);
    return BookingStepsComponent;
}());



/***/ }),

/***/ "./src/app/views/contact-us/contact-us.component.css":
/*!***********************************************************!*\
  !*** ./src/app/views/contact-us/contact-us.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer\n{\n  background:#f17b5e;\n\n}\n\n.footer h1\n{\n  color:white;\n  font-weight:bold;\n}\n\n.footer h5\n{\n  color:white;\n  font-size:16px;\n  padding-bottom: 5px;\n}\n\n.footer button\n{\n  background-color:#8d7070;\n  color:white;\n  border:none;\n  width: 250px;\n  border-radius:0px 50px 0px 50px;\n}\n\n.contact {\n  margin-top: 40px;\n}\n\n.contact p\n{\n  text-align:left;\n  color:white;\n  font-size:18px;\n}\n\n.footer p\n{\n  text-align:left;\n  color:white;\n  padding:-5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsbUJBQW1COztDQUVwQjs7QUFFRDs7RUFFRSxZQUFZO0VBQ1osaUJBQWlCO0NBQ2xCOztBQUVEOztFQUVFLFlBQVk7RUFDWixlQUFlO0VBQ2Ysb0JBQW9CO0NBQ3JCOztBQUNEOztFQUVFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixnQ0FBZ0M7Q0FDakM7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7O0VBRUUsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0NBQ2hCOztBQUVEOztFQUVFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTtDQUNkIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyXG57XG4gIGJhY2tncm91bmQ6I2YxN2I1ZTtcblxufVxuXG4uZm9vdGVyIGgxXG57XG4gIGNvbG9yOndoaXRlO1xuICBmb250LXdlaWdodDpib2xkO1xufVxuXG4uZm9vdGVyIGg1XG57XG4gIGNvbG9yOndoaXRlO1xuICBmb250LXNpemU6MTZweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbi5mb290ZXIgYnV0dG9uXG57XG4gIGJhY2tncm91bmQtY29sb3I6IzhkNzA3MDtcbiAgY29sb3I6d2hpdGU7XG4gIGJvcmRlcjpub25lO1xuICB3aWR0aDogMjUwcHg7XG4gIGJvcmRlci1yYWRpdXM6MHB4IDUwcHggMHB4IDUwcHg7XG59XG5cbi5jb250YWN0IHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLmNvbnRhY3QgcFxue1xuICB0ZXh0LWFsaWduOmxlZnQ7XG4gIGNvbG9yOndoaXRlO1xuICBmb250LXNpemU6MThweDtcbn1cblxuLmZvb3RlciBwXG57XG4gIHRleHQtYWxpZ246bGVmdDtcbiAgY29sb3I6d2hpdGU7XG4gIHBhZGRpbmc6LTVweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/contact-us/contact-us.component.html":
/*!************************************************************!*\
  !*** ./src/app/views/contact-us/contact-us.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid footer\">\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" >\n    <h1> Sign up today.</h1>\n    <h5> And receive progress update emails from us</h5>\n    <button class=\"btn btn-lg\"> Sign up</button>\n  </div>\n  <div class=\"container contact\">\n    <p>Contact us - For Specialists</p>\n    <hr>\n    <p>2018 - uboddy.com</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/contact-us/contact-us.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/contact-us/contact-us.component.ts ***!
  \**********************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
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

var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'uboddy-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/views/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/views/contact-us/contact-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/views/features/features.component.css":
/*!*******************************************************!*\
  !*** ./src/app/views/features/features.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".four\n{\n  text-align:center;\n  margin: 100px 0px 100px 0px;\n  padding: 20px 0px 20px 0px;\n}\n\n.four h1\n{\n  text-align:center;\n  font-weight:bold;\n  padding-bottom: 30px;\n}\n\n.four h3\n{\n  text-align:left;\n  font-weight:bold;\n}\n\n.four span\n{\n  padding-left: 20px;\n}\n\n.fourp\n{\n  font-weight:bold;\n}\n\n.img {\n  height: 200px;\n  width: 250px;\n}\n\n.icon {\n\n  height: 150px;\n  width: 150px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvZmVhdHVyZXMvZmVhdHVyZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtDQUM1Qjs7QUFFRDs7RUFFRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtDQUN0Qjs7QUFFRDs7RUFFRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0NBQ2xCOztBQUVEOztFQUVFLG1CQUFtQjtDQUNwQjs7QUFFRDs7RUFFRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxjQUFjO0VBQ2QsYUFBYTtDQUNkOztBQUVEOztFQUVFLGNBQWM7RUFDZCxhQUFhO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9mZWF0dXJlcy9mZWF0dXJlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvdXJcbntcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gIG1hcmdpbjogMTAwcHggMHB4IDEwMHB4IDBweDtcbiAgcGFkZGluZzogMjBweCAwcHggMjBweCAwcHg7XG59XG5cbi5mb3VyIGgxXG57XG4gIHRleHQtYWxpZ246Y2VudGVyO1xuICBmb250LXdlaWdodDpib2xkO1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cblxuLmZvdXIgaDNcbntcbiAgdGV4dC1hbGlnbjpsZWZ0O1xuICBmb250LXdlaWdodDpib2xkO1xufVxuXG4uZm91ciBzcGFuXG57XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLmZvdXJwXG57XG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XG59XG5cbi5pbWcge1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMjUwcHg7XG59XG5cbi5pY29uIHtcblxuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTUwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/views/features/features.component.html":
/*!********************************************************!*\
  !*** ./src/app/views/features/features.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"four\">\n  <div class=\"container\">\n    <h1> Filter for your needs <span class=\"normaltext\">and</span><br> find only the best</h1>\n    <div class=\"container\">\n      <div class=\"col-md-6\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" >\n          <img class=\"img img-responsive\" src=\"../../../assets/Icons_Images/Ratings.png\">\n          <h3>Customer-based rating system</h3>\n          <p> Get inside the mind of other users and find out what they<br>thought before purchasing a treatment</p>\n        </div>\n      </div>\n      <div fxLayout=\"column\" fxLayoutAlign=\"center center\" >\n        <div>\n          <img class=\"img img-responsive\" src=\"../../../assets/Icons_Images/Compare.png\">\n          <h3>Live price comparisons</h3>\n          <p> Sort your results and find the right treatment for you.for <br> the price that you want</p>\n        </div>\n      </div>\n    </div>\n    <br><br><br>\n    <div class=\"container\">\n      <div class=\"col-md-6\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" >\n          <h3> The right place to find the <br>right competence</h3>\n          <p> By vetting each specialist individually,we aim to<br> make sure that you are in good hands.and that<br>you\n            always feel secure.</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"container\">\n      <div fxLayout=\"column\" fxLayoutAlign=\"space-around end\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"start start\">\n          <span fxLayout=\"row\" fxLayoutAlign=\"space-around none\" >1</span>\n          <div  fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <img src=\"../../../assets/Icons_Images/ClientCompany.png\" class=\"img-responsive icon\">\n            <div fxLayout=\"column\" fxLayoutAlign=\"start start\">\n              <p> Registrered company</p>\n              <p class=\"fourp\">Each specialist must always supply us with<br>extensive comapny details</p>\n            </div>\n          </div>\n        </div>\n\n        <div fxLayout=\"column\" fxLayoutAlign=\"start start\">\n          <span fxLayout=\"row\" fxLayoutAlign=\"space-around none\">2</span>\n          <div  fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <img src=\"../../../assets/Icons_Images/ClientID.png\" class=\"img-responsive icon\">\n            <div fxLayout=\"column\" fxLayoutAlign=\"start start\">\n              <p> Valid identification</p>\n              <p class=\"fourp\"> A valid indentification document must<br>always be supplied before being accepted.</p>\n            </div>\n          </div>\n        </div>\n\n        <div fxLayout=\"column\" fxLayoutAlign=\"start start\">\n          <span fxLayout=\"row\" fxLayoutAlign=\"space-around none\" >3</span>\n          <div  fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <img src=\"../../../assets/Icons_Images/ClientEdu.png\" class=\"img-responsive icon\">\n            <div fxLayout=\"column\" fxLayoutAlign=\"start start\">\n              <p>Proof of competence</p>\n              <p class=\"fourp\">We ask for documentation that confirms the<br> specialists competence and degree of it.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/features/features.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/features/features.component.ts ***!
  \******************************************************/
/*! exports provided: FeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesComponent", function() { return FeaturesComponent; });
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

var FeaturesComponent = /** @class */ (function () {
    function FeaturesComponent() {
    }
    FeaturesComponent.prototype.ngOnInit = function () {
    };
    FeaturesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'uboddy-features',
            template: __webpack_require__(/*! ./features.component.html */ "./src/app/views/features/features.component.html"),
            styles: [__webpack_require__(/*! ./features.component.css */ "./src/app/views/features/features.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FeaturesComponent);
    return FeaturesComponent;
}());



/***/ }),

/***/ "./src/app/views/header/header.component.css":
/*!***************************************************!*\
  !*** ./src/app/views/header/header.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  position: relative;\n  text-align: center;\n  color: black;\n  padding-right: 0px;\n  padding-left: 0px;\n}\n.top-left {\n  position: absolute;\n  top: 8px;\n  left: 16px;\n}\n.top-left button {\n  background-color: Transparent;\n  background-repeat:no-repeat;\n  border:1px solid white;\n  cursor:pointer;\n  width:150px;\n  margin-left:30%;\n  color:white;\n  overflow: hidden;\n  border-radius:0px 50px 0px 50px;\n  outline:none;\n}\n.top-right button {\n\n  background-color: Transparent;\n  background-repeat:no-repeat;\n  border:1px solid white;\n  cursor:pointer;\n  color:white;\n  width:150px;\n  margin-left:-50%;\n  overflow: hidden;\n  border-radius:0px 50px 0px 50px;\n  outline:none;\n}\n.top-left-mobile {\n  position: absolute;\n  top: 30px;\n  left: 20px;\n}\n.top-left-mobile button {\n  background-color: Transparent;\n  background-repeat:no-repeat;\n  border:1px solid white;\n  cursor:pointer;\n  width:150px;\n  color:white;\n  overflow: hidden;\n  border-radius:0px 50px 0px 50px;\n  outline:none;\n}\n.top-centered {\n  position: absolute;\n  top: 5%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  color:white;\n  font-size:24px;\n}\n.top-centered-mobile {\n  position: absolute;\n  top: 5%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  color:white;\n  font-size:18px;\n}\n.top-right {\n  position: absolute;\n  top: 8px;\n  right: 16px;\n}\n.centered {\n  position: absolute;\n  top: 50%;\n  left: 10%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.head\n{\n  text-align:left;\n  color:white;\n  margin-left:180px;\n\n}\n.headh3\n{\n  text-align:left;\n  color:white;\n  margin-left:180px;\n}\n.signup\n{\n  background-color:white;\n  color:#f17b5e;\n  border-radius:0px 50px 0px 50px;\n  width:150px;\n  border:1px solid white;\n}\n.mobile-text {\n  position: absolute;\n  top: 70%;\n  left: 25%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.mobile-text h3{\n  color: #fff;\n}\n.mobile-text h6{\n  color: #fff;\n}\n.img-home {\n  height: 300px\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtDQUNuQjtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxXQUFXO0NBQ1o7QUFFRDtFQUNFLDhCQUE4QjtFQUM5Qiw0QkFBNEI7RUFDNUIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0NBQWdDO0VBQ2hDLGFBQWE7Q0FDZDtBQUVEOztFQUVFLDhCQUE4QjtFQUM5Qiw0QkFBNEI7RUFDNUIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZ0NBQWdDO0VBQ2hDLGFBQWE7Q0FDZDtBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixXQUFXO0NBQ1o7QUFFRDtFQUNFLDhCQUE4QjtFQUM5Qiw0QkFBNEI7RUFDNUIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQ0FBZ0M7RUFDaEMsYUFBYTtDQUNkO0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLFVBQVU7RUFDVix5Q0FBaUM7VUFBakMsaUNBQWlDO0VBQ2pDLFlBQVk7RUFDWixlQUFlO0NBQ2hCO0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLFVBQVU7RUFDVix5Q0FBaUM7VUFBakMsaUNBQWlDO0VBQ2pDLFlBQVk7RUFDWixlQUFlO0NBQ2hCO0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsU0FBUztFQUNULFlBQVk7Q0FDYjtBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxVQUFVO0VBQ1YseUNBQWlDO1VBQWpDLGlDQUFpQztDQUNsQztBQUVEOztFQUVFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCOztDQUVuQjtBQUVEOztFQUVFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCO0NBQ25CO0FBRUQ7O0VBRUUsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLHVCQUF1QjtDQUN4QjtBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxVQUFVO0VBQ1YseUNBQWlDO1VBQWpDLGlDQUFpQztDQUNsQztBQUVEO0VBQ0UsWUFBWTtDQUNiO0FBRUQ7RUFDRSxZQUFZO0NBQ2I7QUFFRDtFQUNFLGFBQWE7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuLnRvcC1sZWZ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDhweDtcbiAgbGVmdDogMTZweDtcbn1cblxuLnRvcC1sZWZ0IGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IFRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XG4gIGJvcmRlcjoxcHggc29saWQgd2hpdGU7XG4gIGN1cnNvcjpwb2ludGVyO1xuICB3aWR0aDoxNTBweDtcbiAgbWFyZ2luLWxlZnQ6MzAlO1xuICBjb2xvcjp3aGl0ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czowcHggNTBweCAwcHggNTBweDtcbiAgb3V0bGluZTpub25lO1xufVxuXG4udG9wLXJpZ2h0IGJ1dHRvbiB7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogVHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcbiAgYm9yZGVyOjFweCBzb2xpZCB3aGl0ZTtcbiAgY3Vyc29yOnBvaW50ZXI7XG4gIGNvbG9yOndoaXRlO1xuICB3aWR0aDoxNTBweDtcbiAgbWFyZ2luLWxlZnQ6LTUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czowcHggNTBweCAwcHggNTBweDtcbiAgb3V0bGluZTpub25lO1xufVxuXG4udG9wLWxlZnQtbW9iaWxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwcHg7XG4gIGxlZnQ6IDIwcHg7XG59XG5cbi50b3AtbGVmdC1tb2JpbGUgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogVHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcbiAgYm9yZGVyOjFweCBzb2xpZCB3aGl0ZTtcbiAgY3Vyc29yOnBvaW50ZXI7XG4gIHdpZHRoOjE1MHB4O1xuICBjb2xvcjp3aGl0ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czowcHggNTBweCAwcHggNTBweDtcbiAgb3V0bGluZTpub25lO1xufVxuXG4udG9wLWNlbnRlcmVkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBjb2xvcjp3aGl0ZTtcbiAgZm9udC1zaXplOjI0cHg7XG59XG5cbi50b3AtY2VudGVyZWQtbW9iaWxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBjb2xvcjp3aGl0ZTtcbiAgZm9udC1zaXplOjE4cHg7XG59XG5cbi50b3AtcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICByaWdodDogMTZweDtcbn1cblxuLmNlbnRlcmVkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmhlYWRcbntcbiAgdGV4dC1hbGlnbjpsZWZ0O1xuICBjb2xvcjp3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6MTgwcHg7XG5cbn1cblxuLmhlYWRoM1xue1xuICB0ZXh0LWFsaWduOmxlZnQ7XG4gIGNvbG9yOndoaXRlO1xuICBtYXJnaW4tbGVmdDoxODBweDtcbn1cblxuLnNpZ251cFxue1xuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICBjb2xvcjojZjE3YjVlO1xuICBib3JkZXItcmFkaXVzOjBweCA1MHB4IDBweCA1MHB4O1xuICB3aWR0aDoxNTBweDtcbiAgYm9yZGVyOjFweCBzb2xpZCB3aGl0ZTtcbn1cblxuLm1vYmlsZS10ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDcwJTtcbiAgbGVmdDogMjUlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLm1vYmlsZS10ZXh0IGgze1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm1vYmlsZS10ZXh0IGg2e1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmltZy1ob21lIHtcbiAgaGVpZ2h0OiAzMDBweFxufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/header/header.component.html":
/*!****************************************************!*\
  !*** ./src/app/views/header/header.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxShow=\"true\" fxShow.gt-xs=\"true\" fxShow.gt-md=\"false\" >\n  <div class=\"container-fluid\" >\n    <img src=\"../../../assets/Icons_Images/MainBackground.jpg\" class=\"img-responsive img-home\" width=\"1350\" height=\"800\">\n    <div class=\"top-centered-mobile\">\n      uboddy.com\n    </div>\n    <div fxLayout=\"row\" fxLayoutAlign=\"center none\" class=\"top-left-mobile\">\n      <button> For Specialists </button>\n      <button>Sign Up</button>\n    </div>\n\n    <div class=\"mobile-text\">\n      <h3>Health.</h3>\n      <h6>On-demand and on your terms</h6>\n      <button class=\"signup\"> Sign-up </button>\n    </div>\n  </div>\n</div>\n\n<div fxShow=\"false\" fxShow.gt-xs=\"false\" fxShow.gt-md=\"true\">\n  <div class=\"container-fluid\" >\n    <img src=\"../../../assets/Icons_Images/MainBackground.jpg\" class=\"img-responsive\" width=\"1350\" height=\"500\">\n    <div class=\"top-left\">\n      <button> For Specialists </button>\n    </div>\n    <div class=\"top-centered\">\n      uboddy.com\n    </div>\n    <div class=\"top-right\">\n      <button>Sign Up</button>\n    </div>\n    <div class=\"centered\">\n      <h1 class=\"head\">Health.</h1>\n      <h3 class=\"headh3\">On-demand and on your terms</h3>\n      <button class=\"signup\"> Sign-up </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/header/header.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/header/header.component.ts ***!
  \**************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'uboddy-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/views/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/views/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/views/services/services.component.css":
/*!*******************************************************!*\
  !*** ./src/app/views/services/services.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fifth {\n  background: #fafafa;\n  margin: 100px 0px 100px 0px;\n  padding: 20px 0px 20px 0px;\n  box-shadow: 0px 5px 5px #ebebeb, 0px -5px 5px #ebebeb;\n}\n.fifth h2\n{\n  text-align:center;\n  padding-bottom: 30px;\n  font-weight: bold;\n}\n.fifth h3\n{\n  text-align:left;\n  font-weight:bold;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLHNEQUFzRDtDQUN2RDtBQUNEOztFQUVFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsa0JBQWtCO0NBQ25CO0FBRUQ7O0VBRUUsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlmdGgge1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICBtYXJnaW46IDEwMHB4IDBweCAxMDBweCAwcHg7XG4gIHBhZGRpbmc6IDIwcHggMHB4IDIwcHggMHB4O1xuICBib3gtc2hhZG93OiAwcHggNXB4IDVweCAjZWJlYmViLCAwcHggLTVweCA1cHggI2ViZWJlYjtcbn1cbi5maWZ0aCBoMlxue1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZmlmdGggaDNcbntcbiAgdGV4dC1hbGlnbjpsZWZ0O1xuICBmb250LXdlaWdodDpib2xkO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/services/services.component.html":
/*!********************************************************!*\
  !*** ./src/app/views/services/services.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fifth\">\n  <div class=\"container\">\n    <h2> We give you the power of choice <span class=\"normaltext\">and</span><br> the freedom to choose </h2>\n    <div class=\"col-md-6\">\n      <div class=\"container\">\n        <h3>On-demand<br> treatments</h3>\n        <p>Plans got cancelled last minute?No<br> Worries we got you covered.Your<br>specialist will treat you before you have<br>the time to say \"Could it really be that fast?\"</p> \t<br>\n        <h3>Home visit or<br> park visit?</h3>\n        <p>Want to exercise with a personal trainer<br> outside? Or maybe you want a <br>massage therapist to treat you in the<br> comfort of your own home.well,you've <br>come to the right place.\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div>\n        <img class=\"img img-responsive\" src=\"../../../assets/Icons:Images/OnInfo.png\">\n      </div>\n    </div>\n    <div class=\"container\">\n      <div class=\"col-md-4\">\n        <div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div>\n          <h3> On the run?</h3>\n          <p> Book any treatment,anywhere,at any<br>time.We are always here for you,ready<br>to fullfill any need you might have</p>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div>\n          <h3>The power is yours.</h3>\n          <p>You are truly in charge.We give you the tools to decide every little detail of how<br>you want your experience to be.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/services/services.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/services/services.component.ts ***!
  \******************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
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

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'uboddy-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/views/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/views/services/services.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Tom\Desktop\Test app\uboddy\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map