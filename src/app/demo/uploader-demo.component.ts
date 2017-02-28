import { Component } from "@angular/core";
import { UploadItem } from "../component/form/uploader.component";

@Component({
  selector: "uploader-demo",
  template: `
    <div class="page js_show">
      <div class="page__hd">
        <h1 class="page__title">Uploader</h1>
        <p class="page__desc">上传组件，一般配合<a class="link" [routerLink]="['/gallery']">组件Gallery</a>来使用。</p>
      </div>
      <div class="page__bd">
        <div class="weui-cells weui-cells_form">
          <div class="weui-cell">
            <div class="weui-cell__bd">
              <div wx-uploader [items]="items" title="图片上传" [max-count]="3" (click-add)="showAdd($event)" (click-item)="showItem($event)"></div>
              <div wx-gallery [(display)]="showFlag" [image-url]="selectImageUrl">
                <i wx-icon type="gallery-delete" style="cursor: pointer;" (click)="doDel()"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="page__ft">
        <a style="cursor: pointer;" [routerLink]="['/']"><img src="./images/icon_footer_link.png"/></a>
      </div>
    </div>
  `,
})
export class UploaderDemoComponent {
  private showFlag: boolean = false;
  private selectImageUrl: string;
  private selectImageId: string;
  private items: Array<UploadItem> = [
    {
      imageId: "1",
      imageUrl: "./images/pic_160.png",
      showStatus: false,
    },
    {
      imageId: "2",
      imageUrl: "./images/pic_160.png",
      showStatus: true,
      statusIcon: "warn",
    },
    {
      imageId: "3",
      imageUrl: "./images/pic_160.png",
      showStatus: true,
      statusMessage: "50%",
    },
  ];

  private showAdd(event): void {
    alert("调用选择文件方法: " + JSON.stringify(event));
  }

  private showItem(event: UploadItem): void {
    this.selectImageUrl = event.imageUrl;
    this.selectImageId = event.imageId;
    this.showFlag = true;
  }

  private doDel(): void {
    this.items.forEach((item, index) => {
      if (item.imageId === this.selectImageId) {
        this.items.splice(index, 1);
      }
    });
    this.showFlag = false;
  }
}
