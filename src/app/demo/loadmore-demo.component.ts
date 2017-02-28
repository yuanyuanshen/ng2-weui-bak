import { Component } from "@angular/core";

@Component({
  selector: "loadmore-demo",
  template: `
    <div class="page loadmore js_show">
      <div class="page__hd">
        <h1 class="page__title">Loadmore</h1>
        <p class="page__desc">加载更多</p>
      </div>
      <div class="page__bd">
        <div wx-loadmore>
          <i wx-icon type="loading"></i>
          <span wx-loadmore-tips tips="正在加载"></span>
        </div>
        <div wx-loadmore [with-line]="true">
          <span wx-loadmore-tips tips="暂无数据"></span>
        </div>
        <div wx-loadmore [with-line]="true" [with-dot]="true">
          <span wx-loadmore-tips></span>
        </div>
      </div>
      <div class="page__ft">
        <a style="cursor: pointer;" [routerLink]="['/']"><img src="./images/icon_footer_link.png"/></a>
      </div>
    </div>
  `,
})
export class LoadmoreDemoComponent { }
