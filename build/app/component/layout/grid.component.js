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
var router_1 = require("@angular/router");
/**
 * WeUI 九宫格组件
 * @class WxGridsComponent
 */
var WxGridsComponent = (function () {
    function WxGridsComponent() {
    }
    return WxGridsComponent;
}());
WxGridsComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-grids",
        },
        selector: "div[wx-grids]",
        template: "\n    <ng-content select=\"[wx-grid]\"></ng-content>\n  ",
    })
], WxGridsComponent);
exports.WxGridsComponent = WxGridsComponent;
/**
 * WeUI 九宫格单元格组件
 * @class                 WxGridComponent
 * @property {Array<any>} WxGridComponent.uri - 输入参数: Router对象跳转参数数组
 * @property {string}     WxGridComponent.uri - 输入参数: URL地址字符串
 */
var WxGridComponent = (function () {
    function WxGridComponent(router) {
        this.router = router;
        this.styles = "auto";
    }
    WxGridComponent.prototype.ngOnInit = function () {
        if (this.uri) {
            this.styles = "pointer";
        }
    };
    WxGridComponent.prototype.doLink = function () {
        if (this.uri instanceof Array) {
            this.router.navigate(this.uri);
        }
        else if (typeof this.uri === "string") {
            window.open(this.uri, "_blank");
        }
    };
    return WxGridComponent;
}());
__decorate([
    core_1.HostBinding("style.cursor"),
    __metadata("design:type", String)
], WxGridComponent.prototype, "styles", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], WxGridComponent.prototype, "uri", void 0);
WxGridComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-grid",
            "(click)": "doLink()",
        },
        selector: "a[wx-grid]",
        template: "\n    <ng-content select=\"[wx-grid-icon]\"></ng-content>\n    <ng-content select=\"[wx-grid-label]\"></ng-content>\n  ",
    }),
    __metadata("design:paramtypes", [router_1.Router])
], WxGridComponent);
exports.WxGridComponent = WxGridComponent;
/**
 * WeUI 九宫格图标组件
 * @class             WxGridIconComponent
 * @property {string} WxGridIconComponent.iconUrl - 输入参数: 图标URL地址
 */
var WxGridIconComponent = (function () {
    function WxGridIconComponent() {
    }
    return WxGridIconComponent;
}());
__decorate([
    core_1.Input("icon-url"),
    __metadata("design:type", String)
], WxGridIconComponent.prototype, "iconUrl", void 0);
WxGridIconComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-grid__icon",
        },
        selector: "div[wx-grid-icon]",
        template: "\n    <img src=\"{{iconUrl}}\" alt=\"\">\n  ",
    })
], WxGridIconComponent);
exports.WxGridIconComponent = WxGridIconComponent;
/**
 * WeUI 九宫格标签组件
 * @class             WxGridLabelComponent
 * @property {string} WxGridLabelComponent.label - 输入参数: 标签内容
 */
var WxGridLabelComponent = (function () {
    function WxGridLabelComponent() {
    }
    return WxGridLabelComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WxGridLabelComponent.prototype, "label", void 0);
WxGridLabelComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-grid__label",
        },
        selector: "p[wx-grid-label]",
        template: "\n    {{label}}\n  ",
    })
], WxGridLabelComponent);
exports.WxGridLabelComponent = WxGridLabelComponent;

//# sourceMappingURL=grid.component.js.map
