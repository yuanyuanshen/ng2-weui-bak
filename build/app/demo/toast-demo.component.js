"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ToastDemoComponent = (function () {
    function ToastDemoComponent() {
        this.show1 = false;
        this.show2 = false;
    }
    ToastDemoComponent.prototype.showSuccess = function () {
        this.show1 = true;
    };
    ToastDemoComponent.prototype.showLoading = function () {
        var _this = this;
        this.show2 = true;
        setTimeout(function () {
            _this.show2 = false;
        }, 3000);
    };
    return ToastDemoComponent;
}());
ToastDemoComponent = __decorate([
    core_1.Component({
        selector: "toast-demo",
        template: "\n    <div class=\"page toast js_show\">\n      <div class=\"page__hd\">\n        <h1 class=\"page__title\">Toast</h1>\n        <p class=\"page__desc\">\u5F39\u51FA\u5F0F\u63D0\u793A</p>\n      </div>\n      <div class=\"page__bd page__bd_spacing\">\n        <a wx-button color=\"default\" (click)=\"showSuccess()\" label=\"\u6210\u529F\u63D0\u793A\"></a>\n        <a wx-button color=\"default\" (click)=\"showLoading()\" label=\"\u52A0\u8F7D\u4E2D\u63D0\u793A\"></a>\n      </div>\n      <div class=\"page__ft\">\n        <a style=\"cursor: pointer;\" [routerLink]=\"['/']\"><img src=\"./images/icon_footer_link.png\"/></a>\n      </div>\n\n      <!--BEGIN toast-->\n      <div wx-toast message=\"\u5DF2\u5B8C\u6210\" [show-seconds]=\"1\" [(display)]=\"show1\">\n        <i wx-icon type=\"success-no-circle\" [for-toast]=\"true\"></i>\n      </div>\n      <!--end toast-->\n\n      <!-- loading toast -->\n      <div wx-toast message=\"\u6570\u636E\u52A0\u8F7D\u4E2D\" [(display)]=\"show2\">\n        <i wx-icon type=\"loading\" [for-toast]=\"true\"></i>\n      </div>\n    </div>\n  ",
    })
], ToastDemoComponent);
exports.ToastDemoComponent = ToastDemoComponent;

//# sourceMappingURL=toast-demo.component.js.map
