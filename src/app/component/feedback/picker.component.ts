import { Component, Input, Output, HostBinding, EventEmitter, OnChanges } from "@angular/core";

/**
 * WeUI 日期选择组件
 * @class                            WxToastMsgComponent
 * @property {string}                WxToastMsgComponent.message     - 输入参数: 消息内容
 * @property {number}                WxToastMsgComponent.showSeconds - 输入参数: 持续时长(秒)
 * @property {boolean}               WxToastMsgComponent.display     - 输入输出参数: 是否显示
 * @event                            WxToastMsgComponent#display
 */
@Component({
  selector: "div[wx-datepicker]",
  template: `
    <div class="weui-mask" (click)="doCancel()" [ngClass]="{'weui-animate-fade-in': display}"></div>
    <div class="weui-picker" [ngClass]="{'weui-animate-slide-up': display}">
      <div class="weui-picker__hd">
        <a class="weui-picker__action" style="cursor: pointer" (click)="doCancel()">取消</a>
        <a class="weui-picker__action" style="cursor: pointer" (click)="doSelect('confirm')">确定</a>
      </div>
      <div class="weui-picker__bd">
        <div class="weui-picker__group">
          <div class="weui-picker__mask"></div>
          <div class="weui-picker__indicator"></div>
          <div class="weui-picker__content">
            <div class="weui-picker__item">1</div>
            <div class="weui-picker__item">1</div>
            <div class="weui-picker__item">1</div>
          </div>
        </div>
        <div class="weui-picker__group">
          <div class="weui-picker__mask"></div>
          <div class="weui-picker__indicator"></div>
          <div class="weui-picker__content">
            <div class="weui-picker__item">2</div>
            <div class="weui-picker__item">2</div>
            <div class="weui-picker__item">2</div>
          </div>
        </div>
        <div class="weui-picker__group">
          <div class="weui-picker__mask"></div>
          <div class="weui-picker__indicator"></div>
          <div class="weui-picker__content">
            <div class="weui-picker__item">3</div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WxDatePickerComponent implements OnChanges {
  @HostBinding("style.display")
  private styles: string = "none";
  @Input()
  private display: boolean = false;
  @Output()
  private displayChange: EventEmitter<boolean> = new EventEmitter();
  @Output("do-check")
  private doCheck: EventEmitter<any> = new EventEmitter();

  public ngOnChanges(): void {
    if (this.display) {
      this.styles = "block";
    } else {
      this.styles = "none";
    }
  }

  private doSelect(menu: any): void {
    this.doCheck.emit(menu);
    this.display = false;
    this.displayChange.emit(this.display);
  }

  private doCancel(): void {
    this.doCheck.emit(null);
    this.display = false;
    this.displayChange.emit(this.display);
  }
}
