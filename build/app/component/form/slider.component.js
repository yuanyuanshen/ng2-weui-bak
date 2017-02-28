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
 * WeUI 滑块容器组件
 * @class WxSliderBoxComponent
 */
var WxSliderBoxComponent = (function () {
    function WxSliderBoxComponent() {
    }
    return WxSliderBoxComponent;
}());
WxSliderBoxComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-slider-box",
        },
        selector: "div[wx-slider-box]",
        template: "\n    <ng-content select=\"[wx-slider],[wx-slider-box-value]\"></ng-content>\n  ",
    })
], WxSliderBoxComponent);
exports.WxSliderBoxComponent = WxSliderBoxComponent;
/**
 * WeUI 滑块值标签组件
 * @class WxSliderBoxValueComponent
 */
var WxSliderBoxValueComponent = (function () {
    function WxSliderBoxValueComponent() {
    }
    return WxSliderBoxValueComponent;
}());
WxSliderBoxValueComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-slider-box__value",
        },
        selector: "div[wx-slider-box-value]",
        template: "\n    <ng-content></ng-content>\n  ",
    })
], WxSliderBoxValueComponent);
exports.WxSliderBoxValueComponent = WxSliderBoxValueComponent;
/**
 * WeUI 滑块组件
 * @class             WxSliderComponent
 * @property {number} WxSliderComponent.max   - 输入参数: 最大值
 * @property {number} WxSliderComponent.value - 输入输出参数: 当前值
 */
var WxSliderComponent = (function () {
    function WxSliderComponent() {
        this.valueChange = new core_1.EventEmitter();
        this.pax = 0;
        this.startX = 0;
        this.startLeft = 0;
    }
    WxSliderComponent.prototype.ngOnChanges = function () {
        if (this.value !== undefined && this.max !== undefined && this.max > 0 && this.value >= 0) {
            this.pax = this.value / this.max * 100;
        }
    };
    WxSliderComponent.prototype.doMove = function (event) {
        var totalLen = event.target.parentNode.offsetWidth;
        var dist = this.startLeft + event.changedTouches[0].clientX - this.startX;
        dist = dist < 0 ? 0 : dist > totalLen ? totalLen : dist;
        this.pax = dist / totalLen * 100;
        this.value = dist / totalLen * this.max;
        this.valueChange.emit(this.value);
    };
    WxSliderComponent.prototype.doStart = function (event) {
        var totalLen = event.target.parentNode.offsetWidth;
        this.startLeft = this.pax * totalLen / 100;
        this.startX = event.changedTouches[0].clientX;
    };
    return WxSliderComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], WxSliderComponent.prototype, "max", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], WxSliderComponent.prototype, "value", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], WxSliderComponent.prototype, "valueChange", void 0);
WxSliderComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-slider",
        },
        selector: "div[wx-slider]",
        template: "\n    <div class=\"weui-slider__inner\">\n      <div [ngStyle]=\"{ 'width': pax+'%' }\" class=\"weui-slider__track\"></div>\n      <div [ngStyle]=\"{ 'left': pax+'%' }\" class=\"weui-slider__handler\" (touchmove)=\"doMove($event)\" (touchstart)=\"doStart($event)\"></div>\n    </div>\n  ",
    })
], WxSliderComponent);
exports.WxSliderComponent = WxSliderComponent;

//# sourceMappingURL=slider.component.js.map
