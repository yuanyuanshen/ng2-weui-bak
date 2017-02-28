"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var InputDemoComponent = (function () {
    function InputDemoComponent() {
        // 默认值
        this.checkedRadioItem = "2";
        this.checkedCheckboxItems = "1";
        this.links1 = ["/list"];
        this.switchStatus = true;
        this.selected1 = "1";
        this.selected2 = "1";
        this.selected3 = "2";
        this.agreeFlag = true;
        // 初始化下拉、单选、多选组件数据
        this.radioItem = {
            name: "radio1",
            options: [{
                    id: "rd1",
                    label: "cell standard",
                    value: "1",
                }, {
                    id: "rd2",
                    label: "cell standard",
                    value: "2",
                }],
        };
        this.checkboxItem = {
            name: "checkbox1",
            options: [{
                    id: "ck1",
                    label: "standard is dealt for u.",
                    value: "1",
                }, {
                    id: "ck2",
                    label: "standard is dealicient for u.",
                    value: "2",
                }],
        };
        this.switchItem = {
            id: "sw1",
            label: "标题文字",
            name: "sw1",
            value: "checkbox2",
        };
        this.selectOptions1 = [{
                label: "+86",
                value: "1",
            }, {
                label: "+80",
                value: "2",
            }, {
                label: "+84",
                value: "3",
            }, {
                label: "+87",
                value: "4",
            }];
        this.selectOptions2 = [{
                label: "微信号",
                value: "1",
            }, {
                label: "QQ号",
                value: "2",
            }, {
                label: "Email",
                value: "3",
            }];
        this.selectOptions3 = [{
                label: "中国",
                value: "1",
            }, {
                label: "美国",
                value: "2",
            }, {
                label: "英国",
                value: "3",
            }];
    }
    return InputDemoComponent;
}());
InputDemoComponent = __decorate([
    core_1.Component({
        selector: "input-demo",
        template: "\n    <div class=\"page js_show\">\n      <div class=\"page__hd\">\n        <h1 class=\"page__title\">Input</h1>\n        <p class=\"page__desc\">\u8868\u5355\u8F93\u5165</p>\n      </div>\n      <div class=\"page__bd\">\n        <form name=\"Form\">\n          <div wx-cells-title title=\"\u5355\u9009\u5217\u8868\u9879\"></div>\n          <div wx-radio [item]=\"radioItem\" [(ngModel)]=\"checkedRadioItem\" [ngModelOptions]=\"{standalone: true}\"></div>\n          <div wx-cells-tips tips=\"\u9009\u62E9\u7ED3\u679C: {{checkedRadioItem}}\"></div>\n          <div wx-cells-title title=\"\u591A\u9009\u5217\u8868\u9879\"></div>\n          <div wx-checkbox [item]=\"checkboxItem\" [(ngModel)]=\"checkedCheckboxItems\" [ngModelOptions]=\"{standalone: true}\"></div>\n          <div wx-cells-tips tips=\"\u9009\u62E9\u7ED3\u679C: {{checkedCheckboxItems}}\"></div>\n          <div wx-cells-title title=\"\u8868\u5355\"></div>\n          <div wx-cells-form>\n            <div wx-cell>\n              <div wx-cell-header>\n                <label wx-label label=\"qq\"></label>\n              </div>\n              <div wx-cell-body>\n                <input wx-input type=\"number\" max-length=\"3\" pattern=\"[0-9]*\" [(ngModel)]=\"qqInput\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"\u8BF7\u8F93\u5165qq\u53F7\"/>\n              </div>\n            </div>\n            <div wx-cell-vcode>\n              <div wx-cell-header>\n                <label wx-label label=\"\u624B\u673A\u53F7\"></label>\n              </div>\n              <div wx-cell-body>\n                <input wx-input type=\"tel\" [(ngModel)]=\"telInput\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"\u8BF7\u8F93\u5165\u624B\u673A\u53F7\"/>\n              </div>\n              <div wx-cell-footer>\n                <a wx-button-vcode label=\"\u83B7\u53D6\u9A8C\u8BC1\u7801\"></a>\n              </div>\n            </div>\n            <div wx-cell>\n              <div wx-cell-header>\n                <label wx-label label=\"\u65E5\u671F\"></label>\n              </div>\n              <div wx-cell-body>\n                <input wx-input type=\"date\" [(ngModel)]=\"dateInput\" [ngModelOptions]=\"{standalone: true}\"/>\n              </div>\n            </div>\n            <div wx-cell>\n              <div wx-cell-header>\n                <label wx-label label=\"\u65F6\u95F4\"></label>\n              </div>\n              <div wx-cell-body>\n                <input wx-input type=\"datetime-local\" [(ngModel)]=\"timeInput\" [ngModelOptions]=\"{standalone: true}\"/>\n              </div>\n            </div>\n            <div wx-cell-vcode>\n              <div wx-cell-header>\n                <label wx-label label=\"\u9A8C\u8BC1\u7801\"></label>\n              </div>\n              <div wx-cell-body>\n                <input wx-input type=\"tel\" [(ngModel)]=\"vcodeInput\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801\"/>\n              </div>\n              <div wx-cell-footer>\n                <img class=\"weui-vcode-img\" src=\"./images/vcode.jpg\"/>\n              </div>\n            </div>\n          </div>\n          <div wx-cells-tips tips=\"Form\u5185\u5BB9: qq:{{qqInput}} | \u624B\u673A:{{telInput}} | \u65E5\u671F:{{dateInput}} | \u65F6\u95F4:{{timeInput}} | \u9A8C\u8BC1\u7801:{{vcodeInput}}\"></div>\n          <div wx-cells-tips tips=\"\u5E95\u90E8\u8BF4\u660E\u6587\u5B57\u5E95\u90E8\u8BF4\u660E\u6587\u5B57\"></div>\n          <div wx-cells-title title=\"\u8868\u5355\u62A5\u9519\"></div>\n          <div wx-cells-form>\n            <div wx-cell-warn>\n              <div wx-cell-header>\n                <label wx-label label=\"\u5361\u53F7\"></label>\n              </div>\n              <div wx-cell-body>\n                <input wx-input type=\"tel\" [(ngModel)]=\"cardInput\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"\u8BF7\u8F93\u5165\u5361\u53F7\"/>\n              </div>\n              <div wx-cell-footer>\n                <i class=\"weui-icon-warn\"></i>\n              </div>\n            </div>\n            <a wx-cell-link label=\"\u6DFB\u52A0\u66F4\u591A\" [uri]=\"links1\"></a>\n          </div>\n          <div wx-cells-tips tips=\"\u5361\u53F7\u5185\u5BB9: {{cardInput}}\"></div>\n          <div wx-cells-title title=\"\u5F00\u5173\"></div>\n          <div wx-cells>\n            <div wx-switch [item]=\"switchItem\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"switchStatus\"></div>\n          </div>\n          <div wx-cells-tips tips=\"\u5F00\u5173\u72B6\u6001: {{switchStatus}}\"></div>\n          <div wx-cells-title title=\"\u6587\u672C\u6846\"></div>\n          <div wx-cells>\n            <div wx-cell>\n              <div wx-cell-body>\n                <input wx-input type=\"text\" [(ngModel)]=\"textInput\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"\u8BF7\u8F93\u5165\u6587\u672C\"/>\n              </div>\n            </div>\n          </div>\n          <div wx-cells-tips tips=\"\u6587\u672C\u6846\u5185\u5BB9: {{textInput}}\"></div>\n          <div wx-cells-title title=\"\u6587\u672C\u57DF\"></div>\n          <div wx-text-area [(ngModel)]=\"textareaInput\" [ngModelOptions]=\"{standalone: true}\" name=\"area1\" rows=\"3\" maxCharCount=\"20\" placeholder=\"\u8BF7\u8F93\u5165\u6587\u672C\"></div>\n          <div wx-cells-tips tips=\"\u6587\u672C\u57DF\u5185\u5BB9: {{textareaInput}}\"></div>\n          <div wx-cells-title title=\"\u9009\u62E9\"></div>\n          <div wx-cells>\n            <div wx-cell-select-before>\n              <select wx-select [(ngModel)]=\"selected1\" [ngModelOptions]=\"{standalone: true}\" [options]=\"selectOptions1\" name=\"select1\"></select>\n              <input wx-input type=\"tel\" [(ngModel)]=\"selectInput1\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"\u8BF7\u8F93\u5165\u53F7\u7801\"/>\n            </div>\n          </div>\n          <div wx-cells-tips tips=\"\u9009\u62E9\u5185\u5BB9: {{selected1}} | {{selectInput1}}\"></div>\n          <div wx-cells-title title=\"\u9009\u62E9\"></div>\n          <div wx-cells>\n            <div wx-cell-select>\n              <select wx-select [(ngModel)]=\"selected2\" [ngModelOptions]=\"{standalone: true}\" [options]=\"selectOptions2\" name=\"select2\"></select>\n            </div>\n            <div wx-cell-select-after>\n              <label wx-label label=\"\u56FD\u5BB6/\u5730\u533A\"></label>\n              <select wx-select [(ngModel)]=\"selected3\" [ngModelOptions]=\"{standalone: true}\" [options]=\"selectOptions3\" name=\"select1\"></select>\n            </div>\n          </div>\n          <div wx-cells-tips tips=\"\u9009\u62E9\u5185\u5BB9: {{selected2}} | {{selected3}}\"></div>\n          <label wx-agree [(ngModel)]=\"agreeFlag\" [ngModelOptions]=\"{standalone: true}\" for=\"agree\" declare=\"\u9605\u8BFB\u5E76\u540C\u610F\" title=\"\u300A\u76F8\u5173\u6761\u6B3E\u300B\" url=\"http://www.baidu.com/\"></label>\n          <div wx-cells-tips tips=\"\u662F\u5426\u5DF2\u540C\u610F: {{agreeFlag}}\"></div>\n          <div wx-button-area>\n            <a wx-button color=\"primary\" type=\"normal\" label=\"\u786E\u5B9A\"></a>\n          </div>\n        </form>\n      </div>\n      <div class=\"page__ft\">\n        <a style=\"cursor: pointer;\" [routerLink]=\"['/']\"><img src=\"./images/icon_footer_link.png\"/></a>\n      </div>\n    </div>\n  ",
    })
], InputDemoComponent);
exports.InputDemoComponent = InputDemoComponent;

//# sourceMappingURL=input-demo.component.js.map
