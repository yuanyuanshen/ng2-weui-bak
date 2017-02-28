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
 * WeUI 画廊组件
 * @class                            WxGalleryComponent
 * @property {string}                WxGalleryComponent.imageUrl - 输入参数: 图片URL
 * @property {boolean}               WxGalleryComponent.display  - 输入参数: 是否显示
 * @event                            WxGalleryComponent#display
 */
var WxGalleryComponent = (function () {
    function WxGalleryComponent() {
        this.styles = "none";
        this.display = false;
        this.displayChange = new core_1.EventEmitter();
    }
    WxGalleryComponent.prototype.ngOnChanges = function () {
        if (this.display) {
            this.styles = "block";
        }
        else {
            this.styles = "none";
        }
    };
    WxGalleryComponent.prototype.doCancel = function () {
        this.display = false;
        this.displayChange.emit(this.display);
    };
    return WxGalleryComponent;
}());
__decorate([
    core_1.HostBinding("style.display"),
    __metadata("design:type", String)
], WxGalleryComponent.prototype, "styles", void 0);
__decorate([
    core_1.Input("image-url"),
    __metadata("design:type", String)
], WxGalleryComponent.prototype, "imageUrl", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WxGalleryComponent.prototype, "display", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], WxGalleryComponent.prototype, "displayChange", void 0);
WxGalleryComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-gallery",
        },
        selector: "div[wx-gallery]",
        template: "\n    <span class=\"weui-gallery__img\" [ngStyle]=\"{ 'background-image': 'url(' + imageUrl + ')' }\" (click)=\"doCancel()\"></span>\n    <div class=\"weui-gallery__opr\">\n      <ng-content select=\"[wx-icon]\"></ng-content>\n    </div>\n  ",
    })
], WxGalleryComponent);
exports.WxGalleryComponent = WxGalleryComponent;

//# sourceMappingURL=gallery.component.js.map
