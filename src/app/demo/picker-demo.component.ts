import { Component } from "@angular/core";

@Component({
  selector: "picker-demo",
  template: `
    <div class="page actionsheet js_show">
      <div class="page__hd">
        <h1 class="page__title">Picker</h1>
        <p class="page__desc">多列选择器，日期控件</p>
      </div>
      <div class="page__bd page__bd_spacing">
        <a wx-button color="default" (click)="showDatePicker()" label="日期选择器"></a>
      </div>
      <!--BEGIN picker-->
      <div wx-datepicker [(display)]="showDate" (do-check)="receiveDate($event)"></div>
      <!--END picker-->
      <div class="page__ft">
        <a style="cursor: pointer;" [routerLink]="['/']"><img src="./images/icon_footer_link.png"/></a>
      </div>
    </div>
  `,
})
export class PickerDemoComponent {
  private showDate: boolean = false;
  // private menu1: Array<ActionsheetItem> = [
  //   {
  //     label: "同意",
  //     value: "agree",
  //   },
  //   {
  //     label: "拒绝",
  //     value: "reject",
  //   },
  // ];
  // private menu2: Array<ActionsheetItem> = [
  //   {
  //     label: "同意",
  //     value: "agree",
  //   },
  //   {
  //     label: "拒绝",
  //     value: "reject",
  //   },
  // ];

  public showDatePicker(): void {
    this.showDate = true;
  }

  public receiveDate(event): void {
    if (event) {
      alert(JSON.stringify(event));
    }
  }
}
