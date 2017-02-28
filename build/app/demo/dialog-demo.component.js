"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DialogDemoComponent = (function () {
    function DialogDemoComponent() {
        this.d1 = false;
        this.d2 = false;
        this.d3 = false;
        this.d4 = false;
        this.op1 = [
            {
                label: "辅助操作",
                style: "default",
                value: "secound",
            },
            {
                label: "主操作",
                style: "primary",
                value: "first",
            },
        ];
        this.op2 = [
            {
                label: "知道了",
                style: "primary",
                value: "first",
            },
        ];
    }
    DialogDemoComponent.prototype.showIOSDialog1 = function () {
        this.d1 = true;
    };
    DialogDemoComponent.prototype.showIOSDialog2 = function () {
        this.d2 = true;
    };
    DialogDemoComponent.prototype.showAndroidDialog1 = function () {
        this.d3 = true;
    };
    DialogDemoComponent.prototype.showAndroidDialog2 = function () {
        this.d4 = true;
    };
    DialogDemoComponent.prototype.receive1 = function (event) {
        if (event) {
            alert(JSON.stringify(event));
        }
    };
    DialogDemoComponent.prototype.receive2 = function (event) {
        if (event) {
            alert(JSON.stringify(event));
        }
    };
    DialogDemoComponent.prototype.receive3 = function (event) {
        if (event) {
            alert(JSON.stringify(event));
        }
    };
    DialogDemoComponent.prototype.receive4 = function (event) {
        if (event) {
            alert(JSON.stringify(event));
        }
    };
    return DialogDemoComponent;
}());
DialogDemoComponent = __decorate([
    core_1.Component({
        selector: "dialog-demo",
        template: "\n    <div class=\"page js_show\">\n      <div class=\"page__hd\">\n        <h1 class=\"page__title\">Dialog</h1>\n        <p class=\"page__desc\">\u5BF9\u8BDD\u6846</p>\n      </div>\n      <div class=\"page__bd page__bd_spacing\">\n        <a wx-button color=\"default\" (click)=\"showIOSDialog1()\" label=\"iOS Dialog\u6837\u5F0F\u4E00\"></a>\n        <a wx-button color=\"default\" (click)=\"showIOSDialog2()\" label=\"iOS Dialog\u6837\u5F0F\u4E8C\"></a>\n        <a wx-button color=\"default\" (click)=\"showAndroidDialog1()\" label=\"Android Dialog\u6837\u5F0F\u4E00\"></a>\n        <a wx-button color=\"default\" (click)=\"showAndroidDialog2()\" label=\"Android Dialog\u6837\u5F0F\u4E8C\"></a>\n      </div>\n      <div class=\"page__ft\">\n        <a style=\"cursor: pointer;\" [routerLink]=\"['/']\"><img src=\"./images/icon_footer_link.png\"/></a>\n      </div>\n\n      <div id=\"dialogs\">\n        <!--BEGIN dialog1-->\n        <div wx-dialog-ios title=\"\u5F39\u7A97\u6807\u9898\" [(display)]=\"d1\" content=\"\u5F39\u7A97\u5185\u5BB9\uFF0C\u544A\u77E5\u5F53\u524D\u72B6\u6001\u3001\u4FE1\u606F\u548C\u89E3\u51B3\u65B9\u6CD5\uFF0C\u63CF\u8FF0\u6587\u5B57\u5C3D\u91CF\u63A7\u5236\u5728\u4E09\u884C\u5185\" [options]=\"op1\" (do-check)=\"receive1($event)\"></div>\n        <!--END dialog1-->\n        <!--BEGIN dialog2-->\n        <div wx-dialog-ios [(display)]=\"d2\" [is-model]=\"false\" content=\"\u5F39\u7A97\u5185\u5BB9\uFF0C\u544A\u77E5\u5F53\u524D\u72B6\u6001\u3001\u4FE1\u606F\u548C\u89E3\u51B3\u65B9\u6CD5\uFF0C\u63CF\u8FF0\u6587\u5B57\u5C3D\u91CF\u63A7\u5236\u5728\u4E09\u884C\u5185\" [options]=\"op2\" (do-check)=\"receive2($event)\"></div>\n        <!--END dialog2-->\n        <!--BEGIN dialog3-->\n        <div wx-dialog-android title=\"\u5F39\u7A97\u6807\u9898\" [(display)]=\"d3\" [is-model]=\"false\" content=\"\u5F39\u7A97\u5185\u5BB9\uFF0C\u544A\u77E5\u5F53\u524D\u72B6\u6001\u3001\u4FE1\u606F\u548C\u89E3\u51B3\u65B9\u6CD5\uFF0C\u63CF\u8FF0\u6587\u5B57\u5C3D\u91CF\u63A7\u5236\u5728\u4E09\u884C\u5185\" [options]=\"op1\" (do-check)=\"receive3($event)\"></div>\n        <!--END dialog3-->\n        <!--BEGIN dialog4-->\n        <div wx-dialog-android [(display)]=\"d4\" content=\"\u5F39\u7A97\u5185\u5BB9\uFF0C\u544A\u77E5\u5F53\u524D\u72B6\u6001\u3001\u4FE1\u606F\u548C\u89E3\u51B3\u65B9\u6CD5\uFF0C\u63CF\u8FF0\u6587\u5B57\u5C3D\u91CF\u63A7\u5236\u5728\u4E09\u884C\u5185\" [options]=\"op2\" (do-check)=\"receive4($event)\"></div>\n        <!--END dialog4-->\n      </div>\n    </div>\n  ",
    })
], DialogDemoComponent);
exports.DialogDemoComponent = DialogDemoComponent;

//# sourceMappingURL=dialog-demo.component.js.map
