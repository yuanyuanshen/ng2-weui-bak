import { OnInit } from "@angular/core";
export declare type ButtonType = "primary" | "default";
/**
 * WeUI 表单预览组件
 * @class WxPreviewComponent
 */
export declare class WxPreviewComponent {
}
/**
 * WeUI 表单预览 Header 组件
 * @class WxPreviewHeaderComponent
 */
export declare class WxPreviewHeaderComponent {
}
/**
 * WeUI 表单预览 Body 组件
 * @class WxPreviewBodyComponent
 */
export declare class WxPreviewBodyComponent {
}
/**
 * WeUI 表单预览 Footer 组件
 * @class WxPreviewFooterComponent
 */
export declare class WxPreviewFooterComponent {
}
/**
 * WeUI 表单预览成员组件
 * @class WxPreviewItemComponent
 */
export declare class WxPreviewItemComponent {
}
/**
 * WeUI 表单预览标签组件
 * @class             WxPreviewLabelComponent
 * @property {string} WxPreviewLabelComponent.label - 输入参数: 标签内容
 */
export declare class WxPreviewLabelComponent {
    private label;
}
/**
 * WeUI 表单预览值组件
 * @class             WxPreviewValueComponent
 * @property {string} WxPreviewValueComponent.value - 输入参数: 显示值
 */
export declare class WxPreviewValueComponent {
    private value;
}
/**
 * WeUI 表单预览值组件
 * @class             WxPreviewValueStressComponent
 * @property {string} WxPreviewValueStressComponent.value - 输入参数: 显示值
 */
export declare class WxPreviewValueStressComponent {
    private value;
}
/**
 * WeUI 表单预览按钮组件
 * @class                 WxPreviewButtonComponent
 * @property {string}     WxPreviewButtonComponent.label - 输入参数: 标签
 * @property {ButtonType} WxPreviewButtonComponent.type  - 输入参数: 类型
 */
export declare class WxPreviewButtonComponent implements OnInit {
    private classes;
    private label;
    private type;
    ngOnInit(): void;
}
