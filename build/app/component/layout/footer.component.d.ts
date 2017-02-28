import { OnInit } from "@angular/core";
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
export declare class WxFooterComponent implements OnInit {
    private router;
    private classes;
    private fixBottom;
    private links;
    private tips;
    constructor(router: Router);
    ngOnInit(): void;
    private doLink(uri);
}
