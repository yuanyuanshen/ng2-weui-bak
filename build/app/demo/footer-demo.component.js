"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FooterDemoComponent = (function () {
    function FooterDemoComponent() {
        this.links1 = [{
                label: "底部链接",
                uri: "http://www.baidu.com/",
            }];
        this.links2 = [{
                label: "底部链接",
                uri: "http://www.baidu.com/",
            }, {
                label: "底部链接",
                uri: ["/footer"],
            }];
        this.links3 = [{
                label: "WeUI首页",
                uri: ["/"],
            }];
    }
    return FooterDemoComponent;
}());
FooterDemoComponent = __decorate([
    core_1.Component({
        selector: "footer-demo",
        template: "\n    <div class=\"page js_show\">\n      <div class=\"page__hd\">\n        <h1 class=\"page__title\">Footer</h1>\n        <p class=\"page__desc\">\u9875\u811A</p>\n      </div>\n      <div class=\"page__bd page__bd_spacing\">\n        <div wx-footer tips=\"Copyright &copy; 2008-2016 weui.io\"></div>\n        <br>\n        <br>\n        <div wx-footer tips=\"Copyright &copy; 2008-2016 weui.io\" [links]=\"links1\"></div>\n        <br>\n        <br>\n        <div wx-footer tips=\"Copyright &copy; 2008-2016 weui.io\" [links]=\"links2\"></div>\n        <div wx-footer tips=\"Copyright &copy; 2008-2016 weui.io\" [fix-bottom]=\"true\" [links]=\"links3\"></div>\n      </div>\n    </div>\n  ",
    })
], FooterDemoComponent);
exports.FooterDemoComponent = FooterDemoComponent;

//# sourceMappingURL=footer-demo.component.js.map
