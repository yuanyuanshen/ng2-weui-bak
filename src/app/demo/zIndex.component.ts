import { Component, OnInit } from "@angular/core";

@Component({
  selector: "z-index",
  template: `
    <div class="page layers js_show">
      <div class="page__hd">
        <div class="j_info page__info" data-for="normal">
          <h2 class="page__title">WeUI页面层级</h2>
          <p class="page__desc">用于规范WeUI页面元素所属层级、层级顺序及组合规范。</p>
        </div>
        <div class="j_info page__info" data-for="popout" style="display:none">
          <h2 class="page__title">Popout</h2>
          <p class="page__desc">弹出层，作为内容层和导航层的补充，用于承载弹窗通知、操作菜单、菜单、成功或加载中等状态的Toast，表单报错提示等弹出内容。</p>
        </div>
        <div class="j_info page__info" data-for="mask" style="display:none">
          <h2 class="page__title">Mask</h2>
          <p class="page__desc">蒙层，配合Popout层使用，用于锁定内容层和导航层操作，不单独使用。</p>
        </div>
        <div class="j_info page__info" data-for="navigation" style="display:none">
          <h2 class="page__title">Navigation</h2>
          <p class="page__desc">导航层，位于内容层之上，在用户滑动内容层时可保持位置不动，通常用于承载导航栏等需要固定在页面的元素。</p>
        </div>
        <div class="j_info page__info" data-for="content" style="display:none">
          <h2 class="page__title">Content</h2>
          <p class="page__desc">内容层，承载页面主要内容。</p>
        </div>
      </div>
      <div class="page__bd">
        <div class="layers j_layers">
          <div data-name="popout" class="j_pic j_layer layers__layer layers__layer_popout" [ngClass]="{ 'j_pic': flag, 'j_transform': !flag }">
            <span>Popout</span>
          </div>
          <div data-name="mask" class="j_pic j_layer layers__layer layers__layer_mask" [ngClass]="{ 'j_pic': flag, 'j_transform': !flag }">
            <span>Mask</span>
          </div>
          <div data-name="navigation" class="j_pic j_layer layers__layer layers__layer_navigation" [ngClass]="{ 'j_pic': flag, 'j_transform': !flag }">
            <span>Navigation</span>
          </div>
          <div data-name="content" class="j_pic j_layer layers__layer layers__layer_content" [ngClass]="{ 'j_pic': flag, 'j_transform': !flag }">
            <span>Content</span>
          </div>
        </div>
      </div>
      <div class="page__ft">
        <a style="cursor: pointer;" [routerLink]="['/']"><img src="./images/icon_footer_link.png"/></a>
      </div>
    </div>
  `,
})
export class ZIndexComponent implements OnInit {
  private flag: boolean = true;
  public ngOnInit(): void {
    setTimeout(() => {
      this.flag = false;
    }, 1000);
  }
}
