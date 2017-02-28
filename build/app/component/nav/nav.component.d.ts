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
export declare class WxNavbarComponent {
    private menus;
    private onSelect;
    private doSwitch(selectMenu);
}
/**
 * WeUI 底部导航标签组件
 * @class                            WxTabbarComponent
 * @property {Array<TabMenu>}        WxTabbarComponent.menus     - 输入参数: 选项定义对象数组
 * @property {EventEmitter<TabMenu>} WxTabbarComponent.onSelect  - 输出参数: 确认选择
 * @event                            WxTabbarComponent#on-select
 */
export declare class WxTabbarComponent {
    private menus;
    private onSelect;
    private doSwitch(selectMenu);
}
