"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/**
 * WeUI Flex组件
 * @class WxFlexComponent
 */
var WxFlexComponent = (function () {
    function WxFlexComponent() {
    }
    return WxFlexComponent;
}());
WxFlexComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-flex",
        },
        selector: "div[wx-flex]",
        template: "\n    <ng-content select=\"[wx-flex-item],div\"></ng-content>\n  ",
    })
], WxFlexComponent);
exports.WxFlexComponent = WxFlexComponent;
/**
 * WeUI Flex元素组件
 * @class WxFlexItemComponent
 */
var WxFlexItemComponent = (function () {
    function WxFlexItemComponent() {
    }
    return WxFlexItemComponent;
}());
WxFlexItemComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-flex__item",
        },
        selector: "div[wx-flex-item]",
        template: "\n    <ng-content></ng-content>\n  ",
    })
], WxFlexItemComponent);
exports.WxFlexItemComponent = WxFlexItemComponent;

//# sourceMappingURL=flex.component.js.map
