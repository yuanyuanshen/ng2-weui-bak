"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ActionsheetDemoComponent = (function () {
    function ActionsheetDemoComponent() {
        this.show1 = false;
        this.show2 = false;
        this.menu1 = [
            {
                label: "同意",
                value: "agree",
            },
            {
                label: "拒绝",
                value: "reject",
            },
        ];
        this.menu2 = [
            {
                label: "同意",
                value: "agree",
            },
            {
                label: "拒绝",
                value: "reject",
            },
        ];
    }
    ActionsheetDemoComponent.prototype.showIOS = function () {
        this.show1 = true;
    };
    ActionsheetDemoComponent.prototype.showAndroid = function () {
        this.show2 = true;
    };
    ActionsheetDemoComponent.prototype.receive1 = function (event) {
        if (event) {
            alert(JSON.stringify(event));
        }
    };
    ActionsheetDemoComponent.prototype.receive2 = function (event) {
        if (event) {
            alert(JSON.stringify(event));
        }
    };
    return ActionsheetDemoComponent;
}());
ActionsheetDemoComponent = __decorate([
    core_1.Component({
        selector: "actionsheet-demo",
        template: "\n    <div class=\"page actionsheet js_show\">\n      <div class=\"page__hd\">\n        <h1 class=\"page__title\">ActionSheet</h1>\n        <p class=\"page__desc\">\u5F39\u51FA\u5F0F\u83DC\u5355</p>\n      </div>\n      <div class=\"page__bd page__bd_spacing\">\n        <a wx-button color=\"default\" (click)=\"showIOS()\" label=\"iOS ActionSheet\"></a>\n        <a wx-button color=\"default\" (click)=\"showAndroid()\" label=\"Android ActionSheet\"></a>\n      </div>\n      <!--BEGIN actionSheet-->\n      <div wx-actionsheet-ios [(display)]=\"show1\" [menus]=\"menu1\" (do-check)=\"receive1($event)\"></div>\n\n      <div wx-actionsheet-android [(display)]=\"show2\" [menus]=\"menu2\" (do-check)=\"receive2($event)\"></div>\n      <!--END actionSheet-->\n      <div class=\"page__ft\">\n        <a style=\"cursor: pointer;\" [routerLink]=\"['/']\"><img src=\"./images/icon_footer_link.png\"/></a>\n      </div>\n    </div>\n  ",
    })
], ActionsheetDemoComponent);
exports.ActionsheetDemoComponent = ActionsheetDemoComponent;

//# sourceMappingURL=actionsheet-demo.component.js.map
