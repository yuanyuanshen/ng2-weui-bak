import { Component, Input } from "@angular/core";

/**
 * WeUI 消息页组件
 * @class             WxMsgComponent
 * @property {string} WxMsgComponent.message - 输入参数: 消息内容
 * @property {string} WxMsgComponent.detail  - 输入参数: 描述信息
 */
@Component({
  host: {
    "class": "weui-msg",
  },
  selector: "div[wx-msg]",
  template: `
    <div class="weui-msg__icon-area">
      <ng-content select="[wx-icon]"></ng-content>
    </div>
    <div class="weui-msg__text-area">
      <h2 class="weui-msg__title">{{message}}</h2>
      <p class="weui-msg__desc">{{detail}}</p>
    </div>
    <div class="weui-msg__opr-area">
      <p class="weui-btn-area">
        <ng-content select="[wx-button]"></ng-content>
      </p>
    </div>
    <div class="weui-msg__extra-area">
      <ng-content select="[wx-footer]"></ng-content>
    </div>
  `,
})
export class WxMsgComponent {
  @Input()
  private message: string;
  @Input()
  private detail: string;
}
