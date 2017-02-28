import { Component } from "@angular/core";

@Component({
  selector: "button-demo",
  template: `
    <div class="page js_show button">
      <div class="page__hd">
        <h1 class="page__title">Button</h1>
        <p class="page__desc">按钮</p>
      </div>
      <div class="page__bd page__bd_spacing">
        <a wx-button color="primary" label="页面主操作 Normal"></a>
        <a wx-button color="primary" [disabled]="true" label="页面主操作 Disabled"></a>
        <a wx-button color="default" label="页面次要操作 Normal"></a>
        <a wx-button color="default" [disabled]="true" label="页面次要操作 Disabled"></a>
        <a wx-button color="warn" label="警告类操作 Normal"></a>
        <a wx-button color="warn" [disabled]="true" label="警告类操作 Disabled"></a>
        <div class="button-sp-area">
          <a wx-button color="default" style="plain" label="按钮"></a>
          <a wx-button color="default" style="plain" [disabled]="true" label="按钮"></a>
          <a wx-button color="primary" style="plain" label="按钮"></a>
          <a wx-button color="primary" style="plain" [disabled]="true" label="按钮"></a>
          <a wx-button color="primary" style="mini" label="按钮"></a>
          <a wx-button color="default" style="mini" label="按钮"></a>
          <a wx-button color="warn" style="mini" label="按钮"></a>
        </div>
      </div>
      <div class="page__ft">
        <a style="cursor: pointer;" [routerLink]="['/']"><img src="./images/icon_footer_link.png"/></a>
      </div>
    </div>
  `,
})
export class ButtonDemoComponent { }
