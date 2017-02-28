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
 * WeUI 进度条组件
 * @class WxProgressComponent
 */
var WxProgressComponent = (function () {
    function WxProgressComponent() {
    }
    return WxProgressComponent;
}());
WxProgressComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-progress",
        },
        selector: "div[wx-progress]",
        template: "\n    <ng-content select=\"[wx-progress-bar]\"></ng-content>\n    <ng-content select=\"[wx-progress-operate]\"></ng-content>\n  ",
    })
], WxProgressComponent);
exports.WxProgressComponent = WxProgressComponent;
/**
 * WeUI 进度条显示组件
 * @class             WxProgressBarComponent
 * @property {number} WxProgressBarComponent.max   - 输入参数: 最大值
 * @property {number} WxProgressBarComponent.value - 输入参数: 当前值
 */
var WxProgressBarComponent = (function () {
    function WxProgressBarComponent() {
        this.pax = "0%";
    }
    WxProgressBarComponent.prototype.ngOnChanges = function () {
        if (this.value !== undefined && this.max !== undefined && this.max > 0 && this.value >= 0) {
            this.pax = String(this.value / this.max * 100) + "%";
        }
    };
    return WxProgressBarComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], WxProgressBarComponent.prototype, "max", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], WxProgressBarComponent.prototype, "value", void 0);
WxProgressBarComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-progress__bar",
        },
        selector: "div[wx-progress-bar]",
        template: "\n    <div class=\"weui-progress__inner-bar js_progress\" [ngStyle]=\"{ 'width': pax }\"></div>\n  ",
    })
], WxProgressBarComponent);
exports.WxProgressBarComponent = WxProgressBarComponent;
/**
 * WeUI 进度条操作组件
 * @class WxProgressOperateComponent
 */
var WxProgressOperateComponent = (function () {
    function WxProgressOperateComponent() {
    }
    return WxProgressOperateComponent;
}());
WxProgressOperateComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-progress__opr",
            "style": "cursor: pointer;",
        },
        selector: "a[wx-progress-operate]",
        template: "\n    <ng-content select=\"[wx-icon]\"></ng-content>\n  ",
    })
], WxProgressOperateComponent);
exports.WxProgressOperateComponent = WxProgressOperateComponent;

//# sourceMappingURL=progress.component.js.map
