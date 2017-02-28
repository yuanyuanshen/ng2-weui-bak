import { Component } from "@angular/core";

@Component({
  selector: "icon-demo",
  template: `
    <div class="page icons js_show">
      <div class="page__hd">
        <h1 class="page__title">Icons</h1>
        <p class="page__desc">图标</p>
      </div>
      <div class="page__bd page__bd_spacing">
        <div class="icon-box">
          <i wx-icon type="success" size="large"></i>
          <div class="icon-box__ctn">
            <h3 class="icon-box__title">成功</h3>
            <p class="icon-box__desc">用于表示操作顺利达成</p>
          </div>
        </div>
        <div class="icon-box">
          <i wx-icon type="info" size="large"></i>
          <div class="icon-box__ctn">
            <h3 class="icon-box__title">提示</h3>
            <p class="icon-box__desc">用于表示信息提示；也常用于缺乏条件的操作拦截，提示用户所需信息</p>
          </div>
        </div>
        <div class="icon-box">
          <i wx-icon type="warn-normal"></i>
          <div class="icon-box__ctn">
            <h3 class="icon-box__title">普通警告</h3>
            <p class="icon-box__desc">用于表示操作后将引起一定后果的情况</p>
          </div>
        </div>
        <div class="icon-box">
          <i wx-icon type="warn" size="large"></i>
          <div class="icon-box__ctn">
            <h3 class="icon-box__title">强烈警告</h3>
            <p class="icon-box__desc">用于表示操作后将引起严重的不可挽回的后果的情况</p>
          </div>
        </div>
        <div class="icon-box">
          <i wx-icon type="waiting" size="large"></i>
          <div class="icon-box__ctn">
            <h3 class="icon-box__title">等待</h3>
            <p class="icon-box__desc">用于表示等待</p>
          </div>
        </div>
        <div class="icon_sp_area">
          <i wx-icon type="success" size="small"></i>
          <i wx-icon type="success-circle" size="small"></i>
          <i wx-icon type="success-no-circle" size="small"></i>
          <i wx-icon type="circle" size="small"></i>
          <i wx-icon type="warn" size="small"></i>
          <i wx-icon type="download" size="small"></i>
          <i wx-icon type="waiting" size="small"></i>
          <i wx-icon type="waiting-circle" size="small"></i>
          <i wx-icon type="info" size="small"></i>
          <i wx-icon type="info-circle" size="small"></i>
          <i wx-icon type="cancel" size="small"></i>
          <i wx-icon type="search" size="small"></i>
          <i wx-icon type="clear" size="small"></i>
          <i wx-icon type="delete" size="small"></i>
          <i wx-icon type="gallery-delete"></i>
          <i wx-icon type="loading"></i>
        </div>
      </div>
      <div class="page__ft">
        <a style="cursor: pointer;" [routerLink]="['/']"><img src="./images/icon_footer_link.png"/></a>
      </div>
    </div>
  `,
})
export class IconDemoComponent { }
