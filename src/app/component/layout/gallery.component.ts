import { Component, Input, Output, HostBinding, OnChanges, EventEmitter } from "@angular/core";

/**
 * WeUI 画廊组件
 * @class                            WxGalleryComponent
 * @property {string}                WxGalleryComponent.imageUrl - 输入参数: 图片URL
 * @property {boolean}               WxGalleryComponent.display  - 输入参数: 是否显示
 * @event                            WxGalleryComponent#display
 */
@Component({
  host: {
    "class": "weui-gallery",
  },
  selector: "div[wx-gallery]",
  template: `
    <span class="weui-gallery__img" [ngStyle]="{ 'background-image': 'url(' + imageUrl + ')' }" (click)="doCancel()"></span>
    <div class="weui-gallery__opr">
      <ng-content select="[wx-icon]"></ng-content>
    </div>
  `,
})
export class WxGalleryComponent implements OnChanges {
  @HostBinding("style.display")
  private styles: string = "none";
  @Input("image-url")
  private imageUrl: string;
  @Input()
  private display: boolean = false;
  @Output()
  private displayChange: EventEmitter<boolean> = new EventEmitter();

  public ngOnChanges(): void {
    if (this.display) {
      this.styles = "block";
    } else {
      this.styles = "none";
    }
  }

  private doCancel(): void {
    this.display = false;
    this.displayChange.emit(this.display);
  }
}
