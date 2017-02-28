"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MsgDemoComponent = (function () {
    function MsgDemoComponent() {
        this.msg = "操作成功";
        this.dtl = "内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现";
    }
    return MsgDemoComponent;
}());
MsgDemoComponent = __decorate([
    core_1.Component({
        selector: "msg-demo",
        template: "\n    <div wx-msg [message]=\"msg\" [detail]=\"dtl\">\n      <i wx-icon type=\"success\" size=\"large\"></i>\n      <a wx-button color=\"primary\" label=\"\u63A8\u8350\u64CD\u4F5C\"></a>\n      <a wx-button color=\"default\" label=\"\u8F85\u52A9\u64CD\u4F5C\"></a>\n      <div wx-footer tips=\"Copyright &copy; 2008-2016 weui.io\" [fix-bottom]=\"true\" [links]=\"links3\"></div>\n    </div>\n  ",
    })
], MsgDemoComponent);
exports.MsgDemoComponent = MsgDemoComponent;

//# sourceMappingURL=msg-demo.component.js.map
