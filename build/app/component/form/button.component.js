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
 * WeUI 按钮组件
 * @class                         WxButtonComponent
 * @property {ButtonColorType}    WxButtonComponent.color    - 输入参数: 颜色类型
 * @property {ButtonStyleType}    WxButtonComponent.style    - 输入参数: 样式类型
 * @property {ButtonDisabledType} WxButtonComponent.disabled - 输入参数: 禁用状态
 * @property {string}             WxButtonComponent.label    - 输入参数: 标签
 */
var WxButtonComponent = (function () {
    function WxButtonComponent() {
        this.classes = "weui-btn";
    }
    WxButtonComponent.prototype.ngOnInit = function () {
        // 设置默认值
        if (!this.color) {
            this.color = "primary";
        }
        if (!this.style) {
            this.style = "normal";
        }
        if (!this.disabled) {
            this.disabled = false;
        }
        if (!this.label) {
            this.label = "";
        }
        // 设置样式
        if (this.style === "normal" || this.style === "mini") {
            if (this.disabled) {
                this.classes += " weui-btn_disabled";
            }
            if (this.style === "mini") {
                this.classes += " weui-btn_mini";
            }
            if (this.color === "primary") {
                this.classes += " weui-btn_primary";
            }
            else if (this.color === "warn") {
                this.classes += " weui-btn_warn";
            }
            else if (this.color === "default") {
                this.classes += " weui-btn_default";
            }
        }
        else if (this.style === "plain") {
            if (this.disabled) {
                this.classes += " weui-btn_plain-disabled";
            }
            if (this.color === "primary") {
                this.classes += " weui-btn_plain-primary";
            }
            else if (this.color === "warn") {
                this.classes += " weui-btn_plain-warn";
            }
            else if (this.color === "default") {
                this.classes += " weui-btn_plain-default";
            }
        }
    };
    return WxButtonComponent;
}());
__decorate([
    core_1.HostBinding("attr.class"),
    __metadata("design:type", String)
], WxButtonComponent.prototype, "classes", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WxButtonComponent.prototype, "color", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WxButtonComponent.prototype, "style", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WxButtonComponent.prototype, "disabled", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WxButtonComponent.prototype, "label", void 0);
WxButtonComponent = __decorate([
    core_1.Component({
        host: {
            "style": "cursor: pointer;",
        },
        selector: "a[wx-button]",
        template: "\n    {{label}}\n  ",
    })
], WxButtonComponent);
exports.WxButtonComponent = WxButtonComponent;
/**
 * WeUI 获取验证码按钮
 * @class             WxButtonVcodeComponent
 * @property {string} WxButtonVcodeComponent.label - 输入参数: 标签
 */
var WxButtonVcodeComponent = (function () {
    function WxButtonVcodeComponent() {
    }
    return WxButtonVcodeComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WxButtonVcodeComponent.prototype, "label", void 0);
WxButtonVcodeComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-vcode-btn",
            "style": "cursor: pointer",
        },
        selector: "a[wx-button-vcode]",
        template: "\n    {{label}}\n  ",
    })
], WxButtonVcodeComponent);
exports.WxButtonVcodeComponent = WxButtonVcodeComponent;
/**
 * WeUI 按钮区域
 * @class WxButtonAreaComponent
 */
var WxButtonAreaComponent = (function () {
    function WxButtonAreaComponent() {
    }
    return WxButtonAreaComponent;
}());
WxButtonAreaComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-btn-area",
        },
        selector: "div[wx-button-area]",
        template: "\n    <ng-content select=\"[wx-button]\"></ng-content>\n  ",
    })
], WxButtonAreaComponent);
exports.WxButtonAreaComponent = WxButtonAreaComponent;

//# sourceMappingURL=button.component.js.map
