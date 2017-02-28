"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TabbarDemoComponent = (function () {
    function TabbarDemoComponent() {
        this.menus = [
            {
                active: true,
                label: "微信",
                value: "s1",
                imageUrl: "./images/icon_tabbar.png",
                badgeLabel: "8",
            },
            {
                active: false,
                label: "通讯簿",
                value: "s2",
                imageUrl: "./images/icon_tabbar.png",
            },
            {
                active: false,
                label: "发现",
                value: "s3",
                imageUrl: "./images/icon_tabbar.png",
                badgeColor: "green",
            },
            {
                active: false,
                label: "我",
                value: "s4",
                imageUrl: "./images/icon_tabbar.png",
            },
        ];
    }
    TabbarDemoComponent.prototype.doSelect = function (event) {
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
    return TabbarDemoComponent;
}());
TabbarDemoComponent = __decorate([
    core_1.Component({
        selector: "tabbar-demo",
        template: "\n    <div class=\"page js_show\">\n      <div class=\"page__bd\" style=\"height: 100%;\">\n        <div wx-tabbar [menus]=\"menus\" (on-select)=\"doSelect($event)\"></div>\n      </div>\n    </div>\n  ",
    })
], TabbarDemoComponent);
exports.TabbarDemoComponent = TabbarDemoComponent;

//# sourceMappingURL=tabbar-demo.component.js.map
