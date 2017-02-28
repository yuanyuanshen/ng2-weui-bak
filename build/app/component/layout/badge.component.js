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
 * WeUI 徽章点组件
 * @class                     WxBadgeDotComponent
 * @property {BadgeColorType} WxBadgeDotComponent.color - 背景颜色
 */
var WxBadgeDotComponent = (function () {
    function WxBadgeDotComponent() {
    }
    WxBadgeDotComponent.prototype.ngOnInit = function () {
        if (!this.color || this.color === "red") {
            this.bgColor = "#e64340";
        }
        else if (this.color === "green") {
            this.bgColor = "#1aad19";
        }
        else if (this.color === "blue") {
            this.bgColor = "#3071a9";
        }
        else if (this.color === "yellow") {
            this.bgColor = "#ec971f";
        }
    };
    return WxBadgeDotComponent;
}());
__decorate([
    core_1.HostBinding("style.background-color"),
    __metadata("design:type", String)
], WxBadgeDotComponent.prototype, "bgColor", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WxBadgeDotComponent.prototype, "color", void 0);
WxBadgeDotComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-badge weui-badge_dot",
            "style": "margin-left: 5px; margin-right: 5px;",
        },
        selector: "span[wx-badge-dot]",
        template: "",
    })
], WxBadgeDotComponent);
exports.WxBadgeDotComponent = WxBadgeDotComponent;
/**
 * WeUI 徽章标签组件
 * @class                     WxBadgeComponent
 * @property {BadgeColorType} WxBadgeComponent.color - 背景颜色
 */
var WxBadgeComponent = (function () {
    function WxBadgeComponent() {
    }
    WxBadgeComponent.prototype.ngOnInit = function () {
        if (!this.color || this.color === "red") {
            this.bgColor = "#e64340";
        }
        else if (this.color === "green") {
            this.bgColor = "#1aad19";
        }
        else if (this.color === "blue") {
            this.bgColor = "#3071a9";
        }
        else if (this.color === "yellow") {
            this.bgColor = "#ec971f";
        }
    };
    return WxBadgeComponent;
}());
__decorate([
    core_1.HostBinding("style.background-color"),
    __metadata("design:type", String)
], WxBadgeComponent.prototype, "bgColor", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WxBadgeComponent.prototype, "color", void 0);
WxBadgeComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-badge",
            "style": "margin-left: 5px; margin-right: 5px;",
        },
        selector: "span[wx-badge]",
        template: "\n    <ng-content></ng-content>\n  ",
    })
], WxBadgeComponent);
exports.WxBadgeComponent = WxBadgeComponent;

//# sourceMappingURL=badge.component.js.map
