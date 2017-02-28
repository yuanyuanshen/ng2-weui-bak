import { Component } from "@angular/core";

@Component({
  selector: "badge-demo",
  template: `
    <div class="page js_show">
      <div class="page__hd">
        <h1 class="page__title">Badge</h1>
        <p class="page__desc">徽章</p>
      </div>
      <div class="page__bd">
        <div wx-cells-title title="新消息提示跟摘要信息后，统一在列表右侧"></div>
        <div wx-cells>
          <a wx-cell-access>
            <div wx-cell-body>单行列表</div>
            <div wx-cell-footer style="font-size: 0">
              <span style="vertical-align:middle; font-size: 17px;">详细信息</span>
              <span wx-badge-dot></span>
            </div>
          </a>
        </div>
        <div wx-cells-title title="未读数红点跟在主题信息后，统一在列表左侧"></div>
        <div wx-cells>
          <div wx-cell>
            <div wx-cell-header [badgeLabel]="badgeLabel" [badgeColor]="badgeColor">
              <img src="images/pic_160.png" style="width: 50px;display: block"/>
            </div>
            <div wx-cell-body>
              <p>联系人名称</p>
              <p style="font-size: 13px;color: #888888;">摘要信息</p>
            </div>
          </div>
          <a wx-cell-access>
            <div wx-cell-body>
              <span style="vertical-align: middle">单行列表</span>
              <span wx-badge color="yellow">8</span>
            </div>
            <div wx-cell-footer></div>
          </a>
          <a wx-cell-access>
            <div wx-cell-body>
              <span style="vertical-align: middle">单行列表</span>
              <span wx-badge color="blue">8</span>
            </div>
            <div wx-cell-footer>详细信息</div>
          </a>
          <a wx-cell-access>
            <div wx-cell-body>
              <span style="vertical-align: middle">单行列表</span>
              <span wx-badge>New</span>
            </div>
            <div wx-cell-footer></div>
          </a>
        </div>
      </div>
      <div class="page__ft">
        <a style="cursor: pointer;" [routerLink]="['/']"><img src="./images/icon_footer_link.png"/></a>
      </div>
    </div>
  `,
})
export class BadgeDemoComponent {
  private badgeLabel: string = "8";
  private badgeColor: string = "green";
}
