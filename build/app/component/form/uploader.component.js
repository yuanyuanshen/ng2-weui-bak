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
 * WeUI 上传组件
 * @class                                   WxUploaderComponent
 * @property {string}                       WxUploaderComponent.title      - 输入参数: 控件标题
 * @property {number}                       WxUploaderComponent.maxCount   - 输入参数: 最大上传个数
 * @property {Array<UploadItem>}            WxUploaderComponent.items      - 输入参数: 上传对象数组
 * @property {EventEmitter<ClickAddAction>} WxUploaderComponent.clickAdd   - 输入输出参数: 点击添加按钮调用事件
 * @property {EventEmitter<UploadItem>}     WxUploaderComponent.clickItem  - 输入输出参数: 点击已存在文件调用事件
 * @event                                   WxUploaderComponent#click-add
 * @event                                   WxUploaderComponent#click-item
 */
var WxUploaderComponent = (function () {
    function WxUploaderComponent() {
        this.clickAdd = new core_1.EventEmitter();
        this.clickItem = new core_1.EventEmitter();
    }
    WxUploaderComponent.prototype.ngDoCheck = function () {
        if (this.items) {
            this.currentCount = this.items.length;
        }
        else {
            this.currentCount = 0;
        }
    };
    WxUploaderComponent.prototype.doAdd = function () {
        this.clickAdd.emit({
            "click": true,
            "timestamp": new Date().getUTCMilliseconds(),
        });
    };
    WxUploaderComponent.prototype.doSelect = function (item) {
        this.clickItem.emit(item);
    };
    return WxUploaderComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WxUploaderComponent.prototype, "title", void 0);
__decorate([
    core_1.Input("max-count"),
    __metadata("design:type", Number)
], WxUploaderComponent.prototype, "maxCount", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], WxUploaderComponent.prototype, "items", void 0);
__decorate([
    core_1.Output("click-add"),
    __metadata("design:type", core_1.EventEmitter)
], WxUploaderComponent.prototype, "clickAdd", void 0);
__decorate([
    core_1.Output("click-item"),
    __metadata("design:type", core_1.EventEmitter)
], WxUploaderComponent.prototype, "clickItem", void 0);
WxUploaderComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-uploader",
        },
        selector: "div[wx-uploader]",
        template: "\n    <div class=\"weui-uploader__hd\">\n      <p class=\"weui-uploader__title\">{{title}}</p>\n      <div class=\"weui-uploader__info\">{{currentCount}}/{{maxCount}}</div>\n    </div>\n    <div class=\"weui-uploader__bd\">\n      <ul class=\"weui-uploader__files\">\n        <li class=\"weui-uploader__file\" (click)=\"doSelect(item)\" *ngFor=\"let item of items\" [ngClass]=\"{ 'weui-uploader__file_status': item.showStatus }\" [ngStyle]=\"{ 'background-image': 'url(' + item.imageUrl + ')' }\">\n          <div *ngIf=\"item.showStatus\" class=\"weui-uploader__file-content\">\n            <i wx-icon *ngIf=\"item.statusIcon\" [type]=\"item.statusIcon\"></i>\n            <p *ngIf=\"item.statusMessage\">{{item.statusMessage}}</p>\n          </div>\n        </li>\n      </ul>\n      <div class=\"weui-uploader__input-box\">\n        <a class=\"weui-uploader__input\" (click)=\"doAdd()\"></a>\n      </div>\n    </div>\n  ",
    })
], WxUploaderComponent);
exports.WxUploaderComponent = WxUploaderComponent;

//# sourceMappingURL=uploader.component.js.map
