"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PreviewDemoComponent = (function () {
    function PreviewDemoComponent() {
    }
    return PreviewDemoComponent;
}());
PreviewDemoComponent = __decorate([
    core_1.Component({
        selector: "preview-demo",
        template: "\n    <div class=\"page js_show\">\n      <div class=\"page__hd\">\n        <h1 class=\"page__title\">Preview</h1>\n        <p class=\"page__desc\">\u8868\u5355\u9884\u89C8</p>\n      </div>\n      <div class=\"page__bd\">\n        <div wx-form-preview>\n          <div wx-form-preview-header>\n            <div wx-form-preview-item>\n              <label wx-form-preview-label label=\"\u4ED8\u6B3E\u91D1\u989D\"></label>\n              <em wx-form-preview-value value=\"\u00A52400.00\"></em>\n            </div>\n          </div>\n          <div wx-form-preview-body>\n            <div wx-form-preview-item>\n              <label wx-form-preview-label label=\"\u5546\u54C1\"></label>\n              <span wx-form-preview-value value=\"\u7535\u52A8\u6253\u86CB\u673A\"></span>\n            </div>\n            <div wx-form-preview-item>\n              <label wx-form-preview-label label=\"\u6807\u9898\u6807\u9898\"></label>\n              <span wx-form-preview-value value=\"\u540D\u5B57\u540D\u5B57\u540D\u5B57\"></span>\n            </div>\n            <div wx-form-preview-item>\n              <label wx-form-preview-label label=\"\u6807\u9898\u6807\u9898\"></label>\n              <span wx-form-preview-value value=\"\u5F88\u957F\u5F88\u957F\u7684\u540D\u5B57\u5F88\u957F\u5F88\u957F\u7684\u540D\u5B57\u5F88\u957F\u5F88\u957F\u7684\u540D\u5B57\u5F88\u957F\u5F88\u957F\u7684\u540D\u5B57\u5F88\u957F\u5F88\u957F\u7684\u540D\u5B57\"></span>\n            </div>\n          </div>\n          <div wx-form-preview-footer>\n            <a wx-form-preview-button type=\"primary\" label=\"\u64CD\u4F5C\"></a>\n          </div>\n        </div>\n        <br>\n        <div wx-form-preview>\n          <div wx-form-preview-header>\n            <div wx-form-preview-item>\n              <label wx-form-preview-label label=\"\u4ED8\u6B3E\u91D1\u989D\"></label>\n              <em wx-form-preview-value value=\"\u00A52400.00\"></em>\n            </div>\n          </div>\n          <div wx-form-preview-body>\n            <div wx-form-preview-item>\n              <label wx-form-preview-label label=\"\u5546\u54C1\"></label>\n              <span wx-form-preview-value value=\"\u7535\u52A8\u6253\u86CB\u673A\"></span>\n            </div>\n            <div wx-form-preview-item>\n              <label wx-form-preview-label label=\"\u6807\u9898\u6807\u9898\"></label>\n              <span wx-form-preview-value value=\"\u540D\u5B57\u540D\u5B57\u540D\u5B57\"></span>\n            </div>\n            <div wx-form-preview-item>\n              <label wx-form-preview-label label=\"\u6807\u9898\u6807\u9898\"></label>\n              <span wx-form-preview-value value=\"\u5F88\u957F\u5F88\u957F\u7684\u540D\u5B57\u5F88\u957F\u5F88\u957F\u7684\u540D\u5B57\u5F88\u957F\u5F88\u957F\u7684\u540D\u5B57\u5F88\u957F\u5F88\u957F\u7684\u540D\u5B57\u5F88\u957F\u5F88\u957F\u7684\u540D\u5B57\"></span>\n            </div>\n          </div>\n          <div wx-form-preview-footer>\n            <a wx-form-preview-button type=\"default\" label=\"\u8F85\u52A9\u64CD\u4F5C\"></a>\n            <a wx-form-preview-button type=\"primary\" label=\"\u64CD\u4F5C\"></a>\n          </div>\n        </div>\n      </div>\n      <div class=\"page__ft\">\n        <a style=\"cursor: pointer;\" [routerLink]=\"['/']\"><img src=\"./images/icon_footer_link.png\"/></a>\n      </div>\n    </div>\n  ",
    })
], PreviewDemoComponent);
exports.PreviewDemoComponent = PreviewDemoComponent;

//# sourceMappingURL=preview-demo.component.js.map
