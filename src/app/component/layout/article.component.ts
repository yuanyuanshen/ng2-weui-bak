import { Component } from "@angular/core";

/**
 * WeUI 文章布局组件
 * @class WxArticleComponent
 */
@Component({
  host: {
    "class": "weui-article",
  },
  selector: "article[wx-article]",
  template: `
    <ng-content></ng-content>
  `,
})
export class WxArticleComponent { }
