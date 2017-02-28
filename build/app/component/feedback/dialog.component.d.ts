import { OnChanges } from "@angular/core";
/**
 * @typedef {string} Dialog选项样式类型枚举, "default"或"primary"
 */
export declare type DialogOptionStyle = "default" | "primary";
/**
 * Dialog 选项定义
 * @property {string}            DialogOption.label 键值
 * @property {string}            DialogOption.value 显示值
 * @property {DialogOptionStyle} DialogOption.style 选项样式
 */
export interface DialogOption {
    label: string;
    value: string;
    style: DialogOptionStyle;
}
/**
 * WeUI 消息对话框组件(IOS样式)
 * @class                                 WxDialogIOSComponent
 * @property {Array<DialogOption>}        WxDialogIOSComponent.options  - 输入参数: 选项定义对象数组
 * @property {string}                     WxDialogIOSComponent.title    - 输入参数: 标题
 * @property {string}                     WxDialogIOSComponent.content  - 输入参数: 内容
 * @property {boolean}                    WxDialogIOSComponent.display  - 输入输出参数: 是否显示
 * @property {boolean}                    WxDialogIOSComponent.isModel  - 输入参数: 是否模式窗体
 * @property {EventEmitter<DialogOption>} WxDialogIOSComponent.doCheck  - 输出参数: 确认选择
 * @event                                 WxDialogIOSComponent#display
 * @event                                 WxDialogIOSComponent#do-check
 */
export declare class WxDialogIOSComponent implements OnChanges {
    private styles;
    private isModel;
    private display;
    private displayChange;
    private title;
    private content;
    private options;
    private doCheck;
    ngOnChanges(): void;
    private doSelect(option);
    private doCancel();
}
/**
 * WeUI 消息对话框组件(Android样式)
 * @class                                 WxDialogAndroidComponent
 * @property {Array<DialogOption>}        WxDialogAndroidComponent.options  - 输入参数: 选项定义对象数组
 * @property {string}                     WxDialogAndroidComponent.title    - 输入参数: 标题
 * @property {string}                     WxDialogAndroidComponent.content  - 输入参数: 内容
 * @property {boolean}                    WxDialogAndroidComponent.display  - 输入输出参数: 是否显示
 * @property {boolean}                    WxDialogAndroidComponent.isModel  - 输入参数: 是否模式窗体
 * @property {EventEmitter<DialogOption>} WxDialogAndroidComponent.doCheck  - 输出参数: 确认选择
 * @event                                 WxDialogAndroidComponent#display
 * @event                                 WxDialogAndroidComponent#do-check
 */
export declare class WxDialogAndroidComponent {
    private styles;
    private isModel;
    private display;
    private displayChange;
    private title;
    private content;
    private options;
    private doCheck;
    ngOnChanges(): void;
    private doSelect(option);
    private doCancel();
}
