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
var forms_1 = require("@angular/forms");
/**
 * WeUI 搜索栏组件
 * @class WxSearchbarComponent
 * @attribute {NgModel} - 输入输出变量: 绑定的对象变量
 */
var WxSearchbarComponent = WxSearchbarComponent_1 = (function () {
    function WxSearchbarComponent(elementRef) {
        this.elementRef = elementRef;
        this.classes = "weui-search-bar";
        this.innerValue = "";
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
    }
    WxSearchbarComponent.prototype.writeValue = function (val) {
        if (val !== this.innerValue) {
            this.innerValue = val;
        }
    };
    WxSearchbarComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    WxSearchbarComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    WxSearchbarComponent.prototype.touchLabel = function () {
        this.classes = "weui-search-bar weui-search-bar_focusing";
        this.elementRef.nativeElement.getElementsByClassName("weui-search-bar__input")[0].focus();
    };
    WxSearchbarComponent.prototype.blurInput = function () {
        if (this.value && this.value.length > 0) {
            this.classes = "weui-search-bar weui-search-bar_focusing";
        }
        else {
            this.classes = "weui-search-bar";
        }
    };
    WxSearchbarComponent.prototype.doClear = function () {
        this.value = undefined;
        this.elementRef.nativeElement.getElementsByClassName("weui-search-bar__input")[0].focus();
    };
    WxSearchbarComponent.prototype.doCancel = function () {
        this.value = undefined;
        this.classes = "weui-search-bar";
    };
    Object.defineProperty(WxSearchbarComponent.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
        set: function (val) {
            if (val !== this.innerValue) {
                this.innerValue = val;
                this.onChangeCallback(val);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    return WxSearchbarComponent;
}());
__decorate([
    core_1.HostBinding("attr.class"),
    __metadata("design:type", String)
], WxSearchbarComponent.prototype, "classes", void 0);
WxSearchbarComponent = WxSearchbarComponent_1 = __decorate([
    core_1.Component({
        providers: [{
                multi: true, provide: forms_1.NG_VALUE_ACCESSOR, useExisting: core_1.forwardRef(function () { return WxSearchbarComponent_1; }),
            }],
        selector: "div[wx-searchbar]",
        template: "\n    <div class=\"weui-search-bar__form\">\n      <div class=\"weui-search-bar__box\" style=\"height: 26px;\">\n        <i class=\"weui-icon-search\"></i>\n        <input type=\"search\" class=\"weui-search-bar__input\" [(ngModel)]=\"value\" (blur)=\"blurInput()\" placeholder=\"\u641C\u7D22\"/>\n        <a style=\"cursor: pointer\" class=\"weui-icon-clear\" *ngIf=\"value\" (click)=\"doClear()\"></a>\n      </div>\n      <label class=\"weui-search-bar__label\" (click)=\"touchLabel()\">\n        <i class=\"weui-icon-search\"></i>\n        <span>\u641C\u7D22</span>\n      </label>\n    </div>\n    <a style=\"cursor: pointer\" class=\"weui-search-bar__cancel-btn\" (click)=\"doCancel()\">\u53D6\u6D88</a>\n  ",
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], WxSearchbarComponent);
exports.WxSearchbarComponent = WxSearchbarComponent;
var WxSearchbarComponent_1;

//# sourceMappingURL=searchbar.component.js.map
