import { Component } from "@angular/core";

@Component({
  selector: "toast-demo",
  template: `
    <div class="page toast js_show">
      <div class="page__hd">
        <h1 class="page__title">Toast</h1>
        <p class="page__desc">弹出式提示</p>
      </div>
      <div class="page__bd page__bd_spacing">
        <a wx-button color="default" (click)="showSuccess()" label="成功提示"></a>
        <a wx-button color="default" (click)="showLoading()" label="加载中提示"></a>
      </div>
      <div class="page__ft">
        <a style="cursor: pointer;" [routerLink]="['/']"><img src="./images/icon_footer_link.png"/></a>
      </div>

      <!--BEGIN toast-->
      <div wx-toast message="已完成" [show-seconds]="1" [(display)]="show1">
        <i wx-icon type="success-no-circle" [for-toast]="true"></i>
      </div>
      <!--end toast-->

      <!-- loading toast -->
      <div wx-toast message="数据加载中" [(display)]="show2">
        <i wx-icon type="loading" [for-toast]="true"></i>
      </div>
    </div>
  `,
})
export class ToastDemoComponent {
  private show1: boolean = false;
  private show2: boolean = false;

  public showSuccess(): void {
    this.show1 = true;
  }

  public showLoading(): void {
    this.show2 = true;
    setTimeout(() => {
      this.show2 = false;
    }, 3000);
  }
}
