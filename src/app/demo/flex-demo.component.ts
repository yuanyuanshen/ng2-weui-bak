import { Component } from "@angular/core";

@Component({
  selector: "flex-demo",
  template: `
    <div class="page flex js_show">
      <div class="page__hd">
        <h1 class="page__title">Flex</h1>
        <p class="page__desc">Flex布局</p>
      </div>
      <div class="page__bd page__bd_spacing">
        <div wx-flex>
          <div wx-flex-item>
            <div class="placeholder">weui</div>
          </div>
        </div>
        <div wx-flex>
          <div wx-flex-item>
            <div class="placeholder">weui</div>
          </div>
          <div wx-flex-item>
            <div class="placeholder">weui</div>
          </div>
        </div>
        <div wx-flex>
          <div wx-flex-item>
            <div class="placeholder">weui</div>
          </div>
          <div wx-flex-item>
            <div class="placeholder">weui</div>
          </div>
          <div wx-flex-item>
            <div class="placeholder">weui</div>
          </div>
        </div>
        <div wx-flex>
          <div wx-flex-item>
            <div class="placeholder">weui</div>
          </div>
          <div wx-flex-item>
            <div class="placeholder">weui</div>
          </div>
          <div wx-flex-item>
            <div class="placeholder">weui</div>
          </div>
          <div wx-flex-item>
            <div class="placeholder">weui</div>
          </div>
        </div>
        <div wx-flex>
          <div>
            <div class="placeholder">weui</div>
          </div>
          <div wx-flex-item>
            <div class="placeholder">weui</div>
          </div>
          <div>
            <div class="placeholder">weui</div>
          </div>
        </div>
      </div>
      <div class="page__ft">
        <a style="cursor: pointer;" [routerLink]="['/']"><img src="./images/icon_footer_link.png"/></a>
      </div>
    </div>
  `,
})
export class FlexDemoComponent { }
