import { Component, Input, Output, EventEmitter } from "@angular/core";
import { BadgeColorType } from "../layout/badge.component";

/**
 * Tab 菜单项定义
 * @property {string}          TabMenu.label      - 标签
 * @property {string}          TabMenu.value      - 显示值
 * @property {boolean}         TabMenu.active     - 是否显示为活动
 * @property {string}          TabMenu.imageUrl   - 标签图片URL (optional)
 * @property {string}          TabMenu.badgeLabel - 标签徽章内容 (optional)
 * @property {BadgeColorType}  TabMenu.badgeColor - 标签徽章背景色 (optional)
 */
export interface TabMenu {
  label: string;
  value: string;
  active: boolean;
  imageUrl?: string;
  badgeLabel?: string;
  badgeColor?: BadgeColorType;
}

/**
 * WeUI 顶部导航标签组件
 * @class                            WxNavbarComponent
 * @property {Array<TabMenu>}        WxNavbarComponent.menus     - 输入参数: 选项定义对象数组
 * @property {EventEmitter<TabMenu>} WxNavbarComponent.onSelect  - 输出参数: 确认选择
 * @event                            WxNavbarComponent#on-select
 */
@Component({
  host: {
    "class": "weui-tab",
  },
  selector: "div[wx-navbar]",
  template: `
    <div class="weui-navbar">
      <div class="weui-navbar__item" style="cursor: pointer;" *ngFor="let menu of menus" [ngClass]="{'weui-bar__item_on': menu.active}" (click)="doSwitch(menu)">
        {{menu.label}}
      </div>
    </div>
    <div class="weui-tab__panel"></div>
  `,
})
export class WxNavbarComponent {
  @Input()
  private menus: Array<TabMenu>;
  @Output("on-select")
  private onSelect: EventEmitter<TabMenu> = new EventEmitter();

  private doSwitch(selectMenu: TabMenu): void {
    this.menus.forEach((menu, index) => {
      if (menu.value === selectMenu.value) {
        this.menus[index].active = true;
      } else {
        this.menus[index].active = false;
      }
    });
    this.onSelect.emit(selectMenu);
  }
}

/**
 * WeUI 底部导航标签组件
 * @class                            WxTabbarComponent
 * @property {Array<TabMenu>}        WxTabbarComponent.menus     - 输入参数: 选项定义对象数组
 * @property {EventEmitter<TabMenu>} WxTabbarComponent.onSelect  - 输出参数: 确认选择
 * @event                            WxTabbarComponent#on-select
 */
@Component({
  host: {
    "class": "weui-tab",
  },
  selector: "div[wx-tabbar]",
  template: `
    <div class="weui-tab__panel"></div>
    <div class="weui-tabbar">
      <div class="weui-tabbar__item" style="cursor: pointer;" *ngFor="let menu of menus" [ngClass]="{'weui-bar__item_on': menu.active}" (click)="doSwitch(menu)">
        <span *ngIf="menu.badgeLabel || menu.badgeColor" style="display: inline-block;position: relative;">
          <img [src]="menu.imageUrl" alt="" class="weui-tabbar__icon">
          <span wx-badge *ngIf="menu.badgeLabel && menu.badgeLabel.trim().length > 0" [color]="menu.badgeColor" style="position: absolute;top: -2px;right: -17px;">{{menu.badgeLabel}}</span>
          <span wx-badge-dot *ngIf="!menu.badgeLabel || menu.badgeLabel.trim().length === 0" [color]="menu.badgeColor" style="position: absolute;top: 0;right: -10px;"></span>
        </span>
        <img [src]="menu.imageUrl" *ngIf="!menu.badgeLabel && !menu.badgeColor" alt="" class="weui-tabbar__icon">
        <p class="weui-tabbar__label">{{menu.label}}</p>
      </div>
    </div>
  `,
})
export class WxTabbarComponent {
  @Input()
  private menus: Array<TabMenu>;
  @Output("on-select")
  private onSelect: EventEmitter<TabMenu> = new EventEmitter();

  private doSwitch(selectMenu: TabMenu): void {
    this.menus.forEach((menu, index) => {
      if (menu.value === selectMenu.value) {
        this.menus[index].active = true;
      } else {
        this.menus[index].active = false;
      }
    });
    this.onSelect.emit(selectMenu);
  }
}
