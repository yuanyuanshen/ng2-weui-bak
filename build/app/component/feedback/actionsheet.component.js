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
 * WeUI 弹出菜单组件(IOS样式)
 * @class                                    WxActionsheetIOSComponent
 * @property {Array<ActionsheetItem>}        WxActionsheetIOSComponent.menus    - 输入参数: 选项定义对象数组
 * @property {boolean}                       WxActionsheetIOSComponent.display  - 输入输出参数: 是否显示
 * @property {EventEmitter<ActionsheetItem>} WxActionsheetIOSComponent.doCheck  - 输出参数: 确认选择
 * @event                                    WxActionsheetIOSComponent#display
 * @event                                    WxActionsheetIOSComponent#do-check
 */
var WxActionsheetIOSComponent = (function () {
    function WxActionsheetIOSComponent() {
        this.display = false;
        this.displayChange = new core_1.EventEmitter();
        this.doCheck = new core_1.EventEmitter();
    }
    WxActionsheetIOSComponent.prototype.doSelect = function (menu) {
        this.doCheck.emit(menu);
        this.display = false;
        this.displayChange.emit(this.display);
    };
    WxActionsheetIOSComponent.prototype.doCancel = function () {
        this.doCheck.emit(null);
        this.display = false;
        this.displayChange.emit(this.display);
    };
    return WxActionsheetIOSComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WxActionsheetIOSComponent.prototype, "display", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], WxActionsheetIOSComponent.prototype, "displayChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], WxActionsheetIOSComponent.prototype, "menus", void 0);
__decorate([
    core_1.Output("do-check"),
    __metadata("design:type", core_1.EventEmitter)
], WxActionsheetIOSComponent.prototype, "doCheck", void 0);
WxActionsheetIOSComponent = __decorate([
    core_1.Component({
        selector: "div[wx-actionsheet-ios]",
        template: "\n    <div class=\"weui-mask\" (click)=\"doCancel()\" [ngStyle]=\"{ 'display': display === true ? 'block' : 'none' }\"></div>\n    <div class=\"weui-actionsheet\" [ngClass]=\"{ 'weui-actionsheet_toggle': display }\">\n      <div class=\"weui-actionsheet__menu\">\n        <div *ngFor=\"let menu of menus\" class=\"weui-actionsheet__cell\" (click)=\"doSelect(menu)\">{{menu.label}}</div>\n      </div>\n      <div class=\"weui-actionsheet__action\">\n        <div class=\"weui-actionsheet__cell\" (click)=\"doCancel()\">\u53D6\u6D88</div>\n      </div>\n    </div>\n  ",
    })
], WxActionsheetIOSComponent);
exports.WxActionsheetIOSComponent = WxActionsheetIOSComponent;
/**
 * WeUI 弹出菜单组件(Android样式)
 * @class                                    WxActionsheetAndroidComponent
 * @property {Array<ActionsheetItem>}        WxActionsheetAndroidComponent.menus    - 输入参数: 选项定义对象数组
 * @property {boolean}                       WxActionsheetAndroidComponent.display  - 输入输出参数: 是否显示
 * @property {EventEmitter<ActionsheetItem>} WxActionsheetAndroidComponent.doCheck  - 输出参数: 确认选择
 * @event                                    WxActionsheetAndroidComponent#display
 * @event                                    WxActionsheetAndroidComponent#do-check
 */
var WxActionsheetAndroidComponent = (function () {
    function WxActionsheetAndroidComponent() {
        this.styles = "none";
        this.display = false;
        this.displayChange = new core_1.EventEmitter();
        this.doCheck = new core_1.EventEmitter();
    }
    WxActionsheetAndroidComponent.prototype.ngOnChanges = function () {
        if (this.display) {
            this.styles = "block";
        }
        else {
            this.styles = "none";
        }
    };
    WxActionsheetAndroidComponent.prototype.doSelect = function (menu) {
        this.doCheck.emit(menu);
        this.display = false;
        this.displayChange.emit(this.display);
    };
    WxActionsheetAndroidComponent.prototype.doCancel = function () {
        this.doCheck.emit(null);
        this.display = false;
        this.displayChange.emit(this.display);
    };
    return WxActionsheetAndroidComponent;
}());
__decorate([
    core_1.HostBinding("style.display"),
    __metadata("design:type", String)
], WxActionsheetAndroidComponent.prototype, "styles", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WxActionsheetAndroidComponent.prototype, "display", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], WxActionsheetAndroidComponent.prototype, "displayChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], WxActionsheetAndroidComponent.prototype, "menus", void 0);
__decorate([
    core_1.Output("do-check"),
    __metadata("design:type", core_1.EventEmitter)
], WxActionsheetAndroidComponent.prototype, "doCheck", void 0);
WxActionsheetAndroidComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-skin_android",
        },
        selector: "div[wx-actionsheet-android]",
        template: "\n    <div class=\"weui-mask\" (click)=\"doCancel()\"></div>\n    <div class=\"weui-actionsheet\">\n      <div class=\"weui-actionsheet__menu\">\n        <div *ngFor=\"let menu of menus\" class=\"weui-actionsheet__cell\" (click)=\"doSelect(menu)\">{{menu.label}}</div>\n      </div>\n    </div>\n  ",
    })
], WxActionsheetAndroidComponent);
exports.WxActionsheetAndroidComponent = WxActionsheetAndroidComponent;

//# sourceMappingURL=actionsheet.component.js.map
