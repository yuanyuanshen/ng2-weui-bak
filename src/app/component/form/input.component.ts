import { Component, Input, HostBinding, forwardRef, ElementRef, DoCheck } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

/**
 * @typedef {string} 输入组件类型枚举
 */
export type InputType = "text" | "password" | "color" | "date" | "datetime" | "datetime-local" | "email" | "month" | "number" | "range" | "search" | "tel" | "time" | "url" | "week";

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
@Component({
  host: {
    "class": "weui-cells weui-cells_radio",
  },
  providers: [{
    multi: true, provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => WxRadioComponent),
  }],
  selector: "div[wx-radio]",
  template: `
    <label *ngFor="let option of item.options" class="weui-cell weui-check__label" [attr.for]="option.id">
      <div class="weui-cell__bd">
        <p>{{option.label}}</p>
      </div>
      <div class="weui-cell__ft">
        <input type="radio" [(ngModel)]="value" class="weui-check" name="{{option.name}}" [value]="option.value" id="{{option.id}}">
        <span class="weui-icon-checked"></span>
      </div>
    </label>
  `,
})
export class WxRadioComponent implements ControlValueAccessor {
  @Input()
  private item: CheckItem;
  private innerValue: string = "";

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

/**
 * WeUI 多选组件
 * @class                WxCheckboxComponent
 * @property {CheckItem} WxCheckboxComponent.item - 输入参数: 控件初始化对象
 * @attribute {NgModel}                           - 输入输出变量: 绑定的对象变量
 */
@Component({
  host: {
    "class": "weui-cells weui-cells_checkbox",
  },
  providers: [{
    multi: true, provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => WxCheckboxComponent),
  }],
  selector: "div[wx-checkbox]",
  template: `
    <label *ngFor="let option of item.options" class="weui-cell weui-check__label" [attr.for]="option.id" (change)="doChange()">
      <div class="weui-cell__hd">
        <input type="checkbox" class="weui-check" name="{{item.name}}" [value]="option.value" id="{{option.id}}">
        <i class="weui-icon-checked"></i>
      </div>
      <div class="weui-cell__bd">
        <p>{{option.label}}</p>
      </div>
    </label>
    <input type="hidden" [(ngModel)]="value"/>
  `,
})
export class WxCheckboxComponent implements ControlValueAccessor, DoCheck {
  @Input()
  private item: CheckItem;
  private innerValue: string = "";

  constructor(
    private elementRef: ElementRef
  ) { }

  public ngDoCheck(): void {
    let checks = this.elementRef.nativeElement.getElementsByClassName("weui-check");
    let preChecks = this.value.split(",");
    for (let i = 0; i < checks.length; i ++) {
      preChecks.forEach(preCheck => {
        if (checks[i].value === preCheck) {
          checks[i].checked = true;
        }
      });
    }
  }

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

  private doChange(): void {
    let checks = this.elementRef.nativeElement.getElementsByClassName("weui-check");
    let swap: Array<string> = [];
    for (let i = 0; i < checks.length; i ++) {
      if (checks[i].checked) {
        swap.push(checks[i].value);
      }
    }
    this.value = swap.toString();
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

/**
 * WeUI 开关组件
 * @class                 WxSwitchComponent
 * @property {SwitchItem} WxSwitchComponent.item - 输入参数: 控件初始化对象
 * @attribute {NgModel}                          - 输入输出变量: 绑定的对象变量
 */
@Component({
  host: {
    "class": "weui-cell weui-cell_switch",
  },
  providers: [{
    multi: true, provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => WxSwitchComponent),
  }],
  selector: "div[wx-switch]",
  template: `
    <div class="weui-cell__bd">{{item.label}}</div>
    <div class="weui-cell__ft">
      <input class="weui-switch" [(ngModel)]="value" type="checkbox" name="{{item.name}}" [value]="item.value" id="{{item.id}}"/>
    </div>
  `,
})
export class WxSwitchComponent implements ControlValueAccessor {
  @Input()
  private item: SwitchItem;
  private innerValue: string = "";

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

/**
 * WeUI 输入组件
 * @class WxInputComponent
 * @property {InputType} WxInputComponent.type        - 输入参数: 组件类型
 * @property {string}    WxInputComponent.placeholder - 输入参数: 提示语
 * @attribute {NgModel}                               - 输入输出变量: 绑定的对象变量
 */
@Component({
  host: {
    "class": "weui-input",
  },
  selector: "input[wx-input]",
  template: ``,
})
export class WxInputComponent {
  @HostBinding("attr.type")
  @Input()
  private type: InputType;
  @HostBinding("attr.placeholder")
  @Input()
  private placeholder: string;
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
@Component({
  host: {
    "class": "weui-cells weui-cells_form",
  },
  providers: [{
    multi: true, provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => WxTextAreaComponent),
  }],
  selector: "div[wx-text-area]",
  template: `
    <div class="weui-cell" [ngClass]="{ 'weui-cell_warn': isWarn }">
      <div class="weui-cell__bd">
        <textarea class="weui-textarea" [(ngModel)]="value" placeholder="{{placeholder}}" rows="{{rows}}"></textarea>
        <div class="weui-textarea-counter">
          <span>{{currentCharCount}}</span>/{{maxCharCount}}
        </div>
      </div>
    </div>
  `,
})
export class WxTextAreaComponent implements ControlValueAccessor, DoCheck {
  @HostBinding("attr.name")
  @Input()
  private name: string;
  @HostBinding("attr.placeholder")
  @Input()
  private placeholder: string;
  @HostBinding("attr.rows")
  @Input()
  private rows: number;
  @Input()
  private maxCharCount: number;
  private currentCharCount: number;
  private innerValue: string = "";
  private isWarn: boolean = false;

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

  public ngDoCheck(): void {
    let valueLength = this.value ? this.value.length : 0;
    this.currentCharCount = valueLength;
    if (valueLength > this.maxCharCount) {
      this.isWarn = true;
    } else {
      this.isWarn = false;
    }
  }

  private onTouchedCallback: () => void = () => { };
  private onChangeCallback: (_: any) => void = () => { };

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

/**
 * WeUI 下拉框组件
 * @class WxSelectComponent
 * @property {string}              name    - 输入参数: 组件名称
 * @property {Array<SelectOption>} options - 输入参数: 控件初始化对象
 * @attribute {NgModel}                    - 输入输出变量: 绑定的对象变量
 */
@Component({
  host: {
    "class": "weui-select",
  },
  selector: "select[wx-select]",
  template: `
    <option *ngFor="let option of options" [value]="option.value">{{option.label}}</option>
  `,
})
export class WxSelectComponent {
  @HostBinding("attr.name")
  @Input()
  private name: string;
  @Input()
  private options: Array<SelectOption>;
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
@Component({
  host: {
    "class": "weui-agree",
  },
  providers: [{
    multi: true, provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => WxAgreeComponent),
  }],
  selector: "label[wx-agree]",
  template: `
    <input id="{{for}}" [(ngModel)]="value" type="checkbox" class="weui-agree__checkbox">
    <span class="weui-agree__text">
      {{declare}}<a style="cursor: pointer;" href="{{url}}" target="_blank">{{title}}</a>
    </span>
  `,
})
export class WxAgreeComponent implements ControlValueAccessor {
  @HostBinding("attr.for")
  @Input()
  private for: string;
  @Input()
  private declare: string;
  @Input()
  private title: string;
  @Input()
  private url: string;
  private innerValue: string = "";

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
