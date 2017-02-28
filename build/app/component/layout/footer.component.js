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
 * WeUI 页脚组件
 * @class                        WxFooterComponent
 * @property {boolean}           WxFooterComponent.fixBottom - 输入参数: 是否固定在底部
 * @property {Array<FooterLink>} WxFooterComponent.links     - 输入参数: Footer 超链接对象组
 * @property {string}            WxFooterComponent.tips      - 输入参数: 提示语
 */
var WxFooterComponent = (function () {
    function WxFooterComponent(router) {
        this.router = router;
        this.classes = "weui-footer";
    }
    WxFooterComponent.prototype.ngOnInit = function () {
        if (this.fixBottom === true) {
            this.classes += "  weui-footer_fixed-bottom";
        }
    };
    WxFooterComponent.prototype.doLink = function (uri) {
        if (uri instanceof Array) {
            this.router.navigate(uri);
        }
        else if (typeof uri === "string") {
            window.open(uri, "_blank");
        }
    };
    return WxFooterComponent;
}());
__decorate([
    core_1.HostBinding("attr.class"),
    __metadata("design:type", String)
], WxFooterComponent.prototype, "classes", void 0);
__decorate([
    core_1.Input("fix-bottom"),
    __metadata("design:type", Boolean)
], WxFooterComponent.prototype, "fixBottom", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], WxFooterComponent.prototype, "links", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WxFooterComponent.prototype, "tips", void 0);
WxFooterComponent = __decorate([
    core_1.Component({
        selector: "div[wx-footer]",
        template: "\n    <p *ngIf=\"links\" class=\"weui-footer__links\">\n      <a *ngFor=\"let link of links\" class=\"weui-footer__link\" style=\"cursor: pointer;\" (click)=\"doLink(link.uri)\">{{link.label}}</a>\n    </p>\n    <p class=\"weui-footer__text\">{{tips}}</p>\n  ",
    }),
    __metadata("design:paramtypes", [router_1.Router])
], WxFooterComponent);
exports.WxFooterComponent = WxFooterComponent;

//# sourceMappingURL=footer.component.js.map
