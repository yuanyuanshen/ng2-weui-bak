"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ButtonDemoComponent = (function () {
    function ButtonDemoComponent() {
    }
    return ButtonDemoComponent;
}());
ButtonDemoComponent = __decorate([
    core_1.Component({
        selector: "button-demo",
        template: "\n    <div class=\"page js_show button\">\n      <div class=\"page__hd\">\n        <h1 class=\"page__title\">Button</h1>\n        <p class=\"page__desc\">\u6309\u94AE</p>\n      </div>\n      <div class=\"page__bd page__bd_spacing\">\n        <a wx-button color=\"primary\" label=\"\u9875\u9762\u4E3B\u64CD\u4F5C Normal\"></a>\n        <a wx-button color=\"primary\" [disabled]=\"true\" label=\"\u9875\u9762\u4E3B\u64CD\u4F5C Disabled\"></a>\n        <a wx-button color=\"default\" label=\"\u9875\u9762\u6B21\u8981\u64CD\u4F5C Normal\"></a>\n        <a wx-button color=\"default\" [disabled]=\"true\" label=\"\u9875\u9762\u6B21\u8981\u64CD\u4F5C Disabled\"></a>\n        <a wx-button color=\"warn\" label=\"\u8B66\u544A\u7C7B\u64CD\u4F5C Normal\"></a>\n        <a wx-button color=\"warn\" [disabled]=\"true\" label=\"\u8B66\u544A\u7C7B\u64CD\u4F5C Disabled\"></a>\n        <div class=\"button-sp-area\">\n          <a wx-button color=\"default\" style=\"plain\" label=\"\u6309\u94AE\"></a>\n          <a wx-button color=\"default\" style=\"plain\" [disabled]=\"true\" label=\"\u6309\u94AE\"></a>\n          <a wx-button color=\"primary\" style=\"plain\" label=\"\u6309\u94AE\"></a>\n          <a wx-button color=\"primary\" style=\"plain\" [disabled]=\"true\" label=\"\u6309\u94AE\"></a>\n          <a wx-button color=\"primary\" style=\"mini\" label=\"\u6309\u94AE\"></a>\n          <a wx-button color=\"default\" style=\"mini\" label=\"\u6309\u94AE\"></a>\n          <a wx-button color=\"warn\" style=\"mini\" label=\"\u6309\u94AE\"></a>\n        </div>\n      </div>\n      <div class=\"page__ft\">\n        <a style=\"cursor: pointer;\" [routerLink]=\"['/']\"><img src=\"./images/icon_footer_link.png\"/></a>\n      </div>\n    </div>\n  ",
    })
], ButtonDemoComponent);
exports.ButtonDemoComponent = ButtonDemoComponent;

//# sourceMappingURL=button-demo.component.js.map
