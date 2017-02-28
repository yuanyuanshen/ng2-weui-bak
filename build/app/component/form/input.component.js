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
var forms_1 = require("@angular/forms");
/**
 * WeUI 单选组件
 * @class                WxRadioComponent
 * @property {CheckItem} WxRadioComponent.item - 输入参数: 控件初始化对象
 * @attribute {NgModel}                        - 输入输出变量: 绑定的对象变量
 */
var WxRadioComponent = WxRadioComponent_1 = (function () {
    function WxRadioComponent() {
        this.innerValue = "";
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
    }
    WxRadioComponent.prototype.writeValue = function (val) {
        if (val !== this.innerValue) {
            this.innerValue = val;
        }
    };
    WxRadioComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    WxRadioComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    Object.defineProperty(WxRadioComponent.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
        set: function (val) {
            if (val !== this.innerValue) {
                this.innerValue = val;
                this.onChangeCallback(val);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    return WxRadioComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], WxRadioComponent.prototype, "item", void 0);
WxRadioComponent = WxRadioComponent_1 = __decorate([
    core_1.Component({
        host: {
            "class": "weui-cells weui-cells_radio",
        },
        providers: [{
                multi: true, provide: forms_1.NG_VALUE_ACCESSOR, useExisting: core_1.forwardRef(function () { return WxRadioComponent_1; }),
            }],
        selector: "div[wx-radio]",
        template: "\n    <label *ngFor=\"let option of item.options\" class=\"weui-cell weui-check__label\" [attr.for]=\"option.id\">\n      <div class=\"weui-cell__bd\">\n        <p>{{option.label}}</p>\n      </div>\n      <div class=\"weui-cell__ft\">\n        <input type=\"radio\" [(ngModel)]=\"value\" class=\"weui-check\" name=\"{{option.name}}\" [value]=\"option.value\" id=\"{{option.id}}\">\n        <span class=\"weui-icon-checked\"></span>\n      </div>\n    </label>\n  ",
    })
], WxRadioComponent);
exports.WxRadioComponent = WxRadioComponent;
/**
 * WeUI 多选组件
 * @class                WxCheckboxComponent
 * @property {CheckItem} WxCheckboxComponent.item - 输入参数: 控件初始化对象
 * @attribute {NgModel}                           - 输入输出变量: 绑定的对象变量
 */
var WxCheckboxComponent = WxCheckboxComponent_1 = (function () {
    function WxCheckboxComponent(elementRef) {
        this.elementRef = elementRef;
        this.innerValue = "";
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
    }
    WxCheckboxComponent.prototype.ngDoCheck = function () {
        var checks = this.elementRef.nativeElement.getElementsByClassName("weui-check");
        var preChecks = this.value.split(",");
        var _loop_1 = function (i) {
            preChecks.forEach(function (preCheck) {
                if (checks[i].value === preCheck) {
                    checks[i].checked = true;
                }
            });
        };
        for (var i = 0; i < checks.length; i++) {
            _loop_1(i);
        }
    };
    WxCheckboxComponent.prototype.writeValue = function (val) {
        if (val !== this.innerValue) {
            this.innerValue = val;
        }
    };
    WxCheckboxComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    WxCheckboxComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    WxCheckboxComponent.prototype.doChange = function () {
        var checks = this.elementRef.nativeElement.getElementsByClassName("weui-check");
        var swap = [];
        for (var i = 0; i < checks.length; i++) {
            if (checks[i].checked) {
                swap.push(checks[i].value);
            }
        }
        this.value = swap.toString();
    };
    Object.defineProperty(WxCheckboxComponent.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
        set: function (val) {
            if (val !== this.innerValue) {
                this.innerValue = val;
                this.onChangeCallback(val);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    return WxCheckboxComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], WxCheckboxComponent.prototype, "item", void 0);
WxCheckboxComponent = WxCheckboxComponent_1 = __decorate([
    core_1.Component({
        host: {
            "class": "weui-cells weui-cells_checkbox",
        },
        providers: [{
                multi: true, provide: forms_1.NG_VALUE_ACCESSOR, useExisting: core_1.forwardRef(function () { return WxCheckboxComponent_1; }),
            }],
        selector: "div[wx-checkbox]",
        template: "\n    <label *ngFor=\"let option of item.options\" class=\"weui-cell weui-check__label\" [attr.for]=\"option.id\" (change)=\"doChange()\">\n      <div class=\"weui-cell__hd\">\n        <input type=\"checkbox\" class=\"weui-check\" name=\"{{item.name}}\" [value]=\"option.value\" id=\"{{option.id}}\">\n        <i class=\"weui-icon-checked\"></i>\n      </div>\n      <div class=\"weui-cell__bd\">\n        <p>{{option.label}}</p>\n      </div>\n    </label>\n    <input type=\"hidden\" [(ngModel)]=\"value\"/>\n  ",
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], WxCheckboxComponent);
exports.WxCheckboxComponent = WxCheckboxComponent;
/**
 * WeUI 开关组件
 * @class                 WxSwitchComponent
 * @property {SwitchItem} WxSwitchComponent.item - 输入参数: 控件初始化对象
 * @attribute {NgModel}                          - 输入输出变量: 绑定的对象变量
 */
var WxSwitchComponent = WxSwitchComponent_1 = (function () {
    function WxSwitchComponent() {
        this.innerValue = "";
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
    }
    WxSwitchComponent.prototype.writeValue = function (val) {
        if (val !== this.innerValue) {
            this.innerValue = val;
        }
    };
    WxSwitchComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    WxSwitchComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    Object.defineProperty(WxSwitchComponent.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
        set: function (val) {
            if (val !== this.innerValue) {
                this.innerValue = val;
                this.onChangeCallback(val);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    return WxSwitchComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], WxSwitchComponent.prototype, "item", void 0);
WxSwitchComponent = WxSwitchComponent_1 = __decorate([
    core_1.Component({
        host: {
            "class": "weui-cell weui-cell_switch",
        },
        providers: [{
                multi: true, provide: forms_1.NG_VALUE_ACCESSOR, useExisting: core_1.forwardRef(function () { return WxSwitchComponent_1; }),
            }],
        selector: "div[wx-switch]",
        template: "\n    <div class=\"weui-cell__bd\">{{item.label}}</div>\n    <div class=\"weui-cell__ft\">\n      <input class=\"weui-switch\" [(ngModel)]=\"value\" type=\"checkbox\" name=\"{{item.name}}\" [value]=\"item.value\" id=\"{{item.id}}\"/>\n    </div>\n  ",
    })
], WxSwitchComponent);
exports.WxSwitchComponent = WxSwitchComponent;
/**
 * WeUI 输入组件
 * @class WxInputComponent
 * @property {InputType} WxInputComponent.type        - 输入参数: 组件类型
 * @property {string}    WxInputComponent.placeholder - 输入参数: 提示语
 * @attribute {NgModel}                               - 输入输出变量: 绑定的对象变量
 */
var WxInputComponent = (function () {
    function WxInputComponent() {
    }
    return WxInputComponent;
}());
__decorate([
    core_1.HostBinding("attr.type"),
    core_1.Input(),
    __metadata("design:type", String)
], WxInputComponent.prototype, "type", void 0);
__decorate([
    core_1.HostBinding("attr.placeholder"),
    core_1.Input(),
    __metadata("design:type", String)
], WxInputComponent.prototype, "placeholder", void 0);
WxInputComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-input",
        },
        selector: "input[wx-input]",
        template: "",
    })
], WxInputComponent);
exports.WxInputComponent = WxInputComponent;
/**
 * WeUI 文本域组件
 * @class WxTextAreaComponent
 * @property {string} WxTextAreaComponent.name         - 输入参数: 组件名称
 * @property {string} WxTextAreaComponent.placeholder  - 输入参数: 提示语
 * @property {number} WxTextAreaComponent.rows         - 输入参数: 行数
 * @property {number} WxTextAreaComponent.maxCharCount - 输入参数: 最大字数
 * @attribute {NgModel}                                - 输入输出变量: 绑定的对象变量
 */
var WxTextAreaComponent = WxTextAreaComponent_1 = (function () {
    function WxTextAreaComponent() {
        this.innerValue = "";
        this.isWarn = false;
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
    }
    WxTextAreaComponent.prototype.writeValue = function (val) {
        if (val !== this.innerValue) {
            this.innerValue = val;
        }
    };
    WxTextAreaComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    WxTextAreaComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    WxTextAreaComponent.prototype.ngDoCheck = function () {
        var valueLength = this.value ? this.value.length : 0;
        this.currentCharCount = valueLength;
        if (valueLength > this.maxCharCount) {
            this.isWarn = true;
        }
        else {
            this.isWarn = false;
        }
    };
    Object.defineProperty(WxTextAreaComponent.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
        set: function (val) {
            if (val !== this.innerValue) {
                this.innerValue = val;
                this.onChangeCallback(val);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    return WxTextAreaComponent;
}());
__decorate([
    core_1.HostBinding("attr.name"),
    core_1.Input(),
    __metadata("design:type", String)
], WxTextAreaComponent.prototype, "name", void 0);
__decorate([
    core_1.HostBinding("attr.placeholder"),
    core_1.Input(),
    __metadata("design:type", String)
], WxTextAreaComponent.prototype, "placeholder", void 0);
__decorate([
    core_1.HostBinding("attr.rows"),
    core_1.Input(),
    __metadata("design:type", Number)
], WxTextAreaComponent.prototype, "rows", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], WxTextAreaComponent.prototype, "maxCharCount", void 0);
WxTextAreaComponent = WxTextAreaComponent_1 = __decorate([
    core_1.Component({
        host: {
            "class": "weui-cells weui-cells_form",
        },
        providers: [{
                multi: true, provide: forms_1.NG_VALUE_ACCESSOR, useExisting: core_1.forwardRef(function () { return WxTextAreaComponent_1; }),
            }],
        selector: "div[wx-text-area]",
        template: "\n    <div class=\"weui-cell\" [ngClass]=\"{ 'weui-cell_warn': isWarn }\">\n      <div class=\"weui-cell__bd\">\n        <textarea class=\"weui-textarea\" [(ngModel)]=\"value\" placeholder=\"{{placeholder}}\" rows=\"{{rows}}\"></textarea>\n        <div class=\"weui-textarea-counter\">\n          <span>{{currentCharCount}}</span>/{{maxCharCount}}\n        </div>\n      </div>\n    </div>\n  ",
    })
], WxTextAreaComponent);
exports.WxTextAreaComponent = WxTextAreaComponent;
/**
 * WeUI 下拉框组件
 * @class WxSelectComponent
 * @property {string}              name    - 输入参数: 组件名称
 * @property {Array<SelectOption>} options - 输入参数: 控件初始化对象
 * @attribute {NgModel}                    - 输入输出变量: 绑定的对象变量
 */
var WxSelectComponent = (function () {
    function WxSelectComponent() {
    }
    return WxSelectComponent;
}());
__decorate([
    core_1.HostBinding("attr.name"),
    core_1.Input(),
    __metadata("design:type", String)
], WxSelectComponent.prototype, "name", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], WxSelectComponent.prototype, "options", void 0);
WxSelectComponent = __decorate([
    core_1.Component({
        host: {
            "class": "weui-select",
        },
        selector: "select[wx-select]",
        template: "\n    <option *ngFor=\"let option of options\" [value]=\"option.value\">{{option.label}}</option>\n  ",
    })
], WxSelectComponent);
exports.WxSelectComponent = WxSelectComponent;
/**
 * WeUI 协议同意组件
 * @class WxAgreeComponent
 * @property {string} WxAgreeComponent.for     - 输入参数: 组件ID
 * @property {string} WxAgreeComponent.declare - 输入参数: 声明词
 * @property {string} WxAgreeComponent.title   - 输入参数: 协议名称
 * @property {string} WxAgreeComponent.url     - 输入参数: 协议文本地址
 * @attribute {NgModel}                        - 输入输出变量: 绑定的对象变量
 */
var WxAgreeComponent = WxAgreeComponent_1 = (function () {
    function WxAgreeComponent() {
        this.innerValue = "";
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
    }
    WxAgreeComponent.prototype.writeValue = function (val) {
        if (val !== this.innerValue) {
            this.innerValue = val;
        }
    };
    WxAgreeComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    WxAgreeComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    Object.defineProperty(WxAgreeComponent.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
        set: function (val) {
            if (val !== this.innerValue) {
                this.innerValue = val;
                this.onChangeCallback(val);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    return WxAgreeComponent;
}());
__decorate([
    core_1.HostBinding("attr.for"),
    core_1.Input(),
    __metadata("design:type", String)
], WxAgreeComponent.prototype, "for", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WxAgreeComponent.prototype, "declare", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WxAgreeComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WxAgreeComponent.prototype, "url", void 0);
WxAgreeComponent = WxAgreeComponent_1 = __decorate([
    core_1.Component({
        host: {
            "class": "weui-agree",
        },
        providers: [{
                multi: true, provide: forms_1.NG_VALUE_ACCESSOR, useExisting: core_1.forwardRef(function () { return WxAgreeComponent_1; }),
            }],
        selector: "label[wx-agree]",
        template: "\n    <input id=\"{{for}}\" [(ngModel)]=\"value\" type=\"checkbox\" class=\"weui-agree__checkbox\">\n    <span class=\"weui-agree__text\">\n      {{declare}}<a style=\"cursor: pointer;\" href=\"{{url}}\" target=\"_blank\">{{title}}</a>\n    </span>\n  ",
    })
], WxAgreeComponent);
exports.WxAgreeComponent = WxAgreeComponent;
var WxRadioComponent_1, WxCheckboxComponent_1, WxSwitchComponent_1, WxTextAreaComponent_1, WxAgreeComponent_1;

//# sourceMappingURL=input.component.js.map
