import { ElementRef, DoCheck } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";
/**
 * @typedef {string} 输入组件类型枚举
 */
export declare type InputType = "text" | "password" | "color" | "date" | "datetime" | "datetime-local" | "email" | "month" | "number" | "range" | "search" | "tel" | "time" | "url" | "week";
/**
 * Radio & Checkbox 配置文件定义对象
 * @interface                     CheckItem
 * @property {string}             CheckItem.name    - 选项名称
 * @property {Array<CheckOption>} CheckItem.options - 可选选项对象数组
 */
export interface CheckItem {
    name: string;
    options: Array<CheckOption>;
}
/**
 * Radio & Checkbox 选项定义对象
 * @interface          CheckOption
 * @property {string}  CheckOption.id    - 选项ID(DOM下须唯一)
 * @property {string}  CheckOption.label - 选项显示标签
 * @property {string}  CheckOption.value - 选项值
 */
export interface CheckOption {
    id: string;
    label: string;
    value: string;
}
/**
 * Switch 选项定义对象
 * @interface          SwitchItem
 * @property {string}  SwitchItem.id    - 选项ID(DOM下须唯一)
 * @property {string}  SwitchItem.name  - 选项名称
 * @property {string}  SwitchItem.label - 选项显示标签
 * @property {string}  SwitchItem.value - 选项值
 */
export interface SwitchItem {
    id: string;
    name: string;
    label: string;
    value: string;
}
/**
 * Select 选项定义对象
 * @interface          SelectOption
 * @property {string}  SelectOption.label - 选项显示标签
 * @property {string}  SelectOption.value - 选项值
 */
export interface SelectOption {
    label: string;
    value: string;
}
/**
 * WeUI 单选组件
 * @class                WxRadioComponent
 * @property {CheckItem} WxRadioComponent.item - 输入参数: 控件初始化对象
 * @attribute {NgModel}                        - 输入输出变量: 绑定的对象变量
 */
export declare class WxRadioComponent implements ControlValueAccessor {
    private item;
    private innerValue;
    writeValue(val: string): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    private onTouchedCallback;
    private onChangeCallback;
    value: string;
}
/**
 * WeUI 多选组件
 * @class                WxCheckboxComponent
 * @property {CheckItem} WxCheckboxComponent.item - 输入参数: 控件初始化对象
 * @attribute {NgModel}                           - 输入输出变量: 绑定的对象变量
 */
export declare class WxCheckboxComponent implements ControlValueAccessor, DoCheck {
    private elementRef;
    private item;
    private innerValue;
    constructor(elementRef: ElementRef);
    ngDoCheck(): void;
    writeValue(val: string): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    private onTouchedCallback;
    private onChangeCallback;
    private doChange();
    value: string;
}
/**
 * WeUI 开关组件
 * @class                 WxSwitchComponent
 * @property {SwitchItem} WxSwitchComponent.item - 输入参数: 控件初始化对象
 * @attribute {NgModel}                          - 输入输出变量: 绑定的对象变量
 */
export declare class WxSwitchComponent implements ControlValueAccessor {
    private item;
    private innerValue;
    writeValue(val: string): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    private onTouchedCallback;
    private onChangeCallback;
    value: string;
}
/**
 * WeUI 输入组件
 * @class WxInputComponent
 * @property {InputType} WxInputComponent.type        - 输入参数: 组件类型
 * @property {string}    WxInputComponent.placeholder - 输入参数: 提示语
 * @attribute {NgModel}                               - 输入输出变量: 绑定的对象变量
 */
export declare class WxInputComponent {
    private type;
    private placeholder;
}
/**
 * WeUI 文本域组件
 * @class WxTextAreaComponent
 * @property {string} WxTextAreaComponent.name         - 输入参数: 组件名称
 * @property {string} WxTextAreaComponent.placeholder  - 输入参数: 提示语
 * @property {number} WxTextAreaComponent.rows         - 输入参数: 行数
 * @property {number} WxTextAreaComponent.maxCharCount - 输入参数: 最大字数
 * @attribute {NgModel}                                - 输入输出变量: 绑定的对象变量
 */
export declare class WxTextAreaComponent implements ControlValueAccessor, DoCheck {
    private name;
    private placeholder;
    private rows;
    private maxCharCount;
    private currentCharCount;
    private innerValue;
    private isWarn;
    writeValue(val: string): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngDoCheck(): void;
    private onTouchedCallback;
    private onChangeCallback;
    value: string;
}
/**
 * WeUI 下拉框组件
 * @class WxSelectComponent
 * @property {string}              name    - 输入参数: 组件名称
 * @property {Array<SelectOption>} options - 输入参数: 控件初始化对象
 * @attribute {NgModel}                    - 输入输出变量: 绑定的对象变量
 */
export declare class WxSelectComponent {
    private name;
    private options;
}
/**
 * WeUI 协议同意组件
 * @class WxAgreeComponent
 * @property {string} WxAgreeComponent.for     - 输入参数: 组件ID
 * @property {string} WxAgreeComponent.declare - 输入参数: 声明词
 * @property {string} WxAgreeComponent.title   - 输入参数: 协议名称
 * @property {string} WxAgreeComponent.url     - 输入参数: 协议文本地址
 * @attribute {NgModel}                        - 输入输出变量: 绑定的对象变量
 */
export declare class WxAgreeComponent implements ControlValueAccessor {
    private for;
    private declare;
    private title;
    private url;
    private innerValue;
    writeValue(val: string): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    private onTouchedCallback;
    private onChangeCallback;
    value: string;
}
