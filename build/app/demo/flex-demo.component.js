"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FlexDemoComponent = (function () {
    function FlexDemoComponent() {
    }
    return FlexDemoComponent;
}());
FlexDemoComponent = __decorate([
    core_1.Component({
        selector: "flex-demo",
        template: "\n    <div class=\"page flex js_show\">\n      <div class=\"page__hd\">\n        <h1 class=\"page__title\">Flex</h1>\n        <p class=\"page__desc\">Flex\u5E03\u5C40</p>\n      </div>\n      <div class=\"page__bd page__bd_spacing\">\n        <div wx-flex>\n          <div wx-flex-item>\n            <div class=\"placeholder\">weui</div>\n          </div>\n        </div>\n        <div wx-flex>\n          <div wx-flex-item>\n            <div class=\"placeholder\">weui</div>\n          </div>\n          <div wx-flex-item>\n            <div class=\"placeholder\">weui</div>\n          </div>\n        </div>\n        <div wx-flex>\n          <div wx-flex-item>\n            <div class=\"placeholder\">weui</div>\n          </div>\n          <div wx-flex-item>\n            <div class=\"placeholder\">weui</div>\n          </div>\n          <div wx-flex-item>\n            <div class=\"placeholder\">weui</div>\n          </div>\n        </div>\n        <div wx-flex>\n          <div wx-flex-item>\n            <div class=\"placeholder\">weui</div>\n          </div>\n          <div wx-flex-item>\n            <div class=\"placeholder\">weui</div>\n          </div>\n          <div wx-flex-item>\n            <div class=\"placeholder\">weui</div>\n          </div>\n          <div wx-flex-item>\n            <div class=\"placeholder\">weui</div>\n          </div>\n        </div>\n        <div wx-flex>\n          <div>\n            <div class=\"placeholder\">weui</div>\n          </div>\n          <div wx-flex-item>\n            <div class=\"placeholder\">weui</div>\n          </div>\n          <div>\n            <div class=\"placeholder\">weui</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"page__ft\">\n        <a style=\"cursor: pointer;\" [routerLink]=\"['/']\"><img src=\"./images/icon_footer_link.png\"/></a>\n      </div>\n    </div>\n  ",
    })
], FlexDemoComponent);
exports.FlexDemoComponent = FlexDemoComponent;

//# sourceMappingURL=flex-demo.component.js.map
