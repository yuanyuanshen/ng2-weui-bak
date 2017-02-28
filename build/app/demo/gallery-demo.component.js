"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var GalleryDemoComponent = (function () {
    function GalleryDemoComponent() {
        this.showFlag = false;
    }
    GalleryDemoComponent.prototype.show = function () {
        this.showFlag = true;
    };
    GalleryDemoComponent.prototype.doDel = function () {
        alert("Delete it?");
    };
    GalleryDemoComponent.prototype.doDownload = function () {
        alert("Start download...");
    };
    return GalleryDemoComponent;
}());
GalleryDemoComponent = __decorate([
    core_1.Component({
        selector: "gallery-demo",
        template: "\n    <div class=\"page js_show\">\n      <div class=\"page__hd\">\n        <h1 class=\"page__title\">Gallery</h1>\n        <p class=\"page__desc\">\u753B\u5ECA\uFF0C\u53EF\u5B9E\u73B0\u4E0A\u4F20\u56FE\u7247\u7684\u5C55\u793A\u6216\u5E7B\u706F\u7247\u64AD\u653E</p>\n      </div>\n      <div wx-button-area>\n        <a wx-button label=\"\u663E\u793A\u753B\u5ECA\" (click)=\"show()\"></a>\n      </div>\n      <div wx-gallery [(display)]=\"showFlag\" image-url=\"./images/pic_article.png\">\n        <i wx-icon type=\"gallery-delete\" style=\"cursor: pointer;\" (click)=\"doDel()\"></i>\n        <i wx-icon type=\"download\" style=\"cursor: pointer;\" (click)=\"doDownload()\"></i>\n      </div>\n    </div>\n  ",
    })
], GalleryDemoComponent);
exports.GalleryDemoComponent = GalleryDemoComponent;

//# sourceMappingURL=gallery-demo.component.js.map
