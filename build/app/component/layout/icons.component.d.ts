import { OnInit } from "@angular/core";
/**
 * @typedef {string} 图标组件类型枚举
 */
export declare type IconType = "success" | "success-circle" | "success-no-circle" | "circle" | "warn" | "warn-normal" | "download" | "waiting" | "waiting-circle" | "info" | "info-circle" | "cancel" | "search" | "clear" | "delete" | "gallery-delete" | "loading";
/**
 * @typedef {string} 图标组件尺寸枚举
 */
export declare type IconSize = "large" | "small";
/**
 * WeUI 图标组件
 * @class               WxIconComponent
 * @property {IconType} WxIconComponent.type    - 输入参数: 类型
 * @property {IconSize} WxIconComponent.size    - 输入参数: 大小
 */
export declare class WxIconComponent implements OnInit {
    private classes;
    private type;
    private size;
    private forToast;
    ngOnInit(): void;
}
