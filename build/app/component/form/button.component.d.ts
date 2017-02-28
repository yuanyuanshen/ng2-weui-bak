import { OnInit } from "@angular/core";
/**
 * @typedef {string} 按钮组件颜色类型枚举
 */
export declare type ButtonColorType = "default" | "primary" | "warn";
/**
 * @typedef {string} 按钮组件样式类型枚举
 */
export declare type ButtonStyleType = "normal" | "plain" | "mini";
/**
 * WeUI 按钮组件
 * @class                         WxButtonComponent
 * @property {ButtonColorType}    WxButtonComponent.color    - 输入参数: 颜色类型
 * @property {ButtonStyleType}    WxButtonComponent.style    - 输入参数: 样式类型
 * @property {ButtonDisabledType} WxButtonComponent.disabled - 输入参数: 禁用状态
 * @property {string}             WxButtonComponent.label    - 输入参数: 标签
 */
export declare class WxButtonComponent implements OnInit {
    private classes;
    private color;
    private style;
    private disabled;
    private label;
    ngOnInit(): void;
}
/**
 * WeUI 获取验证码按钮
 * @class             WxButtonVcodeComponent
 * @property {string} WxButtonVcodeComponent.label - 输入参数: 标签
 */
export declare class WxButtonVcodeComponent {
    private label;
}
/**
 * WeUI 按钮区域
 * @class WxButtonAreaComponent
 */
export declare class WxButtonAreaComponent {
}
