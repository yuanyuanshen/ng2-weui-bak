import { Component } from "@angular/core";

/**
 * WeUI Flex组件
 * @class WxFlexComponent
 */
@Component({
  host: {
    "class": "weui-flex",
  },
  selector: "div[wx-flex]",
  template: `
    <ng-content select="[wx-flex-item],div"></ng-content>
  `,
})
export class WxFlexComponent { }

/**
 * WeUI Flex元素组件
 * @class WxFlexItemComponent
 */
@Component({
  host: {
    "class": "weui-flex__item",
  },
  selector: "div[wx-flex-item]",
  template: `
    <ng-content></ng-content>
  `,
})
export class WxFlexItemComponent { }
