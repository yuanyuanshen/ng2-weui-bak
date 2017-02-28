import { Component } from "@angular/core";

@Component({
  selector: "gallery-demo",
  template: `
    <div class="page js_show">
      <div class="page__hd">
        <h1 class="page__title">Gallery</h1>
        <p class="page__desc">画廊，可实现上传图片的展示或幻灯片播放</p>
      </div>
      <div wx-button-area>
        <a wx-button label="显示画廊" (click)="show()"></a>
      </div>
      <div wx-gallery [(display)]="showFlag" image-url="./images/pic_article.png">
        <i wx-icon type="gallery-delete" style="cursor: pointer;" (click)="doDel()"></i>
        <i wx-icon type="download" style="cursor: pointer;" (click)="doDownload()"></i>
      </div>
    </div>
  `,
})
export class GalleryDemoComponent {
  private showFlag: boolean = false;
  public show(): void {
    this.showFlag = true;
  }
  public doDel(): void {
    alert("Delete it?");
  }
  public doDownload(): void {
    alert("Start download...");
  }
}
