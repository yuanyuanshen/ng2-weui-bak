import { Component, Input, Output, DoCheck, EventEmitter } from "@angular/core";
import { IconType } from "../layout/icons.component";

/**
 * Upload 上传对象定义
 * @interface           UploadItem
 * @property {string}   UploadItem.imageId       - 图片ID
 * @property {string}   UploadItem.imageUrl      - 图片地址
 * @property {string}   UploadItem.showStatus    - 是否显示附加信息
 * @property {IconType} UploadItem.statusIcon    - 信息图标
 * @property {string}   UploadItem.statusMessage - 信息描述
 */
export interface UploadItem {
  imageId?: string;
  imageUrl: string;
  showStatus: boolean;
  statusIcon?: IconType;
  statusMessage?: string;
}

/**
 * Upload 对象点击事件定义
 * @interface          ClickAddAction
 * @property {boolean} ClickAddAction.click     - 是否点击
 * @property {number}  ClickAddAction.timestamp - 点击发生时刻UTC千分秒
 */
export interface ClickAddAction {
  click: boolean;
  timestamp: number;
}

/**
 * WeUI 上传组件
 * @class                                   WxUploaderComponent
 * @property {string}                       WxUploaderComponent.title      - 输入参数: 控件标题
 * @property {number}                       WxUploaderComponent.maxCount   - 输入参数: 最大上传个数
 * @property {Array<UploadItem>}            WxUploaderComponent.items      - 输入参数: 上传对象数组
 * @property {EventEmitter<ClickAddAction>} WxUploaderComponent.clickAdd   - 输入输出参数: 点击添加按钮调用事件
 * @property {EventEmitter<UploadItem>}     WxUploaderComponent.clickItem  - 输入输出参数: 点击已存在文件调用事件
 * @event                                   WxUploaderComponent#click-add
 * @event                                   WxUploaderComponent#click-item
 */
@Component({
  host: {
    "class": "weui-uploader",
  },
  selector: "div[wx-uploader]",
  template: `
    <div class="weui-uploader__hd">
      <p class="weui-uploader__title">{{title}}</p>
      <div class="weui-uploader__info">{{currentCount}}/{{maxCount}}</div>
    </div>
    <div class="weui-uploader__bd">
      <ul class="weui-uploader__files">
        <li class="weui-uploader__file" (click)="doSelect(item)" *ngFor="let item of items" [ngClass]="{ 'weui-uploader__file_status': item.showStatus }" [ngStyle]="{ 'background-image': 'url(' + item.imageUrl + ')' }">
          <div *ngIf="item.showStatus" class="weui-uploader__file-content">
            <i wx-icon *ngIf="item.statusIcon" [type]="item.statusIcon"></i>
            <p *ngIf="item.statusMessage">{{item.statusMessage}}</p>
          </div>
        </li>
      </ul>
      <div class="weui-uploader__input-box">
        <a class="weui-uploader__input" (click)="doAdd()"></a>
      </div>
    </div>
  `,
})
export class WxUploaderComponent implements DoCheck {
  @Input()
  private title: string;
  @Input("max-count")
  private maxCount: number;
  @Input()
  private items: Array<UploadItem>;
  @Output("click-add")
  private clickAdd: EventEmitter<ClickAddAction> = new EventEmitter();
  @Output("click-item")
  private clickItem: EventEmitter<UploadItem> = new EventEmitter();
  private currentCount: number;

  public ngDoCheck(): void {
    if (this.items) {
      this.currentCount = this.items.length;
    } else {
      this.currentCount = 0;
    }
  }

  private doAdd(): void {
    this.clickAdd.emit({
      "click": true,
      "timestamp": new Date().getUTCMilliseconds(),
    });
  }

  private doSelect(item: UploadItem): void {
    this.clickItem.emit(item);
  }
}
