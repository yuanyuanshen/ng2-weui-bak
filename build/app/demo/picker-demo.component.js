"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PickerDemoComponent = (function () {
    function PickerDemoComponent() {
        this.showDate = false;
    }
    // private menu1: Array<ActionsheetItem> = [
    //   {
    //     label: "同意",
    //     value: "agree",
    //   },
    //   {
    //     label: "拒绝",
    //     value: "reject",
    //   },
    // ];
    // private menu2: Array<ActionsheetItem> = [
    //   {
    //     label: "同意",
    //     value: "agree",
    //   },
    //   {
    //     label: "拒绝",
    //     value: "reject",
    //   },
    // ];
    PickerDemoComponent.prototype.showDatePicker = function () {
        this.showDate = true;
    };
    PickerDemoComponent.prototype.receiveDate = function (event) {
        if (event) {
            alert(JSON.stringify(event));
        }
    };
    return PickerDemoComponent;
}());
PickerDemoComponent = __decorate([
    core_1.Component({
        selector: "picker-demo",
        template: "\n    <div class=\"page actionsheet js_show\">\n      <div class=\"page__hd\">\n        <h1 class=\"page__title\">Picker</h1>\n        <p class=\"page__desc\">\u591A\u5217\u9009\u62E9\u5668\uFF0C\u65E5\u671F\u63A7\u4EF6</p>\n      </div>\n      <div class=\"page__bd page__bd_spacing\">\n        <a wx-button color=\"default\" (click)=\"showDatePicker()\" label=\"\u65E5\u671F\u9009\u62E9\u5668\"></a>\n      </div>\n      <!--BEGIN picker-->\n      <div wx-datepicker [(display)]=\"showDate\" (do-check)=\"receiveDate($event)\"></div>\n      <!--END picker-->\n      <div class=\"page__ft\">\n        <a style=\"cursor: pointer;\" [routerLink]=\"['/']\"><img src=\"./images/icon_footer_link.png\"/></a>\n      </div>\n    </div>\n  ",
    })
], PickerDemoComponent);
exports.PickerDemoComponent = PickerDemoComponent;

//# sourceMappingURL=picker-demo.component.js.map
