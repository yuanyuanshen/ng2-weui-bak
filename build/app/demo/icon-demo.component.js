"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var IconDemoComponent = (function () {
    function IconDemoComponent() {
    }
    return IconDemoComponent;
}());
IconDemoComponent = __decorate([
    core_1.Component({
        selector: "icon-demo",
        template: "\n    <div class=\"page icons js_show\">\n      <div class=\"page__hd\">\n        <h1 class=\"page__title\">Icons</h1>\n        <p class=\"page__desc\">\u56FE\u6807</p>\n      </div>\n      <div class=\"page__bd page__bd_spacing\">\n        <div class=\"icon-box\">\n          <i wx-icon type=\"success\" size=\"large\"></i>\n          <div class=\"icon-box__ctn\">\n            <h3 class=\"icon-box__title\">\u6210\u529F</h3>\n            <p class=\"icon-box__desc\">\u7528\u4E8E\u8868\u793A\u64CD\u4F5C\u987A\u5229\u8FBE\u6210</p>\n          </div>\n        </div>\n        <div class=\"icon-box\">\n          <i wx-icon type=\"info\" size=\"large\"></i>\n          <div class=\"icon-box__ctn\">\n            <h3 class=\"icon-box__title\">\u63D0\u793A</h3>\n            <p class=\"icon-box__desc\">\u7528\u4E8E\u8868\u793A\u4FE1\u606F\u63D0\u793A\uFF1B\u4E5F\u5E38\u7528\u4E8E\u7F3A\u4E4F\u6761\u4EF6\u7684\u64CD\u4F5C\u62E6\u622A\uFF0C\u63D0\u793A\u7528\u6237\u6240\u9700\u4FE1\u606F</p>\n          </div>\n        </div>\n        <div class=\"icon-box\">\n          <i wx-icon type=\"warn-normal\"></i>\n          <div class=\"icon-box__ctn\">\n            <h3 class=\"icon-box__title\">\u666E\u901A\u8B66\u544A</h3>\n            <p class=\"icon-box__desc\">\u7528\u4E8E\u8868\u793A\u64CD\u4F5C\u540E\u5C06\u5F15\u8D77\u4E00\u5B9A\u540E\u679C\u7684\u60C5\u51B5</p>\n          </div>\n        </div>\n        <div class=\"icon-box\">\n          <i wx-icon type=\"warn\" size=\"large\"></i>\n          <div class=\"icon-box__ctn\">\n            <h3 class=\"icon-box__title\">\u5F3A\u70C8\u8B66\u544A</h3>\n            <p class=\"icon-box__desc\">\u7528\u4E8E\u8868\u793A\u64CD\u4F5C\u540E\u5C06\u5F15\u8D77\u4E25\u91CD\u7684\u4E0D\u53EF\u633D\u56DE\u7684\u540E\u679C\u7684\u60C5\u51B5</p>\n          </div>\n        </div>\n        <div class=\"icon-box\">\n          <i wx-icon type=\"waiting\" size=\"large\"></i>\n          <div class=\"icon-box__ctn\">\n            <h3 class=\"icon-box__title\">\u7B49\u5F85</h3>\n            <p class=\"icon-box__desc\">\u7528\u4E8E\u8868\u793A\u7B49\u5F85</p>\n          </div>\n        </div>\n        <div class=\"icon_sp_area\">\n          <i wx-icon type=\"success\" size=\"small\"></i>\n          <i wx-icon type=\"success-circle\" size=\"small\"></i>\n          <i wx-icon type=\"success-no-circle\" size=\"small\"></i>\n          <i wx-icon type=\"circle\" size=\"small\"></i>\n          <i wx-icon type=\"warn\" size=\"small\"></i>\n          <i wx-icon type=\"download\" size=\"small\"></i>\n          <i wx-icon type=\"waiting\" size=\"small\"></i>\n          <i wx-icon type=\"waiting-circle\" size=\"small\"></i>\n          <i wx-icon type=\"info\" size=\"small\"></i>\n          <i wx-icon type=\"info-circle\" size=\"small\"></i>\n          <i wx-icon type=\"cancel\" size=\"small\"></i>\n          <i wx-icon type=\"search\" size=\"small\"></i>\n          <i wx-icon type=\"clear\" size=\"small\"></i>\n          <i wx-icon type=\"delete\" size=\"small\"></i>\n          <i wx-icon type=\"gallery-delete\"></i>\n          <i wx-icon type=\"loading\"></i>\n        </div>\n      </div>\n      <div class=\"page__ft\">\n        <a style=\"cursor: pointer;\" [routerLink]=\"['/']\"><img src=\"./images/icon_footer_link.png\"/></a>\n      </div>\n    </div>\n  ",
    })
], IconDemoComponent);
exports.IconDemoComponent = IconDemoComponent;

//# sourceMappingURL=icon-demo.component.js.map
