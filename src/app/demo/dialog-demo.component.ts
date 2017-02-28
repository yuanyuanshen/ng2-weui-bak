import { Component } from "@angular/core";
import { DialogOption } from "../component/feedback/dialog.component";

@Component({
  selector: "dialog-demo",
  template: `
    <div class="page js_show">
      <div class="page__hd">
        <h1 class="page__title">Dialog</h1>
        <p class="page__desc">对话框</p>
      </div>
      <div class="page__bd page__bd_spacing">
        <a wx-button color="default" (click)="showIOSDialog1()" label="iOS Dialog样式一"></a>
        <a wx-button color="default" (click)="showIOSDialog2()" label="iOS Dialog样式二"></a>
        <a wx-button color="default" (click)="showAndroidDialog1()" label="Android Dialog样式一"></a>
        <a wx-button color="default" (click)="showAndroidDialog2()" label="Android Dialog样式二"></a>
      </div>
      <div class="page__ft">
        <a style="cursor: pointer;" [routerLink]="['/']"><img src="./images/icon_footer_link.png"/></a>
      </div>

      <div id="dialogs">
        <!--BEGIN dialog1-->
        <div wx-dialog-ios title="弹窗标题" [(display)]="d1" content="弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内" [options]="op1" (do-check)="receive1($event)"></div>
        <!--END dialog1-->
        <!--BEGIN dialog2-->
        <div wx-dialog-ios [(display)]="d2" [is-model]="false" content="弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内" [options]="op2" (do-check)="receive2($event)"></div>
        <!--END dialog2-->
        <!--BEGIN dialog3-->
        <div wx-dialog-android title="弹窗标题" [(display)]="d3" [is-model]="false" content="弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内" [options]="op1" (do-check)="receive3($event)"></div>
        <!--END dialog3-->
        <!--BEGIN dialog4-->
        <div wx-dialog-android [(display)]="d4" content="弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内" [options]="op2" (do-check)="receive4($event)"></div>
        <!--END dialog4-->
      </div>
    </div>
  `,
})
export class DialogDemoComponent {
  private d1: boolean = false;
  private d2: boolean = false;
  private d3: boolean = false;
  private d4: boolean = false;
  private op1: Array<DialogOption> = [
    {
      label: "辅助操作",
      style: "default",
      value: "secound",
    },
    {
      label: "主操作",
      style: "primary",
      value: "first",
    },
  ];
  private op2: Array<DialogOption> = [
    {
      label: "知道了",
      style: "primary",
      value: "first",
    },
  ];

  public showIOSDialog1(): void {
    this.d1 = true;
  }

  public showIOSDialog2(): void {
    this.d2 = true;
  }

  public showAndroidDialog1(): void {
    this.d3 = true;
  }

  public showAndroidDialog2(): void {
    this.d4 = true;
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

  public receive3(event): void {
    if (event) {
      alert(JSON.stringify(event));
    }
  }

  public receive4(event): void {
    if (event) {
      alert(JSON.stringify(event));
    }
  }
}
