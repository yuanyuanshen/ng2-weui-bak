"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NavbarDemoComponent = (function () {
    function NavbarDemoComponent() {
        this.menus = [
            {
                active: true,
                label: "选项一",
                value: "s1",
                imageUrl: "./images/icon_tabbar.png",
            },
            {
                active: false,
                label: "选项二",
                value: "s2",
                imageUrl: "./images/icon_tabbar.png",
            },
            {
                active: false,
                label: "选项三",
                value: "s3",
                imageUrl: "./images/icon_tabbar.png",
            },
        ];
    }
    NavbarDemoComponent.prototype.doSelect = function (event) {
        var _this = this;
        alert(JSON.stringify(event));
        this.menus.forEach(function (menu, index) {
            if (menu.value === event.value) {
                _this.menus[index].active = true;
            }
            else {
                _this.menus[index].active = false;
            }
        });
    };
    return NavbarDemoComponent;
}());
NavbarDemoComponent = __decorate([
    core_1.Component({
        selector: "navbar-demo",
        template: "\n    <div class=\"page js_show\">\n      <div class=\"page__bd\" style=\"height: 100%;\">\n        <div wx-navbar [menus]=\"menus\" (on-select)=\"doSelect($event)\"></div>\n      </div>\n    </div>\n  ",
    })
], NavbarDemoComponent);
exports.NavbarDemoComponent = NavbarDemoComponent;

//# sourceMappingURL=navbar-demo.component.js.map
