"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SearchbarDemoComponent = (function () {
    function SearchbarDemoComponent() {
    }
    return SearchbarDemoComponent;
}());
SearchbarDemoComponent = __decorate([
    core_1.Component({
        selector: "searchbar-demo",
        template: "\n    <div class=\"page searchbar js_show\">\n      <div class=\"page__hd\">\n        <h1 class=\"page__title\">SearchBar</h1>\n        <p class=\"page__desc\">\u641C\u7D22\u680F</p>\n      </div>\n      <div class=\"page__bd\">\n        <div wx-searchbar [(ngModel)]=\"content\"></div>\n      </div>\n      <div class=\"page__ft\">\n        <h4>{{content}}</h4>\n      </div>\n    </div>\n  ",
    })
], SearchbarDemoComponent);
exports.SearchbarDemoComponent = SearchbarDemoComponent;

//# sourceMappingURL=searchbar-demo.component.js.map
