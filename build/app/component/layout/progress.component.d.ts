import { OnChanges } from "@angular/core";
/**
 * WeUI 进度条组件
 * @class WxProgressComponent
 */
export declare class WxProgressComponent {
}
/**
 * WeUI 进度条显示组件
 * @class             WxProgressBarComponent
 * @property {number} WxProgressBarComponent.max   - 输入参数: 最大值
 * @property {number} WxProgressBarComponent.value - 输入参数: 当前值
 */
export declare class WxProgressBarComponent implements OnChanges {
    private max;
    private value;
    private pax;
    ngOnChanges(): void;
}
/**
 * WeUI 进度条操作组件
 * @class WxProgressOperateComponent
 */
export declare class WxProgressOperateComponent {
}
