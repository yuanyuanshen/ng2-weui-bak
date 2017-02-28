"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var UploaderDemoComponent = (function () {
    function UploaderDemoComponent() {
        this.showFlag = false;
        this.items = [
            {
                imageId: "1",
                imageUrl: "./images/pic_160.png",
                showStatus: false,
            },
            {
                imageId: "2",
                imageUrl: "./images/pic_160.png",
                showStatus: true,
                statusIcon: "warn",
            },
            {
                imageId: "3",
                imageUrl: "./images/pic_160.png",
                showStatus: true,
                statusMessage: "50%",
            },
        ];
    }
    UploaderDemoComponent.prototype.showAdd = function (event) {
        alert("调用选择文件方法: " + JSON.stringify(event));
    };
    UploaderDemoComponent.prototype.showItem = function (event) {
        this.selectImageUrl = event.imageUrl;
        this.selectImageId = event.imageId;
        this.showFlag = true;
    };
    UploaderDemoComponent.prototype.doDel = function () {
        var _this = this;
        this.items.forEach(function (item, index) {
            if (item.imageId === _this.selectImageId) {
                _this.items.splice(index, 1);
            }
        });
        this.showFlag = false;
    };
    return UploaderDemoComponent;
}());
UploaderDemoComponent = __decorate([
    core_1.Component({
        selector: "uploader-demo",
        template: "\n    <div class=\"page js_show\">\n      <div class=\"page__hd\">\n        <h1 class=\"page__title\">Uploader</h1>\n        <p class=\"page__desc\">\u4E0A\u4F20\u7EC4\u4EF6\uFF0C\u4E00\u822C\u914D\u5408<a class=\"link\" [routerLink]=\"['/gallery']\">\u7EC4\u4EF6Gallery</a>\u6765\u4F7F\u7528\u3002</p>\n      </div>\n      <div class=\"page__bd\">\n        <div class=\"weui-cells weui-cells_form\">\n          <div class=\"weui-cell\">\n            <div class=\"weui-cell__bd\">\n              <div wx-uploader [items]=\"items\" title=\"\u56FE\u7247\u4E0A\u4F20\" [max-count]=\"3\" (click-add)=\"showAdd($event)\" (click-item)=\"showItem($event)\"></div>\n              <div wx-gallery [(display)]=\"showFlag\" [image-url]=\"selectImageUrl\">\n                <i wx-icon type=\"gallery-delete\" style=\"cursor: pointer;\" (click)=\"doDel()\"></i>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"page__ft\">\n        <a style=\"cursor: pointer;\" [routerLink]=\"['/']\"><img src=\"./images/icon_footer_link.png\"/></a>\n      </div>\n    </div>\n  ",
    })
], UploaderDemoComponent);
exports.UploaderDemoComponent = UploaderDemoComponent;

//# sourceMappingURL=uploader-demo.component.js.map
