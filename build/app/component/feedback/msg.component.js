"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/**
 * WeUI 消息页组件
 * @class             WxMsgComponent
 * @property {string} WxMsgComponent.message - 输入参数: 消息内容
 * @property {string} WxMsgComponent.detail  - 输入参数: 描述信息
 */
var WxMsgComponent = (function () {
    function WxMsgComponent() {
    }
    return WxMsgComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WxMsgComponent.prototype, "message", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WxMsgComponent.prototype, "detail", void 0);
WxMsgComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-msg",
        },
        selector: "div[wx-msg]",
        template: "\n    <div class=\"weui-msg__icon-area\">\n      <ng-content select=\"[wx-icon]\"></ng-content>\n    </div>\n    <div class=\"weui-msg__text-area\">\n      <h2 class=\"weui-msg__title\">{{message}}</h2>\n      <p class=\"weui-msg__desc\">{{detail}}</p>\n    </div>\n    <div class=\"weui-msg__opr-area\">\n      <p class=\"weui-btn-area\">\n        <ng-content select=\"[wx-button]\"></ng-content>\n      </p>\n    </div>\n    <div class=\"weui-msg__extra-area\">\n      <ng-content select=\"[wx-footer]\"></ng-content>\n    </div>\n  ",
    })
], WxMsgComponent);
exports.WxMsgComponent = WxMsgComponent;

//# sourceMappingURL=msg.component.js.map
