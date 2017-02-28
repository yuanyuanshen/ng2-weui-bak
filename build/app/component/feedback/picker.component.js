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
 * WeUI 日期选择组件
 * @class                            WxToastMsgComponent
 * @property {string}                WxToastMsgComponent.message     - 输入参数: 消息内容
 * @property {number}                WxToastMsgComponent.showSeconds - 输入参数: 持续时长(秒)
 * @property {boolean}               WxToastMsgComponent.display     - 输入输出参数: 是否显示
 * @event                            WxToastMsgComponent#display
 */
var WxDatePickerComponent = (function () {
    function WxDatePickerComponent() {
        this.styles = "none";
        this.display = false;
        this.displayChange = new core_1.EventEmitter();
        this.doCheck = new core_1.EventEmitter();
    }
    WxDatePickerComponent.prototype.ngOnChanges = function () {
        if (this.display) {
            this.styles = "block";
        }
        else {
            this.styles = "none";
        }
    };
    WxDatePickerComponent.prototype.doSelect = function (menu) {
        this.doCheck.emit(menu);
        this.display = false;
        this.displayChange.emit(this.display);
    };
    WxDatePickerComponent.prototype.doCancel = function () {
        this.doCheck.emit(null);
        this.display = false;
        this.displayChange.emit(this.display);
    };
    return WxDatePickerComponent;
}());
__decorate([
    core_1.HostBinding("style.display"),
    __metadata("design:type", String)
], WxDatePickerComponent.prototype, "styles", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WxDatePickerComponent.prototype, "display", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], WxDatePickerComponent.prototype, "displayChange", void 0);
__decorate([
    core_1.Output("do-check"),
    __metadata("design:type", core_1.EventEmitter)
], WxDatePickerComponent.prototype, "doCheck", void 0);
WxDatePickerComponent = __decorate([
    core_1.Component({
        selector: "div[wx-datepicker]",
        template: "\n    <div class=\"weui-mask\" (click)=\"doCancel()\" [ngClass]=\"{'weui-animate-fade-in': display}\"></div>\n    <div class=\"weui-picker\" [ngClass]=\"{'weui-animate-slide-up': display}\">\n      <div class=\"weui-picker__hd\">\n        <a class=\"weui-picker__action\" style=\"cursor: pointer\" (click)=\"doCancel()\">\u53D6\u6D88</a>\n        <a class=\"weui-picker__action\" style=\"cursor: pointer\" (click)=\"doSelect('confirm')\">\u786E\u5B9A</a>\n      </div>\n      <div class=\"weui-picker__bd\">\n        <div class=\"weui-picker__group\">\n          <div class=\"weui-picker__mask\"></div>\n          <div class=\"weui-picker__indicator\"></div>\n          <div class=\"weui-picker__content\">\n            <div class=\"weui-picker__item\">1</div>\n            <div class=\"weui-picker__item\">1</div>\n            <div class=\"weui-picker__item\">1</div>\n          </div>\n        </div>\n        <div class=\"weui-picker__group\">\n          <div class=\"weui-picker__mask\"></div>\n          <div class=\"weui-picker__indicator\"></div>\n          <div class=\"weui-picker__content\">\n            <div class=\"weui-picker__item\">2</div>\n            <div class=\"weui-picker__item\">2</div>\n            <div class=\"weui-picker__item\">2</div>\n          </div>\n        </div>\n        <div class=\"weui-picker__group\">\n          <div class=\"weui-picker__mask\"></div>\n          <div class=\"weui-picker__indicator\"></div>\n          <div class=\"weui-picker__content\">\n            <div class=\"weui-picker__item\">3</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  ",
    })
], WxDatePickerComponent);
exports.WxDatePickerComponent = WxDatePickerComponent;

//# sourceMappingURL=picker.component.js.map
