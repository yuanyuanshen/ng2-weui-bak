import { Component, Input, Output, HostBinding, EventEmitter, OnChanges } from "@angular/core";

/**
 * Actionsheet 选项定义对象
 * @interface         ActionsheetItem
 * @property {string} ActionsheetItem.label - 标签
 * @property {string} ActionsheetItem.value - 选项值
 */
export interface ActionsheetItem {
  label: string;
  value: string;
}

/**
 * WeUI 弹出菜单组件(IOS样式)
 * @class                                    WxActionsheetIOSComponent
 * @property {Array<ActionsheetItem>}        WxActionsheetIOSComponent.menus    - 输入参数: 选项定义对象数组
 * @property {boolean}                       WxActionsheetIOSComponent.display  - 输入输出参数: 是否显示
 * @property {EventEmitter<ActionsheetItem>} WxActionsheetIOSComponent.doCheck  - 输出参数: 确认选择
 * @event                                    WxActionsheetIOSComponent#display
 * @event                                    WxActionsheetIOSComponent#do-check
 */
@Component({
  selector: "div[wx-actionsheet-ios]",
  template: `
    <div class="weui-mask" (click)="doCancel()" [ngStyle]="{ 'display': display === true ? 'block' : 'none' }"></div>
    <div class="weui-actionsheet" [ngClass]="{ 'weui-actionsheet_toggle': display }">
      <div class="weui-actionsheet__menu">
        <div *ngFor="let menu of menus" class="weui-actionsheet__cell" (click)="doSelect(menu)">{{menu.label}}</div>
      </div>
      <div class="weui-actionsheet__action">
        <div class="weui-actionsheet__cell" (click)="doCancel()">取消</div>
      </div>
    </div>
  `,
})
export class WxActionsheetIOSComponent {
  @Input()
  private display: boolean = false;
  @Output()
  private displayChange: EventEmitter<boolean> = new EventEmitter();
  @Input()
  private menus: Array<ActionsheetItem>;
  @Output("do-check")
  private doCheck: EventEmitter<ActionsheetItem> = new EventEmitter();

  private doSelect(menu: ActionsheetItem): void {
    this.doCheck.emit(menu);
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
 * WeUI 弹出菜单组件(Android样式)
 * @class                                    WxActionsheetAndroidComponent
 * @property {Array<ActionsheetItem>}        WxActionsheetAndroidComponent.menus    - 输入参数: 选项定义对象数组
 * @property {boolean}                       WxActionsheetAndroidComponent.display  - 输入输出参数: 是否显示
 * @property {EventEmitter<ActionsheetItem>} WxActionsheetAndroidComponent.doCheck  - 输出参数: 确认选择
 * @event                                    WxActionsheetAndroidComponent#display
 * @event                                    WxActionsheetAndroidComponent#do-check
 */
@Component({
  host: {
    "class": "weui-skin_android",
  },
  selector: "div[wx-actionsheet-android]",
  template: `
    <div class="weui-mask" (click)="doCancel()"></div>
    <div class="weui-actionsheet">
      <div class="weui-actionsheet__menu">
        <div *ngFor="let menu of menus" class="weui-actionsheet__cell" (click)="doSelect(menu)">{{menu.label}}</div>
      </div>
    </div>
  `,
})
export class WxActionsheetAndroidComponent implements OnChanges {
  @HostBinding("style.display")
  private styles: string = "none";
  @Input()
  private display: boolean = false;
  @Output()
  private displayChange: EventEmitter<boolean> = new EventEmitter();
  @Input()
  private menus: Array<ActionsheetItem>;
  @Output("do-check")
  private doCheck: EventEmitter<ActionsheetItem> = new EventEmitter();

  public ngOnChanges(): void {
    if (this.display) {
      this.styles = "block";
    } else {
      this.styles = "none";
    }
  }

  private doSelect(menu: ActionsheetItem): void {
    this.doCheck.emit(menu);
    this.display = false;
    this.displayChange.emit(this.display);
  }

  private doCancel(): void {
    this.doCheck.emit(null);
    this.display = false;
    this.displayChange.emit(this.display);
  }
}
