import { Component } from "@angular/core";

@Component({
  selector: "grid-demo",
  template: `
    <div class="page js_show">
      <div class="page__hd">
        <h1 class="page__title">Grid</h1>
        <p class="page__desc">九宫格</p>
      </div>
      <div wx-grids>
        <a wx-grid [uri]="links1">
          <div wx-grid-icon [icon-url]="icon1"></div>
          <p wx-grid-label label="Grid"></p>
        </a>
        <a wx-grid [uri]="links1">
          <div wx-grid-icon [icon-url]="icon1"></div>
          <p wx-grid-label label="Grid"></p>
        </a>
        <a wx-grid [uri]="links1">
          <div wx-grid-icon [icon-url]="icon1"></div>
          <p wx-grid-label label="Grid"></p>
        </a>
        <a wx-grid [uri]="links2">
          <div wx-grid-icon [icon-url]="icon1"></div>
          <p wx-grid-label label="Grid"></p>
        </a>
        <a wx-grid [uri]="links2">
          <div wx-grid-icon [icon-url]="icon1"></div>
          <p wx-grid-label label="Grid"></p>
        </a>
        <a wx-grid [uri]="links2">
          <div wx-grid-icon [icon-url]="icon1"></div>
          <p wx-grid-label label="Grid"></p>
        </a>
        <a wx-grid [uri]="links1">
          <div wx-grid-icon [icon-url]="icon1"></div>
          <p wx-grid-label label="Grid"></p>
        </a>
        <a wx-grid [uri]="links1">
          <div wx-grid-icon [icon-url]="icon1"></div>
          <p wx-grid-label label="Grid"></p>
        </a>
        <a wx-grid [uri]="links1">
          <div wx-grid-icon [icon-url]="icon1"></div>
          <p wx-grid-label label="Grid"></p>
        </a>
      </div>
    </div>
  `,
})
export class GridDemoComponent {
  private links1: string = "http://www.baidu.com/";
  private links2: Array<string> = ["/list"];
  private icon1: string = "./images/icon_tabbar.png";
}
