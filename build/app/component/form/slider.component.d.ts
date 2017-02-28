import { OnChanges } from "@angular/core";
/**
 * WeUI 滑块容器组件
 * @class WxSliderBoxComponent
 */
export declare class WxSliderBoxComponent {
}
/**
 * WeUI 滑块值标签组件
 * @class WxSliderBoxValueComponent
 */
export declare class WxSliderBoxValueComponent {
}
/**
 * WeUI 滑块组件
 * @class             WxSliderComponent
 * @property {number} WxSliderComponent.max   - 输入参数: 最大值
 * @property {number} WxSliderComponent.value - 输入输出参数: 当前值
 */
export declare class WxSliderComponent implements OnChanges {
    private max;
    private value;
    private valueChange;
    private pax;
    private startX;
    private startLeft;
    ngOnChanges(): void;
    doMove(event: any): void;
    doStart(event: any): void;
}
