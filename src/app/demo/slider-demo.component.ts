import { Component } from "@angular/core";

@Component({
  selector: "slider-demo",
  template: `
    <div class="page searchbar js_show">
      <div class="page__hd">
        <h1 class="page__title">Slider</h1>
        <p class="page__desc">滑块</p>
      </div>
      <div class="page__bd page__bd_spacing">
        <div wx-slider [max]="max" [(value)]="value"></div>
        <br/>
        <div wx-slider-box>
          <div wx-slider [max]="max2" [(value)]="value2"></div>
          <div wx-slider-box-value>{{value2/max2 | percent: '1.0-0'}}</div>
        </div>
      </div>
      <div class="page__ft">
        <a style="cursor: pointer;" [routerLink]="['/']"><img src="./images/icon_footer_link.png"/></a>
      </div>
    </div>
  `,
})
export class SliderDemoComponent {
  private max: number = 10;
  private value: number = 0;
  private max2: number = 10;
  private value2: number = 5;
}
