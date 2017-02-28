import { Component, Input, OnInit, HostBinding } from "@angular/core";

/**
 * @typedef {string} 图标组件类型枚举
 */
export type IconType = "success" | "success-circle" | "success-no-circle" | "circle" | "warn" | "warn-normal" | "download" | "waiting" | "waiting-circle" | "info" | "info-circle" | "cancel" | "search" | "clear" | "delete" | "gallery-delete" | "loading";

/**
 * @typedef {string} 图标组件尺寸枚举
 */
export type IconSize = "large" | "small";

/**
 * WeUI 图标组件
 * @class               WxIconComponent
 * @property {IconType} WxIconComponent.type    - 输入参数: 类型
 * @property {IconSize} WxIconComponent.size    - 输入参数: 大小
 */
@Component({
  selector: "i[wx-icon]",
  template: ``,
})
export class WxIconComponent implements OnInit {
  @HostBinding("attr.class")
  private classes: string = "";
  @Input()
  private type: IconType = "success";
  @Input()
  private size: IconSize = "small";
  @Input("for-toast")
  private forToast: boolean = false;

  public ngOnInit(): void {
    // 设定样式
    if (this.type === "success") {
      this.classes += " weui-icon-success";
    } else if (this.type === "success-circle") {
      this.classes += " weui-icon-success-circle";
    } else if (this.type === "success-no-circle") {
      this.classes += " weui-icon-success-no-circle";
    } else if (this.type === "circle") {
      this.classes += " weui-icon-circle";
    } else if (this.type === "warn") {
      this.classes += " weui-icon-warn";
    } else if (this.type === "warn-normal") {
      this.classes += " weui-icon-warn weui-icon_msg-primary";
    } else if (this.type === "download") {
      this.classes += " weui-icon-download";
    } else if (this.type === "info") {
      this.classes += " weui-icon-info";
    } else if (this.type === "info-circle") {
      this.classes += " weui-icon-info-circle";
    } else if (this.type === "cancel") {
      this.classes += " weui-icon-cancel";
    } else if (this.type === "search") {
      this.classes += " weui-icon-search";
    } else if (this.type === "clear") {
      this.classes += " weui-icon-clear";
    } else if (this.type === "delete") {
      this.classes += " weui-icon-delete";
    } else if (this.type === "gallery-delete") {
      this.classes += " weui-icon-delete weui-icon_gallery-delete";
    } else if (this.type === "waiting") {
      this.classes += " weui-icon-waiting";
    } else if (this.type === "waiting-circle") {
      this.classes += " weui-icon-waiting-circle";
    } else if (this.type === "loading") {
      this.classes += " weui-loading";
    }
    // 设定大小
    // 以下三类图标没有size属性, size属性无效
    if (this.type !== "warn-normal" && this.type !== "gallery-delete" && this.type !== "loading") {
      if (this.size === "large") {
        this.classes += " weui-icon_msg";
      } else if (this.size === "small") {
        this.classes += "";
      }
    }
    // 设定是否用于面包框消息
    if (this.forToast) {
      this.classes += " weui-icon_toast";
    }
    // 整理样式
    this.classes = this.classes.trim();
  }
}
