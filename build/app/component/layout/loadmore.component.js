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
 * WeUI 载入更多组件
 * @class              WxLoadmoreComponent
 * @property {boolean} WxLoadmoreComponent.withLine - 输入参数: 是否有横线
 * @property {boolean} WxLoadmoreComponent.withDot  - 输入参数: 是否有点
 */
var WxLoadmoreComponent = (function () {
    function WxLoadmoreComponent() {
        this.classes = "weui-loadmore";
    }
    WxLoadmoreComponent.prototype.ngOnInit = function () {
        if (this.withLine) {
            this.classes += " weui-loadmore_line";
        }
        if (this.withDot) {
            this.classes += " weui-loadmore_dot";
        }
    };
    return WxLoadmoreComponent;
}());
__decorate([
    core_1.HostBinding("attr.class"),
    __metadata("design:type", String)
], WxLoadmoreComponent.prototype, "classes", void 0);
__decorate([
    core_1.Input("with-line"),
    __metadata("design:type", Boolean)
], WxLoadmoreComponent.prototype, "withLine", void 0);
__decorate([
    core_1.Input("with-dot"),
    __metadata("design:type", Boolean)
], WxLoadmoreComponent.prototype, "withDot", void 0);
WxLoadmoreComponent = __decorate([
    core_1.Component({
        selector: "div[wx-loadmore]",
        template: "\n    <ng-content select=\"[wx-icon]\"></ng-content>\n    <ng-content select=\"[wx-loadmore-tips]\"></ng-content>\n  ",
    })
], WxLoadmoreComponent);
exports.WxLoadmoreComponent = WxLoadmoreComponent;
/**
 * WeUI 载入更多提示语组件
 * @class              WxLoadmoreTipsComponent
 * @property {boolean} WxLoadmoreTipsComponent.tips - 输入参数: 提示语
 */
var WxLoadmoreTipsComponent = (function () {
    function WxLoadmoreTipsComponent() {
    }
    return WxLoadmoreTipsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WxLoadmoreTipsComponent.prototype, "tips", void 0);
WxLoadmoreTipsComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-loadmore__tips",
        },
        selector: "span[wx-loadmore-tips]",
        template: "\n    {{tips}}\n  ",
    })
], WxLoadmoreTipsComponent);
exports.WxLoadmoreTipsComponent = WxLoadmoreTipsComponent;

//# sourceMappingURL=loadmore.component.js.map
