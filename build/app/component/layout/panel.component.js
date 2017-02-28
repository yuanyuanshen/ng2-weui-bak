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
 * WeUI 面板组件
 * @class WxPanelComponent
 */
var WxPanelComponent = (function () {
    function WxPanelComponent() {
    }
    return WxPanelComponent;
}());
WxPanelComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-panel",
        },
        selector: "div[wx-panel]",
        template: "\n    <ng-content select=\"[wx-panel-header]\"></ng-content>\n    <ng-content select=\"[wx-panel-body]\"></ng-content>\n    <ng-content select=\"[wx-panel-footer]\"></ng-content>\n  ",
    })
], WxPanelComponent);
exports.WxPanelComponent = WxPanelComponent;
/**
 * WeUI 面板 Header 组件
 * @class WxPanelHeaderComponent
 */
var WxPanelHeaderComponent = (function () {
    function WxPanelHeaderComponent() {
    }
    return WxPanelHeaderComponent;
}());
WxPanelHeaderComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-panel__hd",
        },
        selector: "div[wx-panel-header]",
        template: "\n    <ng-content></ng-content>\n  ",
    })
], WxPanelHeaderComponent);
exports.WxPanelHeaderComponent = WxPanelHeaderComponent;
/**
 * WeUI 面板 Body 组件
 * @class WxPanelBodyComponent
 */
var WxPanelBodyComponent = (function () {
    function WxPanelBodyComponent() {
    }
    return WxPanelBodyComponent;
}());
WxPanelBodyComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-panel__bd",
        },
        selector: "div[wx-panel-body]",
        template: "\n    <ng-content></ng-content>\n  ",
    })
], WxPanelBodyComponent);
exports.WxPanelBodyComponent = WxPanelBodyComponent;
/**
 * WeUI 面板 Footer 组件
 * @class WxPanelFooterComponent
 */
var WxPanelFooterComponent = (function () {
    function WxPanelFooterComponent() {
    }
    return WxPanelFooterComponent;
}());
WxPanelFooterComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-panel__ft",
        },
        selector: "div[wx-panel-footer]",
        template: "\n    <ng-content></ng-content>\n  ",
    })
], WxPanelFooterComponent);
exports.WxPanelFooterComponent = WxPanelFooterComponent;
/**
 * WeUI 多媒体应用消息组件
 * @class                 WxMediaBoxAppMsgComponent
 * @property {Array<any>} WxMediaBoxAppMsgComponent.uri - 输入参数: Router对象跳转参数数组
 * @property {string}     WxMediaBoxAppMsgComponent.uri - 输入参数: URL地址字符串
 */
var WxMediaBoxAppMsgComponent = (function () {
    function WxMediaBoxAppMsgComponent(router) {
        this.router = router;
        this.styles = "auto";
    }
    WxMediaBoxAppMsgComponent.prototype.ngOnInit = function () {
        if (this.uri) {
            this.styles = "pointer";
        }
    };
    WxMediaBoxAppMsgComponent.prototype.doLink = function () {
        if (this.uri instanceof Array) {
            this.router.navigate(this.uri);
        }
        else if (typeof this.uri === "string") {
            window.open(this.uri, "_blank");
        }
    };
    return WxMediaBoxAppMsgComponent;
}());
__decorate([
    core_1.HostBinding("style.cursor"),
    __metadata("design:type", String)
], WxMediaBoxAppMsgComponent.prototype, "styles", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], WxMediaBoxAppMsgComponent.prototype, "uri", void 0);
WxMediaBoxAppMsgComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-media-box weui-media-box_appmsg",
            "(click)": "doLink()",
        },
        selector: "a[wx-media-box-app-msg]",
        template: "\n    <ng-content select=\"[wx-media-box-header]\"></ng-content>\n    <ng-content select=\"[wx-media-box-body]\"></ng-content>\n  ",
    }),
    __metadata("design:paramtypes", [router_1.Router])
], WxMediaBoxAppMsgComponent);
exports.WxMediaBoxAppMsgComponent = WxMediaBoxAppMsgComponent;
/**
 * WeUI 多媒体应用消息组件
 * @class WxMediaBoxSmallAppMsgComponent
 */
var WxMediaBoxSmallAppMsgComponent = (function () {
    function WxMediaBoxSmallAppMsgComponent() {
    }
    return WxMediaBoxSmallAppMsgComponent;
}());
WxMediaBoxSmallAppMsgComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-media-box weui-media-box_small-appmsg",
        },
        selector: "div[wx-media-box-small-app-msg]",
        template: "\n    <ng-content select=\"[wx-cells]\"></ng-content>\n  ",
    })
], WxMediaBoxSmallAppMsgComponent);
exports.WxMediaBoxSmallAppMsgComponent = WxMediaBoxSmallAppMsgComponent;
/**
 * WeUI 多媒体文本组件
 * @class                 WxMediaBoxTextComponent
 * @property {Array<any>} WxMediaBoxTextComponent.uri - 输入参数: Router对象跳转参数数组
 * @property {string}     WxMediaBoxTextComponent.uri - 输入参数: URL地址字符串
 */
var WxMediaBoxTextComponent = (function () {
    function WxMediaBoxTextComponent(router) {
        this.router = router;
        this.styles = "auto";
    }
    WxMediaBoxTextComponent.prototype.ngOnInit = function () {
        if (this.uri) {
            this.styles = "pointer";
        }
    };
    WxMediaBoxTextComponent.prototype.doLink = function () {
        if (this.uri instanceof Array) {
            this.router.navigate(this.uri);
        }
        else if (typeof this.uri === "string") {
            window.open(this.uri, "_blank");
        }
    };
    return WxMediaBoxTextComponent;
}());
__decorate([
    core_1.HostBinding("style.cursor"),
    __metadata("design:type", String)
], WxMediaBoxTextComponent.prototype, "styles", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], WxMediaBoxTextComponent.prototype, "uri", void 0);
WxMediaBoxTextComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-media-box weui-media-box_text",
            "(click)": "doLink()",
        },
        selector: "div[wx-media-box-text]",
        template: "\n    <ng-content select=\"[wx-media-box-title]\"></ng-content>\n    <ng-content select=\"[wx-media-box-desc]\"></ng-content>\n    <ng-content select=\"[wx-media-box-info]\"></ng-content>\n  ",
    }),
    __metadata("design:paramtypes", [router_1.Router])
], WxMediaBoxTextComponent);
exports.WxMediaBoxTextComponent = WxMediaBoxTextComponent;
/**
 * WeUI 多媒体 Header 组件
 * @class WxMediaBoxHeaderComponent
 */
var WxMediaBoxHeaderComponent = (function () {
    function WxMediaBoxHeaderComponent() {
    }
    return WxMediaBoxHeaderComponent;
}());
WxMediaBoxHeaderComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-media-box__hd",
        },
        selector: "div[wx-media-box-header]",
        template: "\n    <ng-content select=\"[wx-media-box-thumb]\"></ng-content>\n    <ng-content></ng-content>\n  ",
    })
], WxMediaBoxHeaderComponent);
exports.WxMediaBoxHeaderComponent = WxMediaBoxHeaderComponent;
/**
 * WeUI 多媒体 Body 组件
 * @class WxMediaBoxBodyComponent
 */
var WxMediaBoxBodyComponent = (function () {
    function WxMediaBoxBodyComponent() {
    }
    return WxMediaBoxBodyComponent;
}());
WxMediaBoxBodyComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-media-box__bd",
        },
        selector: "div[wx-media-box-body]",
        template: "\n    <ng-content select=\"[wx-media-box-title]\"></ng-content>\n    <ng-content select=\"[wx-media-box-desc]\"></ng-content>\n  ",
    })
], WxMediaBoxBodyComponent);
exports.WxMediaBoxBodyComponent = WxMediaBoxBodyComponent;
/**
 * WeUI 多媒体图片组件
 * @class WxMediaBoxThumbComponent
 */
var WxMediaBoxThumbComponent = (function () {
    function WxMediaBoxThumbComponent() {
    }
    return WxMediaBoxThumbComponent;
}());
WxMediaBoxThumbComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-media-box__thumb",
        },
        selector: "img[wx-media-box-thumb]",
        template: "",
    })
], WxMediaBoxThumbComponent);
exports.WxMediaBoxThumbComponent = WxMediaBoxThumbComponent;
/**
 * WeUI 多媒体标题组件
 * @class WxMediaBoxTitleComponent
 */
var WxMediaBoxTitleComponent = (function () {
    function WxMediaBoxTitleComponent() {
    }
    return WxMediaBoxTitleComponent;
}());
WxMediaBoxTitleComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-media-box__title",
        },
        selector: "h4[wx-media-box-title]",
        template: "\n    <ng-content></ng-content>\n  ",
    })
], WxMediaBoxTitleComponent);
exports.WxMediaBoxTitleComponent = WxMediaBoxTitleComponent;
/**
 * WeUI 多媒体描述组件
 * @class WxMediaBoxDescComponent
 */
var WxMediaBoxDescComponent = (function () {
    function WxMediaBoxDescComponent() {
    }
    return WxMediaBoxDescComponent;
}());
WxMediaBoxDescComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-media-box__desc",
        },
        selector: "p[wx-media-box-desc]",
        template: "\n    <ng-content></ng-content>\n  ",
    })
], WxMediaBoxDescComponent);
exports.WxMediaBoxDescComponent = WxMediaBoxDescComponent;
/**
 * WeUI 多媒体详情组件
 * @class WxMediaBoxInfoComponent
 */
var WxMediaBoxInfoComponent = (function () {
    function WxMediaBoxInfoComponent() {
    }
    return WxMediaBoxInfoComponent;
}());
WxMediaBoxInfoComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-media-box__info",
        },
        selector: "ul[wx-media-box-info]",
        template: "\n    <ng-content select=\"[wx-media-box-info-meta]\"></ng-content>\n    <ng-content select=\"[wx-media-box-info-meta-extra]\"></ng-content>\n  ",
    })
], WxMediaBoxInfoComponent);
exports.WxMediaBoxInfoComponent = WxMediaBoxInfoComponent;
/**
 * WeUI 多媒体详情 Meta 组件
 * @class WxMediaBoxInfoMetaComponent
 */
var WxMediaBoxInfoMetaComponent = (function () {
    function WxMediaBoxInfoMetaComponent() {
    }
    return WxMediaBoxInfoMetaComponent;
}());
WxMediaBoxInfoMetaComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-media-box__info__meta",
        },
        selector: "li[wx-media-box-info-meta]",
        template: "\n    <ng-content></ng-content>\n  ",
    })
], WxMediaBoxInfoMetaComponent);
exports.WxMediaBoxInfoMetaComponent = WxMediaBoxInfoMetaComponent;
/**
 * WeUI 多媒体详情 Meta Extra 组件
 * @class WxMediaBoxInfoComponent
 */
var WxMediaBoxInfoMetaExtraComponent = (function () {
    function WxMediaBoxInfoMetaExtraComponent() {
    }
    return WxMediaBoxInfoMetaExtraComponent;
}());
WxMediaBoxInfoMetaExtraComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-media-box__info__meta weui-media-box__info__meta_extra",
        },
        selector: "li[wx-media-box-info-meta-extra]",
        template: "\n    <ng-content></ng-content>\n  ",
    })
], WxMediaBoxInfoMetaExtraComponent);
exports.WxMediaBoxInfoMetaExtraComponent = WxMediaBoxInfoMetaExtraComponent;

//# sourceMappingURL=panel.component.js.map
