import { Component, Input, HostBinding, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BadgeColorType } from "../layout/badge.component";

/**
 * WeUI 单元组组件
 * @class WxCellsComponent
 */
@Component({
  host: {
    "class": "weui-cells",
  },
  selector: "div[wx-cells]",
  template: `
    <ng-content></ng-content>
  `,
})
export class WxCellsComponent { }

/**
 * WeUI 表单组件
 * @class WxCellsFormComponent
 */
@Component({
  host: {
    "class": "weui-cells weui-cells_form",
  },
  selector: "div[wx-cells-form]",
  template: `
    <ng-content></ng-content>
  `,
})
export class WxCellsFormComponent { }

/**
 * WeUI 单元格组件
 * @class WxCellComponent
 */
@Component({
  host: {
    "class": "weui-cell",
  },
  selector: "div[wx-cell]",
  template: `
    <ng-content></ng-content>
  `,
})
export class WxCellComponent { }

/**
 * WeUI 单元格组件(警告)
 * @class WxCellWarnComponent
 */
@Component({
  host: {
    "class": "weui-cell weui-cell_warn",
  },
  selector: "div[wx-cell-warn]",
  template: `
    <ng-content></ng-content>
  `,
})
export class WxCellWarnComponent { }

/**
 * WeUI 单元格组件(验证码)
 * @class WxCellVcodeComponent
 */
@Component({
  host: {
    "class": "weui-cell weui-cell_vcode",
  },
  selector: "div[wx-cell-vcode]",
  template: `
    <ng-content></ng-content>
  `,
})
export class WxCellVcodeComponent { }

/**
 * WeUI 单元格 Header 组件
 * @class                     WxCellHeaderComponent
 * @property {string}         WxCellHeaderComponent.badgeLabel - 徽章内容
 * @property {BadgeColorType} WxCellHeaderComponent.badgeColor - 徽章背景色
 */
@Component({
  host: {
    "class": "weui-cell__hd",
  },
  selector: "div[wx-cell-header]",
  template: `
    <ng-content select="img"></ng-content>
    <span wx-badge *ngIf="badgeStyle === 'label'" [color]="badgeColor" style="position: absolute;top: -.4em;right: -.8em;">{{badgeLabel}}</span>
    <span wx-badge-dot *ngIf="badgeStyle === 'dot'" [color]="badgeColor" style="position: absolute;top: -.4em;right: -.8em;"></span>
  `,
})
export class WxCellHeaderComponent implements OnInit {
  @HostBinding("style.position")
  private stylePosition: string = "";
  @HostBinding("style.margin-right")
  private styleMaginRight: string = "";
  @HostBinding("style.background-color")
  private styleBgColor: string = "";
  @Input()
  private badgeLabel: string;
  @Input()
  private badgeColor: BadgeColorType;
  private hasBadge: boolean = false;
  private badgeStyle: "dot" | "label";

  public ngOnInit(): void {
    this.hasBadge = this.badgeLabel || this.badgeColor ? true : false;
    if (this.hasBadge) {
      this.stylePosition = "relative";
      this.styleMaginRight = "10px";
      if (this.badgeLabel && this.badgeLabel.trim().length > 0) {
        this.badgeStyle = "label";
      } else {
        this.badgeStyle = "dot";
      }
    }
  }
}

/**
 * WeUI 单元格 Body 组件
 * @class WxCellBodyComponent
 * @property {boolean} isPrimary - 是否位于Flex或Box布局的起始位置
 */
@Component({
  selector: "div[wx-cell-body]",
  template: `
    <ng-content></ng-content>
  `,
})
export class WxCellBodyComponent implements OnInit {
  @HostBinding("attr.class")
  private classes: string = "weui-cell__bd";
  @Input("is-primary")
  private isPrimary: boolean;

  public ngOnInit(): void {
    if (this.isPrimary) {
      this.classes += " weui-cell_primary";
    }
  }
}

/**
 * WeUI 单元格 Footer 组件
 * @class WxCellFooterComponent
 */
@Component({
  host: {
    "class": "weui-cell__ft",
  },
  selector: "div[wx-cell-footer]",
  template: `
    <ng-content></ng-content>
  `,
})
export class WxCellFooterComponent { }

/**
 * WeUI 单元格下拉框组件(独占)
 * @class WxCellSelectComponent
 */
@Component({
  host: {
    "class": "weui-cell weui-cell_select",
  },
  selector: "div[wx-cell-select]",
  template: `
    <div class="weui-cell__bd">
      <ng-content></ng-content>
    </div>
  `,
})
export class WxCellSelectComponent { }

/**
 * WeUI 单元格下拉框组件(水平摆放, 居前)
 * @class WxCellSelectBeforeComponent
 */
@Component({
  host: {
    "class": "weui-cell weui-cell_select weui-cell_select-before",
  },
  selector: "div[wx-cell-select-before]",
  template: `
    <div class="weui-cell__hd">
      <ng-content select="[wx-select]"></ng-content>
    </div>
    <div class="weui-cell__bd">
      <ng-content></ng-content>
    </div>
  `,
})
export class WxCellSelectBeforeComponent { }

/**
 * WeUI 单元格下拉框组件(水平摆放, 居后)
 * @class WxCellSelectAfterComponent
 */
@Component({
  host: {
    "class": "weui-cell weui-cell_select weui-cell_select-after",
  },
  selector: "div[wx-cell-select-after]",
  template: `
    <div class="weui-cell__hd">
      <ng-content></ng-content>
    </div>
    <div class="weui-cell__bd">
      <ng-content select="[wx-select]"></ng-content>
    </div>
  `,
})
export class WxCellSelectAfterComponent { }

/**
 * WeUI 单元格小提示组件
 * @class WxCellsTipsComponent
 * @property {string} WxCellsTipsComponent.tips - 输入参数: 提示信息
 */
@Component({
  host: {
    "class": "weui-cells__tips",
  },
  selector: "div[wx-cells-tips]",
  template: `
    {{tips}}
  `,
})
export class WxCellsTipsComponent {
  @Input()
  private tips: string;
}

/**
 * WeUI 标题组件
 * @class WxTitleComponent
 * @property {string} WxTitleComponent.title - 输入参数: 标题内容
 */
@Component({
  host: {
    "class": "weui-cells__title",
  },
  selector: "div[wx-cells-title]",
  template: `
    {{title}}
  `,
})
export class WxCellsTitleComponent {
  @Input()
  private title: string;
}

/**
 * WeUI 标签组件
 * @class WxLabelComponent
 * @property {string} WxLabelComponent.label - 输入参数: 标签内容
 */
@Component({
  host: {
    "class": "weui-label",
  },
  selector: "label[wx-label]",
  template: `
    {{label}}
  `,
})
export class WxLabelComponent {
  @Input()
  private label: string;
}

/**
 * WeUI 单元格超链接组件
 * @class                 WxCellLinkComponent
 * @property {string}     WxCellLinkComponent.label      - 输入参数: 显示标题
 * @property {Array<any>} WxCellLinkComponent.uri        - 输入参数: Router对象跳转参数数组
 * @property {string}     WxCellLinkComponent.uri        - 输入参数: URL地址字符串
 * @property {boolean}    WxCellLinkComponent.accessIcon - 输入参数: 是否显示小箭头
 */
@Component({
  host: {
    "style": "cursor: pointer;",
    "(click)": "doLink()",
  },
  selector: "a[wx-cell-link]",
  template: `
    <div class="weui-cell__bd">{{label}}</div>
    <div class="weui-cell__ft" *ngIf="accessIcon"></div>
  `,
})
export class WxCellLinkComponent implements OnInit {
  @HostBinding("attr.class")
  private classes: string = "weui-cell weui-cell_link";
  @Input()
  private label: string;
  @Input()
  private uri: Array<any> | string;
  @Input()
  private accessIcon: boolean;

  constructor(
    private router: Router,
  ) { }

  public ngOnInit(): void {
    if (this.accessIcon) {
      this.classes += " weui-cell_access";
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
 * WeUI 单元格跳转访问组件
 * @class                 WxCellAccessComponent
 * @property {Array<any>} WxCellAccessComponent.uri - 输入参数: Router对象跳转参数数组
 * @property {string}     WxCellAccessComponent.uri - 输入参数: URL地址字符串
 */
@Component({
  host: {
    "class": "weui-cell weui-cell_access",
    "style": "cursor: pointer;",
    "(click)": "doLink()",
  },
  selector: "a[wx-cell-access]",
  template: `
    <ng-content select="[wx-cell-header]"></ng-content>
    <ng-content select="[wx-cell-body]"></ng-content>
    <ng-content select="[wx-cell-footer]"></ng-content>
  `,
})
export class WxCellAccessComponent {
  @Input()
  private uri: Array<any> | string;

  constructor(
    private router: Router,
  ) { }

  private doLink(): void {
    if (this.uri instanceof Array) {
      this.router.navigate(this.uri);
    } else if (typeof this.uri === "string") {
      window.open(this.uri, "_blank");
    }
  }
}
