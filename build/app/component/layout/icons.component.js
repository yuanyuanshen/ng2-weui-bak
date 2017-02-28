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
 * WeUI 图标组件
 * @class               WxIconComponent
 * @property {IconType} WxIconComponent.type    - 输入参数: 类型
 * @property {IconSize} WxIconComponent.size    - 输入参数: 大小
 */
var WxIconComponent = (function () {
    function WxIconComponent() {
        this.classes = "";
        this.type = "success";
        this.size = "small";
        this.forToast = false;
    }
    WxIconComponent.prototype.ngOnInit = function () {
        // 设定样式
        if (this.type === "success") {
            this.classes += " weui-icon-success";
        }
        else if (this.type === "success-circle") {
            this.classes += " weui-icon-success-circle";
        }
        else if (this.type === "success-no-circle") {
            this.classes += " weui-icon-success-no-circle";
        }
        else if (this.type === "circle") {
            this.classes += " weui-icon-circle";
        }
        else if (this.type === "warn") {
            this.classes += " weui-icon-warn";
        }
        else if (this.type === "warn-normal") {
            this.classes += " weui-icon-warn weui-icon_msg-primary";
        }
        else if (this.type === "download") {
            this.classes += " weui-icon-download";
        }
        else if (this.type === "info") {
            this.classes += " weui-icon-info";
        }
        else if (this.type === "info-circle") {
            this.classes += " weui-icon-info-circle";
        }
        else if (this.type === "cancel") {
            this.classes += " weui-icon-cancel";
        }
        else if (this.type === "search") {
            this.classes += " weui-icon-search";
        }
        else if (this.type === "clear") {
            this.classes += " weui-icon-clear";
        }
        else if (this.type === "delete") {
            this.classes += " weui-icon-delete";
        }
        else if (this.type === "gallery-delete") {
            this.classes += " weui-icon-delete weui-icon_gallery-delete";
        }
        else if (this.type === "waiting") {
            this.classes += " weui-icon-waiting";
        }
        else if (this.type === "waiting-circle") {
            this.classes += " weui-icon-waiting-circle";
        }
        else if (this.type === "loading") {
            this.classes += " weui-loading";
        }
        // 设定大小
        // 以下三类图标没有size属性, size属性无效
        if (this.type !== "warn-normal" && this.type !== "gallery-delete" && this.type !== "loading") {
            if (this.size === "large") {
                this.classes += " weui-icon_msg";
            }
            else if (this.size === "small") {
                this.classes += "";
            }
        }
        // 设定是否用于面包框消息
        if (this.forToast) {
            this.classes += " weui-icon_toast";
        }
        // 整理样式
        this.classes = this.classes.trim();
    };
    return WxIconComponent;
}());
__decorate([
    core_1.HostBinding("attr.class"),
    __metadata("design:type", String)
], WxIconComponent.prototype, "classes", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WxIconComponent.prototype, "type", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WxIconComponent.prototype, "size", void 0);
__decorate([
    core_1.Input("for-toast"),
    __metadata("design:type", Boolean)
], WxIconComponent.prototype, "forToast", void 0);
WxIconComponent = __decorate([
    core_1.Component({
        selector: "i[wx-icon]",
        template: "",
    })
], WxIconComponent);
exports.WxIconComponent = WxIconComponent;

//# sourceMappingURL=icons.component.js.map
