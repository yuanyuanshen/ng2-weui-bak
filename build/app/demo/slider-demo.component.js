"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SliderDemoComponent = (function () {
    function SliderDemoComponent() {
        this.max = 10;
        this.value = 0;
        this.max2 = 10;
        this.value2 = 5;
    }
    return SliderDemoComponent;
}());
SliderDemoComponent = __decorate([
    core_1.Component({
        selector: "slider-demo",
        template: "\n    <div class=\"page searchbar js_show\">\n      <div class=\"page__hd\">\n        <h1 class=\"page__title\">Slider</h1>\n        <p class=\"page__desc\">\u6ED1\u5757</p>\n      </div>\n      <div class=\"page__bd page__bd_spacing\">\n        <div wx-slider [max]=\"max\" [(value)]=\"value\"></div>\n        <br/>\n        <div wx-slider-box>\n          <div wx-slider [max]=\"max2\" [(value)]=\"value2\"></div>\n          <div wx-slider-box-value>{{value2/max2 | percent: '1.0-0'}}</div>\n        </div>\n      </div>\n      <div class=\"page__ft\">\n        <a style=\"cursor: pointer;\" [routerLink]=\"['/']\"><img src=\"./images/icon_footer_link.png\"/></a>\n      </div>\n    </div>\n  ",
    })
], SliderDemoComponent);
exports.SliderDemoComponent = SliderDemoComponent;

//# sourceMappingURL=slider-demo.component.js.map
