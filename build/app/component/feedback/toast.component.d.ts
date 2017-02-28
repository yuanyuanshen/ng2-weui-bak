import { OnChanges } from "@angular/core";
/**
 * WeUI 面包框组件
 * @class                            WxToastMsgComponent
 * @property {string}                WxToastMsgComponent.message     - 输入参数: 消息内容
 * @property {number}                WxToastMsgComponent.showSeconds - 输入参数: 持续时长(秒)
 * @property {boolean}               WxToastMsgComponent.display     - 输入输出参数: 是否显示
 * @event                            WxToastMsgComponent#display
 */
export declare class WxToastComponent implements OnChanges {
    private styles;
    private message;
    private showSeconds;
    private display;
    private displayChange;
    ngOnChanges(): void;
}
