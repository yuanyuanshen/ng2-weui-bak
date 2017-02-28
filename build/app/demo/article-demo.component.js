"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ArticleDemoComponent = (function () {
    function ArticleDemoComponent() {
    }
    return ArticleDemoComponent;
}());
ArticleDemoComponent = __decorate([
    core_1.Component({
        selector: "article-demo",
        template: "\n    <div class=\"page js_show\">\n      <div class=\"page__hd\">\n        <h1 class=\"page__title\">Article</h1>\n        <p class=\"page__desc\">\u6587\u7AE0</p>\n      </div>\n      <div class=\"page__bd\">\n        <article wx-article>\n          <h1>\u5927\u6807\u9898</h1>\n          <section>\n            <h2 class=\"title\">\u7AE0\u6807\u9898</h2>\n            <section>\n              <h3>1.1 \u8282\u6807\u9898</h3>\n              <p>\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n              </p>\n              <p>\n                <img src=\"./images/pic_article.png\" alt=\"\">\n                <img src=\"./images/pic_article.png\" alt=\"\">\n              </p>\n            </section>\n            <section>\n              <h3>1.2 \u8282\u6807\u9898</h3>\n              <p>\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\n                culpa qui officia deserunt mollit anim id est laborum.\n              </p>\n            </section>\n          </section>\n        </article>\n      </div>\n      <div class=\"page__ft\">\n        <a style=\"cursor: pointer;\" [routerLink]=\"['/']\"><img src=\"./images/icon_footer_link.png\"/></a>\n      </div>\n    </div>\n  ",
    })
], ArticleDemoComponent);
exports.ArticleDemoComponent = ArticleDemoComponent;

//# sourceMappingURL=article-demo.component.js.map
