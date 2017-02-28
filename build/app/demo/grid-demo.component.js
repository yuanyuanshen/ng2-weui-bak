"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var GridDemoComponent = (function () {
    function GridDemoComponent() {
        this.links1 = "http://www.baidu.com/";
        this.links2 = ["/list"];
        this.icon1 = "./images/icon_tabbar.png";
    }
    return GridDemoComponent;
}());
GridDemoComponent = __decorate([
    core_1.Component({
        selector: "grid-demo",
        template: "\n    <div class=\"page js_show\">\n      <div class=\"page__hd\">\n        <h1 class=\"page__title\">Grid</h1>\n        <p class=\"page__desc\">\u4E5D\u5BAB\u683C</p>\n      </div>\n      <div wx-grids>\n        <a wx-grid [uri]=\"links1\">\n          <div wx-grid-icon [icon-url]=\"icon1\"></div>\n          <p wx-grid-label label=\"Grid\"></p>\n        </a>\n        <a wx-grid [uri]=\"links1\">\n          <div wx-grid-icon [icon-url]=\"icon1\"></div>\n          <p wx-grid-label label=\"Grid\"></p>\n        </a>\n        <a wx-grid [uri]=\"links1\">\n          <div wx-grid-icon [icon-url]=\"icon1\"></div>\n          <p wx-grid-label label=\"Grid\"></p>\n        </a>\n        <a wx-grid [uri]=\"links2\">\n          <div wx-grid-icon [icon-url]=\"icon1\"></div>\n          <p wx-grid-label label=\"Grid\"></p>\n        </a>\n        <a wx-grid [uri]=\"links2\">\n          <div wx-grid-icon [icon-url]=\"icon1\"></div>\n          <p wx-grid-label label=\"Grid\"></p>\n        </a>\n        <a wx-grid [uri]=\"links2\">\n          <div wx-grid-icon [icon-url]=\"icon1\"></div>\n          <p wx-grid-label label=\"Grid\"></p>\n        </a>\n        <a wx-grid [uri]=\"links1\">\n          <div wx-grid-icon [icon-url]=\"icon1\"></div>\n          <p wx-grid-label label=\"Grid\"></p>\n        </a>\n        <a wx-grid [uri]=\"links1\">\n          <div wx-grid-icon [icon-url]=\"icon1\"></div>\n          <p wx-grid-label label=\"Grid\"></p>\n        </a>\n        <a wx-grid [uri]=\"links1\">\n          <div wx-grid-icon [icon-url]=\"icon1\"></div>\n          <p wx-grid-label label=\"Grid\"></p>\n        </a>\n      </div>\n    </div>\n  ",
    })
], GridDemoComponent);
exports.GridDemoComponent = GridDemoComponent;

//# sourceMappingURL=grid-demo.component.js.map
