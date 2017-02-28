import { OnChanges } from "@angular/core";
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
export declare class WxActionsheetIOSComponent {
    private display;
    private displayChange;
    private menus;
    private doCheck;
    private doSelect(menu);
    private doCancel();
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
export declare class WxActionsheetAndroidComponent implements OnChanges {
    private styles;
    private display;
    private displayChange;
    private menus;
    private doCheck;
    ngOnChanges(): void;
    private doSelect(menu);
    private doCancel();
}
