import { Component, Input, Output, HostBinding, EventEmitter, OnChanges } from "@angular/core";

/**
 * WeUI 面包框组件
 * @class                            WxToastMsgComponent
 * @property {string}                WxToastMsgComponent.message     - 输入参数: 消息内容
 * @property {number}                WxToastMsgComponent.showSeconds - 输入参数: 持续时长(秒)
 * @property {boolean}               WxToastMsgComponent.display     - 输入输出参数: 是否显示
 * @event                            WxToastMsgComponent#display
 */
@Component({
  selector: "div[wx-toast]",
  template: `
    <div class="weui-mask_transparent"></div>
    <div class="weui-toast">
      <ng-content select="[wx-icon]"></ng-content>
      <p class="weui-toast__content">{{message}}</p>
    </div>
  `,
})
export class WxToastComponent implements OnChanges {
  @HostBinding("style.display")
  private styles: string = "none";
  @Input()
  private message: string;
  @Input("show-seconds")
  private showSeconds: number = 9999;
  @Input()
  private display: boolean = false;
  @Output()
  private displayChange: EventEmitter<boolean> = new EventEmitter();

  public ngOnChanges(): void {
    if (this.display) {
      this.styles = "block";
      setTimeout(() => {
        this.display = false;
        this.displayChange.emit(this.display);
      }, this.showSeconds * 1200);
    } else {
      this.styles = "none";
    }
  }
}
