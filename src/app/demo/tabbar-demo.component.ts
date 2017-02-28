import { Component } from "@angular/core";
import { TabMenu } from "../component/nav/nav.component";

@Component({
  selector: "tabbar-demo",
  template: `
    <div class="page js_show">
      <div class="page__bd" style="height: 100%;">
        <div wx-tabbar [menus]="menus" (on-select)="doSelect($event)"></div>
      </div>
    </div>
  `,
})
export class TabbarDemoComponent {
  private menus: Array<TabMenu> = [
    {
      active: true,
      label: "微信",
      value: "s1",
      imageUrl: "./images/icon_tabbar.png",
      badgeLabel: "8",
    },
    {
      active: false,
      label: "通讯簿",
      value: "s2",
      imageUrl: "./images/icon_tabbar.png",
    },
    {
      active: false,
      label: "发现",
      value: "s3",
      imageUrl: "./images/icon_tabbar.png",
      badgeColor: "green",
    },
    {
      active: false,
      label: "我",
      value: "s4",
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
