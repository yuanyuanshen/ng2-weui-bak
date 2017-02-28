import { ElementRef } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";
/**
 * WeUI 搜索栏组件
 * @class WxSearchbarComponent
 * @attribute {NgModel} - 输入输出变量: 绑定的对象变量
 */
export declare class WxSearchbarComponent implements ControlValueAccessor {
    private elementRef;
    private classes;
    private innerValue;
    constructor(elementRef: ElementRef);
    writeValue(val: string): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    private onTouchedCallback;
    private onChangeCallback;
    private touchLabel();
    private blurInput();
    private doClear();
    private doCancel();
    value: string;
}
