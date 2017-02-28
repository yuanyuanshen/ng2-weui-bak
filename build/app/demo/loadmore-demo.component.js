"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var LoadmoreDemoComponent = (function () {
    function LoadmoreDemoComponent() {
    }
    return LoadmoreDemoComponent;
}());
LoadmoreDemoComponent = __decorate([
    core_1.Component({
        selector: "loadmore-demo",
        template: "\n    <div class=\"page loadmore js_show\">\n      <div class=\"page__hd\">\n        <h1 class=\"page__title\">Loadmore</h1>\n        <p class=\"page__desc\">\u52A0\u8F7D\u66F4\u591A</p>\n      </div>\n      <div class=\"page__bd\">\n        <div wx-loadmore>\n          <i wx-icon type=\"loading\"></i>\n          <span wx-loadmore-tips tips=\"\u6B63\u5728\u52A0\u8F7D\"></span>\n        </div>\n        <div wx-loadmore [with-line]=\"true\">\n          <span wx-loadmore-tips tips=\"\u6682\u65E0\u6570\u636E\"></span>\n        </div>\n        <div wx-loadmore [with-line]=\"true\" [with-dot]=\"true\">\n          <span wx-loadmore-tips></span>\n        </div>\n      </div>\n      <div class=\"page__ft\">\n        <a style=\"cursor: pointer;\" [routerLink]=\"['/']\"><img src=\"./images/icon_footer_link.png\"/></a>\n      </div>\n    </div>\n  ",
    })
], LoadmoreDemoComponent);
exports.LoadmoreDemoComponent = LoadmoreDemoComponent;

//# sourceMappingURL=loadmore-demo.component.js.map
