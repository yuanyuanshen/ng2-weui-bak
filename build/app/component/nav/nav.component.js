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
 * WeUI 顶部导航标签组件
 * @class                            WxNavbarComponent
 * @property {Array<TabMenu>}        WxNavbarComponent.menus     - 输入参数: 选项定义对象数组
 * @property {EventEmitter<TabMenu>} WxNavbarComponent.onSelect  - 输出参数: 确认选择
 * @event                            WxNavbarComponent#on-select
 */
var WxNavbarComponent = (function () {
    function WxNavbarComponent() {
        this.onSelect = new core_1.EventEmitter();
    }
    WxNavbarComponent.prototype.doSwitch = function (selectMenu) {
        var _this = this;
        this.menus.forEach(function (menu, index) {
            if (menu.value === selectMenu.value) {
                _this.menus[index].active = true;
            }
            else {
                _this.menus[index].active = false;
            }
        });
        this.onSelect.emit(selectMenu);
    };
    return WxNavbarComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], WxNavbarComponent.prototype, "menus", void 0);
__decorate([
    core_1.Output("on-select"),
    __metadata("design:type", core_1.EventEmitter)
], WxNavbarComponent.prototype, "onSelect", void 0);
WxNavbarComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-tab",
        },
        selector: "div[wx-navbar]",
        template: "\n    <div class=\"weui-navbar\">\n      <div class=\"weui-navbar__item\" style=\"cursor: pointer;\" *ngFor=\"let menu of menus\" [ngClass]=\"{'weui-bar__item_on': menu.active}\" (click)=\"doSwitch(menu)\">\n        {{menu.label}}\n      </div>\n    </div>\n    <div class=\"weui-tab__panel\"></div>\n  ",
    })
], WxNavbarComponent);
exports.WxNavbarComponent = WxNavbarComponent;
/**
 * WeUI 底部导航标签组件
 * @class                            WxTabbarComponent
 * @property {Array<TabMenu>}        WxTabbarComponent.menus     - 输入参数: 选项定义对象数组
 * @property {EventEmitter<TabMenu>} WxTabbarComponent.onSelect  - 输出参数: 确认选择
 * @event                            WxTabbarComponent#on-select
 */
var WxTabbarComponent = (function () {
    function WxTabbarComponent() {
        this.onSelect = new core_1.EventEmitter();
    }
    WxTabbarComponent.prototype.doSwitch = function (selectMenu) {
        var _this = this;
        this.menus.forEach(function (menu, index) {
            if (menu.value === selectMenu.value) {
                _this.menus[index].active = true;
            }
            else {
                _this.menus[index].active = false;
            }
        });
        this.onSelect.emit(selectMenu);
    };
    return WxTabbarComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], WxTabbarComponent.prototype, "menus", void 0);
__decorate([
    core_1.Output("on-select"),
    __metadata("design:type", core_1.EventEmitter)
], WxTabbarComponent.prototype, "onSelect", void 0);
WxTabbarComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-tab",
        },
        selector: "div[wx-tabbar]",
        template: "\n    <div class=\"weui-tab__panel\"></div>\n    <div class=\"weui-tabbar\">\n      <div class=\"weui-tabbar__item\" style=\"cursor: pointer;\" *ngFor=\"let menu of menus\" [ngClass]=\"{'weui-bar__item_on': menu.active}\" (click)=\"doSwitch(menu)\">\n        <span *ngIf=\"menu.badgeLabel || menu.badgeColor\" style=\"display: inline-block;position: relative;\">\n          <img [src]=\"menu.imageUrl\" alt=\"\" class=\"weui-tabbar__icon\">\n          <span wx-badge *ngIf=\"menu.badgeLabel && menu.badgeLabel.trim().length > 0\" [color]=\"menu.badgeColor\" style=\"position: absolute;top: -2px;right: -17px;\">{{menu.badgeLabel}}</span>\n          <span wx-badge-dot *ngIf=\"!menu.badgeLabel || menu.badgeLabel.trim().length === 0\" [color]=\"menu.badgeColor\" style=\"position: absolute;top: 0;right: -10px;\"></span>\n        </span>\n        <img [src]=\"menu.imageUrl\" *ngIf=\"!menu.badgeLabel && !menu.badgeColor\" alt=\"\" class=\"weui-tabbar__icon\">\n        <p class=\"weui-tabbar__label\">{{menu.label}}</p>\n      </div>\n    </div>\n  ",
    })
], WxTabbarComponent);
exports.WxTabbarComponent = WxTabbarComponent;

//# sourceMappingURL=nav.component.js.map
