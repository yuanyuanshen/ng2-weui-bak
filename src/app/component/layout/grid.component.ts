import { Component, Input, HostBinding, OnInit } from "@angular/core";
import { Router } from "@angular/router";

/**
 * WeUI 九宫格组件
 * @class WxGridsComponent
 */
@Component({
  host: {
    "class": "weui-grids",
  },
  selector: "div[wx-grids]",
  template: `
    <ng-content select="[wx-grid]"></ng-content>
  `,
})
export class WxGridsComponent { }

/**
 * WeUI 九宫格单元格组件
 * @class                 WxGridComponent
 * @property {Array<any>} WxGridComponent.uri - 输入参数: Router对象跳转参数数组
 * @property {string}     WxGridComponent.uri - 输入参数: URL地址字符串
 */
@Component({
  host: {
    "class": "weui-grid",
    "(click)": "doLink()",
  },
  selector: "a[wx-grid]",
  template: `
    <ng-content select="[wx-grid-icon]"></ng-content>
    <ng-content select="[wx-grid-label]"></ng-content>
  `,
})
export class WxGridComponent implements OnInit {
  @HostBinding("style.cursor")
  private styles: string = "auto";
  @Input()
  private uri: Array<any> | string;

  constructor(
    private router: Router,
  ) { }

  public ngOnInit(): void {
    if (this.uri) {
      this.styles = "pointer";
    }
  }

  private doLink(): void {
    if (this.uri instanceof Array) {
      this.router.navigate(this.uri);
    } else if (typeof this.uri === "string") {
      window.open(this.uri, "_blank");
    }
  }
}

/**
 * WeUI 九宫格图标组件
 * @class             WxGridIconComponent
 * @property {string} WxGridIconComponent.iconUrl - 输入参数: 图标URL地址
 */
@Component({
  host: {
    "class": "weui-grid__icon",
  },
  selector: "div[wx-grid-icon]",
  template: `
    <img src="{{iconUrl}}" alt="">
  `,
})
export class WxGridIconComponent {
  @Input("icon-url")
  private iconUrl: string;
}

/**
 * WeUI 九宫格标签组件
 * @class             WxGridLabelComponent
 * @property {string} WxGridLabelComponent.label - 输入参数: 标签内容
 */
@Component({
  host: {
    "class": "weui-grid__label",
  },
  selector: "p[wx-grid-label]",
  template: `
    {{label}}
  `,
})
export class WxGridLabelComponent {
  @Input()
  private label: string;
}
