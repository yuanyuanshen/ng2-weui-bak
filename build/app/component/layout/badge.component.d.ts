import { OnInit } from "@angular/core";
/**
 * @typedef {string} 徽章组件颜色类型枚举
 */
export declare type BadgeColorType = "red" | "green" | "blue" | "yellow";
/**
 * WeUI 徽章点组件
 * @class                     WxBadgeDotComponent
 * @property {BadgeColorType} WxBadgeDotComponent.color - 背景颜色
 */
export declare class WxBadgeDotComponent implements OnInit {
    private bgColor;
    private color;
    ngOnInit(): void;
}
/**
 * WeUI 徽章标签组件
 * @class                     WxBadgeComponent
 * @property {BadgeColorType} WxBadgeComponent.color - 背景颜色
 */
export declare class WxBadgeComponent implements OnInit {
    private bgColor;
    private color;
    ngOnInit(): void;
}
