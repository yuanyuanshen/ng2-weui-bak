import { Component, Input, OnChanges } from "@angular/core";

/**
 * WeUI 进度条组件
 * @class WxProgressComponent
 */
@Component({
  host: {
    "class": "weui-progress",
  },
  selector: "div[wx-progress]",
  template: `
    <ng-content select="[wx-progress-bar]"></ng-content>
    <ng-content select="[wx-progress-operate]"></ng-content>
  `,
})
export class WxProgressComponent { }

/**
 * WeUI 进度条显示组件
 * @class             WxProgressBarComponent
 * @property {number} WxProgressBarComponent.max   - 输入参数: 最大值
 * @property {number} WxProgressBarComponent.value - 输入参数: 当前值
 */
@Component({
  host: {
    "class": "weui-progress__bar",
  },
  selector: "div[wx-progress-bar]",
  template: `
    <div class="weui-progress__inner-bar js_progress" [ngStyle]="{ 'width': pax }"></div>
  `,
})
export class WxProgressBarComponent implements OnChanges {
  @Input()
  private max: number;
  @Input()
  private value: number;
  private pax: string = "0%";

  public ngOnChanges(): void {
    if (this.value !== undefined && this.max !== undefined && this.max > 0 && this.value >= 0) {
      this.pax = String(this.value / this.max * 100) + "%";
    }
  }
}

/**
 * WeUI 进度条操作组件
 * @class WxProgressOperateComponent
 */
@Component({
  host: {
    "class": "weui-progress__opr",
    "style": "cursor: pointer;",
  },
  selector: "a[wx-progress-operate]",
  template: `
    <ng-content select="[wx-icon]"></ng-content>
  `,
})
export class WxProgressOperateComponent { }
