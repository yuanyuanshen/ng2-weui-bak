import { Component, Input, Output, OnChanges, EventEmitter } from "@angular/core";

/**
 * WeUI 滑块容器组件
 * @class WxSliderBoxComponent
 */
@Component({
  host: {
    "class": "weui-slider-box",
  },
  selector: "div[wx-slider-box]",
  template: `
    <ng-content select="[wx-slider],[wx-slider-box-value]"></ng-content>
  `,
})
export class WxSliderBoxComponent { }

/**
 * WeUI 滑块值标签组件
 * @class WxSliderBoxValueComponent
 */
@Component({
  host: {
    "class": "weui-slider-box__value",
  },
  selector: "div[wx-slider-box-value]",
  template: `
    <ng-content></ng-content>
  `,
})
export class WxSliderBoxValueComponent { }

/**
 * WeUI 滑块组件
 * @class             WxSliderComponent
 * @property {number} WxSliderComponent.max   - 输入参数: 最大值
 * @property {number} WxSliderComponent.value - 输入输出参数: 当前值
 */
@Component({
  host: {
    "class": "weui-slider",
  },
  selector: "div[wx-slider]",
  template: `
    <div class="weui-slider__inner">
      <div [ngStyle]="{ 'width': pax+'%' }" class="weui-slider__track"></div>
      <div [ngStyle]="{ 'left': pax+'%' }" class="weui-slider__handler" (touchmove)="doMove($event)" (touchstart)="doStart($event)"></div>
    </div>
  `,
})
export class WxSliderComponent implements OnChanges {
  @Input()
  private max: number;
  @Input()
  private value: number;
  @Output()
  private valueChange: EventEmitter<number> = new EventEmitter();
  private pax: number = 0;
  private startX: number = 0;
  private startLeft: number = 0;

  public ngOnChanges(): void {
    if (this.value !== undefined && this.max !== undefined && this.max > 0 && this.value >= 0) {
      this.pax = this.value / this.max * 100;
    }
  }

  public doMove(event: any): void {
    let totalLen = event.target.parentNode.offsetWidth;
    let dist = this.startLeft + event.changedTouches[0].clientX - this.startX;
    dist = dist < 0 ? 0 : dist > totalLen ? totalLen : dist;
    this.pax =  dist / totalLen * 100;
    this.value = dist / totalLen * this.max;
    this.valueChange.emit(this.value);
  }

  public doStart(event: any): void {
    let totalLen = event.target.parentNode.offsetWidth;
    this.startLeft = this.pax * totalLen / 100;
    this.startX = event.changedTouches[0].clientX;
  }
}
