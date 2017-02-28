import { Component, Input, HostBinding, OnInit } from "@angular/core";

/**
 * WeUI 载入更多组件
 * @class              WxLoadmoreComponent
 * @property {boolean} WxLoadmoreComponent.withLine - 输入参数: 是否有横线
 * @property {boolean} WxLoadmoreComponent.withDot  - 输入参数: 是否有点
 */
@Component({
  selector: "div[wx-loadmore]",
  template: `
    <ng-content select="[wx-icon]"></ng-content>
    <ng-content select="[wx-loadmore-tips]"></ng-content>
  `,
})
export class WxLoadmoreComponent implements OnInit {
  @HostBinding("attr.class")
  private classes: string = "weui-loadmore";
  @Input("with-line")
  private withLine: boolean;
  @Input("with-dot")
  private withDot: boolean;

  public ngOnInit(): void {
    if (this.withLine) {
      this.classes += " weui-loadmore_line";
    }
    if (this.withDot) {
      this.classes += " weui-loadmore_dot";
    }
  }
}

/**
 * WeUI 载入更多提示语组件
 * @class              WxLoadmoreTipsComponent
 * @property {boolean} WxLoadmoreTipsComponent.tips - 输入参数: 提示语
 */
@Component({
  host: {
    "class": "weui-loadmore__tips",
  },
  selector: "span[wx-loadmore-tips]",
  template: `
    {{tips}}
  `,
})
export class WxLoadmoreTipsComponent {
  @Input()
  private tips: string;
}
