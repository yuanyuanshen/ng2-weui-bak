import { Component, Input, Output, HostBinding, EventEmitter, OnChanges } from "@angular/core";

/**
 * @typedef {string} Dialog选项样式类型枚举, "default"或"primary"
 */
export type DialogOptionStyle = "default" | "primary";

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
@Component({
  selector: "div[wx-dialog-ios]",
  template: `
    <div *ngIf="!isModel" class="weui-mask" (click)="doCancel()"></div>
    <div *ngIf="isModel" class="weui-mask"></div>
    <div class="weui-dialog">
      <div *ngIf="title" class="weui-dialog__hd">
        <strong class="weui-dialog__title">{{title}}</strong>
      </div>
      <div *ngIf="content" class="weui-dialog__bd">{{content}}</div>
      <div *ngIf="options" class="weui-dialog__ft">
        <a *ngFor="let option of options" style="cursor: pointer;" class="weui-dialog__btn"
          [ngClass]="{ 'weui-dialog__btn_default': option.style === 'default', 'weui-dialog__btn_primary': option.style === 'primary' }"
          (click)="doSelect(option)">{{option.label}}</a>
      </div>
    </div>
  `,
})
export class WxDialogIOSComponent implements OnChanges {
  @HostBinding("style.display")
  private styles: string = "none";
  @Input("is-model")
  private isModel: boolean = true;
  @Input()
  private display: boolean = false;
  @Output()
  private displayChange: EventEmitter<boolean> = new EventEmitter();
  @Input()
  private title: string;
  @Input()
  private content: string;
  @Input()
  private options: Array<DialogOption>;
  @Output("do-check")
  private doCheck: EventEmitter<DialogOption> = new EventEmitter();

  public ngOnChanges(): void {
    if (this.display) {
      this.styles = "block";
    } else {
      this.styles = "none";
    }
  }

  private doSelect(option: DialogOption): void {
    this.doCheck.emit(option);
    this.display = false;
    this.displayChange.emit(this.display);
  }

  private doCancel(): void {
    this.doCheck.emit(null);
    this.display = false;
    this.displayChange.emit(this.display);
  }
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
@Component({
  selector: "div[wx-dialog-android]",
  template: `
    <div *ngIf="!isModel" class="weui-mask" (click)="doCancel()"></div>
    <div *ngIf="isModel" class="weui-mask"></div>
    <div class="weui-dialog weui-skin_android">
      <div *ngIf="title" class="weui-dialog__hd">
        <strong class="weui-dialog__title">{{title}}</strong>
      </div>
      <div *ngIf="content" class="weui-dialog__bd">{{content}}</div>
      <div *ngIf="options" class="weui-dialog__ft">
        <a *ngFor="let option of options" style="cursor: pointer;" class="weui-dialog__btn"
          [ngClass]="{ 'weui-dialog__btn_default': option.style === 'default', 'weui-dialog__btn_primary': option.style === 'primary' }"
          (click)="doSelect(option)">{{option.label}}</a>
      </div>
    </div>
  `,
})
export class WxDialogAndroidComponent {
  @HostBinding("style.display")
  private styles: string = "none";
  @Input("is-model")
  private isModel: boolean = true;
  @Input()
  private display: boolean = false;
  @Output()
  private displayChange: EventEmitter<boolean> = new EventEmitter();
  @Input()
  private title: string;
  @Input()
  private content: string;
  @Input()
  private options: Array<DialogOption>;
  @Output("do-check")
  private doCheck: EventEmitter<DialogOption> = new EventEmitter();

  public ngOnChanges(): void {
    if (this.display) {
      this.styles = "block";
    } else {
      this.styles = "none";
    }
  }

  private doSelect(option: DialogOption): void {
    this.doCheck.emit(option);
    this.display = false;
    this.displayChange.emit(this.display);
  }

  private doCancel(): void {
    this.doCheck.emit(null);
    this.display = false;
    this.displayChange.emit(this.display);
  }
}
