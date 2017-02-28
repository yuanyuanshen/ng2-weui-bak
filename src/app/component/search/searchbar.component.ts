import { Component, ElementRef, HostBinding, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

/**
 * WeUI 搜索栏组件
 * @class WxSearchbarComponent
 * @attribute {NgModel} - 输入输出变量: 绑定的对象变量
 */
@Component({
  providers: [{
    multi: true, provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => WxSearchbarComponent),
  }],
  selector: "div[wx-searchbar]",
  template: `
    <div class="weui-search-bar__form">
      <div class="weui-search-bar__box" style="height: 26px;">
        <i class="weui-icon-search"></i>
        <input type="search" class="weui-search-bar__input" [(ngModel)]="value" (blur)="blurInput()" placeholder="搜索"/>
        <a style="cursor: pointer" class="weui-icon-clear" *ngIf="value" (click)="doClear()"></a>
      </div>
      <label class="weui-search-bar__label" (click)="touchLabel()">
        <i class="weui-icon-search"></i>
        <span>搜索</span>
      </label>
    </div>
    <a style="cursor: pointer" class="weui-search-bar__cancel-btn" (click)="doCancel()">取消</a>
  `,
})
export class WxSearchbarComponent implements ControlValueAccessor {
  @HostBinding("attr.class")
  private classes: string = "weui-search-bar";
  private innerValue: string = "";

  constructor(
    private elementRef: ElementRef
  ) { }

  public writeValue(val: string): void {
    if (val !== this.innerValue) {
      this.innerValue = val;
    }
  }

  public registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  private onTouchedCallback: () => void = () => { };
  private onChangeCallback: (_: any) => void = () => { };

  private touchLabel(): void {
    this.classes = "weui-search-bar weui-search-bar_focusing";
    this.elementRef.nativeElement.getElementsByClassName("weui-search-bar__input")[0].focus();
  }

  private blurInput(): void {
    if (this.value && this.value.length > 0) {
      this.classes = "weui-search-bar weui-search-bar_focusing";
    } else {
      this.classes = "weui-search-bar";
    }
  }

  private doClear(): void {
    this.value = undefined;
    this.elementRef.nativeElement.getElementsByClassName("weui-search-bar__input")[0].focus();
  }

  private doCancel(): void {
    this.value = undefined;
    this.classes = "weui-search-bar";
  }

  get value(): string {
    return this.innerValue;
  };

  set value(val: string) {
    if (val !== this.innerValue) {
      this.innerValue = val;
      this.onChangeCallback(val);
    }
  }
}
