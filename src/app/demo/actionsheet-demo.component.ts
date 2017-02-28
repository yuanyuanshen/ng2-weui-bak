import { Component } from "@angular/core";
import { ActionsheetItem } from "../component/feedback/actionsheet.component";

@Component({
  selector: "actionsheet-demo",
  template: `
    <div class="page actionsheet js_show">
      <div class="page__hd">
        <h1 class="page__title">ActionSheet</h1>
        <p class="page__desc">弹出式菜单</p>
      </div>
      <div class="page__bd page__bd_spacing">
        <a wx-button color="default" (click)="showIOS()" label="iOS ActionSheet"></a>
        <a wx-button color="default" (click)="showAndroid()" label="Android ActionSheet"></a>
      </div>
      <!--BEGIN actionSheet-->
      <div wx-actionsheet-ios [(display)]="show1" [menus]="menu1" (do-check)="receive1($event)"></div>

      <div wx-actionsheet-android [(display)]="show2" [menus]="menu2" (do-check)="receive2($event)"></div>
      <!--END actionSheet-->
      <div class="page__ft">
        <a style="cursor: pointer;" [routerLink]="['/']"><img src="./images/icon_footer_link.png"/></a>
      </div>
    </div>
  `,
})
export class ActionsheetDemoComponent {
  private show1: boolean = false;
  private show2: boolean = false;
  private menu1: Array<ActionsheetItem> = [
    {
      label: "同意",
      value: "agree",
    },
    {
      label: "拒绝",
      value: "reject",
    },
  ];
  private menu2: Array<ActionsheetItem> = [
    {
      label: "同意",
      value: "agree",
    },
    {
      label: "拒绝",
      value: "reject",
    },
  ];

  public showIOS(): void {
    this.show1 = true;
  }

  public showAndroid(): void {
    this.show2 = true;
  }

  public receive1(event): void {
    if (event) {
      alert(JSON.stringify(event));
    }
  }

  public receive2(event): void {
    if (event) {
      alert(JSON.stringify(event));
    }
  }
}
