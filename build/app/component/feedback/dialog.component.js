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
 * WeUI 消息对话框组件(IOS样式)
 * @class                                 WxDialogIOSComponent
 * @property {Array<DialogOption>}        WxDialogIOSComponent.options  - 输入参数: 选项定义对象数组
 * @property {string}                     WxDialogIOSComponent.title    - 输入参数: 标题
 * @property {string}                     WxDialogIOSComponent.content  - 输入参数: 内容
 * @property {boolean}                    WxDialogIOSComponent.display  - 输入输出参数: 是否显示
 * @property {boolean}                    WxDialogIOSComponent.isModel  - 输入参数: 是否模式窗体
 * @property {EventEmitter<DialogOption>} WxDialogIOSComponent.doCheck  - 输出参数: 确认选择
 * @event                                 WxDialogIOSComponent#display
 * @event                                 WxDialogIOSComponent#do-check
 */
var WxDialogIOSComponent = (function () {
    function WxDialogIOSComponent() {
        this.styles = "none";
        this.isModel = true;
        this.display = false;
        this.displayChange = new core_1.EventEmitter();
        this.doCheck = new core_1.EventEmitter();
    }
    WxDialogIOSComponent.prototype.ngOnChanges = function () {
        if (this.display) {
            this.styles = "block";
        }
        else {
            this.styles = "none";
        }
    };
    WxDialogIOSComponent.prototype.doSelect = function (option) {
        this.doCheck.emit(option);
        this.display = false;
        this.displayChange.emit(this.display);
    };
    WxDialogIOSComponent.prototype.doCancel = function () {
        this.doCheck.emit(null);
        this.display = false;
        this.displayChange.emit(this.display);
    };
    return WxDialogIOSComponent;
}());
__decorate([
    core_1.HostBinding("style.display"),
    __metadata("design:type", String)
], WxDialogIOSComponent.prototype, "styles", void 0);
__decorate([
    core_1.Input("is-model"),
    __metadata("design:type", Boolean)
], WxDialogIOSComponent.prototype, "isModel", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WxDialogIOSComponent.prototype, "display", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], WxDialogIOSComponent.prototype, "displayChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WxDialogIOSComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WxDialogIOSComponent.prototype, "content", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], WxDialogIOSComponent.prototype, "options", void 0);
__decorate([
    core_1.Output("do-check"),
    __metadata("design:type", core_1.EventEmitter)
], WxDialogIOSComponent.prototype, "doCheck", void 0);
WxDialogIOSComponent = __decorate([
    core_1.Component({
        selector: "div[wx-dialog-ios]",
        template: "\n    <div *ngIf=\"!isModel\" class=\"weui-mask\" (click)=\"doCancel()\"></div>\n    <div *ngIf=\"isModel\" class=\"weui-mask\"></div>\n    <div class=\"weui-dialog\">\n      <div *ngIf=\"title\" class=\"weui-dialog__hd\">\n        <strong class=\"weui-dialog__title\">{{title}}</strong>\n      </div>\n      <div *ngIf=\"content\" class=\"weui-dialog__bd\">{{content}}</div>\n      <div *ngIf=\"options\" class=\"weui-dialog__ft\">\n        <a *ngFor=\"let option of options\" style=\"cursor: pointer;\" class=\"weui-dialog__btn\"\n          [ngClass]=\"{ 'weui-dialog__btn_default': option.style === 'default', 'weui-dialog__btn_primary': option.style === 'primary' }\"\n          (click)=\"doSelect(option)\">{{option.label}}</a>\n      </div>\n    </div>\n  ",
    })
], WxDialogIOSComponent);
exports.WxDialogIOSComponent = WxDialogIOSComponent;
/**
 * WeUI 消息对话框组件(Android样式)
 * @class                                 WxDialogAndroidComponent
 * @property {Array<DialogOption>}        WxDialogAndroidComponent.options  - 输入参数: 选项定义对象数组
 * @property {string}                     WxDialogAndroidComponent.title    - 输入参数: 标题
 * @property {string}                     WxDialogAndroidComponent.content  - 输入参数: 内容
 * @property {boolean}                    WxDialogAndroidComponent.display  - 输入输出参数: 是否显示
 * @property {boolean}                    WxDialogAndroidComponent.isModel  - 输入参数: 是否模式窗体
 * @property {EventEmitter<DialogOption>} WxDialogAndroidComponent.doCheck  - 输出参数: 确认选择
 * @event                                 WxDialogAndroidComponent#display
 * @event                                 WxDialogAndroidComponent#do-check
 */
var WxDialogAndroidComponent = (function () {
    function WxDialogAndroidComponent() {
        this.styles = "none";
        this.isModel = true;
        this.display = false;
        this.displayChange = new core_1.EventEmitter();
        this.doCheck = new core_1.EventEmitter();
    }
    WxDialogAndroidComponent.prototype.ngOnChanges = function () {
        if (this.display) {
            this.styles = "block";
        }
        else {
            this.styles = "none";
        }
    };
    WxDialogAndroidComponent.prototype.doSelect = function (option) {
        this.doCheck.emit(option);
        this.display = false;
        this.displayChange.emit(this.display);
    };
    WxDialogAndroidComponent.prototype.doCancel = function () {
        this.doCheck.emit(null);
        this.display = false;
        this.displayChange.emit(this.display);
    };
    return WxDialogAndroidComponent;
}());
__decorate([
    core_1.HostBinding("style.display"),
    __metadata("design:type", String)
], WxDialogAndroidComponent.prototype, "styles", void 0);
__decorate([
    core_1.Input("is-model"),
    __metadata("design:type", Boolean)
], WxDialogAndroidComponent.prototype, "isModel", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WxDialogAndroidComponent.prototype, "display", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], WxDialogAndroidComponent.prototype, "displayChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WxDialogAndroidComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WxDialogAndroidComponent.prototype, "content", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], WxDialogAndroidComponent.prototype, "options", void 0);
__decorate([
    core_1.Output("do-check"),
    __metadata("design:type", core_1.EventEmitter)
], WxDialogAndroidComponent.prototype, "doCheck", void 0);
WxDialogAndroidComponent = __decorate([
    core_1.Component({
        selector: "div[wx-dialog-android]",
        template: "\n    <div *ngIf=\"!isModel\" class=\"weui-mask\" (click)=\"doCancel()\"></div>\n    <div *ngIf=\"isModel\" class=\"weui-mask\"></div>\n    <div class=\"weui-dialog weui-skin_android\">\n      <div *ngIf=\"title\" class=\"weui-dialog__hd\">\n        <strong class=\"weui-dialog__title\">{{title}}</strong>\n      </div>\n      <div *ngIf=\"content\" class=\"weui-dialog__bd\">{{content}}</div>\n      <div *ngIf=\"options\" class=\"weui-dialog__ft\">\n        <a *ngFor=\"let option of options\" style=\"cursor: pointer;\" class=\"weui-dialog__btn\"\n          [ngClass]=\"{ 'weui-dialog__btn_default': option.style === 'default', 'weui-dialog__btn_primary': option.style === 'primary' }\"\n          (click)=\"doSelect(option)\">{{option.label}}</a>\n      </div>\n    </div>\n  ",
    })
], WxDialogAndroidComponent);
exports.WxDialogAndroidComponent = WxDialogAndroidComponent;

//# sourceMappingURL=dialog.component.js.map
