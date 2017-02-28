"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ProgressDemoComponent = (function () {
    function ProgressDemoComponent() {
        this.max = 100;
        this.c1 = 0;
        this.c2 = 50;
        this.c3 = 80;
    }
    ProgressDemoComponent.prototype.doCancel = function (key) {
        if (key === 1) {
            this.c1 = 0;
        }
        else if (key === 2) {
            this.c2 = 0;
        }
        else if (key === 3) {
            this.c3 = 0;
        }
    };
    return ProgressDemoComponent;
}());
ProgressDemoComponent = __decorate([
    core_1.Component({
        selector: "progress-demo",
        template: "\n    <div class=\"page js_show\">\n      <div class=\"page__hd\">\n        <h1 class=\"page__title\">Progress</h1>\n        <p class=\"page__desc\">\u8FDB\u5EA6\u6761</p>\n      </div>\n      <div class=\"page__bd page__bd_spacing\">\n        <div wx-progress>\n          <div wx-progress-bar [max]=\"max\" [value]=\"c1\"></div>\n          <a wx-progress-operate (click)=\"doCancel(1)\">\n            <i wx-icon type=\"cancel\" size=\"small\"></i>\n          </a>\n        </div>\n        <br>\n        <div wx-progress>\n          <div wx-progress-bar [max]=\"max\" [value]=\"c2\"></div>\n          <a wx-progress-operate (click)=\"doCancel(2)\">\n            <i wx-icon type=\"cancel\" size=\"small\"></i>\n          </a>\n        </div>\n        <br>\n        <div wx-progress>\n          <div wx-progress-bar [max]=\"max\" [value]=\"c3\"></div>\n          <a wx-progress-operate (click)=\"doCancel(3)\">\n            <i wx-icon type=\"cancel\" size=\"small\"></i>\n          </a>\n        </div>\n        <div wx-button-area>\n          <a wx-button type=\"normal\" color=\"primary\" label=\"\u4E0A\u4F20\"></a>\n        </div>\n      </div>\n      <div class=\"page__ft\">\n        <a style=\"cursor: pointer;\" [routerLink]=\"['/']\"><img src=\"./images/icon_footer_link.png\"/></a>\n      </div>\n    </div>\n  ",
    })
], ProgressDemoComponent);
exports.ProgressDemoComponent = ProgressDemoComponent;

//# sourceMappingURL=progress-demo.component.js.map
