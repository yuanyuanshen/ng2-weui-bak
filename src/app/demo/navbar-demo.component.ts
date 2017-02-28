import { Component } from "@angular/core";
import { TabMenu } from "../component/nav/nav.component";

@Component({
  selector: "navbar-demo",
  template: `
    <div class="page js_show">
      <div class="page__bd" style="height: 100%;">
        <div wx-navbar [menus]="menus" (on-select)="doSelect($event)"></div>
      </div>
    </div>
  `,
})
export class NavbarDemoComponent {
  private menus: Array<TabMenu> = [
    {
      active: true,
      label: "选项一",
      value: "s1",
      imageUrl: "./images/icon_tabbar.png",
    },
    {
      active: false,
      label: "选项二",
      value: "s2",
      imageUrl: "./images/icon_tabbar.png",
    },
    {
      active: false,
      label: "选项三",
      value: "s3",
      imageUrl: "./images/icon_tabbar.png",
    },
  ];

  public doSelect(event: TabMenu): void {
    alert(JSON.stringify(event));
    this.menus.forEach((menu, index) => {
      if (menu.value === event.value) {
        this.menus[index].active = true;
      } else {
        this.menus[index].active = false;
      }
    });
  }
}
