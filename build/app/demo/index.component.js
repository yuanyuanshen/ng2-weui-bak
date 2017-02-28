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
var router_1 = require("@angular/router");
var IndexComponent = (function () {
    function IndexComponent(route) {
        this.route = route;
    }
    IndexComponent.prototype.ngOnInit = function () {
        this.showFlag = {
            feedback: "none",
            form: "none",
            layout: "none",
            nav: "none",
            search: "none",
        };
    };
    IndexComponent.prototype.menuOpen = function (input) {
        switch (input) {
            case "form":
                this.ngOnInit();
                this.showFlag.form = "block";
                break;
            case "layout":
                this.ngOnInit();
                this.showFlag.layout = "block";
                break;
            case "feedback":
                this.ngOnInit();
                this.showFlag.feedback = "block";
                break;
            case "nav":
                this.ngOnInit();
                this.showFlag.nav = "block";
                break;
            case "search":
                this.ngOnInit();
                this.showFlag.search = "block";
                break;
            default:
                break;
        }
    };
    return IndexComponent;
}());
IndexComponent = __decorate([
    core_1.Component({
        selector: "index",
        template: "\n    <div class=\"page js_show\">\n      <div class=\"page__hd\">\n        <h1 class=\"page__title\">\n            <img src=\"./images/logo.png\" alt=\"WeUI\" height=\"21px\" />\n        </h1>\n        <p class=\"page__desc\">WeUI \u662F\u4E00\u5957\u540C\u5FAE\u4FE1\u539F\u751F\u89C6\u89C9\u4F53\u9A8C\u4E00\u81F4\u7684\u57FA\u7840\u6837\u5F0F\u5E93\uFF0C\u7531\u5FAE\u4FE1\u5B98\u65B9\u8BBE\u8BA1\u56E2\u961F\u4E3A\u5FAE\u4FE1\u5185\u7F51\u9875\u548C\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u91CF\u8EAB\u8BBE\u8BA1\uFF0C\u4EE4\u7528\u6237\u7684\u4F7F\u7528\u611F\u77E5\u66F4\u52A0\u7EDF\u4E00\u3002</p>\n      </div>\n      <div class=\"page__bd page__bd_spacing\">\n        <div class=\"weui-cells__title weui-flex\" style=\"cursor: pointer\" (click)=\"menuOpen('form')\">\n          <p class=\"weui-flex__item\">\u8868\u5355</p>\n          <img src=\"./images/icon_nav_form.png\" width=\"30px\" height=\"30px\" alt=\"\">\n        </div>\n        <div class=\"weui-cells\" [ngStyle]=\"{display: showFlag.form}\">\n          <a class=\"weui-cell weui-cell_access\" href=\"javascript:;\" [routerLink]=\"['/button']\">\n            <div class=\"weui-cell__bd\">\n              <p>Button</p>\n            </div>\n            <div class=\"weui-cell__ft\"></div>\n          </a>\n          <a class=\"weui-cell weui-cell_access\" href=\"javascript:;\" [routerLink]=\"['/input']\">\n            <div class=\"weui-cell__bd\">\n              <p>Input</p>\n            </div>\n            <div class=\"weui-cell__ft\"></div>\n          </a>\n          <a class=\"weui-cell weui-cell_access\" href=\"javascript:;\" [routerLink]=\"['/list']\">\n            <div class=\"weui-cell__bd\">\n              <p>List</p>\n            </div>\n            <div class=\"weui-cell__ft\"></div>\n          </a>\n          <a class=\"weui-cell weui-cell_access\" href=\"javascript:;\" [routerLink]=\"['/slider']\">\n            <div class=\"weui-cell__bd\">\n              <p>Slider</p>\n            </div>\n            <div class=\"weui-cell__ft\"></div>\n          </a>\n          <a class=\"weui-cell weui-cell_access\" href=\"javascript:;\" [routerLink]=\"['/uploader']\">\n            <div class=\"weui-cell__bd\">\n              <p>Uploader</p>\n            </div>\n            <div class=\"weui-cell__ft\"></div>\n          </a>\n        </div>\n\n        <div class=\"weui-cells__title weui-flex\" style=\"cursor: pointer\" (click)=\"menuOpen('layout')\">\n          <p class=\"weui-flex__item\">\u57FA\u7840\u7EC4\u4EF6</p>\n          <img src=\"./images/icon_nav_layout.png\" width=\"30px\" height=\"30px\" alt=\"\">\n        </div>\n        <div class=\"weui-cells\" [ngStyle]=\"{display: showFlag.layout}\">\n          <a class=\"weui-cell weui-cell_access\" href=\"javascript:;\" [routerLink]=\"['/article']\">\n            <div class=\"weui-cell__bd\">\n              <p>Article</p>\n            </div>\n            <div class=\"weui-cell__ft\"></div>\n          </a>\n          <a class=\"weui-cell weui-cell_access\" href=\"javascript:;\" [routerLink]=\"['/badge']\">\n            <div class=\"weui-cell__bd\">\n              <p>Badge</p>\n            </div>\n            <div class=\"weui-cell__ft\"></div>\n          </a>\n          <a class=\"weui-cell weui-cell_access\" href=\"javascript:;\" [routerLink]=\"['/flex']\">\n            <div class=\"weui-cell__bd\">\n              <p>Flex</p>\n            </div>\n            <div class=\"weui-cell__ft\"></div>\n          </a>\n          <a class=\"weui-cell weui-cell_access\" href=\"javascript:;\" [routerLink]=\"['/footer']\">\n            <div class=\"weui-cell__bd\">\n              <p>Footer</p>\n            </div>\n            <div class=\"weui-cell__ft\"></div>\n          </a>\n          <a class=\"weui-cell weui-cell_access\" href=\"javascript:;\" [routerLink]=\"['/gallery']\">\n            <div class=\"weui-cell__bd\">\n              <p>Gallery</p>\n            </div>\n            <div class=\"weui-cell__ft\"></div>\n          </a>\n          <a class=\"weui-cell weui-cell_access\" href=\"javascript:;\" [routerLink]=\"['/grid']\">\n            <div class=\"weui-cell__bd\">\n              <p>Grid</p>\n            </div>\n            <div class=\"weui-cell__ft\"></div>\n          </a>\n          <a class=\"weui-cell weui-cell_access\" href=\"javascript:;\" [routerLink]=\"['/icons']\">\n            <div class=\"weui-cell__bd\">\n              <p>Icons</p>\n            </div>\n            <div class=\"weui-cell__ft\"></div>\n          </a>\n          <a class=\"weui-cell weui-cell_access\" href=\"javascript:;\" [routerLink]=\"['/loadmore']\">\n            <div class=\"weui-cell__bd\">\n              <p>Loadmore</p>\n            </div>\n            <div class=\"weui-cell__ft\"></div>\n          </a>\n          <a class=\"weui-cell weui-cell_access\" href=\"javascript:;\" [routerLink]=\"['/panel']\">\n            <div class=\"weui-cell__bd\">\n              <p>Panel</p>\n            </div>\n            <div class=\"weui-cell__ft\"></div>\n          </a>\n          <a class=\"weui-cell weui-cell_access\" href=\"javascript:;\" [routerLink]=\"['/preview']\">\n            <div class=\"weui-cell__bd\">\n              <p>Preview</p>\n            </div>\n            <div class=\"weui-cell__ft\"></div>\n          </a>\n          <a class=\"weui-cell weui-cell_access\" href=\"javascript:;\" [routerLink]=\"['/progress']\">\n            <div class=\"weui-cell__bd\">\n              <p>Progress</p>\n            </div>\n            <div class=\"weui-cell__ft\"></div>\n          </a>\n        </div>\n\n        <div class=\"weui-cells__title weui-flex\" style=\"cursor: pointer\" (click)=\"menuOpen('feedback')\">\n          <p class=\"weui-flex__item\">\u64CD\u4F5C\u53CD\u9988</p>\n          <img src=\"./images/icon_nav_feedback.png\" width=\"30px\" height=\"30px\" alt=\"\">\n        </div>\n        <div class=\"weui-cells\" [ngStyle]=\"{display: showFlag.feedback}\">\n          <a class=\"weui-cell weui-cell_access\" href=\"javascript:;\" [routerLink]=\"['/actionsheet']\">\n            <div class=\"weui-cell__bd\">\n              <p>Actionsheet</p>\n            </div>\n            <div class=\"weui-cell__ft\"></div>\n          </a>\n          <a class=\"weui-cell weui-cell_access\" href=\"javascript:;\" [routerLink]=\"['/dialog']\">\n            <div class=\"weui-cell__bd\">\n              <p>Dialog</p>\n            </div>\n            <div class=\"weui-cell__ft\"></div>\n          </a>\n          <a class=\"weui-cell weui-cell_access\" href=\"javascript:;\" [routerLink]=\"['/msg']\">\n            <div class=\"weui-cell__bd\">\n              <p>Msg</p>\n            </div>\n            <div class=\"weui-cell__ft\"></div>\n          </a>\n          <a class=\"weui-cell weui-cell_access\" href=\"javascript:;\" [routerLink]=\"['/picker']\">\n            <div class=\"weui-cell__bd\">\n              <p>Picker</p>\n            </div>\n            <div class=\"weui-cell__ft\"></div>\n          </a>\n          <a class=\"weui-cell weui-cell_access\" href=\"javascript:;\" [routerLink]=\"['/toast']\">\n            <div class=\"weui-cell__bd\">\n              <p>Toast</p>\n            </div>\n            <div class=\"weui-cell__ft\"></div>\n          </a>\n        </div>\n\n        <div class=\"weui-cells__title weui-flex\" style=\"cursor: pointer\" (click)=\"menuOpen('nav')\">\n          <p class=\"weui-flex__item\">\u5BFC\u822A\u76F8\u5173</p>\n          <img src=\"./images/icon_nav_nav.png\" width=\"30px\" height=\"30px\" alt=\"\">\n        </div>\n        <div class=\"weui-cells\" [ngStyle]=\"{display: showFlag.nav}\">\n          <a class=\"weui-cell weui-cell_access\" href=\"javascript:;\" [routerLink]=\"['/navbar']\">\n            <div class=\"weui-cell__bd\">\n              <p>Navbar</p>\n            </div>\n            <div class=\"weui-cell__ft\"></div>\n          </a>\n          <a class=\"weui-cell weui-cell_access\" href=\"javascript:;\" [routerLink]=\"['/tabbar']\">\n            <div class=\"weui-cell__bd\">\n              <p>Tabbar</p>\n            </div>\n            <div class=\"weui-cell__ft\"></div>\n          </a>\n        </div>\n\n        <div class=\"weui-cells__title weui-flex\" style=\"cursor: pointer\" (click)=\"menuOpen('search')\">\n          <p class=\"weui-flex__item\">\u641C\u7D22\u76F8\u5173</p>\n          <img src=\"./images/icon_nav_search.png\" width=\"30px\" height=\"30px\" alt=\"\">\n        </div>\n        <div class=\"weui-cells\" [ngStyle]=\"{display: showFlag.search}\">\n          <a class=\"weui-cell weui-cell_access\" href=\"javascript:;\" [routerLink]=\"['/search-bar']\">\n            <div class=\"weui-cell__bd\">\n              <p>Search Bar</p>\n            </div>\n            <div class=\"weui-cell__ft\"></div>\n          </a>\n        </div>\n\n        <div class=\"weui-cells__title weui-flex\" style=\"cursor: pointer\" [routerLink]=\"['/z-index']\">\n          <p class=\"weui-flex__item\">\u5C42\u7EA7\u89C4\u8303</p>\n          <img src=\"./images/icon_nav_z-index.png\" width=\"30px\" height=\"30px\" alt=\"\">\n        </div>\n        <div class=\"weui-cells__title weui-flex\" style=\"cursor: pointer\" [routerLink]=\"['/cabinsetmap']\">\n          <p class=\"weui-flex__item\">\u56FD\u822A\u4E4B\u7FFC</p>\n          <img src=\"./images/icon_nav_search.png\" width=\"30px\" height=\"30px\" alt=\"\">\n        </div>\n      </div>\n      <div class=\"page__ft\">\n        <img src=\"./images/icon_footer.png\"/>\n      </div>\n    </div>\n  ",
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], IndexComponent);
exports.IndexComponent = IndexComponent;

//# sourceMappingURL=index.component.js.map
