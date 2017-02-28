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
 * WeUI 面包框组件
 * @class                            WxToastMsgComponent
 * @property {string}                WxToastMsgComponent.message     - 输入参数: 消息内容
 * @property {number}                WxToastMsgComponent.showSeconds - 输入参数: 持续时长(秒)
 * @property {boolean}               WxToastMsgComponent.display     - 输入输出参数: 是否显示
 * @event                            WxToastMsgComponent#display
 */
var WxToastComponent = (function () {
    function WxToastComponent() {
        this.styles = "none";
        this.showSeconds = 9999;
        this.display = false;
        this.displayChange = new core_1.EventEmitter();
    }
    WxToastComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.display) {
            this.styles = "block";
            setTimeout(function () {
                _this.display = false;
                _this.displayChange.emit(_this.display);
            }, this.showSeconds * 1200);
        }
        else {
            this.styles = "none";
        }
    };
    return WxToastComponent;
}());
__decorate([
    core_1.HostBinding("style.display"),
    __metadata("design:type", String)
], WxToastComponent.prototype, "styles", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WxToastComponent.prototype, "message", void 0);
__decorate([
    core_1.Input("show-seconds"),
    __metadata("design:type", Number)
], WxToastComponent.prototype, "showSeconds", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WxToastComponent.prototype, "display", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], WxToastComponent.prototype, "displayChange", void 0);
WxToastComponent = __decorate([
    core_1.Component({
        selector: "div[wx-toast]",
        template: "\n    <div class=\"weui-mask_transparent\"></div>\n    <div class=\"weui-toast\">\n      <ng-content select=\"[wx-icon]\"></ng-content>\n      <p class=\"weui-toast__content\">{{message}}</p>\n    </div>\n  ",
    })
], WxToastComponent);
exports.WxToastComponent = WxToastComponent;

//# sourceMappingURL=toast.component.js.map
