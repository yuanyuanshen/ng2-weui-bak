import { Component, OnInit, Input, HostBinding } from "@angular/core";

/**
 * @typedef {string} 按钮组件颜色类型枚举
 */
export type ButtonColorType = "default" | "primary" | "warn";

/**
 * @typedef {string} 按钮组件样式类型枚举
 */
export type ButtonStyleType = "normal" | "plain" | "mini";

/**
 * WeUI 按钮组件
 * @class                         WxButtonComponent
 * @property {ButtonColorType}    WxButtonComponent.color    - 输入参数: 颜色类型
 * @property {ButtonStyleType}    WxButtonComponent.style    - 输入参数: 样式类型
 * @property {ButtonDisabledType} WxButtonComponent.disabled - 输入参数: 禁用状态
 * @property {string}             WxButtonComponent.label    - 输入参数: 标签
 */
@Component({
  host: {
    "style": "cursor: pointer;",
  },
  selector: "a[wx-button]",
  template: `
    {{label}}
  `,
})
export class WxButtonComponent implements OnInit {
  @HostBinding("attr.class")
  private classes: string = "weui-btn";
  @Input()
  private color: ButtonColorType;
  @Input()
  private style: ButtonStyleType;
  @Input()
  private disabled: boolean;
  @Input()
  private label: string;

  public ngOnInit(): void {
    // 设置默认值
    if (!this.color) {
      this.color = "primary";
    }
    if (!this.style) {
      this.style = "normal";
    }
    if (!this.disabled) {
      this.disabled = false;
    }
    if (!this.label) {
      this.label = "";
    }
    // 设置样式
    if (this.style === "normal" || this.style === "mini") {
      if (this.disabled) {
        this.classes += " weui-btn_disabled";
      }
      if (this.style === "mini") {
        this.classes += " weui-btn_mini";
      }
      if (this.color === "primary") {
        this.classes += " weui-btn_primary";
      } else if (this.color === "warn") {
        this.classes += " weui-btn_warn";
      } else if (this.color === "default") {
        this.classes += " weui-btn_default";
      }
    } else if (this.style === "plain") {
      if (this.disabled) {
        this.classes += " weui-btn_plain-disabled";
      }
      if (this.color === "primary") {
        this.classes += " weui-btn_plain-primary";
      } else if (this.color === "warn") {
        this.classes += " weui-btn_plain-warn";
      } else if (this.color === "default") {
        this.classes += " weui-btn_plain-default";
      }
    }
  }
}

/**
 * WeUI 获取验证码按钮
 * @class             WxButtonVcodeComponent
 * @property {string} WxButtonVcodeComponent.label - 输入参数: 标签
 */
@Component({
  host: {
    "class": "weui-vcode-btn",
    "style": "cursor: pointer",
  },
  selector: "a[wx-button-vcode]",
  template: `
    {{label}}
  `,
})
export class WxButtonVcodeComponent {
  @Input()
  private label: string;
}

/**
 * WeUI 按钮区域
 * @class WxButtonAreaComponent
 */
@Component({
  host: {
    "class": "weui-btn-area",
  },
  selector: "div[wx-button-area]",
  template: `
    <ng-content select="[wx-button]"></ng-content>
  `,
})
export class WxButtonAreaComponent { }
