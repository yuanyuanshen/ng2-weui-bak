import { Component, Input, HostBinding, OnInit } from "@angular/core";
import { Router } from "@angular/router";

/**
 * WeUI 面板组件
 * @class WxPanelComponent
 */
@Component({
  host: {
    "class": "weui-panel",
  },
  selector: "div[wx-panel]",
  template: `
    <ng-content select="[wx-panel-header]"></ng-content>
    <ng-content select="[wx-panel-body]"></ng-content>
    <ng-content select="[wx-panel-footer]"></ng-content>
  `,
})
export class WxPanelComponent { }

/**
 * WeUI 面板 Header 组件
 * @class WxPanelHeaderComponent
 */
@Component({
  host: {
    "class": "weui-panel__hd",
  },
  selector: "div[wx-panel-header]",
  template: `
    <ng-content></ng-content>
  `,
})
export class WxPanelHeaderComponent { }

/**
 * WeUI 面板 Body 组件
 * @class WxPanelBodyComponent
 */
@Component({
  host: {
    "class": "weui-panel__bd",
  },
  selector: "div[wx-panel-body]",
  template: `
    <ng-content></ng-content>
  `,
})
export class WxPanelBodyComponent { }

/**
 * WeUI 面板 Footer 组件
 * @class WxPanelFooterComponent
 */
@Component({
  host: {
    "class": "weui-panel__ft",
  },
  selector: "div[wx-panel-footer]",
  template: `
    <ng-content></ng-content>
  `,
})
export class WxPanelFooterComponent { }

/**
 * WeUI 多媒体应用消息组件
 * @class                 WxMediaBoxAppMsgComponent
 * @property {Array<any>} WxMediaBoxAppMsgComponent.uri - 输入参数: Router对象跳转参数数组
 * @property {string}     WxMediaBoxAppMsgComponent.uri - 输入参数: URL地址字符串
 */
@Component({
  host: {
    "class": "weui-media-box weui-media-box_appmsg",
    "(click)": "doLink()",
  },
  selector: "a[wx-media-box-app-msg]",
  template: `
    <ng-content select="[wx-media-box-header]"></ng-content>
    <ng-content select="[wx-media-box-body]"></ng-content>
  `,
})
export class WxMediaBoxAppMsgComponent implements OnInit {
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
 * WeUI 多媒体应用消息组件
 * @class WxMediaBoxSmallAppMsgComponent
 */
@Component({
  host: {
    "class": "weui-media-box weui-media-box_small-appmsg",
  },
  selector: "div[wx-media-box-small-app-msg]",
  template: `
    <ng-content select="[wx-cells]"></ng-content>
  `,
})
export class WxMediaBoxSmallAppMsgComponent { }

/**
 * WeUI 多媒体文本组件
 * @class                 WxMediaBoxTextComponent
 * @property {Array<any>} WxMediaBoxTextComponent.uri - 输入参数: Router对象跳转参数数组
 * @property {string}     WxMediaBoxTextComponent.uri - 输入参数: URL地址字符串
 */
@Component({
  host: {
    "class": "weui-media-box weui-media-box_text",
    "(click)": "doLink()",
  },
  selector: "div[wx-media-box-text]",
  template: `
    <ng-content select="[wx-media-box-title]"></ng-content>
    <ng-content select="[wx-media-box-desc]"></ng-content>
    <ng-content select="[wx-media-box-info]"></ng-content>
  `,
})
export class WxMediaBoxTextComponent implements OnInit {
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
 * WeUI 多媒体 Header 组件
 * @class WxMediaBoxHeaderComponent
 */
@Component({
  host: {
    "class": "weui-media-box__hd",
  },
  selector: "div[wx-media-box-header]",
  template: `
    <ng-content select="[wx-media-box-thumb]"></ng-content>
    <ng-content></ng-content>
  `,
})
export class WxMediaBoxHeaderComponent { }

/**
 * WeUI 多媒体 Body 组件
 * @class WxMediaBoxBodyComponent
 */
@Component({
  host: {
    "class": "weui-media-box__bd",
  },
  selector: "div[wx-media-box-body]",
  template: `
    <ng-content select="[wx-media-box-title]"></ng-content>
    <ng-content select="[wx-media-box-desc]"></ng-content>
  `,
})
export class WxMediaBoxBodyComponent { }

/**
 * WeUI 多媒体图片组件
 * @class WxMediaBoxThumbComponent
 */
@Component({
  host: {
    "class": "weui-media-box__thumb",
  },
  selector: "img[wx-media-box-thumb]",
  template: ``,
})
export class WxMediaBoxThumbComponent { }

/**
 * WeUI 多媒体标题组件
 * @class WxMediaBoxTitleComponent
 */
@Component({
  host: {
    "class": "weui-media-box__title",
  },
  selector: "h4[wx-media-box-title]",
  template: `
    <ng-content></ng-content>
  `,
})
export class WxMediaBoxTitleComponent { }

/**
 * WeUI 多媒体描述组件
 * @class WxMediaBoxDescComponent
 */
@Component({
  host: {
    "class": "weui-media-box__desc",
  },
  selector: "p[wx-media-box-desc]",
  template: `
    <ng-content></ng-content>
  `,
})
export class WxMediaBoxDescComponent { }

/**
 * WeUI 多媒体详情组件
 * @class WxMediaBoxInfoComponent
 */
@Component({
  host: {
    "class": "weui-media-box__info",
  },
  selector: "ul[wx-media-box-info]",
  template: `
    <ng-content select="[wx-media-box-info-meta]"></ng-content>
    <ng-content select="[wx-media-box-info-meta-extra]"></ng-content>
  `,
})
export class WxMediaBoxInfoComponent { }

/**
 * WeUI 多媒体详情 Meta 组件
 * @class WxMediaBoxInfoMetaComponent
 */
@Component({
  host: {
    "class": "weui-media-box__info__meta",
  },
  selector: "li[wx-media-box-info-meta]",
  template: `
    <ng-content></ng-content>
  `,
})
export class WxMediaBoxInfoMetaComponent { }

/**
 * WeUI 多媒体详情 Meta Extra 组件
 * @class WxMediaBoxInfoComponent
 */
@Component({
  host: {
    "class": "weui-media-box__info__meta weui-media-box__info__meta_extra",
  },
  selector: "li[wx-media-box-info-meta-extra]",
  template: `
    <ng-content></ng-content>
  `,
})
export class WxMediaBoxInfoMetaExtraComponent { }
