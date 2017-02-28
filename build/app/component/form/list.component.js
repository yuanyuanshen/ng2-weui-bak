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
/**
 * WeUI 单元组组件
 * @class WxCellsComponent
 */
var WxCellsComponent = (function () {
    function WxCellsComponent() {
    }
    return WxCellsComponent;
}());
WxCellsComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-cells",
        },
        selector: "div[wx-cells]",
        template: "\n    <ng-content></ng-content>\n  ",
    })
], WxCellsComponent);
exports.WxCellsComponent = WxCellsComponent;
/**
 * WeUI 表单组件
 * @class WxCellsFormComponent
 */
var WxCellsFormComponent = (function () {
    function WxCellsFormComponent() {
    }
    return WxCellsFormComponent;
}());
WxCellsFormComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-cells weui-cells_form",
        },
        selector: "div[wx-cells-form]",
        template: "\n    <ng-content></ng-content>\n  ",
    })
], WxCellsFormComponent);
exports.WxCellsFormComponent = WxCellsFormComponent;
/**
 * WeUI 单元格组件
 * @class WxCellComponent
 */
var WxCellComponent = (function () {
    function WxCellComponent() {
    }
    return WxCellComponent;
}());
WxCellComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-cell",
        },
        selector: "div[wx-cell]",
        template: "\n    <ng-content></ng-content>\n  ",
    })
], WxCellComponent);
exports.WxCellComponent = WxCellComponent;
/**
 * WeUI 单元格组件(警告)
 * @class WxCellWarnComponent
 */
var WxCellWarnComponent = (function () {
    function WxCellWarnComponent() {
    }
    return WxCellWarnComponent;
}());
WxCellWarnComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-cell weui-cell_warn",
        },
        selector: "div[wx-cell-warn]",
        template: "\n    <ng-content></ng-content>\n  ",
    })
], WxCellWarnComponent);
exports.WxCellWarnComponent = WxCellWarnComponent;
/**
 * WeUI 单元格组件(验证码)
 * @class WxCellVcodeComponent
 */
var WxCellVcodeComponent = (function () {
    function WxCellVcodeComponent() {
    }
    return WxCellVcodeComponent;
}());
WxCellVcodeComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-cell weui-cell_vcode",
        },
        selector: "div[wx-cell-vcode]",
        template: "\n    <ng-content></ng-content>\n  ",
    })
], WxCellVcodeComponent);
exports.WxCellVcodeComponent = WxCellVcodeComponent;
/**
 * WeUI 单元格 Header 组件
 * @class                     WxCellHeaderComponent
 * @property {string}         WxCellHeaderComponent.badgeLabel - 徽章内容
 * @property {BadgeColorType} WxCellHeaderComponent.badgeColor - 徽章背景色
 */
var WxCellHeaderComponent = (function () {
    function WxCellHeaderComponent() {
        this.stylePosition = "";
        this.styleMaginRight = "";
        this.styleBgColor = "";
        this.hasBadge = false;
    }
    WxCellHeaderComponent.prototype.ngOnInit = function () {
        this.hasBadge = this.badgeLabel || this.badgeColor ? true : false;
        if (this.hasBadge) {
            this.stylePosition = "relative";
            this.styleMaginRight = "10px";
            if (this.badgeLabel && this.badgeLabel.trim().length > 0) {
                this.badgeStyle = "label";
            }
            else {
                this.badgeStyle = "dot";
            }
        }
    };
    return WxCellHeaderComponent;
}());
__decorate([
    core_1.HostBinding("style.position"),
    __metadata("design:type", String)
], WxCellHeaderComponent.prototype, "stylePosition", void 0);
__decorate([
    core_1.HostBinding("style.margin-right"),
    __metadata("design:type", String)
], WxCellHeaderComponent.prototype, "styleMaginRight", void 0);
__decorate([
    core_1.HostBinding("style.background-color"),
    __metadata("design:type", String)
], WxCellHeaderComponent.prototype, "styleBgColor", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WxCellHeaderComponent.prototype, "badgeLabel", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WxCellHeaderComponent.prototype, "badgeColor", void 0);
WxCellHeaderComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-cell__hd",
        },
        selector: "div[wx-cell-header]",
        template: "\n    <ng-content select=\"img\"></ng-content>\n    <span wx-badge *ngIf=\"badgeStyle === 'label'\" [color]=\"badgeColor\" style=\"position: absolute;top: -.4em;right: -.8em;\">{{badgeLabel}}</span>\n    <span wx-badge-dot *ngIf=\"badgeStyle === 'dot'\" [color]=\"badgeColor\" style=\"position: absolute;top: -.4em;right: -.8em;\"></span>\n  ",
    })
], WxCellHeaderComponent);
exports.WxCellHeaderComponent = WxCellHeaderComponent;
/**
 * WeUI 单元格 Body 组件
 * @class WxCellBodyComponent
 * @property {boolean} isPrimary - 是否位于Flex或Box布局的起始位置
 */
var WxCellBodyComponent = (function () {
    function WxCellBodyComponent() {
        this.classes = "weui-cell__bd";
    }
    WxCellBodyComponent.prototype.ngOnInit = function () {
        if (this.isPrimary) {
            this.classes += " weui-cell_primary";
        }
    };
    return WxCellBodyComponent;
}());
__decorate([
    core_1.HostBinding("attr.class"),
    __metadata("design:type", String)
], WxCellBodyComponent.prototype, "classes", void 0);
__decorate([
    core_1.Input("is-primary"),
    __metadata("design:type", Boolean)
], WxCellBodyComponent.prototype, "isPrimary", void 0);
WxCellBodyComponent = __decorate([
    core_1.Component({
        selector: "div[wx-cell-body]",
        template: "\n    <ng-content></ng-content>\n  ",
    })
], WxCellBodyComponent);
exports.WxCellBodyComponent = WxCellBodyComponent;
/**
 * WeUI 单元格 Footer 组件
 * @class WxCellFooterComponent
 */
var WxCellFooterComponent = (function () {
    function WxCellFooterComponent() {
    }
    return WxCellFooterComponent;
}());
WxCellFooterComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-cell__ft",
        },
        selector: "div[wx-cell-footer]",
        template: "\n    <ng-content></ng-content>\n  ",
    })
], WxCellFooterComponent);
exports.WxCellFooterComponent = WxCellFooterComponent;
/**
 * WeUI 单元格下拉框组件(独占)
 * @class WxCellSelectComponent
 */
var WxCellSelectComponent = (function () {
    function WxCellSelectComponent() {
    }
    return WxCellSelectComponent;
}());
WxCellSelectComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-cell weui-cell_select",
        },
        selector: "div[wx-cell-select]",
        template: "\n    <div class=\"weui-cell__bd\">\n      <ng-content></ng-content>\n    </div>\n  ",
    })
], WxCellSelectComponent);
exports.WxCellSelectComponent = WxCellSelectComponent;
/**
 * WeUI 单元格下拉框组件(水平摆放, 居前)
 * @class WxCellSelectBeforeComponent
 */
var WxCellSelectBeforeComponent = (function () {
    function WxCellSelectBeforeComponent() {
    }
    return WxCellSelectBeforeComponent;
}());
WxCellSelectBeforeComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-cell weui-cell_select weui-cell_select-before",
        },
        selector: "div[wx-cell-select-before]",
        template: "\n    <div class=\"weui-cell__hd\">\n      <ng-content select=\"[wx-select]\"></ng-content>\n    </div>\n    <div class=\"weui-cell__bd\">\n      <ng-content></ng-content>\n    </div>\n  ",
    })
], WxCellSelectBeforeComponent);
exports.WxCellSelectBeforeComponent = WxCellSelectBeforeComponent;
/**
 * WeUI 单元格下拉框组件(水平摆放, 居后)
 * @class WxCellSelectAfterComponent
 */
var WxCellSelectAfterComponent = (function () {
    function WxCellSelectAfterComponent() {
    }
    return WxCellSelectAfterComponent;
}());
WxCellSelectAfterComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-cell weui-cell_select weui-cell_select-after",
        },
        selector: "div[wx-cell-select-after]",
        template: "\n    <div class=\"weui-cell__hd\">\n      <ng-content></ng-content>\n    </div>\n    <div class=\"weui-cell__bd\">\n      <ng-content select=\"[wx-select]\"></ng-content>\n    </div>\n  ",
    })
], WxCellSelectAfterComponent);
exports.WxCellSelectAfterComponent = WxCellSelectAfterComponent;
/**
 * WeUI 单元格小提示组件
 * @class WxCellsTipsComponent
 * @property {string} WxCellsTipsComponent.tips - 输入参数: 提示信息
 */
var WxCellsTipsComponent = (function () {
    function WxCellsTipsComponent() {
    }
    return WxCellsTipsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WxCellsTipsComponent.prototype, "tips", void 0);
WxCellsTipsComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-cells__tips",
        },
        selector: "div[wx-cells-tips]",
        template: "\n    {{tips}}\n  ",
    })
], WxCellsTipsComponent);
exports.WxCellsTipsComponent = WxCellsTipsComponent;
/**
 * WeUI 标题组件
 * @class WxTitleComponent
 * @property {string} WxTitleComponent.title - 输入参数: 标题内容
 */
var WxCellsTitleComponent = (function () {
    function WxCellsTitleComponent() {
    }
    return WxCellsTitleComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WxCellsTitleComponent.prototype, "title", void 0);
WxCellsTitleComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-cells__title",
        },
        selector: "div[wx-cells-title]",
        template: "\n    {{title}}\n  ",
    })
], WxCellsTitleComponent);
exports.WxCellsTitleComponent = WxCellsTitleComponent;
/**
 * WeUI 标签组件
 * @class WxLabelComponent
 * @property {string} WxLabelComponent.label - 输入参数: 标签内容
 */
var WxLabelComponent = (function () {
    function WxLabelComponent() {
    }
    return WxLabelComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WxLabelComponent.prototype, "label", void 0);
WxLabelComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-label",
        },
        selector: "label[wx-label]",
        template: "\n    {{label}}\n  ",
    })
], WxLabelComponent);
exports.WxLabelComponent = WxLabelComponent;
/**
 * WeUI 单元格超链接组件
 * @class                 WxCellLinkComponent
 * @property {string}     WxCellLinkComponent.label      - 输入参数: 显示标题
 * @property {Array<any>} WxCellLinkComponent.uri        - 输入参数: Router对象跳转参数数组
 * @property {string}     WxCellLinkComponent.uri        - 输入参数: URL地址字符串
 * @property {boolean}    WxCellLinkComponent.accessIcon - 输入参数: 是否显示小箭头
 */
var WxCellLinkComponent = (function () {
    function WxCellLinkComponent(router) {
        this.router = router;
        this.classes = "weui-cell weui-cell_link";
    }
    WxCellLinkComponent.prototype.ngOnInit = function () {
        if (this.accessIcon) {
            this.classes += " weui-cell_access";
        }
    };
    WxCellLinkComponent.prototype.doLink = function () {
        if (this.uri instanceof Array) {
            this.router.navigate(this.uri);
        }
        else if (typeof this.uri === "string") {
            window.open(this.uri, "_blank");
        }
    };
    return WxCellLinkComponent;
}());
__decorate([
    core_1.HostBinding("attr.class"),
    __metadata("design:type", String)
], WxCellLinkComponent.prototype, "classes", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WxCellLinkComponent.prototype, "label", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], WxCellLinkComponent.prototype, "uri", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WxCellLinkComponent.prototype, "accessIcon", void 0);
WxCellLinkComponent = __decorate([
    core_1.Component({
        host: {
            "style": "cursor: pointer;",
            "(click)": "doLink()",
        },
        selector: "a[wx-cell-link]",
        template: "\n    <div class=\"weui-cell__bd\">{{label}}</div>\n    <div class=\"weui-cell__ft\" *ngIf=\"accessIcon\"></div>\n  ",
    }),
    __metadata("design:paramtypes", [router_1.Router])
], WxCellLinkComponent);
exports.WxCellLinkComponent = WxCellLinkComponent;
/**
 * WeUI 单元格跳转访问组件
 * @class                 WxCellAccessComponent
 * @property {Array<any>} WxCellAccessComponent.uri - 输入参数: Router对象跳转参数数组
 * @property {string}     WxCellAccessComponent.uri - 输入参数: URL地址字符串
 */
var WxCellAccessComponent = (function () {
    function WxCellAccessComponent(router) {
        this.router = router;
    }
    WxCellAccessComponent.prototype.doLink = function () {
        if (this.uri instanceof Array) {
            this.router.navigate(this.uri);
        }
        else if (typeof this.uri === "string") {
            window.open(this.uri, "_blank");
        }
    };
    return WxCellAccessComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], WxCellAccessComponent.prototype, "uri", void 0);
WxCellAccessComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-cell weui-cell_access",
            "style": "cursor: pointer;",
            "(click)": "doLink()",
        },
        selector: "a[wx-cell-access]",
        template: "\n    <ng-content select=\"[wx-cell-header]\"></ng-content>\n    <ng-content select=\"[wx-cell-body]\"></ng-content>\n    <ng-content select=\"[wx-cell-footer]\"></ng-content>\n  ",
    }),
    __metadata("design:paramtypes", [router_1.Router])
], WxCellAccessComponent);
exports.WxCellAccessComponent = WxCellAccessComponent;

//# sourceMappingURL=list.component.js.map
