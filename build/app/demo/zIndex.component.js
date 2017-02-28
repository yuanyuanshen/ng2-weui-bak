"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ZIndexComponent = (function () {
    function ZIndexComponent() {
        this.flag = true;
    }
    ZIndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.flag = false;
        }, 1000);
    };
    return ZIndexComponent;
}());
ZIndexComponent = __decorate([
    core_1.Component({
        selector: "z-index",
        template: "\n    <div class=\"page layers js_show\">\n      <div class=\"page__hd\">\n        <div class=\"j_info page__info\" data-for=\"normal\">\n          <h2 class=\"page__title\">WeUI\u9875\u9762\u5C42\u7EA7</h2>\n          <p class=\"page__desc\">\u7528\u4E8E\u89C4\u8303WeUI\u9875\u9762\u5143\u7D20\u6240\u5C5E\u5C42\u7EA7\u3001\u5C42\u7EA7\u987A\u5E8F\u53CA\u7EC4\u5408\u89C4\u8303\u3002</p>\n        </div>\n        <div class=\"j_info page__info\" data-for=\"popout\" style=\"display:none\">\n          <h2 class=\"page__title\">Popout</h2>\n          <p class=\"page__desc\">\u5F39\u51FA\u5C42\uFF0C\u4F5C\u4E3A\u5185\u5BB9\u5C42\u548C\u5BFC\u822A\u5C42\u7684\u8865\u5145\uFF0C\u7528\u4E8E\u627F\u8F7D\u5F39\u7A97\u901A\u77E5\u3001\u64CD\u4F5C\u83DC\u5355\u3001\u83DC\u5355\u3001\u6210\u529F\u6216\u52A0\u8F7D\u4E2D\u7B49\u72B6\u6001\u7684Toast\uFF0C\u8868\u5355\u62A5\u9519\u63D0\u793A\u7B49\u5F39\u51FA\u5185\u5BB9\u3002</p>\n        </div>\n        <div class=\"j_info page__info\" data-for=\"mask\" style=\"display:none\">\n          <h2 class=\"page__title\">Mask</h2>\n          <p class=\"page__desc\">\u8499\u5C42\uFF0C\u914D\u5408Popout\u5C42\u4F7F\u7528\uFF0C\u7528\u4E8E\u9501\u5B9A\u5185\u5BB9\u5C42\u548C\u5BFC\u822A\u5C42\u64CD\u4F5C\uFF0C\u4E0D\u5355\u72EC\u4F7F\u7528\u3002</p>\n        </div>\n        <div class=\"j_info page__info\" data-for=\"navigation\" style=\"display:none\">\n          <h2 class=\"page__title\">Navigation</h2>\n          <p class=\"page__desc\">\u5BFC\u822A\u5C42\uFF0C\u4F4D\u4E8E\u5185\u5BB9\u5C42\u4E4B\u4E0A\uFF0C\u5728\u7528\u6237\u6ED1\u52A8\u5185\u5BB9\u5C42\u65F6\u53EF\u4FDD\u6301\u4F4D\u7F6E\u4E0D\u52A8\uFF0C\u901A\u5E38\u7528\u4E8E\u627F\u8F7D\u5BFC\u822A\u680F\u7B49\u9700\u8981\u56FA\u5B9A\u5728\u9875\u9762\u7684\u5143\u7D20\u3002</p>\n        </div>\n        <div class=\"j_info page__info\" data-for=\"content\" style=\"display:none\">\n          <h2 class=\"page__title\">Content</h2>\n          <p class=\"page__desc\">\u5185\u5BB9\u5C42\uFF0C\u627F\u8F7D\u9875\u9762\u4E3B\u8981\u5185\u5BB9\u3002</p>\n        </div>\n      </div>\n      <div class=\"page__bd\">\n        <div class=\"layers j_layers\">\n          <div data-name=\"popout\" class=\"j_pic j_layer layers__layer layers__layer_popout\" [ngClass]=\"{ 'j_pic': flag, 'j_transform': !flag }\">\n            <span>Popout</span>\n          </div>\n          <div data-name=\"mask\" class=\"j_pic j_layer layers__layer layers__layer_mask\" [ngClass]=\"{ 'j_pic': flag, 'j_transform': !flag }\">\n            <span>Mask</span>\n          </div>\n          <div data-name=\"navigation\" class=\"j_pic j_layer layers__layer layers__layer_navigation\" [ngClass]=\"{ 'j_pic': flag, 'j_transform': !flag }\">\n            <span>Navigation</span>\n          </div>\n          <div data-name=\"content\" class=\"j_pic j_layer layers__layer layers__layer_content\" [ngClass]=\"{ 'j_pic': flag, 'j_transform': !flag }\">\n            <span>Content</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"page__ft\">\n        <a style=\"cursor: pointer;\" [routerLink]=\"['/']\"><img src=\"./images/icon_footer_link.png\"/></a>\n      </div>\n    </div>\n  ",
    })
], ZIndexComponent);
exports.ZIndexComponent = ZIndexComponent;

//# sourceMappingURL=zIndex.component.js.map
