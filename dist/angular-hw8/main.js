(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\CSCI571\hw8\angular\angular-hw8\src\main.ts */"zUnb");


/***/ }),

/***/ "1qbd":
/*!**************************************************!*\
  !*** ./src/app/watchlist/watchlist.component.ts ***!
  \**************************************************/
/*! exports provided: WatchlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchlistComponent", function() { return WatchlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class WatchlistComponent {
    constructor() {
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        // this.comp.showWatchlistButton()
        // this.comp.showSearch = false
        // console.log("watch")
    }
}
WatchlistComponent.ɵfac = function WatchlistComponent_Factory(t) { return new (t || WatchlistComponent)(); };
WatchlistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WatchlistComponent, selectors: [["app-watchlist"]], decls: 0, vars: 0, template: function WatchlistComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dhdGNobGlzdC93YXRjaGxpc3QuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WatchlistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-watchlist',
                templateUrl: './watchlist.component.html',
                styleUrls: ['./watchlist.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highcharts */ "6n/F");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var highcharts_modules_stock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! highcharts/modules/stock */ "N9ju");
/* harmony import */ var highcharts_modules_stock__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_stock__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var highcharts_indicators_volume_by_price__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! highcharts/indicators/volume-by-price */ "5DRE");
/* harmony import */ var highcharts_indicators_volume_by_price__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(highcharts_indicators_volume_by_price__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var highcharts_indicators_indicators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! highcharts/indicators/indicators */ "HuDP");
/* harmony import */ var highcharts_indicators_indicators__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(highcharts_indicators_indicators__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! highcharts-angular */ "kAVD");



















const _c0 = ["news"];
function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Stock Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_1_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.showSearchButton(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_1_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.showWatchlistButton(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Watchlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_1_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.showPortfolioButton(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Portfolio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Stock Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_2_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.showSearchButton(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_2_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.showWatchlistButton(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Watchlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_2_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.showPortfolioButton(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Portfolio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_template_4_Template_button_click_3_listener() { const modal_r20 = ctx.$implicit; return modal_r20.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Current Price: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Quantity: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "form", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_template_4_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.tmpQuant = $event; })("ngModelChange", function AppComponent_ng_template_4_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.checkValue($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Total: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_template_4_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const modal_r20 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); modal_r20.close("Save click"); return ctx_r25.buy(ctx_r25.portfolioTicker, ctx_r25.portfolioPrice, ctx_r25.portfolioName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Buy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.portfolioTicker.toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.portfolioPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.tmpQuant);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.quant2);
} }
function AppComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No results found. Please enter valid Ticker. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Currently you don't have any stock in your watchlist. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Currently you don't have any stock. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_mat_spinner_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 42);
} }
function AppComponent_div_10_span_8_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r30.ticker + "|" + option_r30.name, " ");
} }
function AppComponent_div_10_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_10_span_8_mat_option_1_Template, 2, 2, "mat-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r27.options);
} }
function AppComponent_div_10_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 40);
} }
function AppComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "STOCK SEARCH");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_div_10_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.inputString = $event; })("selectionChange", function AppComponent_div_10_Template_input_selectionChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.updateSelectedValue($event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-autocomplete", 47, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_div_10_span_8_Template, 2, 1, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_div_10_mat_option_9_Template, 2, 1, "mat-option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_10_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.requestData(ctx_r34.inputString); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r8.inputString)("formControl", ctx_r8.myControl)("matAutocomplete", _r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx_r8.displayFn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.showOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.showSmallSpinner);
} }
function AppComponent_div_11__svg_svg_6_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_11__svg_svg_6_Template__svg_svg_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r42.star(ctx_r42.ticker, ctx_r42.data.summary.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_11__svg_svg_7_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_11__svg_svg_7_Template__svg_svg_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r44.unStar(ctx_r44.ticker); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_11_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_11_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_11_ng_template_28_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "High Price: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Low Price: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Open Price: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Prev. Close: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Volume: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "table", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r46.data.price.high == null ? "-" : ctx_r46.data.price.high);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r46.data.price.low == null ? "-" : ctx_r46.data.price.low);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r46.data.price.open == null ? "-" : ctx_r46.data.price.open);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r46.data.price.prevClose == null ? "-" : ctx_r46.data.price.prevClose);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r46.data.price.volume == null ? "-" : ctx_r46.data.price.volume);
} }
function AppComponent_div_11_ng_template_28_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Mid Price: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Ask Price: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Ask Size: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Bid Price: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Bid Size: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "table", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r47.data.price.mid == null ? "-" : ctx_r47.data.price.mid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r47.data.price.askPrice == null ? "-" : ctx_r47.data.price.askPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r47.data.price.askSize == null ? "-" : ctx_r47.data.price.askSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r47.data.price.bidPrice == null ? "-" : ctx_r47.data.price.bidPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r47.data.price.bidSize == null ? "-" : ctx_r47.data.price.bidSize);
} }
function AppComponent_div_11_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_11_ng_template_28_div_3_Template, 35, 5, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_11_ng_template_28_div_4_Template, 35, 5, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Company's Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Start Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "highcharts-chart", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updateChange", function AppComponent_div_11_ng_template_28_Template_highcharts_chart_updateChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r48.updateFlag = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r39.showTable1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r39.showTable2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r39.data.summary.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r39.data.summary.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Highcharts", ctx_r39.Highcharts)("options", ctx_r39.chartOptions)("update", ctx_r39.updateFlag)("oneToOne", ctx_r39.oneToOneFlag)("constructorType", ctx_r39.chartConstructor);
} }
function AppComponent_div_11_ng_template_30_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Profile update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_11_ng_template_30_ng_template_0_Template_button_click_6_listener() { const modal_r54 = ctx.$implicit; return modal_r54.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "h2", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "p", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "For more details click ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "here");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Share");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r51.data.news.articles);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r51.news_link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r51.twURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r51.fbURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AppComponent_div_11_ng_template_30_tr_4_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_11_ng_template_30_tr_4_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const idx_r57 = ctx.index; _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r58.openNews(_r50, idx_r57); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const idx_r57 = ctx.index;
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r52.data.news.articles[idx_r57].urlToImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r52.data.news.articles[idx_r57].title);
} }
function AppComponent_div_11_ng_template_30_tr_6_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_11_ng_template_30_tr_6_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63); const idx_r61 = ctx.index; _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r62.openNews(_r50, idx_r61 + 10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const idx_r61 = ctx.index;
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r53.data.news.articles[idx_r61 + 10].urlToImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r53.data.news.articles[idx_r61 + 10].title);
} }
function AppComponent_div_11_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_div_11_ng_template_30_ng_template_0_Template, 26, 4, "ng-template", null, 103, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_11_ng_template_30_tr_4_Template, 8, 2, "tr", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_div_11_ng_template_30_tr_6_Template, 8, 2, "tr", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r40.tmp);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r40.tmp);
} }
function AppComponent_div_11_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "highcharts-chart", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updateChange", function AppComponent_div_11_ng_template_32_Template_highcharts_chart_updateChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r64.updateFlag = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Highcharts", ctx_r41.Highcharts2)("options", ctx_r41.chartOptions2)("update", ctx_r41.updateFlag)("oneToOne", ctx_r41.oneToOneFlag)("constructorType", ctx_r41.chartConstructor);
} }
function AppComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_div_11__svg_svg_6_Template, 2, 0, "svg", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_div_11__svg_svg_7_Template, 2, 0, "svg", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AppComponent_div_11_span_16_Template, 3, 0, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AppComponent_div_11_span_17_Template, 3, 0, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_11_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); ctx_r66.bindValue(ctx_r66.ticker, ctx_r66.data.price.last, ctx_r66.data.summary.name, ctx_r66.quant2); return ctx_r66.open(_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Buy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-tab-group", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-tab", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AppComponent_div_11_ng_template_28_Template, 16, 9, "ng-template", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-tab", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AppComponent_div_11_ng_template_30_Template, 7, 2, "ng-template", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-tab", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AppComponent_div_11_ng_template_32_Template, 2, 5, "ng-template", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r9.ticker.toUpperCase(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.starBlank);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.starFilled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.data.summary.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.data.summary.exchangeCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r9.changeColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.data.price.last);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r9.changeColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.arrowUp);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.arrowDown);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r9.change.toFixed(2), " (", (ctx_r9.change * 100 / ctx_r9.data.price.prevClose).toFixed(2), "%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.curTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r9.changebgColor)("color", ctx_r9.changeColor2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.status_text);
} }
function AppComponent_div_12_div_3_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_12_div_3_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_12_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_12_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const x_r69 = ctx.$implicit; const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r72.requestData(x_r69.ticker); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_12_div_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const x_r69 = ctx.$implicit; const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r74.clickUnStar(x_r69.ticker); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_div_12_div_3_span_15_Template, 3, 0, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AppComponent_div_12_div_3_span_16_Template, 3, 0, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r69.ticker.toLocaleUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r69.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", x_r69.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r69.last);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", x_r69.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r69.change);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !x_r69.change);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", (x_r69.last - x_r69.prevClose).toFixed(2), " (", ((x_r69.last - x_r69.prevClose) * 100 / x_r69.prevClose).toFixed(2), "%)");
} }
function AppComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My Watchlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_12_div_3_Template, 18, 11, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.watchlist);
} }
function AppComponent_div_13_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_13_ng_template_1_Template_button_click_3_listener() { const modal_r78 = ctx.$implicit; return modal_r78.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Current Price: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Quantity: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_div_13_ng_template_1_Template_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r80.tmpQuant = $event; })("ngModelChange", function AppComponent_div_13_ng_template_1_Template_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r82.sellCheckValue($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Total: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_13_ng_template_1_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); const modal_r78 = ctx.$implicit; const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); modal_r78.close("Save click"); return ctx_r83.sell(ctx_r83.portfolioTicker, ctx_r83.portfolioPrice, ctx_r83.portfolioName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Sell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r76.ticker.toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r76.portfolioPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r76.tmpQuant);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r76.quant2);
} }
function AppComponent_div_13_div_5_span_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_13_div_5_span_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_13_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Quantity: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Avg. Cost / Share: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Total Cost: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "table", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "table", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Change: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Current Value: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Market Value: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "table", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, AppComponent_div_13_div_5_span_47_Template, 3, 0, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, AppComponent_div_13_div_5_span_48_Template, 3, 0, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_13_div_5_Template_button_click_58_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88); const x_r84 = ctx.$implicit; const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); ctx_r87.bindValue(x_r84.ticker, x_r84.last, x_r84.name, x_r84.quant); return ctx_r87.open(_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Buy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_13_div_5_Template_button_click_60_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88); const x_r84 = ctx.$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r89.bindValue(x_r84.ticker, x_r84.last, x_r84.name, x_r84.quant); return ctx_r89.open(_r75); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Sell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r84 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", x_r84.ticker.toLocaleUpperCase(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r84.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r84.quant);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r84.avgCost);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((x_r84.quant * x_r84.avgCost).toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", x_r84.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r84.change);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !x_r84.change);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (x_r84.last - x_r84.prevClose).toFixed(2), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", x_r84.color2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r84.last);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", x_r84.color2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((x_r84.last * x_r84.quant).toFixed(2));
} }
function AppComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_13_ng_template_1_Template, 24, 4, "ng-template", null, 144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My Portfolio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_13_div_5_Template, 62, 16, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.portfolio);
} }
highcharts_modules_stock__WEBPACK_IMPORTED_MODULE_5___default()(highcharts__WEBPACK_IMPORTED_MODULE_4__);
highcharts_indicators_indicators__WEBPACK_IMPORTED_MODULE_7___default()(highcharts__WEBPACK_IMPORTED_MODULE_4__);
highcharts_indicators_volume_by_price__WEBPACK_IMPORTED_MODULE_6___default()(highcharts__WEBPACK_IMPORTED_MODULE_4__);
/**
 * @title Display value autocomplete
 */
class AppComponent {
    constructor(modalService, router) {
        this.modalService = modalService;
        this.router = router;
        this.title = 'angular-hw8';
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('a');
        this.myFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({ myControl2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('b'),
            myControl3: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('c') });
        this.options = [];
        this.input = { name: '', ticker: '' };
        this.data = { isOpen: true, day: [], news: { articles: [{ source: { id: "business-insider", name: "Business Insider" }, description: '', title: '', publishedAt: '', url: '', urlToImage: '' }] }, price: {
                timestamp: '2020-11-04T21:00:00+00:00',
                bidSize: null,
                lastSaleTimestamp: '2020-11-04T21:00:00+00:00',
                low: 112.35,
                bidPrice: null,
                prevClose: 110.44,
                quoteTimestamp: '2020-11-04T21:00:00+00:00',
                last: 114.95,
                askSize: null,
                volume: 138235482,
                lastSize: null,
                ticker: 'AAPL',
                high: 115.59,
                mid: null,
                askPrice: null,
                open: 114.14,
                tngoLast: 114.95
            }, history: [], summary: {
                exchangeCode: 'NASDAQ',
                description: "Apple Inc. (Apple) designs, manufactures and markets mobile communication and media devices, personal computers, and portable digital music players, and a variety of related software, services, peripherals, networking solutions, and third-party digital content and applications. The Company's products and services include iPhone, iPad, Mac, iPod, Apple TV, a portfolio of consumer and professional software applications, the iOS and OS X operating systems, iCloud, and a variety of accessory, service and support offerings. The Company also delivers digital content and applications through the iTunes Store, App StoreSM, iBookstoreSM, and Mac App Store. The Company distributes its products worldwide through its retail stores, online stores, and direct sales force, as well as through third-party cellular network carriers, wholesalers, retailers, and value-added resellers. In February 2012, the Company acquired app-search engine Chomp.",
                ticker: 'AAPL',
                startDate: '1980-12-12',
                name: 'Apple Inc',
                endDate: '2020-11-04'
            } };
        this.ticker = '';
        this.showSearch = true;
        this.showContent = false;
        this.showWatchlist = false;
        this.showPortfolio = false;
        this.showSpinner = false;
        this.showSmallSpinner = false;
        this.showOptions = false;
        this.showTable1 = true;
        this.showTable2 = true;
        this.arrowUp = true;
        this.arrowDown = false;
        this.starBlank = true;
        this.starFilled = false;
        this.showAlert1 = false;
        this.showAlert2 = false;
        this.showAlert3 = false;
        this.showNav = true;
        this.showNav2 = false;
        this.showTitle = true;
        this.wannaShowPortfolio = false;
        this.wannaShowWatchlist = false;
        this.mode = true;
        this.closeResult = '';
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_4__; // required
        this.chartOptions = {}; // required
        this.Highcharts2 = highcharts__WEBPACK_IMPORTED_MODULE_4__; // required
        this.chartOptions2 = {}; // required
        this.chartConstructor = "stockChart";
        this.updateFlag = false; // optional boolean
        this.oneToOneFlag = true; // optional boolean, defaults to false
        this.runOutsideAngular = false; // optional boolean, defaults to false
        this.tmpSize = new Array(20);
        this.change = 0;
        this.isOpen = true;
        this.status_text = 'Market is Open';
        this.fbURL = '';
        this.twURL = '';
        this.news_link = '';
        this.changeColor = '#287824';
        this.changeColor2 = '#287824';
        this.changebgColor = '#c3dbbf';
        this.quant = 0;
        this.tmpQuant = 0;
        this.portfolioTicker = '';
        this.portfolioPrice = 0;
        this.portfolioName = '';
        this.quant2 = 0;
        this.watchlist = [];
        this.portfolio = [];
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__["NavigationStart"]) {
                if (event.url == '/watchlist')
                    this.showWatchlistButton();
                else if (event.url == '/portfolio')
                    this.showPortfolioButton();
                else if (event.url.indexOf('/details/') == 0) {
                    let tmpTicker = event.url.slice(9);
                    this.requestData(tmpTicker);
                }
            }
        });
    }
    ngOnInit() {
        this.myControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])('')).subscribe(value => { if (typeof value === 'undefined')
            return; this.request(typeof value === 'string' ? value : value.ticker); });
        //this.myFormGroup.controls.myControl2.valueChanges.subscribe(value => {this.checkValue('stock_quantity', this.tmpQuant)})
        this.id = setInterval(() => {
            var date = new Date();
            this.curTime = date.getFullYear() + '-' + ("0" + (date.getMonth() + 1)).slice(-2) + '-' + ("0" + date.getDate()).slice(-2)
                + '  ' + ("0" + date.getHours()).slice(-2) + ':' + ("0" + date.getMinutes()).slice(-2) + ':' + ("0" + date.getSeconds()).slice(-2);
        }, 1000);
        this.id2 = setInterval(() => {
            if (this.showContent)
                this.requestData(this.ticker);
        }, 15000);
        if (window.screen.width <= 576) {
            this.showNav = false;
            this.showNav2 = true;
        }
    }
    ngAfterViewInit() {
    }
    ngOnDestroy() {
        if (this.id) {
            clearInterval(this.id);
        }
        if (this.id2) {
            clearInterval(this.id2);
        }
    }
    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    openNews(content, idx) {
        console.log(idx);
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
        $('#news-title').text(this.data.news.articles[idx].source.name);
        $('#news-date').text(this.data.news.articles[idx].publishedAt);
        $('#news-body-title').text(this.data.news.articles[idx].title);
        $('#news-body').text(this.data.news.articles[idx].description);
        this.twURL = "https://twitter.com/intent/tweet?text=" + this.data.news.articles[idx].title + "&url=" + this.data.news.articles[idx].url;
        this.fbURL = "https://www.facebook.com/sharer/sharer.php?u=" + this.data.news.articles[idx].url + "%2F&amp;src=sdkpreparse";
        this.news_link = this.data.news.articles[idx].url;
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    request(stringValue) {
        this.showOptions = false;
        console.log(typeof stringValue);
        this.inputString = stringValue;
        if (this.inputString.length === 0) {
            this.options = [];
        }
        else {
            this.showSmallSpinner = true;
            this.options = [];
            const XHR = new XMLHttpRequest();
            XHR.onreadystatechange = () => {
                if (XHR.readyState === 4 && XHR.status === 200) {
                    this.showSmallSpinner = false;
                    const jsonObj = JSON.parse(XHR.responseText);
                    if (JSON.stringify(jsonObj) === '[]') {
                    }
                    else {
                        if (jsonObj.request === this.inputString) {
                            this.options = jsonObj.data;
                            console.log(this.options);
                        }
                        this.showOptions = true;
                    }
                }
            };
            const query = '/query/' + this.inputString;
            console.log(this.inputString + typeof this.inputString);
            XHR.open('GET', query, true);
            XHR.send(null);
        }
        return stringValue;
    }
    displayFn(user) {
        return user && user.name && user.ticker ? user.ticker : '';
    }
    _filter(ticker) {
        const filterValue = ticker.toLowerCase();
        return this.options.filter(option => option.ticker === null || option.ticker.toLowerCase().indexOf(filterValue) === 0);
    }
    updateSelectedValue(company) {
        console.log('kkkkk');
        this.input = company;
        console.log(this.input);
    }
    requestData(inputTicker) {
        this.showSearch = false;
        this.showWatchlist = false;
        this.showPortfolio = false;
        this.wannaShowPortfolio = false;
        this.wannaShowWatchlist = false;
        if (this.mode == true) {
            this.showSpinner = true;
            this.mode = false;
        }
        console.log(typeof inputTicker);
        // console.log(this.inputString)
        if (typeof inputTicker === 'object') {
            inputTicker = inputTicker.ticker;
        }
        this.ticker = inputTicker.toLowerCase();
        this.input = { name: '', ticker: '' };
        const XHR = new XMLHttpRequest();
        XHR.onreadystatechange = () => {
            if (XHR.readyState === 4 && XHR.status === 200) {
                const jsonObj = JSON.parse(XHR.responseText);
                if (JSON.stringify(jsonObj) === '{}') {
                    this.showSpinner = false;
                    this.showAlert1 = true;
                }
                else {
                    this.data = jsonObj;
                    this.update();
                    console.log(this.data);
                    this.createChart();
                    if (localStorage.getItem('watchlist') == null)
                        localStorage.setItem('watchlist', 'null');
                    if (localStorage.getItem('watchlist').indexOf('^' + this.data.summary.ticker.toLowerCase()) != -1) {
                        this.starBlank = false;
                        this.starFilled = true;
                    }
                    else {
                        // console.log('kkk')
                        this.starBlank = true;
                        this.starFilled = false;
                    }
                    if (localStorage.getItem(this.ticker) != null) {
                        let tmpString = localStorage.getItem(this.ticker);
                        let endIdx = tmpString.indexOf('^', tmpString.indexOf('^', tmpString.indexOf('^') + 1) + 1);
                        this.quant2 = (+tmpString.slice(tmpString.indexOf('^quant:') + 7, endIdx));
                        console.log(endIdx);
                    }
                    else
                        this.quant2 = 0;
                    this.showSpinner = false;
                    if (!this.showContent)
                        this.createChart2();
                    this.showContent = true;
                    this.tmp = new Array(this.data.news.articles.length / 2);
                }
            }
        };
        const query = '/search/details/' + this.ticker;
        XHR.open('GET', query, true);
        XHR.send(null);
    }
    createChart() {
        let input1 = [];
        let input2 = [];
        for (let i = 0; i < this.data.day.length; i++)
            input1.push([this.data.day[i]["date"], this.data.day[i]["close"]]);
        //console.log(this.data.day[0]["date"])
        this.chartOptions = {
            title: {
                text: this.ticker.toUpperCase()
            },
            plotOptions: {
                column: {
                    pointWidth: 5
                },
                series: {
                    pointPlacement: "on"
                }
            },
            xAxis: {
                type: 'datetime'
            },
            rangeSelector: {
                enabled: false
            },
            navigator: {
                series: {
                    type: 'area',
                    color: this.changeColor,
                    fillColor: {
                        linearGradient: {
                            x1: 1,
                            y1: 1,
                            x2: 1,
                            y2: 1
                        },
                        stops: [
                            [0, this.changeColor],
                            [1, this.changeColor]
                        ]
                    },
                }
            },
            series: [{
                    type: 'line',
                    data: input1,
                    gapSize: 5,
                    tooltip: {
                        valueDecimals: 2
                    },
                    color: this.changeColor,
                    threshold: null
                }]
        };
    }
    createChart2() {
        let ohlc = [];
        let volume = [];
        const dataLength = this.data.history.length;
        // set the allowed units for data grouping
        const groupingUnits = [[
                'week',
                [1] // allowed multiples
            ], [
                'month',
                [1, 2, 3, 4, 6]
            ]];
        for (let i = 0; i < dataLength; i += 1) {
            ohlc.push([
                this.data.history[i]["date"],
                this.data.history[i]["open"],
                this.data.history[i]["high"],
                this.data.history[i]["low"],
                this.data.history[i]["close"] // close
            ]);
            volume.push([
                this.data.history[i]["date"],
                this.data.history[i]["volume"] // the volume
            ]);
        }
        // console.log(dataLength + " " + ohlc)
        // create the chart
        this.chartOptions2 = {
            rangeSelector: {
                selected: 2
            },
            title: {
                text: this.ticker.toUpperCase() + ' Historical'
            },
            subtitle: {
                text: 'With SMA and Volume by Price technical indicators'
            },
            yAxis: [{
                    startOnTick: false,
                    endOnTick: false,
                    labels: {
                        align: 'right',
                        x: -3
                    },
                    title: {
                        text: 'OHLC'
                    },
                    height: '60%',
                    lineWidth: 2,
                    resize: {
                        enabled: true
                    }
                }, {
                    labels: {
                        align: 'right',
                        x: -3
                    },
                    title: {
                        text: 'Volume'
                    },
                    top: '65%',
                    height: '35%',
                    offset: 0,
                    lineWidth: 2
                }],
            tooltip: {
                split: true
            },
            plotOptions: {
                series: {
                    dataGrouping: {
                        // units: groupingUnits
                        approximation: 'average'
                    }
                }
            },
            series: [{
                    type: 'candlestick',
                    name: this.ticker.toUpperCase(),
                    id: this.ticker,
                    zIndex: 2,
                    data: ohlc
                }, {
                    type: 'column',
                    name: 'Volume',
                    id: 'volume',
                    data: volume,
                    yAxis: 1
                }, {
                    type: 'vbp',
                    linkedTo: this.ticker,
                    params: {
                        volumeSeriesID: 'volume'
                    },
                    dataLabels: {
                        enabled: false
                    },
                    zoneLines: {
                        enabled: false
                    }
                }, {
                    type: 'sma',
                    linkedTo: this.ticker,
                    zIndex: 1,
                    marker: {
                        enabled: false
                    }
                }]
        };
    }
    update() {
        this.change = this.data.price.last - this.data.price.prevClose;
        this.isOpen = this.data.isOpen;
        if (!this.isOpen) {
            this.status_text = 'Market Closed on ' + this.data.price.lastSaleTimestamp;
            this.showTable2 = false;
            this.changebgColor = "#F5D7D9";
            this.changeColor2 = "#F31100";
        }
        else {
            this.status_text = 'Market is Open';
            this.showTable2 = true;
            this.changebgColor = '#c3dbbf';
            this.changeColor2 = '#287824';
        }
        if (this.change >= 0) {
            this.changeColor = '#287824';
            // $('#arrow').append('')
            this.arrowUp = true;
            this.arrowDown = false;
        }
        else {
            this.changeColor = "#F31100";
            this.arrowUp = false;
            this.arrowDown = true;
        }
    }
    star(ticker, name) {
        this.starBlank = false;
        this.starFilled = true;
        localStorage.setItem("watchlist", localStorage.getItem('watchlist') + '^' + ticker + ";" + name);
    }
    unStar(ticker) {
        this.starBlank = true;
        this.starFilled = false;
        let tmpString = localStorage.getItem('watchlist');
        let endIdx = tmpString.slice(tmpString.indexOf('^' + ticker) + 1).indexOf('^');
        if (endIdx != -1)
            localStorage.setItem("watchlist", tmpString.slice(0, tmpString.indexOf('^' + ticker)) + tmpString.slice(tmpString.slice(tmpString.indexOf('^' + ticker) + 1).indexOf('^')));
        else
            localStorage.setItem("watchlist", tmpString.slice(0, tmpString.indexOf('^' + ticker)));
    }
    clickUnStar(ticker) {
        this.unStar(ticker);
        this.updateWatchlist();
    }
    showWatchlistButton() {
        this.wannaShowWatchlist = true;
        this.showAlert1 = false;
        this.showAlert2 = false;
        this.showAlert3 = false;
        this.mode = true;
        this.updateWatchlist();
        this.showSearch = false;
        this.showContent = false;
        this.showPortfolio = false;
        $('#search').css({ 'border-width': '0px', 'color': 'gainsboro' });
        $('#watchlist').css({ 'border-width': '1px', 'color': 'white' });
        $('#portfolio').css({ 'border-width': '0px', 'color': 'gainsboro' });
    }
    updateWatchlist() {
        this.showSpinner = true;
        this.showWatchlist = false;
        this.watchlist = [];
        // localStorage.clear()
        // localStorage.setItem("watchlist", localStorage.getItem('watchlist') + ' ' + "aapl" + ";" + "APPLE");
        // localStorage.setItem("watchlist", localStorage.getItem('watchlist') + ' ' + "fb" + ";" + "FACEBOOK");
        if (localStorage.getItem('watchlist') == null || localStorage.getItem('watchlist') == 'null' || localStorage.getItem('watchlist').indexOf('null') == -1 || localStorage.getItem('watchlist') == '') {
            this.showAlert2 = true;
            this.showSpinner = false;
        }
        else {
            let items = localStorage.getItem('watchlist').split('^');
            console.log(localStorage.getItem('watchlist'));
            let items_request = '';
            let item = {};
            for (let x of items) {
                console.log(x);
                if (x != "null" && x != null && x.indexOf('null') == -1) {
                    let x_title = x.split(';');
                    let newCompany = { ticker: x_title[0], name: x_title[1], prevClose: 0, last: 0, change: true, color: '#287824' };
                    item[x_title[0]] = newCompany;
                    items_request += x_title[0] + ",";
                }
            }
            const XHR = new XMLHttpRequest();
            XHR.onreadystatechange = () => {
                if (XHR.readyState === 4 && XHR.status === 200) {
                    const jsonObj = JSON.parse(XHR.responseText);
                    if (JSON.stringify(jsonObj) === '{}') {
                    }
                    else {
                        for (let y of jsonObj) {
                            let curTicker = y.ticker.toLowerCase();
                            item[curTicker].last = y.last;
                            item[curTicker].prevClose = y.prevClose;
                            item[curTicker].change = y.last - y.prevClose >= 0 ? true : false;
                            if (!item[curTicker].change)
                                item[curTicker].color = '#F31100';
                        }
                        for (let x of Object.values(item))
                            this.watchlist.push(x);
                        this.watchlist.sort((a, b) => a.ticker.localeCompare(b.ticker));
                        console.log(this.watchlist);
                        this.showSpinner = false;
                        this.showWatchlist = true;
                        console.log(this.showWatchlist);
                    }
                }
            };
            const query = '/items';
            XHR.open('POST', query, true);
            XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            XHR.send("x=" + items_request);
        }
    }
    showSearchButton() {
        this.wannaShowPortfolio = false;
        this.wannaShowWatchlist = false;
        this.showAlert1 = false;
        this.showAlert2 = false;
        this.showAlert3 = false;
        this.inputString = '';
        this.mode = true;
        this.showSpinner = true;
        this.showContent = false;
        this.showWatchlist = false;
        this.showPortfolio = false;
        this.showSpinner = false;
        this.showSearch = true;
        $('#search').css({ 'border-width': '1px', 'color': 'white' });
        $('#watchlist').css({ 'border-width': '0px', 'color': 'gainsboro' });
        $('#portfolio').css({ 'border-width': '0px', 'color': 'gainsboro' });
    }
    showPortfolioButton() {
        this.wannaShowPortfolio = true;
        this.showAlert1 = false;
        this.showAlert2 = false;
        this.showAlert3 = false;
        this.mode = true;
        this.updatePortfolio();
        this.showSearch = false;
        this.showContent = false;
        this.showWatchlist = false;
        $('#search').css({ 'border-width': '0px', 'color': 'gainsboro' });
        $('#watchlist').css({ 'border-width': '0px', 'color': 'gainsboro' });
        $('#portfolio').css({ 'border-width': '1px', 'color': 'white' });
    }
    updatePortfolio() {
        this.showSpinner = true;
        this.showPortfolio = false;
        this.portfolio = [];
        //this.watchlist = []
        // localStorage.clear()
        // localStorage.setItem("portfolio", "^aapl^fb");
        // localStorage.setItem("aapl", "^name:APPLE^quant:20^avgCost:5000");
        // localStorage.setItem("fb", "^name:FACEBOOK^quant:30^avgCost:4000");
        if (localStorage.getItem('portfolio') == null || localStorage.getItem('portfolio') == 'null' || localStorage.getItem('portfolio').indexOf('null') == -1 || localStorage.getItem('portfolio') == '') {
            this.showAlert3 = true;
            this.showSpinner = false;
        }
        else {
            let items = localStorage.getItem('portfolio').split('^');
            console.log(items);
            let items_request = '';
            let item = {};
            for (let x of items) {
                let name = '';
                let quant = '';
                let avgCost = '';
                if (x != "null" && x != null && x.indexOf('null') == -1 && x != '') {
                    // console.log(x)
                    let tmpString = localStorage.getItem(x);
                    let endIdx = tmpString.indexOf('^', 1);
                    name = tmpString.slice(tmpString.indexOf('^name:') + 6, endIdx);
                    endIdx = tmpString.indexOf('^', endIdx + 1);
                    quant = tmpString.slice(tmpString.indexOf('^quant:') + 7, endIdx);
                    console.log(tmpString);
                    console.log(endIdx);
                    avgCost = tmpString.slice(tmpString.indexOf('^avgCost:') + 9);
                    // let x_title = x.split(';')
                    let newCompany = { ticker: x, name: name, prevClose: 0, last: 0, change: true, color: '#287824', color2: '#287824', quant: +quant, avgCost: +avgCost };
                    item[x] = newCompany;
                    items_request += x + ",";
                }
            }
            const XHR = new XMLHttpRequest();
            XHR.onreadystatechange = () => {
                if (XHR.readyState === 4 && XHR.status === 200) {
                    const jsonObj = JSON.parse(XHR.responseText);
                    if (JSON.stringify(jsonObj) === '{}') {
                    }
                    else {
                        for (let y of jsonObj) {
                            let curTicker = y.ticker.toLowerCase();
                            item[curTicker].last = y.last;
                            item[curTicker].prevClose = y.prevClose;
                            item[curTicker].prevClose = y.prevClose;
                            item[curTicker].change = y.last - y.prevClose >= 0 ? true : false;
                            if (!item[curTicker].change)
                                item[curTicker].color = '#F31100';
                            if (item[curTicker].avgCost > y.last)
                                item[curTicker].color2 = '#F31100';
                            console.log(item[curTicker].quant);
                        }
                        for (let x of Object.values(item))
                            this.portfolio.push(x);
                        this.portfolio.sort((a, b) => a.ticker.localeCompare(b.ticker));
                        //console.log(this.watchlist)
                        this.showSpinner = false;
                        this.showPortfolio = true;
                    }
                }
            };
            const query = '/items';
            XHR.open('POST', query, true);
            XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            XHR.send("x=" + items_request);
        }
    }
    buy(ticker, price, name) {
        if (localStorage.getItem(ticker) == "null" || localStorage.getItem(ticker) == null) {
            localStorage.setItem('portfolio', localStorage.getItem('portfolio') + "^" + ticker);
            localStorage.setItem(ticker, "^name:" + name + "^quant:" + this.tmpQuant + "^avgCost:" + price);
            console.log(ticker + " " + this.tmpQuant + " " + price);
        }
        else {
            let tmpString = localStorage.getItem(ticker);
            let endIdx = tmpString.indexOf('^', tmpString.indexOf('^', tmpString.indexOf('^') + 1) + 1);
            let preQuant = +tmpString.slice(tmpString.indexOf('^quant:') + 7, endIdx);
            let preAvgCost = +tmpString.slice(tmpString.indexOf('^avgCost:') + 9);
            let newQuant = preQuant + this.tmpQuant;
            let newAvgCost = ((preQuant * preAvgCost + price * this.tmpQuant) / newQuant).toFixed(2);
            localStorage.setItem(ticker, "^name:" + name + "^quant:" + newQuant + "^avgCost:" + newAvgCost);
            console.log(newQuant + " " + newAvgCost);
        }
        this.quant2 += this.tmpQuant;
        console.log(this.quant2 + " " + this.tmpQuant);
        this.tmpQuant = 0;
        if (this.showPortfolio)
            this.updatePortfolio();
    }
    sell(ticker, price, name) {
        let tmpString = localStorage.getItem(ticker);
        let endIdx = tmpString.indexOf('^', tmpString.indexOf('^', tmpString.indexOf('^') + 1) + 1);
        let preQuant = +tmpString.slice(tmpString.indexOf('^quant:') + 7, endIdx);
        let preAvgCost = +tmpString.slice(tmpString.indexOf('^avgCost:') + 9);
        let newQuant = preQuant - this.tmpQuant;
        if (newQuant == 0) {
            localStorage.setItem(ticker, "null");
            let tmpString2 = localStorage.getItem('portfolio');
            localStorage.setItem('portfolio', tmpString2.slice(0, tmpString2.indexOf("^" + ticker)) + tmpString2.slice(tmpString2.indexOf("^" + ticker) + ticker.length + 1));
        }
        else {
            let newAvgCost = ((preQuant * preAvgCost - price * this.tmpQuant) / newQuant).toFixed(2);
            localStorage.setItem(ticker, "^name:" + name + "^quant:" + newQuant + "^avgCost:" + newAvgCost);
        }
        this.quant2 -= this.tmpQuant;
        this.tmpQuant = 0;
        this.updatePortfolio();
    }
    bindValue(ticker, price, name, quant) {
        this.portfolioTicker = ticker;
        this.portfolioPrice = price;
        this.portfolioName = name;
        this.quant2 = quant;
    }
    checkValue(event) {
        let value = this.tmpQuant;
        if (!Number.isInteger(value) || value <= 0)
            $('#buy_button').attr('disabled', 'disabled');
        else
            $('#buy_button').removeAttr('disabled');
    }
    sellCheckValue(event) {
        let value = this.tmpQuant;
        let total = this.quant2;
        if (!Number.isInteger(value) || value <= 0 || value > total)
            $('#sell_button').attr('disabled', 'disabled');
        else
            $('#sell_button').removeAttr('disabled');
        console.log('ok');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.newsElement = _t.first);
    } }, decls: 18, vars: 10, consts: [["id", "fb-root"], ["id", "navi", 4, "ngIf"], ["id", "navi_buttons2", 4, "ngIf"], ["id", "main_container"], ["content", ""], ["class", "alert alert-danger", "role", "alert", "style", "text-align: center; width: 76%; margin-top: 4vmin;margin-left: 12vw;", 4, "ngIf"], ["class", "alert alert-warning", "role", "alert", "style", "text-align: center; width: 76%; margin-top: 4vmin;margin-left: 12vw;", 4, "ngIf"], ["id", "spinner", "class", "custom-spinner-color", 4, "ngIf"], ["id", "search_container", 4, "ngIf"], ["id", "content_container", 4, "ngIf"], ["id", "watchlist_container", 4, "ngIf"], ["id", "portfolio_container", 4, "ngIf"], [1, "footer"], ["id", "navi"], ["id", "title"], ["id", "navi_buttons"], ["id", "search", 1, "navi_button", 3, "click"], ["id", "watchlist", 1, "navi_button", 3, "click"], ["id", "portfolio", 1, "navi_button", 3, "click"], ["id", "navi_buttons2"], [1, "pos-f-t"], [1, "navbar", "navbar-dark", 2, "background-color", "#6F4FFB", "display", "flex", "justify-content", "space-between", "align-items", "center", "/* position", "absolute", "*//* top", "0", "*/width", "100%", "padding", "3vmin", "/* padding-right", "1vw"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarToggleExternalContent", "aria-controls", "navbarToggleExternalContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarToggleExternalContent", 1, "collapse"], [1, "p-1", 2, "background-color", "#6F4FFB", "display", "flex", "flex-direction", "column", "justify-content", "center", "align-items", "start"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["id", "price"], [1, "form-group", "row"], ["for", "stock_quantity"], [1, "input-group", "col-7"], [1, "input_form"], ["id", "stock_quantity", "name", "quant", "type", "number", "step", "1", "min", "0", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["id", "total_quant"], ["id", "buy_button", "type", "button", "disabled", "disabled", 1, "btn", "btn-outline-primary", 3, "click"], ["role", "alert", 1, "alert", "alert-danger", 2, "text-align", "center", "width", "76%", "margin-top", "4vmin", "margin-left", "12vw"], ["role", "alert", 1, "alert", "alert-warning", 2, "text-align", "center", "width", "76%", "margin-top", "4vmin", "margin-left", "12vw"], ["id", "spinner", 1, "custom-spinner-color"], ["id", "search_container"], ["id", "main_title", 1, ""], ["id", "search_box"], ["id", "search_text_box", "type", "text", "name", "ticker", "size", "20", "autocomplete", "off", "placeholder", "Enter ticker name", 3, "ngModel", "formControl", "matAutocomplete", "ngModelChange", "selectionChange"], [3, "displayWith"], ["auto", "matAutocomplete"], [4, "ngIf"], ["type", "button", "id", "search_button", 3, "click"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-search"], ["fill-rule", "evenodd", "d", "M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"], ["fill-rule", "evenodd", "d", "M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "custom-spinner-color", 3, "diameter"], ["id", "content_container"], ["id", "content_sub_container"], ["id", "content_info"], ["id", "content_info_title"], [1, "title_1"], ["style", "color:black;margin-left: 2vmin", "width", "4vmin", "height", "4vmin", "viewBox", "0 0 16 16", "class", "bi bi-star", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 3, "click", 4, "ngIf"], ["style", "color:#FDD600;margin-left: 2vmin", "width", "4vmin", "height", "4vmin", "viewBox", "0 0 16 16", "class", "bi bi-star-fill", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 3, "click", 4, "ngIf"], [1, "title_2"], [1, "title_3"], ["id", "content_info_data"], ["style", "color: #287824", 4, "ngIf"], ["style", "color: #F31100", 4, "ngIf"], [1, "btn", "btn-outline-primary", 3, "click"], ["id", "status"], ["id", "status_text"], ["mat-align-tabs", "center"], ["label", "Summary"], ["matTabContent", ""], ["label", "Top News"], ["label", "Charts"], ["width", "4vmin", "height", "4vmin", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-star", 2, "color", "black", "margin-left", "2vmin", 3, "click"], ["fill-rule", "evenodd", "d", "M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"], ["width", "4vmin", "height", "4vmin", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-star-fill", 2, "color", "#FDD600", "margin-left", "2vmin", 3, "click"], ["d", "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"], [2, "color", "#287824"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-caret-up-fill"], ["d", "M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"], [2, "color", "#F31100"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-caret-down-fill"], ["d", "M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"], ["id", "summary_container"], ["id", "summary_details"], ["id", "summary_details_price"], ["id", "summary_details_price_sub_1", 4, "ngIf"], ["id", "summary_details_price_sub_2", 4, "ngIf"], ["id", "summary_details_description"], ["id", "start_date"], [2, "text-align", "justify"], ["id", "summary_chart", 2, "padding-left", "4vw", "margin-top", "3vh"], [2, "width", "100%", "height", "400px", "display", "block", 3, "Highcharts", "options", "update", "oneToOne", "constructorType", "updateChange"], ["id", "summary_details_price_sub_1"], ["id", "summary_details_price_table_1"], ["id", "summary_details_price_table_2"], ["id", "summary_details_price_sub_2"], ["id", "summary_details_price_table_3"], ["id", "summary_details_price_table_4"], ["news", ""], ["id", "news_container"], ["id", "news_table", 1, "table", "table-striped"], ["style", "", 4, "ngFor", "ngForOf"], ["id", "news_table_2", 1, "table", "table-striped"], ["id", "news-header"], ["id", "news-title", 1, "modal-title"], ["id", "news-date", 1, "modal-title"], ["id", "news-body-title", 2, "font-weight", "bold"], ["id", "news-body"], ["id", "news-link"], ["id", "news-link-a", "target", "_blank", 3, "href"], ["id", "social_media", 1, "card", 2, "height", "auto", "background-color", "white"], [1, "card-body", 2, "padding", "0"], [1, "card-text", 2, "padding-left", "2px"], ["id", "news_footer"], ["data-size", "large", 1, "twitter-share-button", 3, "href"], ["src", "https://img.icons8.com/color/240/000000/twitter.png", "width", "50px"], ["data-href", "https://developers.facebook.com/docs/plugins/", "data-layout", "button", "data-size", "large", 1, "fb-share-button"], ["target", "_blank", 1, "fb-xfbml-parse-ignore", 3, "href"], ["src", "https://img.icons8.com/color/240/000000/facebook.png", "width", "50px"], [2, "border", "0", "margin", "0"], [1, "card", 2, "margin", "0", "height", "auto", 3, "click"], [1, "card_frame"], ["width", "80px", "height", "80px", "alt", "Card image cap", 1, "card-img-left", 3, "src"], [1, "card-body"], [1, "card-text"], ["id", "main_chart", 2, "margin-bottom", "50px"], [2, "width", "100%", "height", "750px", "display", "block", 3, "Highcharts", "options", "update", "oneToOne", "constructorType", "updateChange"], ["id", "watchlist_container"], [1, "watchlist_title"], ["class", "card watchlist_card", "style", "width: 100%; height: auto;", 3, "click", 4, "ngFor", "ngForOf"], [1, "card", "watchlist_card", 2, "width", "100%", "height", "auto", 3, "click"], [1, "card-body", "watchlist_card_content"], ["type", "button", "id", "watchlist_close", "aria-label", "Close", 1, "close", 3, "click"], ["id", "card_title"], [1, "card-text", "title_1"], [1, "card-text", "title_2"], [1, "card-text", "title_1", 2, "font-size", "40px", "justify-content", "flex-end"], [1, "card-text", "title_2", 2, "font-size", "20px", "justify-content", "flex-end"], ["id", "portfolio_container"], ["content3", ""], ["class", "card border-primary mb-3 watchlist_card", "style", "width: 100%; height: auto;", 4, "ngFor", "ngForOf"], ["for", "stock_quantity2"], ["id", "stock_quantity2", "name", "quant", "type", "number", "step", "1", "min", "0", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "sell_button", "type", "button", "disabled", "disabled", 1, "btn", "btn-outline-primary", 3, "click"], [1, "card", "border-primary", "mb-3", "watchlist_card", 2, "width", "100%", "height", "auto"], [1, "card-header"], [1, "portfolio_card_title"], [1, "card-text", 2, "font-size", "33px", "margin-top", "11px", "margin-bottom", "11px", "margin-right", "12px"], [1, "card-text", 2, "font-size", "20px", "font-weight", "bold", "color", "gray"], [1, "card-body", "portfolio_card_content"], [1, "portfolio_table_container"], ["id", "portfolio_details_price_table_1"], ["id", "portfolio_details_price_table_2"], ["id", "portfolio_details_price_table_3"], ["id", "portfolio_details_price_table_4"], [1, "card-footer"], ["id", "portfolio_footer"], [1, "btn", "btn-outline-primary", 2, "background-color", "#006aff", 3, "click"], [1, "btn", "btn-outline-primary", 2, "background-color", "#ad0e0e", "margin-left", "12px", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_1_Template, 10, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_2_Template, 15, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_ng_template_4_Template, 25, 4, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_div_6_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_div_7_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_div_8_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_mat_spinner_9_Template, 1, 0, "mat-spinner", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_div_10_Template, 14, 6, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_div_11_Template, 33, 20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_div_12_Template, 4, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_div_13_Template, 6, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "footer", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Powered by Tiingo. Developed by De Huo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showNav);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showNav2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAlert1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAlert2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAlert3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSpinner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showWatchlist);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPortfolio);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavbar"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatSpinner"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabContent"], highcharts_angular__WEBPACK_IMPORTED_MODULE_14__["HighchartsChartComponent"]], styles: ["body[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    font: sans-serif;\r\n}\r\n@media (min-width: 992px){\r\n#navi[_ngcontent-%COMP%] {\r\n    height: 5vh;\r\n    padding-left: 1vw;\r\n    padding-right: 1vw;\r\n    background-color: #6F4FFB;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n#title[_ngcontent-%COMP%] {\r\n    color: white;\r\n    font-family: sans-serif;\r\n\tfont-weight: 400;\r\n\tmargin: 0;\r\n    \r\n}\r\n\r\n#navi_buttons[_ngcontent-%COMP%] {\r\n    \r\n    min-width: 15%;\r\n    height: inherit;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.navi_button[_ngcontent-%COMP%] {\r\n    height:70%;\r\n    width: 30%;\r\n    background-color: #6F4FFB;\r\n    border-radius: 10px;\r\n    border-color: white;\r\n    border-width: 1px;\r\n    \r\n    border-collapse: collapse;\r\n    border-style: solid;\r\n    color: white;\r\n    font-size: 0.9em;\r\n    font-weight: 400;\r\n}\r\n#watchlist[_ngcontent-%COMP%] {\r\n\tborder-width:0px;\r\n\tcolor: gainsboro;\r\n}\r\n#portfolio[_ngcontent-%COMP%] {\r\n\tborder-width:0px;\r\n\tcolor: gainsboro;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%] {\r\n\theight: 5vh;\r\n    position: fixed;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    background-color: gainsboro;\r\n    color: gray;\r\n    \r\n\tfont-family: sans-serif;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tz-index:999; \r\n}\r\n\r\n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n#main_container[_ngcontent-%COMP%] {\r\n\t\r\n}\r\n#main_title[_ngcontent-%COMP%] {\r\n    font-family: sans-serif;\r\n    font-size: 55px;\r\n    margin-bottom: 50px;\r\n    color: #262626;\r\n}\r\n#search_container[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 25vh;\r\n    left:0;\r\n    right:0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n#search_button[_ngcontent-%COMP%] {\r\n    border-width: 0;\r\n    color: #6F4FFB;\r\n\tbackground-color: white;\r\n\toutline: none;\r\n}\r\n\r\n#search_text_box[_ngcontent-%COMP%] {\r\n    border-width: 0;\r\n    margin:0;\r\n\tpadding:0;\r\n\toutline: none;\r\n}\r\n\r\n#search_box[_ngcontent-%COMP%] {\r\n    border-width: 2px;\r\n    border-style:solid;\r\n    border-radius: 15px;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    border-color: #6F4FFB;\r\n    padding: 3px;\r\n    padding-left: 15px;\r\n    padding-right: 10px;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n#content_sub_container[_ngcontent-%COMP%] {\r\n\tmargin-top: 5vh;\r\n\tmargin-left: 2vw;\r\n\twidth: 96vw;\r\n}\r\n\r\n#content_sub_container[_ngcontent-%COMP%] {\r\n\tmargin-top: 7vh;\r\n\tmargin-left: 16vw;\r\n\twidth: 68vw;\r\n}\r\n\r\n\r\n#content_info[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n#content_info_title[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n\talign-items: flex-start;\r\n}\r\n\r\n#content_info_data[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n\talign-items: flex-end;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: flex-start;\r\n\tmargin: 0;\r\n\tmargin-top: 4px;\r\n}\r\n.modal-footer[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n\tbackground-color: #45A640;\r\n\tborder: 0;\r\n\tcolor: white;\r\n\twidth: 3.5vw;\r\n}\r\n\r\n.title_1[_ngcontent-%COMP%] {\r\n\tfont-size: 50px;\r\n\tfont-family: sans-serif;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: flex-start;\r\n}\r\n\r\n.title_2[_ngcontent-%COMP%] {\r\n\tfont-size: xx-large;\r\n\tfont-weight: bold;\r\n\tfont-family: sans-serif;\r\n}\r\n.title_3[_ngcontent-%COMP%] {\r\n\tfont-size: large;\r\n\tfont-family: sans-serif;\r\n\tfont-weight: lighter;\r\n}\r\n\r\n#content_info_title[_ngcontent-%COMP%]   .title_2[_ngcontent-%COMP%] {\r\n\tcolor: #666666;\r\n}\r\n\r\n#content_info_data[_ngcontent-%COMP%]   .title_2[_ngcontent-%COMP%] {\r\n\tcolor: #287824;\r\n}\r\n\r\n#content_info_data[_ngcontent-%COMP%]   .title_1[_ngcontent-%COMP%] {\r\n\tcolor: #287824;\r\n}\r\n#status[_ngcontent-%COMP%] {\r\n\ttext-align: center;\r\n\tmargin-top: 10px;\r\n\tmargin-bottom: 50px;\r\n}\r\n#status_text[_ngcontent-%COMP%] {\r\n\tbackground-color: #c3dbbf;\r\n\tcolor: #287824;\r\n}\r\n[_nghost-%COMP%]     .mat-tab-label {\r\n\tdisplay: flex;\r\n\twidth: 40%;\r\n}\r\n\r\n\r\n#summary_details[_ngcontent-%COMP%] {\r\n\twidth: 50%;\r\n\tmargin-top: 3vh;\r\n\tpadding-right: 4vw;\r\n}\r\n#summary_details_price[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tmargin-bottom: 4vh;\r\n}\r\ntable[_ngcontent-%COMP%] {\r\n\tborder-collapse: collapse;\r\n\ttable-layout: fixed;\r\n}\r\n#summary_details_price_sub_1[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tmargin-right: 10%;\r\n}\r\n#summary_details_price_sub_2[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tmargin-left: 10%;\r\n}\r\n#summary_details_description[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n\ttext-align: center;\r\n}\r\n#summary_container[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n#summary_chart[_ngcontent-%COMP%]{\r\n\twidth: 50%;\r\n}\r\n\r\n#spinner[_ngcontent-%COMP%] {\r\n\t\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\tmargin-top: 5vh;\r\n}\r\n\r\n#news_container[_ngcontent-%COMP%] {\r\n\tmargin-top: 3vh;\r\n\tmargin-bottom: 10vh;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\t-webkit-border-: 0;\r\n}\r\n#news_table[_ngcontent-%COMP%], #news_table_2[_ngcontent-%COMP%] {\r\n\twidth: 50%;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n\tpadding: 1vh;\r\n\tpadding-left: 1.2vh;\r\n\tbackground-color: rgba(0,0,0,.03);\r\n}\r\n.card_frame[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-start;\r\n\talign-items: center;\r\n}\r\n#news-header[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: flex-start;\r\n}\r\n\r\n#news-title[_ngcontent-%COMP%] {\r\n\theight: -webkit-fit-content;\r\n\theight: -moz-fit-content;\r\n\theight: fit-content;\r\n\tmargin: 0;\r\n\tfont-weight: bold;\r\n}\r\n\r\n#news-date[_ngcontent-%COMP%] {\r\n\theight: -webkit-fit-content;\r\n\theight: -moz-fit-content;\r\n\theight: fit-content;\r\n\tmargin: 0;\r\n}\r\n\r\n#news_footer[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-start;\r\n\talign-items: center;\r\n}\r\n\r\n#summary_details_price_table_3[_ngcontent-%COMP%], #summary_details_price_table_1[_ngcontent-%COMP%]{\r\n\tmargin-right: 8px;\r\n}\r\n#summary_details_price_table_2[_ngcontent-%COMP%], #summary_details_price_table_4[_ngcontent-%COMP%]{\r\n\tmargin-left: 8px;\r\n}\r\n\r\n#watchlist_container[_ngcontent-%COMP%], #portfolio_container[_ngcontent-%COMP%] {\r\n\tmargin-top: 7vh;\r\n    margin-left: 22vw;\r\n\twidth: 56vw;\r\n\tmargin-bottom: 10vh;\r\n}\r\n.watchlist_card_content[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n}\r\n\r\n.watchlist_card[_ngcontent-%COMP%] {\r\n\tmargin-bottom: 2.5vmin;\r\n\tbackground-color: white;\r\n\tpadding:0;\r\n}\r\n\r\n#watchlist_close[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 5px;\r\n}\r\n.portfolio_card_content[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n}\r\n.portfolio_table_container[_ngcontent-%COMP%] {\r\n\twidth:48%;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n}\r\n.portfolio_card_title[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-start;\r\n\talign-items: center;\r\n}\r\n#portfolio_footer[_ngcontent-%COMP%] {\r\n\t\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n.card-footer[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-end;\r\n\talign-items: center;\r\n}\r\n.watchlist_title[_ngcontent-%COMP%] {\r\n\tfont-size: 50px; margin-top: 5vmin; margin-bottom: 10vmin;\r\n}\r\n\r\n.card-text[_ngcontent-%COMP%]   .title_1[_ngcontent-%COMP%] {\r\n\tfont-size: 40;\r\n}\r\n.card-text[_ngcontent-%COMP%]   .title_2[_ngcontent-%COMP%] {\r\n\tfont-size: 20;\r\n}\r\n#news_table_1[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\r\n\twidth: 32vmax; \r\n}\r\n#news_table_2[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\r\n\twidth: 32vmax; \r\n}\r\n\r\n#portfolio_details_price_table_1[_ngcontent-%COMP%], #portfolio_details_price_table_3[_ngcontent-%COMP%] {\r\n\tfont-size: 17px;\r\n}\r\n#portfolio_details_price_table_2[_ngcontent-%COMP%], #portfolio_details_price_table_4[_ngcontent-%COMP%] {\r\n\ttext-align: right; font-size: 17px;\r\n}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCO0FBQ0E7QUFDQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtDQUMxQixnQkFBZ0I7Q0FDaEIsU0FBUztJQUNOLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJO2lCQUNhO0lBQ2IsY0FBYztJQUNkLGVBQWU7SUFDZixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLCtCQUErQjtJQUMvQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsV0FBVztJQUNSLGVBQWU7SUFDZixPQUFPO0lBQ1AsU0FBUztJQUNULFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLHdCQUF3QjtDQUMzQix1QkFBdUI7Q0FDdkIsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsV0FBVztBQUNaOztBQUVBO0NBQ0MsU0FBUztDQUNULFVBQVU7QUFDWDtBQUNBO0NBQ0M7OzBCQUV5QjtBQUMxQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxNQUFNO0lBQ04sT0FBTztJQUNQLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7Q0FDakIsdUJBQXVCO0NBQ3ZCLGFBQWE7QUFDZDs7QUFFQTtJQUNJLGVBQWU7SUFDZixRQUFRO0NBQ1gsU0FBUztDQUNULGFBQWE7QUFDZDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLFdBQVc7QUFDWjs7O0FBR0E7Q0FDQyxhQUFhO0lBQ1YsOEJBQThCO0FBQ2xDOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qiw4QkFBOEI7Q0FDOUIsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qiw4QkFBOEI7Q0FDOUIscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQiwyQkFBMkI7Q0FDM0IsU0FBUztDQUNULGVBQWU7QUFDaEI7QUFDQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsOEJBQThCO0FBQy9COztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLFNBQVM7Q0FDVCxZQUFZO0NBQ1osWUFBWTtBQUNiOztBQUVBO0NBQ0MsZUFBZTtDQUNmLHVCQUF1QjtDQUN2QixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixpQkFBaUI7Q0FDakIsdUJBQXVCO0FBQ3hCO0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsdUJBQXVCO0NBQ3ZCLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixjQUFjO0FBQ2Y7QUFDQTtDQUNDLGFBQWE7Q0FDYixVQUFVO0FBQ1g7OztBQUdBO0NBQ0MsVUFBVTtDQUNWLGVBQWU7Q0FDZixrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQixnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLFVBQVU7QUFDWDs7QUFFQTtDQUNDOztjQUVhO0NBQ2IsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQixrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLFVBQVU7QUFDWDtBQUNBO0NBQ0MsWUFBWTtDQUNaLG1CQUFtQjtDQUNuQixpQ0FBaUM7QUFDbEM7QUFDQTtDQUNDLGFBQWE7Q0FDYiwyQkFBMkI7Q0FDM0IsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2Qix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQywyQkFBbUI7Q0FBbkIsd0JBQW1CO0NBQW5CLG1CQUFtQjtDQUNuQixTQUFTO0NBQ1QsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsMkJBQW1CO0NBQW5CLHdCQUFtQjtDQUFuQixtQkFBbUI7Q0FDbkIsU0FBUztBQUNWOztBQUVBO0NBQ0MsYUFBYTtDQUNiLDJCQUEyQjtDQUMzQixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGVBQWU7SUFDWixpQkFBaUI7Q0FDcEIsV0FBVztDQUNYLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsYUFBYTtDQUNiLDhCQUE4QjtDQUM5QixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLFNBQVM7QUFDVjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixNQUFNO0NBQ04sVUFBVTtBQUNYO0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsU0FBUztDQUNULGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsMkJBQTJCO0NBQzNCLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0M7V0FDVTtDQUNWLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxhQUFhO0NBQ2IseUJBQXlCO0NBQ3pCLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsZUFBZSxFQUFFLGlCQUFpQixFQUFFLHFCQUFxQjtBQUMxRDs7QUFFQTtDQUNDLGFBQWE7QUFDZDtBQUNBO0NBQ0MsYUFBYTtBQUNkO0FBQ0E7Q0FDQyxhQUFhO0FBQ2Q7QUFDQTtDQUNDLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7QUFDQTtDQUNDLGlCQUFpQixFQUFFLGVBQWU7QUFDbkM7QUFDQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250OiBzYW5zLXNlcmlmO1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCl7XHJcbiNuYXZpIHtcclxuICAgIGhlaWdodDogNXZoO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxdnc7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxdnc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkY0RkZCO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuI3RpdGxlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0bWFyZ2luOiAwO1xyXG4gICAgLyogdGV4dC1hbGlnbjogbGVmdDsgKi9cclxufVxyXG5cclxuI25hdmlfYnV0dG9ucyB7XHJcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMnZ3OyAqL1xyXG4gICAgbWluLXdpZHRoOiAxNSU7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm5hdmlfYnV0dG9uIHtcclxuICAgIGhlaWdodDo3MCU7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZGNEZGQjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAvKiBib3JkZXItYmxvY2stY29sb3I6IHdoaXRlOyAqL1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4jd2F0Y2hsaXN0IHtcclxuXHRib3JkZXItd2lkdGg6MHB4O1xyXG5cdGNvbG9yOiBnYWluc2Jvcm87XHJcbn1cclxuI3BvcnRmb2xpbyB7XHJcblx0Ym9yZGVyLXdpZHRoOjBweDtcclxuXHRjb2xvcjogZ2FpbnNib3JvO1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuXHRoZWlnaHQ6IDV2aDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybztcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xyXG5cdGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR6LWluZGV4Ojk5OTsgXHJcbn1cclxuXHJcbi5mb290ZXIgcCB7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDA7XHJcbn1cclxuI21haW5fY29udGFpbmVyIHtcclxuXHQvKiBkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cclxufVxyXG4jbWFpbl90aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogNTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICBjb2xvcjogIzI2MjYyNjtcclxufVxyXG4jc2VhcmNoX2NvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDI1dmg7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICByaWdodDowO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuI3NlYXJjaF9idXR0b24ge1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgY29sb3I6ICM2RjRGRkI7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuI3NlYXJjaF90ZXh0X2JveCB7XHJcbiAgICBib3JkZXItd2lkdGg6IDA7XHJcbiAgICBtYXJnaW46MDtcclxuXHRwYWRkaW5nOjA7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuI3NlYXJjaF9ib3gge1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICBib3JkZXItc3R5bGU6c29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNkY0RkZCO1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuI2NvbnRlbnRfc3ViX2NvbnRhaW5lciB7XHJcblx0bWFyZ2luLXRvcDogNXZoO1xyXG5cdG1hcmdpbi1sZWZ0OiAydnc7XHJcblx0d2lkdGg6IDk2dnc7XHJcbn1cclxuXHJcbiNjb250ZW50X3N1Yl9jb250YWluZXIge1xyXG5cdG1hcmdpbi10b3A6IDd2aDtcclxuXHRtYXJnaW4tbGVmdDogMTZ2dztcclxuXHR3aWR0aDogNjh2dztcclxufVxyXG5cclxuXHJcbiNjb250ZW50X2luZm8ge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbiNjb250ZW50X2luZm9fdGl0bGUge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbiNjb250ZW50X2luZm9fZGF0YSB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cdG1hcmdpbjogMDtcclxuXHRtYXJnaW4tdG9wOiA0cHg7XHJcbn1cclxuLm1vZGFsLWZvb3RlciB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmJ0biB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzQ1QTY0MDtcclxuXHRib3JkZXI6IDA7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdHdpZHRoOiAzLjV2dztcclxufVxyXG5cclxuLnRpdGxlXzEge1xyXG5cdGZvbnQtc2l6ZTogNTBweDtcclxuXHRmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4udGl0bGVfMiB7XHJcblx0Zm9udC1zaXplOiB4eC1sYXJnZTtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxufVxyXG4udGl0bGVfMyB7XHJcblx0Zm9udC1zaXplOiBsYXJnZTtcclxuXHRmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuXHRmb250LXdlaWdodDogbGlnaHRlcjtcclxufVxyXG5cclxuI2NvbnRlbnRfaW5mb190aXRsZSAudGl0bGVfMiB7XHJcblx0Y29sb3I6ICM2NjY2NjY7XHJcbn1cclxuXHJcbiNjb250ZW50X2luZm9fZGF0YSAudGl0bGVfMiB7XHJcblx0Y29sb3I6ICMyODc4MjQ7XHJcbn1cclxuXHJcbiNjb250ZW50X2luZm9fZGF0YSAudGl0bGVfMSB7XHJcblx0Y29sb3I6ICMyODc4MjQ7XHJcbn1cclxuI3N0YXR1cyB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdG1hcmdpbi10b3A6IDEwcHg7XHJcblx0bWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG4jc3RhdHVzX3RleHQge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNjM2RiYmY7XHJcblx0Y29sb3I6ICMyODc4MjQ7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdHdpZHRoOiA0MCU7XHJcbn1cclxuXHJcblxyXG4jc3VtbWFyeV9kZXRhaWxzIHtcclxuXHR3aWR0aDogNTAlO1xyXG5cdG1hcmdpbi10b3A6IDN2aDtcclxuXHRwYWRkaW5nLXJpZ2h0OiA0dnc7XHJcbn1cclxuI3N1bW1hcnlfZGV0YWlsc19wcmljZSB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdG1hcmdpbi1ib3R0b206IDR2aDtcclxufVxyXG50YWJsZSB7XHJcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuXHR0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG59XHJcbiNzdW1tYXJ5X2RldGFpbHNfcHJpY2Vfc3ViXzEge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRtYXJnaW4tcmlnaHQ6IDEwJTtcclxufVxyXG4jc3VtbWFyeV9kZXRhaWxzX3ByaWNlX3N1Yl8yIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0bWFyZ2luLWxlZnQ6IDEwJTtcclxufVxyXG4jc3VtbWFyeV9kZXRhaWxzX2Rlc2NyaXB0aW9uIGgye1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4jc3VtbWFyeV9jb250YWluZXIge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4jc3VtbWFyeV9jaGFydHtcclxuXHR3aWR0aDogNTAlO1xyXG59XHJcblxyXG4jc3Bpbm5lciB7XHJcblx0LyogcG9zaXRpb246IGFic29sdXRlO1xyXG5cdGxlZnQ6IDBweDtcclxuXHRyaWdodDogMHB4OyAqL1xyXG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cdG1hcmdpbi1yaWdodDogYXV0bztcclxuXHRtYXJnaW4tdG9wOiA1dmg7XHJcbn1cclxuXHJcbiNuZXdzX2NvbnRhaW5lciB7XHJcblx0bWFyZ2luLXRvcDogM3ZoO1xyXG5cdG1hcmdpbi1ib3R0b206IDEwdmg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdC13ZWJraXQtYm9yZGVyLTogMDtcclxufVxyXG4jbmV3c190YWJsZSwgI25ld3NfdGFibGVfMiB7XHJcblx0d2lkdGg6IDUwJTtcclxufVxyXG4uY2FyZCB7XHJcblx0cGFkZGluZzogMXZoO1xyXG5cdHBhZGRpbmctbGVmdDogMS4ydmg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuMDMpO1xyXG59XHJcbi5jYXJkX2ZyYW1lIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiNuZXdzLWhlYWRlciB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4jbmV3cy10aXRsZSB7XHJcblx0aGVpZ2h0OiBmaXQtY29udGVudDtcclxuXHRtYXJnaW46IDA7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbiNuZXdzLWRhdGUge1xyXG5cdGhlaWdodDogZml0LWNvbnRlbnQ7XHJcblx0bWFyZ2luOiAwO1xyXG59XHJcblxyXG4jbmV3c19mb290ZXIge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNzdW1tYXJ5X2RldGFpbHNfcHJpY2VfdGFibGVfMywgI3N1bW1hcnlfZGV0YWlsc19wcmljZV90YWJsZV8xe1xyXG5cdG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcbiNzdW1tYXJ5X2RldGFpbHNfcHJpY2VfdGFibGVfMiwgI3N1bW1hcnlfZGV0YWlsc19wcmljZV90YWJsZV80e1xyXG5cdG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuXHJcbiN3YXRjaGxpc3RfY29udGFpbmVyLCAjcG9ydGZvbGlvX2NvbnRhaW5lciB7XHJcblx0bWFyZ2luLXRvcDogN3ZoO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIydnc7XHJcblx0d2lkdGg6IDU2dnc7XHJcblx0bWFyZ2luLWJvdHRvbTogMTB2aDtcclxufVxyXG4ud2F0Y2hsaXN0X2NhcmRfY29udGVudCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLndhdGNobGlzdF9jYXJkIHtcclxuXHRtYXJnaW4tYm90dG9tOiAyLjV2bWluO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cdHBhZGRpbmc6MDtcclxufVxyXG5cclxuI3dhdGNobGlzdF9jbG9zZSB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMDtcclxuXHRyaWdodDogNXB4O1xyXG59XHJcbi5wb3J0Zm9saW9fY2FyZF9jb250ZW50IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5wb3J0Zm9saW9fdGFibGVfY29udGFpbmVyIHtcclxuXHR3aWR0aDo0OCU7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ucG9ydGZvbGlvX2NhcmRfdGl0bGUge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuI3BvcnRmb2xpb19mb290ZXIge1xyXG5cdC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRyaWdodDowOyAqL1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uY2FyZC1mb290ZXIge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi53YXRjaGxpc3RfdGl0bGUge1xyXG5cdGZvbnQtc2l6ZTogNTBweDsgbWFyZ2luLXRvcDogNXZtaW47IG1hcmdpbi1ib3R0b206IDEwdm1pbjtcclxufVxyXG5cclxuLmNhcmQtdGV4dCAudGl0bGVfMSB7XHJcblx0Zm9udC1zaXplOiA0MDtcclxufVxyXG4uY2FyZC10ZXh0IC50aXRsZV8yIHtcclxuXHRmb250LXNpemU6IDIwO1xyXG59XHJcbiNuZXdzX3RhYmxlXzEgLmNhcmQge1xyXG5cdHdpZHRoOiAzMnZtYXg7IFxyXG59XHJcbiNuZXdzX3RhYmxlXzIgLmNhcmQge1xyXG5cdHdpZHRoOiAzMnZtYXg7IFxyXG59XHJcblxyXG4jcG9ydGZvbGlvX2RldGFpbHNfcHJpY2VfdGFibGVfMSwgI3BvcnRmb2xpb19kZXRhaWxzX3ByaWNlX3RhYmxlXzMge1xyXG5cdGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG4jcG9ydGZvbGlvX2RldGFpbHNfcHJpY2VfdGFibGVfMiwgI3BvcnRmb2xpb19kZXRhaWxzX3ByaWNlX3RhYmxlXzQge1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0OyBmb250LXNpemU6IDE3cHg7XHJcbn1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */", "@media (max-width: 576px) { \r\n\r\n#navi[_ngcontent-%COMP%] {\r\n    height: 5vh;\r\n    padding-left: 1vw;\r\n    padding-right: 1vw;\r\n    background-color: #6F4FFB;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n#title[_ngcontent-%COMP%] {\r\n    color: white;\r\n    font-family: sans-serif;\r\n\tfont-weight: 400;\r\n\tmargin: 0;\r\n    \r\n}\r\n\r\n#navi_buttons[_ngcontent-%COMP%] {\r\n    \r\n    min-width: 15%;\r\n    height: inherit;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.navi_button[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n\theight: 3vh;\r\n\ttext-align: right;\r\n\tfont-size: medium;\r\n\tpadding-right: 3vw;\r\n    background-color: #6F4FFB;\r\n    border-radius: 10px;\r\n    border-color: white;\r\n    border-width: 1px;\r\n    \r\n    border-collapse: collapse;\r\n    border-style: solid;\r\n    color: white;\r\n    font-size: 0.9em;\r\n    font-weight: 400;\r\n}\r\n#watchlist[_ngcontent-%COMP%] {\r\n\tborder-width:0px;\r\n\tcolor: gainsboro;\r\n}\r\n#portfolio[_ngcontent-%COMP%] {\r\n\tborder-width:0px;\r\n\tcolor: gainsboro;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%] {\r\n\theight: 5vh;\r\n    position: fixed;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    background-color: gainsboro;\r\n    color: gray;\r\n    \r\n\tfont-family: sans-serif;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tz-index:999; \r\n}\r\n\r\n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n#main_container[_ngcontent-%COMP%] {\r\n\t\r\n}\r\n#main_title[_ngcontent-%COMP%] {\r\n    font-family: sans-serif;\r\n    font-size: 55px;\r\n    margin-bottom: 50px;\r\n\tcolor: #262626;\r\n\tline-height: 140%;\r\n\ttext-align: center;\r\n}\r\n#search_container[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 25vh;\r\n    left:0;\r\n    right:0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n#search_button[_ngcontent-%COMP%] {\r\n    border-width: 0;\r\n    color: #6F4FFB;\r\n\tbackground-color: white;\r\n\toutline: none;\r\n}\r\n\r\n#search_text_box[_ngcontent-%COMP%] {\r\n    border-width: 0;\r\n    margin:0;\r\n\tpadding:0;\r\n\toutline: none;\r\n}\r\n\r\n#search_box[_ngcontent-%COMP%] {\r\n    border-width: 2px;\r\n    border-style:solid;\r\n    border-radius: 15px;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    border-color: #6F4FFB;\r\n    padding: 3px;\r\n    padding-left: 15px;\r\n    padding-right: 10px;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n#content_sub_container[_ngcontent-%COMP%] {\r\n\tmargin-top: 4vmin;\r\n\tmargin-left:  4vmin;\r\n\twidth: 92vw;\r\n}\r\n\r\n\r\n#content_info[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n#content_info_title[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n\talign-items: flex-start;\r\n}\r\n\r\n#content_info_data[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n\talign-items: flex-end;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: flex-start;\r\n\tmargin: 0;\r\n\tmargin-top: 4px;\r\n}\r\n.modal-footer[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n\tbackground-color: #45A640;\r\n\tborder: 0;\r\n\tcolor: white;\r\n\twidth: 6.5vmax;\r\n}\r\n\r\n.title_1[_ngcontent-%COMP%] {\r\n\tfont-size: 30px;\r\n\tfont-family: sans-serif;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: flex-start;\r\n\tmargin-bottom: 2vmin;\r\n}\r\n\r\n.title_2[_ngcontent-%COMP%] {\r\n\tfont-size: large;\r\n\tfont-weight: bold;\r\n\tfont-family: sans-serif;\r\n\tmargin-bottom: 2vmin;\r\n}\r\n.title_3[_ngcontent-%COMP%] {\r\n\tfont-size: medium;\r\n\tfont-family: sans-serif;\r\n\tfont-weight: lighter;\r\n}\r\n\r\n#content_info_title[_ngcontent-%COMP%]   .title_2[_ngcontent-%COMP%] {\r\n\tcolor: #666666;\r\n}\r\n\r\n#content_info_data[_ngcontent-%COMP%]   .title_2[_ngcontent-%COMP%] {\r\n\ttext-align: right;\r\n\tcolor: #287824;\r\n}\r\n\r\n#content_info_data[_ngcontent-%COMP%]   .title_1[_ngcontent-%COMP%] {\r\n\ttext-align: right;\r\n\tcolor: #287824;\r\n}\r\n#status[_ngcontent-%COMP%] {\r\n\ttext-align: center;\r\n\tmargin-top: 10px;\r\n\tmargin-bottom: 20px;\r\n}\r\n#status_text[_ngcontent-%COMP%] {\r\n\tbackground-color: #c3dbbf;\r\n\tcolor: #287824;\r\n}\r\n[_nghost-%COMP%]     .mat-tab-label {\r\n\tdisplay: flex;\r\n\twidth: 40%;\r\n}\r\n\r\n\r\n#summary_details[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n\tmargin-top: 3vh;\r\n\tpadding-right: 4vw;\r\n}\r\n#summary_details_price[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tmargin-bottom: 4vh;\r\n}\r\ntable[_ngcontent-%COMP%] {\r\n\tborder-collapse: collapse;\r\n\ttable-layout: fixed;\r\n}\r\n#summary_details_price_sub_1[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tmargin-right: 10%;\r\n}\r\n#summary_details_price_sub_2[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tmargin-left: 10%;\r\n}\r\n#summary_details_description[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n\ttext-align: center;\r\n}\r\n#summary_container[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n#summary_chart[_ngcontent-%COMP%]{\r\n\twidth: 100%;\r\n\tmargin-bottom: 5vmax;\r\n}\r\n\r\n#spinner[_ngcontent-%COMP%] {\r\n\t\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\tmargin-top: 5vh;\r\n}\r\n\r\n#news_container[_ngcontent-%COMP%] {\r\n\tmargin-top: 3vh;\r\n\tmargin-bottom: 10vh;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\t-webkit-border-: 0;\r\n}\r\n#news_table[_ngcontent-%COMP%], #news_table_2[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n\tpadding: 1vmin;\r\n\tpadding-left: 1.21vmin;\r\n\tbackground-color: rgba(0,0,0,.03);\r\n\theight: -webkit-fit-content;\r\n\theight: -moz-fit-content;\r\n\theight: fit-content;\r\n}\r\n.card_frame[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-start;\r\n\talign-items: center;\r\n}\r\n#news-header[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: flex-start;\r\n}\r\n\r\n#news-title[_ngcontent-%COMP%] {\r\n\theight: -webkit-fit-content;\r\n\theight: -moz-fit-content;\r\n\theight: fit-content;\r\n\tmargin: 0;\r\n\tfont-weight: bold;\r\n}\r\n\r\n#news-date[_ngcontent-%COMP%] {\r\n\theight: -webkit-fit-content;\r\n\theight: -moz-fit-content;\r\n\theight: fit-content;\r\n\tmargin: 0;\r\n}\r\n\r\n#news_footer[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-start;\r\n\talign-items: center;\r\n}\r\n\r\n#summary_details_price_table_3[_ngcontent-%COMP%], #summary_details_price_table_1[_ngcontent-%COMP%]{\r\n\tmargin-right: 8px;\r\n}\r\n#summary_details_price_table_2[_ngcontent-%COMP%], #summary_details_price_table_4[_ngcontent-%COMP%]{\r\n\tmargin-left: 8px;\r\n}\r\n\r\n#watchlist_container[_ngcontent-%COMP%], #portfolio_container[_ngcontent-%COMP%] {\r\n\r\n\tmargin-bottom: 10vh;\r\n\tmargin-top: 4vmin;\r\n\tmargin-left:  4vmin;\r\n\twidth: 92vw;\r\n}\r\n.watchlist_card_content[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n}\r\n\r\n.watchlist_card[_ngcontent-%COMP%] {\r\n\tmargin-bottom: 2.5vmin;\r\n\tbackground-color: white;\r\n\tpadding:0;\r\n\theight: 10vmax;\r\n}\r\n\r\n#watchlist_close[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 5px;\r\n}\r\n.portfolio_card_content[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n}\r\n.portfolio_table_container[_ngcontent-%COMP%] {\r\n\twidth:48%;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n}\r\n.portfolio_card_title[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-start;\r\n\talign-items: center;\r\n}\r\n#portfolio_footer[_ngcontent-%COMP%] {\r\n\t\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n.card-footer[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-end;\r\n\talign-items: center;\r\n}\r\n\r\n.watchlist_title[_ngcontent-%COMP%] {\r\n\tfont-size: 28px; margin-top: 5vmin; margin-bottom: 10vmin;\r\n}\r\n\r\n#news_table_1[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\r\n\twidth: 100%; \r\n}\r\n#news_table_2[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\r\n\twidth: 100%; \r\n}\r\n#portfolio_details_price_table_1[_ngcontent-%COMP%], #portfolio_details_price_table_3[_ngcontent-%COMP%] {\r\n\tfont-size: 12px;\r\n}\r\n#portfolio_details_price_table_2[_ngcontent-%COMP%], #portfolio_details_price_table_4[_ngcontent-%COMP%] {\r\n\ttext-align: right; font-size: 11px;\r\n}\r\n\r\n\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvMmFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0NBQzFCLGdCQUFnQjtDQUNoQixTQUFTO0lBQ04sc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0k7aUJBQ2E7SUFDYixjQUFjO0lBQ2QsZUFBZTtJQUNmLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztDQUNkLFdBQVc7Q0FDWCxpQkFBaUI7Q0FDakIsaUJBQWlCO0NBQ2pCLGtCQUFrQjtJQUNmLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQiwrQkFBK0I7SUFDL0IseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLFdBQVc7SUFDUixlQUFlO0lBQ2YsT0FBTztJQUNQLFNBQVM7SUFDVCxXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCx3QkFBd0I7Q0FDM0IsdUJBQXVCO0NBQ3ZCLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLFdBQVc7QUFDWjs7QUFFQTtDQUNDLFNBQVM7Q0FDVCxVQUFVO0FBQ1g7QUFDQTtDQUNDOzswQkFFeUI7QUFDMUI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsbUJBQW1CO0NBQ3RCLGNBQWM7Q0FDZCxpQkFBaUI7Q0FDakIsa0JBQWtCO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULE1BQU07SUFDTixPQUFPO0lBQ1AsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztDQUNqQix1QkFBdUI7Q0FDdkIsYUFBYTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7Q0FDWCxTQUFTO0NBQ1QsYUFBYTtBQUNkOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7OztBQUdBO0NBQ0MsaUJBQWlCO0NBQ2pCLG1CQUFtQjtDQUNuQixXQUFXO0FBQ1o7OztBQUdBO0NBQ0MsYUFBYTtJQUNWLDhCQUE4QjtBQUNsQzs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsOEJBQThCO0NBQzlCLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsOEJBQThCO0NBQzlCLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsMkJBQTJCO0NBQzNCLFNBQVM7Q0FDVCxlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLDhCQUE4QjtBQUMvQjs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixTQUFTO0NBQ1QsWUFBWTtDQUNaLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGVBQWU7Q0FDZix1QkFBdUI7Q0FDdkIsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQiwyQkFBMkI7Q0FDM0Isb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQix1QkFBdUI7Q0FDdkIsb0JBQW9CO0FBQ3JCO0FBQ0E7Q0FDQyxpQkFBaUI7Q0FDakIsdUJBQXVCO0NBQ3ZCLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsY0FBYztBQUNmO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGNBQWM7QUFDZjtBQUNBO0NBQ0MsYUFBYTtDQUNiLFVBQVU7QUFDWDs7O0FBR0E7Q0FDQyxXQUFXO0NBQ1gsZUFBZTtDQUNmLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQixpQkFBaUI7QUFDbEI7QUFDQTtDQUNDLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0Msa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLFdBQVc7Q0FDWCxvQkFBb0I7QUFDckI7O0FBRUE7Q0FDQzs7Y0FFYTtDQUNiLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsV0FBVztBQUNaO0FBQ0E7Q0FDQyxjQUFjO0NBQ2Qsc0JBQXNCO0NBQ3RCLGlDQUFpQztDQUNqQywyQkFBbUI7Q0FBbkIsd0JBQW1CO0NBQW5CLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsYUFBYTtDQUNiLDJCQUEyQjtDQUMzQixtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLDJCQUFtQjtDQUFuQix3QkFBbUI7Q0FBbkIsbUJBQW1CO0NBQ25CLFNBQVM7Q0FDVCxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQywyQkFBbUI7Q0FBbkIsd0JBQW1CO0NBQW5CLG1CQUFtQjtDQUNuQixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsMkJBQTJCO0NBQzNCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBOztDQUVDLG1CQUFtQjtDQUNuQixpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CLFdBQVc7QUFDWjtBQUNBO0NBQ0MsYUFBYTtDQUNiLDhCQUE4QjtDQUM5QixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLFNBQVM7Q0FDVCxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsTUFBTTtDQUNOLFVBQVU7QUFDWDtBQUNBO0NBQ0MsYUFBYTtDQUNiLDhCQUE4QjtDQUM5QixtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLFNBQVM7Q0FDVCxhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsYUFBYTtDQUNiLDJCQUEyQjtDQUMzQixtQkFBbUI7QUFDcEI7QUFDQTtDQUNDO1dBQ1U7Q0FDVixhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsYUFBYTtDQUNiLHlCQUF5QjtDQUN6QixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxlQUFlLEVBQUUsaUJBQWlCLEVBQUUscUJBQXFCO0FBQzFEOztBQUVBO0NBQ0MsV0FBVztBQUNaO0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7QUFDQTtDQUNDLGVBQWU7QUFDaEI7QUFDQTtDQUNDLGlCQUFpQixFQUFFLGVBQWU7QUFDbkM7Ozs7QUFJQSIsImZpbGUiOiJzcmMvYXBwLzJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkgeyBcclxuXHJcbiNuYXZpIHtcclxuICAgIGhlaWdodDogNXZoO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxdnc7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxdnc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkY0RkZCO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuI3RpdGxlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0bWFyZ2luOiAwO1xyXG4gICAgLyogdGV4dC1hbGlnbjogbGVmdDsgKi9cclxufVxyXG5cclxuI25hdmlfYnV0dG9ucyB7XHJcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMnZ3OyAqL1xyXG4gICAgbWluLXdpZHRoOiAxNSU7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm5hdmlfYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogM3ZoO1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cdGZvbnQtc2l6ZTogbWVkaXVtO1xyXG5cdHBhZGRpbmctcmlnaHQ6IDN2dztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2RjRGRkI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgLyogYm9yZGVyLWJsb2NrLWNvbG9yOiB3aGl0ZTsgKi9cclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuI3dhdGNobGlzdCB7XHJcblx0Ym9yZGVyLXdpZHRoOjBweDtcclxuXHRjb2xvcjogZ2FpbnNib3JvO1xyXG59XHJcbiNwb3J0Zm9saW8ge1xyXG5cdGJvcmRlci13aWR0aDowcHg7XHJcblx0Y29sb3I6IGdhaW5zYm9ybztcclxufVxyXG5cclxuLmZvb3RlciB7XHJcblx0aGVpZ2h0OiA1dmg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cclxuXHRmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0ei1pbmRleDo5OTk7IFxyXG59XHJcblxyXG4uZm9vdGVyIHAge1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiAwO1xyXG59XHJcbiNtYWluX2NvbnRhaW5lciB7XHJcblx0LyogZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXHJcbn1cclxuI21haW5fdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDU1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG5cdGNvbG9yOiAjMjYyNjI2O1xyXG5cdGxpbmUtaGVpZ2h0OiAxNDAlO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4jc2VhcmNoX2NvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDI1dmg7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICByaWdodDowO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuI3NlYXJjaF9idXR0b24ge1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgY29sb3I6ICM2RjRGRkI7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuI3NlYXJjaF90ZXh0X2JveCB7XHJcbiAgICBib3JkZXItd2lkdGg6IDA7XHJcbiAgICBtYXJnaW46MDtcclxuXHRwYWRkaW5nOjA7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuI3NlYXJjaF9ib3gge1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICBib3JkZXItc3R5bGU6c29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNkY0RkZCO1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbiNjb250ZW50X3N1Yl9jb250YWluZXIge1xyXG5cdG1hcmdpbi10b3A6IDR2bWluO1xyXG5cdG1hcmdpbi1sZWZ0OiAgNHZtaW47XHJcblx0d2lkdGg6IDkydnc7XHJcbn1cclxuXHJcblxyXG4jY29udGVudF9pbmZvIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4jY29udGVudF9pbmZvX3RpdGxlIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4jY29udGVudF9pbmZvX2RhdGEge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHRtYXJnaW46IDA7XHJcblx0bWFyZ2luLXRvcDogNHB4O1xyXG59XHJcbi5tb2RhbC1mb290ZXIge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5idG4ge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM0NUE2NDA7XHJcblx0Ym9yZGVyOiAwO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHR3aWR0aDogNi41dm1heDtcclxufVxyXG5cclxuLnRpdGxlXzEge1xyXG5cdGZvbnQtc2l6ZTogMzBweDtcclxuXHRmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cdG1hcmdpbi1ib3R0b206IDJ2bWluO1xyXG59XHJcblxyXG4udGl0bGVfMiB7XHJcblx0Zm9udC1zaXplOiBsYXJnZTtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuXHRtYXJnaW4tYm90dG9tOiAydm1pbjtcclxufVxyXG4udGl0bGVfMyB7XHJcblx0Zm9udC1zaXplOiBtZWRpdW07XHJcblx0Zm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcblx0Zm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbn1cclxuXHJcbiNjb250ZW50X2luZm9fdGl0bGUgLnRpdGxlXzIge1xyXG5cdGNvbG9yOiAjNjY2NjY2O1xyXG59XHJcblxyXG4jY29udGVudF9pbmZvX2RhdGEgLnRpdGxlXzIge1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cdGNvbG9yOiAjMjg3ODI0O1xyXG59XHJcblxyXG4jY29udGVudF9pbmZvX2RhdGEgLnRpdGxlXzEge1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cdGNvbG9yOiAjMjg3ODI0O1xyXG59XHJcbiNzdGF0dXMge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRtYXJnaW4tdG9wOiAxMHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuI3N0YXR1c190ZXh0IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYzNkYmJmO1xyXG5cdGNvbG9yOiAjMjg3ODI0O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAubWF0LXRhYi1sYWJlbCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHR3aWR0aDogNDAlO1xyXG59XHJcblxyXG5cclxuI3N1bW1hcnlfZGV0YWlscyB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0bWFyZ2luLXRvcDogM3ZoO1xyXG5cdHBhZGRpbmctcmlnaHQ6IDR2dztcclxufVxyXG4jc3VtbWFyeV9kZXRhaWxzX3ByaWNlIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0bWFyZ2luLWJvdHRvbTogNHZoO1xyXG59XHJcbnRhYmxlIHtcclxuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG5cdHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbn1cclxuI3N1bW1hcnlfZGV0YWlsc19wcmljZV9zdWJfMSB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdG1hcmdpbi1yaWdodDogMTAlO1xyXG59XHJcbiNzdW1tYXJ5X2RldGFpbHNfcHJpY2Vfc3ViXzIge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRtYXJnaW4tbGVmdDogMTAlO1xyXG59XHJcbiNzdW1tYXJ5X2RldGFpbHNfZGVzY3JpcHRpb24gaDJ7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiNzdW1tYXJ5X2NvbnRhaW5lciB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuI3N1bW1hcnlfY2hhcnR7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0bWFyZ2luLWJvdHRvbTogNXZtYXg7XHJcbn1cclxuXHJcbiNzcGlubmVyIHtcclxuXHQvKiBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0bGVmdDogMHB4O1xyXG5cdHJpZ2h0OiAwcHg7ICovXHJcblx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcblx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cdG1hcmdpbi10b3A6IDV2aDtcclxufVxyXG5cclxuI25ld3NfY29udGFpbmVyIHtcclxuXHRtYXJnaW4tdG9wOiAzdmg7XHJcblx0bWFyZ2luLWJvdHRvbTogMTB2aDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHQtd2Via2l0LWJvcmRlci06IDA7XHJcbn1cclxuI25ld3NfdGFibGUsICNuZXdzX3RhYmxlXzIge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jYXJkIHtcclxuXHRwYWRkaW5nOiAxdm1pbjtcclxuXHRwYWRkaW5nLWxlZnQ6IDEuMjF2bWluO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjAzKTtcclxuXHRoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG59XHJcbi5jYXJkX2ZyYW1lIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiNuZXdzLWhlYWRlciB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4jbmV3cy10aXRsZSB7XHJcblx0aGVpZ2h0OiBmaXQtY29udGVudDtcclxuXHRtYXJnaW46IDA7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbiNuZXdzLWRhdGUge1xyXG5cdGhlaWdodDogZml0LWNvbnRlbnQ7XHJcblx0bWFyZ2luOiAwO1xyXG59XHJcblxyXG4jbmV3c19mb290ZXIge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNzdW1tYXJ5X2RldGFpbHNfcHJpY2VfdGFibGVfMywgI3N1bW1hcnlfZGV0YWlsc19wcmljZV90YWJsZV8xe1xyXG5cdG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcbiNzdW1tYXJ5X2RldGFpbHNfcHJpY2VfdGFibGVfMiwgI3N1bW1hcnlfZGV0YWlsc19wcmljZV90YWJsZV80e1xyXG5cdG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuXHJcbiN3YXRjaGxpc3RfY29udGFpbmVyLCAjcG9ydGZvbGlvX2NvbnRhaW5lciB7XHJcblxyXG5cdG1hcmdpbi1ib3R0b206IDEwdmg7XHJcblx0bWFyZ2luLXRvcDogNHZtaW47XHJcblx0bWFyZ2luLWxlZnQ6ICA0dm1pbjtcclxuXHR3aWR0aDogOTJ2dztcclxufVxyXG4ud2F0Y2hsaXN0X2NhcmRfY29udGVudCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLndhdGNobGlzdF9jYXJkIHtcclxuXHRtYXJnaW4tYm90dG9tOiAyLjV2bWluO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cdHBhZGRpbmc6MDtcclxuXHRoZWlnaHQ6IDEwdm1heDtcclxufVxyXG5cclxuI3dhdGNobGlzdF9jbG9zZSB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMDtcclxuXHRyaWdodDogNXB4O1xyXG59XHJcbi5wb3J0Zm9saW9fY2FyZF9jb250ZW50IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5wb3J0Zm9saW9fdGFibGVfY29udGFpbmVyIHtcclxuXHR3aWR0aDo0OCU7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ucG9ydGZvbGlvX2NhcmRfdGl0bGUge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuI3BvcnRmb2xpb19mb290ZXIge1xyXG5cdC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRyaWdodDowOyAqL1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uY2FyZC1mb290ZXIge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ud2F0Y2hsaXN0X3RpdGxlIHtcclxuXHRmb250LXNpemU6IDI4cHg7IG1hcmdpbi10b3A6IDV2bWluOyBtYXJnaW4tYm90dG9tOiAxMHZtaW47XHJcbn1cclxuXHJcbiNuZXdzX3RhYmxlXzEgLmNhcmQge1xyXG5cdHdpZHRoOiAxMDAlOyBcclxufVxyXG4jbmV3c190YWJsZV8yIC5jYXJkIHtcclxuXHR3aWR0aDogMTAwJTsgXHJcbn1cclxuI3BvcnRmb2xpb19kZXRhaWxzX3ByaWNlX3RhYmxlXzEsICNwb3J0Zm9saW9fZGV0YWlsc19wcmljZV90YWJsZV8zIHtcclxuXHRmb250LXNpemU6IDEycHg7XHJcbn1cclxuI3BvcnRmb2xpb19kZXRhaWxzX3ByaWNlX3RhYmxlXzIsICNwb3J0Zm9saW9fZGV0YWlsc19wcmljZV90YWJsZV80IHtcclxuXHR0ZXh0LWFsaWduOiByaWdodDsgZm9udC1zaXplOiAxMXB4O1xyXG59XHJcblxyXG5cclxuXHJcbn0iXX0= */", "@media screen and (max-width: 767px) {\n\n    .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n      width: 100%;\n    }\n\n    .card[_ngcontent-%COMP%]:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      display: none;\n      visibility: hidden;\n    }\n  } */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css', './2app.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }]; }, { newsElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['news']
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! highcharts-angular */ "kAVD");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./watchlist/watchlist.component */ "1qbd");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            // CommonModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
            highcharts_angular__WEBPACK_IMPORTED_MODULE_12__["HighchartsChartModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_14__["WatchlistComponent"]], imports: [
        // CommonModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
        highcharts_angular__WEBPACK_IMPORTED_MODULE_12__["HighchartsChartModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    // CommonModule,
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                    highcharts_angular__WEBPACK_IMPORTED_MODULE_12__["HighchartsChartModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
                ],
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_14__["WatchlistComponent"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./watchlist/watchlist.component */ "1qbd");





const routes = [
    { path: 'watchlist', component: _watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_2__["WatchlistComponent"] },
    { path: 'portfolio', component: _watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_2__["WatchlistComponent"] },
    { path: 'details/:id', component: _watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_2__["WatchlistComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map