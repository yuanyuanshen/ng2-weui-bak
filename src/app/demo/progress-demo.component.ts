import { Component } from "@angular/core";

@Component({
  selector: "progress-demo",
  template: `
    <div class="page js_show">
      <div class="page__hd">
        <h1 class="page__title">Progress</h1>
        <p class="page__desc">进度条</p>
      </div>
      <div class="page__bd page__bd_spacing">
        <div wx-progress>
          <div wx-progress-bar [max]="max" [value]="c1"></div>
          <a wx-progress-operate (click)="doCancel(1)">
            <i wx-icon type="cancel" size="small"></i>
          </a>
        </div>
        <br>
        <div wx-progress>
          <div wx-progress-bar [max]="max" [value]="c2"></div>
          <a wx-progress-operate (click)="doCancel(2)">
            <i wx-icon type="cancel" size="small"></i>
          </a>
        </div>
        <br>
        <div wx-progress>
          <div wx-progress-bar [max]="max" [value]="c3"></div>
          <a wx-progress-operate (click)="doCancel(3)">
            <i wx-icon type="cancel" size="small"></i>
          </a>
        </div>
        <div wx-button-area>
          <a wx-button type="normal" color="primary" label="上传"></a>
        </div>
      </div>
      <div class="page__ft">
        <a style="cursor: pointer;" [routerLink]="['/']"><img src="./images/icon_footer_link.png"/></a>
      </div>
    </div>
  `,
})
export class ProgressDemoComponent {
  private max: number = 100;
  private c1: number = 0;
  private c2: number = 50;
  private c3: number = 80;

  public doCancel(key: any): void {
    if (key === 1) {
      this.c1 = 0;
    } else if (key === 2) {
      this.c2 = 0;
    } else if (key === 3) {
      this.c3 = 0;
    }
  }
}
