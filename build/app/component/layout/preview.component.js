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
 * WeUI 表单预览组件
 * @class WxPreviewComponent
 */
var WxPreviewComponent = (function () {
    function WxPreviewComponent() {
    }
    return WxPreviewComponent;
}());
WxPreviewComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-form-preview",
        },
        selector: "div[wx-form-preview]",
        template: "\n    <ng-content select=\"[wx-form-preview-header]\"></ng-content>\n    <ng-content select=\"[wx-form-preview-body]\"></ng-content>\n    <ng-content select=\"[wx-form-preview-footer]\"></ng-content>\n  ",
    })
], WxPreviewComponent);
exports.WxPreviewComponent = WxPreviewComponent;
/**
 * WeUI 表单预览 Header 组件
 * @class WxPreviewHeaderComponent
 */
var WxPreviewHeaderComponent = (function () {
    function WxPreviewHeaderComponent() {
    }
    return WxPreviewHeaderComponent;
}());
WxPreviewHeaderComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-form-preview__hd",
        },
        selector: "div[wx-form-preview-header]",
        template: "\n    <ng-content select=\"[wx-form-preview-item]\"></ng-content>\n  ",
    })
], WxPreviewHeaderComponent);
exports.WxPreviewHeaderComponent = WxPreviewHeaderComponent;
/**
 * WeUI 表单预览 Body 组件
 * @class WxPreviewBodyComponent
 */
var WxPreviewBodyComponent = (function () {
    function WxPreviewBodyComponent() {
    }
    return WxPreviewBodyComponent;
}());
WxPreviewBodyComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-form-preview__bd",
        },
        selector: "div[wx-form-preview-body]",
        template: "\n    <ng-content select=\"[wx-form-preview-item]\"></ng-content>\n  ",
    })
], WxPreviewBodyComponent);
exports.WxPreviewBodyComponent = WxPreviewBodyComponent;
/**
 * WeUI 表单预览 Footer 组件
 * @class WxPreviewFooterComponent
 */
var WxPreviewFooterComponent = (function () {
    function WxPreviewFooterComponent() {
    }
    return WxPreviewFooterComponent;
}());
WxPreviewFooterComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-form-preview__ft",
        },
        selector: "div[wx-form-preview-footer]",
        template: "\n    <ng-content select=\"[wx-form-preview-button]\"></ng-content>\n  ",
    })
], WxPreviewFooterComponent);
exports.WxPreviewFooterComponent = WxPreviewFooterComponent;
/**
 * WeUI 表单预览成员组件
 * @class WxPreviewItemComponent
 */
var WxPreviewItemComponent = (function () {
    function WxPreviewItemComponent() {
    }
    return WxPreviewItemComponent;
}());
WxPreviewItemComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-form-preview__item",
        },
        selector: "div[wx-form-preview-item]",
        template: "\n    <ng-content select=\"[wx-form-preview-label]\"></ng-content>\n    <ng-content select=\"[wx-form-preview-value]\"></ng-content>\n  ",
    })
], WxPreviewItemComponent);
exports.WxPreviewItemComponent = WxPreviewItemComponent;
/**
 * WeUI 表单预览标签组件
 * @class             WxPreviewLabelComponent
 * @property {string} WxPreviewLabelComponent.label - 输入参数: 标签内容
 */
var WxPreviewLabelComponent = (function () {
    function WxPreviewLabelComponent() {
    }
    return WxPreviewLabelComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WxPreviewLabelComponent.prototype, "label", void 0);
WxPreviewLabelComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-form-preview__label",
        },
        selector: "label[wx-form-preview-label]",
        template: "\n    {{label}}\n  ",
    })
], WxPreviewLabelComponent);
exports.WxPreviewLabelComponent = WxPreviewLabelComponent;
/**
 * WeUI 表单预览值组件
 * @class             WxPreviewValueComponent
 * @property {string} WxPreviewValueComponent.value - 输入参数: 显示值
 */
var WxPreviewValueComponent = (function () {
    function WxPreviewValueComponent() {
    }
    return WxPreviewValueComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WxPreviewValueComponent.prototype, "value", void 0);
WxPreviewValueComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-form-preview__value",
        },
        selector: "span[wx-form-preview-value]",
        template: "\n    {{value}}\n  ",
    })
], WxPreviewValueComponent);
exports.WxPreviewValueComponent = WxPreviewValueComponent;
/**
 * WeUI 表单预览值组件
 * @class             WxPreviewValueStressComponent
 * @property {string} WxPreviewValueStressComponent.value - 输入参数: 显示值
 */
var WxPreviewValueStressComponent = (function () {
    function WxPreviewValueStressComponent() {
    }
    return WxPreviewValueStressComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WxPreviewValueStressComponent.prototype, "value", void 0);
WxPreviewValueStressComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-form-preview__value",
        },
        selector: "em[wx-form-preview-value]",
        template: "\n    {{value}}\n  ",
    })
], WxPreviewValueStressComponent);
exports.WxPreviewValueStressComponent = WxPreviewValueStressComponent;
/**
 * WeUI 表单预览按钮组件
 * @class                 WxPreviewButtonComponent
 * @property {string}     WxPreviewButtonComponent.label - 输入参数: 标签
 * @property {ButtonType} WxPreviewButtonComponent.type  - 输入参数: 类型
 */
var WxPreviewButtonComponent = (function () {
    function WxPreviewButtonComponent() {
        this.classes = "weui-form-preview__btn";
    }
    WxPreviewButtonComponent.prototype.ngOnInit = function () {
        if (this.type && this.type === "primary") {
            this.classes += " weui-form-preview__btn_primary";
        }
        else {
            this.classes += " weui-form-preview__btn_default";
        }
    };
    return WxPreviewButtonComponent;
}());
__decorate([
    core_1.HostBinding("attr.class"),
    __metadata("design:type", String)
], WxPreviewButtonComponent.prototype, "classes", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WxPreviewButtonComponent.prototype, "label", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WxPreviewButtonComponent.prototype, "type", void 0);
WxPreviewButtonComponent = __decorate([
    core_1.Component({
        host: {
            "style": "cursor: pointer;",
        },
        selector: "a[wx-form-preview-button]",
        template: "\n    {{label}}\n  ",
    })
], WxPreviewButtonComponent);
exports.WxPreviewButtonComponent = WxPreviewButtonComponent;

//# sourceMappingURL=preview.component.js.map
