"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BadgeDemoComponent = (function () {
    function BadgeDemoComponent() {
        this.badgeLabel = "8";
        this.badgeColor = "green";
    }
    return BadgeDemoComponent;
}());
BadgeDemoComponent = __decorate([
    core_1.Component({
        selector: "badge-demo",
        template: "\n    <div class=\"page js_show\">\n      <div class=\"page__hd\">\n        <h1 class=\"page__title\">Badge</h1>\n        <p class=\"page__desc\">\u5FBD\u7AE0</p>\n      </div>\n      <div class=\"page__bd\">\n        <div wx-cells-title title=\"\u65B0\u6D88\u606F\u63D0\u793A\u8DDF\u6458\u8981\u4FE1\u606F\u540E\uFF0C\u7EDF\u4E00\u5728\u5217\u8868\u53F3\u4FA7\"></div>\n        <div wx-cells>\n          <a wx-cell-access>\n            <div wx-cell-body>\u5355\u884C\u5217\u8868</div>\n            <div wx-cell-footer style=\"font-size: 0\">\n              <span style=\"vertical-align:middle; font-size: 17px;\">\u8BE6\u7EC6\u4FE1\u606F</span>\n              <span wx-badge-dot></span>\n            </div>\n          </a>\n        </div>\n        <div wx-cells-title title=\"\u672A\u8BFB\u6570\u7EA2\u70B9\u8DDF\u5728\u4E3B\u9898\u4FE1\u606F\u540E\uFF0C\u7EDF\u4E00\u5728\u5217\u8868\u5DE6\u4FA7\"></div>\n        <div wx-cells>\n          <div wx-cell>\n            <div wx-cell-header [badgeLabel]=\"badgeLabel\" [badgeColor]=\"badgeColor\">\n              <img src=\"images/pic_160.png\" style=\"width: 50px;display: block\"/>\n            </div>\n            <div wx-cell-body>\n              <p>\u8054\u7CFB\u4EBA\u540D\u79F0</p>\n              <p style=\"font-size: 13px;color: #888888;\">\u6458\u8981\u4FE1\u606F</p>\n            </div>\n          </div>\n          <a wx-cell-access>\n            <div wx-cell-body>\n              <span style=\"vertical-align: middle\">\u5355\u884C\u5217\u8868</span>\n              <span wx-badge color=\"yellow\">8</span>\n            </div>\n            <div wx-cell-footer></div>\n          </a>\n          <a wx-cell-access>\n            <div wx-cell-body>\n              <span style=\"vertical-align: middle\">\u5355\u884C\u5217\u8868</span>\n              <span wx-badge color=\"blue\">8</span>\n            </div>\n            <div wx-cell-footer>\u8BE6\u7EC6\u4FE1\u606F</div>\n          </a>\n          <a wx-cell-access>\n            <div wx-cell-body>\n              <span style=\"vertical-align: middle\">\u5355\u884C\u5217\u8868</span>\n              <span wx-badge>New</span>\n            </div>\n            <div wx-cell-footer></div>\n          </a>\n        </div>\n      </div>\n      <div class=\"page__ft\">\n        <a style=\"cursor: pointer;\" [routerLink]=\"['/']\"><img src=\"./images/icon_footer_link.png\"/></a>\n      </div>\n    </div>\n  ",
    })
], BadgeDemoComponent);
exports.BadgeDemoComponent = BadgeDemoComponent;

//# sourceMappingURL=badge-demo.component.js.map
