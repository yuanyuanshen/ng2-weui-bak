import { OnInit } from "@angular/core";
import { Router } from "@angular/router";
/**
 * WeUI 单元组组件
 * @class WxCellsComponent
 */
export declare class WxCellsComponent {
}
/**
 * WeUI 表单组件
 * @class WxCellsFormComponent
 */
export declare class WxCellsFormComponent {
}
/**
 * WeUI 单元格组件
 * @class WxCellComponent
 */
export declare class WxCellComponent {
}
/**
 * WeUI 单元格组件(警告)
 * @class WxCellWarnComponent
 */
export declare class WxCellWarnComponent {
}
/**
 * WeUI 单元格组件(验证码)
 * @class WxCellVcodeComponent
 */
export declare class WxCellVcodeComponent {
}
/**
 * WeUI 单元格 Header 组件
 * @class                     WxCellHeaderComponent
 * @property {string}         WxCellHeaderComponent.badgeLabel - 徽章内容
 * @property {BadgeColorType} WxCellHeaderComponent.badgeColor - 徽章背景色
 */
export declare class WxCellHeaderComponent implements OnInit {
    private stylePosition;
    private styleMaginRight;
    private styleBgColor;
    private badgeLabel;
    private badgeColor;
    private hasBadge;
    private badgeStyle;
    ngOnInit(): void;
}
/**
 * WeUI 单元格 Body 组件
 * @class WxCellBodyComponent
 * @property {boolean} isPrimary - 是否位于Flex或Box布局的起始位置
 */
export declare class WxCellBodyComponent implements OnInit {
    private classes;
    private isPrimary;
    ngOnInit(): void;
}
/**
 * WeUI 单元格 Footer 组件
 * @class WxCellFooterComponent
 */
export declare class WxCellFooterComponent {
}
/**
 * WeUI 单元格下拉框组件(独占)
 * @class WxCellSelectComponent
 */
export declare class WxCellSelectComponent {
}
/**
 * WeUI 单元格下拉框组件(水平摆放, 居前)
 * @class WxCellSelectBeforeComponent
 */
export declare class WxCellSelectBeforeComponent {
}
/**
 * WeUI 单元格下拉框组件(水平摆放, 居后)
 * @class WxCellSelectAfterComponent
 */
export declare class WxCellSelectAfterComponent {
}
/**
 * WeUI 单元格小提示组件
 * @class WxCellsTipsComponent
 * @property {string} WxCellsTipsComponent.tips - 输入参数: 提示信息
 */
export declare class WxCellsTipsComponent {
    private tips;
}
/**
 * WeUI 标题组件
 * @class WxTitleComponent
 * @property {string} WxTitleComponent.title - 输入参数: 标题内容
 */
export declare class WxCellsTitleComponent {
    private title;
}
/**
 * WeUI 标签组件
 * @class WxLabelComponent
 * @property {string} WxLabelComponent.label - 输入参数: 标签内容
 */
export declare class WxLabelComponent {
    private label;
}
/**
 * WeUI 单元格超链接组件
 * @class                 WxCellLinkComponent
 * @property {string}     WxCellLinkComponent.label      - 输入参数: 显示标题
 * @property {Array<any>} WxCellLinkComponent.uri        - 输入参数: Router对象跳转参数数组
 * @property {string}     WxCellLinkComponent.uri        - 输入参数: URL地址字符串
 * @property {boolean}    WxCellLinkComponent.accessIcon - 输入参数: 是否显示小箭头
 */
export declare class WxCellLinkComponent implements OnInit {
    private router;
    private classes;
    private label;
    private uri;
    private accessIcon;
    constructor(router: Router);
    ngOnInit(): void;
    private doLink();
}
/**
 * WeUI 单元格跳转访问组件
 * @class                 WxCellAccessComponent
 * @property {Array<any>} WxCellAccessComponent.uri - 输入参数: Router对象跳转参数数组
 * @property {string}     WxCellAccessComponent.uri - 输入参数: URL地址字符串
 */
export declare class WxCellAccessComponent {
    private router;
    private uri;
    constructor(router: Router);
    private doLink();
}
