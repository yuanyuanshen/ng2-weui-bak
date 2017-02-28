import { OnChanges } from "@angular/core";
/**
 * WeUI 画廊组件
 * @class                            WxGalleryComponent
 * @property {string}                WxGalleryComponent.imageUrl - 输入参数: 图片URL
 * @property {boolean}               WxGalleryComponent.display  - 输入参数: 是否显示
 * @event                            WxGalleryComponent#display
 */
export declare class WxGalleryComponent implements OnChanges {
    private styles;
    private imageUrl;
    private display;
    private displayChange;
    ngOnChanges(): void;
    private doCancel();
}
