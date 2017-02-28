import { Component, Input, HostBinding, OnInit } from "@angular/core";

/**
 * @typedef {string} 徽章组件颜色类型枚举
 */
export type BadgeColorType = "red" | "green" | "blue" | "yellow";

/**
 * WeUI 徽章点组件
 * @class                     WxBadgeDotComponent
 * @property {BadgeColorType} WxBadgeDotComponent.color - 背景颜色
 */
@Component({
  host: {
    "class": "weui-badge weui-badge_dot",
    "style": "margin-left: 5px; margin-right: 5px;",
  },
  selector: "span[wx-badge-dot]",
  template: ``,
})
export class WxBadgeDotComponent implements OnInit {
  @HostBinding("style.background-color")
  private bgColor: string;
  @Input()
  private color: BadgeColorType;

  public ngOnInit(): void {
    if (!this.color || this.color === "red") {
      this.bgColor = "#e64340";
    } else if (this.color === "green") {
      this.bgColor = "#1aad19";
    } else if (this.color === "blue") {
      this.bgColor = "#3071a9";
    } else if (this.color === "yellow") {
      this.bgColor = "#ec971f";
    }
  }
}

/**
 * WeUI 徽章标签组件
 * @class                     WxBadgeComponent
 * @property {BadgeColorType} WxBadgeComponent.color - 背景颜色
 */
@Component({
  host: {
    "class": "weui-badge",
    "style": "margin-left: 5px; margin-right: 5px;",
  },
  selector: "span[wx-badge]",
  template: `
    <ng-content></ng-content>
  `,
})
export class WxBadgeComponent implements OnInit {
  @HostBinding("style.background-color")
  private bgColor: string;
  @Input()
  private color: BadgeColorType;

  public ngOnInit(): void {
    if (!this.color || this.color === "red") {
      this.bgColor = "#e64340";
    } else if (this.color === "green") {
      this.bgColor = "#1aad19";
    } else if (this.color === "blue") {
      this.bgColor = "#3071a9";
    } else if (this.color === "yellow") {
      this.bgColor = "#ec971f";
    }
  }
}
