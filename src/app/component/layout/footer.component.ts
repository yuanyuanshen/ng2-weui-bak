import { Component, Input, HostBinding, OnInit } from "@angular/core";
import { Router } from "@angular/router";

/**
 * Footer 超链接对象
 * @interface             FooterLink
 * @property {string}     FooterLink.label - 链接名称
 * @property {Array<any>} FooterLink.uri   - Router对象跳转参数数组
 * @property {string}     FooterLink.uri   - URL地址字符串
 */
export interface FooterLink {
  label: string;
  uri: Array<any> | string;
}

/**
 * WeUI 页脚组件
 * @class                        WxFooterComponent
 * @property {boolean}           WxFooterComponent.fixBottom - 输入参数: 是否固定在底部
 * @property {Array<FooterLink>} WxFooterComponent.links     - 输入参数: Footer 超链接对象组
 * @property {string}            WxFooterComponent.tips      - 输入参数: 提示语
 */
@Component({
  selector: "div[wx-footer]",
  template: `
    <p *ngIf="links" class="weui-footer__links">
      <a *ngFor="let link of links" class="weui-footer__link" style="cursor: pointer;" (click)="doLink(link.uri)">{{link.label}}</a>
    </p>
    <p class="weui-footer__text">{{tips}}</p>
  `,
})
export class WxFooterComponent implements OnInit {
  @HostBinding("attr.class")
  private classes: string = "weui-footer";
  @Input("fix-bottom")
  private fixBottom: boolean;
  @Input()
  private links: Array<FooterLink>;
  @Input()
  private tips: string;

  constructor(
    private router: Router,
  ) { }

  public ngOnInit(): void {
    if (this.fixBottom === true) {
      this.classes += "  weui-footer_fixed-bottom";
    }
  }

  private doLink(uri: Array<any> | string): void {
    if (uri instanceof Array) {
      this.router.navigate(uri);
    } else if (typeof uri === "string") {
      window.open(uri, "_blank");
    }
  }
}
