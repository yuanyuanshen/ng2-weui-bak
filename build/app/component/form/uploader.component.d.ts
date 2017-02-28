import { DoCheck } from "@angular/core";
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
export declare class WxUploaderComponent implements DoCheck {
    private title;
    private maxCount;
    private items;
    private clickAdd;
    private clickItem;
    private currentCount;
    ngDoCheck(): void;
    private doAdd();
    private doSelect(item);
}
